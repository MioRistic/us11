// app/news/lucas-herrington-hull-city/layout.js

export const metadata = {
  title: "Hull City Reach Agreement for Lucas Herrington in Deal Worth Up to $23 Million",
  description:
    "Hull City have agreed a deal with Colorado Rapids for 18-year-old Australian centre-back Lucas Herrington worth up to $23 million. Full details on the transfer.",
  openGraph: {
    title: "Hull City Reach Agreement for Colorado Rapids Defender Lucas Herrington in Deal Worth Up to $23 Million",
    description:
      "The 18-year-old Australian international is set to join newly promoted Hull City in a transfer worth up to $23 million.",
    url: "https://www.us11fc.com/news/lucas-herrington-hull-city",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQvO7bUgSI57bGcOGEPJu3bGSl3itgWXKTFCR188aRkwtnbym0LCQCJef&s=10",
        width: 1200,
        height: 675,
        alt: "Lucas Herrington Hull City transfer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hull City Agree Deal for Lucas Herrington Worth Up to $23m",
    description: "Colorado Rapids starlet set for Premier League move after World Cup breakthrough.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQvO7bUgSI57bGcOGEPJu3bGSl3itgWXKTFCR188aRkwtnbym0LCQCJef&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/lucas-herrington-hull-city",
  },
};

export default function HerringtonHullLayout({ children }) {
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
              "Hull City Reach Agreement for Colorado Rapids Defender Lucas Herrington in Deal Worth Up to $23 Million",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQvO7bUgSI57bGcOGEPJu3bGSl3itgWXKTFCR188aRkwtnbym0LCQCJef&s=10",
            datePublished: "2026-08-03T01:00:00Z",
            dateModified: "2026-08-03T01:00:00Z",
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
              "Lucas Herrington",
              "Hull City",
              "Colorado Rapids",
              "MLS Transfer",
              "Premier League",
              "Australia",
              "Socceroos",
              "Transfer News",
              "MLS",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}