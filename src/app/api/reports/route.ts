import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        const reportsDir = path.join(process.cwd(), "public", "reports");

        // Create the folder if it doesn't exist yet
        if (!fs.existsSync(reportsDir)) {
            fs.mkdirSync(reportsDir, { recursive: true });
        }

        const files = fs.readdirSync(reportsDir).filter((f) => f.toLowerCase().endsWith(".pdf"));

        const reports = files.map((filename) => {
            const filePath = path.join(reportsDir, filename);
            const stats = fs.statSync(filePath);

            // Extract year from filename, e.g. "Impact-Report-2023.pdf" → 2023
            const yearMatch = filename.match(/\d{4}/);
            const year = yearMatch ? yearMatch[0] : "Unknown";

            // Pretty label from filename
            const label = filename
                .replace(/\.pdf$/i, "")
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());

            const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

            return {
                filename,
                label,
                year,
                sizeMB,
                url: `/reports/${filename}`,
            };
        });

        // Sort: newest year first
        reports.sort((a, b) => Number(b.year) - Number(a.year));

        return NextResponse.json({ reports });
    } catch (error) {
        console.error("Error reading reports directory:", error);
        return NextResponse.json({ reports: [] }, { status: 500 });
    }
}
