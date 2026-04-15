import ReportsManagementClient from "@/components/admin/ReportsManagementClient";

export const metadata = {
    title: "Manage Reports | Merlik Admin",
};

export default function AdminReportsPage() {
    return (
        <main className="p-8 md:p-12">
            <ReportsManagementClient />
        </main>
    );
}
