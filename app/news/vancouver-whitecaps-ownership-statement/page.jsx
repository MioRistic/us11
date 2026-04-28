'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function VancouverFuture() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle = "Vancouver Whitecaps Urge Local Buyers to Step Forward as Relocation Speculation Intensifies";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Vancouver Whitecaps Urge Local Buyers to Step Forward as Relocation Speculation Intensifies
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-28">April 28, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE - NOVA SLIKA */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2271203741/crop/MM5DEMJXGE5DCMRSGE5G433XMU5DCNBSHIZTGNA=/GettyImages-2271203741.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Vancouver Whitecaps"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: | Credit: Getty Images | Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            The Vancouver Whitecaps are at a critical crossroads. In a strongly worded statement released late Monday night, the club made a direct appeal to local investors while acknowledging the very real possibility of relocation.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Public Plea for Local Ownership</h2>
          <p>
            Responding to reports linking the club with a potential move to Las Vegas, the Whitecaps issued a rare public statement outlining their current situation. The club confirmed they have held serious discussions with more than 100 potential buyers over the past 16 months, but no viable offer has emerged that would guarantee the team remains in Vancouver.
          </p>

          <p>
            “It remains the strong preference of this ownership group to find a solution in Vancouver,” the statement read. “If there is a local ownership group with the vision and resources to chart a path forward, we urge them to come forward.”
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Well-Documented Structural Problems</h2>
          <p>
            The Whitecaps have long struggled with the limitations of BC Place — a large, multi-purpose stadium with artificial turf that is not ideal for soccer. Revenue generation is restricted, venue access is complicated, and the economics simply do not compare to clubs with soccer-specific stadiums.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Las Vegas and Other Markets Circling</h2>
          <p>
            According to The Athletic, MLS has already held discussions with interested groups in Las Vegas, which has emerged as the leading candidate should the Whitecaps relocate.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>
          <p>
            Despite sitting second in the Western Conference, the club’s long-term future remains uncertain. The coming months will determine whether local investment can save the Whitecaps or if the club will become MLS’s first relocation in nearly two decades.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: April 28, 2026</span>
          <Link href="/news" className="hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}