// app/blog/atlanta-united-marta-collection/layout.js

export const metadata = {
  title: "Atlanta United x MARTA Collection | US11",
  description:
    "Atlanta United and MARTA collide in one of the most culturally authentic collaborations in MLS — blending football, public transit, and streetwear culture.",

  openGraph: {
    title: "Atlanta United x MARTA Collection | US11",
    description:
      "A closer look at Atlanta United’s MARTA collaboration and how football, fashion, and Atlanta culture collide.",
    url: "https://www.us11fc.com/blog/atlanta-united-marta-collection",
    siteName: "US11",

    images: [
      {
        url: "https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480",
        width: 1200,
        height: 800,
      },
    ],

    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Atlanta United x MARTA Collection | US11",
    description:
      "Football, public transit, and streetwear collide in Atlanta United’s latest culturally-driven collaboration.",

    images: [
      "https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480",
    ],

    creator: "@mioristic",
  },
};

export default function AtlantaUnitedMartaCollectionLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}