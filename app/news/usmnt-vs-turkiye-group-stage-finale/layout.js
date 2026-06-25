// app/news/usmnt-vs-turkiye-group-stage-finale/layout.js

export const metadata = {
  title: "USMNT vs Türkiye: Playing for Pride, Momentum and a Perfect Group Stage",
  
  description:
    "With first place already secured, the USMNT face Türkiye in their final group stage match. Pochettino plans rotation but wants intensity as they aim for a perfect group stage record.",

  openGraph: {
    title: "USMNT vs Türkiye: Playing for Pride and Momentum",
    description:
      "Mauricio Pochettino’s side look to finish the group stage strong against Türkiye at SoFi Stadium.",
    url: "https://www.us11fc.com/news/usmnt-vs-turkiye-group-stage-finale",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG58xIJA464ZXYwF1YUDzSKe11IXvZX2m4DdIAEjFgA&s=10",
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
    title: "USMNT vs Türkiye: Playing for Pride and Momentum",
    description: "Rotation expected as USA aim for perfect group stage record",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG58xIJA464ZXYwF1YUDzSKe11IXvZX2m4DdIAEjFgA&s=10"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-vs-turkiye-group-stage-finale"
  }
};

export default function USMNTvsTurkiyePreviewLayout({ children }) {
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
            "headline": "USMNT vs Türkiye: Playing for Pride, Momentum and a Perfect Group Stage",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG58xIJA464ZXYwF1YUDzSKe11IXvZX2m4DdIAEjFgA&s=10",
            "datePublished": "2026-06-25T10:00:00Z",
            "dateModified": "2026-06-25T14:00:00Z",
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
              "Gio Reyna",
              "Christian Pulisic",
              "USMNT Rotation"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}