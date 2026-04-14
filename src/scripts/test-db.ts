import "dotenv/config";
import { createClient } from "@libsql/client";

async function test() {
  const client = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  });

  try {
    const rs = await client.execute("SELECT 1");
    console.log("Connection successful:", rs);
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

test();
