"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, ExternalLink, ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

const products = [
    {
        name: "Merlik Branded Hoodie",
        image: "/images/shop/hood.webp",
        whatsapp: "https://wa.me/254795966792?text=Hello, I'd like to order the Merlik Branded Hoodie"
    },
    {
        name: "Merlik Branded T-Shirt",
        image: "/images/shop/t-shirt.webp",
        whatsapp: "https://wa.me/254795966792?text=Hello, I'd like to order the Merlik Branded T-Shirt"
    },
    {
        name: "Merlik Branded Cap",
        image: "/images/shop/cap.webp",
        whatsapp: "https://wa.me/254795966792?text=Hello, I'd like to order the Merlik Branded Cap"
    },
    {
        name: "Merlik Branded Water Bottle",
        image: "/images/shop/water-bottle.webp",
        whatsapp: "https://wa.me/254795966792?text=Hello, I'd like to order the Merlik Branded Water Bottle"
    },
    {
        name: "Merlik Branded Keyholder",
        image: "/images/shop/keyholder.webp",
        whatsapp: "https://wa.me/254795966792?text=Hello, I'd like to order the Merlik Branded Keyholder"
    },
    {
        name: "Merlik Branded Mug",
        image: "/images/shop/mug.webp",
        whatsapp: "https://wa.me/254795966792?text=Hello, I'd like to order the Merlik Branded Mug"
    }
];

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-40">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <main className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Hero / Header */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4"
                        >
                            Merlik Shop
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-6xl font-black font-serif text-foreground mb-6 leading-tight"
                        >
                            Wear the Mission<span className="text-brand-gold">.</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg lg:text-xl text-foreground/60 font-medium leading-relaxed"
                        >
                            Show your support by wearing the mission. All proceeds go directly toward our programs. Order via WhatsApp — we deliver across Kenya.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-brand-gold/10 border border-brand-gold/20 p-6 rounded-3xl flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-brand-gold flex items-center justify-center text-brand-black shadow-lg">
                            <ShoppingCart size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-foreground">Direct Impact</p>
                            <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mt-0.5">100% Proceeds Donated</p>
                        </div>
                    </motion.div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col gap-6"
                        >
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-foreground/10 bg-foreground/[0.02] transition-all duration-500 group-hover:border-brand-gold/30 group-hover:shadow-2xl group-hover:shadow-brand-gold/5">
                                {/* Next.js Image with Hover Effect */}
                                <Image
                                    fill
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                
                                {/* Overlay with Order Button */}
                                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-all duration-300 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm">
                                    <a 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href={product.whatsapp}
                                        className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-3 bg-brand-gold text-brand-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl"
                                    >
                                        Order via WhatsApp <ExternalLink size={14} />
                                    </a>
                                </div>

                                {/* Availability Tag */}
                                <div className="absolute top-6 right-6">
                                    <span className="bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold border border-brand-gold/20 shadow-sm">
                                        In Stock
                                    </span>
                                </div>
                            </div>
                            
                            <div className="space-y-3 px-2">
                                <h3 className="text-xl lg:text-2xl font-serif font-black text-foreground group-hover:text-brand-gold transition-colors">
                                    {product.name}
                                </h3>
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    href={product.whatsapp}
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold hover:translate-x-1 transition-all"
                                >
                                    <ShoppingBag size={14} /> Buy Now <ArrowRight size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 p-12 lg:p-20 rounded-[3rem] bg-foreground/[0.02] border border-foreground/5 text-center space-y-8 overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <div className="w-20 h-20 bg-brand-gold rounded-[2rem] flex items-center justify-center text-brand-black mx-auto shadow-2xl rotate-3">
                        <ShoppingBag size={32} />
                    </div>
                    
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl lg:text-5xl font-black font-serif text-foreground">How it Works</h2>
                        <p className="text-lg text-foreground/60 font-medium">
                            Ordering is simple. Click the WhatsApp button for the item you want, and our team will coordinate the payment and delivery details with you directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12">
                        <div className="space-y-4">
                            <div className="text-brand-gold font-serif text-4xl font-black">01</div>
                            <h4 className="font-bold text-foreground">Choose Item</h4>
                            <p className="text-sm text-foreground/50">Pick your favorite gear from our selection.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-brand-gold font-serif text-4xl font-black">02</div>
                            <h4 className="font-bold text-foreground">WhatsApp Us</h4>
                            <p className="text-sm text-foreground/50">Send us a message with your size and quantity.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-brand-gold font-serif text-4xl font-black">03</div>
                            <h4 className="font-bold text-foreground">Delivery</h4>
                            <p className="text-sm text-foreground/50">We'll deliver straight to your doorstep within Kenya.</p>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    );
}
