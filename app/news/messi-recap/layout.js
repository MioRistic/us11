export const metadata = {
  title: "Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand",
  description: "From early doubts to final heartbreak, Lionel Messi’s journey at the 2026 World Cup was filled with brilliance, controversy, and emotion.",
  openGraph: {
    title: "Lionel Messi’s 2026 World Cup Journey: Magic, Drama & Heartbreak",
    description: "Messi led Argentina to the final but fell short against Spain in a dramatic and controversial tournament.",
    url: "https://www.us11fc.com/news/messi-recap",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/bltefe763462ed181c7/crop/MM5DCMRYGA5DOMRQHJXG653FHIZDOOJ2GA======/1600.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "Lionel Messi World Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi’s Emotional 2026 World Cup Journey",
    description: "Magic, controversy, and heartbreak in Messi’s sixth World Cup.",
    images: [
      "https://assets.goal.com/images/v3/bltefe763462ed181c7/crop/MM5DCMRYGA5DOMRQHJXG653FHIZDOOJ2GA======/1600.jpg?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@us11",
  },
};

export default function MessiRecapLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>

      {/* Structured Data (Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand",
            "image": "https://assets.goal.com/images/v3/bltefe763462ed181c7/crop/MM5DCMRYGA5DOMRQHJXG653FHIZDOOJ2GA======/1600.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-07-21T12:00:00Z",
            "dateModified": "2026-07-21T12:00:00Z",
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
            "description": "From early doubts to final heartbreak, Lionel Messi’s journey at the 2026 World Cup was filled with brilliance, controversy, and emotion.",
            "keywords": ["Lionel Messi", "World Cup 2026", "Argentina", "Spain", "Messi 2026"]
          })
        }}
      />
    </div>
  );
}