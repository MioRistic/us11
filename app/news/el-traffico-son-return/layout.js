// app/news/el-traffico-son-return/layout.js

export const metadata = {
  title: "Son Heung-Min’s Statement Goal in LAFC’s El Tráfico Rout: A Triumphant Return",
  description: "Son Heung-Min scores and celebrates as LAFC dominate rivals LA Galaxy 3-0 in El Tráfico.",
  openGraph: {
    title: "Son Heung-Min Scores in El Tráfico – LAFC 3-0 LA Galaxy",
    description: "The South Korean superstar breaks his scoring drought in a dominant derby win.",
    url: "https://www.us11fc.com/news/el-traffico-son-return",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2237499046/crop/MM5DCNZUGA5DSNZZHJXG653FHIYDUOJR/GettyImages-2237499046.jpg",
        width: 1200,
        height: 675,
        alt: "Son Heung-Min celebrates goal in El Tráfico",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Son Heung-Min Scores in El Tráfico 🔥",
    description: "LAFC dominate LA Galaxy 3-0 as Son breaks scoring drought.",
    images: [
      "https://assets.goal.com/images/v3/getty-2237499046/crop/MM5DCNZUGA5DSNZZHJXG653FHIYDUOJR/GettyImages-2237499046.jpg"
    ],
    creator: "@us11",
  },
};

export default function ElTrafficoSonReturnLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Son Heung-Min’s Statement Goal in LAFC’s El Tráfico Rout: A Triumphant Return",
            "image": "https://assets.goal.com/images/v3/getty-2237499046/crop/MM5DCNZUGA5DSNZZHJXG653FHIYDUOJR/GettyImages-2237499046.jpg",
            "datePublished": "2026-07-19T20:00:00Z",
            "dateModified": "2026-07-19T22:30:00Z",
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
            "description": "Son Heung-Min scores and celebrates as LAFC dominate LA Galaxy 3-0 in El Tráfico.",
            "keywords": ["Son Heung-Min", "El Tráfico", "LAFC", "LA Galaxy", "MLS"]
          })
        }}
      />
    </div>
  );
}