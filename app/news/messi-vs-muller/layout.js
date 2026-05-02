// app/blog/messi-vs-muller/layout.js

export const metadata = {
  title: "Messi vs. Müller: The Final Chapter of a European Rivalry Arrives in MLS",
  description: "Lionel Messi and Thomas Müller face off in the 2025 MLS Cup final. Read analysis, match insights, and shop official MLS Cup gear for Inter Miami CF and Vancouver Whitecaps.",
  openGraph: {
    title: "Messi vs. Müller: The Final Chapter of a European Rivalry Arrives in MLS",
    description: "Messi and Müller clash in the 2025 MLS Cup final. Shop official MLS gear for Inter Miami and Vancouver Whitecaps!",
    url: "https://www.us11fc.com/blog/messi-vs-muller",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/zVdYQrkC/Untitled-design-2.png",
        width: 1200,
        height: 800,
        alt: "Messi vs Müller MLS Cup Final",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi vs. Müller: 2025 MLS Cup Final | US11 Blog",
    description: "Messi vs Müller in the 2025 MLS Cup final: analysis, insights, and official gear for fans.",
    images: [
      "https://i.ibb.co/zVdYQrkC/Untitled-design-2.png"
    ],
    creator: "@us11",
  },
};

export default function MessiVsMullerLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Messi vs. Müller: The Final Chapter of a European Rivalry Arrives in MLS",
            "image": "https://i.ibb.co/zVdYQrkC/Untitled-design-2.png",
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
