export const metadata = {
  title: "Damet Is 36 and in His First Job. St. Louis Is One Game From a Trophy.",
  description:
    "Yoann Damet, MLS’s youngest head coach, has St. Louis on a record 21-game unbeaten run and into the U.S. Open Cup final. The trophy has not been won.",
  openGraph: {
    title: "Damet Is 36 and in His First Job. St. Louis Is One Game From a Trophy.",
    description:
      "First permanent job, record run, first final. Columbus is next. The silverware is not yet theirs.",
    url: "https://www.us11fc.com/news/damet-st-louis-first-job",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt577ca013fa3871fc/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-10T122830.270.png?quality=60&auto=webp&format=pjpg&width=1920",
        width: 1200,
        height: 675,
        alt: "Yoann Damet and St. Louis City",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damet Is 36. St. Louis Is One Game From a Trophy.",
    description:
      "21 unbeaten, Open Cup final in Columbus, second in the West. The final is still to be played.",
    images: [
      "https://assets.goal.com/images/v3/blt577ca013fa3871fc/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-10T122830.270.png?quality=60&auto=webp&format=pjpg&width=1920",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/damet-st-louis-first-job",
  },
};

export default function DametStLouisLayout({ children }) {
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
              "Damet Is 36 and in His First Job. St. Louis Is One Game From a Trophy.",
            image:
              "https://assets.goal.com/images/v3/blt577ca013fa3871fc/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-10T122830.270.png?quality=60&auto=webp&format=pjpg&width=1920",
            datePublished: "2026-10-20T12:06:00Z",
            dateModified: "2026-10-20T12:06:00Z",
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
              "Yoann Damet",
              "St. Louis City",
              "MLS",
              "U.S. Open Cup",
              "Corey Wray",
            ],
            articleSection: "MLS",
            description:
              "Yoann Damet has St. Louis City on a record unbeaten run and into the Open Cup final in his first permanent head-coaching job.",
          }),
        }}
      />
    </div>
  );
}