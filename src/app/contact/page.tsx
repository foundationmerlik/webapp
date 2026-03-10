"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Users, ChevronDown, Send } from "lucide-react";

export default function Contact() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        {
            q: "How can I donate to specific projects?",
            a: "You can choose specific projects on our 'Programs' page or select 'Other' in the form. During the donation process, you'll have the option to designate your gift to a particular initiative or our general fund."
        },
        {
            q: "Are donations tax-deductible?",
            a: "Yes, Merlik Foundation is a registered non-profit organization. We provide tax receipts for all contributions over a certain amount, depending on your local tax jurisdiction."
        },
        {
            q: "How can I volunteer for local events?",
            a: "We regularly post volunteer opportunities on our social media channels and newsletter. You can also fill out the contact form above and select 'Volunteer' as your category."
        }
    ];

    return (
        <div className="relative min-h-screen bg-background overflow-hidden pb-20 pt-24">
            {/* Glow Effects */}
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse"></div>

            <main className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pb-32 border-b border-foreground/10">

                    {/* Left Side: Information */}
                    <div className="flex flex-col gap-12 mt-10">
                        <div className="space-y-6">
                            <h1 className="text-6xl md:text-[80px] font-black tracking-tighter text-foreground font-serif leading-none">
                                Let's Talk<span className="text-brand-gold">.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/70 font-sans font-medium max-w-md leading-relaxed">
                                Have a question or looking to partner with us? Our team is dedicated to empowering communities and we'd love to hear from you.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {/* Contact Items */}
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:bg-foreground/[0.04] hover:border-brand-gold/30 transition-all group">
                                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">Email Us</p>
                                    <p className="text-xl font-bold font-serif text-foreground">hello@merlik.org</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:bg-foreground/[0.04] hover:border-brand-gold/30 transition-all group delay-100">
                                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">Call Us</p>
                                    <p className="text-xl font-bold font-serif text-foreground">+254 700 123 456</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:bg-foreground/[0.04] hover:border-brand-gold/30 transition-all group delay-200">
                                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">Nairobi HQ</p>
                                    <p className="text-xl font-bold font-serif text-foreground leading-tight">Westlands Business Park, 4th Fl<br />Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="pt-6">
                            <p className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-6">Connect with us on Social</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-foreground/10 text-foreground/70 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black hover:-translate-y-1 transition-all">
                                    <Globe size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-foreground/10 text-foreground/70 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black hover:-translate-y-1 transition-all">
                                    <Users size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form Container */}
                    <div className="relative w-full lg:mt-0 lg:pl-10">
                        {/* Form Glassmorphism Base */}
                        <div className="relative rounded-[2.5rem] bg-foreground/[0.03] border border-foreground/10 backdrop-blur-xl p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.05)] overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-[50px] pointer-events-none"></div>

                            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-background rounded-2xl border-2 border-foreground/5 px-6 py-4 text-foreground focus:border-brand-gold focus:ring-0 transition-colors outline-none text-lg font-medium shadow-sm" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Email</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-background rounded-2xl border-2 border-foreground/5 px-6 py-4 text-foreground focus:border-brand-gold focus:ring-0 transition-colors outline-none text-lg font-medium shadow-sm" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Phone</label>
                                        <input type="tel" placeholder="+254 --- --- ---" className="w-full bg-background rounded-2xl border-2 border-foreground/5 px-6 py-4 text-foreground focus:border-brand-gold focus:ring-0 transition-colors outline-none text-lg font-medium shadow-sm" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">I am a...</label>
                                        <div className="relative">
                                            <select className="w-full bg-background rounded-2xl border-2 border-foreground/5 px-6 py-4 text-foreground focus:border-brand-gold focus:ring-0 transition-colors outline-none text-lg font-medium shadow-sm appearance-none pr-10">
                                                <option>Donor</option>
                                                <option>Volunteer</option>
                                                <option>Partner</option>
                                                <option>Press</option>
                                                <option>Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none" size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Message</label>
                                    <textarea rows={5} placeholder="How can we help?" className="w-full bg-background rounded-2xl border-2 border-foreground/5 px-6 py-5 text-foreground focus:border-brand-gold focus:ring-0 transition-colors outline-none text-lg font-medium shadow-sm resize-none"></textarea>
                                </div>

                                <button type="submit" className="w-full rounded-2xl bg-brand-gold py-5 text-lg font-black text-brand-black transition-all hover:bg-brand-gold-light hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] active:scale-95 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>

                        {/* Map Decoration */}
                        <div className="mt-10 rounded-[2rem] overflow-hidden h-48 border border-foreground/10 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer shadow-xl relative group">
                            <Image
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Stylized map of Nairobi"
                                src="/images/map.png"
                            />
                            <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </div>

                </div>

                {/* FAQ Section */}
                <section className="py-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Quick Answers</span>
                            <h2 className="text-4xl md:text-5xl font-black font-serif text-foreground">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`rounded-3xl border transition-all duration-300 overflow-hidden ${openFaq === idx ? 'border-brand-gold shadow-[0_10px_30px_rgba(212,175,55,0.1)] bg-foreground/[0.02]' : 'border-foreground/10 bg-background hover:bg-foreground/[0.02]'}`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-8 text-left cursor-pointer"
                                    >
                                        <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground pr-8">{faq.q}</h3>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${openFaq === idx ? 'border-brand-gold text-brand-gold bg-brand-gold/10' : 'border-foreground/20 text-foreground/50'}`}>
                                            <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="p-8 pt-0 text-foreground/70 text-lg leading-relaxed font-medium">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
