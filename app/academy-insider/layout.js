// app/academy-insider/layout.js

export const metadata = {
  title: "Academy Insider | US11",
  description:
    "Academy Insider by US11 — stories, pathways, and guidance for young players, coaches, and football communities across the United States.",
  openGraph: {
    title: "Academy Insider | US11",
    description:
      "US11’s Academy Insider: honest guidance, real information, and player pathways for the next generation of football talent.",
    url: "https://www.us11fc.com/academy-insider",
    siteName: "US11",
    images: [
      {
        url: "https://images.pexels.com/photos/3886066/pexels-photo-3886066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 1200,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy Insider | US11",
    description:
      "Player pathways, coaches’ spotlight, and real football guidance from the US11 community.",
    images: [
      "https://images.pexels.com/photos/3886066/pexels-photo-3886066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    creator: "@mioristic", // zameni ako treba
  },
};

export default function AcademyInsiderLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-0 py-10">
        {children}
      </main>
    </div>
  );
}
