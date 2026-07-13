export const metadata = {
  title: "Messi's Argentina Advance to World Cup Semifinals After Extra-Time Win Over Switzerland",
  description: "Argentina defeat Switzerland 3-1 in extra time to reach the 2026 World Cup semifinals. Messi breaks another record as La Albiceleste set up a clash with England.",
  openGraph: {
    title: "Messi's Argentina Advance to World Cup Semifinals After Extra-Time Win Over Switzerland",
    description: "Argentina beat Switzerland 3-1 in extra time. Messi delivers record assist as defending champions march on.",
    url: "https://www.us11fc.com/blog/messi-argentina-semifinal",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2285704047/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORTGA======/GettyImages-2285704047.jpg?auto=webp&format=pjpg&width=1200&quality=60",
        width: 1200,
        height: 675,
        alt: "Lionel Messi Argentina World Cup 2026 Semifinals",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina Reach World Cup Semifinals | Messi Magic Continues",
    description: "Argentina defeat Switzerland 3-1 in extra time to advance to the semifinals.",
    images: [
      "https://assets.goal.com/images/v3/getty-2285704047/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORTGA======/GettyImages-2285704047.jpg"
    ],
    creator: "@us11",
  },
};

export default function MessiArgentinaSemifinalLayout({ children }) {
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
            "headline": "Messi's Argentina Advance to World Cup Semifinals After Extra-Time Win Over Switzerland",
            "image": "https://assets.goal.com/images/v3/getty-2285704047/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORTGA======/GettyImages-2285704047.jpg",
            "datePublished": "2026-07-12T20:00:00Z",
            "dateModified": "2026-07-12T22:30:00Z",
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
            "description": "Argentina defeat Switzerland 3-1 in extra time to reach the 2026 World Cup semifinals. Messi delivers record assist.",
            "keywords": ["Argentina", "Messi", "World Cup 2026", "Semifinals", "Switzerland", "La Albiceleste"]
          })
        }}
      />
    </div>
  );
}