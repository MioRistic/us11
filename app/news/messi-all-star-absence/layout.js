// app/news/messi-all-star-absence/layout.js

export const metadata = {
  title: "Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game",
  description:
    "Lionel Messi and Rodrigo De Paul have been excused from the 2026 MLS All-Star Game under a World Cup rest agreement between MLS and the Players Association. No suspension this time.",
  openGraph: {
    title: "Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game",
    description:
      "Unlike last year, Messi will not face a suspension for skipping the All-Star Game after reaching the World Cup final with Argentina.",
    url: "https://www.us11fc.com/news/messi-all-star-absence",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt9377225dfc46ac1f/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-10T084308.859.png?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Lionel Messi Inter Miami 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game",
    description: "Messi excused from All-Star Game under World Cup rest agreement. No suspension this time.",
    images: [
      "https://assets.goal.com/images/v3/blt9377225dfc46ac1f/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-10T084308.859.png?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/messi-all-star-absence",
  },
};

export default function MessiAllStarAbsenceLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Why Lionel Messi Will Avoid Punishment for Missing the 2026 MLS All-Star Game",
            image:
              "https://assets.goal.com/images/v3/blt9377225dfc46ac1f/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-10T084308.859.png?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-07-27T10:00:00Z",
            dateModified: "2026-07-27T12:00:00Z",
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
              "Lionel Messi",
              "MLS All-Star Game",
              "Inter Miami",
              "Rodrigo De Paul",
              "2026 World Cup",
              "MLS",
              "Messi suspension",
              "All-Star Game 2026",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}