export const metadata = {
  title:
    "USMNT Establish World Cup Base at Great Park in Orange County Ahead of 2026",

  description:
    "The United States Men's National Team has set up its 2026 FIFA World Cup base at Great Park in Orange County, creating a state-of-the-art training hub for Mauricio Pochettino's squad.",

  openGraph: {
    title:
      "USMNT Set Up World Cup Base at Great Park in Orange County",

    description:
      "Great Park becomes the USMNT's home base for the 2026 FIFA World Cup, offering elite facilities and a strategic advantage ahead of the tournament.",

    url:
      "https://www.us11fc.com/news/usmnt-camp",

    siteName: "US11",

    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Championship_Soccer_Stadium_NW_View_2024-08-03.jpg/1280px-Championship_Soccer_Stadium_NW_View_2024-08-03.jpg",
        width: 1920,
        height: 1080,
        alt:
          "USMNT Great Park Training Base in Orange County",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "USMNT Establish World Cup Base at Great Park Ahead of 2026",

    description:
      "Mauricio Pochettino's USMNT settle into their World Cup headquarters in Orange County with elite facilities and minimal travel demands.",

    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Championship_Soccer_Stadium_NW_View_2024-08-03.jpg/1280px-Championship_Soccer_Stadium_NW_View_2024-08-03.jpg",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/usmnt-camp",
  },
};

export default function USMNTCampLayout({ children }) {
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
              "USMNT Establish World Cup Base at Great Park in Orange County Ahead of 2026",

            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Championship_Soccer_Stadium_NW_View_2024-08-03.jpg/1280px-Championship_Soccer_Stadium_NW_View_2024-08-03.jpg",

            datePublished: "2026-06-09T08:00:00Z",
            dateModified: "2026-06-09T12:00:00Z",

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
              "Mauricio Pochettino",
              "Great Park",
              "Orange County",
              "Irvine",
              "2026 FIFA World Cup",
              "World Cup Base Camp",
              "US Soccer",
              "Training Camp",
              "SoFi Stadium",
              "Los Angeles",
              "Championship Soccer Stadium",
              "International Football"
            ],

            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}