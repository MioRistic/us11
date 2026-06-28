// app/news/pochettino-contract-extension-2030/layout.js

export const metadata = {
  title: "Pochettino’s Future at the USMNT: Why U.S. Soccer Made Its Move Early",
  
  description:
    "U.S. Soccer has offered Mauricio Pochettino a contract extension through the 2030 World Cup. The timing of the offer says as much about the federation’s ambitions as it does about Pochettino’s performance so far.",

  openGraph: {
    title: "Pochettino’s Future at the USMNT: Why U.S. Soccer Made Its Move Early",
    description:
      "U.S. Soccer has offered Mauricio Pochettino a contract extension through the 2030 World Cup.",
    url: "https://www.us11fc.com/news/pochettino-contract-extension-2030",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=1080&quality=60",
        width: 1200,
        height: 675,
        alt: "Mauricio Pochettino USMNT",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pochettino Offered Contract Extension Through 2030",
    description: "U.S. Soccer moves early to secure its head coach for the next World Cup cycle",
    images: ["https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=1080&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/pochettino-contract-extension-2030"
  }
};

export default function PochettinoContractExtensionLayout({ children }) {
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
            "@type": "NewsArticle",
            "headline": "Pochettino’s Future at the USMNT: Why U.S. Soccer Made Its Move Early",
            "image": "https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=1080&quality=60",
            "datePublished": "2026-06-28T10:00:00Z",
            "dateModified": "2026-06-28T14:30:00Z",
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
              "Mauricio Pochettino",
              "USMNT Contract Extension",
              "2030 World Cup",
              "U.S. Soccer",
              "World Cup 2026",
              "Pochettino Future"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}