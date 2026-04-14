import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { email, name, password, role } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: uuidv4(),
      email: email.toLowerCase(),
      name: name,
      password: hashedPassword,
      role: (role || "staff") as "admin" | "staff",
    };

    await db.insert(users).values(newUser);

    // Send Email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailTemplate = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #eee; border-radius: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://webapp-wr2z.vercel.app/logo_black.png" alt="Merlik Foundation" style="height: 40px; width: auto;">
        </div>
        <h2 style="color: #231F20; font-size: 24px; font-weight: 900; text-align: center;">Welcome to the Team!</h2>
        <p style="color: #444; line-height: 1.6; font-size: 16px;">
          Hello ${name},<br><br>
          You have been added as a <strong>${role}</strong> to the Merlik Foundation Staff Portal. You can now log in to manage our digital presence, programs, and community engagement.
        </p>
        <div style="background: #FDFAF3; padding: 30px; border-radius: 15px; margin: 30px 0; border: 1px dashed #D4AF37;">
          <p style="margin: 0; color: #D4AF37; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Your Credentials</p>
          <p style="margin: 15px 0 5px 0; color: #231F20;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 0; color: #231F20;"><strong>Temporary Password:</strong> ${password}</p>
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/login" style="background: #D4AF37; color: #231F20; padding: 15px 35px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block;">Login to Dashboard</a>
        </div>
        <p style="color: #888; font-size: 12px; text-align: center; margin-top: 40px;">
          Please change your password after your first login for security reasons.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Welcome to Merlik Foundation Team - Staff Access",
      html: emailTemplate,
    });

    return NextResponse.json({ message: "Staff member added and email sent" });
  } catch (error) {
    console.error("Add Staff Error:", error);
    return NextResponse.json(
      { message: "Failed to add staff member" },
      { status: 500 }
    );
  }
}

export async function GET() {
    const session = await getSession();
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const allUsers = await db.select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
        createdAt: users.createdAt
    }).from(users);

    return NextResponse.json(allUsers);
}
