import React from "react";

export const metadata = {
  title: "Christian Pulisic Likely to Miss AC Milan vs. Lazio | US11",
  description:
    "AC Milan could be without Christian Pulisic for their Serie A clash against Lazio, as Allegri prioritizes caution after the USMNT star’s recent hamstring injury.",
  openGraph: {
    title: "Christian Pulisic Likely to Miss AC Milan vs. Lazio | US11",
    description:
      "Full details on Christian Pulisic’s potential absence for AC Milan against Lazio, injury updates, and squad implications.",
    url: "https://www.us11fc.com/blog/pulisic-likely-miss-ac-milan-lazio",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2247574198/crop/MM5DENJXG45DCNBVGA5G433XMU5DAORRGM2A====/GettyImages-2247574198.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 630,
        alt: "Christian Pulisic training with AC Milan",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Pulisic Likely to Miss AC Milan vs. Lazio | US11",
    description:
      "Allegri confirms Pulisic is very likely to miss AC Milan’s Serie A clash against Lazio due to muscle discomfort.",
    images: [
      "https://assets.goal.com/images/v3/getty-2247574198/crop/MM5DENJXG45DCNBVGA5G433XMU5DAORRGM2A====/GettyImages-2247574198.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@us11",
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
            "headline": "Christian Pulisic Likely to Miss AC Milan vs. Lazio | US11",
            "image": "https://assets.goal.com/images/v3/getty-2247574198/crop/MM5DENJXG45DCNBVGA5G433XMU5DAORRGM2A====/GettyImages-2247574198.jpg?auto=webp&format=pjpg&width=3840&quality=60",
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
