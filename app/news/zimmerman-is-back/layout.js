export const metadata = {
    title: "Walker Zimmerman Is Back — And So Is Nashville’s Defensive Confidence",
    description:
      "Walker Zimmerman’s return brings leadership and tactical stability to Nashville SC as they push toward the playoffs.",
    openGraph: {
      title: "Walker Zimmerman Is Back — And So Is Nashville’s Defensive Confidence",
      description:
        "Walker Zimmerman’s return brings leadership and tactical stability to Nashville SC as they push toward the playoffs.",
      url: "https://www.us11fc.com/blog/zimmerman-is-back",
      siteName: "US11 FC",
      images: [
        {
          url: "https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju", // zameni stvarnom slikom ako imaš
          width: 1200,
          height: 800,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Walker Zimmerman Is Back — And So Is Nashville’s Defensive Confidence",
      description:
        "Walker Zimmerman’s return brings leadership and tactical stability to Nashville SC as they push toward the playoffs.",
      images: ["https://example.com/images/zimmerman-hero.jpg"], // zameni stvarnom slikom
      creator: "@us11fc", // zameni svojim Twitter handleom
    },
  };
  
  export default function ZimmermanLayout({ children }) {
    return (
      <>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "Walker Zimmerman Is Back — And So Is Nashville's Defensive Confidence",
              "image": "https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju",
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
  