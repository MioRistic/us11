// ./app/news/hudson-river-derby-red-bulls-nycfc-2026/layout.js
import React from 'react';

// 🟢 Server component – metadata može biti eksportovana
export const metadata = {
  title:
    "Hudson River Derby Delivers Another Classic as Red Bulls and NYCFC Split the Points in Fiery 1-1 Draw",

  description:
    "The New York Red Bulls and NYCFC played to a dramatic 1-1 draw in another intense Hudson River Derby clash packed with momentum swings, tactical battles, and playoff implications ahead of the World Cup break.",

  keywords: [
    "Hudson River Derby",
    "NY Red Bulls vs NYCFC",
    "NYCFC MLS 2026",
    "Red Bulls MLS 2026",
    "MLS rivalry",
    "Michael Bradley Red Bulls",
    "Jorge Ruvalcaba",
    "Andres Perea",
    "MLS Matchday 2026",
    "US11 MLS analysis"
  ],

  openGraph: {
    title:
      "Hudson River Derby Delivers Another Classic in Tense 1-1 Battle",

    description:
      "Another fiery chapter in the Hudson River Derby ended level as Red Bulls and NYCFC shared the points in a dramatic New York showdown.",

    url:
      "https://www.us11fc.com/news/hudson-river-derby-red-bulls-nycfc-2026",

    siteName: "US11",

    images: [
      {
        url:
          "https://upload.wikimedia.org/wikipedia/en/5/5d/Hudson_River_Derby_Foundation_logo.png",
        width: 1200,
        height: 800,
        alt:
          "Hudson River Derby between New York Red Bulls and NYCFC"
      }
    ],

    locale: "en_US",
    type: "article"
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Hudson River Derby Ends 1-1 in Another Heated MLS Classic",

    description:
      "Red Bulls and NYCFC split the points in a dramatic Hudson River Derby packed with intensity, big moments, and playoff implications.",

    images: [
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Hudson_River_Derby_Foundation_logo.png"
    ],

    creator: "@US11FC"
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/hudson-river-derby-red-bulls-nycfc-2026"
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
            "headline":
              "Hudson River Derby Delivers Another Classic as Red Bulls and NYCFC Split the Points in Fiery 1-1 Draw",

            "image":
              "https://upload.wikimedia.org/wikipedia/en/5/5d/Hudson_River_Derby_Foundation_logo.png",

            "datePublished": "2026-05-14T12:00:00Z",
            "dateModified": "2026-05-14T12:00:00Z",

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