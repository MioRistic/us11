// app/news/aleksa-cvetkovic-whitecaps/layout.js

export const metadata = {
  title: "What Aleksa Cvetković Can Bring to the Vancouver Whitecaps",
  description:
    "Vancouver Whitecaps have signed Serbian midfielder Aleksa Cvetković from OFK Beograd on a U22 Initiative deal. Here's what the high-motor box-to-box midfielder can bring to the club.",
  openGraph: {
    title: "What Aleksa Cvetković Can Bring to the Vancouver Whitecaps",
    description:
      "The 21-year-old Serbian box-to-box midfielder joins Vancouver on a U22 deal. Analysis of his profile, work rate, and fit.",
    url: "https://www.us11fc.com/news/aleksa-cvetkovic-whitecaps",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/LX5n48qD/images-4.jpg",
        width: 1200,
        height: 675,
        alt: "Aleksa Cvetković Vancouver Whitecaps",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Aleksa Cvetković Can Bring to the Vancouver Whitecaps",
    description: "Serbian midfielder joins Vancouver on a U22 Initiative deal. Profile and analysis.",
    images: [
      "https://i.ibb.co/LX5n48qD/images-4.jpg",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/aleksa-cvetkovic-whitecaps",
  },
};

export default function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "What Aleksa Cvetković Can Bring to the Vancouver Whitecaps",
            image: "https://i.ibb.co/LX5n48qD/images-4.jpg",
            datePublished: "2026-08-14T14:00:00Z",
            dateModified: "2026-08-14T14:00:00Z",
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
              "Aleksa Cvetković",
              "Vancouver Whitecaps",
              "OFK Beograd",
              "MLS transfer",
              "U22 Initiative",
              "Serbia",
              "MLS",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}