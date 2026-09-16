export const metadata = {
  title:
    "Diego Luna Will Miss the Rest of the MLS Season With a Torn Meniscus",
  description:
    "Real Salt Lake and USMNT midfielder Diego Luna announced a torn meniscus that will end his 2026 MLS season. He says he will return next year.",
  openGraph: {
    title:
      "Diego Luna Will Miss the Rest of the MLS Season With a Torn Meniscus",
    description:
      "Luna posted that the meniscus needs to be repaired. RSL are in an 11-game winless run. The next USMNT window is gone too.",
    url: "https://www.us11fc.com/news/diego-luna-meniscus-rsl",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2277148145/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2277148145.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Diego Luna of Real Salt Lake during the 2026 MLS season",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Luna Out for Rest of MLS Season With Torn Meniscus",
    description:
      "The RSL and USMNT midfielder says his 2026 season is over after a meniscus tear that needs repair.",
    images: [
      "https://assets.goal.com/images/v3/getty-2277148145/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2277148145.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/diego-luna-meniscus-rsl",
  },
};

export default function DiegoLunaMeniscusRslLayout({ children }) {
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
              "Diego Luna Will Miss the Rest of the MLS Season With a Torn Meniscus",
            image:
              "https://assets.goal.com/images/v3/getty-2277148145/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2277148145.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-09-16T12:40:00Z",
            dateModified: "2026-09-16T12:40:00Z",
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
              "Diego Luna",
              "Real Salt Lake",
              "meniscus",
              "USMNT",
              "MLS injury",
              "Mauricio Pochettino",
            ],
            articleSection: "MLS",
            description:
              "Diego Luna will miss the rest of the 2026 MLS season after announcing a torn meniscus that requires repair.",
          }),
        }}
      />
    </div>
  );
}