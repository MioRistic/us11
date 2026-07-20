// app/news/spain-world-cup-victory/layout.js

export const metadata = {
  title: "Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina",
  description: "Spain defeat Argentina 1-0 in extra time to win the 2026 FIFA World Cup, with Ferran Torres scoring the decisive goal.",
  openGraph: {
    title: "Spain Win the 2026 FIFA World Cup",
    description: "Ferran Torres scores the winner as Spain defeat Argentina in a dramatic final.",
    url: "https://www.us11fc.com/news/spain-world-cup-victory",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/FqWwj6Lv/spain-1400.webp",
        width: 1200,
        height: 675,
        alt: "Spain World Cup Victory 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spain Win the 2026 FIFA World Cup!",
    description: "Ferran Torres fires Spain to glory against Argentina.",
    images: [
      "https://i.ibb.co/FqWwj6Lv/spain-1400.webp"
    ],
    creator: "@us11",
  },
};

export default function SpainWorldCupVictoryLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina",
            "image": "https://i.ibb.co/FqWwj6Lv/spain-1400.webp",
            "datePublished": "2026-07-19T20:00:00Z",
            "dateModified": "2026-07-19T22:30:00Z",
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
            },
            "description": "Spain defeat Argentina 1-0 in extra time to win the 2026 FIFA World Cup.",
            "keywords": ["Spain", "Argentina", "World Cup 2026", "Ferran Torres", "Final"]
          })
        }}
      />
    </div>
  );
}