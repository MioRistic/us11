// app/blog/argentina-navy-blue-kit/layout.js

export const metadata = {
  title: "Why Argentina Are Wearing Their Navy Blue Kit Against England in the 2026 World Cup Semi-Final",
  description: "Argentina will wear their navy blue away kit against England in the 2026 World Cup semi-final. Here's the historic reason behind the choice.",
  openGraph: {
    title: "Why Argentina Are Wearing Navy Blue vs England in 2026 WC Semi-Final",
    description: "The 'Maradona effect' and historic connection behind Argentina's kit choice.",
    url: "https://www.us11fc.com/blog/argentina-navy-blue-kit",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/Wbxt5X1/3-EWNH7-J-1-1024x536.jpg",
        width: 1200,
        height: 675,
        alt: "Argentina Navy Blue Kit vs England 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina Wearing Navy Blue vs England – The Maradona Effect",
    description: "Historic kit choice for the 2026 World Cup semi-final.",
    images: [
      "https://i.ibb.co/Wbxt5X1/3-EWNH7-J-1-1024x536.jpg"
    ],
    creator: "@us11",
  },
};

export default function ArgentinaNavyBlueKitLayout({ children }) {
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
            "headline": "Why Argentina Are Wearing Their Navy Blue Kit Against England in the 2026 World Cup Semi-Final",
            "image": "https://i.ibb.co/Wbxt5X1/3-EWNH7-J-1-1024x536.jpg",
            "datePublished": "2026-07-15T18:00:00Z",
            "dateModified": "2026-07-15T20:30:00Z",
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
            "description": "Argentina will wear their navy blue away kit against England in the 2026 World Cup semi-final for historic reasons.",
            "keywords": ["Argentina", "England", "World Cup 2026", "Navy Blue Kit", "Maradona"]
          })
        }}
      />
    </div>
  );
}