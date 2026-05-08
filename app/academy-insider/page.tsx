'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScrollToTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#020617] hover:bg-white hover:text-[#020617] border-2 border-[#020617] text-white px-6 py-3.5 rounded-2xl font-semibold flex items-center gap-2 shadow-xl transition-all duration-300 z-50"
    >
      ↑ Back to Top
    </button>
  );
};

const blogPosts = [
  {
    id: 2002,
    title: "Route 88: From Pro Players to Guiding the Next Generation | Exclusive Interview",
    author: "Mio Ristić",
    date: "April 07, 2026",
    excerpt: "Kirill and Carlota, two active professional players with experience in Europe and the U.S. college system, share honest advice about scholarships, common mistakes, D1 vs D2/NAIA, and long-term player development.",
    imageUrl: "https://i.ibb.co/nN0rs4C9/Dark-Blue-and-White-Modern-Gaming-League-Versus-Youtube-Thumbnail-1.png",
    slug: "academy-insider/player-pathways/route88-interview"
  },
  {
    id: 2001,
    title: "From Portugal to the U.S. – Learning the Hard Way: Exclusive Interview with João Pereira",
    author: "Mio Ristić",
    date: "January 31, 2026",
    excerpt: "João Pereira shares honest insights on adapting from Portugal to the U.S. college and USL2 system, the mental side of football, and what young players must really understand about development.",
    imageUrl: "https://i.ibb.co/s9hjNbJL/Profile-Pic.jpg",
    slug: "academy-insider/player-pathways/joao-pereira-interview",
  },
  {
    id: 2000,
    title: "What No One Tells Young American Soccer Players – Harrison Szep Interview",
    author: "Mio Ristić",
    date: "January 28, 2026",
    excerpt: "Harrison Szep, founder of StudentAthlete.ai, shares real insights on U.S. youth soccer pathways, recruitment, and how young players can succeed academically and athletically.",
    imageUrl: "https://i.ibb.co/27025ZWc/harrison1.png",
    slug: "academy-insider/player-pathways/harrison-szep-interview",
  },
];

export default function AcademyInsider() {
  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 6));

  const loadMorePosts = () => {
    setVisiblePosts((prev) => [
      ...prev,
      ...blogPosts.slice(prev.length, prev.length + 6),
    ]);
  };

  return (
    <div className="min-h-screen bg-white text-[#020617]">
      
      {/* HERO BANNER - Popravljena verzija */}
<section className="relative w-full h-[560px] md:h-[680px] lg:h-[760px] overflow-hidden">
  <Image
    src="https://images.pexels.com/photos/33210167/pexels-photo-33210167.jpeg"
    alt="US11 Academy Insider"
    fill
    className="object-cover"
    priority
    quality={92}
  />

  {/* Gradient Overlay - Levo → Desno */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

  {/* Tekst preko slike */}
  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white z-10">
    
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-[-2px] max-w-4xl mb-4 md:mb-6">
      Academy Insider
    </h1>

    <div className="max-w-2xl text-[15px] sm:text-base md:text-lg leading-relaxed text-gray-100 space-y-4">
      <p>
        US11 is a community built on a deep love for football and a clear mission: 
        to support young talents, coaches, and everyone who truly lives the game.
      </p>

      <p className="hidden md:block">
        We all know that the United States is not a perfect place to begin and develop 
        a football career. That reality cannot be ignored — and that is exactly why US11 exists.
      </p>

      <h3 className="text-lg md:text-xl font-semibold text-white pt-2">
        Honest Guidance, Real Information
      </h3>
    </div>
  </div>
</section>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">Player Pathways</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <Link
              key={post.id}
              href={`/${post.slug}`}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition block"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {visiblePosts.length < blogPosts.length && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMorePosts}
              className="bg-[#020617] text-white px-8 py-3.5 rounded-xl hover:bg-gray-800 transition font-semibold"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}