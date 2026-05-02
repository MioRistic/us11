// app/news/red-bulls-new-performance-center/layout.js

export const metadata = {
  title: "The Red Bulls’ $100 Million Statement: A New Performance Center That Could Reshape Their Future",
  description:
    "Inside the new RWJBarnabas Health Red Bulls Performance Center – an 80-acre, $100M+ state-of-the-art facility that brings First Team, Red Bulls II and Academy together for the first time.",
  openGraph: {
    title: "The Red Bulls’ $100 Million Statement: Inside Their New Performance Center",
    description: "Red Bull officially opens their massive new training facility in New Jersey – a game-changing investment for player development.",
    url: "https://www.us11fc.com/news/red-bulls-new-performance-center",
    siteName: "US11",
    images: [
      {
        url: "https://i.postimg.cc/NfSk5KFy/zuetffftdtclzxthyw87.webp",
        width: 1920,
        height: 1080,
        alt: "RWJBarnabas Health Red Bulls Performance Center",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Red Bulls Open Their New $100M Performance Center",
    description: "80 acres, 8 pitches, state-of-the-art facilities – inside Red Bull's massive new training hub.",
    images: ["https://i.postimg.cc/NfSk5KFy/zuetffftdtclzxthyw87.webp"],
    creator: "@US11FC",
  },
};

export default function RedBullAcademyLayout ({ children }) {
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
            "headline": "The Red Bulls' $100 Million Statement: A New Performance Center That Could Reshape Their Future",
            "image": "https://i.postimg.cc/NfSk5KFy/zuetffftdtclzxthyw87.webp",
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