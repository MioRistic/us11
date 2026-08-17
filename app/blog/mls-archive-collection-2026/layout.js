// app/blog/mls-archive-collection-2026/layout.js

export const metadata = {
  title:
    '2026 MLS Archive Collection: Ranking the Retro Kits — From Grimace Purple to Mountain Power',
  description:
    'Full ranking and review of the 2026 Adidas x MLS Archive Collection third kits for Austin FC, CF Montréal, Chicago Fire, Houston Dynamo, Orlando City, Philadelphia Union, Real Salt Lake and Vancouver Whitecaps. Mio’s top 3 picks.',
  openGraph: {
    title: '2026 MLS Archive Collection Kit Rankings',
    description:
      'From Austin’s Violet Crown to RSL’s mountain aggression — full kit-by-kit review and ranking of the 2026 Archive Collection.',
    url: 'https://www.us11fc.com/blog/mls-archive-collection-2026',
    siteName: 'US11',
    images: [
      {
        url: 'https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/rsyenouylj95wi8oeipx.jpg',
        width: 1200,
        height: 675,
        alt: '2026 MLS Archive Collection',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 MLS Archive Collection Kit Rankings',
    description:
      'Mio ranks all eight Archive Collection third kits — Montréal, RSL and Vancouver lead the pack.',
    images: [
      'https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/rsyenouylj95wi8oeipx.jpg',
    ],
    creator: '@US11FC',
  },
  alternates: {
    canonical: 'https://www.us11fc.com/blog/mls-archive-collection-2026',
  },
};

export default function Layout({ children }) {
  return children;
}