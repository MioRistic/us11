// ./app/news/griezmann-orlando-2026/layout.js
import React from 'react';

// 🟢 Server component – metadata može biti eksportovana
export const metadata = {
  title:
    "Antoine Griezmann to Orlando City: World Cup Winner Agrees to MLS Move – July 2026 Free Transfer Details",
  description:
    "Antoine Griezmann has verbally agreed to join Orlando City SC on a free transfer from Atlético Madrid starting July 2026. 2-year deal + option, No. 7 jersey, Orlando trip confirmed. Full analysis, implications for MLS East and why this changes everything.",
  keywords: [
    "Antoine Griezmann Orlando City",
    "Griezmann MLS 2026",
    "Griezmann to Orlando July 2026",
    "Atlético Madrid Griezmann transfer",
    "MLS Designated Player signing",
    "Orlando City biggest signing",
    "Griezmann MLS news March 2026",
    "US11 MLS analysis"
  ],
  openGraph: {
    title:
      "Griezmann to Orlando City: French Star Chooses MLS in 2026 Blockbuster",
    description:
      "Verbal agreement reached: Antoine Griezmann joins Orlando City from summer 2026 on free transfer. 2+1 years, No. 7 shirt, massive boost for Eastern Conference. Latest updates and impact.",
    url: "https://www.us11fc.com/news/griezmann-orlando-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt2ccb4598094c1547/2.jpg",
        width: 1200,
        height: 800,
        alt: "Antoine Griezmann – set to become Orlando City’s biggest signing in MLS history"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Griezmann to Orlando City: HERE WE GO! MLS Move Locked In for 2026",
    description:
      "World Cup winner Antoine Griezmann agrees to join Orlando City from July 2026 on free transfer from Atlético Madrid. Game-changer for MLS East. Full details by US11.",
    images: [
      "https://assets.goal.com/images/v3/blt2ccb4598094c1547/2.jpg"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/griezmann-orlando-2026"
  }
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Antoine Griezmann to Orlando City: World Cup Winner Agrees to MLS Move – July 2026 Free Transfer Details",
            "image": "https://assets.goal.com/images/v3/blt2ccb4598094c1547/2.jpg",
            "datePublished": "2026-05-02T12:00:00Z",
            "dateModified": "2026-05-02T12:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Mio Ristić"
            },
            "publisher": {
              "@type": "Organization",
              "name": "US11",
              "logo": {
                "@type": "ImageObject",
                "url": "https://us11fc.com/logo.png"
              }
            }
          })
        }}
      />
    </div>
  );
}