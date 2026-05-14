// app/blog/mexico-adidas-third-kit-2026/layout.js

export const metadata = {
  title:
    "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy",

  description:
    "Mexico and adidas unveiled a bold new all-black 2026 third kit celebrating the nation’s World Cup heritage with premium details, cultural identity, and artisan craftsmanship.",

  openGraph: {
    title:
      "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy",

    description:
      "A closer look at Mexico’s striking new adidas third kit for 2026 and the cultural story behind its bold design.",

    url: "https://www.us11fc.com/blog/mexico-adidas-third-kit-2026",

    siteName: "US11",

    images: [
      {
        url: "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1440/723904.jpg",
        width: 1920,
        height: 1440,
        alt: "Mexico 2026 Adidas Third Kit",
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy",

    description:
      "Mexico and adidas unveiled a stunning all-black third kit inspired by the nation’s footballing heritage and 2026 World Cup legacy.",

    images: [
      "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1440/723904.jpg",
    ],

    creator: "@US11FC",
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/blog/mexico-adidas-third-kit-2026",
  },
};

export default function MexicoThirdKitLayout({ children }) {
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
            "@type": "BlogPosting",

            headline:
              "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy",

            image:
              "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1440/723904.jpg",

            datePublished: "2026-05-11T09:00:00Z",

            dateModified: "2026-05-11T12:00:00Z",

            author: {
              "@type": "Person",
              name: "Mio Ristić",
            },

            publisher: {
              "@type": "Organization",
              name: "US11",

              logo: {
                "@type": "ImageObject",
                url: "https://us11fc.com/logo.png",
              },
            },

            keywords: [
              "Mexico 2026 kit",
              "Mexico adidas jersey",
              "Mexico third kit",
              "Mexico World Cup jersey",
              "adidas football kits",
              "Mexico national team",
              "2026 FIFA World Cup",
              "football fashion",
              "soccer jerseys"
            ],

            articleSection: "Football Culture",
          }),
        }}
      />
    </div>
  );
}