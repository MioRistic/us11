// app/news/son-heung-min-mls-all-star-mvp/layout.js

export const metadata = {
  title: "Son Heung-min Steals the Spotlight as MLS All-Stars Edge Liga MX 4-3 in Charlotte",
  description:
    "Son Heung-min scored twice in three minutes, earned MVP honors, and led the MLS All-Stars to a 4-3 win over Liga MX in Charlotte. Full recap of the 2026 All-Star Game.",

  openGraph: {
    title: "Son Heung-min Steals the Spotlight as MLS All-Stars Edge Liga MX 4-3",
    description:
      "LAFC star Son Heung-min delivered a brace and MVP performance as MLS All-Stars beat Liga MX 4-3 in Charlotte.",
    url: "https://www.us11fc.com/news/son-heung-min-mls-all-star-mvp",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2288223409/crop/MM5DIMZSGQ5DENBTGI5G433XMU5DAORSHE======/GettyImages-2288223409.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Son Heung-min MLS All-Star Game 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Son Heung-min Steals the Show at MLS All-Star Game",
    description: "Brace + MVP as MLS All-Stars beat Liga MX 4-3 in Charlotte",
    images: [
      "https://assets.goal.com/images/v3/getty-2288223409/crop/MM5DIMZSGQ5DENBTGI5G433XMU5DAORSHE======/GettyImages-2288223409.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/son-heung-min-mls-all-star-mvp",
  },
};

export default function SonMLSAllStarLayout({ children }) {
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
              "Son Heung-min Steals the Spotlight as MLS All-Stars Edge Liga MX 4-3 in Charlotte",
            image:
              "https://assets.goal.com/images/v3/getty-2288223409/crop/MM5DIMZSGQ5DENBTGI5G433XMU5DAORSHE======/GettyImages-2288223409.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-07-30T14:00:00Z",
            dateModified: "2026-07-30T16:00:00Z",
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
              "Son Heung-min",
              "MLS All-Star Game 2026",
              "Liga MX",
              "LAFC",
              "Charlotte",
              "Bank of America Stadium",
              "MLS vs Liga MX",
              "All-Star MVP",
              "Carles Gil",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}