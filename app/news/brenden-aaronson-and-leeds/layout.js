import React from "react";

export const metadata = {
  title: "Brenden Aaronson and Leeds United: Is It Time to Reevaluate His Role? | US11",
  description:
    "Analysis of Brenden Aaronson's role at Leeds United, reviewing his recent performances, stats, and fan reactions.",
  openGraph: {
    title: "Brenden Aaronson and Leeds United | US11",
    description:
      "Reviewing Brenden Aaronsonâ€™s playing time and impact at Leeds United. Stats, performances, and tactical insights.",
    url: "https://us11fc.com/blog/brenden-aaronson-and-leeds",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2165145829/crop/MM5DEMZZGA5DCMZUGQ5G433XMU5DEOJYHIYTGMA=/GettyImages-2165145829.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 630,
        alt: "Brenden Aaronson at Leeds United",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brenden Aaronson and Leeds United | US11",
    description:
      "Analysis of Brenden Aaronsonâ€™s role and performances at Leeds United.",
    url: "https://us11fc.com/blog/brenden-aaronson-and-leeds",
    images: [
      "https://assets.goal.com/images/v3/getty-2165145829/crop/MM5DEMZZGA5DCMZUGQ5G433XMU5DEOJYHIYTGMA=/GettyImages-2165145829.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
  },
};

export default function ({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Brenden Aaronson and Leeds United: Is It Time to Reevaluate His Role? | US11",
            "image": "https://assets.goal.com/images/v3/getty-2165145829/crop/MM5DEMZZGA5DCMZUGQ5G433XMU5DEOJYHIYTGMA=/GettyImages-2165145829.jpg?auto=webp&format=pjpg&width=3840&quality=60",
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

