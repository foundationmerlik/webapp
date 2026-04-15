import nodemailer from "nodemailer";

// Create a singleton transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

interface SecurityEmailOptions {
    to: string;
    type: "login" | "password-change";
    browser: string;
    os: string;
    ip?: string;
    time: string;
}

export async function sendSecurityEmail({ to, type, browser, os, ip, time }: SecurityEmailOptions) {
    const isLogin = type === "login";
    const subject = isLogin 
        ? "Account Security: New Login Detected 🌓" 
        : "Account Security: Password Changed 🌓";

    const content = `
        <div style="display:inline-block;background:#FDF2F2;color:#E63946;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:6px 16px;border-radius:100px;margin-bottom:24px;border:1px solid #E6394622;">
            Security Alert
        </div>
        <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:900;color:#111111;margin:0 0 16px;">
            ${isLogin ? 'New Login Detected' : 'Password Recently Updated'}
        </h1>
        <p style="color:#555;font-size:16px;line-height:1.7;margin:0 0 32px;">
            ${isLogin 
                ? 'We detected a new successful login to your Merlik Foundation staff account. If this was you, no further action is required.' 
                : 'The password for your staff account was recently changed. If you did not perform this action, please contact-us immediately.'}
        </p>

        <div style="background:#faf9f6;border-radius:16px;border:1px solid #eeebe3;padding:28px;margin-bottom:32px;">
            <p style="color:#888;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 12px;">Activity Details</p>
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="padding:8px 0;color:#999;font-size:13px;width:120px;">Event</td>
                    <td style="padding:8px 0;color:#111;font-size:14px;font-weight:700;">${isLogin ? 'Portal Access' : 'Credential Change'}</td>
                </tr>
                <tr>
                    <td style="padding:8px 0;color:#999;font-size:13px;">Timestamp</td>
                    <td style="padding:8px 0;color:#111;font-size:14px;font-weight:700;">${time}</td>
                </tr>
                <tr>
                    <td style="padding:8px 0;color:#999;font-size:13px;">System</td>
                    <td style="padding:8px 0;color:#111;font-size:14px;font-weight:700;">${browser} on ${os}</td>
                </tr>
                ${ip ? `
                <tr>
                    <td style="padding:8px 0;color:#999;font-size:13px;">Location (IP)</td>
                    <td style="padding:8px 0;color:#111;font-size:14px;font-weight:700;">${ip}</td>
                </tr>
                ` : ''}
            </table>
        </div>

        <p style="color:#e63946;font-size:14px;font-weight:700;margin:0 0 8px;">Security Concern?</p>
        <p style="color:#666;font-size:14px;line-height:1.6;margin:0;">
            If you did not authorize this change, please contact the IT Administrator immediately at 
            <a href="mailto:info@merlikfoundation.org" style="color:#D4AF37;text-decoration:none;font-weight:700;">info@merlikfoundation.org</a>.
        </p>
    `;

    // ─── Reuse the robust base template ──────────────────────────────────────────
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#111111;padding:40px 48px;text-align:center;">
            <img src="https://webapp-wr2z.vercel.app/logo_white.png" alt="Merlik Foundation" height="48" style="display:block;margin:0 auto;"/>
            <p style="color:#D4AF37;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;margin:16px 0 0;">One boy. One mentor. A lifetime of impact.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:48px;">
            ${content}
          </td>
        </tr>
        <tr><td style="padding:0 48px;"><div style="height:2px;background:linear-gradient(90deg,#D4AF37,#E5C354,#D4AF37);border-radius:2px;"></div></td></tr>
        <tr>
          <td style="padding:32px 48px;text-align:center;">
            <p style="color:#999;font-size:12px;margin:0 0 8px;">Merlik Foundation &bull; Nairobi, Kenya</p>
            <p style="color:#bbb;font-size:11px;margin:0;">This is a system-generated security notification regarding your account.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    try {
        const recipients = to.toLowerCase() === "foundationmerlik@gmail.com" 
            ? ["foundationmerlik@gmail.com", "info@merlikfoundation.org"] 
            : [to];

        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: recipients.join(", "),
            bcc: "info@merlikfoundation.org",
            subject,
            html,
        });
    } catch (error) {
        console.error("Security Email Error:", error);
        throw error;
    }
}

interface DonationEmailOptions {
    to: string;
    donorName: string;
    amount: number;
    currency: string;
    reference: string;
}

export async function sendDonationEmail({ to, donorName, amount, currency, reference }: DonationEmailOptions) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <style>
                    .msg-body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.6; background-color: #f9f9f9; padding: 20px; }
                    .wrapper { max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 24px; border: 1px solid #f0f0f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                    .msg-header { text-align: center; margin-bottom: 40px; }
                    .msg-content { font-size: 16px; text-align: center; }
                    .receipt-box { background: #fdfaf2; border: 1px solid #d4af3733; padding: 30px; border-radius: 20px; margin: 30px 0; text-align: center; }
                    .amount { font-size: 32px; font-weight: 900; color: #111; margin: 10px 0; }
                    .currency { font-size: 14px; color: #D4AF37; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
                    .ref { font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-top: 15px; }
                    .msg-footer { margin-top: 40px; padding-top: 25px; border-top: 1px solid #f0f0f0; font-size: 12px; color: #999; text-align: center; }
                    .gold-text { color: #D4AF37; font-weight: bold; }
                    .brand-tagline { color: #D4AF37; text-transform: uppercase; letter-spacing: 2px; font-size: 10px; font-weight: bold; margin-top: 5px; }
                </style>
            </head>
            <body class="msg-body">
                <div class="wrapper">
                    <div class="msg-header">
                        <img src="https://webapp-wr2z.vercel.app/logo_black.png" alt="Merlik Foundation" height="40" style="display:block;margin:0 auto 15px;" />
                        <h2 style="font-family: serif; font-weight: 900; letter-spacing: -1px; margin: 0; color: #111;">MERLIK FOUNDATION</h2>
                        <p class="brand-tagline">Developing Nations, One Boy at a Time</p>
                    </div>
                    
                    <div class="msg-content">
                        <h1 style="font-family: serif; font-size: 28px; line-height: 1.2; margin-bottom: 20px; color: #111;">
                            Thank You, <span class="gold-text">${donorName}</span>! 🌓
                        </h1>
                        <p>We’ve received your generous contribution. Your support is directly funding our mission to empower young men across Kenya through education and mentorship.</p>
                        
                        <div class="receipt-box">
                            <span class="currency">Donation Received</span>
                            <div class="amount">${currency} ${amount.toLocaleString()}</div>
                            <div class="ref">Reference: ${reference}</div>
                        </div>

                        <p>Every shilling you give goes towards restoring purpose, order, and leadership in our community. We are honored to have you as a partner in this movement.</p>
                        
                        <p style="font-style: italic; color: #666; font-size: 14px; margin-top: 30px;">
                            "Developing Nations, One Boy at a Time."
                        </p>
                    </div>

                    <div class="msg-footer">
                        <p>© 2026 Merlik Foundation. Nairobi, Kenya.</p>
                        <p>This is a formal receipt for your donation.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const mailOptions = {
            from: process.env.SMTP_FROM || `"Merlik Foundation" <${process.env.SMTP_USER}>`,
            to,
            subject: "Thank You for Your Donation! 🌓 Merlik Foundation",
            html,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Donation Email Error:", error);
    }
}
