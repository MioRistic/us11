// app/news/chicago-fire-match-postponed/layout.js

export const metadata = {
  title: "Chicago Fire vs Vancouver Whitecaps Postponed as Hazardous Air Quality Delays Robert Lewandowski's MLS Debut",
  description: "Thursday’s Chicago Fire vs Vancouver Whitecaps match has been postponed due to hazardous air quality in Chicago.",
  openGraph: {
    title: "Chicago Fire vs Vancouver Postponed – Lewandowski Debut Delayed",
    description: "Hazardous air quality forces postponement of Robert Lewandowski’s MLS debut.",
    url: "https://www.us11fc.com/news/chicago-fire-match-postponed",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/xSpmFW5m/im-45660188.avif",
        width: 1200,
        height: 675,
        alt: "Robert Lewandowski Chicago Fire",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Fire vs Vancouver Postponed Due to Smoke",
    description: "Lewandowski’s MLS debut delayed due to hazardous air quality.",
    images: [
      "https://i.ibb.co/xSpmFW5m/im-45660188.avif"
    ],
    creator: "@us11",
  },
};

export default function ChicagoFireMatchPostponedLayout({ children }) {
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
            "headline": "Chicago Fire vs Vancouver Whitecaps Postponed as Hazardous Air Quality Delays Robert Lewandowski's MLS Debut",
            "image": "https://i.ibb.co/xSpmFW5m/im-45660188.avif",
            "datePublished": "2026-07-16T19:00:00Z",
            "dateModified": "2026-07-16T21:30:00Z",
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
            "description": "Chicago Fire vs Vancouver Whitecaps postponed due to hazardous air quality from Canadian wildfires.",
            "keywords": ["Chicago Fire", "Vancouver Whitecaps", "Lewandowski", "MLS", "Air Quality"]
          })
        }}
      />
    </div>
  );
}