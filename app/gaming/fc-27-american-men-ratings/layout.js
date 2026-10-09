export const metadata = {
  title: "The 10 Highest-Rated American Men in FC 27. None of Them Play in MLS.",
  description:
    "Christian Pulisic leads American men in EA FC 27 at 83. McKennie, Cardoso, Robinson, Balogun and Richards are 80. No MLS player is in the top 10.",
  openGraph: {
    title: "The 10 Highest-Rated American Men in FC 27. None of Them Play in MLS.",
    description:
      "Pulisic is 83. Five Americans are 80. The league on the box does not have a man in the ten.",
    url: "https://www.us11fc.com/gaming/fc-27-american-men-ratings",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2267704044/crop/MM5DENRQHA5DCNBWG45G433XMU5DEORRGQ3Q====/GettyImages-2267704044.jpg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 1200,
        height: 675,
        alt: "Christian Pulisic",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27: No MLS Player in the Top 10 American Men",
    description:
      "Pulisic 83. Five at 80. Weah 78. Roldan is the highest MLS American, at 77.",
    images: [
      "https://assets.goal.com/images/v3/getty-2267704044/crop/MM5DENRQHA5DCNBWG45G433XMU5DEORRGQ3Q====/GettyImages-2267704044.jpg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/gaming/fc-27-american-men-ratings",
  },
};

export default function Fc27AmericanMenLayout({ children }) {
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
              "The 10 Highest-Rated American Men in FC 27. None of Them Play in MLS.",
            image:
              "https://assets.goal.com/images/v3/getty-2267704044/crop/MM5DENRQHA5DCNBWG45G433XMU5DEORRGQ3Q====/GettyImages-2267704044.jpg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-10-09T14:22:00Z",
            dateModified: "2026-10-09T14:22:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristic",
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
              "EA FC 27",
              "Christian Pulisic",
              "Weston McKennie",
              "Folarin Balogun",
              "USMNT",
              "MLS",
            ],
            articleSection: "Gaming",
            description:
              "The 10 highest-rated American men in EA Sports FC 27 all play in Europe. No MLS player makes the list.",
          }),
        }}
      />
    </div>
  );
}