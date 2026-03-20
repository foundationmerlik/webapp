"use client";

import Link from "next/link";
import { ArrowRight, Brain, Heart, Handshake, Megaphone, RefreshCw, Building2, Gift, Scale } from "lucide-react";

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

                {/* 2026 Goals Section */}
                <section className="mb-32" id="options">
                    <div className="flex flex-col items-center mb-16 animate-reveal delay-200">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Vision for the Future</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-center text-foreground">2026 SMART Goals</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Goal 1 */}
                        <div className="bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-10 flex flex-col items-start gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-brand-gold">
                                <span className="font-serif font-black text-2xl">01</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Programme Reach</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium mb-4">
                                    Reaching 1,000 Boys | 30 Coaches | 3 Active Zones
                                </p>
                                <ul className="text-sm space-y-2 text-foreground/60 font-medium list-disc list-inside">
                                    <li>400 boys - group mentoring</li>
                                    <li>100 boys - personal coaching</li>
                                    <li>200 boys - school engagements</li>
                                    <li>300 boys - community events</li>
                                </ul>
                            </div>
                        </div>

                        {/* Goal 2 */}
                        <div className="bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-10 flex flex-col items-start gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-brand-gold">
                                <span className="font-serif font-black text-2xl">02</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Delivery & Outcomes</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium mb-4">
                                    &ge;80% Engagement | 25-40% risk reduction
                                </p>
                                <ul className="text-sm space-y-2 text-foreground/60 font-medium list-disc list-inside">
                                    <li>Behavior measured via SDQ</li>
                                    <li>Self-confidence via Rosenberg Scale</li>
                                    <li>&ge;70% personal SMART goals achieved</li>
                                </ul>
                            </div>
                        </div>

                        {/* Goal 3 */}
                        <div className="bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-10 flex flex-col items-start gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-brand-gold">
                                <span className="font-serif font-black text-2xl">03</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Sustainability</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium mb-4">
                                    Financial stability & impact visibility
                                </p>
                                <ul className="text-sm space-y-2 text-foreground/60 font-medium list-disc list-inside">
                                    <li>Secure 2+ new strategic funders</li>
                                    <li>Map 10+ funding prospects</li>
                                    <li>Comprehensive Impact Report Dec 2026</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Partner Section */}
                <section className="mb-32">
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Impact & Trust</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-center text-foreground">Why Partner With Us?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {['Evidence-Based Curriculum', 'Growing Mentor Network', 'Proven Community Partnerships', 'Focus on the Underserved', 'Scalable & Replicable Model', 'Track Record of Impact'].map(reason => (
                            <div key={reason} className="p-6 bg-background border border-foreground/10 rounded-2xl shadow-sm text-center">
                                <h4 className="font-serif font-bold text-foreground text-lg">{reason}</h4>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Partnership Opportunities Section */}
                <section className="mb-32">
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Resource Requirements</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-center text-foreground">Partnership Options</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl">
                            <h4 className="text-xl font-serif font-bold mb-2">Programme Grants</h4>
                            <p className="text-foreground/70 text-sm">Restricted or unrestricted funding for the 2026 cycle.</p>
                        </div>
                        <div className="p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl">
                            <h4 className="text-xl font-serif font-bold mb-2">Multi-Year Partnerships</h4>
                            <p className="text-foreground/70 text-sm">Programme stability enabling evidence-building at scale.</p>
                        </div>
                        <div className="p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl">
                            <h4 className="text-xl font-serif font-bold mb-2">Corporate CSR</h4>
                            <p className="text-foreground/70 text-sm">Sponsor specific pillars, school sites, or coach stipends.</p>
                        </div>
                        <div className="p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl">
                            <h4 className="text-xl font-serif font-bold mb-2">Adopt-a-Boy</h4>
                            <p className="text-foreground/70 text-sm">Sponsor one boy's full secondary education journey.</p>
                        </div>
                        <div className="p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl">
                            <h4 className="text-xl font-serif font-bold mb-2">In-Kind Support</h4>
                            <p className="text-foreground/70 text-sm">Technology, printing, professional expertise.</p>
                        </div>
                        <div className="p-8 bg-foreground/[0.02] border border-foreground/10 rounded-2xl">
                            <h4 className="text-xl font-serif font-bold mb-2">Institutional Partner</h4>
                            <p className="text-foreground/70 text-sm">Schools & faith orgs to host and co-deliver curriculum.</p>
                        </div>
                    </div>
                </section>

                {/* Can't Attend? Donate CTA */}
                <section className="mb-12">
                    <div className="rounded-2xl bg-brand-gold/10 border border-brand-gold/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="font-serif font-bold text-foreground text-lg">Can&apos;t make it to an event?</p>
                            <p className="text-foreground/60 text-sm mt-1">Your financial gift keeps our programmes running. Every amount makes a real difference.</p>
                        </div>
                        <Link href="/donate" className="whitespace-nowrap flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-black font-bold rounded-full text-sm hover:brightness-110 transition-all shrink-0">
                            <Heart size={16} /> Donate Instead
                        </Link>
                    </div>
                </section>

                {/* Ways to Give */}
                <section className="mb-12">
                    <div className="flex flex-col items-center mb-10">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">More Ways to Help</span>
                        <h2 className="text-2xl md:text-3xl font-serif font-black text-center text-foreground">Ways to Give</h2>
                        <p className="text-foreground/60 text-sm mt-2 max-w-xl text-center">There are many ways to support Merlik Foundation beyond a one-time gift.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="p-6 bg-background border border-foreground/10 rounded-2xl flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0"><RefreshCw size={18} /></div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Monthly Giving</h4>
                                <p className="text-xs text-foreground/60">Set up a recurring gift to sustain our programmes year-round. Cancel any time.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-background border border-foreground/10 rounded-2xl flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0"><Building2 size={18} /></div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Corporate CSR / Employer Match</h4>
                                <p className="text-xs text-foreground/60">Ask your employer to match your donation or sponsor a pillar of our work.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-background border border-foreground/10 rounded-2xl flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0"><Heart size={18} /></div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Adopt-a-Boy</h4>
                                <p className="text-xs text-foreground/60">Sponsor one boy&apos;s full secondary education journey from enrolment to KCSE.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-background border border-foreground/10 rounded-2xl flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0"><Gift size={18} /></div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">In-Kind Donations</h4>
                                <p className="text-xs text-foreground/60">Donate technology, printed materials, or professional expertise to our teams.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-background border border-foreground/10 rounded-2xl flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0"><Scale size={18} /></div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Legacy / Planned Giving</h4>
                                <p className="text-xs text-foreground/60">Leave a lasting impact by including Merlik Foundation in your will or estate plan.</p>
                            </div>
                        </div>
                        <div className="p-6 bg-background border border-foreground/10 rounded-2xl flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0"><Handshake size={18} /></div>
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Institutional Partnership</h4>
                                <p className="text-xs text-foreground/60">Schools and faith organisations can host and co-deliver our curriculum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm underline underline-offset-4 hover:opacity-80 transition-opacity">
                            Contact us to discuss your giving options <ArrowRight size={14} />
                        </Link>
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
