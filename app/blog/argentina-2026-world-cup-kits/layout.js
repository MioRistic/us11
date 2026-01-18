// app/blog/jerseys/argentina-2026-world-cup-kits/layout.js
import React from "react";
import Head from "next/head";

// ovo je server-side, nema 'use client'
export const metadata = {
  title: "Argentina FIFA World Cup 2026 Kits: Home and Away",
  description:
    "A complete look at Argentina’s 2026 World Cup kits, including Messi’s final World Cup home jersey, away kit, and official fan editions.",
  openGraph: {
    title: "Argentina 2026 World Cup Kits: Home and Away",
    description:
      "Explore Argentina’s 2026 World Cup home and away kits, youth and goalkeeper editions, and shop the official Messi replica jerseys.",
    url: "https://us11fc.com/blog/argentina-2026-world-cup-kits",
    siteName: "MLS Fan Store",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina 2026 World Cup Kits: Home and Away",
    description:
      "Lionel Messi’s final World Cup kits revealed: shop the home, away, youth, and goalkeeper editions from Argentina.",
    images: [
      "https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@yourtwitterhandle",
  },
};

export default function NewsLayout({ children }) {
  return (
    <main className="w-full bg-white text-[#020617] min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">{children}</div>
    </main>
  );
}
