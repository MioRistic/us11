export const metadata = {
  title:
    "Cavan Sullivan Made History Against Mexico. The Next Goal Will Have to Be Harder.",
  description:
    "Cavan Sullivan became the youngest USMNT scorer at 17 years and five days in a 3-0 win over Mexico. The chip was his. The loose ball was Raúl Rangel's.",
  openGraph: {
    title:
      "Cavan Sullivan Made History Against Mexico. The Next Goal Will Have to Be Harder.",
    description:
      "A record that was four days old, a chip from 35 yards, and a goalkeeper who passed it to him.",
    url: "https://www.us11fc.com/news/sullivan-mexico-record",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2298472764/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472764.jpg?quality=60&auto=webp&format=pjpg&width=1920",
        width: 1200,
        height: 675,
        alt: "Cavan Sullivan celebrates his first USMNT goal against Mexico",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sullivan Made History vs Mexico. The Next One Has to Be Harder.",
    description:
      "Youngest USMNT scorer at 17 years, 5 days. USA 3-0 Mexico. The chip was his. The pass was Rangel's.",
    images: [
      "https://assets.goal.com/images/v3/getty-2298472764/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472764.jpg?quality=60&auto=webp&format=pjpg&width=1920",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/sullivan-mexico-record",
  },
};

export default function SullivanMexicoRecordLayout({ children }) {
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
              "Cavan Sullivan Made History Against Mexico. The Next Goal Will Have to Be Harder.",
            image:
              "https://assets.goal.com/images/v3/getty-2298472764/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472764.jpg?quality=60&auto=webp&format=pjpg&width=1920",
            datePublished: "2026-10-05T13:59:00Z",
            dateModified: "2026-10-05T13:59:00Z",
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
              "Cavan Sullivan",
              "USMNT",
              "Mexico",
              "Julian Hall",
              "Mauricio Pochettino",
              "State Farm Stadium",
            ],
            articleSection: "USMNT",
            description:
              "Cavan Sullivan scored the youngest goal in USMNT history in a 3-0 win over Mexico in Glendale.",
          }),
        }}
      />
    </div>
  );
}