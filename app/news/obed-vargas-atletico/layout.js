// app/news/obed-vargas-atletico/layout.js

export const metadata = {
  title: 'Obed Vargas: From Seattle to Madrid, and Why Atlético See Him as a Project, Not a Risk',
  description:
    'Obed Vargas leaves Seattle Sounders for Atlético Madrid. An in-depth look at why Diego Simeone sees the young midfielder as a long-term project, not a gamble.',
  openGraph: {
    title: 'Obed Vargas: From Seattle to Madrid',
    description:
      'Why Atlético Madrid signed Obed Vargas from Seattle Sounders — and why this move is about development, not hype.',
    url: 'https://www.us11fc.com/news/obed-vargas-atletico',
    siteName: 'US11',
    images: [
      {
        url: 'https://sports.mynorthwest.com/wp-content/uploads/2024/04/Obed-Vargas-plays-for-the-Seattle-Sounders-ball-on-ground-Getty-900.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obed Vargas: From Seattle to Madrid',
    description:
      'Why Atlético Madrid see Obed Vargas as a project, not a risk. From Seattle Sounders to Europe’s elite.',
    images: [
      'https://sports.mynorthwest.com/wp-content/uploads/2024/04/Obed-Vargas-plays-for-the-Seattle-Sounders-ball-on-ground-Getty-900.jpg',
    ],
    creator: '@mioristic',
  },
};

export default function ObedVargasLayout({ children }) {
  return (
    <main className="w-full bg-white text-[#020617] min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        {children}
      </div>
    </main>
  );
}
