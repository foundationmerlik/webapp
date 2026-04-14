"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Camera, Heart, Users, Sparkles } from "lucide-react";

export default function Gallery() {
    const [isLoaded, setIsLoaded] = useState(false);

    const galleryImages = [
        { src: "/images/gallery/IMG-20260310-WA0005.jpg", title: "Empowerment Workshop", category: "Education" },
        { src: "/images/gallery/IMG-20260310-WA0006.jpg", title: "Community Outreach", category: "Service" },
        { src: "/images/gallery/IMG-20260310-WA0007.jpg", title: "Youth Mentorship", category: "Mentorship" },
        { src: "/images/gallery/IMG-20260310-WA0010.jpg", title: "Digital Literacy", category: "Tech" },
        { src: "/images/gallery/IMG-20260310-WA0011.jpg", title: "Strategic Planning", category: "Leadership" },
        { src: "/images/gallery/IMG-20260310-WA0015.jpg", title: "Global Partnerships", category: "Impact" },
        { src: "/images/gallery/IMG-20260310-WA0016.jpg", title: "Local Impact Session", category: "Service" },
        { src: "/images/gallery/462691246_18037994462328565_4187030217141268497_n.jpg", title: "Field Action", category: "Service" },
        { src: "/images/gallery/464893699_18039906197328565_4080320743001001697_n.jpg", title: "Community Building", category: "Impact" },
        { src: "/images/gallery/472936607_616035334266416_5750791626185907384_n.jpg", title: "Team Collaboration", category: "Leadership" },
        { src: "/images/gallery/472952725_18048607562328565_4565614255561986593_n (1).jpg", title: "Mentorship Group", category: "Mentorship" },
        { src: "/images/gallery/472952725_18048607562328565_4565614255561986593_n.jpg", title: "Student Support", category: "Education" },
        { src: "/images/gallery/473337884_1122555146170625_350353846994794811_n.jpg", title: "Youth Engagement", category: "Service" },
        { src: "/images/gallery/473535305_618593047343978_8277381454969131977_n.jpg", title: "Community Work", category: "Impact" },
        { src: "/images/gallery/473568217_1122559119503561_3591824270032936601_n.jpg", title: "Leadership Seminar", category: "Leadership" },
        { src: "/images/gallery/474271701_626233719913244_487750033405265174_n.jpg", title: "Skills Training", category: "Education" },
        { src: "/images/gallery/474767579_1128816535544486_3846929425689138926_n.jpg", title: "Volunteer Drive", category: "Service" },
        { src: "/images/gallery/474976897_463454780176419_5602066565479749917_n.jpg", title: "Community Outreach", category: "Service" },
        { src: "/images/gallery/479824910_642692764934006_5709492703225631219_n.jpg", title: "Impact Action", category: "Impact" },
        { src: "/images/gallery/481085452_650294437507172_9202501778532992740_n.jpg", title: "Youth Summit", category: "Leadership" },
        { src: "/images/gallery/481272304_654830170386932_3708236616754970607_n.jpg", title: "Program Activity", category: "Service" },
        { src: "/images/gallery/481915350_656830330186916_4879338430681625034_n.jpg", title: "Local Impact", category: "Impact" },
        { src: "/images/gallery/482128790_658393970030552_5148946339851402032_n.jpg", title: "Field Mentorship", category: "Mentorship" },
        { src: "/images/gallery/482211795_658585970011352_4641941607428542748_n.jpg", title: "Workshop Focus", category: "Education" },
        { src: "/images/gallery/482212048_657544953448787_9101391952024787279_n.jpg", title: "Project Milestone", category: "Impact" },
        { src: "/images/gallery/485749755_1887166662021099_6450029913653660307_n.jpg", title: "Community Success", category: "Service" },
        { src: "/images/gallery/486056941_1887166665354432_7406888741597857789_n.jpg", title: "Group Session", category: "Leadership" },
        { src: "/images/gallery/487982466_675033181699964_29159658548175993_n.jpg", title: "Team Building", category: "Mentorship" },
        { src: "/images/gallery/488654850_2787690034753457_4611330111416720041_n.jpg", title: "On-Ground Action", category: "Service" }
    ];

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 animate-reveal ${isLoaded ? '' : 'opacity-0'}`}>
                    <Camera size={14} /> Our Visual Journey
                </div>
                <h1 className={`text-5xl md:text-7xl font-black font-serif text-foreground mb-8 animate-reveal delay-100 ${isLoaded ? '' : 'opacity-0'}`}>
                    Merlik in <span className="text-brand-gold italic">Action.</span>
                </h1>
                <p className={`text-xl text-foreground/60 font-sans max-w-2xl mx-auto leading-relaxed animate-reveal delay-200 ${isLoaded ? '' : 'opacity-0'}`}>
                    A glimpse into the lives we've touched, the communities we've served, and the progress we're building together — one milestone at a time.
                </p>
            </div>

            {/* Stats Bar (Subtle) */}
            <div className={`max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-reveal delay-300 ${isLoaded ? '' : 'opacity-0'}`}>
                <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 flex flex-col items-center text-center">
                    <Heart className="text-brand-gold mb-4" size={32} />
                    <span className="text-4xl font-black font-serif text-foreground mb-2">300+</span>
                    <span className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Lives Impacted</span>
                </div>
                <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 flex flex-col items-center text-center">
                    <Users className="text-brand-gold mb-4" size={32} />
                    <span className="text-4xl font-black font-serif text-foreground mb-2">3+</span>
                    <span className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Active Projects</span>
                </div>
                <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 flex flex-col items-center text-center">
                    <Sparkles className="text-brand-gold mb-4" size={32} />
                    <span className="text-4xl font-black font-serif text-foreground mb-2">4</span>
                    <span className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Counties Reached</span>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl bg-foreground/10 border border-foreground/5 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-2 break-inside-avoid animate-reveal`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.category}</span>
                                    <h3 className="text-white text-2xl font-bold font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{image.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 mt-32">
                <div className="relative rounded-[3rem] bg-brand-black p-12 md:p-24 overflow-hidden text-center group">
                    <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-5 transition-opacity duration-1000"></div>
                    <h2 className="text-4xl md:text-6xl font-black font-serif text-white mb-8 relative z-10">
                        Want to see your impact <span className="text-brand-gold italic">live?</span>
                    </h2>
                    <p className="text-xl text-white/60 font-sans max-w-2xl mx-auto mb-12 relative z-10">
                        Join us in our next community outreach or mentorship program and witness the transformation firsthand.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                        <a href="/get-involved" className="bg-brand-gold text-brand-black px-12 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            Join the Mission
                        </a>
                        <a href="/donate" className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-brand-black transition-all">
                            Support Our Work
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
