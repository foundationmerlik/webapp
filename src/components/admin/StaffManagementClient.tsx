"use client";

import { useState, useEffect } from "react";
import { Plus, UserPlus, Mail, Shield, User, Loader2, Trash2, CheckCircle2 } from "lucide-react";

export default function StaffManagementClient() {
  const [staff, setStaff] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState("");
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "staff"
  });

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const res = await fetch("/api/admin/staff");
      const data = await res.json();
      if (Array.isArray(data)) setStaff(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccess("");

    try {
      const res = await fetch("/api/admin/staff", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Staff member added and invitation email sent!");
        setFormData({ name: "", email: "", password: "", role: "staff" });
        setIsAdding(false);
        fetchStaff();
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
          <h1 className="text-4xl font-black font-serif text-foreground">Staff Management</h1>
          <p className="text-foreground/50 font-medium mt-1">Manage team access and permissions.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-6 py-3 bg-brand-gold text-brand-black rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 transition-all text-sm"
        >
          {isAdding ? <Plus size={18} className="rotate-45" /> : <UserPlus size={18} />}
          {isAdding ? "Cancel" : "Add New Staff"}
        </button>
      </div>

      {success && (
        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 p-4 rounded-2xl text-green-500 font-bold">
            <CheckCircle2 size={20} /> {success}
        </div>
      )}

      {isAdding && (
        <div className="bg-white dark:bg-zinc-900/50 p-8 md:p-10 rounded-[2.5rem] border border-brand-gold/20 shadow-xl animate-reveal">
          <form onSubmit={handleAddStaff} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@merlikfoundation.org"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Temporary Password</label>
              <div className="relative group">
                <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                <input
                  type="text"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Set a secure initial password"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Permission Role</label>
              <select 
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all appearance-none"
              >
                <option value="staff">Staff (Content Editor)</option>
                <option value="admin">Administrator (Full Access)</option>
              </select>
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="w-fit px-12 bg-brand-gold text-brand-black py-4 rounded-2xl font-black text-lg transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSaving ? <Loader2 size={24} className="animate-spin" /> : "Confirm & Send Credentials"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Staff Table */}
      <div className="bg-white dark:bg-zinc-900/50 rounded-3xl border border-foreground/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-foreground/5 border-b border-foreground/5">
              <tr>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40">Member</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40">Role</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40">Registered</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-foreground/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-8 py-20 text-center">
                    <Loader2 size={40} className="animate-spin text-brand-gold mx-auto" />
                  </td>
                </tr>
              ) : staff.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-8 py-20 text-center text-foreground/40 font-medium italic">
                    No staff members registered yet.
                  </td>
                </tr>
              ) : (
                staff.map((member) => (
                  <tr key={member.id} className="hover:bg-foreground/[0.01] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-black text-sm">
                          {member.name?.charAt(0) || 'S'}
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{member.name}</p>
                          <p className="text-xs text-foreground/40">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${member.role === 'admin' ? 'bg-brand-gold text-brand-black' : 'bg-foreground/5 text-foreground/60'}`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm text-foreground/50 font-medium whitespace-nowrap">
                      {new Date(member.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-foreground/20 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
