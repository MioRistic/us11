export const metadata = {
  title: "Messi Is Back in Spanish Football. Not in a Shirt.",
  description:
    "CD Eldense say Lionel Messi has acquired the Segunda club. The deal still needs a CSD licence. He is still an Inter Miami player, and his Argentina farewell is Tuesday.",
  openGraph: {
    title: "Messi Is Back in Spanish Football. Not in a Shirt.",
    description:
      "An owner in Alicante, a footballer in Buenos Aires. Eldense announced the takeover on October 1. The regulator has not signed off.",
    url: "https://www.us11fc.com/news/messi-eldense-owner",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt65bbc97697961dfd/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-09-04T132526.445.png?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Lionel Messi",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi Buys Eldense. He Is Not Playing for Them.",
    description:
      "Second Spanish club after Cornellà. CSD licence still pending. Farewell vs Benin is October 6.",
    images: [
      "https://assets.goal.com/images/v3/blt65bbc97697961dfd/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-09-04T132526.445.png?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/messi-eldense-owner",
  },
};

export default function MessiEldenseOwnerLayout({ children }) {
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
            headline: "Messi Is Back in Spanish Football. Not in a Shirt.",
            image:
              "https://assets.goal.com/images/v3/blt65bbc97697961dfd/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-09-04T132526.445.png?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-02T14:32:00Z",
            dateModified: "2026-10-02T14:32:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristic",
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
              "Lionel Messi",
              "CD Eldense",
              "Inter Miami",
              "Argentina",
              "Segunda Division",
              "Cornellà",
            ],
            articleSection: "MLS",
            description:
              "Lionel Messi has acquired Spanish second-division club CD Eldense, pending a CSD licence. He remains an Inter Miami player.",
          }),
        }}
      />
    </div>
  );
}