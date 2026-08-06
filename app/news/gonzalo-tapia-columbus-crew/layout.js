// app/news/gonzalo-tapia-columbus-crew/layout.js

export const metadata = {
  title: "Columbus Crew Add Chilean Forward Gonzalo Tapia on Loan from São Paulo",
  description:
    "Columbus Crew have acquired Chilean forward Gonzalo Tapia on loan from São Paulo through the 2027 MLS Sprint Season, with an option to make the deal permanent.",
  openGraph: {
    title: "Columbus Crew Add Chilean Forward Gonzalo Tapia on Loan from São Paulo",
    description:
      "The Crew strengthen their attack with the addition of Chile international Gonzalo Tapia on loan from Brazilian side São Paulo.",
    url: "https://www.us11fc.com/news/gonzalo-tapia-columbus-crew",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/KzsYw3SH/Getty-Images-2279876069.webp",
        width: 1200,
        height: 675,
        alt: "Gonzalo Tapia Columbus Crew",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Columbus Crew Sign Gonzalo Tapia on Loan from São Paulo",
    description:
      "Chilean forward joins the Black & Gold through the 2027 Sprint Season with a permanent option.",
    images: ["https://i.ibb.co/KzsYw3SH/Getty-Images-2279876069.webp"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/gonzalo-tapia-columbus-crew",
  },
};

export default function GonzaloTapiaColumbusLayout({ children }) {
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
            headline:
              "Columbus Crew Add Chilean Forward Gonzalo Tapia on Loan from São Paulo",
            image: "https://i.ibb.co/KzsYw3SH/Getty-Images-2279876069.webp",
            datePublished: "2026-08-06T10:00:00Z",
            dateModified: "2026-08-06T12:00:00Z",
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
              "Gonzalo Tapia",
              "Columbus Crew",
              "São Paulo",
              "MLS Transfer",
              "Chile",
              "MLS 2026",
              "Crew96",
            ],
            articleSection: "MLS",
            description:
              "Columbus Crew have acquired Chilean forward Gonzalo Tapia on loan from São Paulo through the 2027 MLS Sprint Season, with an option to make the deal permanent.",
          }),
        }}
      />
    </div>
  );
}