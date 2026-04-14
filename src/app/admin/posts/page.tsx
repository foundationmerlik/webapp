"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Edit3, 
  Trash2, 
  Loader2,
  Image as ImageIcon,
  CheckCircle2,
  X
} from "lucide-react";

function PostsContent() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const action = searchParams.get("action");
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    type: "blog",
    image: ""
  });

  useEffect(() => {
    fetchPosts();
    if (action === "new") {
        setIsAdding(true);
    }
  }, [action]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/admin/posts");
      const d = await res.json();
      if (Array.isArray(d)) setPosts(d);
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
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ title: "", excerpt: "", content: "", type: "blog", image: "" });
        setIsAdding(false);
        router.replace("/admin/posts");
        fetchPosts();
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
          <h1 className="text-4xl font-black font-serif text-foreground">Content Factory</h1>
          <p className="text-foreground/50 font-medium mt-1">Write, edit and publish stories.</p>
        </div>
        <button 
          onClick={() => {
            if (isAdding) {
                router.replace("/admin/posts");
                setIsAdding(false);
            } else {
                router.replace("/admin/posts?action=new");
                setIsAdding(true);
            }
          }}
          className="px-6 py-3 bg-brand-gold text-brand-black rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 transition-all text-sm"
        >
          {isAdding ? <X size={18} /> : <Plus size={18} />}
          {isAdding ? "Close Editor" : "New Story"}
        </button>
      </div>

      {isAdding && (
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

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full md:w-fit px-12 bg-brand-gold text-brand-black py-5 rounded-2xl font-black text-xl transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] disabled:opacity-50 flex items-center justify-center gap-3"
                >
                    {isSaving ? <Loader2 size={24} className="animate-spin" /> : <>Publish Now <CheckCircle2 size={20} /></>}
                </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {isLoading ? (
            <div className="col-span-full py-20 text-center">
                <Loader2 size={40} className="animate-spin text-brand-gold mx-auto" />
            </div>
        ) : posts.length === 0 ? (
            <div className="col-span-full py-20 text-center bg-white dark:bg-zinc-900/50 rounded-[3rem] border border-dashed border-foreground/10">
                <p className="text-foreground/30 font-serif italic text-xl">The factory is empty. Start writing!</p>
            </div>
        ) : (
            posts.map((post) => (
                <div key={post.id} className="group bg-white dark:bg-zinc-900/50 rounded-[2.5rem] border border-foreground/5 overflow-hidden shadow-sm hover:border-brand-gold/30 transition-all flex flex-col">
                    <div className="aspect-video bg-foreground/5 relative overflow-hidden">
                        {post.image ? (
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-foreground/10">
                                <FileText size={48} />
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${post.type === 'blog' ? 'bg-blue-500 text-white' : 'bg-brand-gold text-brand-black'}`}>
                                {post.type}
                            </span>
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-xl font-black font-serif text-foreground mb-3 line-clamp-2 leading-tight">{post.title}</h3>
                        <p className="text-sm text-foreground/40 font-medium line-clamp-3 mb-6">{post.excerpt}</p>
                        
                        <div className="mt-auto pt-6 border-t border-foreground/5 flex items-center justify-between">
                            <span className="text-[10px] text-foreground/20 font-black uppercase tracking-widest">
                                {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                            <div className="flex items-center gap-2">
                                <button className="p-3 bg-foreground/5 rounded-xl text-foreground/40 hover:text-brand-gold transition-colors">
                                    <Edit3 size={18} />
                                </button>
                                <button className="p-3 bg-foreground/5 rounded-xl text-foreground/40 hover:text-red-500 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
}

export default function PostsManager() {
    return (
        <Suspense fallback={<div className="p-20 text-center"><Loader2 className="animate-spin mx-auto text-brand-gold" size={40} /></div>}>
            <PostsContent />
        </Suspense>
    );
}
