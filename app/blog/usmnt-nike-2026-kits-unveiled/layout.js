// ./app/news/usmnt-nike-2026-kits/layout.js (or whatever path you're using)
import React from 'react';

// Server component – metadata exported for SEO
export const metadata = {
  title:
    "USMNT Nike 2026 Kits Unveiled: Stripes Home & Stars Away – Shop Replica & Authentic Jerseys",
  description:
    "U.S. Soccer and Nike reveal bold 2026 World Cup kits: wavy Stripes home jersey ($100 replica) and starry navy away. Shop USMNT Nike 2026 home/away stadium replica, match authentic, and Pulisic player jerseys now.",
  keywords: [
    "USMNT 2026 kit",
    "Nike USMNT 2026 jersey",
    "USMNT home kit 2026",
    "USMNT away kit 2026",
    "Nike Stripes kit",
    "Nike Stars kit",
    "buy USMNT 2026 jersey",
    "World Cup 2026 USMNT gear",
    "US11 USMNT analysis"
  ],
  openGraph: {
    title:
      "USMNT Nike 2026 Kits: Patriotic Stripes & Stars for Home World Cup",
    description:
      "Official reveal: USMNT 2026 home (Stripes) and away (Stars) kits by Nike. Replica jerseys from $100, authentic from $180. Shop now ahead of World Cup 2026.",
    url: "https://www.us11fc.com/news/usmnt-nike-2026-kits",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/blt532e5fdd75fc8dc0/crop/MM5DIMBZGM5DEMZQGI5G433XMU5DAORYHA======/USSF_MNT_Kit_Launch_Vogue_mntjerseyshoot_11-09-25-124.jpg?auto=webp&format=pjpg&width=1200&quality=80",
        width: 1200,
        height: 800,
        alt: "USMNT Nike 2026 kits official launch – home and away jerseys"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "USMNT Nike 2026 Kits: Stripes Home & Stars Away Revealed",
    description:
      "New USMNT 2026 jerseys: $100 replica home/away, $180 authentic. Bold patriotic designs for World Cup 2026. Shop via Fanatics affiliate.",
    images: [
      "https://assets.goal.com/images/v3/blt532e5fdd75fc8dc0/crop/MM5DIMBZGM5DEMZQGI5G433XMU5DAORYHA======/USSF_MNT_Kit_Launch_Vogue_mntjerseyshoot_11-09-25-124.jpg?auto=webp&format=pjpg&width=1200&quality=80"
    ],
    creator: "@US11FC"
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/usmnt-nike-2026-kits"
  }
};

export default function Layout({ children }) {
  return <div className="min-h-screen bg-white text-[#020617]">{children}</div>;
}