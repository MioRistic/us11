// app/blog/mls-jersey-2026/layout.js

export const metadata = {
  title: "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
  description:
    "MLS jerseys in 2026 are more than kits — they’re fashion, identity, and culture. A deep dive into the designs fans love (and hate) the most.",
  openGraph: {
    title: "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
    description:
      "From Inter Miami to Charlotte FC, explore the MLS 2026 jerseys that define style, culture, and club identity. Full analysis and picks by Mio Ristić.",
    url: "https://www.us11fc.com/blog/mls-jersey-2026",
    siteName: "US11",
    images: [
      {
        url: "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
    description:
      "Which MLS 2026 jerseys actually work as fashion and identity? Full breakdown of the best, weirdest and most iconic kits.",
    images: [
      "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
    ],
    creator: "@mioristic",
  },
};

export default function MLSJerseyLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
