export const metadata = {
  title: "Charlotte Signed Doucouré Before the Freeze. The Debut Can Wait.",
  description:
    "Abdoulaye Doucouré joined Charlotte FC through the end of 2026 before the roster freeze. Dean Smith says visa and fitness will delay his debut.",
  openGraph: {
    title: "Charlotte Signed Doucouré Before the Freeze. The Debut Can Wait.",
    description:
      "A short contract got him on the roster. The visa decides whether he plays before the season ends.",
    url: "https://www.us11fc.com/news/doucoure-charlotte-freeze",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2197194714/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMBZG45DGMZV/GettyImages-2197194714.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Abdoulaye Doucouré",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doucouré Signed. The Debut Can Wait.",
    description:
      "Charlotte added the former Everton midfielder before the freeze. Visa and fitness come first.",
    images: [
      "https://assets.goal.com/images/v3/getty-2197194714/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMBZG45DGMZV/GettyImages-2197194714.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/doucoure-charlotte-freeze",
  },
};

export default function DoucoureCharlotteLayout({ children }) {
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
              "Charlotte Signed Doucouré Before the Freeze. The Debut Can Wait.",
            image:
              "https://assets.goal.com/images/v3/getty-2197194714/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMBZG45DGMZV/GettyImages-2197194714.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-13T15:21:00Z",
            dateModified: "2026-10-13T15:21:00Z",
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
              "Abdoulaye Doucouré",
              "Charlotte FC",
              "MLS",
              "Everton",
              "Dean Smith",
            ],
            articleSection: "MLS",
            description:
              "Charlotte FC signed Abdoulaye Doucouré through the end of 2026 before the roster freeze. His debut is delayed by visa and fitness.",
          }),
        }}
      />
    </div>
  );
}