// app/blog/usa-vs-bosnia-herzegovina-round-of-32/layout.js

export const metadata = {
  title: "USA vs Bosnia and Herzegovina Tickets: How to Buy Round of 32 World Cup Tickets + Match Preview",
  
  description:
    "The United States face Bosnia and Herzegovina in the Round of 32 of the 2026 FIFA World Cup. Everything you need to know about tickets, prices, and the match.",

  openGraph: {
    title: "USA vs Bosnia and Herzegovina Tickets – Round of 32 World Cup 2026",
    description:
      "Secure your tickets for the USMNT knockout stage match against Bosnia and Herzegovina in Santa Clara.",
    url: "https://www.us11fc.com/blog/usa-vs-bosnia-herzegovina-round-of-32",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/N6sw1JtY/Untitled-design-9.png",
        width: 1200,
        height: 675,
        alt: "USA vs Bosnia and Herzegovina World Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USA vs Bosnia Tickets – Round of 32 World Cup",
    description: "How to buy tickets + full match preview",
    images: ["https://i.ibb.co/N6sw1JtY/Untitled-design-9.png"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/blog/usa-vs-bosnia-herzegovina-round-of-32"
  }
};

export default function USMNTvsBosniaBlogLayout({ children }) {
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
            "@type": "BlogPosting",
            "headline": "USA vs Bosnia and Herzegovina Tickets: How to Buy Round of 32 World Cup Tickets + Match Preview",
            "image": "https://i.ibb.co/N6sw1JtY/Untitled-design-9.png",
            "datePublished": "2026-06-29T10:00:00Z",
            "dateModified": "2026-06-29T15:00:00Z",
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
            "keywords": [
              "USA vs Bosnia Tickets",
              "World Cup 2026 Round of 32",
              "USMNT vs Bosnia",
              "San Francisco Bay Area Stadium",
              "World Cup Tickets"
            ],
            "articleSection": "World Cup"
          })
        }}
      />
    </div>
  );
}