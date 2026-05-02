export const metadata = {
    title: 'Obed Vargas Meets Griezmann at Club World Cup',
    description:
      'Seattle’s young star Obed Vargas finally meets his idol Antoine Griezmann after the Club World Cup match between Seattle Sounders and Atlético Madrid.',
    openGraph: {
      title: 'Obed Vargas Meets Griezmann at Club World Cup',
      description:
        'Seattle’s young star Obed Vargas finally meets his idol Antoine Griezmann after the Club World Cup match between Seattle Sounders and Atlético Madrid.',
      url: 'https://www.us11fc.com/blog/vargas-griezmann-moment',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2207507396/crop/MM5DENZXHA5DCNJWGM5G433XMU5DAORRGQ2Q====/GettyImages-2207507396.jpg?auto=webp&format=pjpg&width=3840&quality=60',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Obed Vargas Meets Griezmann at Club World Cup',
      description:
        'Obed Vargas shared a heartfelt post-match moment with Antoine Griezmann at the 2025 Club World Cup.',
      images: [
        'https://assets.goal.com/images/v3/getty-2207507396/crop/MM5DENZXHA5DCNJWGM5G433XMU5DAORRGQ2Q====/GettyImages-2207507396.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      ],
      creator: '@mioristic',
    },
  };
  
  export default function VargasGriezmannLayout({ children }) {
    return (
      <>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "Obed Vargas Meets Griezmann at Club World Cup",
              "image": "https://assets.goal.com/images/v3/getty-2207507396/crop/MM5DENZXHA5DCNJWGM5G433XMU5DAORRGQ2Q====/GettyImages-2207507396.jpg?auto=webp&format=pjpg&width=3840&quality=60",
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
  