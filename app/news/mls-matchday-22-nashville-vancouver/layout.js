// app/news/mls-matchday-22-nashville-vancouver/layout.js

export const metadata = {
  title:
    "Nashville Finds Another Gear, Vancouver Responds, and the Race Takes Shape",
  description:
    "Nashville SC’s historic stoppage-time comeback and Vancouver’s 5-0 response highlight Matchday 22 as the Supporters’ Shield and Western Conference races take clearer shape.",
  openGraph: {
    title:
      "Nashville Finds Another Gear, Vancouver Responds — Matchday 22 Roundup",
    description:
      "Nashville hits 49 points with a dramatic 3-2 win; Vancouver reclaims the West with a 5-0 thrashing of Dallas.",
    url: "https://www.us11fc.com/news/mls-matchday-22-nashville-vancouver",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "MLS Matchday 22 — Nashville and Vancouver",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashville Hits Another Gear, Vancouver Bounces Back",
    description:
      "Historic comeback for Nashville and a 5-0 statement from Vancouver define Matchday 22.",
    images: [
      "https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical:
      "https://www.us11fc.com/news/mls-matchday-22-nashville-vancouver",
  },
};

export default function MLSMatchday22Layout({ children }) {
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
              "Nashville Finds Another Gear, Vancouver Responds, and the Race Takes Shape",
            image:
              "https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-24T13:00:00Z",
            dateModified: "2026-08-24T15:00:00Z",
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
              "MLS Matchday 22",
              "Nashville SC",
              "Vancouver Whitecaps",
              "Supporters Shield",
              "Brian White",
              "Hany Mukhtar",
              "MLS 2026",
            ],
            articleSection: "MLS",
            description:
              "Nashville SC’s historic stoppage-time comeback and Vancouver’s 5-0 response highlight Matchday 22.",
          }),
        }}
      />
    </div>
  );
}