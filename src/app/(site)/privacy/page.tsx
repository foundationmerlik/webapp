import { Shield, Lock, Eye, FileText, Globe, Bell } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Lock size={14} /> Trust & Transparency
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-serif text-foreground leading-tight mb-6">
            Privacy <span className="text-brand-gold italic">Policy</span>
          </h1>
          <p className="text-foreground/50 text-lg font-medium max-w-2xl">
            At Merlik Foundation, we are committed to protecting your personal information. This policy outlines how we handle data to ensure your trust is maintained as we work to develop nations, one boy at a time.
          </p>
          <div className="mt-8 pt-8 border-t border-foreground/5 flex flex-wrap gap-6 text-xs text-foreground/30 font-bold uppercase tracking-widest">
            <span>Last Updated: April 14, 2026</span>
            <span>Version: 2.0.1</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="relative p-8 md:p-12 rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/5 overflow-hidden group hover:border-brand-gold/20 transition-all duration-500">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-all"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center shrink-0">
                <Globe size={24} className="text-brand-gold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4 text-foreground/60 leading-relaxed font-medium">
                  <p>We collect information that helps us provide a better experience for our donors, mentors, and volunteers. This includes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-foreground">Personal Details:</strong> Name, email address, and phone number provided via contact forms or newsletter subscriptions.</li>
                    <li><strong className="text-foreground">Donation Data:</strong> Information required to process gifts and issue tax-compliant receipts, processed through secure third-party partners.</li>
                    <li><strong className="text-foreground">Volunteer Profiles:</strong> Mentorship applications and professional background highlights for our safety protocols.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="relative p-8 md:p-12 rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/5 overflow-hidden group hover:border-brand-gold/20 transition-all duration-500">
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center shrink-0">
                <Eye size={24} className="text-brand-gold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">How We Use Your Data</h2>
                <div className="space-y-4 text-foreground/60 leading-relaxed font-medium">
                  <p>Your data is used solely for the operational efficiency of the Merlik Foundation:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To send impact reports and foundation updates via our newsletter.</li>
                    <li>To coordinate mentorship sessions and volunteer events.</li>
                    <li>To process and acknowledge contributions in compliance with Kenyan non-profit regulations.</li>
                    <li>To improve our digital platform performance based on anonymous usage analytics.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="relative p-8 md:p-12 rounded-[2.5rem] bg-foreground/[0.02] border border-foreground/5 overflow-hidden group hover:border-brand-gold/20 transition-all duration-500">
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center shrink-0">
                <Shield size={24} className="text-brand-gold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-4">Data Security & Protection</h2>
                <p className="text-foreground/60 leading-relaxed font-medium mb-4">
                  We implement industry-standard security measures to safeguard your information. Our platform uses:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-background/50 p-4 rounded-xl border border-foreground/5">
                    <p className="font-bold text-foreground text-sm mb-1">SSL Encryption</p>
                    <p className="text-xs text-foreground/40 font-medium">Secure data transmission for all interactions.</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-xl border border-foreground/5">
                    <p className="font-bold text-foreground text-sm mb-1">Access Control</p>
                    <p className="text-xs text-foreground/40 font-medium">Data access restricted to authorized staff only.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="relative p-8 md:p-12 rounded-[2.5rem] bg-brand-gold/[0.03] border border-brand-gold/10 overflow-hidden">
             <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center shrink-0">
                  <Bell size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-foreground mb-4">Updates & Contact</h2>
                  <p className="text-foreground/60 leading-relaxed font-medium mb-4">
                    We may update this policy periodically to reflect changes in our practices or regulatory requirements. If you have any questions regarding your data, please reach out to our privacy officer.
                  </p>
                  <a href="mailto:info@merlikfoundation.org" className="inline-flex items-center text-brand-gold font-bold hover:underline underline-offset-4">
                    info@merlikfoundation.org
                  </a>
                </div>
             </div>
          </section>

          {/* Disclaimer */}
          <div className="pt-10 text-center">
            <p className="text-[10px] text-foreground/20 font-black uppercase tracking-[0.3em]">
              Merlik Foundation &copy; 2026 · Registered in Nairobi, Kenya
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
