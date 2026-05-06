// app/blog/no-americans-champions-league-final-2026/layout.js

export const metadata = {
  title: "No Americans in the Champions League Final: Johnny Cardoso’s Dream Ends in London",
  description: "Johnny Cardoso came off the bench but couldn’t inspire Atlético Madrid as Arsenal advanced to the 2026 Champions League final. No American player will feature in the showpiece match.",
  openGraph: {
    title: "No Americans in the Champions League Final",
    description: "Johnny Cardoso’s dream ends as Arsenal eliminate Atlético Madrid. Pulisic remains the last American in a CL final.",
    url: "https://www.us11fc.com/blog/no-americans-champions-league-final-2026",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2249006353/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORRHAZA====/GettyImages-2249006353.jpg?auto=webp&format=pjpg&width=1920&quality=80",
        width: 1920,
        height: 1080,
        alt: "Johnny Cardoso vs Arsenal",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Americans in the Champions League Final",
    description: "Johnny Cardoso falls short as Arsenal advance. The wait for the next American in a CL final continues.",
    images: ["https://assets.goal.com/images/v3/getty-2249006353/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORRHAZA====/GettyImages-2249006353.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/blog/no-americans-champions-league-final-2026"
  }
};

export default function NoAmericansCLFinalLayout({ children }) {
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
            "headline": "No Americans in the Champions League Final: Johnny Cardoso’s Dream Ends in London",
            "image": "https://assets.goal.com/images/v3/getty-2249006353/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORRHAZA====/GettyImages-2249006353.jpg?auto=webp&format=pjpg&width=1920&quality=80",
            "datePublished": "2026-05-06T09:00:00Z",
            "dateModified": "2026-05-06T11:30:00Z",
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
            "keywords": ["Johnny Cardoso", "Arsenal", "Atlético Madrid", "Champions League", "USMNT", "Christian Pulisic"],
            "articleSection": "Football"
          })
        }}
      />
    </div>
  );
}