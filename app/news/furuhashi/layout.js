export const metadata = {
  title: "LA Galaxy Sign Kyōgo Furuhashi: A Calculated Gamble on Proven Pedigree and Pacific Rim Ambition",
  description: "The LA Galaxy have signed Japanese international striker Kyōgo Furuhashi from Birmingham City on a deal through 2030-31.",
  openGraph: {
    title: "LA Galaxy Sign Kyōgo Furuhashi",
    description: "A calculated gamble on proven pedigree and Pacific Rim ambition.",
    url: "https://www.us11fc.com/news/furuhashi",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/9HPvvXNp/Getty-Images-2257281996-1024x683.webp",
        width: 1200,
        height: 675,
        alt: "Kyōgo Furuhashi LA Galaxy",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Galaxy Sign Kyōgo Furuhashi",
    description: "A calculated gamble on proven pedigree and Pacific Rim ambition.",
    images: ["https://i.ibb.co/9HPvvXNp/Getty-Images-2257281996-1024x683.webp"],
    creator: "@us11",
  },
};

export default function FuruhashiLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>

      {/* Structured Data (Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "LA Galaxy Sign Kyōgo Furuhashi: A Calculated Gamble on Proven Pedigree and Pacific Rim Ambition",
            "image": "https://i.ibb.co/9HPvvXNp/Getty-Images-2257281996-1024x683.webp",
            "datePublished": "2026-07-21T23:00:00Z",
            "dateModified": "2026-07-21T23:00:00Z",
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
            "description": "The LA Galaxy have signed Japanese international striker Kyōgo Furuhashi from Birmingham City.",
            "keywords": ["Kyogo Furuhashi", "LA Galaxy", "MLS", "Transfer News", "Japanese Players"]
          })
        }}
      />
    </div>
  );
}