"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ArrowRight, ChevronDown, BookOpen, Users, Globe, LayoutGrid, Compass, Sparkles, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const programsLinks = [
    { name: "All Programs", href: "/programs", icon: LayoutGrid, desc: "Overview of everything we do" },
    { name: "Education", href: "/programs/education", icon: BookOpen, desc: "Boys' Sponsorship & Education" },
    { name: "Mentorship", href: "/programs/mentorship", icon: Users, desc: "Creating empowered men" },
    { name: "Community Outreach", href: "/programs/outreach", icon: Globe, desc: "Engaging families & communities" },
];

const getInvolvedLinks = [
    { name: "Volunteer", href: "/support?tab=volunteer", icon: Users, desc: "Lend your time and skills" },
    { name: "Internship", href: "/support?tab=internship", icon: BookOpen, desc: "Gain hands-on experience" },
    { name: "Donate", href: "/donate", icon: Sun, desc: "Financial contributions" },
    { name: "Mentor", href: "/support?tab=mentor", icon: Compass, desc: "Shape a future leader" },
    { name: "Sponsor a Boy", href: "/support?tab=sponsor", icon: Sparkles, desc: "Invest in a boy's future today." },
    { name: "Merchandise", href: "/shop", icon: ShoppingBag, desc: "Support the mission with branded gear." },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);
    const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
    const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
    const [mobileGetInvolvedOpen, setMobileGetInvolvedOpen] = useState(false);
    const programsRef = useRef<HTMLDivElement>(null);
    const involvedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
                setProgramsOpen(false);
            }
            if (involvedRef.current && !involvedRef.current.contains(e.target as Node)) {
                setGetInvolvedOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Building Merlik", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const isHome = pathname === "/";
    const forceDarkHero = isHome && !isScrolled;

    const linkClass = "font-sans font-semibold text-sm text-foreground transition-all duration-300 relative group hover:text-brand-gold";
    const underline = <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full" />;

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
            isScrolled 
                ? "bg-background shadow-xl py-4 border-b border-foreground/5" 
                : isHome 
                    ? "bg-transparent py-6" 
                    : "bg-background/90 backdrop-blur-md py-6"
        }`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center group cursor-pointer translate-y-[-2px] relative z-20">
                    <Image
                        src={mounted && resolvedTheme === "dark" ? "/logo_white.png" : "/logo_black.png"}
                        alt="Merlik Foundation"
                        width={160} height={48}
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Home, About */}
                    {navLinks.slice(0, 2).map((link) => (
                        <Link key={link.name} href={link.href} className={linkClass}>
                            {link.name}{underline}
                        </Link>
                    ))}

                    {/* Programs Dropdown */}
                    <div className="relative" ref={programsRef}>
                        <button
                            onClick={() => setProgramsOpen(!programsOpen)}
                            onMouseEnter={() => setProgramsOpen(true)}
                            className="flex items-center gap-1.5 font-sans font-semibold text-sm text-foreground transition-all duration-300 relative group hover:text-brand-gold"
                        >
                            Programs
                            <ChevronDown size={14} className={`transition-transform duration-300 ${programsOpen ? "rotate-180 text-brand-gold" : ""}`} />
                            {underline}
                        </button>

                        <AnimatePresence>
                            {programsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                    onMouseLeave={() => setProgramsOpen(false)}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-72 bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                                >
                                    <div className="p-2">
                                        {programsLinks.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setProgramsOpen(false)}
                                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-gold/10 group/item transition-all duration-200"
                                            >
                                                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 group-hover/item:bg-brand-gold group-hover/item:text-white transition-all">
                                                    <item.icon size={16} />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-bold text-foreground group-hover/item:text-brand-gold transition-colors">{item.name}</p>
                                                    <p className="text-[11px] text-foreground/50 mt-0.5 truncate">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Rest of links */}
                    {navLinks.slice(2).map((link) => (
                        <Link key={link.name} href={link.href} className={linkClass}>
                            {link.name}{underline}
                        </Link>
                    ))}

                    {mounted && (
                        <button onClick={toggleTheme} className="p-2 rounded-full border border-foreground/40 text-foreground hover:border-brand-gold hover:text-brand-gold transition-all" aria-label="Toggle Theme">
                            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}

                    {/* Get Involved Button + Dropdown */}
                    <div className="relative" ref={involvedRef}>
                        <button
                            onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
                            onMouseEnter={() => setGetInvolvedOpen(true)}
                            className="px-6 py-2.5 rounded-full bg-brand-gold text-brand-white font-bold text-sm hover:brightness-110 hover:shadow-[0_4px_15px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            Get Involved
                            <ChevronDown size={16} className={`transition-transform duration-300 ${getInvolvedOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {getInvolvedOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                    onMouseLeave={() => setGetInvolvedOpen(false)}
                                    className="absolute top-full right-0 mt-5 w-72 bg-background border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                                >
                                    {getInvolvedLinks.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setGetInvolvedOpen(false)}
                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-gold/10 group/item transition-all duration-200"
                                        >
                                            <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 group-hover/item:bg-brand-gold group-hover/item:text-white transition-all">
                                                <item.icon size={16} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-bold text-foreground group-hover/item:text-brand-gold transition-colors">{item.name}</p>
                                                <p className="text-[11px] text-foreground/50 mt-0.5 truncate">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {mounted && (
                        <button onClick={toggleTheme} className="p-2 rounded-full text-foreground hover:text-brand-gold transition-colors">
                            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    )}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground p-2">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-[#111111] border-b border-black/10 dark:border-white/10 shadow-lg py-6 px-6 flex flex-col gap-5 md:hidden max-h-[85vh] overflow-y-auto"
                    >
                        {navLinks.slice(0, 2).map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}
                                className="font-serif text-2xl sm:text-3xl text-foreground dark:text-white font-black hover:text-brand-gold transition-colors flex items-center justify-between group">
                                {link.name}
                                <span className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all transform group-hover:translate-x-2">
                                    <ArrowRight size={20} />
                                </span>
                            </Link>
                        ))}

                        {/* Mobile Programs Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                                className="w-full font-serif text-2xl sm:text-3xl text-foreground dark:text-white font-black hover:text-brand-gold transition-colors flex items-center justify-between"
                            >
                                Programs
                                <ChevronDown size={24} className={`transition-transform duration-300 ${mobileProgramsOpen ? "rotate-180 text-brand-gold" : "text-foreground/40"}`} />
                            </button>
                            <AnimatePresence>
                                {mobileProgramsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden mt-4 ml-1 space-y-2"
                                    >
                                        {programsLinks.map((item) => (
                                            <Link key={item.href} href={item.href}
                                                onClick={() => { setMobileMenuOpen(false); setMobileProgramsOpen(false); }}
                                                className="flex items-center gap-3 py-3 px-4 rounded-xl border border-foreground/10 hover:border-brand-gold/40 group transition-all">
                                                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                                                    <item.icon size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-base font-bold text-foreground">{item.name}</p>
                                                    <p className="text-[11px] text-foreground/50">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Get Involved Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileGetInvolvedOpen(!mobileGetInvolvedOpen)}
                                className="w-full font-serif text-2xl sm:text-3xl text-foreground dark:text-white font-black hover:text-brand-gold transition-colors flex items-center justify-between"
                            >
                                Get Involved
                                <ChevronDown size={24} className={`transition-transform duration-300 ${mobileGetInvolvedOpen ? "rotate-180 text-brand-gold" : "text-foreground/40"}`} />
                            </button>
                            <AnimatePresence>
                                {mobileGetInvolvedOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden mt-4 ml-1 space-y-2"
                                    >
                                        {getInvolvedLinks.map((item) => (
                                            <Link key={item.href} href={item.href}
                                                onClick={() => { setMobileMenuOpen(false); setMobileGetInvolvedOpen(false); }}
                                                className="flex items-center gap-3 py-3 px-4 rounded-xl border border-foreground/10 hover:border-brand-gold/40 group transition-all">
                                                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                                                    <item.icon size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-base font-bold text-foreground">{item.name}</p>
                                                    <p className="text-[11px] text-foreground/50">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
