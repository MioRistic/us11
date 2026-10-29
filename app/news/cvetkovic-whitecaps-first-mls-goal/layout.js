import { Metadata } from 'next';

export const metadata = {
  title: 'Aleksa Cvetković Scored His First MLS Goal. Vancouver Looked Like a Team That Has One.',
  description:
    'Aleksa Cvetković scored his first MLS goal in Vancouver Whitecaps’ 4-1 win over San Diego. The 21-year-old Serbian midfielder was named Man of the Match in only his fourth start.',
  openGraph: {
    title: 'Aleksa Cvetković Scored His First MLS Goal. Vancouver Looked Like a Team That Has One.',
    description:
      'The 21-year-old Serbian midfielder opened the scoring in Vancouver’s 4-1 win over San Diego and was named Man of the Match in only his fourth start.',
    url: 'https://www.us11fc.com/news/cvetkovic-whitecaps-first-mls-goal',
    siteName: 'US11',
    images: [
      {
        url: 'https://xdn.tf.rs/2026/10/29/profimedia-1147414591-930594-830x553.webp',
        width: 830,
        height: 553,
        alt: 'Aleksa Cvetković Vancouver Whitecaps',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aleksa Cvetković Scored His First MLS Goal',
    description:
      'The 21-year-old Serbian midfielder scored in Vancouver’s 4-1 win over San Diego and was named Man of the Match.',
    images: [
      'https://xdn.tf.rs/2026/10/29/profimedia-1147414591-930594-830x553.webp',
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline:
              'Aleksa Cvetković Scored His First MLS Goal. Vancouver Looked Like a Team That Has One.',
            image:
              'https://xdn.tf.rs/2026/10/29/profimedia-1147414591-930594-830x553.webp',
            datePublished: '2026-10-29T14:00:00Z',
            dateModified: '2026-10-29T14:00:00Z',
            author: {
              '@type': 'Person',
              name: 'Mio Ristić',
            },
            publisher: {
              '@type': 'Organization',
              name: 'US11',
              logo: {
                '@type': 'ImageObject',
                url: 'https://us11fc.com/logo.png',
              },
            },
            keywords: [
              'Aleksa Cvetković',
              'Vancouver Whitecaps',
              'MLS',
              'San Diego FC',
              'Brian White',
              'Jesper Sørensen',
              'U22 Initiative',
            ],
            articleSection: 'MLS',
            description:
              'Aleksa Cvetković scored his first MLS goal in Vancouver’s 4-1 win over San Diego and was named Man of the Match in only his fourth start.',
          }),
        }}
      />
    </>
  );
}
