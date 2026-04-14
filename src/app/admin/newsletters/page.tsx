"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Send, 
  Users, 
  History, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  Eye
} from "lucide-react";

export default function NewsletterManager() {
  const [data, setData] = useState<{ subs: any[], campaigns: any[] }>({ subs: [], campaigns: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  
  // Form State
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/admin/newsletter");
      const d = await res.json();
      setData(d);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirm(`Are you sure you want to send this newsletter to ${data.subs.length} subscribers?`)) return;
    
    setIsSending(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/newsletter", {
        method: "POST",
        body: JSON.stringify({ subject, content }),
      });

      if (res.ok) {
        setMessage("Success! Newsletter has been dispatched.");
        setSubject("");
        setContent("");
        fetchData();
      } else {
        const error = await res.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (err) {
      setMessage("Failed to connect to the server.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black font-serif text-foreground">Newsletter Studio</h1>
          <p className="text-foreground/50 font-medium mt-1">Communicate directly with your community.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Composition Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-[2.5rem] border border-foreground/5 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-foreground mb-8 flex items-center gap-3">
                <Send size={20} className="text-brand-gold" /> Compose Update
            </h2>

            <form onSubmit={handleSend} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Email Subject</label>
                    <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Impact Report: March 2026 Outreach"
                        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Content (Markdown supported)</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your message here..."
                        rows={12}
                        className="w-full rounded-3xl border border-foreground/10 bg-foreground/5 p-6 font-medium focus:border-brand-gold outline-none transition-all resize-none leading-relaxed"
                    ></textarea>
                </div>

                {message && (
                    <div className={`p-4 rounded-2xl font-bold flex items-center gap-3 ${message.startsWith('Error') ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                        {message.startsWith('Error') ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
                        {message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSending || data.subs.length === 0}
                    className="w-full lg:w-fit px-12 bg-brand-gold text-brand-black py-5 rounded-2xl font-black text-xl transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] disabled:opacity-50 flex items-center justify-center gap-3"
                >
                    {isSending ? <Loader2 size={24} className="animate-spin" /> : <>Send to {data.subs.length} Subscribers <Send size={20} /></>}
                </button>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-foreground/5 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40 mb-6 flex items-center gap-3">
                    <Users size={16} /> Audience Snapshot
                </h3>
                <div className="flex items-end gap-3">
                    <span className="text-5xl font-black font-serif text-foreground">{data.subs.length}</span>
                    <span className="text-xs font-bold text-foreground/40 mb-2 uppercase tracking-widest">Active Members</span>
                </div>
            </div>

            <div className="bg-white dark:bg-zinc-900/50 rounded-3xl border border-foreground/5 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-foreground/5">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center gap-3">
                        <History size={16} /> Sent History
                    </h3>
                </div>
                <div className="max-h-[400px] overflow-y-auto divide-y divide-foreground/5">
                    {data.campaigns.length === 0 ? (
                        <div className="p-8 text-center text-xs text-foreground/30 italic">No history yet.</div>
                    ) : (
                        data.campaigns.map((camp) => (
                            <div key={camp.id} className="p-5 hover:bg-foreground/[0.01] transition-colors">
                                <p className="font-bold text-foreground text-sm line-clamp-1">{camp.subject}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-[10px] text-foreground/30 font-black uppercase tracking-widest">
                                        {new Date(camp.sentAt).toLocaleDateString()}
                                    </span>
                                    <button className="text-brand-gold/40 hover:text-brand-gold transition-colors">
                                        <Eye size={14} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
