// app/news/daniel-gazdag-new-england/layout.js

export const metadata = {
  title:
    "Columbus Bought Out Daniel Gazdag. New England Is Ready to Take the Version Philadelphia Used to Have.",
  description:
    "The Columbus Crew bought out Daniel Gazdag’s contract. Sources say the New England Revolution are finalizing a signing — without using a Designated Player slot.",
  openGraph: {
    title:
      "Columbus Bought Out Daniel Gazdag. New England Are Finalizing a Signing.",
    description:
      "A $4 million Crew experiment ends in a buyout. New England want the Philadelphia version of Gazdag, not the Columbus one.",
    url: "https://i.ibb.co/67G3qLs1/Getty-Images-2156665659-2048x1365.webp",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/4ndt3ztQ/images-8.jpg",
        width: 1200,
        height: 675,
        alt: "Daniel Gazdag New England Revolution",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crew Buy Out Gazdag as Revolution Finalize Signing",
    description:
      "Not a DP in New England. Columbus open a roster slot before the window closes.",
    images: ["https://i.ibb.co/67G3qLs1/Getty-Images-2156665659-2048x1365.webp"],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/daniel-gazdag-new-england",
  },
};

export default function DanielGazdagNewEnglandLayout({ children }) {
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
              "Columbus Bought Out Daniel Gazdag. New England Is Ready to Take the Version Philadelphia Used to Have.",
            image: "https://i.ibb.co/67G3qLs1/Getty-Images-2156665659-2048x1365.webp",
            datePublished: "2026-08-28T23:40:00Z",
            dateModified: "2026-08-28T23:48:00Z",
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
              "Daniel Gazdag",
              "New England Revolution",
              "Columbus Crew",
              "MLS",
              "Designated Player",
              "Philadelphia Union",
              "Santi Rodriguez",
              "transfer window",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}