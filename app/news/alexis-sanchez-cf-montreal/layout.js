// app/news/alexis-sanchez-cf-montreal/layout.js

export const metadata = {
  title: "CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player",
  description:
    "CF Montréal have signed Chilean legend Alexis Sánchez as a Designated Player through the 2027 MLS Sprint Season, with a club option for 2027-28.",
  openGraph: {
    title: "CF Montréal Sign Alexis Sánchez as Designated Player",
    description:
      "Chilean great Alexis Sánchez joins CF Montréal as a free agent Designated Player after leaving Sevilla.",
    url: "https://www.us11fc.com/news/alexis-sanchez-cf-montreal",
    siteName: "US11",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10",
        width: 1200,
        height: 675,
        alt: "Alexis Sánchez CF Montréal signing",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CF Montréal Sign Alexis Sánchez as Designated Player",
    description: "Chilean legend joins Montréal after leaving Sevilla.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/alexis-sanchez-cf-montreal",
  },
};

export default function Layout({ children }) {
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
              "CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10",
            datePublished: "2026-08-11T18:00:00Z",
            dateModified: "2026-08-11T18:00:00Z",
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
              "Alexis Sánchez",
              "CF Montréal",
              "MLS",
              "Designated Player",
              "Chile",
              "Sevilla",
              "MLS transfer",
            ],
            articleSection: "MLS",
          }),
        }}
      />
    </div>
  );
}