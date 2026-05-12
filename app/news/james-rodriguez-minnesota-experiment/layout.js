// app/news/james-rodriguez-minnesota-experiment/layout.js

export const metadata = {
  title:
    "The James Rodríguez Experiment in Minnesota Ends After Just Four Games: What Went Wrong?",
    
  description:
    "James Rodríguez’s short-lived Minnesota United stint is already coming to an end after just four MLS appearances. Here’s what went wrong for both player and club.",

  openGraph: {
    title:
      "The James Rodríguez Experiment in Minnesota Ends After Just Four Games",

    description:
      "Why James Rodríguez’s Minnesota United move failed — tactical fit, fitness management, and a World Cup-focused mindset.",

    url:
      "https://www.us11fc.com/news/james-rodriguez-minnesota-experiment",

    siteName: "US11",

    images: [
      {
        url:
          "https://assets.goal.com/images/v3/getty-2266866585/crop/MM5DEOBYGA5DCNRSGA5G433XMU5DINBUHIYTANA=/GettyImages-2266866585.jpg?auto=webp&format=pjpg&width=3840&quality=60",

        width: 3840,
        height: 2160,
        alt: "James Rodríguez playing for Minnesota United",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "James Rodríguez’s Minnesota Experiment Is Already Over",

    description:
      "Four games, zero goals, and one quiet ending. Breaking down why the James Rodríguez move to Minnesota United failed.",

    images: [
      "https://assets.goal.com/images/v3/getty-2266866585/crop/MM5DEOBYGA5DCNRSGA5G433XMU5DINBUHIYTANA=/GettyImages-2266866585.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/james-rodriguez-minnesota-experiment",
  },
};

export default function JamesMinnesotaExperimentLayout({ children }) {
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
              "The James Rodríguez Experiment in Minnesota Ends After Just Four Games: What Went Wrong?",

            image:
              "https://assets.goal.com/images/v3/getty-2266866585/crop/MM5DEOBYGA5DCNRSGA5G433XMU5DINBUHIYTANA=/GettyImages-2266866585.jpg?auto=webp&format=pjpg&width=3840&quality=60",

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
              "James Rodríguez",
              "Minnesota United",
              "MLS",
              "Colombia National Team",
              "2026 World Cup",
              "MLS Transfers",
              "James Minnesota",
            ],

            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}