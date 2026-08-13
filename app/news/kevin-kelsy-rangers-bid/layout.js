// app/news/kevin-kelsy-rangers-bid/layout.js

export const metadata = {
  title: "Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy",
  description:
    "Rangers have submitted a bid in the region of $10 million for Portland Timbers forward Kevin Kelsy. The Timbers are not looking to sell and the Venezuela international is not pushing to leave.",
  openGraph: {
    title: "Rangers Submit ~$10m Bid for Kevin Kelsy",
    description:
      "Portland Timbers striker Kevin Kelsy is the subject of a ~$10m bid from Rangers. Timbers not looking to sell.",
    url: "https://www.us11fc.com/news/kevin-kelsy-rangers-bid",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/QvHNgtP7/images-3.jpg",
        width: 1200,
        height: 675,
        alt: "Kevin Kelsy Portland Timbers Rangers bid",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangers Submit ~$10m Bid for Kevin Kelsy",
    description: "Portland Timbers striker tracked by Rangers with a formal bid submitted.",
    images: [
      "https://i.ibb.co/QvHNgtP7/images-3.jpg",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/kevin-kelsy-rangers-bid",
  },
};

export default function Layout({ children }) {
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
            headline:
              "Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy",
            image: "https://i.ibb.co/QvHNgtP7/images-3.jpg",
            datePublished: "2026-08-13T22:00:00Z",
            dateModified: "2026-08-13T22:00:00Z",
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
              "Kevin Kelsy",
              "Rangers",
              "Portland Timbers",
              "MLS transfer",
              "Scottish Premiership",
              "Venezuela",
              "MLS",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}