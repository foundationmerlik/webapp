import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const post = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background text-foreground pt-32 pb-40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-foreground/40 hover:text-brand-gold font-black uppercase tracking-widest text-xs mb-12 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Stories
        </Link>

        {/* Header */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-4">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${post.type === 'blog' ? 'bg-blue-500 text-white' : 'bg-brand-gold text-brand-black'}`}>
              {post.type}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-serif leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-foreground/40 text-xs font-black uppercase tracking-widest py-6 border-y border-foreground/5">
            <span className="flex items-center gap-3"><Calendar size={16} className="text-brand-gold" /> {new Date(post.createdAt!).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-3"><User size={16} className="text-brand-gold" /> Merlik Staff</span>
            <button className="ml-auto flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-xl prose-zinc dark:prose-invert max-w-none">
          <p className="text-2xl font-medium text-foreground/70 leading-relaxed italic mb-12 border-l-4 border-brand-gold pl-8">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-wrap font-medium leading-relaxed text-foreground/80 space-y-8">
            {post.content}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-foreground/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-black font-serif text-xl border border-brand-gold/20">
                    M
                </div>
                <div>
                    <p className="font-black text-foreground">Merlik Foundation</p>
                    <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Official Publication</p>
                </div>
            </div>
            <Link href="/donate" className="px-8 py-4 bg-brand-black text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all">
                Support our Mission
            </Link>
        </div>
      </div>
    </article>
  );
}
