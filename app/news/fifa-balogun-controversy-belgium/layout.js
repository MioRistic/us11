// app/news/fifa-balogun-controversy-belgium/layout.js

export const metadata = {
  title: "FIFA’s Shocking Decision to Let Balogun Play vs Belgium Ignites Major Controversy at World Cup 2026",
  
  description:
    "FIFA has allowed Folarin Balogun to play against Belgium despite receiving a red card vs Bosnia. The Royal Belgian FA has issued a strong statement, sparking widespread controversy.",

  openGraph: {
    title: "FIFA’s Shocking Decision to Let Balogun Play vs Belgium Ignites Major Controversy at World Cup 2026",
    description:
      "FIFA has allowed Folarin Balogun to play against Belgium despite receiving a red card vs Bosnia. The Royal Belgian FA has issued a strong statement, sparking widespread controversy.",
    url: "https://www.us11fc.com/news/fifa-balogun-controversy-belgium",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt68d4a08caa1ea2fa/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DAORWGQ3A====/GettyImages-2240353608.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Folarin Balogun Red Card Controversy",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "FIFA Allows Balogun to Face Belgium – Major Controversy Erupts",
    description: "Belgium furious as Balogun is cleared to play in Round of 16",
    images: ["https://assets.goal.com/images/v3/blt68d4a08caa1ea2fa/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DAORWGQ3A====/GettyImages-2240353608.jpg?auto=webp&format=pjpg&width=3840&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/fifa-balogun-controversy-belgium"
  }
};

export default function BalogunFIFAControversyLayout({ children }) {
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
            "headline": "FIFA’s Shocking Decision to Let Balogun Play vs Belgium Ignites Major Controversy at World Cup 2026",
            "image": "https://assets.goal.com/images/v3/blt68d4a08caa1ea2fa/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DAORWGQ3A====/GettyImages-2240353608.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            "datePublished": "2026-07-05T10:00:00Z",
            "dateModified": "2026-07-05T14:00:00Z",
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
              "FIFA Balogun Controversy",
              "Balogun vs Belgium",
              "World Cup 2026 Round of 16",
              "Royal Belgian FA Statement",
              "Folarin Balogun Red Card"
            ],
            "articleSection": "World Cup"
          })
        }}
      />
    </div>
  );
}