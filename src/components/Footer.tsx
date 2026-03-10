"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Share2, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background py-16 px-6 border-t border-foreground/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <Link href="/" className="flex items-center group cursor-pointer transition-transform hover:scale-[1.02]">
                    <div className="bg-white dark:bg-white px-3 py-1.5 rounded-lg border border-brand-gold/20 shadow-sm flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Merlik Foundation"
                            width={140}
                            height={42}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                </Link>

                <p className="text-foreground/60 text-sm font-medium tracking-wide">
                    © {new Date().getFullYear()} Merlik Foundation. All rights reserved.
                    <span className="hidden md:inline mx-3 opacity-30">|</span>
                    <span className="block md:inline mt-2 md:mt-0 font-serif italic text-foreground/80">Restoring Order, Restoring Men.</span>
                </p>

                <div className="flex gap-6">
                    <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1">
                        <Globe size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1">
                        <Share2 size={18} />
                    </a>
                    <Link href="/contact" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1">
                        <Mail size={18} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
