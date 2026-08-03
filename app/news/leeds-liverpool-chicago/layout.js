// app/news/leeds-liverpool-chicago/layout.js

export const metadata = {
  title: "Six Goals, One City: Chicago Gets a Premier League Spectacle as Leeds Stun Liverpool",
  description:
    "Leeds United came from 2-0 down to beat Liverpool 4-2 at Soldier Field in Chicago. A six-goal thriller entertained 49,128 fans as the Whites ended their US tour in style.",
  openGraph: {
    title: "Six Goals, One City: Chicago Gets a Premier League Spectacle as Leeds Stun Liverpool",
    description:
      "Leeds staged a stunning second-half comeback to beat Liverpool 4-2 in front of a big crowd at Soldier Field.",
    url: "https://www.us11fc.com/news/leeds-liverpool-chicago",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2288808801/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2288808801.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Leeds United vs Liverpool at Soldier Field Chicago",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leeds Stun Liverpool 4-2 in Chicago",
    description: "Six-goal thriller at Soldier Field as Leeds complete stunning comeback.",
    images: [
      "https://assets.goal.com/images/v3/getty-2288808801/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2288808801.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/leeds-liverpool-chicago",
  },
};

export default function LeedsLiverpoolChicagoLayout({ children }) {
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
              "Six Goals, One City: Chicago Gets a Premier League Spectacle as Leeds Stun Liverpool",
            image:
              "https://assets.goal.com/images/v3/getty-2288808801/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2288808801.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-03T12:00:00Z",
            dateModified: "2026-08-03T12:00:00Z",
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
              "Leeds United",
              "Liverpool",
              "Soldier Field",
              "Chicago",
              "Pre-season",
              "Brenden Aaronson",
              "Dominic Calvert-Lewin",
              "Michael Phelps",
              "Premier League",
            ],
            articleSection: "Premier League",
          }),
        }}
      />
    </div>
  );
}