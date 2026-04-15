import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import * as bcrypt from "bcryptjs";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email.toLowerCase()));

    if (!user) {
      // Artificial delay to prevent timing attacks/brute force
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      // Artificial delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create the session
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const session = await encrypt({ 
        user: { 
            id: user.id, 
            email: user.email, 
            role: user.role, 
            name: user.name 
        }, 
        expires 
    });

    // Save the session in a cookie
    (await cookies()).set("session", session, { 
        expires, 
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });

    // Send Security Email (Login Alert)
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

        // 1. Send Email
        const { sendSecurityEmail } = await import("@/lib/email");
        await sendSecurityEmail({
            to: user.email,
            type: "login",
            browser,
            os,
            ip: ip.split(",")[0].trim(),
            time: new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }) + " (EAT)"
        });

        // 2. Log to Database
        const { auditLogs } = await import("@/lib/db/schema");
        const { v4: uuidv4 } = await import("uuid");
        await db.insert(auditLogs).values({
            id: uuidv4(),
            userId: user.id,
            userEmail: user.email,
            action: "LOGIN",
            metadata: JSON.stringify({
                browser,
                os,
                ip: ip.split(",")[0].trim(),
                userAgent
            })
        });
    } catch (err) {
        console.error("Login logging/email failed:", err);
    }

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "An error occurred during login" },
      { status: 500 }
    );
  }
}
