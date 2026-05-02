// app/blog/pulisic-derby-layout.jsx
export const metadata = {
  title: "Christian Pulisic Delivers in the Derby: Why AC Milan’s American Star Is Becoming Their Go-To Leader",
  description:
    "Christian Pulisic showed his leadership and decisive quality in the Derby della Madonnina, helping AC Milan secure a crucial win over Inter.",
  openGraph: {
    title: "Christian Pulisic Delivers in the Derby: Why AC Milan’s American Star Is Becoming Their Go-To Leader",
    description:
      "A deep dive into Pulisic's match-winning performance against Inter, analyzing his impact, instincts, and leadership for AC Milan.",
    url: "https://www.us11fc.com/blog/pulisic-inter-milan",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2248113240/crop/MM5DCNJQGQ5DQNBWHJXG653FHI2DIMJ2G4ZA====/GettyImages-2248113240.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 3840,
        height: 2160,
        alt: "Christian Pulisic celebrates derby goal",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Pulisic Delivers in the Derby | US11 Blog",
    description:
      "Christian Pulisic starred in AC Milan's derby victory over Inter, showing why he is becoming the club's go-to leader.",
    images: [
      "https://assets.goal.com/images/v3/getty-2248113240/crop/MM5DCNJQGQ5DQNBWHJXG653FHI2DIMJ2G4ZA====/GettyImages-2248113240.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@us11",
  },
};

export default function PulisicDerbyLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Christian Pulisic Delivers in the Derby: Why AC Milan's American Star Is Becoming Their Go-To Leader",
            "image": "https://assets.goal.com/images/v3/getty-2248113240/crop/MM5DCNJQGQ5DQNBWHJXG653FHI2DIMJ2G4ZA====/GettyImages-2248113240.jpg?auto=webp&format=pjpg&width=3840&quality=60",
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
