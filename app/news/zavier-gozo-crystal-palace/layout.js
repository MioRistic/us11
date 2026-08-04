// app/news/zavier-gozo-crystal-palace/layout.js

export const metadata = {
  title: "Zavier Gozo Nears $15 Million Move to Crystal Palace as Real Salt Lake Star Eyes Premier League Leap",
  description:
    "Crystal Palace are in advanced talks to sign Real Salt Lake and USMNT prospect Zavier Gozo for a fee in the region of $15 million, sources tell The Athletic.",
  openGraph: {
    title: "Zavier Gozo Nears $15M Move to Crystal Palace",
    description:
      "The 19-year-old Real Salt Lake Homegrown is close to a Premier League transfer after a breakout season.",
    url: "https://www.us11fc.com/news/zavier-gozo-crystal-palace",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2277148248/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DCORU/GettyImages-2277148248.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Zavier Gozo Real Salt Lake Crystal Palace",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zavier Gozo Nears $15M Crystal Palace Move",
    description:
      "Real Salt Lake star and USMNT prospect close to Premier League transfer.",
    images: [
      "https://assets.goal.com/images/v3/getty-2277148248/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DCORU/GettyImages-2277148248.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/zavier-gozo-crystal-palace",
  },
};

export default function ZavierGozoCrystalPalaceLayout({ children }) {
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
              "Zavier Gozo Nears $15 Million Move to Crystal Palace as Real Salt Lake Star Eyes Premier League Leap",
            image:
              "https://assets.goal.com/images/v3/getty-2277148248/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DCORU/GettyImages-2277148248.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-04T18:00:00Z",
            dateModified: "2026-08-04T22:00:00Z",
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
              "Zavier Gozo",
              "Crystal Palace",
              "Real Salt Lake",
              "Premier League",
              "USMNT",
              "MLS transfer",
              "Homegrown",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}