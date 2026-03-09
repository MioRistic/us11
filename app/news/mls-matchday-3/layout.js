// ./app/news/mls-matchday-3/layout.js
import React from 'react';

// 🟢 Server component – metadata može biti eksportovana
export const metadata = {
  title:
    "MLS Matchday 3 2026: NYCFC’s Bronx Demolition, Messi Magic in Baltimore, Toronto’s Late Winner – Full Results & Analysis",
  description:
    "MLS Matchday 3 2026 delivered fireworks: NYCFC crushed Orlando 5-0, Inter Miami edged DC United behind Lionel Messi, and Toronto FC grabbed their first win. Full results, highlights and analysis.",
  keywords: [
    "MLS Matchday 3 2026",
    "NYCFC vs Orlando 5-0",
    "Lionel Messi Inter Miami 2026",
    "Toronto FC first win 2026",
    "MLS results March 2026",
    "MLS standings 2026",
    "US11 MLS analysis"
  ],
  openGraph: {
    title:
      "MLS Matchday 3 2026: NYCFC’s Bronx Demolition, Messi Magic & Toronto’s Late Winner",
    description:
      "NYCFC destroyed Orlando 5-0, Messi led Inter Miami to victory, and Toronto grabbed their first win. Full MLS Matchday 3 results and analysis.",
    url: "https://www.us11fc.com/news/mls-matchday-3-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2224902244/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGY3A====/GettyImages-2224902244.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
        alt: "NYCFC 5-0 Orlando City MLS 2026 highlights"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 3 2026: NYCFC 5-0 Orlando, Messi Leads Inter Miami",
    description:
      "Full MLS Matchday 3 breakdown: NYCFC demolition, Messi magic, Toronto's late winner and Western Conference highlights.",
    images: [
      "https://assets.goal.com/images/v3/getty-2224902244/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGY3A====/GettyImages-2224902244.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-matchday-3-2026"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-[#020617]">{children}</div>;
}