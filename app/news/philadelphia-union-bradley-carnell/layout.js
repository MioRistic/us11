// app/news/philadelphia-union-bradley-carnell/layout.js

export const metadata = {
  title:
    "Philadelphia Union Fire Bradley Carnell One Season After Winning Supporters’ Shield",

  description:
    "Philadelphia Union have fired head coach Bradley Carnell just one season after winning the Supporters’ Shield, amid a disastrous 2026 MLS campaign.",

  openGraph: {
    title:
      "Philadelphia Union Fire Bradley Carnell One Season After Winning Supporters’ Shield",

    description:
      "Bradley Carnell is dismissed after a shocking collapse at Philadelphia Union following a title-winning season.",

    url: "https://www.us11fc.com/news/philadelphia-union-bradley-carnell",

    siteName: "US11",

    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2248141870/crop/MM5DENRWGA5DCNBZGY5G433XMU5DAORRGM4A====/GettyImages-2248141870.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 675,
        alt: "Bradley Carnell Philadelphia Union",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Philadelphia Union Fire Bradley Carnell After Shock Collapse",

    description:
      "Union sack Bradley Carnell just one year after winning the Supporters’ Shield.",

    images: [
      "https://assets.goal.com/images/v3/getty-2248141870/crop/MM5DENRWGA5DCNBZGY5G433XMU5DAORRGM4A====/GettyImages-2248141870.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],

    creator: "@US11FC",
  },
};

export default function PhiladelphiaUnionCarnellLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",

            headline:
              "Philadelphia Union Fire Bradley Carnell One Season After Winning Supporters’ Shield",

            image:
              "https://assets.goal.com/images/v3/getty-2248141870/crop/MM5DENRWGA5DCNBZGY5G433XMU5DAORRGM4A====/GettyImages-2248141870.jpg?auto=webp&format=pjpg&width=1920&quality=60",

            datePublished: "2026-05-27T12:00:00Z",
            dateModified: "2026-05-27T12:00:00Z",

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
              "Philadelphia Union fired Bradley Carnell after a disastrous 2026 MLS season following a Supporters’ Shield-winning campaign.",
          }),
        }}
      />
    </div>
  );
}