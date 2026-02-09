// app/ronaldo/layout.js

export const metadata = {
  title: "Cristiano Ronaldo and Inter Miami: Why a Move to MLS Isn’t So Simple",
  description:
    "Cristiano Ronaldo's standoff with Al Nassr sparks MLS speculation, but high wages, roster rules, and tactical fit make a move to Inter Miami far from straightforward.",
  openGraph: {
    title: "Cristiano Ronaldo and Inter Miami: Why a Move to MLS Isn’t So Simple",
    description:
      "Ronaldo’s salary demands, MLS financial rules, and tactical considerations make a potential move to Inter Miami complex. Read the full analysis.",
    url: "https://www.us11fc.com/news/ronaldo-inter-miami-mls",
    siteName: "US11",
    images: [
      {
        url: "https://assets.goal.com/images/v3/getty-2167147749/crop/MM5DIOJSHA5DENZXGI5G433XMU5DAORRGM2A====/GettyImages-2167147749.jpg?auto=webp&format=pjpg&width=1920&quality=60",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristiano Ronaldo and Inter Miami: Why a Move to MLS Isn’t So Simple",
    description:
      "Salary, roster rules, and tactical fit make a Ronaldo transfer to Inter Miami far from simple. Full story and analysis.",
    images: [
      "https://assets.goal.com/images/v3/getty-2167147749/crop/MM5DIOJSHA5DENZXGI5G433XMU5DAORRGM2A====/GettyImages-2167147749.jpg?auto=webp&format=pjpg&width=1920&quality=60"
    ],
    creator: "@mioristic",
  },
};

export default function RonaldoLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
