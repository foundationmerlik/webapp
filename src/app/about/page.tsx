"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Globe, ShieldCheck } from "lucide-react";

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
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight mb-6 leading-none text-foreground animate-reveal">
                        Our Story. <span className="text-brand-gold italic">Our Mission.</span> <br />Our People.
                    </h1>
                    <p className="text-lg md:text-xl md:text-2xl text-foreground/80 font-sans max-w-2xl mx-auto animate-reveal delay-200">
                        A decade of building bridges, fostering hope, and empowering communities through sustainable impact.
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
                    <p className="text-4xl md:text-6xl font-black font-serif mb-6 text-foreground">A Legacy of Change</p>
                </div>

                <div className="relative border-l border-brand-gold/30 ml-4 md:ml-0 md:border-l-0">
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-brand-gold/30 transform -translate-x-1/2"></div>

                    {/* 2010 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:text-right pr-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2010</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Foundation Roots</h3>
                        </div>
                        <div className="md:pl-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                The Merlik Foundation was born in a small community center with a simple goal: to provide basic education tools to underserved children. Our founder, Sheila Ngui, saw a gap that needed a bridge.
                            </p>
                        </div>
                    </div>

                    {/* 2015 */}
                    <div className="relative mb-24 md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:order-2 md:pl-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2015</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Expanding Reach</h3>
                        </div>
                        <div className="md:order-1 md:text-right pr-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                After five years of grassroots success, we expanded our operations to three continents, focusing on clean water initiatives and healthcare infrastructure in remote villages.
                            </p>
                        </div>
                    </div>

                    {/* 2023 */}
                    <div className="relative md:grid md:grid-cols-2 md:gap-20 items-center pl-10 md:pl-0">
                        <div className="absolute -left-[5px] md:left-1/2 w-4 h-4 rounded-full bg-brand-gold transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 
                            shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-background"></div>
                        <div className="md:text-right pr-6">
                            <span className="text-brand-gold font-black font-serif text-4xl mb-2 block">2023</span>
                            <h3 className="text-3xl font-bold font-serif mb-4 text-foreground">Global Impact</h3>
                        </div>
                        <div className="md:pl-6">
                            <p className="text-foreground/70 font-medium leading-relaxed text-lg">
                                Today, Merlik Foundation supports over 200 projects annually, impacting more than 1.5 million lives through technology, education, and sustainable development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision: Large Typography */}
            <section className="bg-foreground/[0.02] py-40 border-y border-brand-gold/10 overflow-hidden relative">
                <div className="absolute -right-40 top-10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute -left-40 bottom-10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <div className="mb-32">
                        <h2 className="text-6xl md:text-[150px] font-black text-foreground opacity-5 uppercase mb-[-2rem] md:mb-[-4rem] font-serif leading-none select-none">Mission</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold leading-tight max-w-5xl mx-auto text-foreground">
                            To empower marginalized communities by providing <span className="text-brand-gold italic">sustainable solutions</span> to education, health, and economic inequality.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-6xl md:text-[150px] font-black text-foreground opacity-5 uppercase mb-[-2rem] md:mb-[-4rem] font-serif leading-none select-none">Vision</h2>
                        <p className="text-3xl md:text-5xl font-serif font-bold leading-tight max-w-5xl mx-auto text-foreground">
                            A world where opportunity is <span className="text-brand-gold italic">universal</span> and dignity is a fundamental right for every human being.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Grid */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Values</h2>
                    <p className="text-4xl md:text-6xl font-black font-serif text-foreground">The Pillars of Merlik</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service */}
                    <div className="p-12 border border-foreground/10 rounded-2xl bg-background text-center group hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all duration-500 hover:border-brand-gold/30">
                        <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            <HeartHandshake size={36} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Service</h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            Placing the needs of others above our own through dedicated action and empathy.
                        </p>
                    </div>

                    {/* Responsibility */}
                    <div className="p-12 border border-foreground/10 rounded-2xl bg-background text-center group hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all duration-500 hover:border-brand-gold/30 delay-100">
                        <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            <Globe size={36} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Responsibility</h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            Taking ownership of our impact and ensuring sustainable outcomes for every initiative.
                        </p>
                    </div>

                    {/* Integrity */}
                    <div className="p-12 border border-foreground/10 rounded-2xl bg-background text-center group hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] hover:-translate-y-2 transition-all duration-500 hover:border-brand-gold/30 delay-200">
                        <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            <ShieldCheck size={36} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Integrity</h3>
                        <p className="text-foreground/70 leading-relaxed font-medium">
                            Maintaining the highest ethical standards in our partnerships and financial transparency.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-32 px-6 bg-foreground/[0.02]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                    <div className="flex-1 order-2 md:order-1">
                        <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                            <div className="w-10 h-[1px] bg-brand-gold"></div> Leadership
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-[56px] font-black font-serif mb-8 leading-tight text-foreground">
                            The Visionary Behind the Movement
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-xl mb-8 font-sans">
                            Sheila Ngui has dedicated over two decades to humanitarian work. Under her leadership, the foundation has grown from a local initiative to a global force for good. Her philosophy is simple: <span className="italic">"Empowerment is not a gift, it's a right."</span>
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="px-8 py-3 bg-brand-gold text-white font-bold rounded-full hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all">
                                Reach Out
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center order-1 md:order-2 w-full">
                        <div className="relative w-full max-w-[450px]">
                            <div className="absolute -inset-4 md:-inset-6 border border-brand-gold/30 rounded-2xl md:rounded-3xl trnasform translate-x-3 translate-y-3"></div>
                            <div className="relative aspect-[3/4] bg-background overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl z-10 group">
                                <Image
                                    fill
                                    alt="Professional headshot of Sheila Ngui"
                                    className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                                    src="/images/sheila_ngui.jpg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <h4 className="text-3xl font-bold font-serif">Sheila Ngui</h4>
                                    <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mt-2">Founder & Executive Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 px-6 bg-brand-gold text-white relative overflow-hidden">
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
            </section>
        </>
    );
}
