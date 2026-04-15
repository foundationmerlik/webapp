import { db } from "@/lib/db";
import { auditLogs } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ShieldCheck, Clock, Monitor, Globe, User } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AuditLogsPage() {
    const session = await getSession();

    // Secondary security check: Only Admins can see raw audit logs
    if (!session || session.user.role !== "admin") {
        redirect("/admin");
    }

    const logs = await db.query.auditLogs.findMany({
        orderBy: (logs, { desc }) => [desc(logs.createdAt)],
    });

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black font-serif text-foreground flex items-center gap-4">
                        <ShieldCheck className="text-brand-gold" size={36} /> Security Audit
                    </h1>
                    <p className="text-foreground/50 font-medium mt-1">Real-time log of security events and account changes.</p>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-white dark:bg-zinc-900/50 rounded-3xl border border-foreground/5 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-foreground/[0.02] border-b border-foreground/5">
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Event / User</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Details</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40">Device & System</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-foreground/40 text-right">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-foreground/5">
                            {logs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center text-foreground/20 italic font-medium">
                                        No audit logs recorded yet.
                                    </td>
                                </tr>
                            ) : (
                                logs.map((log) => {
                                    const metadata = JSON.parse(log.metadata || "{}");
                                    return (
                                        <tr key={log.id} className="hover:bg-foreground/[0.01] transition-colors group">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs ${
                                                        log.action === 'LOGIN' ? 'bg-green-500/10 text-green-500' : 'bg-brand-gold/10 text-brand-gold'
                                                    }`}>
                                                        {log.action === 'LOGIN' ? 'LG' : 'PC'}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-foreground flex items-center gap-2">
                                                            {log.action}
                                                            {log.userEmail === 'foundationmerlik@gmail.com' && (
                                                                <span className="bg-brand-gold/20 text-brand-gold text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase">Root Admin</span>
                                                            ) }
                                                        </div>
                                                        <div className="text-xs text-foreground/40 font-medium flex items-center gap-1 mt-0.5">
                                                            <User size={10} /> {log.userEmail}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col gap-1">
                                                    <div className="text-sm font-bold text-foreground flex items-center gap-2">
                                                        <Globe size={14} className="text-foreground/30" /> {metadata.ip || "Unknown IP"}
                                                    </div>
                                                    <div className="text-[10px] text-foreground/40 font-black uppercase tracking-wider line-clamp-1 max-w-[200px]" title={metadata.userAgent}>
                                                        {metadata.userAgent}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-foreground/5 rounded-lg text-foreground/40 group-hover:text-brand-gold transition-colors">
                                                        <Monitor size={16} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-foreground">{metadata.browser || "Unknown Browser"}</p>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30">{metadata.os || "Unknown OS"}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex flex-col items-end">
                                                    <div className="text-sm font-bold text-foreground flex items-center gap-2">
                                                        <Clock size={14} className="text-brand-gold" />
                                                        {new Date(log.createdAt!).toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' })}
                                                    </div>
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mt-0.5">
                                                        {new Date(log.createdAt!).toLocaleDateString('en-KE', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
