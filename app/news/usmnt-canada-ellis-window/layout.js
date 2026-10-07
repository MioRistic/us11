export const metadata = {
  title: "USMNT Beat Canada 1-0 as Justin Ellis Caps a 4-0 Window",
  description:
    "Justin Ellis scored the only goal as the United States beat Canada 1-0 in St. Paul. Peru, Chile, Mexico and Canada: four wins, one shot on target in the last one.",
  openGraph: {
    title: "USMNT Beat Canada 1-0 as Justin Ellis Caps a 4-0 Window",
    description:
      "Ellis had the first goal of the window and the last. Schwake's first start was a shutout. The match was smaller than the streak.",
    url: "https://www.us11fc.com/news/usmnt-canada-ellis-window",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2298472055/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472055.jpg?quality=60&auto=webp&format=pjpg&width=1920",
        width: 1200,
        height: 675,
        alt: "Justin Ellis scores for the USMNT against Canada",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT Beat Canada 1-0. Ellis Caps a 4-0 Window.",
    description:
      "One shot on target in St. Paul. Ellis scored limping. Four wins since the World Cup.",
    images: [
      "https://assets.goal.com/images/v3/getty-2298472055/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472055.jpg?quality=60&auto=webp&format=pjpg&width=1920",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-canada-ellis-window",
  },
};

export default function UsmntCanadaEllisLayout({ children }) {
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
            headline: "USMNT Beat Canada 1-0 as Justin Ellis Caps a 4-0 Window",
            image:
              "https://assets.goal.com/images/v3/getty-2298472055/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472055.jpg?quality=60&auto=webp&format=pjpg&width=1920",
            datePublished: "2026-10-07T02:23:00Z",
            dateModified: "2026-10-07T02:23:00Z",
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
              "Justin Ellis",
              "USMNT",
              "Canada",
              "Mauricio Pochettino",
              "Brian Schwake",
              "Allianz Field",
            ],
            articleSection: "USMNT",
            description:
              "The United States beat Canada 1-0 in St. Paul to finish a four-game winning window. Justin Ellis scored the only goal.",
          }),
        }}
      />
    </div>
  );
}
