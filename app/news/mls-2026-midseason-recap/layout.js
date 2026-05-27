// app/news/mls-2026-midseason-recap/layout.js

export const metadata = {
  title:
    "MLS 2026 Midseason Recap: The Good, The Bad & The Chaos",

  description:
    "A full midseason recap of the 2026 MLS campaign, including Nashville SC’s dominance, San Jose’s rise, disappointing contenders, coaching chaos, and the biggest storylines before the World Cup break.",

  openGraph: {
    title:
      "MLS 2026 Midseason Recap: The Good, The Bad & The Chaos",

    description:
      "Nashville SC lead the Supporters’ Shield race while San Jose surprise, LA Galaxy disappoint, and coaching chaos returns across MLS.",

    url:
      "https://www.us11fc.com/news/mls-2026-midseason-recap",

    siteName: "US11",

    images: [
      {
        url: "https://i.ibb.co/qYywgPzP/nashville-sc-vs-dc-united-prediction-2026-05-09.webp",
        width: 1200,
        height: 675,
        alt: "MLS 2026 Midseason Recap",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MLS 2026 Midseason Recap: The Good, The Bad & The Chaos",

    description:
      "A chaotic first half of the MLS season brought surprises, disappointments, and major storylines before the World Cup break.",

    images: [
      "https://i.ibb.co/qYywgPzP/nashville-sc-vs-dc-united-prediction-2026-05-09.webp",
    ],

    creator: "@US11FC",
  },
};

export default function MLSMidseasonRecapLayout({
  children,
}) {
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
              "MLS 2026 Midseason Recap: The Good, The Bad & The Chaos",

            image:
              "https://i.ibb.co/qYywgPzP/nashville-sc-vs-dc-united-prediction-2026-05-09.webp",

            datePublished: "2026-05-27T12:00:00Z",

            dateModified: "2026-05-27T12:00:00Z",

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
              "A complete midseason breakdown of the 2026 MLS season, including title contenders, disappointments, coaching changes, and major storylines before the World Cup break.",
          }),
        }}
      />
    </div>
  );
}