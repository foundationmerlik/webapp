import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribers } from "@/lib/db/schema";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    try {
      await db.insert(newsletterSubscribers).values({
        id: uuidv4(),
        email: email.toLowerCase(),
      });
    } catch (dbErr: any) {
        // Handle duplicate email
        if (dbErr.message.includes("UNIQUE")) {
            return NextResponse.json({ message: "You are already subscribed!" });
        }
        throw dbErr;
    }

    return NextResponse.json({ message: "Thank you for subscribing!" });
  } catch (error) {
    console.error("Subscription Error:", error);
    return NextResponse.json(
      { message: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
