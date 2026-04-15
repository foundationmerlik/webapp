import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import * as bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { currentPassword, newPassword } = await request.json();

    // Get user from DB
    const [user] = await db.select().from(users).where(eq(users.id, session.user.id));
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Incorrect current password" }, { status: 400 });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update DB
    await db.update(users)
      .set({ password: hashedNewPassword })
      .where(eq(users.id, session.user.id));

    // Send Security Email
    try {
        const userAgent = request.headers.get("user-agent") || "Unknown";
        const ip = request.headers.get("x-forwarded-for") || "Local";
        
        let browser = "Unknown Browser";
        let os = "Unknown OS";

        if (userAgent.includes("Firefox")) browser = "Firefox";
        else if (userAgent.includes("Edge")) browser = "Edge";
        else if (userAgent.includes("Chrome")) browser = "Chrome";
        else if (userAgent.includes("Safari")) browser = "Safari";

        if (userAgent.includes("Windows")) os = "Windows";
        else if (userAgent.includes("Mac")) os = "macOS";
        else if (userAgent.includes("Android")) os = "Android";
        else if (userAgent.includes("iPhone")) os = "iOS";
        else if (userAgent.includes("Linux")) os = "Linux";

        const { sendSecurityEmail } = await import("@/lib/email");
        await sendSecurityEmail({
            to: session.user.email,
            type: "password-change",
            browser,
            os,
            ip: ip.split(",")[0].trim(),
            time: new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }) + " (EAT)"
        });
    } catch (err) {
        console.error("Password change security email failed:", err);
    }

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Change Password Error:", error);
    return NextResponse.json(
      { message: "Failed to update password" },
      { status: 500 }
    );
  }
}
