// app/news/balogun-everton-monaco/layout.js

export const metadata = {
  title: "Everton Reach Agreement With Monaco for Folarin Balogun as Premier League Return Nears",
  description:
    "Everton and Monaco have agreed a deal for USMNT striker Folarin Balogun worth around €45 million plus add-ons. Personal terms reported agreed, medical set for deadline day.",
  openGraph: {
    title: "Everton Reach Agreement With Monaco for Folarin Balogun",
    description:
      "USMNT striker Folarin Balogun is close to a Premier League return after Everton struck a deal with Monaco on deadline day.",
    url: "https://www.us11fc.com/news/balogun-everton-monaco",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt14fc8dda9e344682/crop/MM5DEMZYGQ5DCMZUGE5G433XMU5DGOBSHIYTGMA=/GettyImages-2279226293.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Folarin Balogun USMNT Everton Monaco transfer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everton Reach Agreement With Monaco for Folarin Balogun",
    description:
      "Deadline-day deal for the USMNT striker as Everton look to replace Beto.",
    images: [
      "https://assets.goal.com/images/v3/blt14fc8dda9e344682/crop/MM5DEMZYGQ5DCMZUGE5G433XMU5DGOBSHIYTGMA=/GettyImages-2279226293.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/balogun-everton-monaco",
  },
};

export default function BalogunEvertonMonacoLayout({ children }) {
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
              "Everton Reach Agreement With Monaco for Folarin Balogun as Premier League Return Nears",
            image:
              "https://assets.goal.com/images/v3/blt14fc8dda9e344682/crop/MM5DEMZYGQ5DCMZUGE5G433XMU5DGOBSHIYTGMA=/GettyImages-2279226293.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-09-01T16:45:00Z",
            dateModified: "2026-09-01T16:45:00Z",
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
              "Folarin Balogun",
              "Everton",
              "Monaco",
              "USMNT",
              "Premier League transfer",
              "David Moyes",
              "transfer deadline",
            ],
            articleSection: "USMNT",
            description:
              "Everton and Monaco have agreed a deal for Folarin Balogun, with personal terms reported agreed and a medical scheduled on deadline day.",
          }),
        }}
      />
    </div>
  );
}