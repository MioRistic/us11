export const metadata = {
  title: "Müller Stays in Vancouver, but Only Through the Sprint",
  description:
    "Thomas Müller signed a Designated Player extension with Vancouver Whitecaps through the 2027 MLS Sprint Season. The deal runs to June 30, 2027, not a full year.",
  openGraph: {
    title: "Müller Stays in Vancouver, but Only Through the Sprint",
    description:
      "19 goals and 12 assists since August 2025. The paper keeps him through May 2027. June is the next conversation.",
    url: "https://www.us11fc.com/news/muller-whitecaps-extension",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2296789253/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORRGE2Q====/GettyImages-2296789253.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Thomas Müller in action for Vancouver Whitecaps",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Müller Extends in Vancouver Through the 2027 Sprint",
    description:
      "Not a full year. A DP deal to June 30, 2027, after 31 goal contributions and an MLS Cup final.",
    images: [
      "https://assets.goal.com/images/v3/getty-2296789253/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORRGE2Q====/GettyImages-2296789253.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/muller-whitecaps-extension",
  },
};

export default function MullerWhitecapsExtensionLayout({ children }) {
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
            headline: "Müller Stays in Vancouver, but Only Through the Sprint",
            image:
              "https://assets.goal.com/images/v3/getty-2296789253/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORRGE2Q====/GettyImages-2296789253.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-01T11:13:00Z",
            dateModified: "2026-10-01T11:13:00Z",
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
              "Thomas Müller",
              "Vancouver Whitecaps",
              "MLS",
              "contract extension",
              "Designated Player",
              "2027 Sprint Season",
            ],
            articleSection: "MLS",
            description:
              "Thomas Müller extended with Vancouver Whitecaps through the 2027 MLS Sprint Season after 19 goals and 12 assists since arriving in August 2025.",
          }),
        }}
      />
    </div>
  );
}