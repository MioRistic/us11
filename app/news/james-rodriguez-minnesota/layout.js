// app/james-rodriguez/layout.js

export const metadata = {
  title: "James Rodríguez in Minnesota: A Move with the World Cup in Mind",
  description:
    "James Rodríguez joins Minnesota United with an eye on the 2026 World Cup, reshaping the club’s identity and bringing world-class quality to MLS.",
  openGraph: {
    title: "James Rodríguez in Minnesota: A Move with the World Cup in Mind",
    description:
      "James Rodríguez, Champions League winner and World Cup Golden Boot winner, joins Minnesota United to prepare for 2026 World Cup and redefine the club’s style. Full story and analysis.",
    url: "https://www.us11fc.com/news/james-rodriguez-minnesota-united",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2162057999/crop/MM5DEMJTGQ5DCMRQGA5G433XMU5DOMR2GE3TS===/GettyImages-2162057999.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Rodríguez in Minnesota: A Move with the World Cup in Mind",
    description:
      "James Rodríguez joins Minnesota United to prepare for 2026 World Cup and bring world-class quality to MLS. Full story and analysis.",
    images: [
      "https://assets.goal.com/images/v3/getty-2162057999/crop/MM5DEMJTGQ5DCMRQGA5G433XMU5DOMR2GE3TS===/GettyImages-2162057999.jpg?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@mioristic", // replace with US11's official Twitter if needed
  },
};

export default function JamesRodriguezLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
