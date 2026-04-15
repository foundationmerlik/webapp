import { db } from "./db";
import { auditLogs } from "./db/schema";
import { v4 as uuidv4 } from "uuid";
import { headers } from "next/headers";

export type AuditAction = 
    | "LOGIN" 
    | "LOGOUT" 
    | "PASSWORD_CHANGE" 
    | "CREATE_POST" 
    | "UPDATE_POST" 
    | "DELETE_POST" 
    | "CREATE_EVENT" 
    | "UPDATE_EVENT" 
    | "DELETE_EVENT"
    | "SEND_NEWSLETTER"
    | "CREATE_STAFF"
    | "DELETE_STAFF"
    | "UPDATE_STAFF"
    | "REPORT_UPLOAD"
    | "REPORT_DELETE";

export async function logActivity(
    userId: string, 
    userEmail: string, 
    action: AuditAction, 
    details?: any
) {
    try {
        const headerList = await headers();
        const userAgent = headerList.get("user-agent") || "Unknown";
        const ip = headerList.get("x-forwarded-for") || "Local";
        
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

        await db.insert(auditLogs).values({
            id: uuidv4(),
            userId,
            userEmail,
            action,
            metadata: JSON.stringify({
                browser,
                os,
                ip: ip.split(",")[0].trim(),
                userAgent,
                details // Optional extra info like "Post Title: Hello World"
            })
        });
    } catch (err) {
        console.error("Audit logging failed:", err);
    }
}
