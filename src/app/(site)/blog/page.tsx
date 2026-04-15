import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Search, Filter } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog & News | Merlik Foundation",
  description: "Stay updated with the latest stories, news, and impact reports from the Merlik Foundation. Developing nations, one boy at a time.",
};

export default async function BlogPage() {
  const allPosts = await db.query.posts.findMany({
    where: eq(posts.status, "published"),
    orderBy: [desc(posts.createdAt)],
  });

  const featuredPost = allPosts[0];
  const regularPosts = allPosts.slice(1);

  return (
    <div className="relative min-h-screen bg-background text-foreground pt-32 pb-40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block italic">Stories of Change</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight font-serif text-foreground">
                Blog & <span className="text-brand-gold italic">News</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/70 font-medium mt-6 font-sans italic opacity-80">
                Insights from our mentorship programs, community outreach reports, and official announcements.
            </p>
        </div>

        {allPosts.length === 0 ? (
            <div className="py-40 text-center border-2 border-dashed border-foreground/10 rounded-[4rem]">
                <p className="text-2xl font-serif italic text-foreground/30">New stories are being written. Check back soon.</p>
            </div>
        ) : (
            <div className="space-y-32">
                {/* Featured Post */}
                {featuredPost && (
                    <section className="relative group">
                        <Link href={`/blog/${featuredPost.slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden relative shadow-2xl">
                                {featuredPost.image ? (
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                                        <ArrowRight size={80} className="text-foreground/5 -rotate-45" />
                                    </div>
                                )}
                                <div className="absolute top-8 left-8">
                                    <span className="bg-brand-gold text-brand-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                                        Featured {featuredPost.type}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-6 text-foreground/40 text-xs font-black uppercase tracking-widest">
                                    <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-gold" /> {new Date(featuredPost.createdAt!).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    <span className="flex items-center gap-2"><User size={14} className="text-brand-gold" /> Merlik Staff</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-serif text-foreground leading-tight group-hover:text-brand-gold transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-foreground/60 leading-relaxed font-medium line-clamp-4">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="pt-4">
                                    <div className="inline-flex items-center gap-4 text-brand-gold font-black uppercase tracking-[0.2em] text-sm group-hover:gap-8 transition-all">
                                        Read Full Story <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </section>
                )}

                {/* Grid Posts */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {regularPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col h-full">
                            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative mb-8 shadow-lg">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-foreground/5 flex items-center justify-center"></div>
                                )}
                                <div className="absolute top-6 left-6">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${post.type === 'blog' ? 'bg-blue-500 text-white' : 'bg-brand-gold text-brand-black'}`}>
                                        {post.type}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-4 flex-1 flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30 flex items-center gap-2">
                                    <Calendar size={12} className="text-brand-gold/30" /> {new Date(post.createdAt!).toLocaleDateString()}
                                </span>
                                <h3 className="text-2xl font-black font-serif text-foreground leading-tight group-hover:text-brand-gold transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-foreground/50 font-medium line-clamp-3 mb-6">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 flex items-center gap-3 text-brand-gold font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                                    Read Post <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        )}

        {/* Newsletter Call to Action */}
        <section className="mt-40 p-12 md:p-24 rounded-[4rem] bg-brand-gold text-brand-black relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black font-serif mb-8 leading-tight">Stay inside the <span className="italic">circle.</span></h2>
                <p className="text-xl md:text-2xl font-bold opacity-70 mb-12">Get monthly impact reports and early updates on our initiatives delivered to your inbox.</p>
                <form className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 bg-white/20 border-2 border-brand-black/10 backdrop-blur-md rounded-2xl px-8 py-5 text-lg font-bold placeholder:text-brand-black/30 outline-none focus:border-brand-black transition-all"
                    />
                    <button className="bg-brand-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:brightness-125 transition-all">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
      </main>
    </div>
  );
}
