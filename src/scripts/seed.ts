import { db } from "../lib/db";
import { users } from "../lib/db/schema";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

async function seed() {
  const email = "foundationmerlik@gmail.com";
  const password = "$Merlik123$";
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("Seeding admin...");
  
  try {
    await db.insert(users).values({
      id: "admin-1",
      email: email,
      password: hashedPassword,
      name: "Merlik Admin",
      role: "admin",
    });
    console.log("Admin seeded successfully!");
  } catch (error) {
    console.error("Error seeding admin (it might already exist):", error);
  }
}

seed().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
});
