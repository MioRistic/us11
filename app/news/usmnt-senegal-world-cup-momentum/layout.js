export const metadata = {
  title:
    "USMNT Builds World Cup Momentum With Bounce-Back 3-2 Win Over Senegal",

  description:
    "Christian Pulisic ended his scoring drought, Ricardo Pepi impressed, and Folarin Balogun netted the winner as the United States defeated Senegal 3-2 ahead of the 2026 FIFA World Cup.",

  openGraph: {
    title:
      "USMNT Builds World Cup Momentum With Bounce-Back 3-2 Win Over Senegal",

    description:
      "Pulisic, Pepi and Balogun inspired the USMNT to a dramatic 3-2 comeback victory over Senegal in Charlotte.",

    url:
      "https://www.us11fc.com/news/usmnt-senegal-world-cup-momentum",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/getty-2279124591/crop/MM5DGMZTG45DCOBXG45G433XMU5DAORRGY4Q====/GettyImages-2279124591.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt:
          "USMNT defeats Senegal 3-2 ahead of the 2026 FIFA World Cup",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "USMNT Beats Senegal 3-2 Ahead of the World Cup",

    description:
      "Christian Pulisic scores, Balogun wins it and the USMNT builds confidence before the 2026 FIFA World Cup.",

    images: [
      "https://assets.goal.com/images/v3/getty-2279124591/crop/MM5DGMZTG45DCOBXG45G433XMU5DAORRGY4Q====/GettyImages-2279124591.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/usmnt-senegal-world-cup-momentum",
  },
};

export default function USMNTSenegalFriendlyLayout({ children }) {
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
              "USMNT Builds World Cup Momentum With Bounce-Back 3-2 Win Over Senegal",

            image:
              "https://assets.goal.com/images/v3/getty-2279124591/crop/MM5DGMZTG45DCOBXG45G433XMU5DAORRGY4Q====/GettyImages-2279124591.jpg?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-05-31T08:00:00Z",
            dateModified: "2026-05-31T12:00:00Z",

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
              "USMNT",
              "United States",
              "Senegal",
              "Christian Pulisic",
              "Ricardo Pepi",
              "Folarin Balogun",
              "Mauricio Pochettino",
              "Sadio Mane",
              "2026 FIFA World Cup",
              "Bank of America Stadium",
              "Charlotte",
              "USA Soccer",
              "International Friendly",
              "World Cup Preparation"
            ],

            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}