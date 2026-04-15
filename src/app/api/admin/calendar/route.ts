import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { events } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import { v4 as uuidv4 } from "uuid";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const allEvents = await db.select().from(events).orderBy(events.date);
    return NextResponse.json(allEvents);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching events" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const data = await request.json();
    
    const newEvent = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      date: new Date(data.date),
      location: data.location,
      type: (data.type || "other") as "outreach" | "mentorship" | "fundraiser" | "other",
    };

    await db.insert(events).values(newEvent);

    // Activity Log
    const { logActivity } = await import("@/lib/audit");
    await logActivity(session.user.id, session.user.email, "CREATE_EVENT", `Title: ${newEvent.title}`);

    return NextResponse.json(newEvent);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error creating event" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
    try {
      const session = await getSession();
      if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  
      const { searchParams } = new URL(request.url);
      const id = searchParams.get("id");
      
      if (!id) return NextResponse.json({ message: "Event ID required" }, { status: 400 });
  
      await db.delete(events).where(eq(events.id, id));

      // Activity Log
      const { logActivity } = await import("@/lib/audit");
      await logActivity(session.user.id, session.user.email, "DELETE_EVENT", `Event ID: ${id}`);

      return NextResponse.json({ message: "Event deleted successfully" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error deleting event" }, { status: 500 });
    }
}
