// app/news/usmnt-vs-bosnia-herzegovina-round-of-32/layout.js

export const metadata = {
  title: "USMNT vs Bosnia and Herzegovina: A Golden Opportunity, But No Room for Complacency",
  
  description:
    "The United States face Bosnia and Herzegovina in the Round of 32 of the 2026 FIFA World Cup. Pochettino’s side have a favorable matchup but must not underestimate a dangerous opponent.",

  openGraph: {
    title: "USMNT vs Bosnia and Herzegovina: Round of 32 Preview",
    description:
      "A golden opportunity for the USMNT as they face Bosnia in the knockout stage on home soil.",
    url: "https://www.us11fc.com/news/usmnt-vs-bosnia-herzegovina-round-of-32",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2283365405/crop/MM5DINRWGY5DENRSGU5G433XMU5DAORSGQZQ====/GettyImages-2283365405.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 675,
        alt: "USMNT vs Bosnia and Herzegovina 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT vs Bosnia: Round of 32 Preview",
    description: "A favorable matchup as USA aim for quarterfinals",
    images: ["https://assets.goal.com/images/v3/getty-2283365405/crop/MM5DINRWGY5DENRSGU5G433XMU5DAORSGQZQ====/GettyImages-2283365405.jpg?auto=webp&format=pjpg&width=1920&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-vs-bosnia-herzegovina-round-of-32"
  }
};

export default function USMNTvsBosniaPreviewLayout({ children }) {
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
            "headline": "USMNT vs Bosnia and Herzegovina: A Golden Opportunity, But No Room for Complacency",
            "image": "https://assets.goal.com/images/v3/getty-2283365405/crop/MM5DINRWGY5DENRSGU5G433XMU5DAORSGQZQ====/GettyImages-2283365405.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-06-29T10:00:00Z",
            "dateModified": "2026-06-29T14:00:00Z",
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
              "USMNT vs Bosnia",
              "Round of 32",
              "World Cup 2026",
              "Mauricio Pochettino",
              "San Francisco Bay Area Stadium",
              "Bosnia and Herzegovina"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}