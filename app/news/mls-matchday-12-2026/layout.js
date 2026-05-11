// app/news/mls-matchday-12-2026/layout.js

export const metadata = {
  title:
    "Messi Makes History Again, Portland Explodes & James Delivers: What We Learned from MLS Matchday 12",

  description:
    "Messi breaks another MLS record, Portland crush Sporting KC 6-0, and James Rodríguez shines again as Matchday 12 delivers another dramatic weekend across Major League Soccer.",

  openGraph: {
    title:
      "Messi Makes History Again & Portland Explodes | MLS Matchday 12 Takeaways",

    description:
      "Messi reaches 100 MLS goal contributions in record time, Portland destroys Sporting KC, and James Rodríguez reminds everyone of his class.",

    url: "https://www.us11fc.com/news/mls-matchday-12-2026",

    siteName: "US11",

    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2266866579/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORSGMYQ====/GettyImages-2266866579.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "MLS Matchday 12 action featuring Inter Miami and Lionel Messi",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Messi Makes History Again & Portland Explodes | MLS Matchday 12",

    description:
      "The biggest stories and performances from MLS Matchday 12 featuring Messi, Portland Timbers, James Rodríguez, and more.",

    images: [
      "https://assets.goal.com/images/v3/getty-2266866579/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORSGMYQ====/GettyImages-2266866579.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/mls-matchday-12-2026",
  },
};

export default function Matchday12TakeawaysLayout({ children }) {
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
              "Messi Makes History Again, Portland Explodes & James Delivers: What We Learned from MLS Matchday 12",

            image:
              "https://assets.goal.com/images/v3/getty-2266866579/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORSGMYQ====/GettyImages-2266866579.jpg?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-05-11T09:00:00Z",

            dateModified: "2026-05-11T12:30:00Z",

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
              "MLS Matchday 12",
              "Lionel Messi",
              "Inter Miami",
              "Portland Timbers",
              "James Rodriguez",
              "Kevin Kelsy",
              "Houston Dynamo",
              "MLS 2026"
            ],

            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}