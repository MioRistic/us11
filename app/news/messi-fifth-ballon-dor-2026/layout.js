export const metadata = {
  title:
    "Messi Finished Fifth in the Ballon d’Or. At 39. In MLS.",
  description:
    "Lionel Messi finished fifth in the 2026 Ballon d’Or rankings at age 39 while playing for Inter Miami in MLS. He placed ahead of Haaland, Dembélé and others.",
  openGraph: {
    title:
      "Messi Finished Fifth in the Ballon d’Or. At 39. In MLS.",
    description:
      "At 39 and based in Major League Soccer, Lionel Messi still finished fifth in the 2026 Ballon d’Or, ahead of several top European stars.",
    url: "https://www.us11fc.com/news/messi-fifth-ballon-dor-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2301135796/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2301135796.jpg?quality=60&auto=webp&format=pjpg&width=2160",
        width: 2160,
        height: 1215,
        alt: "Lionel Messi Inter Miami Ballon d'Or 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messi Finished Fifth in the Ballon d’Or. At 39. In MLS.",
    description:
      "Lionel Messi placed fifth in the 2026 Ballon d’Or at age 39 while playing in MLS for Inter Miami.",
    images: [
      "https://assets.goal.com/images/v3/getty-2301135796/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2301135796.jpg?quality=60&auto=webp&format=pjpg&width=2160",
    ],
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
            headline:
              "Messi Finished Fifth in the Ballon d’Or. At 39. In MLS.",
            image:
              "https://assets.goal.com/images/v3/getty-2301135796/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2301135796.jpg?quality=60&auto=webp&format=pjpg&width=2160",
            datePublished: "2026-10-28T00:00:00Z",
            dateModified: "2026-10-28T00:00:00Z",
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
            keywords: [
              "Lionel Messi",
              "Ballon d'Or 2026",
              "Inter Miami",
              "MLS",
              "Harry Kane",
              "Lamine Yamal",
            ],
            articleSection: "MLS",
            description:
              "Lionel Messi finished fifth in the 2026 Ballon d’Or at age 39 while playing for Inter Miami in Major League Soccer.",
          }),
        }}
      />
    </>
  );
}