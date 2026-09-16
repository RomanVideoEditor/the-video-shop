import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

const CANONICAL_HOST = "www.the-videoshop.com";

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const host = request.headers.get("host") ?? "";
  // Strip port for local dev comparison
  const hostname = host.split(":")[0];
  if (hostname !== CANONICAL_HOST && hostname !== "localhost") {
    const res = response ?? NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
