// app/news/kily-gonzalez-inter-miami/layout.js

export const metadata = {
  title:
    "Inter Miami Appoint Kily González — What the Rosario Connection Actually Brings",
  description:
    "Inter Miami have appointed Cristian “Kily” González as head coach. A look at his playing career, coaching record, and what he actually brings a slumping Messi-led roster.",
  openGraph: {
    title:
      "Inter Miami Appoint Kily González — What the Rosario Connection Actually Brings",
    description:
      "Miami’s third Argentine coach of 2026 arrives mid-slump. Who Kily González is — and what he can realistically change.",
    url: "https://www.us11fc.com/news/kily-gonzalez-inter-miami",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-1736243127/crop/MM5DGNZQGA5DEMBYGE5G433XMU5DAORUGI======/GettyImages-1736243127.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 2048,
        height: 1152,
        alt: "Kily González Inter Miami head coach",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inter Miami Appoint Kily González as Head Coach",
    description:
      "A Rosario connection, a thin coaching résumé, and a team that has stopped winning.",
    images: [
      "https://assets.goal.com/images/v3/getty-1736243127/crop/MM5DGNZQGA5DEMBYGE5G433XMU5DAORUGI======/GettyImages-1736243127.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/kily-gonzalez-inter-miami",
  },
};

export default function KilyGonzalezInterMiamiLayout({ children }) {
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
              "Inter Miami Appoint Kily González — What the Rosario Connection Actually Brings",
            image:
              "https://assets.goal.com/images/v3/getty-1736243127/crop/MM5DGNZQGA5DEMBYGE5G433XMU5DAORUGI======/GettyImages-1736243127.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-28T13:00:00Z",
            dateModified: "2026-08-28T13:48:00Z",
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
              "Kily González",
              "Inter Miami",
              "Lionel Messi",
              "MLS",
              "Guillermo Hoyos",
              "Javier Mascherano",
              "Inter Miami coach",
              "Rosario",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}