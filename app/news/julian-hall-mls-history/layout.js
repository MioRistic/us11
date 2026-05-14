// app/news/julian-hall-mls-history/layout.js

export const metadata = {
  title:
    "Julian Hall and the Night MLS History Got a New Face",

  description:
    "Julian Hall became the youngest player in MLS history to score a hat-trick as the 18-year-old fired Red Bull New York to a dramatic win over Columbus Crew.",

  openGraph: {
    title:
      "Julian Hall Makes MLS History With Record-Breaking Hat-Trick",

    description:
      "The 18-year-old New York Red Bulls star became the youngest player ever to score a hat-trick in Major League Soccer.",

    url: "https://www.us11fc.com/news/julian-hall-mls-history",

    siteName: "US11",

    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2276124306/crop/MM5DINBVGI5DENJQGQ5G433XMU5DAORSGMZA====/GettyImages-2276124306.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "Julian Hall celebrates historic hat-trick for New York Red Bulls",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Julian Hall Makes MLS History at 18",

    description:
      "Julian Hall became the youngest player in MLS history to score a hat-trick in Red Bull New York’s win over Columbus Crew.",

    images: [
      "https://assets.goal.com/images/v3/getty-2276124306/crop/MM5DINBVGI5DENJQGQ5G433XMU5DAORSGMZA====/GettyImages-2276124306.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/julian-hall-mls-history",
  },
};

export default function JulianHallMLSHistoryLayout({ children }) {
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
              "Julian Hall and the Night MLS History Got a New Face",

            image:
              "https://assets.goal.com/images/v3/getty-2276124306/crop/MM5DINBVGI5DENJQGQ5G433XMU5DAORSGMZA====/GettyImages-2276124306.jpg?auto=webp&format=pjpg&width=1920&quality=60",

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
              "Julian Hall",
              "New York Red Bulls",
              "MLS",
              "MLS history",
              "Columbus Crew",
              "Michael Bradley",
              "MLS Golden Boot",
              "American soccer",
              "MLS young stars"
            ],

            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}