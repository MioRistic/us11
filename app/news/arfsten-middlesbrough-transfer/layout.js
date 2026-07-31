// app/news/arfsten-middlesbrough-transfer/layout.js

export const metadata = {
  title:
    "Max Arfsten Closing In on Middlesbrough Move — Set to Join USMNT Duo Morris and Berhalter",
  description:
    "Columbus Crew and USMNT wingback Max Arfsten is finalizing a transfer to Middlesbrough worth up to $7.5 million. He will join Aidan Morris and Sebastian Berhalter in the Championship.",
  openGraph: {
    title:
      "Max Arfsten Closing In on Middlesbrough Move — Set to Join USMNT Duo",
    description:
      "Sources: Arfsten finalizing $7.5M move from Columbus Crew to Middlesbrough. Will team with Morris and Berhalter.",
    url: "https://www.us11fc.com/news/arfsten-middlesbrough-transfer",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2222812419/crop/MM5DINBRG45DENBYGU5G433XMU5DAORSGMYA====/GettyImages-2222812419.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Max Arfsten Columbus Crew USMNT",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Arfsten Closing In on Middlesbrough Move",
    description:
      "USMNT wingback finalizing $7.5M transfer to join Morris and Berhalter at Boro.",
    images: [
      "https://assets.goal.com/images/v3/getty-2222812419/crop/MM5DINBRG45DENBYGU5G433XMU5DAORSGMYA====/GettyImages-2222812419.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@US11FC",
  },
  alternates: {
    canonical: "https://www.us11fc.com/news/arfsten-middlesbrough-transfer",
  },
};

export default function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen w-full">
      <main className="w-full">{children}</main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Max Arfsten Closing In on Middlesbrough Move — Set to Join USMNT Duo Morris and Berhalter",
            image:
              "https://assets.goal.com/images/v3/getty-2222812419/crop/MM5DINBRG45DENBYGU5G433XMU5DAORSGMYA====/GettyImages-2222812419.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-07-31T20:00:00Z",
            dateModified: "2026-07-31T23:00:00Z",
            author: {
              "@type": "Person",
              name: "Mio Ristić",
            },
            publisher: {
              "@type": "Organization",
              name: "US11",
              logo: {
                "@type": "ImageObject",
                url: "https://us11fc.com/logo.png",
              },
            },
            keywords: [
              "Max Arfsten",
              "Middlesbrough",
              "Columbus Crew",
              "USMNT",
              "Aidan Morris",
              "Sebastian Berhalter",
              "Championship",
              "MLS transfer",
            ],
            articleSection: "USMNT",
          }),
        }}
      />
    </div>
  );
}