"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Loader2,
  Image as ImageIcon,
  CheckCircle2,
  Save,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

interface PostEditorProps {
    initialData?: {
        id?: string;
        title: string;
        excerpt: string | null;
        content: string;
        type: string;
        image: string | null;
    };
    isEditing?: boolean;
}

export default function PostEditor({ initialData, isEditing = false }: PostEditorProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    type: initialData?.type || "blog",
    image: initialData?.image || ""
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const url = isEditing ? `/api/admin/posts` : `/api/admin/posts`;
      const method = isEditing ? "PUT" : "POST";
      
      // If editing, we need the ID
      const body = isEditing ? { ...formData, id: initialData?.id } : formData;

      const res = await fetch(url, {
        method,
        body: JSON.stringify(body),
      });

      if (res.ok) {
        router.push("/admin/posts");
        router.refresh();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900/50 p-8 md:p-12 rounded-[3rem] border border-brand-gold/20 shadow-2xl animate-reveal">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Article Title</label>
                    <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="A headline that captures attention..."
                        className="w-full text-3xl font-black font-serif rounded-2xl border-none bg-foreground/5 py-6 px-8 focus:ring-2 focus:ring-brand-gold outline-none transition-all placeholder:text-foreground/10"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Short Excerpt (SEO Summary)</label>
                    <textarea
                        required
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        placeholder="Briefly describe what this article is about..."
                        rows={3}
                        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 p-6 font-medium focus:border-brand-gold outline-none transition-all resize-none"
                    ></textarea>
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Content Type</label>
                    <select 
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 px-6 font-bold focus:border-brand-gold outline-none transition-all"
                    >
                        <option value="blog">Blog Post</option>
                        <option value="news">Press Release / News</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Cover Image URL</label>
                    <div className="relative group">
                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-brand-gold transition-colors" size={18} />
                        <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => setFormData({...formData, image: e.target.value})}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 py-4 pl-12 pr-4 font-medium focus:border-brand-gold outline-none transition-all"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-2">Body Content (Markdown)</label>
            <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                placeholder="Tell your story here..."
                rows={15}
                className="w-full rounded-[2rem] border border-foreground/10 bg-foreground/5 p-8 font-medium focus:border-brand-gold outline-none transition-all resize-none leading-relaxed"
            ></textarea>
        </div>

        <div className="flex justify-between items-center">
            {isEditing && (
                <Link href="/admin/posts" className="flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors font-bold uppercase tracking-widest text-xs">
                    <ArrowLeft size={16} /> Discard Changes
                </Link>
            )}
            <button
                type="submit"
                disabled={isSaving}
                className="w-full md:w-fit px-12 bg-brand-gold text-brand-black py-5 rounded-2xl font-black text-xl transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] disabled:opacity-50 flex items-center justify-center gap-3 ml-auto"
            >
                {isSaving ? <Loader2 size={24} className="animate-spin" /> : <>{isEditing ? "Save Changes" : "Publish Now"} <CheckCircle2 size={20} /></>}
            </button>
        </div>
      </form>
    </div>
  );
}
