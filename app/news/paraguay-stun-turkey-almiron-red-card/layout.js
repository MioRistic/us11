// app/news/paraguay-stun-turkey-almiron-red-card/layout.js

export const metadata = {
  title: "How Miguel Almirón’s Red Card Backfired — Paraguay Stun Turkey and Clear Path for USMNT",
  
  description:
    "Miguel Almirón was sent off in controversial fashion, but Paraguay produced a heroic 1-0 win over Turkey. Big result opens clear path for USMNT in Group D.",

  openGraph: {
    title: "How Miguel Almirón’s Red Card Backfired — Paraguay Stun Turkey",
    description:
      "Paraguay secure massive 1-0 victory with 10 men after Almirón’s red card, eliminating Turkey and helping USMNT path in Group D.",
    url: "https://www.us11fc.com/news/paraguay-stun-turkey-almiron-red-card",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/qqjbKM9/gettyimages-2282439188-612x612-1.jpg",
        width: 1200,
        height: 675,
        alt: "Miguel Almirón Red Card Paraguay vs Turkey",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Almirón Red Card Backfires as Paraguay Stun Turkey 1-0",
    description: "Huge result for Paraguay opens clear path for USMNT in Group D",
    images: ["https://i.ibb.co/qqjbKM9/gettyimages-2282439188-612x612-1.jpg"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/paraguay-stun-turkey-almiron-red-card"
  }
};

export default function ParaguayStunTurkeyLayout({ children }) {
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
            "headline": "How Miguel Almirón’s Red Card Backfired — Paraguay Stun Turkey and Clear Path for USMNT",
            "image": "https://i.ibb.co/qqjbKM9/gettyimages-2282439188-612x612-1.jpg",
            "datePublished": "2026-06-20T08:00:00Z",
            "dateModified": "2026-06-20T12:00:00Z",
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
              "Paraguay vs Turkey",
              "Miguel Almirón",
              "Red Card",
              "World Cup 2026",
              "Group D",
              "USMNT",
              "San Francisco"
            ],
            "articleSection": "World Cup"
          })
        }}
      />
    </div>
  );
}