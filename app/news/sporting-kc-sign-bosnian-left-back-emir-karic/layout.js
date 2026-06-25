// app/news/sporting-kc-sign-bosnian-left-back-emir-karic/layout.js

export const metadata = {
  title: "Sporting Kansas City Sign Experienced Bosnian Left Back Emir Karić — But Is It Enough?",
  
  description:
    "Sporting Kansas City have signed 29-year-old Bosnian left back Emir Karić from Sturm Graz. A sensible move, but does it solve SKC’s deeper problems?",

  openGraph: {
    title: "Sporting Kansas City Sign Bosnian Left Back Emir Karić",
    description:
      "Experienced defender joins SKC on a two-year deal — smart reinforcement or not enough to change the trajectory?",
    url: "https://www.us11fc.com/news/sporting-kc-sign-bosnian-left-back-emir-karic",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/XZc4whwT/2025-08-28-T205307-Z-2122236778-RC27-FGAVCAME-RTRMADP-3-SOCCER-CHAMPIONS-STU-BOD.jpg",
        width: 1200,
        height: 675,
        alt: "Emir Karić Sporting Kansas City",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sporting KC Sign Bosnian Left Back Emir Karić",
    description: "Is this the reinforcement SKC needed or just another solid piece?",
    images: ["https://i.ibb.co/XZc4whwT/2025-08-28-T205307-Z-2122236778-RC27-FGAVCAME-RTRMADP-3-SOCCER-CHAMPIONS-STU-BOD.jpg"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/sporting-kc-sign-bosnian-left-back-emir-karic"
  }
};

export default function SportingKCCaricSigningLayout({ children }) {
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
            "headline": "Sporting Kansas City Sign Experienced Bosnian Left Back Emir Karić — But Is It Enough?",
            "image": "https://i.ibb.co/XZc4whwT/2025-08-28-T205307-Z-2122236778-RC27-FGAVCAME-RTRMADP-3-SOCCER-CHAMPIONS-STU-BOD.jpg",
            "datePublished": "2026-06-24T10:00:00Z",
            "dateModified": "2026-06-24T12:30:00Z",
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
              "Emir Karić",
              "Sporting Kansas City",
              "SKC",
              "MLS Transfer",
              "Left Back",
              "Bosnian Player",
              "Sturm Graz",
              "2026 MLS Season"
            ],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}