export const metadata = {
title:
"Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.",
description:
"Nashville SC won the 2026 MLS Supporters’ Shield with a disciplined defense, an efficient attack and a team built to deliver results. Here is how they did it.",
openGraph: {
title:
"Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.",
description:
"Nashville SC secured the first Supporters’ Shield in club history. A closer look at the defensive structure, attacking balance and consistency behind their historic season.",
url: "https://www.us11fc.com/news/nashville-sc-2026-supporters-shield",
siteName: "US11",
images: [
{
url: "https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920",
width: 1200,
height: 675,
alt: "Nashville SC players celebrating the 2026 MLS Supporters’ Shield",
},
],
locale: "en_US",
type: "article",
},
twitter: {
card: "summary_large_image",
title: "Nashville SC Won the 2026 Supporters’ Shield",
description:
"Nashville SC made club history. Here is how they won the 2026 MLS Supporters’ Shield.",
images: [
"https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920",
],
creator: "@US11FC",
},
alternates: {
canonical:
"https://www.us11fc.com/news/nashville-sc-2026-supporters-shield",
},
};

export default function NashvilleSupportersShieldLayout({ children }) {
const articleImage =
"https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920";

return ( <div className="bg-white min-h-screen"> <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
{children} </main>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline:
          "Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.",
        image: [articleImage],
        datePublished: "2026-10-25T00:00:00Z",
        dateModified: "2026-10-25T00:00:00Z",
        author: {
          "@type": "Person",
          name: "Mio Ristić",
        },
        publisher: {
          "@type": "Organization",
          name: "US11",
          logo: {
            "@type": "ImageObject",
            url: "https://www.us11fc.com/logo.png",
          },
        },
        keywords: [
          "Nashville SC",
          "MLS",
          "Supporters’ Shield",
          "2026 MLS season",
          "Sam Surridge",
          "Hany Mukhtar",
          "Cristian Espinoza",
          "Brian Schwake",
        ],
        articleSection: "MLS",
        description:
          "Nashville SC won the first Supporters’ Shield in club history. An analysis of the defense, attacking options and consistency behind their 2026 MLS campaign.",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.us11fc.com/news/nashville-sc-2026-supporters-shield",
        },
      }),
    }}
  />
</div>

);
}
