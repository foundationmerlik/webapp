"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Mail, Sparkles } from "lucide-react";

interface NewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-background rounded-[3rem] overflow-hidden shadow-2xl border border-foreground/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground/40 hover:text-foreground"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-12 text-center">
                            {/* Animated Success Icon */}
                            <div className="relative inline-block mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                                    className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-brand-black shadow-lg shadow-brand-gold/30"
                                >
                                    <Check size={40} strokeWidth={3} />
                                </motion.div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-2 border-2 border-dashed border-brand-gold/30 rounded-full"
                                />
                                <Sparkles className="absolute -top-1 -right-1 text-brand-gold animate-pulse" size={24} />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-4">
                                You&apos;re officially <br />part of the <span className="text-brand-gold">Movement</span>.
                            </h3>
                            
                            <p className="text-foreground/60 text-lg leading-relaxed mb-10 max-w-sm mx-auto font-medium">
                                Thank you for joining our mission! We&apos;ve sent a welcome email to your inbox with a little something to get you started.
                            </p>

                            <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-6 flex items-start gap-4 text-left">
                                <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-sm mb-1 uppercase tracking-widest">Check your inbox</p>
                                    <p className="text-foreground/50 text-xs leading-relaxed">
                                        If you don&apos;t see our message, be sure to check your spam folder and mark us as safe!
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full mt-10 py-5 bg-brand-black text-white rounded-full font-black text-lg hover:shadow-xl hover:translate-y-[-2px] transition-all"
                            >
                                Let&apos;s Go!
                            </button>
                        </div>

                        {/* Visual Accent */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-gold" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
