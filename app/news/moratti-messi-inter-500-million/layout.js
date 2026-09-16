export const metadata = {
  title:
    "Moratti Says He Offered Messi €500m. Messi Never Opened the Letter.",
  description:
    "Former Inter president Massimo Moratti says he sent Barcelona a €500 million offer for Lionel Messi in 2012. Messi, he claims, never opened the letter.",
  openGraph: {
    title:
      "Moratti Says He Offered Messi €500m. Messi Never Opened the Letter.",
    description:
      "A 2012 Inter approach, retold in 2026. The documented bid remains Laporta’s 2006 rejection of €250 million.",
    url: "https://www.us11fc.com/news/moratti-messi-inter-500-million",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2294966080/crop/MM5DIOBWGM5DENZTGU5G433XMU5DAORTG4ZA====/GettyImages-2294966080.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Lionel Messi during his Barcelona years",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moratti Says He Offered Messi €500m in 2012",
    description:
      "Messi never opened the letter, Moratti says. He wanted to retire at Barcelona. He left in 2021 anyway.",
    images: [
      "https://assets.goal.com/images/v3/getty-2294966080/crop/MM5DIOBWGM5DENZTGU5G433XMU5DAORTG4ZA====/GettyImages-2294966080.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/moratti-messi-inter-500-million",
  },
};

export default function MorattiMessiInterOfferLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Moratti Says He Offered Messi €500m. Messi Never Opened the Letter.",
            image:
              "https://assets.goal.com/images/v3/getty-2294966080/crop/MM5DIOBWGM5DENZTGU5G433XMU5DAORTG4ZA====/GettyImages-2294966080.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-16T12:57:00Z",
            dateModified: "2026-09-16T12:57:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristic",
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
              "Massimo Moratti",
              "Inter Milan",
              "Barcelona",
              "Joan Laporta",
            ],
            articleSection: "Soccer",
            description:
              "Massimo Moratti says Inter offered Lionel Messi €500 million in 2012 and that Messi refused to open the letter.",
          }),
        }}
      />
    </div>
  );
}