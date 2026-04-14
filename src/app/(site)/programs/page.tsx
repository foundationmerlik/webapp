"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, CheckCircle2, UserPlus, Heart, Users, Megaphone, Calendar, BookOpen, Search } from "lucide-react";

export default function Programs() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/images/programs_hero.jpg"
                        alt="Empowerment and mentorship illustration"
                        fill
                        className="object-cover opacity-50 mix-blend-screen scale-105 animate-image-load"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block animate-reveal">Our Mission</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 font-serif animate-reveal delay-100 drop-shadow-2xl">
                        Creating a Monarch of <br /><span className="text-brand-gold italic">Empowering Men.</span>
                    </h1>
                    <p className="text-base md:text-xl text-white/90 font-sans max-w-3xl mx-auto leading-relaxed mb-10 animate-reveal delay-200">
                        Empowering the next generation through structured mentorship, world-class education support, and strategic community advocacy.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-reveal delay-300">
                        <a href="#programs" className="w-full sm:w-auto bg-brand-gold text-brand-black px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1">
                            Explore Our Programs
                        </a>
                        <Link href="/get-involved" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1">
                            Become a Partner
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
                    <ChevronDown size={32} />
                </div>
            </section>

            <main className="relative" id="programs">

                {/* 01 Mentorship Program */}
                <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-foreground/5 bg-background">
                    <div className="flex flex-col justify-center p-8 lg:p-24 order-2 lg:order-1 relative z-10">
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <span className="text-brand-gold font-black font-serif text-6xl lg:text-8xl mb-4 block opacity-20 select-none">01</span>
                            <h2 className="text-4xl lg:text-6xl font-black font-serif mb-6 text-foreground leading-tight">Mentorship <br />Program</h2>
                            <h3 className="text-xl lg:text-2xl font-semibold font-serif text-brand-gold mb-6 italic">The Mentorship Manual</h3>
                            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed mb-10">
                                Our flagship program provides structured guidance and professional development for young men. We believe that true power comes from disciplined growth and the wisdom of those who have paved the way.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium text-foreground"><strong>Identity & Purpose:</strong> Self-discovery, values.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium text-foreground"><strong>Communication:</strong> Emotional intelligence, teamwork.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium text-foreground"><strong>Leadership:</strong> Servant leadership, civic duty.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium text-foreground"><strong>Financial Literacy:</strong> Budgeting, entrepreneurship.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium text-foreground"><strong>Digital Citizenship:</strong> Online safety, computer skills.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium text-foreground"><strong>Health & Wellbeing:</strong> Mental & reproductive health.</span>
                                </li>
                                <li className="flex items-start gap-4 sm:col-span-2">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                                    <span className="text-sm font-medium text-foreground"><strong>Career Pathways:</strong> SMART goals, higher education.</span>
                                </li>
                            </ul>
                            <Link href="/get-involved" className="inline-flex items-center gap-4 bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                                <UserPlus size={20} className="text-brand-gold group-hover:scale-110 transition-transform" />
                                Sign Up as a Mentor
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[60vh] lg:h-auto order-1 lg:order-2 overflow-hidden bg-background">
                        <div className="sticky top-20 h-full lg:h-[calc(100vh-80px)] w-full">
                            <Image
                                src="/images/Mentorship.jpg"
                                alt="Two men shaking hands in a professional mentorship meeting"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background hidden lg:block"></div>
                        </div>
                    </div>
                </section>

                {/* 02 Education Support */}
                <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-foreground/5 bg-background">
                    <div className="relative h-[60vh] lg:h-auto order-1 overflow-hidden bg-background">
                        <div className="sticky top-20 h-full lg:h-[calc(100vh-80px)] w-full">
                            <Image
                                src="/images/classroom.jpg"
                                alt="Students studying together in a modern academic library"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background hidden lg:block"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-24 order-2 relative z-10">
                        <div className="max-w-xl mx-auto lg:mx-0 ml-auto">
                            <span className="text-brand-gold font-black font-serif text-6xl lg:text-8xl mb-4 block opacity-20 select-none text-right lg:text-left">02</span>
                            <h2 className="text-4xl lg:text-6xl font-black font-serif mb-6 text-foreground leading-tight text-right lg:text-left">Education <br />Support</h2>
                            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed mb-10 text-right lg:text-left">
                                Empowering minds through comprehensive educational resources. We break down the barriers to learning, ensuring every young man has the academic tools he needs to succeed.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                <div className="p-8 bg-foreground/[0.03] rounded-2xl border border-foreground/10 hover:border-brand-gold transition-colors group">
                                    <div className="w-12 h-12 bg-white dark:bg-[#111111] shadow-md rounded-xl flex items-center justify-center mb-6">
                                        <BookOpen size={24} className="text-brand-gold" />
                                    </div>
                                    <p className="font-bold text-xl text-foreground mb-2 font-serif">Scholarships</p>
                                    <p className="text-sm text-foreground/60 font-medium">Merit-based financial aid for higher education</p>
                                </div>
                                <div className="p-8 bg-foreground/[0.03] rounded-2xl border border-foreground/10 hover:border-brand-gold transition-colors group">
                                    <div className="w-12 h-12 bg-white dark:bg-[#111111] shadow-md rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-xl text-foreground mb-2 font-serif">Tech Lab</p>
                                    <p className="text-sm text-foreground/60 font-medium">Hardware & connectivity access for remote learning</p>
                                </div>
                            </div>

                            <div className="flex justify-end lg:justify-start">
                                <Link href="/donate" className="inline-flex items-center gap-4 bg-brand-gold text-brand-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all group">
                                    <Heart size={20} className="text-brand-black group-hover:scale-110 transition-transform" />
                                    Support a Scholar
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03 Community Outreach */}
                <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-foreground/5 bg-background">
                    <div className="flex flex-col justify-center p-8 lg:p-24 order-2 lg:order-1 relative z-10">
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <span className="text-brand-gold font-black font-serif text-6xl lg:text-8xl mb-4 block opacity-20 select-none">03</span>
                            <h2 className="text-4xl lg:text-6xl font-black font-serif mb-6 text-foreground leading-tight">Community <br />Outreach</h2>
                            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed mb-10">
                                We meet the boys where they are. Through grassroots advocacy and direct action on the streets, we ensure no boy slips through the cracks of a busy society.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex gap-6 p-6 rounded-2xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-colors border border-foreground/5">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 flex flex-col items-center justify-center shrink-0">
                                        <Users size={28} className="text-brand-gold" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="font-bold text-xl font-serif text-foreground mb-1">Youth Forums</h4>
                                        <p className="text-foreground/60 font-medium text-sm leading-relaxed">Safe spaces in community centers for open dialogue and collective problem-solving.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 p-6 rounded-2xl bg-foreground/[0.03] hover:bg-foreground/[0.05] transition-colors border border-foreground/5">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 flex flex-col items-center justify-center shrink-0">
                                        <Megaphone size={28} className="text-brand-gold" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="font-bold text-xl font-serif text-foreground mb-1">Policy Advocacy</h4>
                                        <p className="text-foreground/60 font-medium text-sm leading-relaxed">Representing youth interests in local government to create systemic change.</p>
                                    </div>
                                </div>
                            </div>

                            <Link href="/get-involved" className="inline-flex items-center gap-4 bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                                <Calendar size={20} className="text-brand-gold group-hover:scale-110 transition-transform" />
                                Join Our Next Event
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[60vh] lg:h-auto order-1 lg:order-2 overflow-hidden bg-background">
                        <div className="sticky top-20 h-full lg:h-[calc(100vh-80px)] w-full">
                            <Image
                                src="/images/outreach.jpg"
                                alt="A group of diverse volunteers working together outdoors"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background hidden lg:block"></div>
                        </div>
                    </div>
                </section>

                {/* 04 The Crisis & Research Case */}
                <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-background">
                    <div className="relative h-[60vh] lg:h-auto order-1 overflow-hidden bg-background">
                        <div className="sticky top-20 h-full lg:h-[calc(100vh-80px)] w-full">
                            <Image
                                src="/images/Education.jpg"
                                alt="Youth looking towards the future"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background hidden lg:block"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-24 order-2 relative z-10">
                        <div className="max-w-xl mx-auto lg:mx-0 ml-auto">
                            <span className="text-brand-gold font-black font-serif text-6xl lg:text-8xl mb-4 block opacity-20 select-none text-right lg:text-left">04</span>
                            <h2 className="text-4xl lg:text-5xl font-black font-serif mb-6 text-foreground leading-tight text-right lg:text-left">The Crisis & <br />Research Case</h2>
                            <p className="text-foreground/70 text-base md:text-lg font-medium leading-relaxed mb-8 text-right lg:text-left">
                                Kenya is a young nation—75% of all Kenyans are under 35. Yet systems to support boys are fragmented. Our model is built on evidence-based research showing significant improvements in behavioral, social-emotional, and academic outcomes.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-foreground/[0.03] rounded-2xl border-l-4 border-brand-gold">
                                    <p className="font-bold text-2xl font-serif text-foreground mb-1">30.8%</p>
                                    <p className="text-xs text-foreground/70">Secondary students report alcohol use.</p>
                                </div>
                                <div className="p-4 bg-foreground/[0.03] rounded-2xl border-l-4 border-brand-gold">
                                    <p className="font-bold text-2xl font-serif text-foreground mb-1">74%</p>
                                    <p className="text-xs text-foreground/70">Lifetime substance use (street youth).</p>
                                </div>
                                <div className="p-4 bg-foreground/[0.03] rounded-2xl border-l-4 border-brand-gold">
                                    <p className="font-bold text-2xl font-serif text-foreground mb-1">&lt;1 in 10</p>
                                    <p className="text-xs text-foreground/70">Boys in informal settlements have a mentor.</p>
                                </div>
                                <div className="p-4 bg-foreground/[0.03] rounded-2xl border-l-4 border-brand-gold">
                                    <p className="font-bold text-2xl font-serif text-foreground mb-1">SDQ</p>
                                    <p className="text-xs text-foreground/70">Strengths & Difficulties Questionnaire used.</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 justify-end lg:justify-start">
                                <Link href="/get-involved" className="inline-flex justify-center items-center gap-4 bg-brand-gold text-brand-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                                    <UserPlus size={20} className="text-brand-black group-hover:scale-110 transition-transform" />
                                    Become a Mentor
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 05 Geographic Reach */}
                <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen border-t border-foreground/5 bg-background">
                    <div className="flex flex-col justify-center p-8 lg:p-24 order-2 lg:order-1 relative z-10">
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <span className="text-brand-gold font-black font-serif text-6xl lg:text-8xl mb-4 block opacity-20 select-none">05</span>
                            <h2 className="text-4xl lg:text-6xl font-black font-serif mb-6 text-foreground leading-tight">Geographic <br />Reach</h2>
                            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed mb-10">
                                Over 14 counties. From urban informal settlements in Nairobi to schools in the Rift Valley, our growing network of dedicated volunteers delivers impact across Kenya.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div>
                                    <h4 className="font-bold text-xl font-serif text-foreground mb-3">Active Programme Implementation</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 shrink-0"></div>
                                            <p className="text-foreground/70 text-sm leading-relaxed"><strong className="text-foreground">Nairobi County:</strong> Mukuru Promotion Center, Mukuru Rescue Center (100+ boys), New Life Children's Home (Kibra).</p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 shrink-0"></div>
                                            <p className="text-foreground/70 text-sm leading-relaxed"><strong className="text-foreground">Makueni County:</strong> Kivandini Comprehensive School, Wote (Oct 2025) - Joint session with Paper Hearts Foundation.</p>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 shrink-0"></div>
                                            <p className="text-foreground/70 text-sm leading-relaxed"><strong className="text-foreground">Trans Nzoia / Rift Valley:</strong> United Matunda Academy - fully deployed 12-month programme.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl font-serif text-foreground mb-3">Volunteer & Coaching Network</h4>
                                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                                        Nairobi, Nakuru, Uasin Gishu, Kakamega, Busia, Kisumu, Kajiado, Makueni, Machakos, Embu, Meru, Trans Nzoia, Keiyo-Marakwet, Kisii.
                                    </p>
                                    <h5 className="font-bold text-sm uppercase tracking-widest text-foreground/50 mb-2">Coach Age Profile</h5>
                                    <div className="flex flex-wrap gap-2 text-xs font-bold font-sans">
                                        <span className="px-3 py-1 bg-foreground/[0.05] rounded-full">18-24: 16%</span>
                                        <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full">25-30: 39%</span>
                                        <span className="px-3 py-1 bg-foreground/[0.05] rounded-full">31-34: 34%</span>
                                        <span className="px-3 py-1 bg-foreground/[0.05] rounded-full">35-40: 11%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[60vh] lg:h-auto order-1 lg:order-2 overflow-hidden bg-background flex items-center justify-center p-12">
                        <div className="relative w-full h-full max-h-[800px] rounded-[3rem] overflow-hidden border border-foreground/10 shadow-xl group">
                            <Image
                                src="/images/map.png"
                                alt="Map highlighting our geographic reach in Kenya"
                                fill
                                className="object-cover  transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
