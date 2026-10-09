export const metadata = {
  title: "Which of Pochettino’s New USMNT Kids Are Actually Here to Stay?",
  description:
    "Julian Hall scored three in three. Justin Ellis opened and closed the window. Cavan Sullivan has the record. November is the filter.",
  openGraph: {
    title: "Which of Pochettino’s New USMNT Kids Are Actually Here to Stay?",
    description:
      "A 4-0 window is not a squad. Hall and Ellis answered with goals. Sullivan answered with a camera.",
    url: "https://www.us11fc.com/news/pochettino-kids-here-to-stay",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/imago-sport-1083944903/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920",
        width: 1200,
        height: 675,
        alt: "Mauricio Pochettino with the USMNT",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which of Pochettino’s New Kids Are Here to Stay?",
    description:
      "Hall, three in three. Ellis, first and last goal of the window. Sullivan has the record, not the place.",
    images: [
      "https://assets.goal.com/images/v3/imago-sport-1083944903/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/pochettino-kids-here-to-stay",
  },
};

export default function PochettinoKidsHereToStayLayout({ children }) {
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
              "Which of Pochettino’s New USMNT Kids Are Actually Here to Stay?",
            image:
              "https://assets.goal.com/images/v3/imago-sport-1083944903/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920",
            datePublished: "2026-10-09T14:05:00Z",
            dateModified: "2026-10-09T14:05:00Z",
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
              "Mauricio Pochettino",
              "Julian Hall",
              "Justin Ellis",
              "Cavan Sullivan",
              "Mathis Albert",
              "USMNT",
            ],
            articleSection: "USMNT",
            description:
              "After a 4-0 window, Julian Hall and Justin Ellis are the newcomers who answered with goals. November decides who stays.",
          }),
        }}
      />
    </div>
  );
}
