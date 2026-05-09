export const metadata = {
  title: "Casemiro to Inter Miami? The High-Stakes Gamble That Could Define Messi’s Final Chapter",
  description:
    "With Casemiro expected to leave Manchester United as a free agent, Inter Miami has emerged as the clear frontrunner. We analyze what the Brazilian would bring and the major risks involved.",
  
  openGraph: {
    title: "Casemiro to Inter Miami? The High-Stakes Gamble",
    description: "Would signing Casemiro be a masterstroke or a risky bet for Messi’s Inter Miami?",
    url: "https://www.us11fc.com/news/casemiro-inter-miami",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2264815577/crop/MM5DGMZWGA5DCOBZGA5G433XMU5DINZZHIYTENQ=/GettyImages-2264815577.jpg",
        width: 1200,
        height: 675,
        alt: "Casemiro linked with Inter Miami",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Casemiro to Inter Miami? The High-Stakes Gamble",
    description: "Analyzing the rumored move of Casemiro to Lionel Messi’s Inter Miami.",
    images: ["https://assets.goal.com/images/v3/getty-2264815577/crop/MM5DGMZWGA5DCOBZGA5G433XMU5DINZZHIYTENQ=/GettyImages-2264815577.jpg"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/casemiro-inter-miami"
  }
};

export default function CasemiroInterMiamiLayout({ children }) {
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
            "headline": "Casemiro to Inter Miami? The High-Stakes Gamble That Could Define Messi’s Final Chapter",
            "image": "https://assets.goal.com/images/v3/getty-2264815577/crop/MM5DGMZWGA5DCOBZGA5G433XMU5DINZZHIYTENQ=/GettyImages-2264815577.jpg",
            "datePublished": "2026-05-09T10:00:00Z",
            "dateModified": "2026-05-09T12:30:00Z",
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
              "Casemiro to Inter Miami",
              "Casemiro Inter Miami 2026",
              "Messi Casemiro",
              "Inter Miami transfer",
              "Casemiro transfer",
              "MLS transfer news"
            ],
            "articleSection": "Transfer News"
          })
        }}
      />
    </div>
  );
}