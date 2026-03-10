"use client";

import Link from "next/link";
import { ArrowRight, Brain, Heart, Handshake, Megaphone } from "lucide-react";

export default function GetInvolved() {
    return (
        <div className="relative min-h-screen bg-background overflow-hidden">
            {/* Animated Mesh Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold rounded-full blur-[150px] animate-pulse delay-700"></div>
            </div>

            <main className="relative z-10 flex flex-col px-6 md:px-12 py-12 max-w-7xl mx-auto w-full mt-24">

                {/* Hero Section */}
                <section className="mb-24">
                    <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col justify-center items-center text-center p-10 bg-brand-black shadow-2xl shadow-brand-gold/10">
                        <div className="absolute inset-0 bg-[url('/images/outreach.png')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>

                        <div className="relative z-10 max-w-4xl mx-auto animate-reveal">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest mb-8">
                                Take Action
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-black text-white mb-8 leading-tight">
                                With the Boys.<br />For the Boys. <br /><span className="text-brand-gold italic">Join Us.</span>
                            </h1>
                            <p className="text-white/80 text-xl md:text-2xl font-sans font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                                Empowering the next generation through mentorship, partnership, and community-driven impact.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href="#options" className="bg-brand-gold text-brand-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1">
                                    Explore Ways to Help
                                </a>
                                <Link href="/about" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1">
                                    Watch Our Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Get Involved Grid */}
                <section className="mb-32" id="options">
                    <div className="flex flex-col items-center mb-16 animate-reveal delay-200">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Mission</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-center text-foreground">Ways to Get Involved</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="group relative bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-10 flex flex-col items-start gap-6 cursor-pointer hover:border-brand-gold hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                                <Brain size={32} />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-brand-gold transition-colors">Become a Mentor</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium">Share your wisdom and guide young men as they navigate life's challenges and opportunities.</p>
                            </div>
                            <div className="mt-auto text-brand-gold text-sm font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all w-full border-t border-foreground/5 pt-6">
                                Learn More <ArrowRight size={16} />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-10 flex flex-col items-start gap-6 cursor-pointer hover:border-brand-gold hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300 delay-100">
                            <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                                <Heart size={32} />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-brand-gold transition-colors">Volunteer</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium">Give your time to our local events, workshops, and community outreach programs.</p>
                            </div>
                            <div className="mt-auto text-brand-gold text-sm font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all w-full border-t border-foreground/5 pt-6">
                                Get Started <ArrowRight size={16} />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-10 flex flex-col items-start gap-6 cursor-pointer hover:border-brand-gold hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300 delay-200">
                            <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                                <Handshake size={32} />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-brand-gold transition-colors">Partner With Us</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium">Collaborate as a corporate partner or local business to scale our collective impact.</p>
                            </div>
                            <div className="mt-auto text-brand-gold text-sm font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all w-full border-t border-foreground/5 pt-6">
                                Partner Info <ArrowRight size={16} />
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-10 flex flex-col items-start gap-6 cursor-pointer hover:border-brand-gold hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300 delay-300">
                            <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                                <Megaphone size={32} />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-brand-gold transition-colors">Spread the Word</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium">Use your platform to advocate for our mission and help us reach more families.</p>
                            </div>
                            <div className="mt-auto text-brand-gold text-sm font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all w-full border-t border-foreground/5 pt-6">
                                Share Now <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Box */}
                <section className="w-full relative">
                    <div className="absolute inset-0 bg-brand-gold/5 blur-2xl rounded-[3rem]"></div>
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 rounded-[2.5rem] border border-brand-gold/20 bg-background/80 backdrop-blur-md p-12 md:p-16 shadow-xl">
                        <div className="flex flex-col gap-6 max-w-3xl">
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Have a specific idea or proposal?</h3>
                            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed">
                                We are always open to innovative ways of supporting our youth. Reach out to our team directly to discuss unique collaborations.
                            </p>
                        </div>
                        <Link href="/contact" className="whitespace-nowrap flex min-w-[220px] items-center justify-center rounded-full py-5 px-10 bg-brand-gold text-brand-black text-xl font-black shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all">
                            Contact Us Today
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
