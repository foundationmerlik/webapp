"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, CheckCircle, Crown } from "lucide-react";

export default function MentorshipPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const values = [
        "Build confidence and character.",
        "Encourage responsible behavior and decision-making.",
        "Nurture academic and personal growth.",
        "Instill values like integrity, leadership, and resilience.",
    ];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">

            {/* ─── Hero ─── */}
            <section className="relative min-h-[80vh] flex items-end pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/Mentorship.jpg" alt="Mentorship session" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-black/30" />
                </div>
                <div className={`relative z-10 max-w-4xl mx-auto w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-6 border border-brand-gold/30">
                        <Crown size={12} /> Mentorship Program
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-serif text-white leading-tight mb-6">
                        Creating a Monarch of<br />
                        <span className="text-brand-gold italic">Empowered Men.</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                        Pairing boys with dedicated mentors who walk alongside them on the journey to manhood.
                    </p>
                </div>
            </section>

            {/* ─── Overview ─── */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-4xl mx-auto">
                    <p className="text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-4">Overview</p>
                    <h2 className="text-3xl md:text-5xl font-black font-serif text-foreground mb-8 leading-tight">
                        Education alone <span className="text-brand-gold italic">is not enough.</span>
                    </h2>
                    <div className="space-y-5 text-foreground/75 leading-relaxed text-base md:text-lg font-medium">
                        <p>
                            At Merlik Foundation, we recognize that young boys also need guidance, encouragement, and positive role models to navigate life&apos;s challenges. That&apos;s why mentorship is a cornerstone of our Boys&apos; Support Program. We match each boy with a dedicated mentor who walks alongside them, offering support, accountability, and hope.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Why Mentorship Matters ─── */}
            <section className="py-24 px-6 bg-foreground/[0.02] border-y border-foreground/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                        <Image src="/images/classroom.jpg" alt="Boys in session" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black font-serif text-foreground mb-6 leading-tight">
                            Why Mentorship <span className="text-brand-gold italic">Matters</span>
                        </h2>
                        <p className="text-foreground/75 leading-relaxed mb-8 text-base md:text-lg">
                            Many vulnerable boys grow up without consistent male role models or a stable support system. This gap often leads to low self-esteem, poor decision-making, and a loss of direction during critical teenage years. Mentorship helps bridge that gap.
                        </p>
                        <p className="text-foreground font-bold mb-6">Through mentorship, we:</p>
                        <ul className="space-y-4">
                            {values.map((v, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-brand-gold shrink-0 mt-0.5" size={20} />
                                    <span className="text-foreground/80 leading-relaxed">{v}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-foreground/75 leading-relaxed mt-8 text-base md:text-lg">
                            Our mentors are carefully selected professionals, educators, and community leaders who understand the unique struggles these boys face. They serve not just as guides, but as trusted companions on the journey to manhood.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Join CTA ─── */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/outreach.jpg" alt="Community" fill className="object-cover" />
                    <div className="absolute inset-0 bg-brand-black/85" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <Users className="text-brand-gold mx-auto mb-6" size={40} />
                    <h2 className="text-3xl md:text-5xl font-black font-serif text-white mb-6 leading-tight">Join Us in Shaping Young Lives</h2>
                    <p className="text-white/70 text-lg mb-10 leading-relaxed">
                        We believe it takes a village to raise a child—and mentors are a vital part of that village.
                    </p>
                    <Link href="/get-involved"
                        className="inline-flex items-center gap-3 bg-brand-gold text-brand-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300">
                        Become a Mentor <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* ─── Bottom nav links ─── */}
            <section className="py-20 px-6 bg-background border-t border-foreground/5">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-black font-serif text-foreground mb-12">Explore Our Programs</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { label: "Education", href: "/programs/education", desc: "Sponsorship & academic support for boys in need." },
                            { label: "Community Outreach", href: "/programs/outreach", desc: "Engaging families and communities for lasting change." },
                            { label: "Get Involved", href: "/get-involved", desc: "Volunteer, partner, or support our mission." },
                        ].map((link) => (
                            <Link key={link.href} href={link.href}
                                className="p-8 rounded-2xl border border-foreground/10 hover:border-brand-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left">
                                <p className="font-serif font-bold text-xl text-foreground mb-2 group-hover:text-brand-gold transition-colors">{link.label}</p>
                                <p className="text-foreground/60 text-sm leading-relaxed">{link.desc}</p>
                                <ArrowRight className="text-brand-gold mt-4 group-hover:translate-x-2 transition-transform" size={18} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
