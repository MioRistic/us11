export const metadata = {
  title: "Chicago Fire Blaze Past Orlando in Wild Card Clash",
  description:
    "Chicago Fire defeated Orlando City 3â€“1 in the 2025 MLS Wild Card match, with Brian GutiÃ©rrez and Hugo Cuypers leading the charge. Read the full match report on US11.",
  openGraph: {
    title: "Chicago Fire Blaze Past Orlando in Wild Card Clash",
    description:
      "Chicago Fire dominated Orlando City 3â€“1 to advance in the Audi 2025 MLS Cup Playoffs. GutiÃ©rrez and Cuypers delivered crucial goals in a commanding performance.",
    url: "https://www.us11fc.com/blog/chicago-orlando-playoffs",
    siteName: "US11",
    images: [
      {
        url: "https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1745997572/chicago-fire-fc-vs-orlando-city-sc-2025-05-03.jpg",
        width: 1200,
        height: 800,
        alt: "Chicago Fire celebrate their playoff win over Orlando City",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Fire Blaze Past Orlando in Wild Card Clash | US11 Blog",
    description:
      "GutiÃ©rrez and Cuypers power Chicago Fire to a 3â€“1 victory over Orlando City in the 2025 MLS Wild Card match. Full story on US11.",
    images: [
      "https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1745997572/chicago-fire-fc-vs-orlando-city-sc-2025-05-03.jpg",
    ],
    creator: "@us11",
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
            "headline": "Chicago Fire Blaze Past Orlando in Wild Card Clash",
            "image": "https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1745997572/chicago-fire-fc-vs-orlando-city-sc-2025-05-03.jpg",
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

