export const metadata = {
    title: 'Jamie Vardy & MLS Rumors: Why a Move Looks Less Likely',
    description:
      'Exploring why a rumored move to Major League Soccer for Jamie Vardy seems increasingly unlikely, despite connections to Charlotte FC and Dean Smith.',
    openGraph: {
      title: 'Jamie Vardy & MLS Rumors: Why a Move Looks Less Likely',
      description:
        'Despite interest from Charlotte FC and MLS clubs, Jamie Vardy’s future looks more Europe-bound, with Rangers FC emerging as a top contender.',
      url: 'https://us11fc.com/blog/vardy-mls',
      siteName: 'US11',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/blt441143863bcbc649/2.jpg',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jamie Vardy & MLS Rumors: Why a Move Looks Less Likely',
      description:
        'Charlotte FC tried to lure Vardy to MLS, but Rangers FC and European competition may be more appealing. Read the full breakdown.',
      images: [
        'https://assets.goal.com/images/v3/blt441143863bcbc649/2.jpg',
      ],
      creator: '@mioristic',
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
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "Jamie Vardy & MLS Rumors: Why a Move Looks Less Likely",
              "image": "https://assets.goal.com/images/v3/blt441143863bcbc649/2.jpg",
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
  