"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Megaphone, Handshake } from "lucide-react";

export default function OutreachPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const initiatives = [
        {
            icon: Megaphone,
            title: "Advocacy Campaigns",
            description:
                "We actively participate in and support advocacy campaigns that amplify the rights, protection, and empowerment of the boy child. Through strategic partnerships, public engagement, and policy influence, we raise awareness about the unique challenges facing vulnerable boys and push for systemic change.",
        },
        {
            icon: Handshake,
            title: "Merlik Social Responsibility / Partnership Engagements",
            description:
                "As part of our social responsibility program, we partner with like-minded institutions through participating in their engagements as a way of fostering SDG Goal 17 – enhancing partnerships for good.",
        },
    ];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">

            {/* ─── Hero ─── */}
            <section className="relative min-h-[80vh] flex items-end pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/gallery/488654850_2787690034753457_4611330111416720041_n.jpg" alt="Community outreach" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-black/30" />
                </div>
                <div className={`relative z-10 max-w-4xl mx-auto w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-6 border border-brand-gold/30">
                        <Globe size={12} /> Community Outreach
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-serif text-white leading-tight mb-6">
                        Uplifting Communities,<br />
                        <span className="text-brand-gold italic">one family at a time.</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                        Addressing the root causes of vulnerability by engaging families, schools, and communities.
                    </p>
                </div>
            </section>

            {/* ─── Overview ─── */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-4xl mx-auto">
                    <p className="text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-4">Overview</p>
                    <h2 className="text-3xl md:text-5xl font-black font-serif text-foreground mb-8 leading-tight">
                        Lasting change happens when<br />
                        <span className="text-brand-gold italic">communities are lifted together.</span>
                    </h2>
                    <div className="space-y-5 text-foreground/75 leading-relaxed text-base md:text-lg font-medium">
                        <p>
                            Our Community Outreach Program is designed to address the root causes of vulnerability among boys by engaging families, schools, local leaders, and other stakeholders in meaningful, transformative ways.
                        </p>
                        <p>
                            We go beyond the classroom—bringing hope, resources, and practical solutions to the communities our boys call home.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── What We Do ─── */}
            <section className="py-24 px-6 bg-foreground/[0.02] border-y border-foreground/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-3">Our Initiatives</p>
                        <h2 className="text-3xl md:text-4xl font-black font-serif text-foreground">What We Do</h2>
                        <p className="text-foreground/60 mt-4 text-lg max-w-2xl mx-auto">
                            Through our outreach efforts, we create safe, supportive environments where boys can thrive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {initiatives.map((item, i) => (
                            <div key={i}
                                className="p-10 md:p-12 bg-background rounded-3xl border border-foreground/10 hover:border-brand-gold/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-8 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                                    <item.icon size={26} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug">{item.title}</h3>
                                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Image + CTA ─── */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[4/3] shadow-2xl">
                        <Image src="/images/Education.jpg" alt="Outreach in action" fill className="object-cover" />
                    </div>
                    <div>
                        <Globe className="text-brand-gold mb-6" size={40} />
                        <h2 className="text-3xl md:text-4xl font-black font-serif text-foreground mb-6 leading-tight">
                            Support Our <span className="text-brand-gold italic">Community Outreach</span>
                        </h2>
                        <p className="text-foreground/75 leading-relaxed text-base md:text-lg mb-10">
                            Join us in bringing hope, education, and care directly to the communities that need it most. Your involvement helps us reach more families, uplift vulnerable groups, and create lasting impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/get-involved"
                                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-300">
                                Get Involved <ArrowRight size={18} />
                            </Link>
                            <Link href="/donate"
                                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full font-bold hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                                Donate <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
