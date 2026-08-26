// app/news/rangers-agree-deal-timbers-kevin-kelsy/layout.js

export const metadata = {
  title:
    "Rangers Agree $13 Million Deal for Portland Timbers Striker Kevin Kelsy",
  description:
    "Rangers have agreed a $13 million plus add-ons deal to sign Venezuela international Kevin Kelsy from the Portland Timbers. Visa and medical still pending.",
  openGraph: {
    title:
      "Rangers Agree $13 Million Deal for Portland Timbers Striker Kevin Kelsy",
    description:
      "The 22-year-old becomes Portland’s record sale and Rangers’ second-most expensive signing since 2000. Medical and visa still to come.",
    url: "https://www.us11fc.com/news/rangers-agree-deal-timbers-kevin-kelsy",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/QvHNgtP7/images-3.jpg",
        width: 1200,
        height: 675,
        alt: "Kevin Kelsy Portland Timbers Rangers transfer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rangers Agree $13 Million Deal for Portland Timbers Striker Kevin Kelsy",
    description:
      "Fee is $13m plus add-ons and a sell-on. Kelsy travels to Glasgow when his visa arrives.",
    images: ["https://i.ibb.co/QvHNgtP7/images-3.jpg"],
    creator: "@US11FC",
  },
  alternates: {
    canonical:
      "https://www.us11fc.com/news/rangers-agree-deal-timbers-kevin-kelsy",
  },
};

export default function RangersAgreeDealTimbersKevinKelsyLayout({ children }) {
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
              "Rangers Agree $13 Million Deal for Portland Timbers Striker Kevin Kelsy",
            image: "https://i.ibb.co/QvHNgtP7/images-3.jpg",
            datePublished: "2026-08-26T12:00:00Z",
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
              "Kevin Kelsy",
              "Rangers",
              "Portland Timbers",
              "MLS transfer",
              "Scottish Premiership",
              "Venezuela",
              "Derek McInnes",
              "MLS to Europe",
            ],
            articleSection: "MLS",
            description:
              "Rangers have agreed a $13 million plus add-ons deal to sign Kevin Kelsy from the Portland Timbers. Visa and medical pending.",
          }),
        }}
      />
    </div>
  );
}