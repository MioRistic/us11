// app/blog/lewandowski-chicago-kit/layout.js

export const metadata = {
  title: "Chicago Fire Unveil Lewandowski Home Kit for Historic 2026 Season",
  description: "Chicago Fire release the official Robert Lewandowski 2026 Home Jersey – where to buy Replica and Authentic versions.",
  openGraph: {
    title: "Chicago Fire Unveil Lewandowski 2026 Home Kit",
    description: "The legendary striker’s new Chicago Fire jersey is now available – shop Replica and Authentic versions.",
    url: "https://www.us11fc.com/blog/lewandowski-chicago-kit",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2260392490/crop/MM5DIOBWGQ5DENZTGY5G433XMU5DAORQ/GettyImages-2260392490.jpg",
        width: 1200,
        height: 675,
        alt: "Robert Lewandowski Chicago Fire 2026 Home Kit",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewandowski Chicago Fire 2026 Home Kit Released",
    description: "Shop the official Lewandowski jersey now!",
    images: [
      "https://assets.goal.com/images/v3/getty-2260392490/crop/MM5DIOBWGQ5DENZTGY5G433XMU5DAORQ/GettyImages-2260392490.jpg"
    ],
    creator: "@us11",
  },
};

export default function LewandowskiChicagoKitLayout({ children }) {
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
            "headline": "Chicago Fire Unveil Lewandowski Home Kit for Historic 2026 Season",
            "image": "https://assets.goal.com/images/v3/getty-2260392490/crop/MM5DIOBWGQ5DENZTGY5G433XMU5DAORQ/GettyImages-2260392490.jpg",
            "datePublished": "2026-07-13T18:00:00Z",
            "dateModified": "2026-07-13T20:30:00Z",
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
            "description": "Chicago Fire release the official Robert Lewandowski 2026 Home Jersey.",
            "keywords": ["Lewandowski", "Chicago Fire", "MLS Kit", "2026 Jersey", "Adidas"]
          })
        }}
      />
    </div>
  );
}