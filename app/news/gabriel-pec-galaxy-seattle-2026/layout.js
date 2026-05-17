// ./app/news/gabriel-pec-galaxy-seattle-2026/layout.js
import React from 'react';

// 🟢 Server component – metadata može biti eksportovana
export const metadata = {
  title:
    "Gabriel Pec Runs Riot as Galaxy Stun Seattle and Climb Into Western Conference Playoff Spots",

  description:
    "Gabriel Pec delivered a goal and an assist as the LA Galaxy stunned Seattle Sounders 2-0 at Lumen Field, ending Seattle’s unbeaten home run and boosting Galaxy’s playoff hopes.",

  keywords: [
    "Gabriel Pec",
    "LA Galaxy",
    "Seattle Sounders",
    "MLS 2026",
    "Galaxy vs Seattle",
    "Greg Vanney",
    "Marco Reus MLS",
    "Matheus Nascimento",
    "MLS Western Conference",
    "US11 MLS analysis"
  ],

  openGraph: {
    title:
      "Gabriel Pec Leads Galaxy to Huge Road Win Over Seattle",

    description:
      "The Brazilian winger starred with a goal and assist as LA Galaxy shocked Seattle Sounders 2-0 at Lumen Field.",

    url:
      "https://www.us11fc.com/news/gabriel-pec-galaxy-seattle-2026",

    siteName: "US11",

    images: [
      {
        url:
          "https://ca-times.brightspotcdn.com/dims4/default/5324370/2147483647/strip/false/crop/7754x5169+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fef%2F48%2F37ba8e174430bbc5ac147024a175%2F2264835118.jpg",
        width: 1200,
        height: 800,
        alt:
          "Gabriel Pec celebrates during LA Galaxy victory over Seattle Sounders"
      }
    ],

    locale: "en_US",
    type: "article"
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Gabriel Pec Shines as Galaxy Shock Seattle at Lumen Field",

    description:
      "LA Galaxy earned a massive 2-0 road win over Seattle Sounders behind a brilliant performance from Gabriel Pec.",

    images: [
      "https://ca-times.brightspotcdn.com/dims4/default/5324370/2147483647/strip/false/crop/7754x5169+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fef%2F48%2F37ba8e174430bbc5ac147024a175%2F2264835118.jpg"
    ],

    creator: "@US11FC"
  },

  alternates: {
    canonical:
      "https://www.us11fc.com/news/gabriel-pec-galaxy-seattle-2026"
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
              "Gabriel Pec Runs Riot as Galaxy Stun Seattle and Climb Into Western Conference Playoff Spots",

            "image":
              "https://ca-times.brightspotcdn.com/dims4/default/5324370/2147483647/strip/false/crop/7754x5169+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fef%2F48%2F37ba8e174430bbc5ac147024a175%2F2264835118.jpg",

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