// app/blog/mexico-usa-jersey-sales-2026/layout.js

export const metadata = {
  title: "Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth (and a Major Shift)",
  description: "Fanatics claims the USMNT 2026 kit is currently the best-selling national team jersey in the United States. We break down the data, the Messi effect, and what it means for 2026.",
  openGraph: {
    title: "Mexico or USA: Whose Jersey Sells More in America?",
    description: "Fanatics ranking sparks debate — is the USMNT kit finally outselling Mexico in the US?",
    url: "https://www.us11fc.com/blog/mexico-usa-jersey-sales-2026",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/Gfk3qjXJ/Untitled-design-4.png",
        width: 1920,
        height: 1080,
        alt: "USMNT vs Mexico 2026 Jerseys",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico or USA: Whose Jersey Sells More in America?",
    description: "Fanatics data shows US kit leading sales ahead of Mexico, Canada, Brazil & Argentina.",
    images: ["https://i.ibb.co/Gfk3qjXJ/Untitled-design-4.png"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/blog/mexico-usa-jersey-sales-2026"
  }
};

export default function MexicoUsaJerseySalesLayout({ children }) {
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
            "headline": "Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth",
            "image": "https://assets.goal.com/images/v3/bltf0c4f3b07045ab06/USA%20WC%2026%20home%20kit.jpg?auto=webp&format=pjpg&width=1920&quality=80",
            "datePublished": "2026-05-05T10:00:00Z",
            "dateModified": "2026-05-05T12:30:00Z",
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
            "keywords": ["USMNT", "Mexico Jersey", "Fanatics", "2026 World Cup", "Jersey Sales"],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}