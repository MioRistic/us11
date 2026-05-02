// app/news/us-open-cup-round-of-32-2026/layout.js

export const metadata = {
  title: "US Open Cup Round of 32 2026: Multiple Upsets as Four MLS Teams Eliminated",
  description:
    "Recap of US Open Cup Round of 32 2026: One Knoxville stuns D.C. United on penalties, Colorado Springs beats Sporting KC, Louisville City eliminates Austin FC and more key results.",
  openGraph: {
    title: "US Open Cup Round of 32 2026: Big Upsets and Penalty Drama",
    description: "Multiple MLS teams eliminated as lower-division sides produce heroic performances in the 2026 US Open Cup.",
    url: "https://www.us11fc.com/news/us-open-cup-round-of-32-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-1705295975/crop/MM5DGNRXG45DEMBWHA5G433XMU5DAORTGM2A====/GettyImages-1705295975.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "US Open Cup Round of 32 2026 Recap",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "US Open Cup Round of 32 2026: Upsets and Penalty Drama",
    description: "One Knoxville eliminates D.C. United, Colorado Springs beats Sporting KC – full recap from Round of 32.",
    images: ["https://assets.goal.com/images/v3/getty-1705295975/crop/MM5DGNRXG45DEMBWHA5G433XMU5DAORTGM2A====/GettyImages-1705295975.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function USOpenCupRoundOf32Layout({ children }) {
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
            "headline": "US Open Cup Round of 32 2026: Multiple Upsets as Four MLS Teams Eliminated",
            "image": "https://assets.goal.com/images/v3/getty-1705295975/crop/MM5DGNRXG45DEMBWHA5G433XMU5DAORTGM2A====/GettyImages-1705295975.jpg?auto=webp&format=pjpg&width=1920&quality=80",
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