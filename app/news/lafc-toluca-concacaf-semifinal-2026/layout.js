// app/news/lafc-toluca-concacaf-semifinal-2026/layout.js

export const metadata = {
  title: "LAFC Dramatically Defeat Toluca 2-1 in First Leg of 2026 Concacaf Champions Cup Semifinals",
  description:
    "Nkosi Tafari's stoppage-time header and Son Heung-min's assist give LAFC a narrow 2-1 advantage over Toluca in the first leg of the Concacaf Champions Cup semifinals.",
  openGraph: {
    title: "LAFC 2-1 Toluca: Dramatic Stoppage-Time Winner in CCC Semifinals",
    description: "Timothy Tillman and Nkosi Tafari score as LAFC take control of the tie against Toluca.",
    url: "https://www.us11fc.com/news/lafc-toluca-concacaf-semifinal-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2183798831/crop/MM5DGMZUGQ5DCOBYGE5G433XMU5DQMRVHI3TS===/GettyImages-2183798831.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "LAFC vs Toluca Concacaf Champions Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAFC 2-1 Toluca | Concacaf Champions Cup Semifinals",
    description: "Stoppage-time winner gives LAFC the edge over Toluca in first leg.",
    images: ["https://assets.goal.com/images/v3/getty-2183798831/crop/MM5DGMZUGQ5DCOBYGE5G433XMU5DQMRVHI3TS===/GettyImages-2183798831.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/lafc-toluca-concacaf-semifinal-2026"
  }
};

export default function LafcTolucaSemifinalLayout({ children }) {
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
            "headline": "LAFC Dramatically Defeat Toluca 2-1 in First Leg of 2026 Concacaf Champions Cup Semifinals",
            "image": "https://assets.goal.com/images/v3/getty-2183798831/crop/MM5DGMZUGQ5DCOBYGE5G433XMU5DQMRVHI3TS===/GettyImages-2183798831.jpg?auto=webp&format=pjpg&width=1920&quality=80",
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