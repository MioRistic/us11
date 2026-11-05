export const metadata = {
  title: "The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1",
  description:
    "MLS released its official 2026 jersey sales ranking. Messi finished first for the fourth straight year, followed by Son Heung-Min and Thomas Müller. Full list from 10 to 1 with where to buy each kit.",
  openGraph: {
    title: "The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1",
    description:
      "Official MLS jersey sales ranking for 2026. Messi still No. 1, with Son, Müller, Lewandowski and Griezmann also in the top five.",
    url: "https://www.mlsstore.com/content/ws/all/55bfdb35-a7c7-406b-9192-649a14ae0501__2400X1350.jpg",
    siteName: "US11",
    images: [
      {
        url: "https://www.mlsstore.com/content/ws/all/55bfdb35-a7c7-406b-9192-649a14ae0501__2400X1350.jpg",
        width: 1080,
        height: 720,
        alt: "Lionel Messi Inter Miami – top-selling MLS jersey 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1",
    description:
      "Messi tops MLS jersey sales for the fourth year in a row. Full official ranking from 10 to 1.",
    images: [
      "https://www.mlsstore.com/content/ws/all/55bfdb35-a7c7-406b-9192-649a14ae0501__2400X1350.jpg",
    ],
  },
};

export default function Layout({ children }) {
  return (
    <div>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1",
            image:
              "https://www.mlsstore.com/content/ws/all/55bfdb35-a7c7-406b-9192-649a14ae0501__2400X1350.jpg",
            datePublished: "2026-11-04T00:00:00Z",
            dateModified: "2026-11-04T00:00:00Z",
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
              "MLS jersey sales 2026",
              "Lionel Messi jersey",
              "Son Heung-Min",
              "Thomas Müller",
              "Robert Lewandowski",
              "Antoine Griezmann",
              "Cavan Sullivan",
              "best selling MLS jerseys",
              "Inter Miami",
              "LAFC",
            ],
            articleSection: "MLS",
            description:
              "Official MLS ranking of the best-selling player jerseys of 2026. Messi first for the fourth straight year, with Son, Müller, Lewandowski and Griezmann also in the top five.",
          }),
        }}
      />
    </div>
  );
}