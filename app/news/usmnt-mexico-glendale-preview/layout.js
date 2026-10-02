export const metadata = {
  title: "USMNT vs Mexico: The Friendly That Will Not Feel Like One",
  description:
    "The United States face Mexico at State Farm Stadium on Saturday. Pulisic is out. Sullivan is a maybe. The crowd in Glendale will not sound like home.",
  openGraph: {
    title: "USMNT vs Mexico: The Friendly That Will Not Feel Like One",
    description:
      "Kickoff is 10 p.m. ET in Glendale. First meeting since Mexico won the 2025 Gold Cup final 2-1.",
    url: "https://www.us11fc.com/news/usmnt-mexico-glendale-preview",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2297307455/crop/MM5DINZZHA5DENRZHE5G433XMU5DAORQ/GettyImages-2297307455.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "USMNT preparing to face Mexico",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT vs Mexico in Glendale Will Not Feel Like a Friendly",
    description:
      "Pulisic out. Sullivan a maybe. Mora trained. Richards already showed the edge against Chile.",
    images: [
      "https://assets.goal.com/images/v3/getty-2297307455/crop/MM5DINZZHA5DENRZHE5G433XMU5DAORQ/GettyImages-2297307455.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-mexico-glendale-preview",
  },
};

export default function UsmntMexicoPreviewLayout({ children }) {
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
            headline: "USMNT vs Mexico: The Friendly That Will Not Feel Like One",
            image:
              "https://assets.goal.com/images/v3/getty-2297307455/crop/MM5DINZZHA5DENRZHE5G433XMU5DAORQ/GettyImages-2297307455.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-02T13:54:00Z",
            dateModified: "2026-10-02T13:54:00Z",
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
              "USMNT",
              "Mexico",
              "Cavan Sullivan",
              "Gilberto Mora",
              "Chris Richards",
              "Mauricio Pochettino",
              "State Farm Stadium",
            ],
            articleSection: "USMNT",
            description:
              "Preview of the United States vs Mexico friendly in Glendale, the first meeting since the 2025 Gold Cup final.",
          }),
        }}
      />
    </div>
  );
}