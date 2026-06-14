// app/news/usmnt-vs-australia-2026-tickets/layout.js

export const metadata = {
  title: "USMNT vs Australia 2026 Tickets: How to Buy + Match Preview",
  description:
    "Everything you need to know about the USMNT vs Australia match on June 19, 2026 at Lumen Field in Seattle. Ticket prices, how to buy, stadium info, and tactical preview.",

  openGraph: {
    title: "USMNT vs Australia 2026: Tickets & Match Preview",
    description:
      "USMNT vs Australia at Lumen Field Seattle. Get the latest ticket prices, where to buy, and full match preview for the key Group D clash.",
    url: "https://www.us11fc.com/blog/usmnt-vs-australia-2026-tickets",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/pBqFXjG0/Untitled-design-7.png",
        width: 1200,
        height: 630,
        alt: "USMNT vs Australia 2026 World Cup",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT vs Australia 2026 Tickets & Preview",
    description:
      "USMNT vs Australia at Lumen Field. Ticket info, prices, and full tactical preview for the crucial Group D match.",
    images: ["https://i.ibb.co/pBqFXjG0/Untitled-design-7.png"],
    creator: "@mioristic",
  },

  alternates: {
    canonical: "https://www.us11fc.com/blog/usmnt-vs-australia-2026-tickets",
  },
};

export default function USMNTvsAustraliaLayout({ children }) {
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
            "@type": "NewsArticle",
            "headline": "USMNT vs Australia 2026 Tickets: How to Buy + Match Preview",
            "image": "https://i.ibb.co/pBqFXjG0/Untitled-design-7.png",
            "datePublished": "2026-06-14T08:00:00Z",
            "dateModified": "2026-06-14T20:00:00Z",
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
              "USMNT vs Australia",
              "USMNT vs Australia tickets",
              "World Cup 2026 Seattle",
              "Lumen Field",
              "USMNT tickets 2026",
              "Group D 2026"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}