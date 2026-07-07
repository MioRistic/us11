// app/news/etihad-park-construction-update/layout.js

export const metadata = {
  title: "Etihad Park: How New York City FC’s Long-Awaited Soccer-Specific Stadium Is Finally Taking Shape",
  
  description:
    "Construction of Etihad Park in Willets Point, Queens is advancing rapidly. Here’s the latest update on New York City FC’s future home as of July 2026.",

  openGraph: {
    title: "Etihad Park: NYCFC’s New Stadium Is Taking Shape",
    description:
      "From groundbreaking to topping out — how New York City FC’s long-awaited soccer-specific stadium is becoming reality.",
    url: "https://www.us11fc.com/news/etihad-park-construction-update",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/Ld5X8fm7/im-52639548.avif",
        width: 1200,
        height: 675,
        alt: "Etihad Park Construction New York City FC",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Etihad Park Is Rising — NYCFC’s Future Home Takes Shape",
    description: "Construction progress on New York City’s first soccer-specific stadium",
    images: ["https://i.ibb.co/Ld5X8fm7/im-52639548.avif"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/etihad-park-construction-update"
  }
};

export default function EtihadParkArticleLayout({ children }) {
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
            "headline": "Etihad Park: How New York City FC’s Long-Awaited Soccer-Specific Stadium Is Finally Taking Shape",
            "image": "https://i.ibb.co/Ld5X8fm7/im-52639548.avif",
            "datePublished": "2026-07-07T10:00:00Z",
            "dateModified": "2026-07-07T14:00:00Z",
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
              "Etihad Park",
              "NYCFC Stadium",
              "Willets Point",
              "New York City FC",
              "Queens Stadium",
              "2027 MLS Season"
            ],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}