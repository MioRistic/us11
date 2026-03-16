// ./app/news/mls-matchday-4/layout.js
import React from 'react';

// 🟢 Server component – metadata može biti eksportovana
export const metadata = {
  title:
    "MLS Matchday 4 2026: Vancouver's Record-Setting Rout, Revs Drop Historic 6, Late Drama Everywhere – Full Results & Analysis",
  description:
    "MLS Matchday 4 2026 delivered chaos: Vancouver Whitecaps 6-0 Minnesota for best-ever start (+13 GD), New England Revolution 6-1 FC Cincinnati tying club record, Petar Musa hat trick, Hany Mukhtar's 25,000th MLS goal. Full results, key moments and analysis.",
  keywords: [
    "MLS Matchday 4 2026",
    "Vancouver Whitecaps 6-0 Minnesota",
    "New England Revolution 6-1 FC Cincinnati",
    "Petar Musa hat trick FC Dallas",
    "Hany Mukhtar 25000th MLS goal",
    "MLS results March 2026",
    "MLS standings 2026",
    "US11 MLS analysis"
  ],
  openGraph: {
    title:
      "MLS Matchday 4 2026: Vancouver's Historic Start, Revs' 6-Goal Rout & Late Drama",
    description:
      "Vancouver sets MLS record with 4-0-0 +13 GD, New England ties club record in 6-1 win, Musa rescues Dallas, Mukhtar makes history. Full MLS Matchday 4 breakdown.",
    url: "https://www.us11fc.com/news/mls-matchday-4-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt8209e4c975d96a14/GettyImages-2250417409.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
        alt: "Vancouver Whitecaps celebrate 6-0 win vs Minnesota United MLS 2026 Matchday 4"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 4 2026: Vancouver 6-0, Revs 6-1, Historic Moments",
    description:
      "Vancouver's greatest start ever, New England's record-tying rout, Musa's heroics and more from MLS Matchday 4 2026. Full analysis by US11.",
    images: [
      "https://assets.goal.com/images/v3/blt8209e4c975d96a14/GettyImages-2250417409.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-matchday-4-2026"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-[#020617]">{children}</div>;
}