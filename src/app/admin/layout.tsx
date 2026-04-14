import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] dark:bg-brand-black">
      <AdminSidebar user={session.user} />
      <main className="flex-1 lg:pl-72">
        <div className="py-10 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
