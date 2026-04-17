"use client";

import { useMemo, useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { Heart, RefreshCw } from "lucide-react";

interface PaystackButtonProps {
    email: string;
    amount: number;
    firstName: string;
    lastName: string;
    frequency: string;
    onSuccess: (reference: any) => void;
    onClose: () => void;
    isProcessing: boolean;
    setIsProcessing: (val: boolean) => void;
}

export default function PaystackButton({ 
    email, 
    amount, 
    firstName, 
    lastName, 
    frequency, 
    onSuccess, 
    onClose,
    isProcessing,
    setIsProcessing
}: PaystackButtonProps) {
    const [mounted, setMounted] = useState(false);
    const [reference, setReference] = useState("");

    useEffect(() => {
        setMounted(true);
        setReference((new Date()).getTime().toString());
    }, [email, amount, firstName, lastName, frequency]);

    const config = useMemo(() => ({
        reference,
        email: email,
        amount: Math.round(amount * 100),
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_a9690e4d37e92a23f23e2c0a178f5496cae30d08",
        currency: "KES",
        metadata: {
            custom_fields: [
                {
                    display_name: "First Name",
                    variable_name: "first_name",
                    value: firstName,
                },
                {
                    display_name: "Last Name",
                    variable_name: "last_name",
                    value: lastName,
                },
                {
                    display_name: "Frequency",
                    variable_name: "frequency",
                    value: frequency,
                }
            ]
        }
    }), [reference, email, amount, firstName, lastName, frequency]);

    const initializePayment = usePaystackPayment(config);

    if (!mounted || !reference) return null;

    const handleDonation = () => {
        if (!email || !firstName || !lastName || !amount) {
            alert("Please fill in all details");
            return;
        }
        setIsProcessing(true);
        initializePayment({onSuccess, onClose});
    };

    return (
        <button 
            onClick={handleDonation}
            disabled={isProcessing}
            className={`w-full rounded-2xl bg-brand-gold py-6 text-xl font-black text-brand-black shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all active:scale-95 transform hover:-translate-y-1 flex items-center justify-center gap-3 ${isProcessing ? 'opacity-70 cursor-not-allowed animate-pulse' : ''}`}
        >
            {isProcessing ? (
                <RefreshCw size={20} className="animate-spin" />
            ) : (
                frequency === "monthly" ? <RefreshCw size={20} /> : <Heart size={20} />
            )}
            {isProcessing ? "Processing..." : (frequency === "monthly" ? "Give Monthly" : "Make Donation")}
        </button>
    );
}
