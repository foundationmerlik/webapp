import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  role: text("role", { enum: ["admin", "staff"] }).default("staff"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

export const posts = sqliteTable("posts", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  image: text("image"),
  type: text("type", { enum: ["blog", "news"] }).notNull(),
  status: text("status", { enum: ["draft", "published"] }).default("draft"),
  authorId: text("author_id").references(() => users.id),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

export const events = sqliteTable("events", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  date: integer("date", { mode: "timestamp" }).notNull(),
  location: text("location"),
  type: text("type", { enum: ["outreach", "mentorship", "fundraiser", "other"] }).default("other"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

export const newsletterSubscribers = sqliteTable("newsletter_subscribers", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  active: integer("active", { mode: "boolean" }).default(true),
  subscribedAt: integer("subscribed_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

export const newsletterCampaigns = sqliteTable("newsletter_campaigns", {
  id: text("id").primaryKey(),
  subject: text("subject").notNull(),
  content: text("content").notNull(),
  sentAt: integer("sent_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
  sentBy: text("sent_by").references(() => users.id),
});

export const formSubmissions = sqliteTable("form_submissions", {
  id: text("id").primaryKey(),
  type: text("type", { enum: ["contact", "volunteer", "internship", "mentorship", "sponsorship", "partnership"] }).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message"),
  metadata: text("metadata"), // Store extra fields as JSON if needed
  status: text("status", { enum: ["pending", "reviewed", "archived"] }).default("pending"),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});

export const donations = sqliteTable("donations", {
  id: text("id").primaryKey(),
  donorName: text("donor_name"),
  donorEmail: text("donor_email"),
  amount: integer("amount").notNull(),
  currency: text("currency").default("KES"),
  reference: text("reference").notNull().unique(),
  status: text("status").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(strftime('%s', 'now'))`),
});
