// app/news/usmnt-fall-friendlies-2026/layout.js

export const metadata = {
  title: "USMNT Opens New Cycle Against Familiar Rivals and Fresh Challenges",
  description:
    "U.S. Soccer announces the first four friendlies of the 2030 World Cup cycle. USMNT will face Peru, Chile, Mexico and Canada in September and October 2026.",
  openGraph: {
    title: "USMNT Opens New Cycle Against Familiar Rivals and Fresh Challenges",
    description:
      "First four post-World Cup friendlies announced: Peru, Chile, Mexico and Canada — all on home soil.",
    url: "https://www.us11fc.com/news/usmnt-fall-friendlies-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "USMNT fall friendlies 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT Opens New Cycle with Peru, Chile, Mexico & Canada",
    description: "First four friendlies of the 2030 cycle announced",
    images: [
      "https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-fall-friendlies-2026",
  },
};

export default function USMNTFallFriendliesLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "USMNT Opens New Cycle Against Familiar Rivals and Fresh Challenges",
            image:
              "https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-05T00:00:00Z",
            dateModified: "2026-08-05T00:30:00Z",
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
              "USMNT",
              "friendlies",
              "Mexico",
              "Canada",
              "Peru",
              "Chile",
              "Mauricio Pochettino",
              "2030 World Cup",
              "fall international window",
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}