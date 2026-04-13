"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Instagram, Linkedin, Video, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import ReportsModal from "@/components/ReportsModal";

export default function Footer() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) { setSubscribed(true); setEmail(""); }
    };

    const navLinks = [
        { name: "About Us", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Get Involved", href: "/get-involved" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
        { name: "Donate", href: "/donate" },
    ];

    return (
        <>
        <footer className="bg-background border-t border-foreground/10">

            {/* Newsletter Strip */}
            <div className="bg-brand-gold/5 border-b border-brand-gold/10 py-10 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="font-serif font-bold text-foreground text-lg">Stay Updated</p>
                        <p className="text-foreground/60 text-sm mt-1">Get programme news, impact stories, and ways to give — delivered to your inbox.</p>
                    </div>
                    {subscribed ? (
                        <div className="flex items-center gap-2 text-brand-gold font-bold text-sm">
                            <ShieldCheck size={18} /> Thank you! You&apos;re subscribed.
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="px-5 py-3 rounded-full border border-foreground/20 bg-background text-foreground text-sm focus:outline-none focus:border-brand-gold transition-colors w-full sm:w-72"
                            />
                            <button type="submit" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-black font-bold rounded-full text-sm hover:brightness-110 transition-all whitespace-nowrap">
                                Subscribe <ArrowRight size={14} />
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Main Footer Body */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-5">
                        <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
                            <Image
                                src={mounted && resolvedTheme === 'dark' ? '/logo_white.png' : '/logo_black.png'}
                                alt="Merlik Foundation"
                                width={140}
                                height={42}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="font-serif italic text-foreground/60 text-sm leading-relaxed">
                            restoring order to the hearts of men.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3 mt-1">
                            <a href="https://instagram.com/MerlikFoundation" target="_blank" rel="noopener noreferrer" aria-label="Follow Merlik Foundation on Instagram" className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300">
                                <Instagram size={16} />
                            </a>
                            <a href="https://linkedin.com/company/MerlikFoundation" target="_blank" rel="noopener noreferrer" aria-label="Merlik Foundation on LinkedIn" className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300">
                                <Linkedin size={16} />
                            </a>
                            <a href="https://tiktok.com/@MerlikFoundation" target="_blank" rel="noopener noreferrer" aria-label="Merlik Foundation on TikTok" className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300">
                                <Video size={16} />
                            </a>
                            <Link href="/contact" aria-label="Email Merlik Foundation" className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300">
                                <Mail size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Nav */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-5">Quick Links</p>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.name}>
                                    <Link href={l.href} className="text-sm text-foreground/70 hover:text-brand-gold transition-colors font-medium">
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trust / Accountability */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-5">Transparency &amp; Trust</p>
                        <ul className="space-y-3 text-sm text-foreground/60">
                            <li className="flex items-start gap-2">
                                <ShieldCheck size={15} className="text-brand-gold shrink-0 mt-0.5" />
                                <span>Registered Non-Profit — Kenya <span className="text-foreground/40 text-xs">Reg. No. CLG – QPFQME</span></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ShieldCheck size={15} className="text-brand-gold shrink-0 mt-0.5" />
                                <span>100% of public donations fund programmes directly</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <ShieldCheck size={15} className="text-brand-gold shrink-0 mt-0.5" />
                                <span>Tax receipts issued for all qualifying gifts</span>
                            </li>
                        </ul>
                        <div className="mt-5 flex flex-col gap-2">
                            <button
                                onClick={() => setIsReportsModalOpen(true)}
                                className="text-xs text-brand-gold font-bold underline underline-offset-2 hover:opacity-80 transition-opacity text-left"
                            >
                                View Impact Reports →
                            </button>
                            <Link href="/contact" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-foreground/10 py-5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-foreground/50 text-xs font-medium">
                        © {new Date().getFullYear()} Merlik Foundation. All rights reserved.
                    </p>
                    <p className="text-foreground/30 text-xs">
                        Nairobi, Kenya &nbsp;·&nbsp; info@merlikfoundation.org
                    </p>
                </div>
            </div>
        </footer>
        <ReportsModal isOpen={isReportsModalOpen} onClose={() => setIsReportsModalOpen(false)} />
        </>
    );
}
