// app/blog/mls-jerseys-2026/layout.js

export const metadata = {
  title:
    "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
  description:
    "MLS jerseys in 2026 are more than kits — they’re fashion, identity, and culture. A deep dive into the designs fans love (and hate) the most.",
  openGraph: {
    title:
      "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
    description:
      "From Inter Miami to Charlotte FC, explore the MLS 2026 jerseys that define style, culture, and club identity. Full analysis and picks by Mio Ristić.",
    url: "https://www.us11fc.com/blog/mls-jerseys-2026",
    siteName: "US11",
    images: [
      {
        url: "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
        width: 1200,
        height: 800,
        alt: "MLS 2026 jerseys",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
    description:
      "Which MLS 2026 jerseys actually work as fashion and identity? Full breakdown of the best, weirdest and most iconic kits.",
    images: [
      "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/blog/mls-jerseys-2026",
  },
};

export default function MLSJerseyLayout({ children }) {
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
            headline:
              "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
            image:
              "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
            datePublished: "2026-02-11T10:00:00Z",
            dateModified: "2026-02-11T12:00:00Z",
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
              "MLS 2026 jerseys",
              "Inter Miami",
              "Charlotte FC",
              "Seattle Sounders",
              "kit ranking",
              "MLS Store",
            ],
            articleSection: "Shopping",
            description:
              "MLS jerseys in 2026 are more than kits — fashion, identity, and culture. Analysis of the designs fans love and hate.",
          }),
        }}
      />
    </div>
  );
}