export const metadata = {
  title: "Kovac Promised Albert Minutes. The City Interest Is Still a Report.",
  description:
    "Niko Kovac said Mathis Albert will get more minutes at Dortmund. Goal reported a rejected summer approach from Manchester City. Only one of those is confirmed.",
  openGraph: {
    title: "Kovac Promised Albert Minutes. The City Interest Is Still a Report.",
    description:
      "The coach spoke on the record. The bid has not been acknowledged by either club.",
    url: "https://www.us11fc.com/news/albert-kovac-city-minutes",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/bltddddd4716914a103/Albert.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Mathis Albert",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kovac Promised Albert Minutes. City Is Still a Report.",
    description:
      "More minutes at Dortmund are on the record. The summer approach is not.",
    images: [
      "https://assets.goal.com/images/v3/bltddddd4716914a103/Albert.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/albert-kovac-city-minutes",
  },
};

export default function AlbertKovacCityLayout({ children }) {
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
            headline:
              "Kovac Promised Albert Minutes. The City Interest Is Still a Report.",
            image:
              "https://assets.goal.com/images/v3/bltddddd4716914a103/Albert.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-13T16:34:00Z",
            dateModified: "2026-10-13T16:34:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristic",
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
              "Mathis Albert",
              "Niko Kovac",
              "Borussia Dortmund",
              "Manchester City",
              "USMNT",
            ],
            articleSection: "USMNT",
            description:
              "Niko Kovac promised Mathis Albert more minutes at Dortmund. A reported Manchester City approach remains unconfirmed.",
          }),
        }}
      />
    </div>
  );
}
