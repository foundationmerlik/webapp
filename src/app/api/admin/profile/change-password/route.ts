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
      return NextResponse.json({ message: "Incorect current password" }, { status: 400 });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update DB
    await db.update(users)
      .set({ password: hashedNewPassword })
      .where(eq(users.id, session.user.id));

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Change Password Error:", error);
    return NextResponse.json(
      { message: "Failed to update password" },
      { status: 500 }
    );
  }
}
