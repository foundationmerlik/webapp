import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import fs from "fs";
import path from "path";
import { logActivity } from "@/lib/audit";

const REPORTS_DIR = path.join(process.cwd(), "public", "reports");

// Helper to ensure directory exists
function ensureDir() {
    if (!fs.existsSync(REPORTS_DIR)) {
        fs.mkdirSync(REPORTS_DIR, { recursive: true });
    }
}

export async function GET() {
    try {
        const session = await getSession();
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        ensureDir();
        const files = fs.readdirSync(REPORTS_DIR)
            .filter(f => f.toLowerCase().endsWith(".pdf"))
            .map(filename => {
                const stats = fs.statSync(path.join(REPORTS_DIR, filename));
                return {
                    filename,
                    sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
                    createdAt: stats.birthtime,
                };
            });

        return NextResponse.json({ reports: files });
    } catch (error) {
        console.error("Error fetching admin reports:", error);
        return NextResponse.json({ reports: [] }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        if (!file.name.toLowerCase().endsWith(".pdf")) {
            return NextResponse.json({ message: "Only PDF files are allowed" }, { status: 400 });
        }

        ensureDir();
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename: remove spaces and special chars, keep only alphanumeric and dots/hyphens
        const sanitizedName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
        const filePath = path.join(REPORTS_DIR, sanitizedName);

        fs.writeFileSync(filePath, buffer);

        // Log Activity
        await logActivity(session.user.id, session.user.email, "REPORT_UPLOAD", { filename: sanitizedName });

        return NextResponse.json({ message: "Report uploaded successfully", filename: sanitizedName });
    } catch (error) {
        console.error("Error uploading report:", error);
        return NextResponse.json({ message: "Upload failed" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const session = await getSession();
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { filename } = await request.json();
        if (!filename) return NextResponse.json({ message: "Filename required" }, { status: 400 });

        const filePath = path.join(REPORTS_DIR, filename);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            
            // Log Activity
            await logActivity(session.user.id, session.user.email, "REPORT_DELETE", { filename });
            
            return NextResponse.json({ message: "Report deleted successfully" });
        }

        return NextResponse.json({ message: "Report not found" }, { status: 404 });
    } catch (error) {
        console.error("Error deleting report:", error);
        return NextResponse.json({ message: "Deletion failed" }, { status: 500 });
    }
}
