// app/news/petar-musa-world-cup-goal/layout.js

export const metadata = {
  title: "Petar Musa Makes FC Dallas History — Scores First World Cup Goal by an Active Player",
  
  description:
    "Petar Musa became the first active FC Dallas player to score at a FIFA World Cup with a stunning volley against England in a 4-2 defeat at Dallas Stadium.",

  openGraph: {
    title: "Petar Musa Makes FC Dallas History — First Active Player to Score at World Cup",
    description:
      "FC Dallas striker Petar Musa writes club history with a World Cup goal against England at Dallas Stadium.",
    url: "https://www.us11fc.com/news/petar-musa-fc-dallas-world-cup-goal",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/0p4QDPj9/petar-musa.jpg",
        width: 1200,
        height: 675,
        alt: "Petar Musa World Cup Goal",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Petar Musa Makes FC Dallas History at the World Cup",
    description: "First active FC Dallas player to score at a FIFA World Cup",
    images: ["https://i.ibb.co/0p4QDPj9/petar-musa.jpg"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/petar-musa-fc-dallas-world-cup-goal"
  }
};

export default function PetarMusaWorldCupGoalLayout({ children }) {
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
            "headline": "Petar Musa Makes FC Dallas History — Scores First World Cup Goal by an Active Player",
            "image": "https://i.ibb.co/0p4QDPj9/petar-musa.jpg",
            "datePublished": "2026-06-18T01:02:00Z",
            "dateModified": "2026-06-18T10:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Mio Ristić"
            },
            "publisher": {
              "@type": "Organization",
              "name": "US11",
              "logo": {
                "@type": "ImageObject",
                "url": "https://us11fc.com/logo.png"
              }
            },
            "keywords": [
              "Petar Musa",
              "FC Dallas",
              "World Cup 2026",
              "Croatia vs England",
              "Dallas Stadium",
              "World Cup Goal",
              "MLS",
              "Hrvatska",
              "Musa Goal"
            ],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}