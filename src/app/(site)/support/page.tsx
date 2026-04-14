"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Users, BookOpen, GraduationCap, Heart, CreditCard, Send, CheckCircle2, Copy, Building2, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Constants & Data ────────────────────────────────────────────────────────

const tabs = [
    { id: "volunteer", label: "Volunteer", icon: Users },
    { id: "internship", label: "Internship", icon: BookOpen },
    { id: "mentor", label: "Become a Mentor", icon: GraduationCap },
    { id: "sponsor", label: "Sponsor a Boy", icon: Heart },
    { id: "donate", label: "Donate", icon: CreditCard },
];

const bankDetails = {
    bank: "Kenya Commercial Bank",
    name: "MERLIK FOUNDATION",
    account: "1309280843",
};

const mpesaDetails = {
    paybill: "522533",
    account: "8019800",
    business: "MERLIK FOUNDATION LIMITED",
};

// ─── Support Content Component ───────────────────────────────────────────────

function SupportContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeTabId = searchParams.get("tab") || "volunteer";

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleTabChange = (id: string) => {
        router.push(`/support?tab=${id}`, { scroll: false });
        setStatus("idle");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/support", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formState, type: activeTabId }),
            });

            if (res.ok) {
                setStatus("success");
                setFormState({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black font-serif text-foreground mb-6">
                    Get Involved<span className="text-brand-gold">.</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                    Choose how you want to support the Merlik Foundation mission and help us shape the future leaders of Kenya.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="relative mb-20 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex items-center justify-between min-w-max border-b border-foreground/10 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`flex flex-col items-center gap-3 px-8 pb-6 transition-all relative group ${activeTabId === tab.id ? "text-brand-gold" : "text-foreground/40 hover:text-foreground/70"}`}
                        >
                            <tab.icon size={24} strokeWidth={activeTabId === tab.id ? 2.5 : 2} />
                            <span className="font-bold text-sm uppercase tracking-widest leading-none">{tab.label}</span>
                            {activeTabId === tab.id && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                {/* Left: Info Text */}
                <motion.div
                    key={`${activeTabId}-text`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                >
                    {activeTabId === "volunteer" && (
                        <>
                            <h2 className="text-4xl font-serif font-black text-foreground">Volunteer With Us</h2>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Join us as a volunteer and be part of the change in shaping the lives of young boys in Kenya. Participate in events, community outreach, or provide support for our mentorship and education programs.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Volunteering with Merlik Foundation also offers a chance to grow personally and professionally. You'll work with a diverse and passionate team, build connections, and gain the satisfaction of knowing your actions directly contribute to transforming lives.
                            </p>
                            <div className="p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex items-center gap-4">
                                <div className="text-brand-gold font-bold">Need help?</div>
                                <a href="mailto:info@merlikfoundation.org" className="text-foreground font-bold underline hover:text-brand-gold transition-colors">info@merlikfoundation.org</a>
                            </div>
                        </>
                    )}

                    {activeTabId === "internship" && (
                        <>
                            <h2 className="text-4xl font-serif font-black text-foreground">Intern With Us</h2>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Are you a student or recent graduate looking for hands-on experience in social impact? Our internship program offers a unique opportunity to work closely with our team on projects that transform lives.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Interning with Merlik Foundation goes beyond building your resume — it's about being part of a movement that shapes future leaders. Immerse yourself in meaningful work and leave a lasting impact on the boys we serve.
                            </p>
                            <div className="p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex items-center gap-4">
                                <div className="text-brand-gold font-bold">Reach us at</div>
                                <a href="mailto:info@merlikfoundation.org" className="text-foreground font-bold underline hover:text-brand-gold transition-colors">info@merlikfoundation.org</a>
                            </div>
                        </>
                    )}

                    {activeTabId === "mentor" && (
                        <>
                            <h2 className="text-4xl font-serif font-black text-foreground">Become a Mentor</h2>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                As a mentor, you have the chance to guide and inspire young boys by sharing your knowledge, experience, and life lessons. Your role will be instrumental in helping them navigate education, build confidence, and set personal goals.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Mentorship is a deeply rewarding journey where you'll witness the growth and transformation of young minds. Through regular interaction, you'll build meaningful relationships and contribute to shaping boys into responsible, resilient men.
                            </p>
                            <div className="p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/20 flex items-center gap-4">
                                <div className="text-brand-gold font-bold">Inquiries:</div>
                                <a href="mailto:info@merlikfoundation.org" className="text-foreground font-bold underline hover:text-brand-gold transition-colors">info@merlikfoundation.org</a>
                            </div>
                        </>
                    )}

                    {activeTabId === "sponsor" && (
                        <>
                            <h2 className="text-4xl font-serif font-black text-foreground">Sponsor a Boy</h2>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Empower a young boy by sponsoring his mentorship journey. Your financial support provides access to resources, learning materials, and professional guidance tailored to his growth and success.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Sponsorship is more than a financial contribution — it's an investment in the future. Your support creates a ripple effect, not only changing the life of a boy but also uplifting his family and community.
                            </p>
                            <div className="p-8 rounded-3xl bg-foreground/[0.03] border border-foreground/10 space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-foreground">Sponsorship Tiers</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl bg-background border border-foreground/10">
                                        <p className="text-brand-gold font-black text-2xl mb-1">KES 1,500</p>
                                        <p className="text-sm font-bold opacity-60">Term Books & Supplies</p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-background border border-foreground/10">
                                        <p className="text-brand-gold font-black text-2xl mb-1">KES 15,000</p>
                                        <p className="text-sm font-bold opacity-60">Full Term Tuition</p>
                                    </div>
                                </div>
                                <Link href="/support?tab=donate" className="block text-center py-4 rounded-xl bg-brand-gold text-brand-black font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all">
                                    Proceed to Give
                                </Link>
                            </div>
                        </>
                    )}

                    {activeTabId === "donate" && (
                        <>
                            <h2 className="text-4xl font-serif font-black text-foreground">Ways to Give</h2>
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                                Your generosity is the fuel that drives our mission. Whether it's a one-time gift or a recurring contribution, every shilling goes towards restoring purpose to the hearts of men.
                            </p>
                            
                            <div className="mt-8 space-y-6">
                                {/* Bank */}
                                <div className="p-8 rounded-3xl bg-foreground/[0.03] border border-foreground/5 space-y-4">
                                    <div className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest text-xs">
                                        <Building2 size={16} /> Bank Transfer
                                    </div>
                                    <div className="grid gap-4">
                                        <div className="flex justify-between items-center py-2 border-b border-foreground/5">
                                            <span className="text-foreground/40 text-sm font-bold uppercase">Bank Name</span>
                                            <span className="text-foreground font-bold">{bankDetails.bank}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-foreground/5">
                                            <span className="text-foreground/40 text-sm font-bold uppercase">Account Name</span>
                                            <span className="text-foreground font-bold">{bankDetails.name}</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-foreground/40 text-sm font-bold uppercase">Account Number</span>
                                            <button onClick={() => handleCopy(bankDetails.account, 'bank')} className="flex items-center gap-2 text-brand-gold font-black text-lg hover:brightness-110">
                                                {bankDetails.account} {copied === 'bank' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* M-Pesa */}
                                <div className="p-8 rounded-3xl bg-brand-gold/5 border border-brand-gold/10 space-y-4">
                                    <div className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest text-xs">
                                        <Wallet size={16} /> M-Pesa Paybill
                                    </div>
                                    <div className="grid gap-4">
                                        <div className="flex justify-between items-center py-2 border-b border-brand-gold/10">
                                            <span className="text-foreground/40 text-sm font-bold uppercase">Business Name</span>
                                            <span className="text-foreground font-bold text-sm tracking-tight">{mpesaDetails.business}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-brand-gold/10">
                                            <span className="text-foreground/40 text-sm font-bold uppercase">Paybill Number</span>
                                            <button onClick={() => handleCopy(mpesaDetails.paybill, 'paybill')} className="flex items-center gap-2 text-brand-gold font-black text-xl hover:brightness-110">
                                                {mpesaDetails.paybill} {copied === 'paybill' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-foreground/40 text-sm font-bold uppercase">Account Number</span>
                                            <button onClick={() => handleCopy(mpesaDetails.account, 'acc')} className="flex items-center gap-2 text-brand-gold font-black text-xl hover:brightness-110">
                                                {mpesaDetails.account} {copied === 'acc' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-xs text-center text-foreground/40 font-bold uppercase tracking-widest italic pt-2">
                                    Please send proof of payment to info@merlikfoundation.org
                                </p>
                            </div>
                        </>
                    )}
                </motion.div>

                {/* Right: Form Area */}
                <div className="relative">
                    {(activeTabId === "volunteer" || activeTabId === "internship" || activeTabId === "mentor") && (
                        <motion.div
                            key={`${activeTabId}-form`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="bg-foreground/[0.03] border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden ring-1 ring-foreground/5 shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[60px] pointer-events-none"></div>

                            {status === "success" ? (
                                <div className="text-center py-12 space-y-6 relative z-10">
                                    <div className="w-20 h-20 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto shadow-xl">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-black font-serif text-foreground">Application Received</h3>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        Thank you for your interest in the Merlik Foundation! We have received your request and will be in touch shortly.
                                    </p>
                                    <button onClick={() => setStatus("idle")} className="text-brand-gold font-bold hover:underline">
                                        Submit another request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="text-center mb-10">
                                        <h3 className="text-2xl font-serif font-black text-foreground mb-2">
                                            {activeTabId === "volunteer" && "Volunteer Request"}
                                            {activeTabId === "internship" && "Internship Application"}
                                            {activeTabId === "mentor" && "Mentor Application"}
                                        </h3>
                                        <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">Fill in your details</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Full Name</label>
                                            <input required name="name" value={formState.name} onChange={handleChange} placeholder="Your full name" className="w-full bg-background rounded-2xl border border-foreground/10 px-6 py-4 text-foreground focus:border-brand-gold outline-none transition-all shadow-sm font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Email Address</label>
                                            <input required type="email" name="email" value={formState.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-background rounded-2xl border border-foreground/10 px-6 py-4 text-foreground focus:border-brand-gold outline-none transition-all shadow-sm font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Phone Number</label>
                                            <input required type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="+254 7__ ___ ___" className="w-full bg-background rounded-2xl border border-foreground/10 px-6 py-4 text-foreground focus:border-brand-gold outline-none transition-all shadow-sm font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Message</label>
                                            <textarea required rows={4} name="message" value={formState.message} onChange={handleChange} placeholder={activeTabId === "volunteer" ? "Tell us how you'd like to contribute…" : activeTabId === "internship" ? "Tell us about your background and interests…" : "Tell us why you'd like to become a mentor…"} className="w-full bg-background rounded-2xl border border-foreground/10 px-6 py-4 text-foreground focus:border-brand-gold outline-none transition-all shadow-sm resize-none font-medium"></textarea>
                                        </div>
                                    </div>
                                    
                                    <button
                                        disabled={status === "loading"}
                                        type="submit"
                                        className={`w-full bg-brand-gold py-5 rounded-2xl text-brand-black font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-gold/10 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                                    >
                                        {status === "loading" ? "Processing..." : `Submit ${activeTabId.charAt(0).toUpperCase() + activeTabId.slice(1)} Request`}
                                        <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    )}

                    {activeTabId === "sponsor" && (
                        <div className="h-full min-h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl border border-foreground/10">
                            <Image fill src="/images/gallery/482021736_656826440187305_4826138251330898547_n.jpg" alt="A young boy benefiting from the Merlik Foundation programs" className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white font-serif text-3xl font-black leading-tight italic">
                                    "Your support is an investment in the future leaders of our community."
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTabId === "donate" && (
                        <div className="bg-foreground/[0.03] border border-foreground/10 rounded-[2.5rem] p-12 text-center space-y-8 flex flex-col justify-center h-full min-h-[500px]">
                            <div className="w-24 h-24 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto">
                                <Heart size={48} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-serif font-black text-foreground">Secure Online Giving</h3>
                                <p className="text-foreground/60 font-medium leading-relaxed">
                                    Prefer to give via Card or Apple/Google Pay? Use our secure payment gateway powered by Paystack.
                                </p>
                            </div>
                            <Link href="/donate" className="inline-flex items-center gap-4 bg-brand-gold text-brand-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] transition-all shadow-xl shadow-brand-gold/20">
                                Open Payment Gateway <ArrowRight size={20} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Main Page Export ────────────────────────────────────────────────────────

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-40">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-brand-gold font-bold">Loading...</div>}>
                <SupportContent />
            </Suspense>
        </div>
    );
}

const ArrowRight = ({ size, className }: { size?: number; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
