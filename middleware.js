import { NextResponse } from "next/server";

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = new URL(request.url).pathname;

  const bots = [
    "googlebot", "facebookexternalhit", "twitterbot", "linkedinbot",
    "discordbot", "whatsapp", "telegrambot", "slackbot", "pinterestbot",
    "embedly", "redditbot", "applebot",
  ];

  const IGNORE_EXTENSIONS = [
    ".js", ".css", ".xml", ".png", ".jpg", ".jpeg", ".gif", ".pdf", ".txt",
    ".ico", ".svg", ".woff", ".ttf", ".woff2", ".webmanifest",
  ];

  const isBot = bots.some(bot => userAgent.toLowerCase().includes(bot));
  const extension = pathname.slice(((pathname.lastIndexOf(".") - 1) >>> 0) + 1);
  const isStatic = extension && IGNORE_EXTENSIONS.includes(`.${extension}`);

  if (isStatic || isBot) {
    return NextResponse.next();
  }

  // ================= CSP ZA GA4 =================
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
    connect-src 'self' 
      https://*.google-analytics.com 
      https://*.googletagmanager.com 
      https://region1.google-analytics.com 
      https://www.google-analytics.com;
    img-src 'self' 
      https://*.google-analytics.com 
      https://*.googletagmanager.com 
      data:;
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, " ").trim();

  const response = NextResponse.next();

  // Postavi CSP header
  response.headers.set("Content-Security-Policy", cspHeader);

  return response;
}