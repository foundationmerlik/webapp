import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await db.query.posts.findFirst({
    where: eq(posts.id, id),
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <Link 
            href="/admin/posts" 
            className="inline-flex items-center gap-2 text-foreground/40 hover:text-brand-gold font-black uppercase tracking-widest text-[10px] mb-4 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Factory
          </Link>
          <h1 className="text-4xl font-black font-serif text-foreground">Editing Story</h1>
          <p className="text-foreground/50 font-medium mt-1">Refine your message for the world.</p>
        </div>
      </div>

      <PostEditor 
        initialData={{
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          type: post.type,
          image: post.image
        }} 
        isEditing={true} 
      />
    </div>
  );
}
