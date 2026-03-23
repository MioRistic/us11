// ./app/news/mls-matchday-5/layout.js
import React from 'react';

// 🟢 Server component – metadata može biti eksportovana
export const metadata = {
  title:
    "MLS Matchday 5 2026: Nashville 5-0 Rout, Charlotte 6-1 Record Win, LAFC 450-Min Shutout Streak – Full Results & Analysis",
  description:
    "MLS Matchday 5 2026 chaos: Nashville SC 5-0 Orlando (Surridge hat-trick), Charlotte FC 6-1 NY Red Bulls (club records), LAFC sets MLS record with 450 minutes no goals conceded. Full recap, key moments, standings impact and analysis.",
  keywords: [
    "MLS Matchday 5 2026",
    "Nashville SC 5-0 Orlando City",
    "Charlotte FC 6-1 New York Red Bulls",
    "LAFC shutout record 450 minutes",
    "Sam Surridge hat-trick MLS",
    "MLS results March 2026",
    "MLS standings 2026",
    "US11 MLS analysis"
  ],
  openGraph: {
    title:
      "MLS Matchday 5 2026: Nashville Explodes 5-0, Charlotte Shatters Records 6-1, LAFC Historic Defense",
    description:
      "Nashville tops East after 5-0 demolition, Charlotte sets club marks in 6-1 thrashing, LAFC extends shutout streak to 450 min. Full MLS Matchday 5 breakdown by US11.",
    url: "https://www.us11fc.com/news/mls-matchday-5-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 630,
        alt: "Nashville SC celebrates 5-0 win vs Orlando City MLS Matchday 5 2026"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 5 2026: Nashville 5-0, Charlotte 6-1, LAFC Record Shutouts",
    description:
      "Record attacks from Nashville & Charlotte, historic defense from LAFC highlight MLS Matchday 5. Full results and analysis by US11.",
    images: [
      "https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-matchday-5-2026"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-[#020617]">{children}</div>;
}