// app/news/pulisic-nycfc-interest/layout.js

import React from 'react';

export const metadata = {
  title: "Is Christian Pulisic Heading Back to MLS? NYCFC Interested, Milan Say “Not for Sale”",
  description:
    "New York City FC have shown interest in bringing Christian Pulisic back to MLS after the 2026 World Cup, but AC Milan have made it clear that the American star is not for sale at the moment.",
  keywords: [
    "Christian Pulisic",
    "Pulisic MLS",
    "NYCFC Pulisic",
    "AC Milan",
    "Pulisic transfer",
    "USMNT",
    "MLS 2027",
    "Pulisic return to MLS",
  ],
  authors: [{ name: "Mio Ristić" }],
  openGraph: {
    title: "Is Christian Pulisic Heading Back to MLS? NYCFC Interested, Milan Say “Not for Sale”",
    description:
      "NYCFC are exploring a move for Christian Pulisic after the 2026 World Cup. However, AC Milan currently have no intention of selling their star player.",
    url: "https://us11fc.com/news/pulisic-nycfc-interest",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Christian Pulisic AC Milan",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulisic to MLS? NYCFC Interested, Milan Say No",
    description:
      "New York City FC have made an inquiry for Christian Pulisic, but AC Milan are not willing to sell the American star.",
    images: [
      "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
  },
  alternates: {
    canonical: "https://us11fc.com/news/pulisic-nycfc-interest",
  },
};

export default function PulisicNYCFCInterestLayout({ children }) {
  return (
    <>
      {children}

      {/* Optional: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Is Christian Pulisic Heading Back to MLS? NYCFC Interested, Milan Say “Not for Sale”",
            image: [
              "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            ],
            datePublished: "2026-06-25T00:00:00Z",
            dateModified: "2026-06-25T00:00:00Z",
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
            description:
              "New York City FC have shown interest in Christian Pulisic, but AC Milan have no plans to sell the American star player.",
          }),
        }}
      />
    </>
  );
}