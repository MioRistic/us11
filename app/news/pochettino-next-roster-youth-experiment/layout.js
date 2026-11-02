import React from 'react';

const title =
  'Pochettino’s Next Roster Will Tell Us Whether the Youth Experiment Was Real';

const description =
  'Mauricio Pochettino’s first competitive USMNT squad since the World Cup will reveal whether the young players who impressed in the fall friendlies have earned a place when the results start to count.';

const articleUrl =
  'https://www.us11fc.com/news/pochettino-next-roster-youth-experiment';

const articleImage =
  'https://assets.goal.com/images/v3/getty-2284795056/crop/MM5DGNZUGQ5DEMJQGY5G433XMU5DAORRHE2Q====/GettyImages-2284795056.jpg?auto=webp&format=pjpg&width=2048&quality=60';

export const metadata = {
  title: `${title} | US11`,
  description,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title,
    description,
    url: articleUrl,
    siteName: 'US11',
    type: 'article',
    publishedTime: '2026-11-02',
    authors: ['Mio Ristić'],
    images: [
      {
        url: articleImage,
        width: 2048,
        alt: 'Mauricio Pochettino, head coach of the United States men’s national soccer team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [articleImage],
  },
};

export default function ArticleLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description,
    image: [articleImage],
    datePublished: '2026-11-02',
    dateModified: '2026-11-02',
    author: {
      '@type': 'Person',
      name: 'Mio Ristić',
    },
    publisher: {
      '@type': 'Organization',
      name: 'US11',
      url: 'https://www.us11fc.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: 'USMNT',
    keywords: [
      'USMNT',
      'Mauricio Pochettino',
      'United States Men’s National Team',
      'Concacaf Nations League',
      'Julian Hall',
      'Justin Ellis',
      'Cavan Sullivan',
      'Haiti',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}