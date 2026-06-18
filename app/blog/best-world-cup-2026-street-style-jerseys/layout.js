// app/blog/best-world-cup-2026-street-style-jerseys/layout.js

export const metadata = {
  title: "Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying",
  description: "Which 2026 World Cup jerseys look the best on the street? From Germany’s clean classic to Colombia’s vibrant yellow — here’s our definitive ranking of the most wearable kits.",
  openGraph: {
    title: "Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying",
    description: "Our ranking of the top 10 World Cup 2026 kits that actually look good on the street — not just on the pitch.",
    url: "https://www.us11fc.com/blog/best-world-cup-2026-street-style-jerseys",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blteb5ae4bd28752ec3/adidas%20FIFA%20World%20Cup%202026%20kit%20-%20Germany.png?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "Best World Cup 2026 Jerseys for Street Style",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best World Cup 2026 Jerseys for Street Style",
    description: "Ranking the top 10 most wearable kits from the 2026 World Cup — Germany, New Zealand, Japan and more.",
    images: ["https://assets.goal.com/images/v3/blteb5ae4bd28752ec3/adidas%20FIFA%20World%20Cup%202026%20kit%20-%20Germany.png?auto=webp&format=pjpg&width=1920&quality=60"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/blog/best-world-cup-2026-street-style-jerseys"
  }
};

export default function BestWorldCup2026JerseysLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying",
            "image": "https://assets.goal.com/images/v3/blteb5ae4bd28752ec3/adidas%20FIFA%20World%20Cup%202026%20kit%20-%20Germany.png?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-06-16T10:00:00Z",
            "dateModified": "2026-06-16T12:00:00Z",
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
            "keywords": ["World Cup 2026", "Best Jerseys", "Street Style", "Germany Kit", "New Zealand Kit", "Football Fashion", "2026 World Cup Kits"],
            "articleSection": "World Cup",
            "description": "Ranking the top 10 most wearable World Cup 2026 jerseys perfect for everyday street style."
          })
        }}
      />
    </div>
  );
}