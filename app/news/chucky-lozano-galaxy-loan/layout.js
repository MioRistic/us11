// app/news/chucky-lozano-galaxy-loan/layout.js

export const metadata = {
  title: "LA Galaxy Close In on Chucky Lozano Loan — A California Lifeline for Both Sides",
  description:
    "LA Galaxy are in advanced talks to sign Hirving “Chucky” Lozano on loan from San Diego FC. Full details on the potential deal, salary split, and what it means for both clubs.",
  openGraph: {
    title: "LA Galaxy Close In on Chucky Lozano Loan",
    description:
      "Advanced talks under way for Mexican winger Hirving Lozano to join the Galaxy on loan from San Diego FC.",
    url: "https://www.us11fc.com/news/chucky-lozano-galaxy-loan",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2236485203/crop/MM5DGNBQGU5DCOJRGU5G433XMU5DAORSGEZA====/GettyImages-2236485203.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Hirving Chucky Lozano LA Galaxy loan talks",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Galaxy Close In on Chucky Lozano Loan",
    description: "Galaxy in advanced talks for Lozano loan from San Diego FC",
    images: [
      "https://assets.goal.com/images/v3/getty-2236485203/crop/MM5DGNBQGU5DCOJRGU5G433XMU5DAORSGEZA====/GettyImages-2236485203.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/chucky-lozano-galaxy-loan",
  },
};

export default function ChuckyLozanoGalaxyLoanLayout({ children }) {
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
              "LA Galaxy Close In on Chucky Lozano Loan — A California Lifeline for Both Sides",
            image:
              "https://assets.goal.com/images/v3/getty-2236485203/crop/MM5DGNBQGU5DCOJRGU5G433XMU5DAORSGEZA====/GettyImages-2236485203.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-04T20:00:00Z",
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
              "Chucky Lozano",
              "Hirving Lozano",
              "LA Galaxy",
              "San Diego FC",
              "MLS transfer",
              "loan deal",
              "MLS 2026",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}