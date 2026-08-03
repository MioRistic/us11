// app/blog/jerseys/argentina-2026-world-cup-kits/layout.js

export const metadata = {
  title: "Argentina FIFA World Cup 2026 Kits: Home and Away",
  description:
    "A complete look at Argentina’s 2026 World Cup kits, including Messi’s final World Cup home jersey, away kit, and official fan editions.",
  openGraph: {
    title: "Argentina 2026 World Cup Kits: Home and Away",
    description:
      "Explore Argentina’s 2026 World Cup home and away kits and shop the official Messi replica and authentic jerseys.",
    url: "https://www.us11fc.com/blog/jerseys/argentina-2026-world-cup-kits",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 630,
        alt: "Argentina 2026 World Cup Kit",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina 2026 World Cup Kits: Home and Away",
    description:
      "Lionel Messi’s final World Cup kits revealed: shop the home, away, youth, and long-sleeve editions from Argentina.",
    images: [
      "https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical:
      "https://www.us11fc.com/blog/jerseys/argentina-2026-world-cup-kits",
  },
};

export default function Argentina2026KitsLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      {/* NO max-w – page handles full-bleed + sticky + content width */}
      <main className="w-full">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Argentina FIFA World Cup 2026 Kits: Home and Away",
            image:
              "https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60",
            datePublished: "2026-01-18T10:00:00Z",
            dateModified: "2026-01-18T12:00:00Z",
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
              "Argentina 2026 kit",
              "Messi jersey",
              "World Cup",
              "Albiceleste",
              "adidas",
              "Fanatics",
            ],
            articleSection: "Shopping",
            description:
              "Argentina’s 2026 World Cup kits — Messi’s final tournament home and away editions.",
          }),
        }}
      />
    </div>
  );
}