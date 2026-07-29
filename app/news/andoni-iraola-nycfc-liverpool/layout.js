// app/news/andoni-iraola-nycfc-liverpool/layout.js

export const metadata = {
  title: "Andoni Iraola’s Journey from NYCFC to Liverpool Manager: How New York Shaped the New Reds Boss",
  description:
    "How Andoni Iraola’s time at New York City FC helped shape the coach who is now leading Liverpool. The full story of his path from player to Anfield manager.",
  openGraph: {
    title: "Andoni Iraola’s Journey from NYCFC to Liverpool Manager",
    description:
      "From playing alongside Lampard, Pirlo and Villa at NYCFC to becoming Liverpool’s new head coach — the New York chapter that shaped Andoni Iraola.",
    url: "https://www.us11fc.com/news/andoni-iraola-nycfc-liverpool",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA08VnYa7lfdOryp81vNUqtJsGAv1s0ImJkYnD0JG0EMzUzNB8Qanx-mo&s=10",
        width: 1200,
        height: 675,
        alt: "Andoni Iraola NYCFC Liverpool",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andoni Iraola’s Journey from NYCFC to Liverpool Manager",
    description: "How New York City FC helped shape the new Liverpool boss.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA08VnYa7lfdOryp81vNUqtJsGAv1s0ImJkYnD0JG0EMzUzNB8Qanx-mo&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/andoni-iraola-nycfc-liverpool",
  },
};

export default function AndoniIraolaNYCFCLayout({ children }) {
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
              "Andoni Iraola’s Journey from NYCFC to Liverpool Manager: How New York Shaped the New Reds Boss",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA08VnYa7lfdOryp81vNUqtJsGAv1s0ImJkYnD0JG0EMzUzNB8Qanx-mo&s=10",
            datePublished: "2026-07-29T11:00:00Z",
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
              "Andoni Iraola",
              "Liverpool",
              "NYCFC",
              "New York City FC",
              "MLS",
              "Frank Lampard",
              "Andrea Pirlo",
              "David Villa",
              "Liverpool manager",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}