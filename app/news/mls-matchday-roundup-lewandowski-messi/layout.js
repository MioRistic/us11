// app/news/mls-matchday-roundup-lewandowski-messi/layout.js

export const metadata = {
  title: "MLS Matchday Roundup: Lewandowski Brace, Messi Return & Cascadia Drama",
  description:
    "Robert Lewandowski scores twice on his Chicago home debut, Lionel Messi returns for Inter Miami, and Portland edge Seattle in a full MLS matchday roundup.",
  openGraph: {
    title: "MLS Matchday Roundup: Lewandowski Announces Himself at Home, Messi’s Return Ends in Frustration",
    description:
      "Lewandowski brace in Chicago, Messi’s return ends in a 2-2 draw, Son and Müller share points in Vancouver, and Portland sink Seattle.",
    url: "https://www.us11fc.com/news/mls-matchday-roundup-lewandowski-messi",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt7d93faee2a6dac45/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-01T224940.165.png?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "MLS Matchday Roundup August 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday Roundup: Lewandowski Brace & Messi Return",
    description: "Full MLS matchday: Lewandowski, Messi, Son, Müller and Cascadia drama.",
    images: [
      "https://assets.goal.com/images/v3/blt7d93faee2a6dac45/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-01T224940.165.png?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-matchday-roundup-lewandowski-messi",
  },
};

export default function MLSMatchdayRoundupLayout({ children }) {
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
              "MLS Matchday Roundup: Lewandowski Announces Himself at Home, Messi’s Return Ends in Frustration",
            image:
              "https://assets.goal.com/images/v3/blt7d93faee2a6dac45/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-01T224940.165.png?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-02T20:00:00Z",
            dateModified: "2026-08-02T23:00:00Z",
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
              "Robert Lewandowski",
              "Chicago Fire",
              "Lionel Messi",
              "Inter Miami",
              "Vancouver Whitecaps",
              "LAFC",
              "Portland Timbers",
              "Seattle Sounders",
              "MLS Matchday",
              "World Cup break",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}