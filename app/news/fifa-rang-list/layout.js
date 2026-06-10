import React from 'react';

export const metadata = {
  title: "2026 World Cup Power Rankings: USMNT Enter the Tournament as the Highest-Ranked Host Nation",
  
  description:
    "The latest 2026 World Cup Power Rankings place the USMNT at No.17. Full rankings, analysis and what it means for USA, Mexico and Canada.",

  openGraph: {
    title: "2026 World Cup Power Rankings: USMNT Enter Tournament Ranked No. 17",
    description:
      "USMNT ranked 17th in the latest Power Rankings ahead of the 2026 World Cup. Full top 10 and analysis of USA, Mexico and Canada.",
    url: "https://www.us11fc.com/news/fifa-rang-list",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/9m39nVB1/images-voltax-Media-Library-mmsport-si-01ktccszn19tx200d8ag.webp",
        width: 1200,
        height: 675,
        alt: "2026 World Cup Power Rankings - USMNT",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "2026 World Cup Power Rankings: USMNT No.17 as Top Host Nation",
    description:
      "USMNT ranked 17th in the latest Power Rankings ahead of the 2026 World Cup",
    images: [
      "https://i.ibb.co/9m39nVB1/images-voltax-Media-Library-mmsport-si-01ktccszn19tx200d8ag.webp",
    ],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/fifa-rang-list",
  },
};

export default function FifaRangListLayout({ children }) {
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
            headline: "2026 World Cup Power Rankings: USMNT Enter the Tournament as the Highest-Ranked Host Nation",
            image: "https://i.ibb.co/9m39nVB1/images-voltax-Media-Library-mmsport-si-01ktccszn19tx200d8ag.webp",
            datePublished: "2026-06-10T08:00:00Z",
            dateModified: "2026-06-10T12:00:00Z",
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
              "World Cup 2026",
              "Power Rankings",
              "USMNT",
              "United States",
              "Mexico",
              "Canada",
              "FIFA World Cup",
              "Mauricio Pochettino",
              "Great Park",
              "Orange County",
              "2026 Power Rankings"
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}