// app/news/usmnt-injury-concerns/layout.js

export const metadata = {
  title:
    "USMNT Hit by Injury Concerns as Cardoso Faces Surgery and Pulisic Misses Key Milan Match",

  description:
    "Johnny Cardoso is set for ankle surgery while Christian Pulisic misses AC Milan’s latest match with a glute issue ahead of the 2026 FIFA World Cup.",

  openGraph: {
    title:
      "USMNT Injury Concerns Grow Ahead of 2026 World Cup",

    description:
      "Johnny Cardoso faces surgery and Christian Pulisic deals with injury concerns as Mauricio Pochettino prepares for the World Cup.",

    url: "https://www.us11fc.com/news/usmnt-injury-concerns",

    siteName: "US11",

    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2270965566/crop/MM5DEMRYGA5DCMRYGM5G433XMU5DAORWHA======/GettyImages-2270965566.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1920,
        height: 1080,
        alt: "Christian Pulisic and Johnny Cardoso injury concerns for USMNT",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "USMNT Injury Concerns Ahead of World Cup",

    description:
      "Johnny Cardoso faces ankle surgery while Christian Pulisic misses Milan’s latest match before the 2026 FIFA World Cup.",

    images: [
      "https://assets.goal.com/images/v3/getty-2270965566/crop/MM5DEMRYGA5DCMRYGM5G433XMU5DAORWHA======/GettyImages-2270965566.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-injury-concerns",
  },
};

export default function USMNTInjuryConcernsLayout({ children }) {
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
              "USMNT Hit by Injury Concerns as Cardoso Faces Surgery and Pulisic Misses Key Milan Match",

            image:
              "https://assets.goal.com/images/v3/getty-2270965566/crop/MM5DEMRYGA5DCMRYGM5G433XMU5DAORWHA======/GettyImages-2270965566.jpg?auto=webp&format=pjpg&width=3840&quality=60",

            datePublished: "2026-05-11T09:00:00Z",

            dateModified: "2026-05-11T12:00:00Z",

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
              "Christian Pulisic",
              "Johnny Cardoso",
              "AC Milan",
              "Atletico Madrid",
              "Mauricio Pochettino",
              "2026 FIFA World Cup",
              "US Soccer",
              "USMNT injuries"
            ],

            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}