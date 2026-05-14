// app/news/noah-allen-olympiacos/layout.js

export const metadata = {
  title:
    "Noah Allen to Olympiacos? The Greek-American Prospect Facing a Defining Career Decision",

  description:
    "Olympiacos are considering a move for Inter Miami defender Noah Allen, but is Greece the right next step for the promising Greek-American prospect?",

  openGraph: {
    title:
      "Noah Allen to Olympiacos? A Career-Defining Decision Awaits",

    description:
      "Inter Miami defender Noah Allen is attracting interest from Olympiacos and several European clubs ahead of the 2026 season.",

    url: "https://www.us11fc.com/news/noah-allen-olympiacos",

    siteName: "US11",

    images: [
      {
        url: "https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2148224320-scaled.jpg",
        width: 1920,
        height: 1080,
        alt: "Noah Allen Inter Miami",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Noah Allen to Olympiacos? The Greek-American Prospect Facing a Big Career Choice",

    description:
      "Olympiacos and several European clubs are reportedly interested in Inter Miami defender Noah Allen.",

    images: [
      "https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2148224320-scaled.jpg",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/noah-allen-olympiacos",
  },
};

export default function NoahAllenOlympiacosLayout({ children }) {
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
              "Noah Allen to Olympiacos? The Greek-American Prospect Facing a Defining Career Decision",

            image:
              "https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2148224320-scaled.jpg",

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
              "Noah Allen",
              "Olympiacos",
              "Inter Miami",
              "MLS",
              "Greek-American players",
              "US Soccer",
              "Lionel Messi",
              "Sergio Busquets",
              "Transfer News",
              "Greek football"
            ],

            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}