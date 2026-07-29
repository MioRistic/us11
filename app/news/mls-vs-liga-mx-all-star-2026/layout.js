// app/news/mls-vs-liga-mx-all-star-2026/layout.js

export const metadata = {
  title: "MLS vs. Liga MX: The Rivalry That Never Sleeps Arrives in Charlotte",
  description:
    "The fifth MLS All-Star Game between MLS and Liga MX takes place in Charlotte. Full preview, series history, key players, and what the rivalry means after the 2026 World Cup.",
  openGraph: {
    title: "MLS vs. Liga MX All-Star Game 2026: The Rivalry Continues in Charlotte",
    description:
      "Son Heung-min, Thomas Müller and the best of MLS face Liga MX in Charlotte. Full preview of the 2026 All-Star Game.",
    url: "https://www.us11fc.com/news/mls-vs-liga-mx-all-star-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2230677284/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2230677284.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "MLS vs Liga MX All-Star Game 2026 Charlotte",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS vs. Liga MX All-Star Game 2026 in Charlotte",
    description: "The rivalry continues as MLS and Liga MX meet in the All-Star Game.",
    images: [
      "https://assets.goal.com/images/v3/getty-2230677284/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2230677284.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-vs-liga-mx-all-star-2026",
  },
};

export default function MLSvsLigaMXLayout({ children }) {
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
            headline: "MLS vs. Liga MX: The Rivalry That Never Sleeps Arrives in Charlotte",
            image:
              "https://assets.goal.com/images/v3/getty-2230677284/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2230677284.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-07-29T20:00:00Z",
            dateModified: "2026-07-29T22:00:00Z",
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
              "MLS vs Liga MX",
              "MLS All-Star Game 2026",
              "Liga MX All-Stars",
              "Son Heung-min",
              "Thomas Müller",
              "Charlotte",
              "Bank of America Stadium",
              "MLS All-Star",
              "Leagues Cup",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}