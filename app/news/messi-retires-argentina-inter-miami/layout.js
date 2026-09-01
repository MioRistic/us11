// app/news/messi-retires-argentina-inter-miami/layout.js

export const metadata = {
  title: "Lionel Messi Retires From Argentina, Continues at Inter Miami Through 2028",
  description:
    "Lionel Messi has retired from the Argentina national team after the 2026 World Cup but remains under contract with Inter Miami through the 2028 MLS season. What his international farewell means for MLS.",
  openGraph: {
    title: "Lionel Messi Retires From Argentina, Continues at Inter Miami Through 2028",
    description:
      "Messi’s Argentina chapter is over. The only place left to watch him play is Inter Miami, where his contract runs through 2028.",
    url: "https://www.us11fc.com/news/messi-retires-argentina-inter-miami",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt17f9a8f2fd6b8229/GOAL_-_Blank_WEB_-_Facebook_-_2023-08-31T080917.696.jpg?quality=60&auto=webp&format=pjpg&width=1920",
        width: 1200,
        height: 675,
        alt: "Lionel Messi Inter Miami after retiring from Argentina",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lionel Messi Retires From Argentina, Stays at Inter Miami Through 2028",
    description:
      "International retirement is not the end of Messi’s career. Miami is now the only stage.",
    images: [
      "https://assets.goal.com/images/v3/blt17f9a8f2fd6b8229/GOAL_-_Blank_WEB_-_Facebook_-_2023-08-31T080917.696.jpg?quality=60&auto=webp&format=pjpg&width=1920",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/messi-retires-argentina-inter-miami",
  },
};

export default function MessiRetiresArgentinaMiamiLayout({ children }) {
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
              "Lionel Messi Retires From Argentina, Continues at Inter Miami Through 2028",
            image:
              "https://assets.goal.com/images/v3/blt17f9a8f2fd6b8229/GOAL_-_Blank_WEB_-_Facebook_-_2023-08-31T080917.696.jpg?quality=60&auto=webp&format=pjpg&width=1920",
            datePublished: "2026-09-01T17:45:00Z",
            dateModified: "2026-09-01T17:45:00Z",
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
              "Lionel Messi",
              "Messi retirement",
              "Argentina",
              "Inter Miami",
              "MLS",
              "Messi contract 2028",
              "World Cup 2026",
            ],
            articleSection: "MLS",
            description:
              "Lionel Messi has retired from Argentina but remains contracted to Inter Miami through the 2028 MLS season.",
          }),
        }}
      />
    </div>
  );
}