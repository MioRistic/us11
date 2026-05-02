// app/us-free-agents-winter-2026/layout.js

export const metadata = {
  title: "Free Agents – US Players (MLS & Abroad) – Winter 2026",
  description:
    "An overview of American players available as free agents for the 2026 MLS season, including veterans, promising talents, and versatile midfielders and defenders.",
  openGraph: {
    title: "Free Agents – US Players (MLS & Abroad) – Winter 2026",
    description:
      "Check out the American players available as free agents for the 2026 MLS season, including experienced veterans and promising young talents.",
    url: "https://www.us11fc.com/us-free-agents-winter-2026",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/p6NKtkb4/SN222-H3-NXFGYTHLW34-S2-NBJKEI-head.webp",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Agents – US Players (MLS & Abroad) – Winter 2026",
    description:
      "An overview of American players available as free agents for the 2026 MLS season.",
    images: ["https://i.ibb.co/p6NKtkb4/SN222-H3-NXFGYTHLW34-S2-NBJKEI-head.webp"],
    creator: "@mioristic",
  },
};

export default function USFreeAgentsLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Free Agents – US Players (MLS & Abroad) – Winter 2026",
            "image": "https://i.ibb.co/p6NKtkb4/SN222-H3-NXFGYTHLW34-S2-NBJKEI-head.webp",
            "datePublished": "2026-05-02T12:00:00Z",
            "dateModified": "2026-05-02T12:00:00Z",
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
            }
          })
        }}
      />
    </div>
  );
}
