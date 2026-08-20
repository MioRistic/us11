// app/news/griezmann-lewandowski-orlando-chicago/layout.js

export const metadata = {
  title:
    "When Giants Met in the Storm: Griezmann vs Lewandowski as Chicago Edge Orlando 2-1",
  description:
    "Antoine Griezmann and Robert Lewandowski faced off for the first time in MLS as Chicago Fire beat Orlando City 2-1 after a nearly two-hour lightning delay. Both sides wore 2026 Archive Collection retro kits.",
  openGraph: {
    title:
      "When Giants Met in the Storm: Griezmann vs Lewandowski as Chicago Edge Orlando 2-1",
    description:
      "Lewandowski’s penalty sealed a 2-1 win for Chicago over Griezmann’s Orlando after a long weather delay — with both clubs in Archive Collection retro kits.",
    url: "https://www.us11fc.com/news/griezmann-lewandowski-orlando-chicago",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/xq4Z04Yy/images-5-1.jpg",
        width: 1200,
        height: 675,
        alt: "Robert Lewandowski Chicago Fire vs Orlando City – Rich Storry / Getty Images",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Griezmann vs Lewandowski: Chicago Beat Orlando 2-1 After Lightning Delay",
    description:
      "Two European greats, Archive retro kits, and a storm-delayed MLS classic in Orlando.",
    images: ["https://i.ibb.co/1GVM9GVD/images-5.jpg"],
    creator: "@US11FC",
  },
  alternates: {
    canonical:
      "https://www.us11fc.com/news/griezmann-lewandowski-orlando-chicago",
  },
};

export default function GriezmannLewandowskiLayout({ children }) {
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
              "When Giants Met in the Storm: Griezmann vs Lewandowski as Chicago Edge Orlando 2-1",
            image: "https://i.ibb.co/xq4Z04Yy/images-5-1.jpg",
            datePublished: "2026-08-20T12:00:00Z",
            dateModified: "2026-08-20T15:00:00Z",
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
              "Orlando City",
              "Chicago Fire",
              "MLS",
              "Archive Collection",
              "weather delay",
              "Inter&Co Stadium",
            ],
            articleSection: "MLS",
            description:
              "Griezmann and Lewandowski faced off for the first time in MLS as Chicago Fire beat Orlando City 2-1 after a lightning delay, with both teams in Archive Collection retro kits.",
          }),
        }}
      />
    </div>
  );
}