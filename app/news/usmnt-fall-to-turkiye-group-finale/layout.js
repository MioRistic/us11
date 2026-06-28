// app/news/usmnt-fall-to-turkiye-group-finale/layout.js

export const metadata = {
  title: "USMNT Fall to Türkiye 3-2 in Group Finale But Finish Top of Group D",
  
  description:
    "Despite a 3-2 loss to Türkiye, the USMNT topped Group D and head into the knockout rounds with growing belief. Pulisic returned, Berhalter impressed, but defensive depth remains a concern.",

  openGraph: {
    title: "USMNT Fall to Türkiye 3-2 But Top Group D",
    description:
      "Pulisic returns from injury as the USMNT finish the group stage with six points and first place secured.",
    url: "https://www.us11fc.com/news/usmnt-fall-to-turkiye-group-finale",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2283360510/crop/MM5DCNZSGA5DSNRYHJXG653FHIYDUNBR/GettyImages-2283360510.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 675,
        alt: "USMNT vs Türkiye World Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT Lose 3-2 to Türkiye But Top Group D",
    description: "Pulisic returns as USA prepare for knockout rounds",
    images: ["https://assets.goal.com/images/v3/getty-2283360510/crop/MM5DCNZSGA5DSNRYHJXG653FHIYDUNBR/GettyImages-2283360510.jpg?auto=webp&format=pjpg&width=1920&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-fall-to-turkiye-group-finale"
  }
};

export default function USMNTvsTurkiyeReviewLayout({ children }) {
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
            "headline": "USMNT Fall to Türkiye 3-2 in Group Finale But Finish Top of Group D",
            "image": "https://assets.goal.com/images/v3/getty-2283360510/crop/MM5DCNZSGA5DSNRYHJXG653FHIYDUNBR/GettyImages-2283360510.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-06-25T22:00:00Z",
            "dateModified": "2026-06-25T23:30:00Z",
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
              "USMNT vs Türkiye",
              "World Cup 2026",
              "Mauricio Pochettino",
              "Group D",
              "SoFi Stadium",
              "Christian Pulisic",
              "Sebastian Berhalter",
              "USMNT Knockout Stage"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}