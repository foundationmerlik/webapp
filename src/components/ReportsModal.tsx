"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Loader2, FolderOpen } from "lucide-react";

interface Report {
    filename: string;
    label: string;
    year: string;
    sizeMB: string;
    url: string;
}

interface ReportsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReportsModal({ isOpen, onClose }: ReportsModalProps) {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchReports = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/reports");
            const data = await res.json();
            setReports(data.reports || []);
        } catch {
            setError("Failed to load reports. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isOpen) fetchReports();
    }, [isOpen, fetchReports]);

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 340, damping: 30 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full max-w-xl bg-background border border-foreground/10 rounded-[2rem] shadow-2xl overflow-hidden">

                            {/* Header */}
                            <div className="relative p-8 pb-6 border-b border-foreground/10">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-2">
                                            Merlik Foundation
                                        </p>
                                        <h2 className="text-2xl font-black font-serif text-foreground">
                                            Impact Reports
                                        </h2>
                                        <p className="text-sm text-foreground/50 mt-1 font-medium">
                                            Download our annual transparency & impact reports.
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="shrink-0 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-all"
                                        aria-label="Close modal"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Body - Scrollable Area */}
                            <div className="p-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
                                {loading && (
                                    <div className="flex flex-col items-center justify-center py-16 gap-4">
                                        <Loader2 size={32} className="animate-spin text-brand-gold" />
                                        <p className="text-sm text-foreground/50 font-medium">Loading reports...</p>
                                    </div>
                                )}

                                {error && !loading && (
                                    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                                        <p className="text-sm text-red-400 font-medium">{error}</p>
                                        <button
                                            onClick={fetchReports}
                                            className="text-xs font-bold text-brand-gold underline underline-offset-2"
                                        >
                                            Try again
                                        </button>
                                    </div>
                                )}

                                {!loading && !error && reports.length === 0 && (
                                    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                                        <FolderOpen size={48} className="text-foreground/20" />
                                        <p className="text-base font-bold text-foreground/40">No reports available yet.</p>
                                        <p className="text-sm text-foreground/30">Check back soon — we publish annually.</p>
                                    </div>
                                )}

                                {!loading && !error && reports.length > 0 && (
                                    <ul className="flex flex-col gap-4">
                                        {reports.map((report) => (
                                            <li key={report.filename}>
                                                <a
                                                    href={report.url}
                                                    download
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center justify-between gap-4 p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                                                            <FileText size={22} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-foreground text-sm group-hover:text-brand-gold transition-colors">
                                                                {report.label}
                                                            </p>
                                                            <p className="text-xs text-foreground/40 mt-0.5 font-medium">
                                                                {report.year} · PDF · {report.sizeMB} MB
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-black transition-all">
                                                        <Download size={16} />
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Footer note */}
                            <div className="px-8 pb-6 text-center">
                                <p className="text-xs text-foreground/30 font-medium">
                                    All reports are verified and published by the Merlik Foundation board.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
