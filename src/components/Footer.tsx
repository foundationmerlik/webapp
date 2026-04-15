"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Instagram, Linkedin, Mail, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import ReportsModal from "@/components/ReportsModal";
import NewsletterModal from "@/components/NewsletterModal";
import SafeYear from "@/components/SafeYear";

export default function Footer() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
    const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setSubscribed(true);
                setIsNewsletterModalOpen(true);
                setEmail("");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const exploreLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Projects", href: "/programs" },
        { name: "Calendar", href: "/calendar" },
        { name: "Blog & News", href: "/blog" },
    ];

    const involvedLinks = [
        { name: "Volunteer", href: "/support?tab=volunteer" },
        { name: "Internship", href: "/support?tab=internship" },
        { name: "Donate", href: "/donate" },
        { name: "Become a Mentor", href: "/support?tab=mentor" },
        { name: "Sponsor a Boy", href: "/support?tab=sponsor" },
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
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-black font-bold rounded-full text-sm hover:brightness-110 transition-all whitespace-nowrap disabled:opacity-50"
                            >
                                {isSubmitting ? "Subscribing..." : <>Subscribe <ArrowRight size={14} /></>}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Main Footer Body */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

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
                        <div className="flex flex-col gap-2">
                            <h3 className="font-serif font-black text-xl text-foreground">Merlik Foundation</h3>
                            <p className="text-brand-gold font-bold uppercase tracking-widest text-[10px]">
                                Developing Nations, One Boy at a Time
                            </p>
                        </div>
                        <p className="text-foreground/60 text-sm leading-relaxed max-w-xs font-medium">
                            Merlik Foundation is a non-profit organization whose primary focus is empowering young men through holistic mentorship — with the values, skills and support systems needed to become the epitome of sustainable leadership for the next generation.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.instagram.com/merlikorg/" target="_blank" rel="noopener noreferrer" aria-label="Follow Merlik Foundation on Instagram" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-500 shadow-sm hover:shadow-brand-gold/20">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/merlik-foundation/" target="_blank" rel="noopener noreferrer" aria-label="Merlik Foundation on LinkedIn" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-500 shadow-sm hover:shadow-brand-gold/20">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@merlikfoundation?_t=8riNpakE5f5&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Merlik Foundation on TikTok" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-500 shadow-sm hover:shadow-brand-gold/20">
                                <svg 
                                    viewBox="0 0 24 24" 
                                    className="w-[18px] h-[18px] fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 2.32-.6 4.67-2.06 6.47-1.47 1.84-3.73 2.87-6.03 3.02-2.52.21-5.14-.54-7-2.31-1.93-1.84-2.8-4.66-2.28-7.27.46-2.52 2.33-4.75 4.72-5.71 1.28-.53 2.68-.73 4.05-.62V12.1c-.81-.13-1.67-.02-2.4.34-1.01.47-1.74 1.48-1.91 2.58-.19 1.09.11 2.27.81 3.13.67.84 1.8 1.34 2.88 1.3 1.08-.01 2.1-.55 2.72-1.44.5-.72.69-1.62.68-2.51V.02z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">Explore</p>
                        <ul className="space-y-4">
                            {exploreLinks.map((l) => (
                                <li key={l.name}>
                                    <Link href={l.href} className="text-sm text-foreground/70 hover:text-brand-gold transition-colors font-medium">
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">Get Involved</p>
                        <ul className="space-y-4">
                            {involvedLinks.map((l) => (
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
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">Transparency</p>
                        <ul className="space-y-4 text-sm text-foreground/60">
                            <li className="flex items-start gap-3">
                                <ShieldCheck size={16} className="text-brand-gold shrink-0 mt-0.5" />
                                <span>Registered Non-Profit — Kenya <span className="text-foreground/40 text-[10px] block mt-1 uppercase font-bold tracking-tighter">Reg. No. CLG – QPFQME</span></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ShieldCheck size={16} className="text-brand-gold shrink-0 mt-0.5" />
                                <span>100% of public donations fund programmes directly</span>
                            </li>
                        </ul>
                        <div className="mt-8 flex flex-col gap-3">
                            <button
                                onClick={() => setIsReportsModalOpen(true)}
                                className="text-xs text-brand-gold font-bold underline underline-offset-4 hover:opacity-80 transition-opacity text-left"
                            >
                                View Impact Reports →
                            </button>
                            <div className="flex flex-row items-center gap-6">
                                <Link href="/privacy" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors uppercase tracking-widest font-bold">
                                    Privacy Policy
                                </Link>
                                <Link href="/login" className="text-xs text-brand-gold/60 hover:text-brand-gold transition-colors uppercase tracking-[0.2em] font-black flex items-center gap-2">
                                    <Lock size={12} /> Staff Portal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-foreground/10 py-5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-foreground/50 text-xs font-medium">
                        © <SafeYear /> Merlik Foundation. All rights reserved.
                    </p>
                    <p className="text-foreground/30 text-xs">
                        Nairobi, Kenya &nbsp;·&nbsp; info@merlikfoundation.org
                    </p>
                </div>
            </div>
        </footer>
        <ReportsModal isOpen={isReportsModalOpen} onClose={() => setIsReportsModalOpen(false)} />
        <NewsletterModal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)} />
        </>
    );
}
