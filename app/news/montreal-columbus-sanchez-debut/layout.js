// app/news/montreal-columbus-sanchez-debut/layout.js

export const metadata = {
  title: "CF Montréal Edge Columbus 2-1 as Streit’s Strike Seals a Much-Needed Road Win",
  description:
    "CF Montréal defeated Columbus Crew 2-1 on the road. Noah Streit scored the winner and Alexis Sánchez made his debut late in the match.",
  openGraph: {
    title: "CF Montréal Edge Columbus 2-1 — Sánchez Debuts Late",
    description:
      "Prince Osei Owusu and Noah Streit score as CF Montréal end a long winless run. Alexis Sánchez makes his first appearance in a Montréal shirt.",
    url: "https://www.us11fc.com/news/montreal-columbus-sanchez-debut",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
        width: 2048,
        height: 1152,
        alt: "CF Montréal vs Columbus Crew - Alexis Sánchez debut",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CF Montréal 2-1 Columbus — Sánchez Debuts",
    description:
      "Streit’s late strike seals a vital road win for Montréal. Alexis Sánchez enters in the 79th minute for his first MLS appearance with the club.",
    images: [
      "https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/montreal-columbus-sanchez-debut",
  },
};

export default function MontrealColumbusSanchezDebutLayout({ children }) {
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
              "CF Montréal Edge Columbus 2-1 as Streit’s Strike Seals a Much-Needed Road Win",
            image:
              "https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60",
            datePublished: "2026-08-20T16:00:00Z",
            dateModified: "2026-08-20T16:00:00Z",
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
              "CF Montréal",
              "Columbus Crew",
              "Alexis Sánchez",
              "Noah Streit",
              "Prince Osei Owusu",
              "MLS",
              "Sánchez debut",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}