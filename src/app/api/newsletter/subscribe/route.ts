import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribers } from "@/lib/db/schema";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

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

      // Send Confirmation Email - Independent try/catch to prevent 500 on email service failure
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Merlik Foundation" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Welcome to Merlik Foundation Newsletter! 🌓",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.6; background-color: #f9f9f9; padding: 20px; }
                    .container { max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 24px; border: 1px solid #f0f0f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                    .header { text-align: center; margin-bottom: 40px; }
                    .content { font-size: 16px; text-align: center; }
                    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #f0f0f0; font-size: 12px; color: #999; text-align: center; }
                    .gold { color: #D4AF37; font-weight: bold; }
                    .button { background-color: #D4AF37; color: #ffffff !important; padding: 16px 32px; text-decoration: none; border-radius: 50px; display: inline-block; font-weight: bold; margin-top: 30px; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3); }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2 style="font-family: serif; font-weight: 900; letter-spacing: -1px; margin: 0;">MERLIK FOUNDATION</h2>
                        <p style="color: #D4AF37; text-transform: uppercase; letter-spacing: 2px; font-size: 10px; font-weight: bold; margin-top: 5px;">Developing Nations, One Boy at a Time</p>
                    </div>
                    <div class="content">
                        <h1 style="font-family: serif; font-size: 28px; line-height: 1.2; margin-bottom: 20px;">Welcome to the <br><span class="gold">Merlik Movement</span>!</h1>
                        <p>Thank you for subscribing to our newsletter. You are now part of a community dedicated to restoring purpose and order to the hearts of young men across Kenya.</p>
                        <p>From now on, you'll receive stories of transformation, impact reports, and exclusive updates on our programmes directly in your inbox.</p>
                        <p>We are excited to have you with us as we develop nations, one boy at a time.</p>
                        <a href="https://webapp-wr2z.vercel.app/about" class="button">Discover Our Impact</a>
                    </div>
                    <div class="footer">
                        <p>© 2026 Merlik Foundation. Nairobi, Kenya.</p>
                        <p>You received this email because you subscribed on our website.</p>
                    </div>
                </div>
            </body>
            </html>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Newsletter Confirmation Email Error:", emailError);
        // We do not throw here so the DB success is still returned to the user
      }

    } catch (dbErr: any) {
        // Handle duplicate email
        if (dbErr.message.includes("UNIQUE") || dbErr.message.includes("constraint failed")) {
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
