import React from "react";

export const metadata = {
  title: "Concacaf Champions Cup 2026 Round of 16: MLS Makes History | US11",
  description:
    "Nine MLS teams reach the 2026 Concacaf Champions Cup Round of 16. Full breakdown of matchups, key players, and MLS's bid to challenge Liga MX dominance.",
  openGraph: {
    title: "Concacaf Champions Cup 2026 Round of 16: MLS Makes History | US11",
    description:
      "MLS has a record nine clubs in the Round of 16. Explore matchups, analysis, and what this round means for MLS's continental ambitions.",
    url: "https://www.us11fc.com/news/concacaf-round-16-2026",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2260983710/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2260983710.jpg",
        width: 1200,
        height: 630,
        alt: "Concacaf Champions Cup 2026 Round of 16 MLS teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concacaf Champions Cup 2026 Round of 16: MLS Makes History | US11",
    description:
      "Nine MLS teams in the Round of 16: full matchups, analysis, and implications for MLS in Concacaf.",
    url: "https://www.us11fc.com/news/concacaf-round-16-2026",
    images: [
      "https://assets.goal.com/images/v3/getty-2260983710/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2260983710.jpg",
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Concacaf Champions Cup 2026 Round of 16: MLS Makes History | US11",
            "image": "https://assets.goal.com/images/v3/getty-2260983710/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2260983710.jpg",
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
    </>
  );
}
