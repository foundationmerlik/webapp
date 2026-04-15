import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { donations } from "@/lib/db/schema";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const newDonation = {
      id: uuidv4(),
      donorName: data.donorName,
      donorEmail: data.donorEmail,
      amount: data.amount,
      currency: "KES",
      reference: data.reference,
      status: data.status || "success",
    };

    await db.insert(donations).values(newDonation);

    // Send Thank You Email
    try {
        const { sendDonationEmail } = await import("@/lib/email");
        await sendDonationEmail({
            to: newDonation.donorEmail,
            donorName: newDonation.donorName,
            amount: newDonation.amount,
            currency: newDonation.currency,
            reference: newDonation.reference,
        });
    } catch (emailErr) {
        console.error("Donation thank you email failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Donation log error:", error);
    return NextResponse.json({ error: "Failed to log donation" }, { status: 500 });
  }
}
