// app/news/matchday-11-preview/layout.js

export const metadata = {
  title: "Matchday 11 Preview: Serious Battle for the Top of the Table and the Golden Boot",
  description:
    "The Golden Boot race is heating up as Sam Surridge and Petar Musa lead the way. Full preview of Matchday 11 including Inter Miami vs Orlando, San Diego vs LAFC and more.",
  openGraph: {
    title: "MLS Matchday 11 Preview: Golden Boot Race Heats Up",
    description: "Surridge and Musa lead the Golden Boot race. Big matches including Florida Derby and Southern California clash.",
    url: "https://www.us11fc.com/news/matchday-11-preview",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/G34vz80S/mday-11.png",
        width: 1920,
        height: 1080,
        alt: "MLS Matchday 11 Preview 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 11 Preview: Golden Boot Race Heating Up",
    description: "Surridge & Musa lead the way. Full Matchday 11 preview and key games.",
    images: ["https://i.ibb.co/G34vz80S/mday-11.png"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/matchday-11-preview"
  }
};

export default function MLSMatchday11Layout({ children }) {
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
            "headline": "Matchday 11 Preview: Serious Battle for the Top of the Table and the Golden Boot",
            "image": "https://i.ibb.co/G34vz80S/mday-11.png",
            "datePublished": "2026-05-02T12:00:00Z",
            "dateModified": "2026-05-02T12:00:00Z",
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
            }
          })
        }}
      />
    </div>
  );
}