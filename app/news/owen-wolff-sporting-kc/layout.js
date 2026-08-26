// app/news/owen-wolff-sporting-kc/layout.js

export const metadata = {
  title:
    "Sporting KC Complete $4.5m Move for USYNT Midfielder Owen Wolff — Club Legend’s Son Comes Home",
  description:
    "Sporting Kansas City acquire Owen Wolff from Austin FC for $4.5 million plus $3.1 million in add-ons. The USYNT midfielder joins as a U-22 Initiative player.",
  openGraph: {
    title:
      "Sporting KC Complete $4.5m Move for USYNT Midfielder Owen Wolff",
    description:
      "Largest cash trade for a U-22 Initiative player in MLS history. Son of Sporting legend Josh Wolff returns to Kansas City.",
    url: "https://www.us11fc.com/news/owen-wolff-sporting-kc",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/rG89HZj4/01jfvndt3mzgqws5t022.webp",
        width: 1200,
        height: 675,
        alt: "Owen Wolff Sporting Kansas City",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sporting KC Complete $4.5m Move for Owen Wolff",
    description:
      "USYNT midfielder joins from Austin FC in largest U-22 cash trade in MLS history.",
    images: ["https://i.ibb.co/rG89HZj4/01jfvndt3mzgqws5t022.webp"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/owen-wolff-sporting-kc",
  },
};

export default function OwenWolffSportingKCLayout({ children }) {
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
              "Sporting KC Complete $4.5m Move for USYNT Midfielder Owen Wolff — Club Legend’s Son Comes Home",
            image: "https://i.ibb.co/rG89HZj4/01jfvndt3mzgqws5t022.webp",
            datePublished: "2026-08-26T14:00:00Z",
            dateModified: "2026-08-26T20:00:00Z",
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
              "Owen Wolff",
              "Sporting Kansas City",
              "Austin FC",
              "MLS transfer",
              "USYNT",
              "U22 Initiative",
              "Josh Wolff",
              "David Lee",
            ],
            articleSection: "MLS",
            description:
              "Sporting Kansas City acquire Owen Wolff from Austin FC for $4.5 million plus $3.1 million in add-ons.",
          }),
        }}
      />
    </div>
  );
}