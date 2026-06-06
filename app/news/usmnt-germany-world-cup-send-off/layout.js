export const metadata = {
  title:
    "USMNT Fall to Germany in Final World Cup Send-Off, But Deliver Plenty of Reasons for Optimism",

  description:
    "Antonee Robinson scored a stunning equalizer, but Germany edged the United States 2-1 in Chicago as Mauricio Pochettino's side completed its final World Cup warm-up.",

  openGraph: {
    title:
      "USMNT Fall to Germany in Final World Cup Send-Off",

    description:
      "The USMNT showed promise despite a 2-1 defeat to Germany in their final preparation match before the 2026 FIFA World Cup.",

    url:
      "https://www.us11fc.com/news/usmnt-germany-world-cup-send-off",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/bltf6b8614c13a32667/crop/MM5DINZUGA5DENRWGY5G433XMU5DAORSGQ3Q====/GettyImages-2280213323.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt:
          "USMNT vs Germany before the 2026 FIFA World Cup",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "USMNT Fall 2-1 to Germany but Show Promise Ahead of World Cup",

    description:
      "Antonee Robinson scores a wonder goal as the USMNT push Germany all the way in their final World Cup tune-up.",

    images: [
      "https://assets.goal.com/images/v3/bltf6b8614c13a32667/crop/MM5DINZUGA5DENRWGY5G433XMU5DAORSGQ3Q====/GettyImages-2280213323.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/usmnt-germany-world-cup-send-off",
  },
};

export default function USMNTGermanyFriendlyLayout({ children }) {
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
              "USMNT Fall to Germany in Final World Cup Send-Off, But Deliver Plenty of Reasons for Optimism",

            image:
              "https://assets.goal.com/images/v3/bltf6b8614c13a32667/crop/MM5DINZUGA5DENRWGY5G433XMU5DAORSGQ3Q====/GettyImages-2280213323.jpg?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-06-06T08:00:00Z",
            dateModified: "2026-06-06T12:00:00Z",

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
              "Germany",
              "United States",
              "Antonee Robinson",
              "Mauricio Pochettino",
              "Kai Havertz",
              "Leroy Sane",
              "Christian Pulisic",
              "Gio Reyna",
              "Folarin Balogun",
              "Ricardo Pepi",
              "Matt Freese",
              "2026 FIFA World Cup",
              "Soldier Field",
              "Chicago",
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