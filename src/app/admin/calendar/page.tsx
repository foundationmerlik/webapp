"use client";

import { useState, useEffect } from "react";
import { 
  Calendar, 
  Plus, 
  MapPin, 
  Clock, 
  Trash2, 
  Loader2,
  CheckCircle2,
  X,
  Tag
} from "lucide-react";

export default function CalendarManager() {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    type: "outreach"
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/admin/calendar");
      const d = await res.json();
      if (Array.isArray(d)) setEvents(d);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch("/api/admin/calendar", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ title: "", description: "", date: "", location: "", type: "outreach" });
        setIsAdding(false);
        fetchEvents();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black font-serif text-foreground">Mission Calendar</h1>
          <p className="text-foreground/50 font-medium mt-1">Schedule and manage upcoming initiatives.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-6 py-3 bg-brand-gold text-brand-black rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 transition-all text-sm"
        >
          {isAdding ? <X size={18} /> : <Plus size={18} />}
          {isAdding ? "Cancel" : "Add Event"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-white dark:bg-zinc-900/50 p-8 md:p-10 rounded-[2.5rem] border border-brand-gold/20 shadow-xl animate-reveal">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Event Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g. Mukuru Mentorship Drive"
                className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Date & Time</label>
              <input
                type="datetime-local"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Location</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="e.g. Kibera Community Center"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Event Type</label>
              <div className="relative group">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-6 font-bold focus:border-brand-gold outline-none transition-all appearance-none"
                >
                    <option value="outreach">Outreach</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="fundraiser">Fundraiser</option>
                    <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Description</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="What is the goal of this event?"
                rows={4}
                className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 p-6 font-medium focus:border-brand-gold outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="w-fit px-12 bg-brand-gold text-brand-black py-4 rounded-2xl font-black text-lg transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSaving ? <Loader2 size={24} className="animate-spin" /> : "Schedule Event"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Events List */}
      <div className="space-y-6">
        {isLoading ? (
            <div className="py-20 text-center">
                <Loader2 size={40} className="animate-spin text-brand-gold mx-auto" />
            </div>
        ) : events.length === 0 ? (
            <div className="py-20 text-center bg-white dark:bg-zinc-900/50 rounded-[3rem] border border-dashed border-foreground/10 font-serif italic text-foreground/30">
                No events scheduled yet.
            </div>
        ) : (
            events.map((event) => (
                <div key={event.id} className="group bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-3xl border border-foreground/5 hover:border-brand-gold/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex flex-col items-center justify-center text-brand-gold shrink-0">
                            <span className="text-xs font-black uppercase tracking-widest leading-none mb-1">
                                {new Date(event.date).toLocaleDateString(undefined, { month: 'short' })}
                            </span>
                            <span className="text-3xl font-black font-serif leading-none">
                                {new Date(event.date).getDate()}
                            </span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/40 text-[9px] font-black uppercase tracking-widest">{event.type}</span>
                                <span className="text-xs text-brand-gold font-bold flex items-center gap-1">
                                    <Clock size={12} /> {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                            <h3 className="text-xl font-black font-serif text-foreground">{event.title}</h3>
                            <div className="flex items-center gap-4 mt-2">
                                <span className="text-sm text-foreground/40 flex items-center gap-1.5 font-medium">
                                    <MapPin size={14} className="text-brand-gold" /> {event.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-4 bg-foreground/5 rounded-2xl text-foreground/20 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
}
