// app/news/mls-matchday-15-recap/layout.js

export const metadata = {
  title:
    "MLS Matchday 15 Recap: Nashville Tightens Grip on Top Spot, Miami-Philadelphia Chaos, Zaha’s Farewell",

  description:
    "MLS Matchday 15 delivered drama before the World Cup break as Nashville SC strengthened its Supporters’ Shield lead, Inter Miami and Philadelphia combined for 10 goals, and Wilfried Zaha made his final Charlotte FC appearance.",

  openGraph: {
    title:
      "MLS Matchday 15 Recap: Nashville on Top, Miami Chaos, Zaha Farewell",

    description:
      "Goals, chaos, hat-tricks and emotional farewells defined MLS Matchday 15 before the league paused for the 2026 FIFA World Cup.",

    url: "https://www.us11fc.com/news/mls-matchday-15-recap",

    siteName: "US11",

    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2202723392/crop/MM5DIOBZGI5DENZVGI5G433XMU5DAORSGI======/GettyImages-2202723392.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "MLS Matchday 15 recap",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MLS Matchday 15 Recap: Nashville Leads, Miami Chaos, Zaha Farewell",

    description:
      "MLS delivered goals, drama and emotional moments before the 2026 World Cup break.",

    images: [
      "https://assets.goal.com/images/v3/getty-2202723392/crop/MM5DIOBZGI5DENZVGI5G433XMU5DAORSGI======/GettyImages-2202723392.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },
};

export default function MLSMatchday15RecapLayout({ children }) {
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
              "MLS Matchday 15 Recap: Nashville Tightens Grip on Top Spot, Miami-Philadelphia Chaos, Zaha’s Farewell",

            image:
              "https://assets.goal.com/images/v3/getty-2202723392/crop/MM5DIOBZGI5DENZVGI5G433XMU5DAORSGI======/GettyImages-2202723392.jpg?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-05-25T12:00:00Z",

            dateModified: "2026-05-25T12:00:00Z",

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

            description:
              "MLS Matchday 15 wrapped up the first half of the 2026 season with Nashville SC strengthening its grip on first place, Inter Miami and Philadelphia Union combining for 10 goals, and Wilfried Zaha making his final Charlotte FC appearance.",
          }),
        }}
      />
    </div>
  );
}