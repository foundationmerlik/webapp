"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Get Involved", href: "/get-involved" },
        { name: "Building Merlik", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? "bg-background shadow-xl py-4 border-b border-foreground/5"
                : "bg-background/90 dark:bg-transparent backdrop-blur-md dark:backdrop-blur-none py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center group cursor-pointer translate-y-[-2px] relative z-20">
                    <Image
                        src={mounted && resolvedTheme === 'dark' ? '/logo_white.png' : '/logo_black.png'}
                        alt="Merlik Foundation"
                        width={160}
                        height={48}
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-sans font-semibold text-sm text-foreground transition-all duration-300 relative group hover:text-brand-gold"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full border border-foreground/40 text-foreground hover:border-brand-gold hover:text-brand-gold transition-all"
                            aria-label="Toggle Theme"
                        >
                            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}

                    <Link
                        href="/donate"
                        className="px-6 py-2.5 rounded-full bg-brand-gold text-brand-white font-semibold text-sm hover:brightness-110 hover:shadow-[0_4px_15px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Donate
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-foreground hover:text-brand-gold transition-colors"
                        >
                            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    )}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-foreground p-2"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-[#111111] border-b border-black/10 dark:border-white/10 shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-serif text-3xl text-foreground dark:text-white font-black hover:text-brand-gold transition-colors flex items-center justify-between group"
                            >
                                {link.name}
                                <span className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white transition-all transform group-hover:translate-x-2">
                                    <ArrowRight size={20} />
                                </span>
                            </Link>
                        ))}
                        <Link
                            href="/donate"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block mt-4 text-center px-6 py-4 rounded-xl bg-brand-gold text-white font-bold text-lg"
                        >
                            Donate Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
