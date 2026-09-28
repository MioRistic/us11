export const metadata = {
  title:
    "USMNT's New Era Starts With a 4-1 Win Over Peru — and a Lot of Questions",
  description:
    "The USMNT opened the 2030 cycle with a 4-1 win over Peru in Orlando. Justin Ellis and Julian Hall scored on debut. Cavan Sullivan started at 16.",
  openGraph: {
    title:
      "USMNT's New Era Starts With a 4-1 Win Over Peru — and a Lot of Questions",
    description:
      "Eleven debuts, two teenage goals, and a Tillman penalty in the first match since the World Cup.",
    url: "https://www.us11fc.com/news/usmnt-peru-kids-debut",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/imago-sport-1083844060/crop/MM5DGNJYGA5DEMBRGQ5G433XMU5DAORRHA3Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "United States players celebrate during the 4-1 friendly win over Peru in Orlando",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT 4-1 Peru: A New Era, and a Lot of Questions",
    description:
      "Ellis and Hall scored on debut. Sullivan started at 16. The finishing belonged to everybody else.",
    images: [
      "https://assets.goal.com/images/v3/imago-sport-1083844060/crop/MM5DGNJYGA5DEMBRGQ5G433XMU5DAORRHA3Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-peru-kids-debut",
  },
};

export default function UsmntPeruKidsDebutLayout({ children }) {
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
              "USMNT's New Era Starts With a 4-1 Win Over Peru — and a Lot of Questions",
            image:
              "https://assets.goal.com/images/v3/imago-sport-1083844060/crop/MM5DGNJYGA5DEMBRGQ5G433XMU5DAORRHA3Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-28T00:57:00Z",
            dateModified: "2026-09-28T00:57:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristic",
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
              "Cavan Sullivan",
              "Justin Ellis",
              "Julian Hall",
              "Malik Tillman",
              "Peru",
              "Mauricio Pochettino",
            ],
            articleSection: "USMNT",
            description:
              "The United States beat Peru 4-1 in Orlando in the first match since the World Cup, with Ellis and Hall scoring on debut.",
          }),
        }}
      />
    </div>
  );
}