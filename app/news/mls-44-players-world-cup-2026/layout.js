export const metadata = {
  title:
    "MLS Sets New Record with 44 Players on 2026 World Cup Rosters",

  description:
    "A record 44 MLS players from 21 clubs and 17 nations have been named to 2026 World Cup squads, highlighting the league’s rapid global growth and international influence.",

  openGraph: {
    title:
      "MLS Sets New Record with 44 Players on 2026 World Cup Rosters",

    description:
      "MLS reaches historic milestone with 44 players selected for the 2026 FIFA World Cup across 21 clubs and 17 nations.",

    url:
      "https://www.us11fc.com/news/mls-44-players-world-cup-2026",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/bltad06137e831f623c/Lionel%20Messi%20Argentina.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt:
          "MLS players set record for 2026 World Cup call-ups",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MLS Sets Record 44 Players at 2026 World Cup",

    description:
      "MLS reaches historic milestone with 44 players across 17 nations heading to the 2026 World Cup.",

    images: [
      "https://assets.goal.com/images/v3/bltad06137e831f623c/Lionel%20Messi%20Argentina.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/mls-44-players-world-cup-2026",
  },
};

export default function MLSWorldCupRecordLayout({ children }) {
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
              "MLS Sets New Record with 44 Players on 2026 World Cup Rosters",

            image:
              "https://assets.goal.com/images/v3/bltad06137e831f623c/Lionel%20Messi%20Argentina.jpg?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-06-02T08:00:00Z",
            dateModified: "2026-06-02T12:00:00Z",

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
              "MLS",
              "World Cup 2026",
              "FIFA World Cup",
              "MLS players",
              "Lionel Messi",
              "Son Heung-min",
              "LAFC",
              "Inter Miami",
              "LA Galaxy",
              "Major League Soccer",
              "Canada Mexico USA",
              "soccer",
              "international football",
              "MLS 2026 season"
            ],

            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}