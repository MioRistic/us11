export const metadata = {
  title:
    "Messi Leads Inter Miami to Campeones Cup in Kily González’s First Match",
  description:
    "Lionel Messi scored his 100th Inter Miami goal and assisted Casemiro as Miami beat Cruz Azul 2-0 to win the Campeones Cup in Cristian Kily González’s debut.",
  openGraph: {
    title:
      "Messi Leads Inter Miami to Campeones Cup in Kily González’s First Match",
    description:
      "A header in the 24th minute made it 100 for Messi in pink. Casemiro headed in the second. González lifted a cup on night one.",
    url: "https://www.us11fc.com/news/messi-campeones-cup-kily-debut",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2295673367/crop/MM5DGNRSGU5DEMBTHE5G433XMU5DAORQ/GettyImages-2295673367.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Lionel Messi celebrates after scoring for Inter Miami against Cruz Azul",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi Hits 100 as Miami Win Campeones Cup on Kily’s Debut",
    description:
      "Inter Miami beat Cruz Azul 2-0. Messi scored and assisted. Kily González won a trophy in his first match.",
    images: [
      "https://assets.goal.com/images/v3/getty-2295673367/crop/MM5DGNRSGU5DEMBTHE5G433XMU5DAORQ/GettyImages-2295673367.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/messi-campeones-cup-kily-debut",
  },
};

export default function MessiCampeonesCupKilyDebutLayout({ children }) {
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
              "Messi Leads Inter Miami to Campeones Cup in Kily González’s First Match",
            image:
              "https://assets.goal.com/images/v3/getty-2295673367/crop/MM5DGNRSGU5DEMBTHE5G433XMU5DAORQ/GettyImages-2295673367.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-17T15:17:00Z",
            dateModified: "2026-09-17T15:17:00Z",
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
              "Inter Miami",
              "Campeones Cup",
              "Cruz Azul",
              "Kily Gonzalez",
              "Casemiro",
              "Luis Suarez",
            ],
            articleSection: "MLS",
            description:
              "Lionel Messi scored his 100th Inter Miami goal as Miami beat Cruz Azul 2-0 to win the Campeones Cup in Kily González’s first match.",
          }),
        }}
      />
    </div>
  );
}