// app/blog/usmnt-prepares-2026/layout.js
export const metadata = {
  title: "USMNT Prepares for World Cup 2026: European Giants Arrive for Friendlies",
  description:
    "Full preview of USMNT's preparation for the 2026 World Cup — Belgium, Portugal, and Germany set to play high-profile friendlies in the U.S.",
  openGraph: {
    title: "USMNT Prepares for World Cup 2026: European Giants Arrive for Friendlies",
    description:
      "Preview of USMNT pre-World Cup friendlies against Belgium, Portugal, and Germany. Key details, match dates, and preparation insights.",
    url: "https://www.us11fc.com/blog/usmnt-prepares-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2234693152/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRQHI2DK===/GettyImages-2234693152.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
        alt: "USMNT World Cup 2026 Preparations",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT Prepares for World Cup 2026 | US11 Blog",
    description:
      "USMNT preps for 2026 World Cup: Belgium, Portugal, Germany friendlies, match dates, and tactical insights.",
    images: [
      "https://assets.goal.com/images/v3/getty-2234693152/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRQHI2DK===/GettyImages-2234693152.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@us11",
  },
};

export default function USMNT2026Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#020617]">
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {children}
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "USMNT Prepares for World Cup 2026: European Giants Arrive for Friendlies",
            "image": "https://assets.goal.com/images/v3/getty-2234693152/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRQHI2DK===/GettyImages-2234693152.jpg?auto=webp&format=pjpg&width=1920&quality=60",
            "datePublished": "2026-05-02T12:00:00Z",
            "dateModified": "2026-05-02T12:00:00Z",
            "author": {
              "@type": "Person",
              "name": "Mio Ristić"
            },
            "publisher": {
              "@type": "Organization",
              "name": "US11",
              "logo": {
                "@type": "ImageObject",
                "url": "https://us11fc.com/logo.png"
              }
            }
          })
        }}
      />
    </div>
  );
}
