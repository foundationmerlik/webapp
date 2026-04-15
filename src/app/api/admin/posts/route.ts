import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { getSession } from "@/lib/auth";
import { v4 as uuidv4 } from "uuid";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const allPosts = await db.select().from(posts).orderBy(posts.createdAt);
    return NextResponse.json(allPosts);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const data = await request.json();
    
    const newPost = {
      id: uuidv4(),
      title: data.title,
      slug: data.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""),
      content: data.content,
      excerpt: data.excerpt,
      image: data.image,
      type: data.type as "blog" | "news",
      status: "published" as "published" | "draft",
      authorId: session.user.id,
      publishedAt: new Date()
    };

    await db.insert(posts).values(newPost);

    // Activity Log
    const { logActivity } = await import("@/lib/audit");
    await logActivity(session.user.id, session.user.email, "CREATE_POST", `Title: ${newPost.title}`);

    return NextResponse.json(newPost);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error creating post" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const { id, ...data } = await request.json();
    if (!id) return NextResponse.json({ message: "Post ID required" }, { status: 400 });

    const updatedPost = {
      title: data.title,
      slug: data.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""),
      content: data.content,
      excerpt: data.excerpt,
      image: data.image,
      type: data.type as "blog" | "news",
      updatedAt: new Date()
    };

    await db.update(posts).set(updatedPost).where(eq(posts.id, id));

    // Activity Log
    const { logActivity } = await import("@/lib/audit");
    await logActivity(session.user.id, session.user.email, "UPDATE_POST", `Title: ${updatedPost.title} (ID: ${id})`);

    return NextResponse.json({ message: "Post updated successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating post" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
    try {
      const session = await getSession();
      if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  
      const { searchParams } = new URL(request.url);
      const id = searchParams.get("id");
      
      if (!id) return NextResponse.json({ message: "Post ID required" }, { status: 400 });
  
      await db.delete(posts).where(eq(posts.id, id));

      // Activity Log
      const { logActivity } = await import("@/lib/audit");
      await logActivity(session.user.id, session.user.email, "DELETE_POST", `Post ID: ${id}`);

      return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error deleting post" }, { status: 500 });
    }
}
