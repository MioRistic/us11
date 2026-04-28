import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = new URL(request.url).pathname;

  // Preskačemo statičke i Next.js interne rute da ne lome slike i performanse
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|webmanifest)$/)
  ) {
    return NextResponse.next();
  }

  // ČIST CSP - bez ikakvih pametnih navodnika ili specijalnih karaktera
  const cspHeader = "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://platform.twitter.com; " +
    "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://region1.google-analytics.com https://www.google-analytics.com https://*.twitter.com https://*.x.com; " +
    "img-src 'self' data: blob: https:; " +
    "style-src 'self' 'unsafe-inline'; " +
    "font-src 'self' data:; " +
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "frame-ancestors 'none';";

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", cspHeader);

  return response;
}