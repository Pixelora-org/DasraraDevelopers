import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "dasara_owner";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/owner" || pathname.startsWith("/api/leads")) {
    const ok = request.cookies.get(COOKIE)?.value;
    const expected = process.env.OWNER_PASSWORD || "DasaraOwner2026";
    if (ok !== expected) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const url = request.nextUrl.clone();
      url.pathname = "/owner/login";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/owner", "/api/leads/:path*"],
};
