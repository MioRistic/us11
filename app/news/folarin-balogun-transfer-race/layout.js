// app/news/folarin-balogun-transfer-race/layout.js

export const metadata = {
  title: "Folarin Balogun’s Next Move: Barcelona, Tottenham and the Race That Suddenly Got Serious",
  description:
    "Barcelona and Aston Villa join Tottenham in the race for USMNT striker Folarin Balogun. Monaco seeking €50-60m as the transfer window enters its final days.",
  openGraph: {
    title: "Folarin Balogun’s Next Move: Barcelona, Tottenham and the Race That Suddenly Got Serious",
    description:
      "USMNT striker Folarin Balogun is being linked with Barcelona, Tottenham and Aston Villa as Monaco demand a substantial fee.",
    url: "https://www.us11fc.com/news/folarin-balogun-transfer-race",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2264578389/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORSHA3A====/GettyImages-2264578389.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Folarin Balogun USMNT transfer rumors",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Folarin Balogun Linked with Barcelona, Tottenham & Aston Villa",
    description:
      "The race for the USMNT striker intensifies as the transfer window closes.",
    images: [
      "https://assets.goal.com/images/v3/getty-2264578389/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORSHA3A====/GettyImages-2264578389.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/folarin-balogun-transfer-race",
  },
};

export default function BalogunTransferRaceLayout({ children }) {
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
              "Folarin Balogun’s Next Move: Barcelona, Tottenham and the Race That Suddenly Got Serious",
            image:
              "https://assets.goal.com/images/v3/getty-2264578389/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORSHA3A====/GettyImages-2264578389.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-08-24T10:00:00Z",
            dateModified: "2026-08-24T14:00:00Z",
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
              "Folarin Balogun",
              "USMNT",
              "Barcelona",
              "Tottenham",
              "Aston Villa",
              "Monaco",
              "Transfer",
              "World Cup 2026",
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}