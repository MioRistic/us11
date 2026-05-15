// app/news/mls-matchday-13-recap-2026/layout.js

export const metadata = {
  title:
    "Matchday 13 Recap: 58 Goals, Messi Magic and a Record Night as the World Cup Break Looms",

  description:
    "MLS Matchday 13 delivered a record-breaking 58 goals across 14 matches as Lionel Messi starred for Inter Miami and Julian Hall continued his rise with another historic performance.",

  openGraph: {
    title:
      "MLS Matchday 13 Sets Goal Record Ahead of World Cup Break",

    description:
      "Lionel Messi dazzled, Julian Hall scored again, and MLS produced its highest-scoring matchday ever with 58 goals in one unforgettable night.",

    url:
      "https://www.us11fc.com/news/mls-matchday-13-2026",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/getty-2276119551/crop/MM5DCNZXGY5DSOJZHJXG653FHIYTGNZWHIZDQMQ=/GettyImages-2276119551.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1920,
        height: 1080,
        alt:
          "Lionel Messi during MLS Matchday 13 between Inter Miami and FC Cincinnati",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MLS Matchday 13: Messi Shines in Record-Breaking Night",

    description:
      "MLS produced 58 goals in one matchday as Lionel Messi starred for Inter Miami and Julian Hall continued his breakout season.",

    images: [
      "https://assets.goal.com/images/v3/getty-2276119551/crop/MM5DCNZXGY5DSOJZHJXG653FHIYTGNZWHIZDQMQ=/GettyImages-2276119551.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/mls-matchday-13-2026",
  },
};

export default function MLSMatchday13RecapLayout({ children }) {
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
              "Matchday 13 Recap: 58 Goals, Messi Magic and a Record Night as the World Cup Break Looms",

            image:
              "https://assets.goal.com/images/v3/getty-2276119551/crop/MM5DCNZXGY5DSOJZHJXG653FHIYTGNZWHIZDQMQ=/GettyImages-2276119551.jpg?auto=webp&format=pjpg&width=3840&quality=60",

            datePublished: "2026-05-14T09:00:00Z",

            dateModified: "2026-05-14T12:00:00Z",

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
              "MLS Matchday 13",
              "Lionel Messi",
              "Inter Miami",
              "Julian Hall",
              "FC Cincinnati",
              "Red Bull New York",
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