export const metadata = {
    title: 'RodrÃ­guez to Inter Miami â€“ A Move Full of Promise?',
    description:
      'With talks heating up between Inter Miami and Club AmÃ©rica winger Brian RodrÃ­guez, we explore what the Uruguayan star could bring to Messi and SuÃ¡rezâ€™s squad.',
    openGraph: {
      title: 'RodrÃ­guez to Inter Miami â€“ A Move Full of Promise?',
      description:
        'Inter Miami targets Club AmÃ©rica winger Brian RodrÃ­guez. Discover his stats, tactical fit under Mascherano, and the potential impact on Messi and SuÃ¡rezâ€™s team.',
      url: 'https://us11fc.com/blog/brian-rodriguez-inter-miami',
      siteName: 'MLS Fan Store',
      images: [
        {
          url: 'https://assets.goal.com/images/v3/getty-2210154915/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRYHIYTEMQ=/GettyImages-2210154915.jpg?auto=webp&format=pjpg&width=3840&quality=60',
          width: 1200,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Inter Miami and Brian RodrÃ­guez: Perfect Fit or Missed Opportunity?',
      description:
        'Will Brian RodrÃ­guez join Messi and SuÃ¡rez at Inter Miami? Read our full analysis of the potential transfer from Club AmÃ©rica.',
      images: [
        'https://assets.goal.com/images/v3/getty-2210154915/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRYHIYTEMQ=/GettyImages-2210154915.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      ],
      creator: '@yourtwitterhandle',
    },
  };
  

  export default function ({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "RodrÃ­guez to Inter Miami â€“ A Move Full of Promise?",
            "image": "https://assets.goal.com/images/v3/getty-2210154915/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DGNRYHIYTEMQ=/GettyImages-2210154915.jpg?auto=webp&format=pjpg&width=3840&quality=60",
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
  
  
