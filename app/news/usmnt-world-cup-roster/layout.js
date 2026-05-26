// app/news/usmnt-world-cup-roster/layout.js

export const metadata = {
  title:
    "Pochettino Names Final 26-Man USMNT Roster for 2026 World Cup",

  description:
    "Mauricio Pochettino officially announced the United States Men’s National Team squad for the 2026 FIFA World Cup, with the tournament set to take place on home soil.",

  openGraph: {
    title:
      "Pochettino Names Final 26-Man USMNT Roster for 2026 World Cup",

    description:
      "The USMNT officially unveiled its final squad for the 2026 FIFA World Cup as Mauricio Pochettino prepares for the tournament on home soil.",

    url:
      "https://www.us11fc.com/news/usmnt-world-cup-roster",

    siteName: "US11",

    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 3840,
        height: 2160,
        alt: "USMNT World Cup roster",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pochettino Announces Final USMNT Squad for 2026 World Cup",

    description:
      "The United States officially revealed its final 26-man roster for the FIFA World Cup on home soil.",

    images: [
      "https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],

    creator: "@US11FC",
  },
};

export default function USMNTWorldCupRosterLayout({
  children,
}) {
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
              "Pochettino Names Final 26-Man USMNT Roster for 2026 World Cup",

            image:
              "https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60",

            datePublished: "2026-05-26T12:00:00Z",

            dateModified: "2026-05-26T12:00:00Z",

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
              "Mauricio Pochettino officially named the final 26-man United States Men’s National Team roster for the 2026 FIFA World Cup.",
          }),
        }}
      />
    </div>
  );
}