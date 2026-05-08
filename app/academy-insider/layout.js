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
        url: "https://images.unsplash.com/photo-1622673912068-6ae79182a72d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1622673912068-6ae79182a72d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    creator: "@mioristic",
  },
};

export default function AcademyInsiderLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}