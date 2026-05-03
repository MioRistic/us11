// app/news/martin-ojeda-masterpiece-miami-2026/layout.js

export const metadata = {
  title: "Martín Ojeda’s Masterpiece: One Night in Miami That No One Will Forget",
  description:
    "Martín Ojeda scored a hat-trick as Orlando City staged a stunning comeback from 3-0 down to defeat Inter Miami 4-3 at Nu Stadium.",
  openGraph: {
    title: "Martín Ojeda’s Masterpiece: Orlando Stuns Messi’s Miami 4-3",
    description: "Hat-trick heroics from Ojeda complete one of the greatest comebacks in MLS history against Inter Miami.",
    url: "https://www.us11fc.com/news/martin-ojeda-masterpiece-miami-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt46944697bc863c53/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-02T211526.574.png?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Martín Ojeda celebrates hat-trick vs Inter Miami",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojeda Hat-Trick: Orlando Stuns Miami 4-3",
    description: "Martín Ojeda delivers the performance of his career as Orlando come back from 3-0 down.",
    images: ["https://assets.goal.com/images/v3/blt46944697bc863c53/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-02T211526.574.png?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/martin-ojeda-masterpiece-miami-2026"
  }
};

export default function OjedaMasterpieceLayout({ children }) {
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
            "headline": "Martín Ojeda’s Masterpiece: One Night in Miami That No One Will Forget",
            "image": "https://assets.goal.com/images/v3/blt46944697bc863c53/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-02T211526.574.png?auto=webp&format=pjpg&width=1920&quality=80",
            "datePublished": "2026-05-03T10:00:00Z",
            "dateModified": "2026-05-03T10:30:00Z",
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
            },
            "keywords": ["Martín Ojeda", "Inter Miami", "Orlando City", "MLS", "Florida Derby", "Nu Stadium"],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}