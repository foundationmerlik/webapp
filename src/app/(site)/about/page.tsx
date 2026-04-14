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
                        className="object-cover  scale-105 animate-image-load"
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

                    {/* 2019 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:text-right pr-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2019</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Foundation Roots</h3>
                        </div>
                        <div className="md:pl-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Merlik Foundation established by dedicated community members in Nairobi.
                            </p>
                        </div>
                    </div>

                    {/* 2020 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:order-2 md:pl-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2020</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">First Success</h3>
                        </div>
                        <div className="md:order-1 md:text-right pr-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                First sponsored boy, Peter Masila, successfully completes high school and earns university placement.
                            </p>
                        </div>
                    </div>

                    {/* 2022 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:text-right pr-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2022</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Structured Mentorship</h3>
                        </div>
                        <div className="md:pl-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Launch of structured mentorship program matching boys with professional mentors.
                            </p>
                        </div>
                    </div>

                    {/* 2023 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:order-2 md:pl-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2023</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Expanded Outreach</h3>
                        </div>
                        <div className="md:order-1 md:text-right pr-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Community outreach expanded with Blue Umbrella Day and Boy Child Awareness Walk partnerships.
                            </p>
                        </div>
                    </div>

                    {/* 2024 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:text-right pr-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2024</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Scaling Impact</h3>
                        </div>
                        <div className="md:pl-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Volunteer network grows to 18+ mission partners. 300+ boys impacted across programs.
                            </p>
                        </div>
                    </div>

                    {/* 2025 */}
                    <div className="relative md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:order-2 md:pl-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2025</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Strategic Growth</h3>
                        </div>
                        <div className="md:order-1 md:text-right pr-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Deepened strategic partnerships with CBOs, government bodies, and regional networks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars: Mission, Vision, Approach, Partnerships */}
            <section className="bg-foreground/[0.02] py-24 md:py-32 border-y border-brand-gold/10 relative overflow-hidden">
                <div className="absolute -right-40 top-10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute -left-40 bottom-10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <div className="bg-[#FAF9F6] dark:bg-background/80 p-10 md:p-12 rounded-[2rem] border border-brand-gold/20 shadow-sm relative flex flex-col hover:shadow-md transition-shadow">
                            <span className="text-brand-gold font-bold text-[11px] uppercase tracking-widest border border-brand-gold/30 rounded-full px-4 py-1.5 self-start mb-8">
                                Mission
                            </span>
                            <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">
                                Our Mission
                            </h3>
                            <p className="text-foreground/80 font-sans leading-relaxed text-lg font-medium">
                                Empowerment of the Boy Child through Education, Mentorship and General Life Development.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-[#FAF9F6] dark:bg-background/80 p-10 md:p-12 rounded-[2rem] border border-brand-gold/20 shadow-sm relative flex flex-col hover:shadow-md transition-shadow">
                            <span className="text-brand-gold font-bold text-[11px] uppercase tracking-widest border border-brand-gold/30 rounded-full px-4 py-1.5 self-start mb-8">
                                Vision
                            </span>
                            <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">
                                Our Vision
                            </h3>
                            <p className="text-foreground/80 font-sans leading-relaxed text-lg font-medium">
                                Strengthening and Developing Nations one boy at a time.
                            </p>
                        </div>

                        {/* Approach Card */}
                        <div className="bg-[#FAF9F6] dark:bg-background/80 p-10 md:p-12 rounded-[2rem] border border-brand-gold/20 shadow-sm relative flex flex-col hover:shadow-md transition-shadow">
                            <span className="text-brand-gold font-bold text-[11px] uppercase tracking-widest border border-brand-gold/30 rounded-full px-4 py-1.5 self-start mb-8">
                                Approach
                            </span>
                            <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">
                                Our Approach
                            </h3>
                            <p className="text-foreground/80 font-sans leading-relaxed text-base md:text-lg font-medium">
                                Through carefully designed educational initiatives and mentorship programs, we address both immediate needs and long-term development goals. Our work focuses on building a community of empowered individuals who will shape the future with knowledge, integrity, and leadership.
                            </p>
                        </div>

                        {/* Partnerships Card */}
                        <div className="bg-[#FAF9F6] dark:bg-background/80 p-10 md:p-12 rounded-[2rem] border border-brand-gold/20 shadow-sm relative flex flex-col hover:shadow-md transition-shadow">
                            <span className="text-brand-gold font-bold text-[11px] uppercase tracking-widest border border-brand-gold/30 rounded-full px-4 py-1.5 self-start mb-8">
                                Partnerships
                            </span>
                            <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">
                                Strategic Partnerships
                            </h3>
                            <p className="text-foreground/80 font-sans leading-relaxed text-base md:text-lg font-medium">
                                Merlik Foundation actively collaborates with Community Based Organizations, Civil Society Organizations, government institutions, regional bodies, and donors. These partnerships amplify our impact and ensure sustainable program delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            < section className="pb-32 px-6 max-w-7xl mx-auto pt-16" >

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
            <section className="pt-32 pb-0 px-6">
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
                            <h4 className="font-serif font-bold text-3xl mb-4 text-brand-gold">Our Partners</h4>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
                            {[
                                { name: "Yazua Afrika", logo: "/images/partners/yazua_afrika.png" },
                                { name: "Paper Hearts Foundation", logo: "/images/partners/paper_hearts.png", isWhiteLogo: true, bgColor: "#EB81A9" },
                                { name: "Mukuru Promotion Center", logo: "/images/partners/mukuru_promotion.png" },
                                { name: "Raising heARTs Foundation", logo: "/images/partners/raising_hearts.png", isWhiteLogo: true },
                                { name: "RI Welfare", logo: "/images/partners/ri_welfare.png" },
                                { name: "Rafiki Mtaani Podcast", logo: "/images/partners/rafiki_mtaani.png" },
                                { name: "ISI", logo: "/images/partners/isi.png", isWhiteLogo: true },
                                { name: "Noova Designs Kenya", logo: "/images/partners/noova_designs.png" },
                                { name: "Charitable Chefs", logo: "/images/partners/charitable.png" },
                                { name: "Okoth Obera", logo: "/images/partners/okoth.png" },
                                { name: "Seles", logo: "/images/partners/seles.png" },
                                { name: "Social Worker Mike", logo: "/images/partners/social_workers.jpg" },
                            ].map((p, idx) => (
                                <div key={idx} className="flex items-center justify-center h-24 w-full transition-all group overflow-hidden hover:-translate-y-1">
                                    {p.logo ? (
                                        <div className={`relative w-full h-full flex items-center justify-center ${p.bgColor ? 'p-6 rounded-3xl' : ''}`} style={p.bgColor ? { backgroundColor: p.bgColor } : {}}>
                                            <Image
                                                src={p.logo}
                                                alt={`${p.name} logo`}
                                                fill
                                                className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                                            />
                                        </div>
                                    ) : (
                                        <div className="text-center px-2 flex flex-col items-center justify-center h-full opacity-40 group-hover:opacity-100 transition-opacity">
                                            <p className="font-serif font-black text-foreground text-xs leading-tight mb-2 uppercase tracking-widest">{p.name}</p>
                                            <div className="h-[1px] w-6 bg-brand-gold transition-all duration-500 group-hover:w-12"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Supplemental Partners Scroller */}
            <section className="mx-auto w-full xl:max-w-[1375px] px-4 lg:px-6 mb-20">
                <div className="scroller relative z-10 overflow-hidden" style={{ "--animation-direction": "forwards", "--animation-duration": "80s" } as any}>
                    <div className="flex min-w-full shrink-0 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused] gap-2">
                        {[
                            "Transform Nations", "Charitable Chefs", "Zoom Afrika", 
                            "Mukuru Promotion Centre", "Mukuru Rescue Centre", 
                            "Mji wa Huruma - Home for the Elderly",
                            "Transform Nations", "Charitable Chefs", "Zoom Afrika", 
                            "Mukuru Promotion Centre", "Mukuru Rescue Centre", 
                            "Mji wa Huruma - Home for the Elderly"
                        ].map((partner, i) => (
                            <div key={`p1-${i}`} className="rounded-2xl border border-foreground/5 text-card-foreground shadow-sm p-6 min-w-[200px] h-[100px] flex items-center justify-center bg-secondary-color group hover:border-brand-gold/30 transition-all duration-500">
                                <p className="font-black text-sm md:text-base uppercase text-primary-color text-center leading-tight tracking-widest" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                                    {partner}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-4"></div>

                <div className="scroller relative z-10 overflow-hidden" style={{ "--animation-direction": "reverse", "--animation-duration": "80s" } as any}>
                    <div className="flex min-w-full shrink-0 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused] gap-2">
                        {[
                            "Mike the Social Worker", "Lula Homes", "Tribe Hotel", 
                            "Hummingbird Transport", "Raising Hearts Foundation", 
                            "Yazua Afrika", "Paper Hearts Foundation", "United Matunda Academy",
                            "Mike the Social Worker", "Lula Homes", "Tribe Hotel", 
                            "Hummingbird Transport", "Raising Hearts Foundation", 
                            "Yazua Afrika", "Paper Hearts Foundation", "United Matunda Academy"
                        ].map((partner, i) => (
                            <div key={`p2-${i}`} className="rounded-2xl border border-foreground/5 text-card-foreground shadow-sm p-6 min-w-[200px] h-[100px] flex items-center justify-center bg-secondary-color group hover:border-brand-gold/30 transition-all duration-500">
                                <p className="font-black text-sm md:text-base uppercase text-primary-color text-center leading-tight tracking-widest" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                                    {partner}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
