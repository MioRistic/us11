export const metadata = {
  title:
    "St. Louis Honors World Cup Captain Tim Ream While the USMNT Looks for the Next Armband",
  description:
    "U.S. Soccer honors Tim Ream in his hometown before Chile. The World Cup captain is off the roster. Tyler Adams is in the conversation for the armband.",
  openGraph: {
    title:
      "St. Louis Honors World Cup Captain Tim Ream While the USMNT Looks for the Next Armband",
    description:
      "A tribute in St. Louis for the 2026 captain, and an open job Pochettino has not filled.",
    url: "https://www.us11fc.com/news/usmnt-tim-ream-captaincy",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftmiv3ufMW1vyLQASug9YpcajitywpLIrPJK0xmV2UgwnOqnd_8P9LA&s=10",
        width: 1200,
        height: 675,
        alt: "Tim Ream during his time as United States captain",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Louis Honors Tim Ream as the USMNT Looks for a Captain",
    description:
      "The World Cup captain gets a ceremony at Energizer Park. Pochettino says a new name may come soon.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftmiv3ufMW1vyLQASug9YpcajitywpLIrPJK0xmV2UgwnOqnd_8P9LA&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-tim-ream-captaincy",
  },
};

export default function UsmntTimReamCaptaincyLayout({ children }) {
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
              "St. Louis Honors World Cup Captain Tim Ream While the USMNT Looks for the Next Armband",
            image:
              "https://assets.goal.com/images/v3/imago-sport-1083944905/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGM======/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-29T14:54:00Z",
            dateModified: "2026-09-29T14:54:00Z",
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
              "Tim Ream",
              "USMNT",
              "Tyler Adams",
              "Mauricio Pochettino",
              "captain",
              "Chile",
              "St. Louis",
            ],
            articleSection: "USMNT",
            description:
              "U.S. Soccer honors World Cup captain Tim Ream in St. Louis before Chile as Mauricio Pochettino considers who takes the armband.",
          }),
        }}
      />
    </div>
  );
}