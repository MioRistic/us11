// app/news/mls-all-star-game-2026-messi/layout.js

export const metadata = {
  title: "MLS All-Star Game 2026: No Messi, But the League Still Sees Opportunity After the World Cup",
  description:
    "Lionel Messi and Rodrigo De Paul will miss the 2026 MLS All-Star Game in Charlotte. Here’s why, the full roster, and how MLS hopes to capitalize on post-World Cup momentum.",
  openGraph: {
    title: "MLS All-Star Game 2026: No Messi, But the League Still Sees Opportunity After the World Cup",
    description:
      "Messi is out again, but MLS is still looking to ride the wave from the World Cup as the All-Stars face Liga MX in Charlotte on July 29.",
    url: "https://www.us11fc.com/news/mls-all-star-game-2026-messi",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2228112735/crop/MM5DIOJZGM5DEOBQHE5G433XMU5DAORSGYYA====/GettyImages-2228112735.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "MLS All-Star Game 2026 Charlotte",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS All-Star Game 2026: No Messi in Charlotte",
    description: "Messi and De Paul excused. Full roster and what MLS is really aiming for this week.",
    images: [
      "https://assets.goal.com/images/v3/getty-2228112735/crop/MM5DIOJZGM5DEOBQHE5G433XMU5DAORSGYYA====/GettyImages-2228112735.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/mls-all-star-game-2026-messi",
  },
};

export default function MLSAllStarGame2026MessiLayout({ children }) {
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
              "MLS All-Star Game 2026: No Messi, But the League Still Sees Opportunity After the World Cup",
            image:
              "https://assets.goal.com/images/v3/getty-2228112735/crop/MM5DIOJZGM5DEOBQHE5G433XMU5DAORSGYYA====/GettyImages-2228112735.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-07-28T10:00:00Z",
            dateModified: "2026-07-28T12:00:00Z",
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
              "MLS All-Star Game 2026",
              "Lionel Messi",
              "Rodrigo De Paul",
              "Charlotte",
              "Liga MX",
              "Son Heung-min",
              "Thomas Müller",
              "MLS",
              "World Cup",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}