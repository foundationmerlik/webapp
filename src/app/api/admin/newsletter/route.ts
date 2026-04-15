import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribers, newsletterCampaigns } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const subs = await db.select().from(newsletterSubscribers);
  const campaigns = await db.select().from(newsletterCampaigns);

  return NextResponse.json({ subs, campaigns });
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const { subject, content } = await request.json();

    const subs = await db.select({ email: newsletterSubscribers.email }).from(newsletterSubscribers);
    const emails = subs.map(s => s.email);

    if (emails.length === 0) {
        return NextResponse.json({ message: "No subscribers found" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const newsletterTemplate = `
      <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background: #fff; border: 1px solid #eee; border-radius: 24px; overflow: hidden;">
        <div style="background: #231F20; padding: 40px; text-align: center;">
            <img src="https://webapp-wr2z.vercel.app/logo_white.png" alt="Merlik Foundation" style="height: 32px; width: auto;">
        </div>
        <div style="padding: 50px;">
            <h1 style="color: #231F20; font-size: 28px; font-weight: 900; margin-bottom: 24px; line-height: 1.2;">${subject}</h1>
            <div style="color: #444; line-height: 1.8; font-size: 16px; font-weight: 500;">
                ${content.replace(/\n/g, '<br>')}
            </div>
            <div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid #eee; text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="display: inline-block; background: #D4AF37; color: #231F20; padding: 16px 36px; border-radius: 50px; text-decoration: none; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Visit Website</a>
            </div>
        </div>
        <div style="background: #F9FAFB; padding: 40px; text-align: center;">
            <p style="color: #888; font-size: 12px; margin-bottom: 8px;">Developing Nations, One Boy at a Time</p>
            <p style="color: #888; font-size: 12px;">© 2026 Merlik Foundation. Nairobi, Kenya.</p>
            <p style="margin-top: 20px;"><a href="#" style="color: #D4AF37; text-decoration: underline; font-size: 11px;">Unsubscribe</a></p>
        </div>
      </div>
    `;

    // In a real production app, you'd use a service like SendGrid or Resend to batch send
    // For now, we'll use Bcc to send to multiple recipients at once via SMTP
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      bcc: emails,
      subject: subject,
      html: newsletterTemplate,
    });

    // Log the campaign
    await db.insert(newsletterCampaigns).values({
        id: uuidv4(),
        subject,
        content,
        sentBy: session.user.id
    });

    // Activity Audit Log
    const { logActivity } = await import("@/lib/audit");
    await logActivity(session.user.id, session.user.email, "SEND_NEWSLETTER", `Subject: ${subject}`);

    return NextResponse.json({ message: `Newsletter sent to ${emails.length} subscribers` });
  } catch (error) {
    console.error("Newsletter Send Error:", error);
    return NextResponse.json(
      { message: "Failed to send newsletter" },
      { status: 500 }
    );
  }
}
