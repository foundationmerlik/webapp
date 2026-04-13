"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Handshake, ShieldCheck, Sun, Compass, Activity, Users } from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Boychild mental health themes for the marquee
  const marqueeItems = [
    { icon: Brain, text: "Mental Resilience" },
    { icon: Handshake, text: "Brotherhood Support" },
    { icon: ShieldCheck, text: "Safe Spaces" },
    { icon: Sun, text: "Hope & Healing" },
    { icon: Compass, text: "Guidance" },
    { icon: Activity, text: "Emotional Balance" },
    { icon: Users, text: "Community" }
  ];

  const partnerLogos = [
    { name: "Yazua Afrika", logo: "/images/partners/yazua_afrika.png" },
    { name: "Paper Hearts Foundation", logo: "/images/partners/paper_hearts.png", isWhiteLogo: true },
    { name: "Mukuru Promotion Center", logo: "/images/partners/mukuru_promotion.png" },
    { name: "Raising heARTs Foundation", logo: "/images/partners/raising_hearts.png", isWhiteLogo: true },
    { name: "RI Welfare", logo: "/images/partners/ri_welfare.png" },
    { name: "Rafiki Mtaani Podcast", logo: "/images/partners/rafiki_mtaani.png" },
    { name: "ISI", logo: "/images/partners/isi.png", isWhiteLogo: true },
    { name: "Noova Designs Kenya", logo: "/images/partners/noova_designs.png" },
    { name: "Charitable Chefs", logo: "/images/partners/charitable.png" },
    { name: "Okoth Obera", logo: "/images/partners/okoth.png" },
    { name: "Seles", logo: "/images/partners/seles.png" },
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex items-center pt-32 pb-8 overflow-hidden bg-background" style={{ minHeight: 'calc(100svh - 0px)' }}>

        {/* Background Video Setup */}
        <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-end bg-background pointer-events-none">
          <div className="relative w-full md:w-[65%] h-full">
            <video
              src="/hero-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover object-[70%_center] lg:object-center ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            />
            {/* Soft Gradient Mask for seamless blending using CSS vars mapping to bg color map */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent w-full md:w-[80%]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden"></div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pointer-events-none">
          <div className="max-w-[600px] pointer-events-auto mt-4 sm:mt-0 pb-24">

            {/* Eyebrow Label */}
            <div className={`flex items-center gap-3 mb-3 sm:mb-4 animate-reveal ${isLoaded ? '' : 'opacity-0'}`}>
              <div className="h-[1px] w-12 bg-brand-gold"></div>
              <span className="uppercase tracking-widest text-xs font-semibold text-brand-gold flex items-center gap-2">
                <Sparkles size={14} /> Merlik Foundation
              </span>
            </div>

            {/* Main Typographic Headline */}
            <div className={`font-serif text-3xl sm:text-4xl leading-tight text-foreground animate-reveal delay-100 ${isLoaded ? '' : 'opacity-0'}`}>
              Restoring
            </div>

            <h2 className={`font-serif text-5xl sm:text-6xl md:text-[75px] font-bold split-text my-1 animate-reveal delay-100 ${isLoaded ? '' : 'opacity-0'}`}>
              ORDER
              <span>ORDER</span>
              <span>ORDER</span>
              <span>PURPOSE</span>
            </h2>

            <div className={`font-serif text-3xl sm:text-4xl leading-tight mb-4 text-foreground animate-reveal delay-100 ${isLoaded ? '' : 'opacity-0'}`}>
              to the Hearts of Men.
            </div>

            {/* Sub-headline Paragraph */}
            <p className={`text-sm sm:text-base text-foreground/70 mb-5 leading-relaxed animate-reveal delay-200 ${isLoaded ? '' : 'opacity-0'}`}>
              Every great nation is built on the shoulders of strong, purposeful men. At Merlik Foundation, we walk with boys on their journey to become exactly that — one life at a time.
            </p>

            {/* Emerson Quote block */}
            <blockquote className={`relative border-l-2 border-brand-gold pl-4 py-1 mb-8 animate-reveal delay-300 ${isLoaded ? '' : 'opacity-0'}`}>
              <p className="italic text-foreground/60 text-sm leading-relaxed">
                “Our chief want in life is somebody who will make us do what we can.”
              </p>
              <footer className="text-xs font-semibold text-foreground/80 mt-1 tracking-wide uppercase">
                — Ralph Waldo Emerson
              </footer>
            </blockquote>

            {/* Call to Actions */}
            <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-reveal delay-400 ${isLoaded ? '' : 'opacity-0'}`}>
              <Link href="/donate" className="btn-shimmer flex items-center justify-center gap-3 bg-brand-gold text-white px-6 py-3 rounded-full font-semibold shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                Support a Boy Today
                <ArrowRight size={18} />
              </Link>

              <Link href="/programs" className="flex items-center justify-center gap-3 bg-background/80 backdrop-blur-sm text-foreground border-2 border-foreground/20 px-6 py-3 rounded-full font-semibold hover:border-foreground transition-all duration-300">
                Learn About Our Programs
              </Link>
            </div>

          </div>
        </div>

        {/* Endless Marquee Loop */}
        <div className={`absolute bottom-0 left-0 w-full bg-background/80 backdrop-blur-md border-t border-black/5 py-4 z-20 overflow-hidden marquee-container transition-opacity duration-1000 delay-[600ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="marquee-track">
            {/* First Set */}
            <div className="flex items-center">
              {marqueeItems.map((item, idx) => (
                <div key={`set1-${idx}`} className="flex items-center mx-6 sm:mx-10 marquee-item cursor-pointer group">
                  <item.icon size={28} className="golden-3d mr-3" strokeWidth={1.5} />
                  <span className="font-sans font-semibold text-foreground tracking-widest uppercase text-[10px] whitespace-nowrap group-hover:text-brand-gold transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicated Set for Seamless Loop */}
            <div className="flex items-center">
              {marqueeItems.map((item, idx) => (
                <div key={`set2-${idx}`} className="flex items-center mx-6 sm:mx-10 marquee-item cursor-pointer group">
                  <item.icon size={28} className="golden-3d mr-3" strokeWidth={1.5} />
                  <span className="font-sans font-semibold text-foreground tracking-widest uppercase text-[10px] whitespace-nowrap group-hover:text-brand-gold transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Snapshot Bar */}
      <section className="relative z-30 bg-brand-gold py-8 shadow-xl border-y border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-black text-center">
          <div className="text-brand-black text-center">
            <p className="text-3xl font-black leading-none font-serif">3</p>
            <p className="text-xs font-bold uppercase mt-1 opacity-80 tracking-widest">Active Counties</p>
          </div>
          <div className="text-brand-black text-center">
            <p className="text-3xl font-black leading-none font-serif">10+</p>
            <p className="text-xs font-bold uppercase mt-1 opacity-80 tracking-widest">Trained Coaches</p>
          </div>
          <div className="text-brand-black text-center">
            <p className="text-3xl font-black leading-none font-serif">1,000</p>
            <p className="text-xs font-bold uppercase mt-1 opacity-80 tracking-widest">Boys (2026 Goal)</p>
          </div>
          <div className="text-brand-black text-center">
            <p className="text-3xl font-black leading-none font-serif">2017</p>
            <p className="text-xs font-bold uppercase mt-1 opacity-80 tracking-widest">Founded</p>
          </div>
        </div>
      </section>

      {/* Strategic Partners Logos */}
      <section className="bg-background py-10 opacity-70 hover:opacity-100 transition-opacity">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-foreground/40 text-center mb-10">Our Strategic Partners</p>
          <div className="flex whitespace-nowrap animate-marquee">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
               <div key={index} className="flex-shrink-0 flex items-center justify-center h-20 w-48 mx-8 transition-all duration-500 group hover:-translate-y-1">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className={`object-contain drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] ${partner.isWhiteLogo ? 'dark:invert-0' : 'dark:brightness-200 dark:grayscale dark:invert'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Brief About - Story */}
      < section className="py-8 bg-background relative overflow-hidden" >
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Empowering the Boy Child.
          </h2>
          <p className="text-base md:text-lg text-foreground/70 font-sans leading-relaxed mb-4">
            Merlik Foundation is a Kenyan youth development organization focused on mentoring and equipping adolescent boys with the skills, values, and support systems needed to become responsible leaders in their communities.
          </p>
          <p className="text-sm md:text-base text-foreground/60 font-sans leading-relaxed mb-8">
            The name <strong>MERLIK</strong> derives from the Arabic word &quot;malki&quot; — meaning king — embodying our belief that every young man possesses inherent leadership potential waiting to be unlocked.
          </p>
          <Link href="/about" className="group relative inline-flex items-center gap-2 px-7 py-3 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 text-sm">
            Discover Our Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section >

      {/* Programs Highlight */}
      < section className="py-8 bg-foreground/5 relative" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Our Core Programs</h2>
            <p className="text-base md:text-lg text-foreground/60 mt-4 font-sans max-w-2xl mx-auto">Providing structured guidance, academic tools, and a reliable brotherhood.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-background border border-foreground/5 hover:border-brand-gold/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2">
              <div className="h-56 overflow-hidden bg-foreground/10">
                <Image
                  width={600} height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Two young men talking outdoors in mentorship session"
                  src="/images/mentorship.png"
                />
              </div>
              <div className="p-7 relative">
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground">Mentorship</h3>
                <p className="text-foreground/70 mb-6 font-medium leading-relaxed text-sm">Seven life-competency curriculum: 24 structured sessions, 36 contact hours per year.</p>
                <Link href="/programs" className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </Link>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-background border border-foreground/5 hover:border-brand-gold/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 delay-100">
              <div className="h-56 overflow-hidden bg-foreground/10">
                <Image
                  width={600} height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Classroom setting with students focusing on work"
                  src="/images/classroom.png"
                />
              </div>
              <div className="p-7 relative">
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground">Education</h3>
                <p className="text-foreground/70 mb-6 font-medium leading-relaxed text-sm">Scholarship sponsorship for bright, needy boys through secondary school.</p>
                <Link href="/programs" className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </Link>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-background border border-foreground/5 hover:border-brand-gold/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 delay-200">
              <div className="h-56 overflow-hidden bg-foreground/10">
                <Image
                  width={600} height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Group of volunteers working in a community garden"
                  src="/images/outreach.png"
                />
              </div>
              <div className="p-7 relative">
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground">Community Outreach</h3>
                <p className="text-foreground/70 mb-6 font-medium leading-relaxed text-sm">Blue Bag Initiative, home visits, school engagements, and social responsibility.</p>
                <Link href="/programs" className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </Link>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Beneficiary Spotlight */}
      < section className="py-8 bg-background relative z-10" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row border border-foreground/10 rounded-2xl overflow-hidden bg-background shadow-xl">
            <div className="lg:w-[35%] relative shrink-0 bg-foreground/[0.03]">
              <Image
                width={600} height={800}
                className="w-full h-auto block"
                alt="Portrait of Peter Masila, a confident young man smiling"
                src="/images/peter_masila.jpg"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md p-3 rounded-xl border border-foreground/5 shadow-lg">
                <p className="text-foreground font-serif font-bold text-sm mb-0.5">Peter Masila</p>
                <p className="text-brand-gold text-[10px] uppercase font-bold tracking-widest">Makueni County</p>
              </div>
            </div>
            <div className="lg:w-[65%] p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-foreground leading-tight">
                Stories of Transformation
              </h2>
              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed relative z-10 text-base md:text-lg">
                <p>
                  <strong className="text-foreground">Before:</strong> Grew up in a disadvantaged family in Makueni with no clear academic pathway or mentorship support.
                </p>
                <p>
                  <strong className="text-foreground">Intervention:</strong> Received a Merlik scholarship to Nguu Secondary School and was paired with a dedicated mentor throughout his studies.
                </p>
                <p>
                  <strong className="text-foreground">Outcome:</strong> Completed KCSE in 2020 and went on to earn a Bachelor&apos;s Degree in Commerce at Egerton University.
                </p>
                <p>
                  <strong className="text-foreground">Impact (Now a Volunteer Mentor):</strong> Peter now volunteers as a Merlik mentor — a living demonstration of our sustainable cycle of impact.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div className="h-[2px] w-24 bg-brand-gold"></div>
                <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">A Success Story</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Get Involved CTA */}
      < section className="py-20 bg-brand-black text-white relative overflow-hidden" >
        {/* Glow Effects */}
        < div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none" >
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-gold rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
        </div >

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Be Part of the Movement.
          </h2>
          <p className="text-base md:text-lg text-white/70 font-sans mb-10 max-w-xl mx-auto">
            Your support transforms lives. Shape the men of tomorrow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="bg-brand-gold text-brand-black px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              Become a Mentor
            </Link>
            <Link href="/donate" className="border border-white/30 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-brand-black transition-all duration-300 transform hover:-translate-y-1">
              Donate Now
            </Link>
          </div>
        </div>
      </section >
    </>
  );
}
