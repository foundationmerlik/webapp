import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from "@/lib/db";
import { formSubmissions } from "@/lib/db/schema";
import { v4 as uuidv4 } from "uuid";

const FOUNDATION_EMAILS = [
    "foundationmerlik@gmail.com",
    "info@merlikfoundation.org",
];

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

function baseTemplate(content: string, accentColor: string = "#D4AF37"): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#f9f9f7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f7;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:32px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.05);border:1px solid #f0f0e8;">
        <tr>
          <td style="background:#111111;padding:50px 40px;text-align:center;">
            <img src="https://webapp-wr2z.vercel.app/logo_white.png" alt="Merlik Foundation" height="52" style="display:block;margin:0 auto;"/>
            <p style="color:${accentColor};font-size:10px;font-weight:800;letter-spacing:0.4em;text-transform:uppercase;margin:20px 0 0;">Restoring Purpose to Men</p>
          </td>
        </tr>
        <tr>
          <td style="padding:50px 40px;">
            ${content}
          </td>
        </tr>
        <tr>
          <td style="padding:40px;background:#fcfcfb;text-align:center;border-top:1px solid #f0f0e8;">
            <img src="https://webapp-wr2z.vercel.app/logo_black.png" alt="Merlik" height="24" style="opacity:0.2;margin-bottom:20px;"/>
            <p style="color:#999;font-size:12px;margin:0;">&copy; 2026 Merlik Foundation. Nairobi, Kenya.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
    try {
        const { name, email, phone, message, type } = await req.json();

        const types: any = {
            volunteer: { title: "Volunteer Request", color: "#D4AF37", icon: "🤝" },
            internship: { title: "Internship Application", color: "#4A90E2", icon: "📚" },
            mentor: { title: "Mentor Application", color: "#7ED321", icon: "💎" },
        };

        const config = types[type] || { title: "Support Request", color: "#D4AF37", icon: "✨" };

        // 0. Log to DB
        await db.insert(formSubmissions).values({
            id: uuidv4(),
            type: type as any,
            name,
            email,
            phone,
            message,
            status: "pending"
        });

        const adminMailOptions = {
            from: process.env.SMTP_FROM,
            to: FOUNDATION_EMAILS,
            subject: `${config.icon} New ${config.title}: ${name}`,
            html: baseTemplate(`
                <div style="margin-bottom:32px;">
                    <span style="background:${config.color}20;color:${config.color};font-size:11px;font-weight:800;padding:6px 14px;border-radius:100px;text-transform:uppercase;letter-spacing:1px;">New Submission</span>
                    <h1 style="font-size:28px;font-weight:900;color:#111;margin:16px 0 8px;">${config.title}</h1>
                    <p style="color:#666;margin:0;">Received from the Merlik Support Hub.</p>
                </div>
                <table width="100%" style="margin-bottom:32px;">
                    <tr><td style="padding:12px 0;border-bottom:1px solid #eee;"><span style="color:#999;font-size:11px;font-weight:800;text-transform:uppercase;">Name</span></td><td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:700;color:#111;">${name}</td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid #eee;"><span style="color:#999;font-size:11px;font-weight:800;text-transform:uppercase;">Email</span></td><td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:600;color:#111;">${email}</td></tr>
                    <tr><td style="padding:12px 0;border-bottom:1px solid #eee;"><span style="color:#999;font-size:11px;font-weight:800;text-transform:uppercase;">Phone</span></td><td style="padding:12px 0;border-bottom:1px solid #eee;font-weight:600;color:#111;">${phone}</td></tr>
                </table>
                <div style="background:#f9f9f7;padding:30px;border-radius:20px;border:1px solid #eee;">
                    <p style="color:#999;font-size:11px;font-weight:800;text-transform:uppercase;margin:0 0 12px;">Message / Motivation</p>
                    <p style="color:#333;font-size:16px;line-height:1.7;margin:0;">${message}</p>
                </div>
            `, config.color),
        };

        const senderMailOptions = {
            from: process.env.SMTP_FROM,
            to: email,
            subject: `We've received your ${type} request ✦`,
            html: baseTemplate(`
                <h1 style="font-size:32px;font-weight:900;color:#111;margin:0 0 20px;">Hello ${name},</h1>
                <p style="font-size:16px;line-height:1.8;color:#555;margin-bottom:30px;">
                    Thank you for reaching out to the Merlik Foundation regarding our <strong>${type} program</strong>. We are thrilled to see your interest in helping us shape the next generation of leaders in Kenya.
                </p>
                <div style="background:${config.color}08;border-left:4px solid ${config.color};padding:25px;border-radius:12px;margin-bottom:30px;">
                    <p style="color:#111;font-weight:700;margin:0 0 8px;">What's next?</p>
                    <p style="color:#666;font-size:15px;line-height:1.6;margin:0;">Our team is reviewing your application. You can expect to hear from us within <strong>3-5 business days</strong> to discuss the next steps.</p>
                </div>
                <p style="color:#888;font-size:14px;">In mission,<br/><strong style="color:#111;">The Merlik Foundation Team</strong></p>
            `, config.color),
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(senderMailOptions)
        ]);

        return NextResponse.json({ message: 'Sent' }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
