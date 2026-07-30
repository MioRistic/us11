export const metadata = {
  title: "Inter Miami Cénit 2026 Third Jersey: Full Guide, Prices & Where to Buy",
  description:
    "Inter Miami’s new white Cénit 2026 third jersey is now on sale. Full prices for Messi, Replica, Authentic and Youth — plus where to buy on MLS Store and Fanatics.",
  openGraph: {
    title: "Inter Miami Cénit 2026 Third Jersey: Full Guide, Prices & Where to Buy",
    description:
      "Clean white third kit from Inter Miami is live. Messi Replica $130, plain Replica $100, Authentic $205.",
    url: "https://www.us11fc.com/blog/inter-miami-cenit-2026-third-jersey",
    siteName: "US11",
    images: [
      {
        url: "https://www.mlsstore.com/content/ws/all/a92d7370-fdf2-438d-b9b8-2e35981037df__2055X750.jpg",
        width: 2055,
        height: 750,
        alt: "Inter Miami CF 2026 Cénit Third Jersey",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inter Miami Cénit 2026 Third Jersey: Prices & Where to Buy",
    description:
      "New white third kit is live — Messi, Replica, Authentic and Youth with full prices.",
    images: [
      "https://www.mlsstore.com/content/ws/all/a92d7370-fdf2-438d-b9b8-2e35981037df__2055X750.jpg",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/blog/inter-miami-cenit-2026-third-jersey",
  },
};

export default function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen w-full">
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Inter Miami Cénit 2026 Third Jersey: Full Guide, Prices & Where to Buy",
            image:
              "https://www.mlsstore.com/content/ws/all/a92d7370-fdf2-438d-b9b8-2e35981037df__2055X750.jpg",
            datePublished: "2026-07-30T12:00:00Z",
            dateModified: "2026-07-30T22:00:00Z",
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
              "Inter Miami Cénit jersey",
              "Inter Miami 2026 third kit",
              "Messi Inter Miami jersey",
              "Inter Miami white jersey",
              "MLS Store",
              "Fanatics",
            ],
            articleSection: "Shopping",
          }),
        }}
      />
    </div>
  );
}