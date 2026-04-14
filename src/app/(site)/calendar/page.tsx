import { db } from "@/lib/db";
import { events } from "@/lib/db/schema";
import { gte, asc } from "drizzle-orm";
import { MapPin, Clock, Calendar as CalendarIcon, ArrowRight, Share2, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Calendar | Merlik Foundation",
  description: "Join our upcoming mentorship sessions, community outreach programs, and fundraiser events across Kenya.",
};

export default async function CalendarPage() {
  const upcomingEvents = await db.query.events.findMany({
    where: gte(events.date, new Date()),
    orderBy: [asc(events.date)],
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground pt-32 pb-40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-24">
            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Take Action</span>
            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black leading-[1.1] tracking-tight font-serif text-foreground">
                Upcoming <span className="text-brand-gold italic">Mission.</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 font-medium mt-8 font-sans">
                Real-world impact happens on the ground. Join us as a volunteer, mentor, or observer at our next initiative.
            </p>
        </div>

        {upcomingEvents.length === 0 ? (
            <div className="py-40 text-center border-2 border-dashed border-foreground/10 rounded-[4rem]">
                <p className="text-2xl font-serif italic text-foreground/30">The calendar is being updated with new missions. Check back soon.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                {upcomingEvents.map((event, idx) => (
                    <div key={event.id} className="group relative bg-[#FDFAF3] dark:bg-zinc-900/50 rounded-[3rem] p-8 md:p-12 border border-brand-gold/10 hover:border-brand-gold/30 transition-all shadow-xl hover:shadow-2xl overflow-hidden">
                        {/* Event Number / Index */}
                        <div className="absolute top-[-20px] right-[-20px] text-[150px] font-black font-serif italic text-brand-gold/5 group-hover:text-brand-gold/10 transition-colors pointer-events-none">
                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative z-10">
                            <div className="flex items-start lg:items-center gap-8 md:gap-12 flex-1">
                                {/* Date Box */}
                                <div className="w-24 md:w-32 h-24 md:h-32 rounded-[2rem] bg-brand-gold flex flex-col items-center justify-center text-brand-black shrink-0 shadow-lg shadow-brand-gold/20 flex-nowrap">
                                    <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] leading-none mb-1 md:mb-2">
                                        {new Date(event.date).toLocaleDateString(undefined, { month: 'short' })}
                                    </span>
                                    <span className="text-4xl md:text-5xl font-black font-serif leading-none">
                                        {new Date(event.date).getDate()}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="px-5 py-1.5 rounded-full bg-brand-black text-white text-[10px] font-black uppercase tracking-widest">{event.type}</span>
                                        <span className="text-sm text-brand-gold font-bold flex items-center gap-2">
                                            <Clock size={16} /> {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-serif text-foreground group-hover:text-brand-gold transition-colors">{event.title}</h2>
                                    <p className="text-lg text-foreground/60 font-medium max-w-2xl">{event.description}</p>
                                    
                                    <div className="flex items-center gap-6 pt-4">
                                        <span className="text-sm font-bold text-foreground/80 flex items-center gap-2">
                                            <MapPin size={18} className="text-brand-gold" /> {event.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row lg:flex-col gap-4 shrink-0">
                                <button className="flex-1 lg:w-full px-8 py-5 bg-brand-black text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-125 transition-all flex items-center justify-center gap-3">
                                    Join Mission <ArrowRight size={18} />
                                </button>
                                <button className="p-5 border-2 border-foreground/10 text-foreground/40 rounded-2xl hover:border-brand-gold hover:text-brand-gold transition-all">
                                    <Share2 size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Reminder Call */}
        <div className="mt-40 text-center max-w-2xl mx-auto space-y-10">
            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto">
                <Bell size={40} />
            </div>
            <h2 className="text-4xl font-black font-serif text-foreground">Want to host an event?</h2>
            <p className="text-xl text-foreground/50 font-medium">If you represent a school, community center, or corporate partner looking to collaborate on a mentorship drive, reach out to us.</p>
            <Link href="/contact" className="inline-flex items-center gap-4 border-2 border-brand-gold px-12 py-5 rounded-full font-black text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all group">
                Contact Coordination Team <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
      </main>
    </div>
  );
}
