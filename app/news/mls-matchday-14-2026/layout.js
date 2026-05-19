export const metadata = {
  title:
    "MLS Matchday 14 Recap: Chaos Before the Curtain Falls – Sarver’s Legend, Messi’s Nu Breakthrough & More",

  description:
    "From Sam Sarver’s unforgettable celebration to Messi finally winning at Nu Stadium, FC Cincinnati’s 98th-minute madness and a coaching change in Columbus – Matchday 14 delivered pure MLS chaos before the World Cup break.",

  openGraph: {
    title:
      "MLS Matchday 14: Chaos Before the World Cup Break",

    description:
      "Sam Sarver becomes folklore, Messi conquers Nu Stadium, Cincinnati produces late drama and Columbus fires their coach. Full recap from Matchday 14.",

    url:
      "https://www.us11fc.com/news/mls-matchday-14-2026",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/blt98069fadcc2b1e00/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-17T192244.735.png?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt:
          "MLS Matchday 14 Recap – Messi, Sarver and late drama",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MLS Matchday 14: Chaos Before the Curtain Falls",

    description:
      "Sam Sarver legend status, Messi’s first Nu Stadium win, 3-3 madness in San Diego and more from a wild Matchday 14.",

    images: [
      "https://assets.goal.com/images/v3/blt98069fadcc2b1e00/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-17T192244.735.png?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/mls-matchday-14-2026",
  },
};

export default function MLSMatchday14RecapLayout({ children }) {
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
              "MLS Matchday 14 Recap: Chaos Before the Curtain Falls – Sarver’s Legend, Messi’s Nu Breakthrough & More",

            image:
              "https://assets.goal.com/images/v3/blt98069fadcc2b1e00/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-17T192244.735.png?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-05-18T08:00:00Z",
            dateModified: "2026-05-18T12:00:00Z",

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
              "MLS Matchday 14",
              "Sam Sarver",
              "Lionel Messi",
              "Inter Miami",
              "Nu Stadium",
              "FC Cincinnati",
              "FC Dallas",
              "Columbus Crew",
              "Henrik Rydström",
              "Hany Mukhtar",
              "Gabriel Pec",
              "Major League Soccer",
              "MLS 2026",
              "World Cup break"
            ],

            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}