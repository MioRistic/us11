// app/blog/atlanta-united-marta-collection/layout.js

export const metadata = {
  title: "Atlanta United x MARTA: When Football, Public Transit and Street Style Collide",
  description:
    "Atlanta United and MARTA collide in one of the most culturally authentic collaborations in MLS — blending football, public transit, and streetwear culture.",
  openGraph: {
    title: "Atlanta United x MARTA: When Football, Public Transit and Street Style Collide",
    description:
      "A closer look at Atlanta United’s MARTA collaboration and how football, fashion, and Atlanta culture collide.",
    url: "https://www.us11fc.com/blog/atlanta-united-marta-collection",
    siteName: "US11",
    images: [
      {
        url: "https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480",
        width: 1200,
        height: 800,
        alt: "Atlanta United x MARTA Collection",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta United x MARTA Collection",
    description:
      "Football, public transit, and streetwear collide in Atlanta United’s latest culturally-driven collaboration.",
    images: [
      "https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/blog/atlanta-united-marta-collection",
  },
};

export default function AtlantaUnitedMartaCollectionLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      {/* NO max-w – page handles full-bleed + sticky + content width */}
      <main className="w-full">
        {children}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Atlanta United x MARTA: When Football, Public Transit and Street Style Collide",
            image:
              "https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480",
            datePublished: "2026-05-10T10:00:00Z",
            dateModified: "2026-05-10T12:00:00Z",
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
              "Atlanta United",
              "MARTA",
              "Atlanta United merch",
              "MLS Store",
              "Atlanta streetwear",
              "football fashion",
              "MLS kits",
              "Atlanta United x MARTA",
            ],
            articleSection: "Shopping",
            description:
              "Atlanta United and MARTA collide in one of the most culturally authentic collaborations in MLS.",
          }),
        }}
      />
    </div>
  );
}