// app/news/lewandowski-100-million-saudi-rejection/layout.js

export const metadata = {
  title: "Lewandowski’s €100 Million Rejection: Ambition Over Oil Money",
  description:
    "Robert Lewandowski rejected a Saudi Arabia offer worth more than €100 million per season to stay at Barcelona. Agent Pini Zahavi reveals the details behind the decision.",
  openGraph: {
    title: "Lewandowski Rejected €100m-Per-Season Saudi Offer to Stay at Barcelona",
    description:
      "Pini Zahavi confirms Robert Lewandowski turned down a massive Saudi Arabia deal twice to prioritise competitive football at Barcelona before joining Chicago Fire.",
    url: "https://www.us11fc.com/news/lewandowski-100-million-saudi-rejection",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Robert Lewandowski Barcelona Saudi rejection",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewandowski’s €100 Million Rejection: Ambition Over Oil Money",
    description: "How Robert Lewandowski walked away from one of the biggest offers in football history.",
    images: [
      "https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/lewandowski-100-million-saudi-rejection",
  },
};

export default function LewandowskiSaudiRejectionLayout({ children }) {
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
            headline: "Lewandowski’s €100 Million Rejection: Ambition Over Oil Money",
            image:
              "https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-07-29T22:00:00Z",
            dateModified: "2026-07-29T22:30:00Z",
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
              "Robert Lewandowski",
              "Saudi Arabia",
              "Pini Zahavi",
              "Barcelona",
              "Chicago Fire",
              "100 million euros",
              "MLS",
              "Lewandowski transfer",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}