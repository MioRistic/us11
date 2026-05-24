// app/news/wilfried-zaha-charlotte-fc-departure/layout.js

export const metadata = {
  title:
    "Wilfried Zaha Plays Final Game for Charlotte FC as Loan Spell Ends",

  description:
    "Wilfried Zaha officially departs Charlotte FC after an 18-month MLS spell that saw the former Crystal Palace star help transform the club into a playoff contender.",

  openGraph: {
    title:
      "Wilfried Zaha Plays Final Game for Charlotte FC as Loan Spell Ends",

    description:
      "The former Crystal Palace winger confirmed his Charlotte FC departure after 44 MLS appearances, 13 goals, and 14 assists.",

    url:
      "https://www.us11fc.com/news/wilfried-zaha-charlotte-fc-departure",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/getty-2204351245/crop/MM5DGNZVHA5DEMJRGQ5G433XMU5DAORRHE3A====/GettyImages-2204351245.jpg?auto=webp&format=pjpg&width=3840&quality=60",

        width: 3840,
        height: 2160,

        alt: "Wilfried Zaha playing for Charlotte FC",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Wilfried Zaha Leaves Charlotte FC After 18-Month Spell",

    description:
      "The Ivorian winger officially announced his departure from Charlotte FC following the conclusion of his MLS loan spell.",

    images: [
      "https://assets.goal.com/images/v3/getty-2204351245/crop/MM5DGNZVHA5DEMJRGQ5G433XMU5DAORRHE3A====/GettyImages-2204351245.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],

    creator: "@US11FC",
  },
};

export default function WilfriedZahaCharlotteExitLayout({ children }) {
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

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.us11fc.com/news/wilfried-zaha-charlotte-fc-departure",
            },

            headline:
              "Wilfried Zaha Plays Final Game for Charlotte FC as Loan Spell Ends",

            image:
              "https://assets.goal.com/images/v3/getty-2204351245/crop/MM5DGNZVHA5DEMJRGQ5G433XMU5DAORRHE3A====/GettyImages-2204351245.jpg?auto=webp&format=pjpg&width=3840&quality=60",

            datePublished: "2026-05-24T12:00:00Z",

            dateModified: "2026-05-24T12:00:00Z",

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
              "Wilfried Zaha officially announced his departure from Charlotte FC after an 18-month MLS loan spell from Galatasaray.",
          }),
        }}
      />
    </div>
  );
}