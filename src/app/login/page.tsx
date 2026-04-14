"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SafeYear from "@/components/SafeYear";
import { Lock, Mail, ArrowRight, Loader2, Sparkles, Eye, EyeOff } from "lucide-react";
import { useTheme } from "next-themes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105">
            <Image
              src={mounted && resolvedTheme === 'dark' ? '/logo_white.png' : '/logo_black.png'}
              alt="Merlik Foundation"
              width={180}
              height={54}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-brand-gold" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Staff Portal</span>
          </div>
          <h1 className="text-3xl font-black font-serif text-foreground">Welcome Back</h1>
          <p className="text-foreground/50 text-sm mt-2">Enter your credentials to access the dashboard</p>
        </div>

        <div className="bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@merlikfoundation.org"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-12 font-medium focus:border-brand-gold outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/20 hover:text-brand-gold transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-xs font-bold text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-shimmer flex items-center justify-center gap-3 bg-brand-gold text-brand-black py-4 rounded-2xl font-black text-lg transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] disabled:opacity-50"
            >
              {isLoading ? <Loader2 size={24} className="animate-spin" /> : <>Sign In <ArrowRight size={20} /></>}
            </button>
          </form>
        </div>

        <p className="text-center text-foreground/30 text-xs mt-8">
          © <SafeYear /> Merlik Foundation. Access restricted to authorized personnel.
        </p>
      </div>
    </div>
  );
}
