"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, CreditCard, Wallet, Building2, Download, Heart, RefreshCw, User, Mail } from "lucide-react";
import ReportsModal from "@/components/ReportsModal";

// Use dynamic import for the Paystack component to prevent "window is not defined" error during Next.js SSR/Prerendering
const PaystackButton = dynamic(() => import("@/components/PaystackButton"), { 
    ssr: false,
    loading: () => (
        <button className="w-full rounded-2xl bg-brand-gold/50 py-6 text-xl font-black text-brand-black/50 cursor-not-allowed flex items-center justify-center gap-3">
            <RefreshCw size={20} className="animate-spin" /> Loading Payment...
        </button>
    )
});

export default function Donate() {
    const [frequency, setFrequency] = useState("onetime"); // Default to one-time for simple integration
    const [amount, setAmount] = useState<number | string>(1500);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);

    // Plan mapping for monthly donations
    const planMapping: Record<number, string | undefined> = {
        1500: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_1500,
        5000: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_5000,
        15000: process.env.NEXT_PUBLIC_PAYSTACK_PLAN_15000,
    };

    const currentPlan = frequency === "monthly" ? planMapping[Number(amount)] : undefined;

    // Impact labels for each giving amount (converted roughly to KES)
    const predefinedAmounts = [
        { value: 1500, label: "Books & supplies for 1 boy for a term" },
        { value: 5000, label: "One month of coaching sessions" },
        { value: 15000, label: "School fees for 1 boy for a term" },
    ];

    // 2026 goal progress
    const goalAmount = 5000000; // KES 5M annual target
    const raisedAmount = 1850000;
    const progressPct = Math.min(100, Math.round((raisedAmount / goalAmount) * 100));

    const onSuccess = async (reference: any) => {
        console.log("Payment Successful", reference);
        setIsProcessing(false);
        setIsSuccess(true);

        try {
            await fetch("/api/donations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    donorName: `${firstName} ${lastName}`,
                    donorEmail: email,
                    amount: Number(amount),
                    reference: reference.reference,
                    status: reference.status
                })
            });
        } catch (err) {
            console.error("Failed to log donation:", err);
        }
    };

    const onClose = () => {
        console.log("Payment Closed");
        setIsProcessing(false);
    };

    if (isSuccess) {
        return (
            <div className="relative min-h-screen bg-background text-foreground pt-24 pb-32 overflow-hidden flex items-center justify-center">
                <div className="relative z-10 max-w-lg w-full p-12 bg-background/80 backdrop-blur-xl border border-brand-gold/20 rounded-[3rem] text-center shadow-2xl">
                    <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 text-brand-black shadow-lg shadow-brand-gold/20">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-4xl font-black font-serif text-foreground mb-4">Thank You!</h1>
                    <p className="text-xl text-foreground/70 font-medium mb-10 leading-relaxed">
                        Your contribution of <span className="text-brand-gold font-bold">KES {Number(amount).toLocaleString()}</span> has been received. 
                        We've sent a receipt to your email.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="w-full rounded-2xl bg-brand-gold py-5 text-xl font-black text-brand-black shadow-lg hover:-translate-y-1 transition-all"
                    >
                        Return to Donate
                    </button>
                    <div className="mt-8">
                        <Link href="/" className="text-foreground/40 font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-background text-foreground pt-24 pb-32 overflow-hidden">

            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <main className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Top Section: Value Prop + Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-40">

                    {/* Left Content: Value Proposition */}
                    <div className="flex flex-col gap-10 mt-10">
                        <div className="inline-flex items-center gap-3 rounded-full bg-brand-gold/10 px-5 py-2 w-fit">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-gold"></span>
                            </span>
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">Make a Difference Today</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black leading-[1.1] tracking-tight font-serif text-foreground">
                            Invest in a Boy.<br />
                            <span className="text-brand-gold italic">Strengthen a Nation.</span>
                        </h1>

                        <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 font-medium max-w-2xl font-sans">
                            Empowering the next generation of leaders through education and mentorship. Your contribution creates a ripple effect of positive change that transforms families and communities.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-foreground/10">
                            <div className="flex flex-col gap-2">
                                <span className="text-4xl lg:text-5xl font-black font-serif text-foreground">1,000</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/50">Boys (2026 Goal)</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-4xl lg:text-5xl font-black font-serif text-foreground">30<span className="text-brand-gold">+</span></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-foreground/50">Trained Coaches</span>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-foreground/[0.03] p-8 border border-foreground/10 flex gap-6 mt-4">
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gold flex items-center justify-center text-brand-black shadow-lg">
                                <ShieldCheck size={28} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-xl font-serif text-foreground mb-2">Trusted Transparency</h4>
                                <p className="text-base text-foreground/60 font-medium">100% of public donations go directly to funding our programs. We cover overhead through private grants.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Donation Widget */}
                    <div className="relative lg:mt-0">
                        {/* Soft Glow behind Form */}
                        <div className="absolute -inset-4 md:-inset-10 rounded-[3rem] bg-brand-gold/10 blur-[80px] pointer-events-none"></div>

                        <div className="relative rounded-[2.5rem] border border-foreground/10 bg-background/80 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.05)]">
                            <h2 className="mb-8 text-3xl font-black font-serif text-foreground">Make a Donation</h2>

                            {/* Donor Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-brand-gold transition-colors" size={18} />
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                                    />
                                </div>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-brand-gold transition-colors" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="relative group mb-8">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-brand-gold transition-colors" size={18} />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                                />
                            </div>

                            {/* Frequency Toggle */}
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-3">
                                    Giving Frequency
                                </p>
                                <div className="flex mb-2 h-14 bg-foreground/5 rounded-2xl p-1.5">
                                    <button
                                        onClick={() => setFrequency("monthly")}
                                        className={`flex-1 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${frequency === "monthly" ? "bg-brand-gold text-brand-black shadow-md" : "text-foreground/60 hover:text-foreground"}`}
                                    >
                                        <RefreshCw size={14} /> Monthly
                                    </button>
                                    <button
                                        onClick={() => setFrequency("onetime")}
                                        className={`flex-1 rounded-xl text-sm font-bold transition-all ${frequency === "onetime" ? "bg-background text-brand-gold shadow-md" : "text-foreground/60 hover:text-foreground"}`}
                                    >
                                        One-time
                                    </button>
                                </div>
                                <p className="text-xs text-foreground/50 text-center">
                                    {frequency === "monthly"
                                        ? "💛 Monthly giving sustains our programmes year-round. Cancel anytime."
                                        : "Every one-time gift makes a difference."}
                                </p>
                            </div>

                            {/* Amount Selection */}
                            <div className="grid grid-cols-1 gap-3 mb-6">
                                {predefinedAmounts.map(({ value, label }) => (
                                    <button
                                        key={value}
                                        onClick={() => setAmount(value)}
                                        className={`rounded-2xl py-4 px-5 text-left transition-all border flex items-center justify-between gap-4 ${Number(amount) === value
                                                ? "border-brand-gold bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                                : "border-foreground/20 text-foreground hover:bg-foreground/5"
                                            }`}
                                    >
                                        <span className="text-xl font-black">KES {value.toLocaleString()}</span>
                                        <span className="text-xs font-medium text-right leading-tight opacity-70">{label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Custom Amount */}
                            <div className={`mb-10 transition-opacity duration-300 ${frequency === "monthly" ? "opacity-40 grayscale pointer-events-none" : ""}`}>
                                <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-3 ml-2 flex justify-between items-center">
                                    <span>Custom Amount (KES)</span>
                                    {frequency === "monthly" && (
                                        <span className="text-[10px] text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full">Available for One-time only</span>
                                    )}
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-foreground/50 text-xl group-focus-within:text-brand-gold transition-colors">KES</span>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        disabled={frequency === "monthly"}
                                        className="w-full rounded-2xl border-2 border-foreground/10 bg-foreground/5 py-5 pl-16 pr-6 text-xl font-bold focus:border-brand-gold focus:ring-0 outline-none transition-all disabled:cursor-not-allowed"
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </div>

                            {/* Paystack Button Integrated Digitally */}
                            <PaystackButton 
                                email={email}
                                amount={Number(amount)}
                                firstName={firstName}
                                lastName={lastName}
                                frequency={frequency}
                                onSuccess={onSuccess}
                                onClose={onClose}
                                isProcessing={isProcessing}
                                setIsProcessing={setIsProcessing}
                                plan={currentPlan}
                            />

                            <p className="mt-4 text-center text-xs font-semibold text-foreground/40 uppercase tracking-widest">
                                🔒 Secure Paystack Payment · Tax-deductible receipt issued
                            </p>

                            {/* Manual Payment Section */}
                            <div className="mt-10 pt-10 border-t border-foreground/10 space-y-8">
                                <div className="text-center">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40 mb-2">Other Ways to Give</h3>
                                    <div className="h-1 w-10 bg-brand-gold mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-4">
                                    {/* Bank */}
                                    <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/5 group hover:border-brand-gold/30 transition-all">
                                        <div className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-4">
                                            <Building2 size={14} /> Bank Transfer
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="opacity-40 font-bold uppercase text-[10px]">Bank</span>
                                                <span className="font-bold">Kenya Commercial Bank</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="opacity-40 font-bold uppercase text-[10px]">Account Name</span>
                                                <span className="font-bold">MERLIK FOUNDATION</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="opacity-40 font-bold uppercase text-[10px]">Account No.</span>
                                                <span className="font-black text-brand-gold">1309280843</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* M-Pesa */}
                                    <div className="p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/10 group hover:border-brand-gold/30 transition-all">
                                        <div className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-4">
                                            <Wallet size={14} /> M-Pesa Paybill
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="opacity-40 font-bold uppercase text-[10px]">Paybill</span>
                                                <span className="font-black text-brand-gold">522533</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="opacity-40 font-bold uppercase text-[10px]">Account No.</span>
                                                <span className="font-black text-brand-gold">8019800</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="opacity-40 font-bold uppercase text-[10px]">Business Name</span>
                                                <span className="font-bold truncate ml-4 tracking-tighter">MERLIK FOUNDATION LIMITED</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[10px] text-center text-foreground/40 font-bold uppercase tracking-widest italic pt-2">
                                    Please send proof of payment to info@merlikfoundation.org
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-foreground/10">
                                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">2026 Goal Progress</p>
                                <div className="w-full bg-foreground/10 rounded-full h-2.5 mb-2">
                                    <div
                                        className="bg-brand-gold h-2.5 rounded-full transition-all duration-700"
                                        style={{ width: `${progressPct}%` }}
                                    />
                                </div>
                                <p className="text-xs text-foreground/50 flex justify-between">
                                    <span>KES {raisedAmount.toLocaleString()} raised</span>
                                    <span>{progressPct}% of KES {goalAmount.toLocaleString()} goal</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transparency Section */}
                <section className="mb-40 relative rounded-[3rem] bg-foreground/[0.02] border border-foreground/5 p-10 md:p-20 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-30"></div>

                    <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Financial Accountability</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-foreground mb-6">Where Your Money Goes</h2>
                        <p className="text-xl text-foreground/70 font-medium leading-relaxed">
                            We believe in full financial accountability. See exactly how every KES strengthens our nation's future leaders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Scholarships */}
                        <div className="flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-foreground/5 shadow-sm group hover:-translate-y-2 transition-all duration-300">
                            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">Scholarships <br /><span className="text-brand-gold">60%</span></h3>
                            <p className="text-base text-foreground/60 font-medium leading-relaxed">Direct tuition fees, books, and uniforms for underprivileged boys across the country.</p>
                        </div>

                        {/* Training */}
                        <div className="flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-foreground/5 shadow-sm group hover:-translate-y-2 transition-all duration-300 delay-100">
                            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">Skills Training <br /><span className="text-brand-gold">25%</span></h3>
                            <p className="text-base text-foreground/60 font-medium leading-relaxed">Workshops, vocational training, and leadership bootcamps to prepare for the workforce.</p>
                        </div>

                        {/* Delivery */}
                        <div className="flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-foreground/5 shadow-sm group hover:-translate-y-2 transition-all duration-300 delay-200">
                            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-background transition-colors">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-foreground">Program Delivery <br /><span className="text-brand-gold">15%</span></h3>
                            <p className="text-base text-foreground/60 font-medium leading-relaxed">Logistics, field mentors, and coordination to ensure programs reach the most remote areas.</p>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-8 border-t border-foreground/10 pt-16">
                        <p className="text-xl font-serif font-medium text-foreground italic">Want more details? Download our transparency reports.</p>
                        <button 
                            onClick={() => setIsReportsModalOpen(true)}
                            className="inline-flex items-center gap-4 rounded-full border-2 border-brand-gold px-10 py-4 font-bold text-brand-gold text-lg transition-all hover:bg-brand-gold hover:text-brand-black hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                        >
                            <Download size={20} />
                            View Impact Reports
                        </button>
                    </div>
                </section>

                {/* Gallery Section */}
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="h-80 rounded-[2rem] overflow-hidden relative group shadow-lg">
                            <Image
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 "
                                alt="Boys in a modern classroom"
                                src="/images/classroom.jpg"
                            />
                        </div>
                        <div className="h-80 rounded-[2rem] overflow-hidden relative group shadow-lg sm:-translate-y-8">
                            <Image
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 "
                                alt="Mentorship session outdoors"
                                src="/images/Mentorship.jpg"
                            />
                        </div>
                        <div className="h-80 rounded-[2rem] overflow-hidden relative group shadow-lg">
                            <Image
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110  text-center"
                                alt="Students celebrating"
                                src="/images/outreach.jpg"
                            />
                        </div>
                        <div className="h-80 rounded-[2rem] overflow-hidden relative group shadow-lg sm:-translate-y-8">
                            <Image
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 "
                                alt="Education and impact"
                                src="/images/Education.jpg"
                            />
                        </div>
                    </div>
                </section>

                {/* Reports Modal */}
                <ReportsModal isOpen={isReportsModalOpen} onClose={() => setIsReportsModalOpen(false)} />

            </main>
        </div>
    );
}
