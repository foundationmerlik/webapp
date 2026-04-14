import { db } from "@/lib/db";
import { formSubmissions, donations } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { desc } from "drizzle-orm";
import InquiriesClient from "@/components/admin/InquiriesClient";

export const dynamic = "force-dynamic";

export default async function InquiriesPage() {
  const session = await getSession();

  if (!session || session.user.role !== "admin") {
    redirect("/admin");
  }

  const submissions = await db.query.formSubmissions.findMany({
    orderBy: [desc(formSubmissions.createdAt)],
  });

  const allDonations = await db.query.donations.findMany({
    orderBy: [desc(donations.createdAt)],
  });

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-black font-serif text-foreground">Mission Control</h1>
        <p className="text-foreground/50 font-medium mt-1">Monitor inquiries, applications, and financial contributions.</p>
      </div>

      <InquiriesClient submissions={submissions} donations={allDonations} />
    </div>
  );
}
