"use client";

import { useState } from "react";
import { Key, Lock, Eye, EyeOff, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminSettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match" });
      return;
    }

    if (newPassword.length < 8) {
        setMessage({ type: "error", text: "New password must be at least 8 characters long" });
        return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/profile/change-password", {
        method: "POST",
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Mission accomplished. Your password has been updated." });
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setMessage({ type: "error", text: data.message || "Failed to update password." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "A connection error occurred." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black font-serif text-foreground">Security Settings</h1>
          <p className="text-foreground/50 font-medium mt-1">Protect your account and foundation access.</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <div className="bg-white dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-foreground/5 shadow-sm">
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-foreground/5">
            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-2xl">
                <Lock size={24} />
            </div>
            <div>
                <h2 className="text-xl font-bold font-serif text-foreground">Change Password</h2>
                <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mt-0.5">Update your security credentials</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Current Password</label>
              <div className="relative group">
                <input
                  type={showPasswords ? "text" : "password"}
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">New Password</label>
                    <input
                        type={showPasswords ? "text" : "password"}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="At least 8 chars"
                        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Confirm New Password</label>
                    <input
                        type={showPasswords ? "text" : "password"}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Repeat new password"
                        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button 
                    type="button"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="flex items-center gap-2 text-xs font-bold text-foreground/40 hover:text-brand-gold transition-colors"
                >
                    {showPasswords ? <EyeOff size={14} /> : <Eye size={14} />}
                    {showPasswords ? "Hide Passwords" : "Show Passwords"}
                </button>
            </div>

            {message.text && (
                <div className={`p-5 rounded-2xl font-bold flex items-start gap-3 animate-reveal ${message.type === 'error' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'}`}>
                    {message.type === 'error' ? <AlertCircle size={20} className="shrink-0 mt-0.5" /> : <CheckCircle2 size={20} className="shrink-0 mt-0.5" />}
                    <p className="text-sm">{message.text}</p>
                </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-gold text-brand-black py-5 rounded-2xl font-black text-lg transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
            >
              {isLoading ? <Loader2 size={24} className="animate-spin" /> : <>Update Security Key <Key size={20} /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
