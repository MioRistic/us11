// app/news/usmnt-advance-to-round-of-16-bosnia/layout.js

export const metadata = {
  title: "USMNT Advance to World Cup Round of 16 with 2-0 Win Over Bosnia and Herzegovina – Balogun Shines Before Controversial Red Card",
  
  description:
    "The United States defeated Bosnia and Herzegovina 2-0 to advance to the Round of 16. Folarin Balogun scored but was controversially sent off, while Malik Tillman sealed the win with a stunning free-kick.",

  openGraph: {
    title: "USMNT Advance to Round of 16 After Beating Bosnia",
    description:
      "Folarin Balogun’s heroics and Malik Tillman’s late free-kick goal send the USMNT through to the knockout stage.",
    url: "https://www.us11fc.com/news/usmnt-advance-to-round-of-16-bosnia",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2284249560/crop/MM5DINJSGI5DENJUGQ5G433XMU5DAORSGM3A====/GettyImages-2284249560.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "USMNT vs Bosnia World Cup 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "USMNT Advance to Round of 16 After Beating Bosnia",
    description: "Balogun scores but is sent off in dramatic 2-0 win",
    images: ["https://assets.goal.com/images/v3/getty-2284249560/crop/MM5DINJSGI5DENJUGQ5G433XMU5DAORSGM3A====/GettyImages-2284249560.jpg?auto=webp&format=pjpg&width=3840&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-advance-to-round-of-16-bosnia"
  }
};

export default function USMNTBosniaVictoryLayout({ children }) {
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
            "headline": "USMNT Advance to World Cup Round of 16 with 2-0 Win Over Bosnia and Herzegovina – Balogun Shines Before Controversial Red Card",
            "image": "https://assets.goal.com/images/v3/getty-2284249560/crop/MM5DINJSGI5DENJUGQ5G433XMU5DAORSGM3A====/GettyImages-2284249560.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            "datePublished": "2026-07-02T10:00:00Z",
            "dateModified": "2026-07-02T23:00:00Z",
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
              "USMNT vs Bosnia",
              "World Cup 2026 Round of 16",
              "Folarin Balogun",
              "Malik Tillman",
              "San Francisco Bay Area Stadium",
              "USMNT Advance"
            ],
            "articleSection": "USMNT"
          })
        }}
      />
    </div>
  );
}