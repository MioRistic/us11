// app/news/mls-matchday-2/layout.js

export const metadata = {
  title:
    "MLS Matchday 2: Messi's Magic Sparks Miami Comeback, Western Teams Dominate Early",
  description:
    "Matchday 2 of the 2026 MLS season delivered drama as Lionel Messi inspired Inter Miami's comeback in the Florida Derby, while Western Conference teams like LAFC, San Diego FC, and Vancouver Whitecaps stayed dominant.",
  openGraph: {
    title:
      "MLS Matchday 2: Messi's Magic Sparks Miami Comeback, Western Teams Dominate Early",
    description:
      "Matchday 2 of the 2026 MLS season delivered drama as Lionel Messi inspired Inter Miami's comeback in the Florida Derby, while Western Conference teams like LAFC, San Diego FC, and Vancouver Whitecaps stayed dominant.",
    type: "article",
    publishedTime: "2026-03-02T00:00:00.000Z",
    authors: ["Mio Ristić"],
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2264292238/crop/MM5DGNBSGA5DCOJSGQ5G433XMU5DAORSHA======/GettyImages-2264292238.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 630,
        alt: "MLS Matchday 2 recap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MLS Matchday 2: Messi's Magic Sparks Miami Comeback, Western Teams Dominate Early",
    description:
      "Matchday 2 of the 2026 MLS season delivered drama as Lionel Messi inspired Inter Miami's comeback in the Florida Derby.",
    images: [
      "https://assets.goal.com/images/v3/getty-2264292238/crop/MM5DGNBSGA5DCOJSGQ5G433XMU5DAORSHA======/GettyImages-2264292238.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
  },
};

export default function Layout({ children }) {
  return children;
}