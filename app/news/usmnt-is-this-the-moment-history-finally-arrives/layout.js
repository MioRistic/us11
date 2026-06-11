// app/news/usmnt-is-this-the-moment-history-finally-arrives/layout.js

export const metadata = {
  title: "USMNT: Is This the Moment History Finally Arrives?",
  description:
    "With the 2026 World Cup on home soil, the United States Men’s National Team faces its biggest opportunity in decades. Deep analysis of the squad, the favorable group stage, and what success would look like under Mauricio Pochettino.",

  openGraph: {
    title: "USMNT: Is This the Moment History Finally Arrives?",
    description:
      "The 2026 World Cup is here. Can this golden generation finally deliver on home soil? Full breakdown of the USMNT’s chances and group stage opponents.",
    url: "https://www.us11fc.com/news/usmnt-is-this-the-moment-history-finally-arrives",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg",
        width: 1200,
        height: 675,
        alt: "USMNT 2026 World Cup",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT: Is This the Moment History Finally Arrives?",
    description:
      "The biggest opportunity in decades is here for the USMNT. Can they seize it?",
    images: [
      "https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg",
    ],
    creator: "@mioristic",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-is-this-the-moment-history-finally-arrives",
  },
};

export default function USMNTMomentHistoryLayout({ children }) {
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
            "headline": "USMNT: Is This the Moment History Finally Arrives?",
            "image": "https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg",
            "datePublished": "2026-06-11T08:00:00Z",
            "dateModified": "2026-06-11T12:00:00Z",
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
              "USMNT", "2026 World Cup", "United States National Team",
              "Mauricio Pochettino", "Pulisic", "Reyna", "Group Stage",
              "USA vs Paraguay", "World Cup 2026", "Home World Cup"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}