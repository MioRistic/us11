// app/news/usmnt-deliver-the-statement-theyve-been-waiting-for/layout.js

export const metadata = {
  title: "USMNT Deliver the Statement They’ve Been Waiting For",
  description:
    "The United States men’s national team produced their most complete World Cup opening performance in years with a dominant 4-1 win over Paraguay. A statement result on home soil.",

  openGraph: {
    title: "USMNT Deliver the Statement They’ve Been Waiting For",
    description:
      "USMNT produced a dominant 4-1 win over Paraguay in their 2026 World Cup opener. A performance that finally felt like they belonged on the biggest stage.",
    url: "https://www.us11fc.com/news/usmnt-deliver-the-statement-theyve-been-waiting-for",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/202b5vLP/usmnt.png",
        width: 1200,
        height: 675,
        alt: "USMNT vs Paraguay 2026 World Cup",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT Deliver the Statement They’ve Been Waiting For",
    description:
      "A dominant 4-1 win over Paraguay showed that the USMNT may finally be ready to make noise at the 2026 World Cup.",
    images: ["https://i.ibb.co/202b5vLP/usmnt.png"],
    creator: "@mioristic",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-deliver-the-statement-theyve-been-waiting-for",
  },
};

export default function USMNTStatementWinLayout({ children }) {
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
            "headline": "USMNT Deliver the Statement They’ve Been Waiting For",
            "image": "https://i.ibb.co/202b5vLP/usmnt.png",
            "datePublished": "2026-06-13T08:00:00Z",
            "dateModified": "2026-06-13T12:00:00Z",
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
              "USMNT", "2026 World Cup", "United States National Team",
              "Mauricio Pochettino", "Folarin Balogun", "Giovanni Reyna",
              "USA vs Paraguay", "World Cup 2026", "SoFi Stadium"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}