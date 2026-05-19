// ./app/news/mls-coaching-changes-2026/layout.js
import React from 'react';

export const metadata = {
  title:
    "Two MLS Clubs Hit the Reset Button: Columbus and Austin Clean House Amid Dismal Starts",
    
  description:
    "Columbus Crew and Austin FC both make dramatic coaching changes before the 2026 World Cup break. Henrik Rydström fired after 14 games, while Austin parts ways with Nico Estévez and Rodolfo Borrell. Full MLS analysis by Mio Ristić.",

  keywords: [
    "MLS coaching changes 2026",
    "Columbus Crew Henrik Rydström fired",
    "Austin FC Nico Estevez",
    "Austin FC Rodolfo Borrell",
    "MLS coaching news",
    "MLS managerial changes",
    "Columbus Crew 2026",
    "Austin FC 2026",
    "MLS World Cup break",
    "US11 MLS analysis"
  ],

  openGraph: {
    title:
      "MLS Coaching Chaos: Columbus Crew and Austin FC Fire Managers Amid Poor Starts",

    description:
      "Two MLS clubs hit the reset button before the World Cup break as Columbus Crew and Austin FC make major leadership changes. Full breakdown and analysis.",

    url:
      "https://www.us11fc.com/news/mls-coaching-changes-2026",

    siteName: "US11",

    images: [
      {
        url: "https://i.ibb.co/Zzy56Nwr/Untitled-design-6.png",
        width: 1200,
        height: 675,
        alt:
          "MLS coaching changes involving Columbus Crew and Austin FC"
      }
    ],

    locale: "en_US",
    type: "article"
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MLS Coaching Chaos: Columbus and Austin Make Major Changes",

    description:
      "Columbus Crew fire Henrik Rydström while Austin FC clean house before the 2026 World Cup break. Full MLS analysis by US11.",

    images: [
      "https://i.ibb.co/Zzy56Nwr/Untitled-design-6.png"
    ],

    creator: "@US11FC"
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/mls-coaching-changes-2026"
  }
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",

            headline:
              "Two MLS Clubs Hit the Reset Button: Columbus and Austin Clean House Amid Dismal Starts",

            image:
              "https://i.ibb.co/Zzy56Nwr/Untitled-design-6.png",

            datePublished: "2026-05-18T12:00:00Z",
            dateModified: "2026-05-18T12:00:00Z",

            author: {
              "@type": "Person",
              name: "Mio Ristić"
            },

            publisher: {
              "@type": "Organization",
              name: "US11",
              logo: {
                "@type": "ImageObject",
                url: "https://us11fc.com/logo.png"
              }
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.us11fc.com/news/mls-coaching-changes-2026"
            }
          })
        }}
      />
    </div>
  );
}