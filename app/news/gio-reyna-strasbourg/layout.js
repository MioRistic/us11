// app/news/gio-reyna-strasbourg/layout.js

export const metadata = {
  title: "Gio Reyna Agrees Move to Strasbourg as Career Reset Continues in France",
  description:
    "RC Strasbourg have agreed a deal worth around €3 million to sign USMNT attacking midfielder Gio Reyna from Borussia Mönchengladbach. Medical scheduled Monday.",
  openGraph: {
    title: "Gio Reyna Agrees Move to Strasbourg as Career Reset Continues in France",
    description:
      "The United States international is set to join the BlueCo project on a five-year deal after accepting terms with RC Strasbourg.",
    url: "https://www.us11fc.com/news/gio-reyna-strasbourg",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt1c7bd4c8d2766389/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-02-20T134449.815.png?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Gio Reyna Strasbourg transfer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gio Reyna Agrees Move to Strasbourg",
    description: "USMNT star set for Ligue 1 switch from Gladbach in €3m deal.",
    images: [
      "https://assets.goal.com/images/v3/blt1c7bd4c8d2766389/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-02-20T134449.815.png?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/gio-reyna-strasbourg",
  },
};

export default function GioReynaStrasbourgLayout({ children }) {
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
              "Gio Reyna Agrees Move to Strasbourg as Career Reset Continues in France",
            image:
              "https://assets.goal.com/images/v3/blt1c7bd4c8d2766389/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-02-20T134449.815.png?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-03T12:00:00Z",
            dateModified: "2026-08-03T12:00:00Z",
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
              "Gio Reyna",
              "Giovanni Reyna",
              "Strasbourg",
              "RC Strasbourg",
              "Borussia Mönchengladbach",
              "USMNT",
              "Transfer",
              "Ligue 1",
              "BlueCo",
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}