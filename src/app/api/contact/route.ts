import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FOUNDATION_EMAILS = [
    "foundationmerlik@gmail.com",
    "info@merlikfoundation.org",
];

// ─── Create the transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// ─── HTML template helpers ───────────────────────────────────────────────────
function baseTemplate(content: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Merlik Foundation</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#111111;padding:40px 48px;text-align:center;">
            <img src="https://webapp-wr2z.vercel.app/logo_white.png" alt="Merlik Foundation" height="48" style="display:block;margin:0 auto;"/>
            <p style="color:#D4AF37;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;margin:16px 0 0;">Creating a Monarch of Empowered Men</p>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:48px;">
            ${content}
          </td>
        </tr>

        <!-- Gold Divider -->
        <tr><td style="padding:0 48px;"><div style="height:2px;background:linear-gradient(90deg,#D4AF37,#E5C354,#D4AF37);border-radius:2px;"></div></td></tr>

        <!-- Footer -->
        <tr>
          <td style="padding:32px 48px;text-align:center;">
            <p style="color:#999;font-size:12px;margin:0 0 8px;">Merlik Foundation &bull; Nairobi, Kenya</p>
            <p style="color:#999;font-size:12px;margin:0 0 8px;">
              <a href="mailto:info@merlikfoundation.org" style="color:#D4AF37;text-decoration:none;">info@merlikfoundation.org</a> &bull;
              <a href="tel:+254795966792" style="color:#D4AF37;text-decoration:none;">+254 795 966 792</a>
            </p>
            <p style="color:#bbb;font-size:11px;margin:0;">Empowering the Boy Child through Education, Mentorship and General Life Development.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationTemplate(name: string): string {
    return baseTemplate(`
        <h1 style="font-family:Georgia,serif;font-size:32px;font-weight:900;color:#111111;margin:0 0 16px;">
            Thank you, ${name}! <span style="color:#D4AF37;">✦</span>
        </h1>
        <p style="color:#555;font-size:16px;line-height:1.7;margin:0 0 24px;">
            We have received your message and a member of our team will be in touch with you shortly.
        </p>
        <div style="background:#faf9f6;border-left:4px solid #D4AF37;border-radius:8px;padding:20px 24px;margin:0 0 24px;">
            <p style="color:#888;font-size:13px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 6px;">What happens next?</p>
            <p style="color:#444;font-size:15px;line-height:1.6;margin:0;">
                Our team reviews every message carefully. You can expect a response within <strong style="color:#111;">1–2 business days</strong>. In the meantime, feel free to explore our programs or support our mission.
            </p>
        </div>
        <table cellpadding="0" cellspacing="0" style="margin:32px 0;">
            <tr>
                <td style="padding-right:12px;">
                    <a href="https://webapp-wr2z.vercel.app/programs" style="display:inline-block;background:#D4AF37;color:#111111;font-weight:700;font-size:14px;padding:14px 28px;border-radius:100px;text-decoration:none;letter-spacing:0.05em;">
                        Our Programs
                    </a>
                </td>
                <td>
                    <a href="https://webapp-wr2z.vercel.app/donate" style="display:inline-block;background:#111111;color:#D4AF37;font-weight:700;font-size:14px;padding:14px 28px;border-radius:100px;text-decoration:none;letter-spacing:0.05em;">
                        Support Our Work
                    </a>
                </td>
            </tr>
        </table>
        <p style="color:#888;font-size:14px;line-height:1.6;margin:0;">
            Warm regards,<br/>
            <strong style="color:#111;">The Merlik Foundation Team</strong>
        </p>
    `);
}

function adminTemplate(data: {
    name: string;
    email: string;
    phone: string;
    role: string;
    message: string;
}): string {
    const fields = [
        { label: "Full Name", value: data.name },
        { label: "Email", value: data.email },
        { label: "Phone", value: data.phone },
        { label: "I am a...", value: data.role },
    ];

    const fieldRows = fields
        .map(
            (f) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;width:140px;">
            <span style="color:#999;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">${f.label}</span>
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;">
            <span style="color:#111;font-size:15px;font-weight:600;">${f.value || "—"}</span>
          </td>
        </tr>`
        )
        .join("");

    return baseTemplate(`
        <div style="display:inline-block;background:#D4AF37;color:#111111;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:6px 16px;border-radius:100px;margin-bottom:24px;">
            New Contact Form Submission
        </div>
        <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:900;color:#111111;margin:0 0 8px;">
            Message from ${data.name}
        </h1>
        <p style="color:#888;font-size:14px;margin:0 0 32px;">Received via the Merlik Foundation website contact form.</p>

        <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:32px;">
            ${fieldRows}
        </table>

        <div style="background:#faf9f6;border-radius:16px;border:1px solid #eeebe3;padding:28px;margin-bottom:8px;">
            <p style="color:#888;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 12px;">Message</p>
            <p style="color:#333;font-size:16px;line-height:1.75;margin:0;white-space:pre-wrap;">${data.message}</p>
        </div>

        <p style="margin:24px 0 0;">
            <a href="mailto:${data.email}" style="display:inline-block;background:#D4AF37;color:#111111;font-weight:700;font-size:14px;padding:14px 28px;border-radius:100px;text-decoration:none;">
                Reply to ${data.name}
            </a>
        </p>
    `);
}

// ─── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, role, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        // 1. Confirmation email → sender
        await transporter.sendMail({
            from: process.env.SMTP_FROM || "Merlik Foundation <foundationmerlik@gmail.com>",
            to: email,
            subject: `We received your message, ${name} ✦`,
            html: confirmationTemplate(name),
        });

        // 2. Admin notification → both foundation inboxes
        await transporter.sendMail({
            from: process.env.SMTP_FROM || "Merlik Foundation <foundationmerlik@gmail.com>",
            to: FOUNDATION_EMAILS.join(", "),
            replyTo: email,
            subject: `New Contact: ${name} (${role})`,
            html: adminTemplate({ name, email, phone, role, message }),
        });

        return NextResponse.json({ success: true });
    } catch (err: unknown) {
        console.error("Mailer error:", err);
        const message = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
