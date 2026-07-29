// app/news/olwethu-makhanya-rangers/layout.js

export const metadata = {
  title: "Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya",
  description:
    "Rangers are closing in on a deal to sign South Africa international center back Olwethu Makhanya from the Philadelphia Union for a fee north of $4.5 million.",
  openGraph: {
    title: "Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya",
    description:
      "The 22-year-old South African center back is set to leave the Philadelphia Union for Rangers in a deal worth more than $4.5 million.",
    url: "https://www.us11fc.com/news/olwethu-makhanya-rangers",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt9413ab732a88c480/crop/MM5DCMBZGI5DMMJUHJXG653FHIYDUMA=/Mkhanaya.jpg?auto=webp&format=pjpg&width=2048&quality=60", // zameni stvarnom slikom
        width: 1200,
        height: 675,
        alt: "Olwethu Makhanya Philadelphia Union",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangers Close In on Olwethu Makhanya from Philadelphia Union",
    description: "South Africa international center back set for move to Rangers in deal worth over $4.5m.",
    images: ["https://assets.goal.com/images/v3/blt9413ab732a88c480/crop/MM5DCMBZGI5DMMJUHJXG653FHIYDUMA=/Mkhanaya.jpg?auto=webp&format=pjpg&width=2048&quality=60"], // zameni stvarnom slikom
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/olwethu-makhanya-rangers",
  },
};

export default function OlwethuMakhanyaRangersLayout({ children }) {
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
            headline: "Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya",
            image: "https://assets.goal.com/images/v3/blt9413ab732a88c480/crop/MM5DCMBZGI5DMMJUHJXG653FHIYDUMA=/Mkhanaya.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-07-29T10:00:00Z",
            dateModified: "2026-07-29T12:00:00Z",
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
              "Olwethu Makhanya",
              "Philadelphia Union",
              "Rangers",
              "MLS Transfer",
              "South Africa",
              "Derek McInnes",
              "MLS to Europe",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}