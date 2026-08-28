// app/news/julian-hall-red-bulls-extension/layout.js

export const metadata = {
  title:
    "Red Bulls Lock Up Julian Hall — and Buy Time They Almost Ran Out Of",
  description:
    "New York Red Bulls sign homegrown striker Julian Hall to a four-year contract through 2029-30 on a U-22 Initiative deal. Why the extension matters more than the length.",
  openGraph: {
    title:
      "Red Bulls Lock Up Julian Hall — and Buy Time They Almost Ran Out Of",
    description:
      "An 18-year-old All-Star stays in New York through 2029-30. The deal is about leverage, not a promise he never leaves.",
    url: "https://www.us11fc.com/news/julian-hall-red-bulls-extension",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt97d0b22debfc9406/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-27T141608.615.png?auto=webp&format=pjpg&width=2048&quality=60",
        width: 2048,
        height: 1152,
        alt: "Julian Hall New York Red Bulls contract extension",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Hall Signs Four-Year Red Bulls Extension",
    description:
      "Youngest American on a U-22 Initiative deal — New York just bought time and leverage.",
    images: [
      "https://assets.goal.com/images/v3/blt97d0b22debfc9406/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-27T141608.615.png?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/julian-hall-red-bulls-extension",
  },
};

export default function JulianHallRedBullsExtensionLayout({ children }) {
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
            headline:
              "Red Bulls Lock Up Julian Hall — and Buy Time They Almost Ran Out Of",
            image:
              "https://assets.goal.com/images/v3/blt97d0b22debfc9406/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-27T141608.615.png?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-28T14:20:00Z",
            dateModified: "2026-08-28T14:31:00Z",
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
              "Julian Hall",
              "New York Red Bulls",
              "MLS",
              "U-22 Initiative",
              "homegrown",
              "contract extension",
              "USYNT",
              "Michael Bradley",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}