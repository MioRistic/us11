// app/news/robert-lewandowski-chicago-fire/layout.js

export const metadata = {
  title: "Robert Lewandowski Agrees to Join Chicago Fire: One of MLS’s Biggest Signings in History",
  
  description:
    "Polish superstar Robert Lewandowski has agreed to join Chicago Fire on a two-year contract. One of the biggest transfers in MLS history is nearly complete.",

  openGraph: {
    title: "Robert Lewandowski Agrees to Join Chicago Fire",
    description:
      "The legendary striker is set to become one of the highest-paid players in MLS.",
    url: "https://www.us11fc.com/news/robert-lewandowski-chicago-fire",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt4e611d016b7d111f/crop/MM5DKOJUHIZTGNB2NZXXOZJ2GA5DGMI=/gettyimages-2255221090-594x594.jpg?auto=webp&format=pjpg&width=1080&quality=60",
        width: 1200,
        height: 675,
        alt: "Robert Lewandowski Chicago Fire",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lewandowski Agrees to Join Chicago Fire",
    description: "One of MLS’s biggest signings in history is nearly complete",
    images: ["https://assets.goal.com/images/v3/blt4e611d016b7d111f/crop/MM5DKOJUHIZTGNB2NZXXOZJ2GA5DGMI=/gettyimages-2255221090-594x594.jpg?auto=webp&format=pjpg&width=1080&quality=60"],
    creator: "@US11FC",
  },

  alternates: {
    canonical: "https://www.us11fc.com/news/robert-lewandowski-chicago-fire"
  }
};

export default function LewandowskiChicagoFireLayout({ children }) {
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
            "headline": "Robert Lewandowski Agrees to Join Chicago Fire: One of MLS’s Biggest Signings in History",
            "image": "https://assets.goal.com/images/v3/blt4e611d016b7d111f/crop/MM5DKOJUHIZTGNB2NZXXOZJ2GA5DGMI=/gettyimages-2255221090-594x594.jpg?auto=webp&format=pjpg&width=1080&quality=60",
            "datePublished": "2026-06-29T01:00:00Z",
            "dateModified": "2026-06-29T02:00:00Z",
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
              "Robert Lewandowski",
              "Chicago Fire",
              "MLS Transfer",
              "Lewandowski to MLS",
              "Chicago Fire Signing",
              "Major League Soccer"
            ],
            "articleSection": "MLS"
          })
        }}
      />
    </div>
  );
}