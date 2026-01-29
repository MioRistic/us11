// app/werner/layout.js

export const metadata = {
  title: "Timo Werner in San Jose: The Contract, the Context, and Why This Transfer Changes the Direction of the Earthquakes",
  description:
    "Timo Werner, the German international forward, joins San Jose Earthquakes until 2028 as a Designated Player. Full story and analysis of the transfer and its impact.",
  openGraph: {
    title: "Timo Werner in San Jose: Why This Transfer Changes Everything",
    description:
      "The San Jose Earthquakes acquire Timo Werner from RB Leipzig. Learn about the contract, MLS technical details, and the strategic impact of this move.",
    url: "https://www.us11fc.com/news/timo-werner-san-jose",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-1752670823/crop/MM5DEOBXHE5DCNRRHE5G433XMU5DAORRGUYA====/GettyImages-1752670823.jpg?auto=webp&format=pjpg&width=3840&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timo Werner in San Jose: Why This Transfer Changes Everything",
    description:
      "Timo Werner joins San Jose Earthquakes until 2028. Analysis of the transfer, contract details, and impact on the club’s project.",
    images: [
      "https://assets.goal.com/images/v3/getty-1752670823/crop/MM5DEOBXHE5DCNRRHE5G433XMU5DAORRGUYA====/GettyImages-1752670823.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    ],
    creator: "@mioristic", // replace with US11's official Twitter handle
  },
};

export default function WernerLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
