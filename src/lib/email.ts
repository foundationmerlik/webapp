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
            ? "Account Security: New Login Detected 🌓" 
            : "Account Security: Password Changed 🌓";

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
                    .security-box { background: #fdfaf2; border: 1px solid #d4af3733; padding: 30px; border-radius: 20px; margin: 30px 0; text-align: left; }
                    .security-item { margin-bottom: 20px; border-bottom: 1px solid #d4af3711; padding-bottom: 15px; }
                    .security-item:last-child { border: none; margin: 0; padding: 0; }
                    .label { color: #999; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; font-weight: 900; display: block; margin-bottom: 4px; }
                    .value { color: #111; font-size: 15px; font-weight: bold; display: block; }
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
                        <h1 style="font-family: serif; font-size: 24px; line-height: 1.2; margin-bottom: 15px; color: #111;">
                            Security <span class="gold-text">Alert</span>
                        </h1>
                        <p style="color: #666; font-size: 15px;">
                            ${isLogin ? 'We detected a new successful login to your Merlik Foundation staff account.' : 'The password for your staff account was recently updated.'}
                        </p>
                        
                        <div class="security-box">
                            <div class="security-item">
                                <span class="label">Activity</span>
                                <span class="value">${isLogin ? 'Portal Access' : 'Credential Update'}</span>
                            </div>
                            <div class="security-item">
                                <span class="label">Logged at</span>
                                <span class="value">${time}</span>
                            </div>
                            <div class="security-item">
                                <span class="label">Browser & System</span>
                                <span class="value">${browser} / ${os}</span>
                            </div>
                            ${ip ? `
                            <div class="security-item">
                                <span class="label">Network Location</span>
                                <span class="value">${ip}</span>
                            </div>
                            ` : ''}
                        </div>

                        <p style="font-size: 14px;">If this was you, you can safely ignore this automated message.</p>
                        <p style="color: #e63946; font-weight: bold; font-size: 14px; margin-top: 20px; border: 1px solid #e6394633; padding: 15px; border-radius: 12px; background: #fff5f5;">
                            Security Concern? If you did not perform this action, please contact the Foundation IT Administrator immediately and reset your password.
                        </p>
                    </div>

                    <div class="msg-footer">
                        <p>© 2026 Merlik Foundation. Nairobi, Kenya.</p>
                        <p>This is a mandatory security notification regarding your staff account.</p>
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
