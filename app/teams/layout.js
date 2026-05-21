// app/teams/layout.js

export const metadata = {
    title: "Trending Teams | SoccerHub",
    description: "Browse trending football teams including MLS and National Teams. Discover logos and team info.",
    openGraph: {
      title: "Trending Teams | SoccerHub",
      description: "Explore trending teams from MLS and more. Click to visit team pages.",
      url: "https://yourdomain.com/teams",
      images: [
        {
          url: "https://yourdomain.com/preview-image.png",
          width: 1200,
          height: 630,
          alt: "Trending Teams Preview Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Trending Teams | SoccerHub",
      description: "Explore trending teams from MLS and more. Click to visit team pages.",
      images: ["https://yourdomain.com/preview-image.png"],
      site: "@yourTwitterHandle",
    },
  };
  
  export default function TeamsLayout({ children }) {
    return (
      <>
        <div className="-mx-4 md:-mx-6 lg:-mx-8 xl:-mx-0 bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
          This page contains affiliate links. When you purchase through the links provided,
          <span className="text-zinc-700 font-medium"> US11 may earn a commission</span>
          at no extra cost to you.
        </div>
        {children}
      </>
    );
  }
  