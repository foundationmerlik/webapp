"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Calendar as CalendarIcon, 
  ArrowRight, 
  Search, 
  Filter, 
  MessageSquare, 
  HandHeart, 
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface SubmissionsProps {
    submissions: any[];
    donations: any[];
}

export default function InquiriesClient({ submissions, donations }: SubmissionsProps) {
  const [activeTab, setActiveTab] = useState<"submissions" | "donations">("submissions");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Tab Switcher */}
      <div className="flex bg-foreground/5 p-1.5 rounded-[2rem] w-fit">
        <button
          onClick={() => setActiveTab("submissions")}
          className={`px-8 py-3 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'submissions' ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20' : 'text-foreground/40 hover:text-foreground'}`}
        >
          Submissions ({submissions.length})
        </button>
        <button
          onClick={() => setActiveTab("donations")}
          className={`px-8 py-3 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'donations' ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20' : 'text-foreground/40 hover:text-foreground'}`}
        >
          Donations ({donations.length})
        </button>
      </div>

      {activeTab === "submissions" ? (
        <div className="space-y-4">
          {submissions.length === 0 ? (
            <div className="py-20 text-center bg-white dark:bg-zinc-900/50 rounded-[3rem] border border-dashed border-foreground/10">
                <p className="text-foreground/30 font-serif italic text-xl">No submissions recorded yet.</p>
            </div>
          ) : (
            submissions.map((sub) => (
              <div 
                key={sub.id} 
                className={`group bg-white dark:bg-zinc-900/50 rounded-[2.5rem] border transition-all overflow-hidden ${expandedId === sub.id ? 'border-brand-gold ring-1 ring-brand-gold/20' : 'border-foreground/5 hover:border-brand-gold/30'}`}
              >
                <div 
                    onClick={() => toggleExpand(sub.id)}
                    className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${sub.type === 'contact' ? 'bg-blue-500/10 text-blue-500' : 'bg-brand-gold/10 text-brand-gold'}`}>
                            <MessageSquare size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-xl font-black font-serif text-foreground">{sub.name}</h3>
                                <span className="px-3 py-1 bg-foreground/5 text-foreground/40 text-[9px] font-black uppercase tracking-widest rounded-full">{sub.type}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-foreground/40">
                                <span className="flex items-center gap-1.5"><Mail size={14} className="text-brand-gold/40" /> {sub.email}</span>
                                {sub.phone && <span className="flex items-center gap-1.5"><Phone size={14} className="text-brand-gold/40" /> {sub.phone}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 justify-between md:justify-end">
                        <div className="text-right">
                            <p className="text-[10px] font-black uppercase tracking-widest text-foreground/20 flex items-center gap-1.5 justify-end">
                                <Clock size={12} /> {new Date(sub.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        {expandedId === sub.id ? <ChevronUp className="text-brand-gold" /> : <ChevronDown className="text-foreground/20" />}
                    </div>
                </div>

                {expandedId === sub.id && (
                    <div className="px-10 pb-10 pt-0 animate-reveal">
                        <div className="h-[1px] bg-foreground/5 mb-8"></div>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-4">Message / Purpose</h4>
                                <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-wrap font-medium bg-foreground/5 p-8 rounded-[2rem]">
                                    {sub.message}
                                </p>
                            </div>
                            
                            {sub.metadata && (
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-4">Additional Details</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {Object.entries(JSON.parse(sub.metadata)).map(([k, v]: [string, any]) => (
                                            <div key={k} className="p-4 rounded-2xl bg-foreground/5 border border-foreground/5">
                                                <p className="text-[9px] font-black uppercase tracking-widest text-foreground/30 mb-1">{k}</p>
                                                <p className="font-bold text-foreground">{v}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-end gap-4">
                                <a 
                                    href={`mailto:${sub.email}`}
                                    className="px-8 py-4 bg-brand-gold text-brand-black rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2"
                                >
                                    Reply via Email <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {donations.length === 0 ? (
            <div className="py-20 text-center bg-white dark:bg-zinc-900/50 rounded-[3rem] border border-dashed border-foreground/10">
                <p className="text-foreground/30 font-serif italic text-xl">No donations recorded yet.</p>
            </div>
          ) : (
            donations.map((don) => (
              <div key={don.id} className="bg-white dark:bg-zinc-900/50 rounded-[2.5rem] border border-foreground/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-brand-gold/30 transition-all shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[2rem] bg-brand-gold flex items-center justify-center text-brand-black shadow-lg shadow-brand-gold/20">
                        <HandHeart size={30} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black font-serif text-foreground mb-1">
                            KES {don.amount.toLocaleString()}
                        </h3>
                        <p className="text-sm font-bold text-foreground/50">
                            from <span className="text-foreground">{don.donorName || "Anonymous"}</span> 
                            {don.donorEmail && <span className="ml-2 pl-2 border-l border-foreground/10 text-brand-gold/80">{don.donorEmail}</span>}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:items-end gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/10">
                        {don.status}
                    </span>
                    <p className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest">
                        Ref: {don.reference}
                    </p>
                    <p className="text-xs font-bold text-foreground/40 mt-1">
                        {new Date(don.createdAt).toLocaleDateString()}
                    </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
