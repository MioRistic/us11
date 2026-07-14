// app/blog/top-10-mls-transfers-2026/layout.js

export const metadata = {
  title: "Top 10 Most Interesting Summer Transfers in MLS (as of July 13, 2026)",
  description: "From Griezmann and Lewandowski to exciting young talents — here are the biggest and most interesting transfers in MLS this summer.",
  openGraph: {
    title: "Top 10 Most Interesting Summer Transfers in MLS 2026",
    description: "Griezmann, Lewandowski, Saint-Maximin and more — the biggest moves of the MLS summer window so far.",
    url: "https://www.us11fc.com/blog/top-10-mls-transfers-2026",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/0p04zs5V/dc2772d1-orlando-city-antoine-griezmann.avif",
        width: 1200,
        height: 675,
        alt: "MLS Summer Transfers 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 MLS Summer Transfers 2026",
    description: "Griezmann, Lewandowski and more — the most exciting moves so far.",
    images: [
      "https://i.ibb.co/0p04zs5V/dc2772d1-orlando-city-antoine-griezmann.avif"
    ],
    creator: "@us11",
  },
};

export default function Top10MLSTransfersLayout({ children }) {
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
            "headline": "Top 10 Most Interesting Summer Transfers in MLS (as of July 13, 2026)",
            "image": "https://i.ibb.co/0p04zs5V/dc2772d1-orlando-city-antoine-griezmann.avif",
            "datePublished": "2026-07-13T18:00:00Z",
            "dateModified": "2026-07-13T20:30:00Z",
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
            "description": "Ranking of the most exciting summer transfers in MLS 2026 including Griezmann, Lewandowski and more.",
            "keywords": ["MLS Transfers", "Griezmann", "Lewandowski", "Summer Window", "Orlando City", "Chicago Fire"]
          })
        }}
      />
    </div>
  );
}