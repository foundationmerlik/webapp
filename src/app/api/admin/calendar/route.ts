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
    return NextResponse.json(newEvent);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error creating event" }, { status: 500 });
  }
}
