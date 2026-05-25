// app/news/canada-world-cup-training-camp/layout.js

export const metadata = {
  title:
    "Jesse Marsch Calls 11 MLS Players to Canada’s Pre-World Cup Training Camp",

  description:
    "Canada head coach Jesse Marsch named 11 MLS players to a 32-man preliminary roster ahead of the 2026 FIFA World Cup as the co-host nation finalizes preparations.",

  openGraph: {
    title:
      "Jesse Marsch Calls 11 MLS Players to Canada’s Pre-World Cup Training Camp",

    description:
      "Canada’s preliminary World Cup camp roster includes 11 MLS players as Jesse Marsch prepares to finalize his squad for 2026.",

    url:
      "https://www.us11fc.com/news/canada",

    siteName: "US11",

    images: [
      {
        url: "https://i.ibb.co/DPKbdcTr/20221117-1668705421-556.jpg",
        width: 1200,
        height: 675,
        alt: "Canada national team Jesse Marsch",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Jesse Marsch Names 11 MLS Players in Canada’s World Cup Camp",

    description:
      "Canada begins final preparations for the 2026 FIFA World Cup with a 32-man preliminary roster.",

    images: [
      "https://i.ibb.co/DPKbdcTr/20221117-1668705421-556.jpg",
    ],

    creator: "@US11FC",
  },
};

export default function CanadaWorldCupTrainingCampLayout({
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
              "Jesse Marsch Calls 11 MLS Players to Canada’s Pre-World Cup Training Camp",

            image:
              "https://i.ibb.co/DPKbdcTr/20221117-1668705421-556.jpg",

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
              "Canada head coach Jesse Marsch selected 11 MLS players in a 32-man preliminary squad ahead of the 2026 FIFA World Cup.",
          }),
        }}
      />
    </div>
  );
}