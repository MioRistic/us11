// layout.js
export const metadata = {
  title:
    "Orlando Blew a 2-0 Lead in Chicago. Griezmann Still Shined. Charlotte and Philly Clinched on the Same Night.",
  description:
    "Antoine Griezmann scored and assisted in Orlando’s 2-2 draw at Chicago. Robert Lewandowski hit the post. Charlotte and Philadelphia clinched playoff spots on the same night.",
  openGraph: {
    title:
      "Orlando Blew a 2-0 Lead in Chicago. Griezmann Still Shined. Charlotte and Philly Clinched on the Same Night.",
    description:
      "Griezmann starred in Orlando’s trip to Chicago as the Lions dropped a 2-0 lead. Charlotte and the Union locked up their playoff berths.",
    url: "https://www.us11fc.com/news/orlando-chicago-griezmann-playoff-race",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2294480138/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORWGY======/GettyImages-2294480138.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 675,
        alt: "Antoine Griezmann Orlando City vs Chicago Fire",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Orlando Blew a 2-0 Lead in Chicago. Griezmann Still Shined. Charlotte and Philly Clinched.",
    description:
      "Griezmann scored and assisted in Orlando’s 2-2 draw at Chicago. Charlotte and Philadelphia clinched playoff spots the same night.",
    images: [
      "https://assets.goal.com/images/v3/getty-2294480138/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORWGY======/GettyImages-2294480138.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Orlando Blew a 2-0 Lead in Chicago. Griezmann Still Shined. Charlotte and Philly Clinched on the Same Night.",
            image:
              "https://assets.goal.com/images/v3/getty-2294480138/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORWGY======/GettyImages-2294480138.jpg?auto=webp&format=pjpg&width=3840&quality=60",
            datePublished: "2026-10-29T17:00:00Z",
            dateModified: "2026-10-29T17:00:00Z",
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
              "Antoine Griezmann",
              "Robert Lewandowski",
              "Orlando City",
              "Chicago Fire",
              "Charlotte FC",
              "Philadelphia Union",
              "MLS playoffs",
              "MLS 2026",
            ],
            articleSection: "MLS",
            description:
              "Antoine Griezmann scored and assisted in Orlando City’s 2-2 draw at Chicago Fire. Charlotte FC and the Philadelphia Union clinched playoff spots on the same night.",
          }),
        }}
      />
    </div>
  );
}