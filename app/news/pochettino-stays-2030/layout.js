// app/news/pochettino-stays-2030/layout.js

export const metadata = {
  title: "Mauricio Pochettino Stays: USMNT Coach Signs New Deal Through 2030 World Cup",
  description:
    "U.S. Soccer announces Mauricio Pochettino has signed a new contract to remain as USMNT head coach through the 2030 World Cup after leading the team at the 2026 tournament.",
  openGraph: {
    title: "Mauricio Pochettino Stays: USMNT Coach Signs New Deal Through 2030",
    description:
      "Pochettino returns for a full four-year cycle after guiding the USMNT to the Round of 16 at the 2026 World Cup on home soil.",
    url: "https://www.us11fc.com/news/pochettino-stays-2030",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Mauricio Pochettino USMNT coach",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pochettino Stays as USMNT Coach Through 2030 World Cup",
    description:
      "U.S. Soccer confirms Mauricio Pochettino has signed a new deal to remain head coach through 2030.",
    images: [
      "https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/pochettino-stays-2030",
  },
};

export default function PochettinoStays2030Layout({ children }) {
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
              "Mauricio Pochettino Stays: USMNT Coach Signs New Deal Through 2030 World Cup",
            image:
              "https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-03T12:00:00Z",
            dateModified: "2026-08-03T18:00:00Z",
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
              "Mauricio Pochettino",
              "USMNT",
              "2030 World Cup",
              "U.S. Soccer",
              "Pochettino contract",
              "USMNT coach",
              "World Cup 2026",
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}