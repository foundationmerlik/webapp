import nodemailer from "nodemailer";

interface SecurityEmailOptions {
    to: string;
    type: "login" | "password-change";
    browser: string;
    os: string;
    ip?: string;
    time: string;
}

export async function sendSecurityEmail({ to, type, browser, os, ip, time }: SecurityEmailOptions) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const isLogin = type === "login";
        const subject = isLogin 
            ? "New Login to Merlik Staff Portal 🌓" 
            : "Password Changed - Merlik Foundation 🌓";

        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <style>
                    .msg-body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.6; background-color: #f9f9f9; padding: 20px; }
                    .wrapper { max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 24px; border: 1px solid #f0f0f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                    .msg-header { text-align: center; margin-bottom: 40px; }
                    .msg-content { font-size: 15px; text-align: left; }
                    .security-box { background: #fdfaf2; border: 1px solid #d4af3733; padding: 25px; border-radius: 16px; margin: 25px 0; }
                    .security-item { margin-bottom: 15px; border-bottom: 1px solid #d4af3711; padding-bottom: 10px; }
                    .security-item:last-child { border: none; margin: 0; padding: 0; }
                    .label { color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; display: block; }
                    .value { color: #1a1a1a; font-size: 14px; font-weight: bold; display: block; margin-top: 2px; }
                    .msg-footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #f0f0f0; font-size: 11px; color: #999; text-align: center; }
                    .gold-text { color: #D4AF37; font-weight: bold; }
                </style>
            </head>
            <body class="msg-body">
                <div class="wrapper">
                    <div class="msg-header">
                        <img src="https://webapp-wr2z.vercel.app/logo_black.png" alt="Merlik Foundation" height="32" style="display:block;margin:0 auto 15px;" />
                        <h2 style="font-family: serif; font-weight: 900; letter-spacing: -1px; margin: 0; color: #111;">SECURITY ALERT</h2>
                    </div>
                    <div class="msg-content">
                        <p>Hello,</p>
                        <p>${isLogin ? 'A new successful login was detected for your staff account.' : 'The password for your Merlik Foundation staff account was recently changed.'}</p>
                        
                        <div class="security-box">
                            <div class="security-item">
                                <span class="label">Event</span>
                                <span class="value">${isLogin ? 'Successful Login' : 'Password updated'}</span>
                            </div>
                            <div class="security-item">
                                <span class="label">Date & Time</span>
                                <span class="value">${time}</span>
                            </div>
                            <div class="security-item">
                                <span class="label">Browser & Device</span>
                                <span class="value">${browser} on ${os}</span>
                            </div>
                            ${ip ? `
                            <div class="security-item">
                                <span class="label">IP Address</span>
                                <span class="value">${ip}</span>
                            </div>
                            ` : ''}
                        </div>

                        <p>If this was you, you can safely ignore this email. No further action is required.</p>
                        <p style="color: #666; font-style: italic;"><strong>If this was NOT you:</strong> Please contact the IT administrator immediately and change your password to secure your account.</p>
                    </div>
                    <div class="msg-footer">
                        <p>© 2026 Merlik Foundation. Nairobi, Kenya.</p>
                        <p>This is an automated security notification.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const mailOptions = {
            from: process.env.SMTP_FROM || `"Merlik Security" <${process.env.SMTP_USER}>`,
            to,
            subject,
            html,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Security Email Error:", error);
    }
}
