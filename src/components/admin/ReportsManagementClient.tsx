"use client";

import { useState, useEffect, useRef } from "react";
import { 
    FileText, 
    Upload, 
    Trash2, 
    Download, 
    Loader2, 
    CheckCircle2, 
    AlertCircle,
    FileUp,
    FolderOpen
} from "lucide-react";

interface Report {
    filename: string;
    sizeMB: string;
    createdAt: string;
}

export default function ReportsManagementClient() {
    const [reports, setReports] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const res = await fetch("/api/admin/reports");
            const data = await res.json();
            if (res.ok) setReports(data.reports || []);
        } catch (err) {
            console.error("Fetch reports error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.name.toLowerCase().endsWith(".pdf")) {
            setError("Only PDF files are allowed.");
            return;
        }

        setIsUploading(true);
        setError("");
        setSuccess("");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/admin/reports", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setSuccess(`Report "${file.name}" uploaded successfully!`);
                fetchReports();
            } else {
                const data = await res.json();
                setError(data.message || "Upload failed.");
            }
        } catch (err) {
            setError("An error occurred during upload.");
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const handleDelete = async (filename: string) => {
        if (!confirm(`Are you sure you want to delete "${filename}"?`)) return;

        try {
            const res = await fetch("/api/admin/reports", {
                method: "DELETE",
                body: JSON.stringify({ filename }),
            });

            if (res.ok) {
                setSuccess(`Report "${filename}" deleted.`);
                fetchReports();
            }
        } catch (err) {
            setError("Failed to delete report.");
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black font-serif text-foreground">Impact Reports</h1>
                    <p className="text-foreground/50 font-medium mt-1">Manage public transparency and impact PDFs.</p>
                </div>
                
                <div className="relative">
                    <input 
                        type="file" 
                        accept=".pdf"
                        onChange={handleFileUpload}
                        ref={fileInputRef}
                        className="hidden" 
                    />
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploading}
                        className="px-6 py-3 bg-brand-gold text-brand-black rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 transition-all text-sm disabled:opacity-50"
                    >
                        {isUploading ? <Loader2 size={18} className="animate-spin" /> : <FileUp size={18} />}
                        {isUploading ? "Uploading..." : "Upload New Report"}
                    </button>
                </div>
            </div>

            {success && (
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 p-4 rounded-2xl text-green-500 font-bold animate-reveal">
                    <CheckCircle2 size={20} /> {success}
                </div>
            )}

            {error && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 p-4 rounded-2xl text-red-500 font-bold animate-reveal">
                    <AlertCircle size={20} /> {error}
                </div>
            )}

            {/* Reports Table */}
            <div className="bg-white dark:bg-zinc-900/50 rounded-3xl border border-foreground/5 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-foreground/5 border-b border-foreground/5">
                            <tr>
                                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40">File Details</th>
                                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40">Size</th>
                                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40">Uploaded</th>
                                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-foreground/5">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center">
                                        <Loader2 size={40} className="animate-spin text-brand-gold mx-auto" />
                                    </td>
                                </tr>
                            ) : reports.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center gap-4 text-foreground/20">
                                            <FolderOpen size={48} strokeWidth={1.5} />
                                            <p className="font-medium italic">No impact reports found in the impacts folder.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                reports.map((report) => (
                                    <tr key={report.filename} className="hover:bg-foreground/[0.01] transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                                    <FileText size={20} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-foreground break-all">{report.filename}</p>
                                                    <a 
                                                        href={`/reports/${report.filename}`} 
                                                        target="_blank" 
                                                        className="text-[10px] text-brand-gold uppercase font-black hover:underline"
                                                    >
                                                        Preview File →
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-sm font-bold text-foreground/60">{report.sizeMB} MB</span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-foreground/50 font-medium whitespace-nowrap">
                                            {new Date(report.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <a 
                                                    href={`/reports/${report.filename}`} 
                                                    download
                                                    className="p-2 text-foreground/20 hover:text-brand-gold transition-colors"
                                                >
                                                    <Download size={18} />
                                                </a>
                                                <button 
                                                    onClick={() => handleDelete(report.filename)}
                                                    className="p-2 text-foreground/20 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
