// app/thomas-muller-mls/layout.js

export const metadata = {
    title: 'Thomas Müller to MLS? The End of an Era, the Start of a New One',
    description:
      'Explore the potential move of Thomas Müller to MLS and what it means for the league, FC Cincinnati, and LAFC.',
    openGraph: {
      title: 'Thomas Müller to MLS? The End of an Era, the Start of a New One',
      description:
        'Learn about Thomas Müller’s career crossroads and MLS transfer rumors involving FC Cincinnati and LAFC.',
      url: 'https://www.us11fc.com/thomas-muller-mls', // zameni stvarnim URL-om
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://assets.bundesliga.com/tachyon/sites/2/2021/05/GettyImages-859182146.jpg?crop=284px,0px,1352px,1080px&fit=540,540',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Thomas Müller to MLS? The End of an Era, the Start of a New One',
      description:
        'Discover the latest rumors and insights on Thomas Müller’s possible MLS move and its impact.',
      images: [
        'https://assets.bundesliga.com/tachyon/sites/2/2021/05/GettyImages-859182146.jpg?crop=284px,0px,1352px,1080px&fit=540,540',
      ],
      creator: '@tvojTwitterHandle', // ubaci ako imaš
    },
  };
  
  export default function ThomasMullerMLSLayout({ children }) {
    return (
      <>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "Thomas Müller to MLS? The End of an Era, the Start of a New One",
              "image": "https://assets.bundesliga.com/tachyon/sites/2/2021/05/GettyImages-859182146.jpg?crop=284px,0px,1352px,1080px&fit=540,540",
              "datePublished": "2026-05-02T12:00:00Z",
              "dateModified": "2026-05-02T12:00:00Z",
              "author": {
                "@type": "Person",
                "name": "Mio Ristić"
              },
              "publisher": {
                "@type": "Organization",
                "name": "US11",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://us11fc.com/logo.png"
                }
              }
            })
          }}
        />
      </>
    );
  }
  