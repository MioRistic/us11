export const metadata = {
  title: "Pochettino and USMNT: Has He Finally Found the Right Path?",
  description:
    "Mauricio Pochettino is shaping the USMNT with tactical maturity and clear roles. Read the full analysis of the Paraguay friendly and upcoming matches.",
  openGraph: {
    title: "Pochettino and USMNT: Has He Finally Found the Right Path?",
    description:
      "USMNT showed signs of tactical growth under Mauricio Pochettino in the friendly against Paraguay. Full analysis on US11.",
    url: "https://www.us11fc.com/blog/pochettino-usmnt-analysis",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt4724cfaf9e2f7ee3/crop/MM5DCNZTGQ5DSNZVHJXG653FHI4TAORQ/poch-point169.jpeg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
        alt: "Mauricio Pochettino coaching USMNT",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pochettino and USMNT: Has He Finally Found the Right Path? | US11 Blog",
    description:
      "Mauricio Pochettino is starting to implement his vision with the USMNT. Read the full match analysis and player development insights on US11.",
    images: [
      "https://assets.goal.com/images/v3/blt4724cfaf9e2f7ee3/crop/MM5DCNZTGQ5DSNZVHJXG653FHI4TAORQ/poch-point169.jpeg?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@us11",
  },
};

export default function PochettinoUSMNTLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Pochettino and USMNT: Has He Finally Found the Right Path?",
            "image": "https://assets.goal.com/images/v3/blt4724cfaf9e2f7ee3/crop/MM5DCNZTGQ5DSNZVHJXG653FHI4TAORQ/poch-point169.jpeg?auto=webp&format=pjpg&width=1920&quality=60",
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
