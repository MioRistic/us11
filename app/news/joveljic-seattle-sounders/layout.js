// app/news/joveljic-seattle-sounders/layout.js

export const metadata = {
  title: "Seattle Sounders Move for Dejan Joveljić as Struggling Attack Forces Bold Summer Play",
  description:
    "Seattle Sounders are finalizing a $6 million deal to acquire Designated Player Dejan Joveljić from Sporting Kansas City as injuries and low scoring force a major attack upgrade.",
  openGraph: {
    title: "Seattle Sounders Move for Dejan Joveljić from Sporting KC",
    description:
      "Sounders set to land the Serbian striker in a $6m cash-for-player trade as their attack struggles for goals.",
    url: "https://www.us11fc.com/news/joveljic-seattle-sounders",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1PSDRhOJodgMInN48AeYYVQicUXW4AArLkGkx_3fdDM6QePtOQbHzDyc&s=10",
        width: 1200,
        height: 675,
        alt: "Dejan Joveljić Seattle Sounders",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Sounders Move for Dejan Joveljić",
    description:
      "$6m deal from Sporting KC — Sounders address their attacking issues with a proven MLS goalscorer.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1PSDRhOJodgMInN48AeYYVQicUXW4AArLkGkx_3fdDM6QePtOQbHzDyc&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/joveljic-seattle-sounders",
  },
};

export default function JoveljicSeattleSoundersLayout({ children }) {
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
              "Seattle Sounders Move for Dejan Joveljić as Struggling Attack Forces Bold Summer Play",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1PSDRhOJodgMInN48AeYYVQicUXW4AArLkGkx_3fdDM6QePtOQbHzDyc&s=10",
            datePublished: "2026-08-24T08:00:00Z",
            dateModified: "2026-08-24T12:00:00Z",
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
              "Dejan Joveljić",
              "Seattle Sounders",
              "Sporting Kansas City",
              "MLS transfer",
              "Designated Player",
              "MLS 2026",
              "Joveljić Seattle",
            ],
            articleSection: "MLS",
            description:
              "Seattle Sounders are finalizing a $6 million deal for Dejan Joveljić from Sporting Kansas City.",
          }),
        }}
      />
    </div>
  );
}