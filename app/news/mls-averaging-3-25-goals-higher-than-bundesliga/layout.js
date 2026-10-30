// layout.js
export const metadata = {
  title:
    "MLS Is Averaging 3.25 Goals a Game. That Is Higher Than the Bundesliga.",
  description:
    "After 480 games in 2026, Major League Soccer is averaging 3.25 goals per match — higher than the completed 2025-26 Bundesliga season and most other major leagues.",
  openGraph: {
    title:
      "MLS Is Averaging 3.25 Goals a Game. That Is Higher Than the Bundesliga.",
    description:
      "MLS has already broken its single-season goals record. The league is currently averaging more goals per game than the Bundesliga did last season.",
    url: "https://www.us11fc.com/news/mls-averaging-3-25-goals-higher-than-bundesliga",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/imago-sport-1085015807/crop/MM5DCOJUGU5DCMBZGQ5G433XMU5DAORRGAYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920",
        width: 1200,
        height: 675,
        alt: "MLS high-scoring action",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MLS Is Averaging 3.25 Goals a Game. That Is Higher Than the Bundesliga.",
    description:
      "After 480 games, MLS is averaging 3.25 goals per match — higher than the completed 2025-26 Bundesliga.",
    images: [
      "https://assets.goal.com/images/v3/imago-sport-1085015807/crop/MM5DCOJUGU5DCMBZGQ5G433XMU5DAORRGAYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920",
    ],
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "MLS Is Averaging 3.25 Goals a Game. That Is Higher Than the Bundesliga.",
            image:
              "https://assets.goal.com/images/v3/imago-sport-1085015807/crop/MM5DCOJUGU5DCMBZGQ5G433XMU5DAORRGAYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920",
            datePublished: "2026-10-30T23:00:00Z",
            dateModified: "2026-10-30T23:00:00Z",
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
              "Major League Soccer",
              "goals per game",
              "Bundesliga",
              "MLS stats",
              "highest scoring leagues",
              "Inter Miami",
              "Nashville SC",
            ],
            articleSection: "MLS",
            description:
              "After 480 games in 2026, Major League Soccer is averaging 3.25 goals per match — higher than the completed 2025-26 Bundesliga season.",
          }),
        }}
      />
    </div>
  );
}
