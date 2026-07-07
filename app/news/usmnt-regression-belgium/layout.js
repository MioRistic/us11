// app/news/usmnt-regression-belgium/layout.js

export const metadata = {
  title: "A Night of Regression: How the USMNT Fell Well Short Against a Superior Belgium Side",
  
  description:
    "The United States suffered a disappointing 4-1 defeat to Belgium in the Round of 16. Despite an early response, defensive lapses and individual errors proved costly in a sobering night for the co-hosts.",

  openGraph: {
    title: "A Night of Regression: USMNT Fall Short Against Belgium",
    description:
      "Belgium proved too strong as the USMNT’s World Cup journey ended in the Round of 16 with a 4-1 defeat.",
    url: "https://www.us11fc.com/news/usmnt-regression-belgium",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2284972795/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRG42Q====/GettyImages-2284972795.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 675,
        alt: "USMNT vs Belgium World Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT Fall Short Against Belgium in Round of 16",
    description: "A night of regression as the co-hosts exit the 2026 World Cup",
    images: ["https://assets.goal.com/images/v3/getty-2284972795/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRG42Q====/GettyImages-2284972795.jpg?auto=webp&format=pjpg&width=1920&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-regression-belgium"
  }
};

export default function USMNTBelgiumDefeatLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "A Night of Regression: How the USMNT Fell Well Short Against a Superior Belgium Side",
            "image": "https://assets.goal.com/images/v3/getty-2284972795/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRG42Q====/GettyImages-2284972795.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-07-06T10:00:00Z",
            "dateModified": "2026-07-06T14:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Mio Ristić"
            },
            "publisher": {
              "@type": "Organization",
              "name": "US11",
              "logo": {
                "@type": "ImageObject",
                "url": "https://us11fc.com/logo.png"
              }
            },
            "keywords": [
              "USMNT vs Belgium",
              "Round of 16",
              "World Cup 2026",
              "Mauricio Pochettino",
              "Matt Freese",
              "Malik Tillman"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}