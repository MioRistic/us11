'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSExpansionCitiesPage() {
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

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Cities That Almost Made It: Sacramento, Detroit, Las Vegas, Phoenix & More')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            MLS Cities That Almost Made It: The Expansion Dreams That Died – Sacramento, Detroit, Las Vegas, Phoenix & More
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By US11</span>
            <span>•</span>
            <time dateTime="2026-03-10">March 10, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-lg mb-12">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sacramento_skyline.jpg"
            alt="Sacramento Republic FC MLS expansion failure"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed text-gray-800">
          <p>
            Major League Soccer sits at 30 teams in 2026, fresh off San Diego FC's debut and with the league riding high ahead of the FIFA World Cup co-hosting duties. Commissioner Don Garber has repeatedly signaled a slowdown in rapid expansion — no new teams imminent, focus on stability, stadiums, and the international calendar shift post-2026.
          </p>

          <p>
            But the map still has glaring gaps: massive metro areas without an MLS club, cities that once held conditional awards, billionaire-backed bids, or serious negotiations, only to see dreams collapse.
          </p>

          <p>
            These are the "what if" markets — the ones that got closest but never crossed the finish line. From record expansion fees to stadium politics and shifting priorities, here's why these cities remain on the outside looking in.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 leading-snug border-l-4 border-blue-600 pl-4">
            Sacramento Republic FC: The Most Painful Near-Miss
          </h2>

          <p>
            No story stings quite like Sacramento's. In 2019, MLS awarded the Republic FC the 29th spot, set for a 2022 debut...
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 leading-snug border-l-4 border-blue-600 pl-4">
            Detroit: The Sleeping Giant That Keeps Waking Up Late
          </h2>

          <p>
            Detroit's metro area (over 4 million) is one of the largest without top-flight soccer...
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 leading-snug border-l-4 border-blue-600 pl-4">
            Las Vegas: Sin City's Endless Tease
          </h2>

          <p>
            Vegas has flirted with MLS for over a decade...
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 leading-snug border-l-4 border-blue-600 pl-4">
            Phoenix: The Desert Market That Won't Bloom
          </h2>

          <p>
            Phoenix (metro ~5 million, TV rank high) has been a perennial contender...
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 leading-snug border-l-4 border-blue-600 pl-4">
            Other Notable "Almosts" and Historical Near-Misses
          </h2>

          <p>
            Tampa Bay: Original 1996 MLS club (Mutiny) folded in 2001; relaunch bids have surfaced...
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 leading-snug border-l-4 border-blue-600 pl-4">
            What's Next? Expansion Beyond 30?
          </h2>

          <p>
            Garber's 2025-2026 comments emphasize caution...
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Billionaire ownership ready to pay $500M+ fees</li>
            <li>Shovel-ready stadium plans (or public-private deals)</li>
            <li>Strong corporate/TV support</li>
            <li>No direct cannibalization of existing teams</li>
          </ul>

          <p>
            Detroit, Las Vegas, Phoenix, Sacramento, and perhaps Indianapolis or Tampa could resurface if the stars align...
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600 space-y-1">
            <p>Published: March 10, 2026</p>
            <p>Author: US11</p>
          </div>

          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}