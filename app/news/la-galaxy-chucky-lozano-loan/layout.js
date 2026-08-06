// app/news/la-galaxy-chucky-lozano-loan/layout.js

export const metadata = {
  title: "LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC",
  description:
    "The LA Galaxy are closing in on a loan deal for Hirving “Chucky” Lozano from San Diego FC. Full details on the Designated Player move and what it means for both clubs.",
  openGraph: {
    title: "LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC",
    description:
      "Sources: Galaxy near agreement to bring Mexican winger Chucky Lozano to Carson on loan as a Designated Player.",
    url: "https://www.us11fc.com/news/la-galaxy-chucky-lozano-loan",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Hirving Chucky Lozano LA Galaxy",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Galaxy Finalizing Chucky Lozano Loan Deal",
    description:
      "Galaxy close in on loan for Mexican winger from San Diego FC as Designated Player.",
    images: [
      "https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/la-galaxy-chucky-lozano-loan",
  },
};

export default function ChuckyLozanoGalaxyLoanLayout({ children }) {
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
              "LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC",
            image:
              "https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-06T20:00:00Z",
            dateModified: "2026-08-06T22:00:00Z",
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
              "Designated Player",
              "MLS news",
            ],
            articleSection: "MLS",
            description:
              "The LA Galaxy are finalizing a loan deal for Hirving Chucky Lozano from San Diego FC.",
          }),
        }}
      />
    </div>
  );
}