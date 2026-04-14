import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/auth";

// Public routes that don't require authentication
const publicRoutes = ["/", "/login", "/about", "/programs", "/donate", "/calendar", "/blog", "/contact", "/support"];

// Routes that require admin role
const adminOnlyRoutes = ["/admin/inquiries", "/admin/users"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  
  // Check if it's an admin route
  const isAdminRoute = path.startsWith("/admin");
  const isApiAdminRoute = path.startsWith("/api/admin");

  if (isAdminRoute || isApiAdminRoute) {
    const sessionCookie = req.cookies.get("session")?.value;
    const session = sessionCookie ? await decrypt(sessionCookie) : null;

    // 1. If no session, redirect to login (or return 401 for API)
    if (!session) {
      if (isApiAdminRoute) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    // 2. Role-based access control
    const userRole = session.user?.role;

    // Only admins can access sensitive admin routes
    if (adminOnlyRoutes.some(route => path.startsWith(route)) && userRole !== "admin") {
      return NextResponse.redirect(new URL("/admin", req.nextUrl));
    }
    
    // Similarly for API
    if (path.startsWith("/api/admin/inquiries") && userRole !== "admin") {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/api/admin/:path*'],
};
