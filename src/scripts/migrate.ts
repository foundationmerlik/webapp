import "dotenv/config";
import { createClient } from "@libsql/client";
import * as fs from "fs";
import * as path from "path";

async function migrate() {
  const client = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  });

  const sqlFile = path.join(process.cwd(), "drizzle", "0000_keen_millenium_guard.sql");
  const sql = fs.readFileSync(sqlFile, "utf8");
  
  // Split by statement-breakpoint
  const statements = sql.split("--> statement-breakpoint");

  console.log(`Starting migration with ${statements.length} statements...`);

  for (const statement of statements) {
    const trimmed = statement.trim();
    if (!trimmed) continue;
    
    try {
      console.log(`Executing: ${trimmed.substring(0, 50)}...`);
      await client.execute(trimmed);
    } catch (err) {
      console.error("Statement failed:", err);
      // We continue to see if other statements work (e.g. if table already exists)
    }
  }

  console.log("Migration finished.");
}

migrate().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
});
