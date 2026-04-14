import { db } from "@/lib/db";
import { posts, events, newsletterSubscribers } from "@/lib/db/schema";
import { count } from "drizzle-orm";
import { 
  Users, 
  Calendar, 
  FileText, 
  Mail, 
  TrendingUp, 
  Clock,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  // Stats
  const [postsCount] = await db.select({ value: count() }).from(posts);
  const [eventsCount] = await db.select({ value: count() }).from(events);
  const [subsCount] = await db.select({ value: count() }).from(newsletterSubscribers);

  const stats = [
    { name: "Total Articles", value: postsCount.value, icon: FileText, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Scheduled Events", value: eventsCount.value, icon: Calendar, color: "text-brand-gold", bg: "bg-brand-gold/10" },
    { name: "Subscribers", value: subsCount.value, icon: Mail, color: "text-green-500", bg: "bg-green-500/10" },
  ];

  const recentPosts = await db.query.posts.findMany({
    limit: 5,
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black font-serif text-foreground">Mission Control</h1>
          <p className="text-foreground/50 font-medium mt-1">Status overview of Merlik presence.</p>
        </div>
        <div className="flex items-center gap-3">
            <Link href="/admin/posts?action=new" className="px-6 py-3 bg-brand-gold text-brand-black rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 transition-all text-sm">
                <FileText size={18} /> New Article
            </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-foreground/5 shadow-sm group hover:border-brand-gold/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="text-green-500 flex items-center gap-1 text-sm font-bold">
                <ArrowUpRight size={14} /> Active
              </div>
            </div>
            <p className="text-4xl font-black font-serif text-foreground mb-1">{stat.value}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">{stat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-zinc-900/50 rounded-3xl border border-foreground/5 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-foreground/5 flex items-center justify-between">
            <h2 className="text-xl font-bold font-serif text-foreground flex items-center gap-3">
                <Clock size={20} className="text-brand-gold" /> Recent Articles
            </h2>
            <Link href="/admin/posts" className="text-xs font-bold uppercase text-brand-gold hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-foreground/5">
            {recentPosts.length === 0 ? (
                <div className="p-12 text-center text-foreground/30 font-medium italic">No articles published yet.</div>
            ) : (
                recentPosts.map((post) => (
                    <div key={post.id} className="p-6 flex items-center justify-between hover:bg-foreground/[0.01] transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center font-black text-brand-gold">
                                {post.type === 'blog' ? 'B' : 'N'}
                            </div>
                            <div>
                                <p className="font-bold text-foreground line-clamp-1">{post.title}</p>
                                <p className="text-[10px] text-foreground/40 uppercase font-black tracking-widest mt-0.5">
                                    {new Date(post.createdAt!).toLocaleDateString()} · {post.status}
                                </p>
                            </div>
                        </div>
                        <Link href={`/admin/posts/edit/${post.id}`} className="p-2 text-foreground/20 hover:text-brand-gold transition-colors">
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                ))
            )}
          </div>
        </div>

        {/* Quick Actions / Tips */}
        <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-brand-gold text-brand-black shadow-xl shadow-brand-gold/10 relative overflow-hidden group">
                <TrendingUp className="absolute top-[-20px] right-[-20px] w-40 h-40 opacity-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black font-serif mb-4 relative z-10">Expand Your Reach</h3>
                <p className="text-brand-black/70 font-medium mb-6 relative z-10">Regularly updating the blog helps SEO and keeps your community engaged across Kenya.</p>
                <Link href="/admin/posts?action=new" className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-xl font-bold text-sm relative z-10 hover:brightness-125 transition-all">
                    Write Story <ArrowUpRight size={16} />
                </Link>
            </div>
            
            <Link href="/admin/newsletters" className="p-8 rounded-3xl border-2 border-dashed border-foreground/10 flex flex-col items-center justify-center text-center gap-4 hover:border-brand-gold/30 transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/20 group-hover:text-brand-gold transition-colors">
                    <Mail size={32} />
                </div>
                <div>
                    <h4 className="font-bold text-foreground">Launch Newsletter</h4>
                    <p className="text-xs text-foreground/40 mt-1 uppercase tracking-widest font-black">Engage Subcommittee Members</p>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
