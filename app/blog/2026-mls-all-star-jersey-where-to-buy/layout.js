// app/blog/2026-mls-all-star-jersey-where-to-buy/layout.js

export const metadata = {
  title: "2026 MLS All-Star Jersey: What’s Selling and Where to Buy",
  description:
    "The 2026 MLS All-Star blue adidas jersey is the clear best-seller after Son Heung-min’s MVP night in Charlotte. Replica vs Authentic prices and where to buy at MLS Store and Fanatics.",

  openGraph: {
    title: "2026 MLS All-Star Jersey: What’s Selling and Where to Buy",
    description:
      "Blue Replica jersey leads sales after the All-Star Game in Charlotte. Full guide to the 2026 MLS All-Star collection and where to buy.",
    url: "https://www.us11fc.com/blog/2026-mls-all-star-jersey-where-to-buy",
    siteName: "US11",
    images: [
      {
        url: "https://www.mlsstore.com/content/ws/all/e4e8612e-2d5c-44f1-b65b-8d94751127eb__480X639.jpg?w=480",
        width: 480,
        height: 639,
        alt: "2026 MLS All-Star Game adidas Blue Jersey",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "2026 MLS All-Star Jersey: What’s Selling and Where to Buy",
    description: "Blue Replica leads sales — full guide and where to shop",
    images: [
      "https://www.mlsstore.com/content/ws/all/e4e8612e-2d5c-44f1-b65b-8d94751127eb__480X639.jpg?w=480",
    ],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/blog/2026-mls-all-star-jersey-where-to-buy",
  },
};

export default function MLSAllStarJerseyLayout({ children }) {
  return (
    <div className="bg-white min-h-screen w-full">
      {/* bez max-w-4xl ovde — page sama kontroliše širinu */}
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "2026 MLS All-Star Jersey: What’s Selling and Where to Buy",
            image:
              "https://www.mlsstore.com/content/ws/all/e4e8612e-2d5c-44f1-b65b-8d94751127eb__480X639.jpg?w=480",
            datePublished: "2026-07-30T15:00:00Z",
            dateModified: "2026-07-30T15:00:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristić",
            },
            publisher: {
              "@type": "Organization",
              name: "US11",
              logo: {
                "@type": "ImageObject",
                url: "https://us11fc.com/logo.png",
              },
            },
            keywords: [
              "2026 MLS All-Star Jersey",
              "MLS All-Star Game",
              "adidas All-Star kit",
              "MLS Store",
              "Replica Jersey",
              "Authentic Jersey",
              "Charlotte",
              "Son Heung-min",
              "Where to buy",
            ],
            articleSection: "Shopping",
          }),
        }}
      />
    </div>
  );
}