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
                    <span className="text-4xl font-black font-serif text-foreground mb-2">1.5M+</span>
                    <span className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Lives Impacted</span>
                </div>
                <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 flex flex-col items-center text-center">
                    <Users className="text-brand-gold mb-4" size={32} />
                    <span className="text-4xl font-black font-serif text-foreground mb-2">200+</span>
                    <span className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Active Projects</span>
                </div>
                <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/5 flex flex-col items-center text-center">
                    <Sparkles className="text-brand-gold mb-4" size={32} />
                    <span className="text-4xl font-black font-serif text-foreground mb-2">3 Countries</span>
                    <span className="text-sm font-bold text-foreground/40 uppercase tracking-widest">Global Reach</span>
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
