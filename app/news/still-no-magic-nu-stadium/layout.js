// app/news/still-no-magic-nu-stadium/layout.js

export const metadata = {
  title: "Still No Magic at Nu Stadium: Messi and Suárez Draw a Blank as Inter Miami Fail to Win at Home Again",
  description:
    "Inter Miami remain winless at their new Nu Stadium after a frustrating 1-1 draw with New England Revolution. Messi and Suárez couldn't find the spark despite 1,500 career goals between them.",
  openGraph: {
    title: "Still No Magic at Nu Stadium: Messi & Suárez Struggle at Home",
    description: "Inter Miami 1-1 New England Revolution – Despite the star power, the Herons are still searching for their first win at Nu Stadium.",
    url: "https://www.us11fc.com/news/still-no-magic-nu-stadium",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2273149300/crop/MM5DENBWGQ5DCMZYGY5G433XMU5DKNRRHIYTIMA=/GettyImages-2273149300.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1920,
        height: 1080,
        alt: "Inter Miami vs New England Revolution at Nu Stadium",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Still No Magic at Nu Stadium | Inter Miami 1-1 New England",
    description: "Messi and Suárez unable to inspire victory as Inter Miami remain winless at their new home.",
    images: ["https://assets.goal.com/images/v3/getty-2270923706/crop/MM5DGOBSGI5DEMJVGA5G433XMU5DAORTGEYA====/GettyImages-2270923706.jpg?auto=webp&format=pjpg&width=1920&quality=80"],
    creator: "@US11FC",
  },
};

export default function InterMiamiNuStadiumLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}