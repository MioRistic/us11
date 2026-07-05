// app/news/canada-world-cup-exit-round-of-16/layout.js

export const metadata = {
  title: "Canada’s World Cup Dream Ends, But a New Era Has Already Begun",
  
  description:
    "Canada’s historic run at the 2026 World Cup ends in the Round of 16 against Morocco. Despite the defeat, the team leaves with pride and a clear path forward for 2030.",

  openGraph: {
    title: "Canada’s World Cup Dream Ends, But a New Era Has Already Begun",
    description:
      "Reaching the Round of 16 was a massive achievement for the co-hosts. The future looks brighter than ever.",
    url: "https://www.us11fc.com/news/canada-world-cup-exit-round-of-16",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2280851139/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DGNBXHI2TGMI=/GettyImages-2280851139.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 675,
        alt: "Canada World Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Canada’s World Cup Dream Ends, But a New Era Has Already Begun",
    description: "Historic campaign ends with pride and promise for the future",
    images: ["https://assets.goal.com/images/v3/getty-2280851139/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DGNBXHI2TGMI=/GettyImages-2280851139.jpg?auto=webp&format=pjpg&width=1920&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/canada-world-cup-exit-round-of-16"
  }
};

export default function CanadaWorldCup2026ExitLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Canada’s World Cup Dream Ends, But a New Era Has Already Begun",
            "image": "https://assets.goal.com/images/v3/getty-2280851139/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DGNBXHI2TGMI=/GettyImages-2280851139.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-07-05T02:42:00Z",
            "dateModified": "2026-07-05T10:00:00Z",
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
            "keywords": [
              "Canada World Cup",
              "Round of 16",
              "Morocco vs Canada",
              "Jesse Marsch",
              "Alphonso Davies",
              "2026 World Cup"
            ],
            "articleSection": "World Cup"
          })
        }}
      />
    </div>
  );
}