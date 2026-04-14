"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Quote } from "lucide-react";

export default function EducationPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">

            {/* ─── Hero ─── */}
            <section className="relative min-h-[80vh] flex items-end pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/classroom.jpg"
                        alt="Boys in classroom"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-black/30" />
                </div>

                <div className={`relative z-10 max-w-4xl mx-auto w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-6 border border-brand-gold/30">
                        <BookOpen size={12} /> Boys&apos; Sponsorship &amp; Education
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-serif text-white leading-tight mb-6">
                        Rewriting stories that seemed<br />
                        <span className="text-brand-gold italic">destined for tragedy.</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                        One sponsorship at a time, we invest in the potential that others overlook.
                    </p>
                </div>
            </section>

            {/* ─── Overview ─── */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-4">Overview</p>
                        <h2 className="text-3xl md:text-5xl font-black font-serif text-foreground mb-8 leading-tight">
                            We see potential where<br />others see problems.
                        </h2>
                        <div className="space-y-5 text-foreground/75 leading-relaxed text-base md:text-lg font-medium">
                            <p>
                                In the quiet corners of our communities, teenage boys are fighting battles that shouldn&apos;t define their futures. Some wake up in homes where putting food on the table is a daily struggle. Others carry the weight of being the &ldquo;forgotten ones&rdquo;—caught between childhood and manhood, with no guiding hand to show them the way forward.
                            </p>
                            <p>
                                Our Boys&apos; Sponsorship Program isn&apos;t just about education—it&apos;s about rewriting stories that seemed destined for tragedy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── The Silent Crisis ─── */}
            <section className="py-24 px-6 bg-foreground/[0.02] border-y border-foreground/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black font-serif text-foreground mb-8 leading-tight">
                        The Silent Crisis: <span className="text-brand-gold italic">Why Boys Need Our Attention</span>
                    </h2>
                    <div className="space-y-5 text-foreground/75 leading-relaxed text-base md:text-lg font-medium">
                        <p>
                            Walk through any community struggling with poverty, and you&apos;ll notice something heartbreaking: while the conversation around empowering girls has gained momentum (and rightfully so), vulnerable boys often slip through the cracks. They&apos;re the ones standing at crossroads with no signposts, watching their dreams fade before they&apos;ve even had the chance to name them.
                        </p>
                        <p>
                            Without intervention, we lose them. They drop out of school, fall into destructive patterns, or simply give up on themselves. But here&apos;s what we&apos;ve learned: when you invest in a boy&apos;s potential, you don&apos;t just change his life—you transform entire communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── CTA Banner ─── */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/outreach.jpg" alt="Community outreach" fill className="object-cover" />
                    <div className="absolute inset-0 bg-brand-black/80" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <Heart className="text-brand-gold mx-auto mb-6" size={40} />
                    <h2 className="text-3xl md:text-5xl font-black font-serif text-white mb-6 leading-tight">Sponsor a Boy</h2>
                    <p className="text-white/70 text-lg mb-10 leading-relaxed">
                        Your support can change the course of a young boy&apos;s life—help provide education, mentorship, and opportunities for a brighter future.
                    </p>
                    <Link href="/donate"
                        className="inline-flex items-center gap-3 bg-brand-gold text-brand-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300">
                        Support Us by Donating <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* ─── Stories ─── */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-[11px] font-bold uppercase tracking-widest mb-3">Real Testimonies</p>
                        <h2 className="text-3xl md:text-5xl font-black font-serif text-foreground">Stories That Prove Change is Possible</h2>
                    </div>

                    {/* Peter's Story */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                            <Image src="/images/peter_masila.jpg" alt="Peter Masila" fill className="object-cover" />
                            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl border border-foreground/10 shadow-lg">
                                <p className="font-serif font-bold text-sm text-foreground">Peter Masila</p>
                                <p className="text-brand-gold text-[10px] uppercase font-bold tracking-widest">Makueni County</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-black font-serif text-foreground mb-6 leading-tight">
                                Peter&apos;s Journey: From <span className="text-brand-gold italic">Desperation to Graduation</span>
                            </h3>
                            <div className="space-y-4 text-foreground/75 leading-relaxed mb-8">
                                <p>When we first met Peter, he carried himself like someone who&apos;d already given up. His father had left when he was young. His mother worked multiple jobs just to keep them housed and fed. School felt like a luxury they couldn&apos;t afford, and Peter was not sure what his next phase of life would be.</p>
                                <p>Today, Peter stands on the verge of university graduation. He&apos;s become a leader among his peers, a source of support for his mother, and proof to his siblings that their circumstances are temporary—if they&apos;re willing to fight for something better.</p>
                            </div>
                            <div className="border-l-4 border-brand-gold pl-6 py-2">
                                <Quote className="text-brand-gold/40 mb-2" size={28} />
                                <p className="text-foreground/80 italic leading-relaxed">
                                    &ldquo;I used to think dreaming was pointless when you&apos;re poor. But Merlik Foundation didn&apos;t just pay my school fees—they taught me that my dreams were valid, and then they helped me build the skills to achieve them.&rdquo;
                                </p>
                                <p className="text-brand-gold font-bold text-sm mt-3">— Peter Masila</p>
                            </div>
                        </div>
                    </div>

                    {/* Max's Story */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl md:text-4xl font-black font-serif text-foreground mb-6 leading-tight">
                                Max&apos;s Metamorphosis: From <span className="text-brand-gold italic">Surviving to Thriving</span>
                            </h3>
                            <div className="space-y-4 text-foreground/75 leading-relaxed mb-8">
                                <p>Max joined our program as a quiet, withdrawn teenager whose academic potential was being crushed under family instability and self-doubt. He&apos;d internalized the message that boys from his background were destined for failure.</p>
                                <p>The transformation didn&apos;t happen overnight. It took months of patient mentorship, academic support, and gradual confidence-building. Today, Max is not only excelling in high school but has set his sights on medical school—his way of giving back to a community that taught him to survive, while we taught him to thrive.</p>
                            </div>
                            <div className="border-l-4 border-brand-gold pl-6 py-2">
                                <Quote className="text-brand-gold/40 mb-2" size={28} />
                                <p className="text-foreground/80 italic leading-relaxed">
                                    &ldquo;Before the program, I was just trying to make it through each day. Now I wake up excited about my future. I know exactly where I&apos;m going, and I have the tools to get there.&rdquo;
                                </p>
                                <p className="text-brand-gold font-bold text-sm mt-3">— Max</p>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl order-1 md:order-2">
                            <Image src="/images/max.jpg" alt="Max" fill className="object-cover" />
                            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl border border-foreground/10 shadow-lg">
                                <p className="font-serif font-bold text-sm text-foreground">Max</p>
                                <p className="text-brand-gold text-[10px] uppercase font-bold tracking-widest">Program Mentee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Bottom CTA ─── */}
            <section className="py-20 px-6 bg-foreground/[0.02] border-t border-foreground/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-black font-serif text-foreground mb-6">Ready to be part of a story?</h2>
                    <p className="text-foreground/60 text-lg mb-10">Every boy deserves a chapter where someone believed in him.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/donate" className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-300">
                            Donate Now <ArrowRight size={18} />
                        </Link>
                        <Link href="/get-involved" className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full font-bold hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                            Get Involved <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
