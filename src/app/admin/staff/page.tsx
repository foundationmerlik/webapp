import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import StaffManagementClient from "@/components/admin/StaffManagementClient";

export default async function StaffManagementPage() {
  const session = await getSession();
  
  if (!session || session.user.role !== "admin") {
    redirect("/admin");
  }

  return <StaffManagementClient />;
}
