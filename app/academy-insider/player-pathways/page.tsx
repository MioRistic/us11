'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string | StaticImageData;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
  "id": 2002,
  "title": "Route 88: From Pro Players to Guiding the Next Generation | Exclusive Interview",
  "author": "Mio Ristić",
  "date": "April 07, 2026",
  "excerpt": "Kirill and Carlota, two active professional players with experience in Europe and the U.S. college system, share honest advice about scholarships, common mistakes, D1 vs D2/NAIA, and long-term player development.",
  "imageUrl": "https://i.ibb.co/ymqP0RqK/Dark-Blue-and-White-Modern-Gaming-League-Versus-Youtube-Thumbnail.png",
  "slug": "academy-insider/player-pathways/route88-interview"
},
  {
  id: 2001,
  title: "From Portugal to the U.S. – Learning the Hard Way: Exclusive Interview with João Pereira",
  author: "Mio Ristić",
  date: "January 31, 2026",
  excerpt:
    "João Pereira shares honest insights on adapting from Portugal to the U.S. college and USL2 system, the mental side of football, and what young players must really understand about development.",
  imageUrl: "https://i.ibb.co/s9hjNbJL/Profile-Pic.jpg",
  slug: "academy-insider/player-pathways/joao-pereira-interview",
},
  {
    id: 2000,
    title: "What No One Tells Young American Soccer Players – Harrison Szep Interview",
    author: "Mio Ristić",
    date: "January 28, 2026",
    excerpt:
      "Harrison Szep, founder of StudentAthlete.ai, shares real insights on U.S. youth soccer pathways, recruitment, and how young players can succeed academically and athletically.",
    imageUrl: "https://i.ibb.co/27025ZWc/harrison1.png",
    slug: "academy-insider/player-pathways/harrison-szep-interview",
  },
];

export default function PlayerPathwaysPage() {
  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 6));

  const loadMorePosts = () => {
    setVisiblePosts((prev) => [
      ...prev,
      ...blogPosts.slice(prev.length, prev.length + 6),
    ]);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold text-[#020617] mb-12">
          Player Pathways
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <Link
              key={post.id} // ✅ Jedinstveni key
              href={`/${post.slug}`} // ✅ Apsolutna ruta
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition block"
            >
              <div className="relative h-48 bg-gray-200">
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {visiblePosts.length < blogPosts.length && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMorePosts}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
