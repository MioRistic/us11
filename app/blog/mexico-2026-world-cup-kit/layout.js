// app/blog/jerseys/mexico-2026-world-cup-kit/layout.js


// ovo je server-side, nema 'use client'
export const metadata = {
  title: "Mexico FIFA World Cup 2026 Kit: The Green Jersey",
  description:
    "A complete look at Mexico’s 2026 World Cup home kit, featuring the iconic green jersey with Aztec-inspired design and the 'SOMOS MÉXICO' detail.",
  openGraph: {
    title: "Mexico 2026 World Cup Home Kit: Green Jersey",
    description:
      "Explore Mexico’s 2026 FIFA World Cup home kit, youth and goalkeeper editions, and shop the official El Tri replica jerseys.",
    url: "https://us11fc.com/blog/mexico-2026-world-cup-kit",
    siteName: "MLS Fan Store",
    images: [
      {
        url: "https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico 2026 World Cup Home Kit: Green Jersey",
    description:
      "Shop Mexico’s 2026 FIFA World Cup home kit featuring the iconic green jersey with Aztec-inspired design and 'SOMOS MÉXICO' detail.",
    images: [
      "https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018",
    ],
    creator: "@yourtwitterhandle",
  },
};

export default function JerseyLayout({ children }) {
  return (
    <main className="w-full bg-white text-[#020617] min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">{children}</div>
    </main>
  );
}
