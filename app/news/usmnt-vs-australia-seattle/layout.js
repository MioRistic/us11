// app/news/usmnt-vs-australia-seattle/layout.js

export const metadata = {
  title: "USMNT vs Australia: A Statement Win, Then a Real Test of Ambition",
  
  description:
    "After the 4-1 win over Paraguay, the USMNT faces a much tougher test against Australia in Seattle. Preview, stakes, and what a win would mean for Group D.",

  openGraph: {
    title: "USMNT vs Australia: A Statement Win, Then a Real Test of Ambition",
    description:
      "Mauricio Pochettino’s side looks to build on their strong start against a dangerous Australia team in Seattle.",
    url: "https://www.us11fc.com/news/usmnt-vs-australia-seattle",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "USMNT vs Australia Seattle 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT vs Australia: A Statement Win, Then a Real Test",
    description: "Big match preview as USA face Australia in Seattle",
    images: ["https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-vs-australia-seattle"
  }
};

export default function USMNTvsAustraliaSeattleLayout({ children }) {
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
            "headline": "USMNT vs Australia: A Statement Win, Then a Real Test of Ambition",
            "image": "https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            "datePublished": "2026-06-19T08:00:00Z",
            "dateModified": "2026-06-19T12:00:00Z",
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
              "USMNT vs Australia",
              "2026 World Cup",
              "Mauricio Pochettino",
              "Folarin Balogun",
              "Seattle",
              "Lumen Field",
              "Group D",
              "World Cup 2026"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}