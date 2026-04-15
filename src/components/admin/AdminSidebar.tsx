"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Mail, 
  LogOut, 
  Menu, 
  X,
  PlusCircle,
  Bell,
  Key,
  ShieldCheck,
  Settings,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminSidebar({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Content (Blogs/News)", href: "/admin/posts", icon: FileText },
    { name: "Calendar Events", href: "/admin/calendar", icon: Calendar },
    { name: "Newsletter", href: "/admin/newsletters", icon: Mail },
    { name: "Mission Control", href: "/admin/inquiries", icon: Bell, adminOnly: true },
    { name: "Staff Management", href: "/admin/staff", icon: Users, adminOnly: true },
    { name: "Security Audit", href: "/admin/audit-logs", icon: ShieldCheck, adminOnly: true },
    { name: "Settings", href: "/admin/settings", icon: Key },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 bg-brand-gold text-brand-black rounded-2xl lg:hidden shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed top-0 left-0 bottom-0 z-40 w-72 bg-white dark:bg-zinc-950 border-r border-foreground/5
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-8">
          <div className="shrink-0">
            {/* Logo & Theme Toggle */}
            <div className="mb-10 flex items-center justify-between">
              <Link href="/">
                <Image
                  src={mounted && resolvedTheme === 'dark' ? '/logo_white.png' : '/logo_black.png'}
                  alt="Merlik Foundation"
                  width={140}
                  height={42}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-2xl bg-foreground/5 hover:bg-brand-gold/20 text-foreground transition-all border border-foreground/5 group"
                aria-label="Toggle Theme"
              >
                <div className="relative w-5 h-5 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {mounted && theme === 'dark' ? (
                      <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={20} className="text-brand-gold" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={20} className="group-hover:text-brand-gold transition-colors" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>

            {/* User Profile Info */}
            <div className="mb-8 p-5 rounded-3xl bg-foreground/[0.03] border border-foreground/5">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">Connected as</p>
              <p className="font-serif font-black text-foreground truncate">{user.name || 'Staff'}</p>
              <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mt-1">{user.role}</p>
            </div>
          </div>

          {/* Navigation - Scrollable section */}
          <nav className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-2 custom-scrollbar">
            {menuItems.filter(item => !item.adminOnly || user.role === 'admin').map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all
                    ${isActive 
                      ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20' 
                      : 'text-foreground/50 hover:bg-foreground/5 hover:text-foreground'
                    }
                  `}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions - Fixed at bottom */}
          <div className="shrink-0 mt-8 pt-8 border-t border-foreground/5">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-500/10 transition-all"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
