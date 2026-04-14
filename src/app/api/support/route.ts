import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, message, type } = await req.json();

        // Type definitions for branding
        const types: any = {
            volunteer: { title: "Volunteer Request", color: "#D4AF37" },
            internship: { title: "Internship Application", color: "#4A90E2" },
            mentor: { title: "Mentor Application", color: "#7ED321" },
        };

        const config = types[type] || { title: "Support Request", color: "#D4AF37" };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const logoUrl = "https://merlikfoundation.org/logo_black.png"; // Placeholder for actual logo URL if available

        // 1. Email to the Foundation
        const adminMailOptions = {
            from: process.env.SMTP_FROM,
            to: ['foundationmerlik@gmail.com', 'info@merlikfoundation.org'],
            subject: `New ${config.title}: ${name}`,
            html: `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div style="background-color: ${config.color}; padding: 40px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-family: 'Playfair Display', serif; font-size: 28px;">${config.title}</h1>
                    </div>
                    <div style="padding: 40px; background-color: white;">
                        <div style="margin-bottom: 30px;">
                            <p style="text-transform: uppercase; font-size: 10px; font-weight: 800; letter-spacing: 2px; color: #999; margin-bottom: 5px;">Applicant Name</p>
                            <p style="font-size: 18px; font-weight: 700; color: #111; margin: 0;">${name}</p>
                        </div>
                        <div style="margin-bottom: 30px;">
                            <p style="text-transform: uppercase; font-size: 10px; font-weight: 800; letter-spacing: 2px; color: #999; margin-bottom: 5px;">Email Address</p>
                            <p style="font-size: 16px; font-weight: 500; color: #111; margin: 0;">${email}</p>
                        </div>
                        <div style="margin-bottom: 30px;">
                            <p style="text-transform: uppercase; font-size: 10px; font-weight: 800; letter-spacing: 2px; color: #999; margin-bottom: 5px;">Phone Number</p>
                            <p style="font-size: 16px; font-weight: 500; color: #111; margin: 0;">${phone}</p>
                        </div>
                        <div style="background-color: #f9f9f9; padding: 25px; border-radius: 15px; border: 1px solid #eee;">
                            <p style="text-transform: uppercase; font-size: 10px; font-weight: 800; letter-spacing: 2px; color: #999; margin-bottom: 10px; margin-top: 0;">Message/Motivation</p>
                            <p style="font-size: 15px; line-height: 1.6; color: #444; margin: 0; font-style: italic;">"${message}"</p>
                        </div>
                    </div>
                    <div style="background-color: #f4f4f4; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                        <p style="font-size: 12px; color: #777; margin: 0;">© 2026 Merlik Foundation. All rights reserved.</p>
                    </div>
                </div>
            `,
        };

        // 2. Confirmation Email to the Sender
        const senderMailOptions = {
            from: process.env.SMTP_FROM,
            to: email,
            subject: `We've received your ${type} request - Merlik Foundation`,
            html: `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    <div style="background-color: #D4AF37; padding: 40px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-family: 'Playfair Display', serif; font-size: 28px;">Restoring Purpose</h1>
                    </div>
                    <div style="padding: 40px; background-color: white; text-align: center;">
                        <h2 style="color: #111; margin-top: 0; font-serif font-black">Hello ${name},</h2>
                        <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 30px;">
                            Thank you for reaching out to the Merlik Foundation regarding our <strong>${type} program</strong>. We are thrilled to see your interest in helping us shape the next generation of leaders in Kenya.
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 40px;">
                            Our team is currently reviewing your application. We will get back to you within 3-5 business days to discuss the next steps.
                        </p>
                        <div style="display: inline-block; padding: 15px 30px; background-color: #D4AF37; color: white; text-decoration: none; border-radius: 10px; font-weight: 800; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                            Stay Inspired
                        </div>
                    </div>
                    <div style="background-color: #111; padding: 30px; text-align: center;">
                        <p style="font-size: 12px; color: #999; margin: 0;">You are receiving this because you submitted a request at merlikfoundation.org</p>
                        <p style="font-size: 12px; color: #D4AF37; font-weight: 700; margin-top: 10px;">merlikfoundation.org</p>
                    </div>
                </div>
            `,
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
