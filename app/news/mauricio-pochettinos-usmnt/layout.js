// app/blog/mauricio-pochettinos-usmnt-layout.jsx
export const metadata = {
  title: "Mauricio Pochettino’s USMNT: Momentum, Identity, and Cautious Optimism",
  description:
    "A detailed analysis of the USMNT under Mauricio Pochettino, highlighting tactical evolution, emerging leaders, and the path toward the 2026 World Cup.",
  openGraph: {
    title: "Mauricio Pochettino’s USMNT: Momentum, Identity, and Cautious Optimism",
    description:
      "Explore how Mauricio Pochettino is shaping the USMNT with tactical structure, young talent development, and a collective team identity ahead of the 2026 World Cup.",
    url: "https://www.us11fc.com/blog/mauricio-pochettinos-usmnt",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-1185973972/crop/MM5DEMZTGQ5DCMZRGM5G433XMU5DENRTHI3TQ===/GettyImages-1185973972.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1920,
        height: 1080,
        alt: "USMNT under Mauricio Pochettino",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauricio Pochettino’s USMNT: Momentum, Identity, and Cautious Optimism | US11 Blog",
    description:
      "Analyze the rise of the USMNT under Pochettino, their tactical approach, young leaders, and cautious optimism ahead of World Cup 2026.",
    images: [
      "https://assets.goal.com/images/v3/getty-1185973972/crop/MM5DEMZTGQ5DCMZRGM5G433XMU5DENRTHI3TQ===/GettyImages-1185973972.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@us11",
  },
};

export default function MauricioPochettinoUSMNTLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Mauricio Pochettino's USMNT: Momentum, Identity, and Cautious Optimism",
            "image": "https://assets.goal.com/images/v3/getty-1185973972/crop/MM5DEMZTGQ5DCMZRGM5G433XMU5DENRTHI3TQ===/GettyImages-1185973972.jpg?auto=webp&format=pjpg&width=1920&quality=60",
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
