// app/news/three-stars-first-impressions/layout.js

export const metadata = {
  title: "Three Stars, Three Debuts: First Impressions of MLS’s Newest Global Icons",
  description:
    "Antoine Griezmann, Robert Lewandowski and Casemiro have made their MLS debuts. Here are our first impressions and ratings of the three biggest summer arrivals.",
  openGraph: {
    title: "Three Stars, Three Debuts: First Impressions of MLS’s Newest Global Icons",
    description:
      "Griezmann scores on debut, Casemiro controls the midfield, Lewandowski still searching for rhythm. Full first impressions and ratings.",
    url: "https://www.us11fc.com/news/three-stars-first-impressions",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "MLS new global stars 2026 – Griezmann, Lewandowski, Casemiro",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Three Stars, Three Debuts: First Impressions of MLS’s Newest Global Icons",
    description: "Griezmann 8.5 | Casemiro 7.5 | Lewandowski 5.5 – First ratings of the big summer arrivals",
    images: [
      "https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/three-stars-first-impressions",
  },
};

export default function ThreeStarsFirstImpressionsLayout({ children }) {
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
            headline: "Three Stars, Three Debuts: First Impressions of MLS’s Newest Global Icons",
            image: "https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-07-27T22:00:00Z",
            dateModified: "2026-07-28T00:00:00Z",
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
              "Antoine Griezmann",
              "Robert Lewandowski",
              "Casemiro",
              "MLS debuts",
              "Orlando City",
              "Chicago Fire",
              "Inter Miami",
              "MLS 2026",
              "summer transfers",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}