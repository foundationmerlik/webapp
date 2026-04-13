"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Globe, ShieldCheck, BookOpen, Users } from "lucide-react";

export default function About() {
    return (
        <>
            {/* Parallax Hero Header */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-background/50">
                    <Image
                        src="/images/hands.png"
                        alt="Monochrome image of hands reaching towards a bright light"
                        fill
                        className="object-cover grayscale opacity-40 mix-blend-multiply dark:mix-blend-screen scale-105 animate-image-load"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif tracking-tight mb-6 leading-tight text-foreground animate-reveal">
                        Our Story. <span className="text-brand-gold italic">Our Mission.</span> <br />Our People.
                    </h1>
                    <p className="text-lg md:text-xl md:text-2xl text-foreground/80 font-sans max-w-2xl mx-auto animate-reveal delay-200">
                        Empowering the Boy Child Through Education, Mentorship & General Life Development.
                    </p>
                </div>
            </section>

            {/* The Story Section: Timeline */}
            <section className="py-32 px-6 max-w-7xl mx-auto relative z-20">
                <div className="mb-20">
                    <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                        <div className="w-10 h-[1px] bg-brand-gold"></div>
                        The Journey
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-foreground">
                        Empowering the Boy Child.
                    </h2>      </div>

                <div className="relative border-l border-brand-gold/30 ml-4 md:ml-0 md:border-l-0">
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-brand-gold/30 transform -translate-x-1/2"></div>

                    {/* 2017 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:text-right pr-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2017</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Foundation Roots</h3>
                        </div>
                        <div className="md:pl-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Merlik was born from a shared recognition that Kenya&apos;s boy child was being left behind without structured mentorship, role models, or life-skills support.
                            </p>
                        </div>
                    </div>

                    {/* 2019 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:order-2 md:pl-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2019</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Official Registration</h3>
                        </div>
                        <div className="md:order-1 md:text-right pr-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Registered as a Kenyan youth development organization officially focused on mentoring and equipping adolescent boys with the skills and values to lead.
                            </p>
                        </div>
                    </div>

                    {/* Present */}
                    <div className="relative md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:text-right pr-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">Present</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">A Growing Movement</h3>
                        </div>
                        <div className="md:pl-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                With 10+ trained coaches and 100+ volunteers, we are a growing movement transforming one boy at a time. The name &quot;MERLIK&quot; — derived from the Arabic word &quot;malki&quot; meaning king — remains at our core.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision: Responsive Grid */}
            <section className="bg-foreground/[0.02] py-24 md:py-32 border-y border-brand-gold/10 relative overflow-hidden">
                <div className="absolute -right-40 top-10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute -left-40 bottom-10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Mission */}
                        <div className="bg-background/80 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-brand-gold/20 shadow-xl relative overflow-hidden flex flex-col justify-center">
                            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black font-serif text-brand-gold/5 md:text-brand-gold/10 absolute -top-4 -right-4 select-none pointer-events-none">MISSION</h2>
                            <h3 className="text-3xl font-serif font-bold mb-6 text-foreground relative z-10 flex items-center gap-4">
                                <div className="w-10 h-[2px] bg-brand-gold"></div>
                                Our Mission
                            </h3>
                            <p className="text-xl md:text-3xl font-serif leading-relaxed font-semibold text-foreground/90 relative z-10">
                                Empowerment of the Boy Child through Education, Mentorship and General Life Development.
                            </p>
                        </div>
                        
                        {/* Vision */}
                        <div className="bg-brand-gold/5 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-brand-gold/20 shadow-xl relative overflow-hidden flex flex-col justify-center">
                            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black font-serif text-brand-gold/5 md:text-brand-gold/10 absolute -bottom-4 -right-4 select-none pointer-events-none">VISION</h2>
                            <h3 className="text-3xl font-serif font-bold mb-6 text-foreground relative z-10 flex items-center gap-4">
                                <div className="w-10 h-[2px] bg-brand-gold"></div>
                                Our Vision
                            </h3>
                            <p className="text-2xl md:text-4xl font-serif font-bold leading-relaxed text-foreground relative z-10">
                                Strengthening and Developing Nations <span className="text-brand-gold italic">one boy at a time.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            < section className="py-32 px-6 max-w-7xl mx-auto" >
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Approach</h2>
                    <p className="text-xl md:text-2xl font-serif font-medium text-foreground leading-relaxed">
                        Through carefully designed educational initiatives and mentorship programs, we address both immediate needs and long-term development goals. Our work focuses on building a community of empowered individuals who will shape the future with knowledge, integrity, and leadership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Education */}
                    <div className="p-12 border border-foreground/10 rounded-2xl bg-background text-center group hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all duration-500 hover:border-brand-gold/30">
                        <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            <BookOpen size={36} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Education</h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            Providing critical academic resources and scholarships to unlock paths to success.
                        </p>
                    </div>

                    {/* Mentorship */}
                    <div className="p-12 border border-foreground/10 rounded-2xl bg-background text-center group hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all duration-500 hover:border-brand-gold/30 delay-100">
                        <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            <Users size={36} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Mentorship</h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            Structured guidance based on 7 life competencies taught by experienced coaches.
                        </p>
                    </div>

                    {/* Community Outreach */}
                    <div className="p-12 border border-foreground/10 rounded-2xl bg-background text-center group hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all duration-500 hover:border-brand-gold/30 delay-200">
                        <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            <Globe size={36} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Community Outreach</h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            Advocacy and the Blue Bag initiative to tackle immediate wellbeing and safety.
                        </p>
                    </div>
                </div>
            </section >

            {/* Governance & Leadership Section */}
            < section className="py-32 px-6 bg-foreground/[0.02]" >
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                            <div className="w-10 h-[1px] bg-brand-gold"></div> Leadership & Accountability
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-[56px] font-black font-serif mb-8 leading-tight text-foreground">
                            Governance Structure
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                        {/* Management Team */}
                        <div>
                            <h4 className="text-2xl font-serif font-bold mb-6 text-foreground">Management Team</h4>
                            <div className="space-y-6">
                                <div className="p-6 bg-background border border-foreground/10 rounded-2xl shadow-sm flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-foreground/10 overflow-hidden relative shrink-0">
                                        <Image src="/images/sheila_ngui.jpg" alt="Sheila Ngui" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-foreground">Sheila Ngui</p>
                                        <p className="text-brand-gold font-semibold uppercase tracking-widest text-[10px] mt-1">Executive Director, Programme Dev. & Ops</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-background border border-foreground/10 rounded-2xl shadow-sm flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-foreground/10 overflow-hidden relative shrink-0">
                                        <Image src="/images/Lavinah.jpeg" alt="Lavinah Gonah" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-foreground">Lavinah Gonah</p>
                                        <p className="text-brand-gold font-semibold uppercase tracking-widest text-[10px] mt-1">Co-Founder, Community Outreach</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-background border border-foreground/10 rounded-2xl shadow-sm flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-foreground/10 overflow-hidden relative shrink-0">
                                        <Image src="/images/Herbert.jpeg" alt="Herbert Njoroge" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-foreground">Herbert Njoroge</p>
                                        <p className="text-brand-gold font-semibold uppercase tracking-widest text-[10px] mt-1">Co-Founder, Strategic Planning</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Governance Details */}
                        <div>
                            <h4 className="text-2xl font-serif font-bold mb-6 text-foreground">Accountability & Oversight</h4>
                            <div className="space-y-8 text-foreground/80 font-sans leading-relaxed">
                                <div>
                                    <strong className="text-foreground block mb-1">Legal Status</strong>
                                    <p>Company Limited by Guarantee, Republic of Kenya. Fully registered non-profit with operational capacity since 2019.</p>
                                </div>
                                <div>
                                    <strong className="text-foreground block mb-1">Board Oversight</strong>
                                    <p>Provides strategic guidance and ensures financial accountability. Regular reporting to all stakeholders.</p>
                                </div>
                                <div>
                                    <strong className="text-foreground block mb-1">Financial Controls</strong>
                                    <p>Transparent financial management with board oversight, regular stakeholder reporting, and full accountability for donor funds. Fully itemized budgets and programme reports available to donors upon request. We welcome restricted grants, unrestricted support, and in-kind contributions.</p>
                                </div>
                                <div>
                                    <strong className="text-foreground block mb-1">Safeguarding Policy</strong>
                                    <p>All coaches trained to identify safeguarding concerns. Referral pathways established.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Global Impact Alignment (SDGs) & Partners */}
            < section className="py-32 px-6" >
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                            <div className="w-10 h-[1px] bg-brand-gold"></div> Global Impact
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-[56px] font-black font-serif mb-8 leading-tight text-foreground">
                            SDG Alignment
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 1 (No Poverty)</strong>
                            <p className="text-foreground/70 text-sm">Sponsorship & career mentoring in informal settlements.</p>
                        </div>
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 3 (Good Health)</strong>
                            <p className="text-foreground/70 text-sm">Mental health support & life skills for wellbeing.</p>
                        </div>
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 4 (Quality Education)</strong>
                            <p className="text-foreground/70 text-sm">Scholarships & academic mentorship.</p>
                        </div>
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 5 (Gender Equality)</strong>
                            <p className="text-foreground/70 text-sm">Positive masculinity & equitable communities.</p>
                        </div>
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 8 (Decent Work)</strong>
                            <p className="text-foreground/70 text-sm">Career guidance & entrepreneurship.</p>
                        </div>
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 10 (Reduce Inequality)</strong>
                            <p className="text-foreground/70 text-sm">Targeting marginalized boys.</p>
                        </div>
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 16 (Peace & Justice)</strong>
                            <p className="text-foreground/70 text-sm">Ethical leaders building peaceful communities.</p>
                        </div>
                        <div className="p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl hover:border-brand-gold/30 transition-colors">
                            <strong className="text-brand-gold block mb-2 font-serif">SDG 17 (Partnerships)</strong>
                            <p className="text-foreground/70 text-sm">Schools, CBOs, government & corporates aligned.</p>
                        </div>
                    </div>

                    <div className="mt-24">
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <h4 className="font-serif font-bold text-3xl mb-4 text-brand-gold">Strategic Partnerships</h4>
                            <p className="text-foreground/70 text-lg leading-relaxed">
                                Merlik Foundation actively collaborates with Community Based Organizations, Civil Society Organizations, government institutions, regional bodies, and donors. These partnerships amplify our impact and ensure sustainable program delivery.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
                            {[
                                { name: "Yazua Afrika", logo: "/images/partners/yazua_afrika.png" },
                                { name: "Paper Hearts Foundation", logo: "/images/partners/paper_hearts.png", isWhiteLogo: true },
                                { name: "Mukuru Promotion Center", logo: "/images/partners/mukuru_promotion.png" },
                                { name: "Raising heARTs Foundation", logo: "/images/partners/raising_hearts.png" },
                                { name: "RI Welfare", logo: "/images/partners/ri_welfare.png" },
                                { name: "Rafiki Mtaani Podcast", logo: "/images/partners/rafiki_mtaani.png" },
                                { name: "ISI", logo: "/images/partners/isi.png" },
                                { name: "Noova Designs Kenya", logo: "/images/partners/noova_designs.png" },
                                { name: "Charitable Chefs", logo: null },
                                { name: "Okoth Obera", logo: null },
                                { name: "Seles", logo: null },
                                { name: "Social Worker Mike", logo: null },
                                { name: "Mukuru Rescue Center", logo: null },
                            ].map((p, idx) => (
                                <div key={idx} className="flex items-center justify-center p-6 bg-foreground/[0.02] border border-foreground/5 rounded-2xl h-32 hover:border-brand-gold/30 transition-all group overflow-hidden grayscale hover:grayscale-0 opacity-80 hover:opacity-100">
                                    {p.logo ? (
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <Image
                                                src={p.logo}
                                                alt={`${p.name} logo`}
                                                fill
                                                className={`object-contain transition-transform duration-500 group-hover:scale-105 ${p.isWhiteLogo ? 'invert dark:invert-0' : ''}`}
                                            />
                                        </div>
                                    ) : (
                                        <div className="text-center px-2 flex flex-col items-center justify-center h-full">
                                            <p className="font-serif font-black text-foreground/50 text-xs leading-tight mb-2 uppercase tracking-widest">{p.name}</p>
                                            <div className="h-[2px] w-8 bg-brand-gold/30 group-hover:w-16 transition-all duration-500"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Call to Action */}
            < section className="py-32 px-6 bg-brand-gold text-white relative overflow-hidden" >
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black font-serif mb-8 text-brand-black tracking-tight">Ready to make an impact?</h2>
                    <p className="text-2xl font-serif font-medium mb-12 opacity-90 text-brand-black italic">
                        Join our community of donors and volunteers committed to creating a better world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/get-involved" className="bg-brand-black text-white px-10 py-5 rounded-full font-black text-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all transform hover:-translate-y-1">
                            Become a Partner
                        </Link>
                        <Link href="/donate" className="border-2 border-brand-black text-brand-black bg-transparent px-10 py-5 rounded-full font-black text-lg hover:bg-brand-black hover:text-white transition-all transform hover:-translate-y-1">
                            Support Our Projects
                        </Link>
                    </div>
                </div>
            </section >
        </>
    );
}
