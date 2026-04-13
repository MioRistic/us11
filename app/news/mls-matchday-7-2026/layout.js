// app/news/mls-matchday-7-2026/layout.js

export const metadata = {
  title: "MLS Matchday 7 2026: Portland Ends LAFC’s Unbeaten Run, Colorado Thrash Houston 6-2, Red Bulls Youth Shine in Miami",
  description:
    "Full recap from MLS Matchday 7 2026: Portland beat LAFC 2-1, Colorado won 6-2 against Houston, Red Bulls drew 2-2 with Inter Miami and more key results.",
  openGraph: {
    title: "MLS Matchday 7 2026: Portland Stun LAFC, Colorado 6-2 Houston",
    description: "Portland end LAFC’s unbeaten run, Colorado explode 6-2, Red Bulls youth shine in Miami – full Matchday 7 recap.",
    url: "https://www.us11fc.com/news/mls-matchday-7-2026",
    siteName: "US11",
    images: [
      {
        url: "https://i.ibb.co/60w8D5L3/01kp2p36s2sbzft3tvfe.jpg",
        width: 1920,
        height: 1080,
        alt: "MLS Matchday 7 2026 Recap",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Matchday 7 2026 Recap",
    description: "Portland beat LAFC 2-1, Colorado 6-2 Houston, Red Bulls draw with Miami – full recap.",
    images: ["https://i.ibb.co/60w8D5L3/01kp2p36s2sbzft3tvfe.jpg"],
    creator: "@US11FC",
  },
};

export default function MLSMatchday7Layout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}