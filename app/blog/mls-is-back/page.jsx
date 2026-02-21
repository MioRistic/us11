'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSIsBack() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS is Back: A New Season Begins')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS is Back: A New Season Begins
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-21">February 21, 2026</time>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link
              href="/teams/mls"
              className="text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition"
            >
              #MLS
            </Link>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_1280x720/f_auto/mls/2024-season-opener.jpg"
            alt="MLS season kickoff"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Major League Soccer / Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>
            Major League Soccer returns this weekend, opening another season that arrives with more global attention than ever before. What was once viewed primarily as a developmental league has steadily evolved into a competition capable of attracting established international names while continuing to develop domestic talent.
          </p>

          <p>
            The league’s recent growth has been impossible to ignore. Since Lionel Messi’s arrival in 2023, MLS has experienced a noticeable surge in visibility, commercial momentum and international credibility. Importantly, the trend did not stop there — more high‑profile players have continued to arrive, and several new recognizable names join the league ahead of this season, reinforcing the sense that MLS is firmly on an upward trajectory.
          </p>

          <p>
            Competitive balance remains one of the league’s defining characteristics. The salary structure and roster rules continue to produce parity across the standings, making year‑to‑year projections difficult and keeping the regular season unpredictable. Clubs are investing more aggressively in infrastructure, analytics and recruitment, further raising the baseline level of play.
          </p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">
            Season Opener
          </h2>
          <p>
            The 2026 campaign officially begins Saturday night when St. Louis City SC host Charlotte FC at Energizer Park (9:30 pm kickoff). As is often the case with opening fixtures, the match serves more as a symbolic curtain‑raiser than a definitive early statement, but it marks the return of meaningful MLS action after the offseason pause.
          </p>

          <p>
            With another long regular season ahead, the broader focus will quickly shift beyond opening night. The central question surrounding MLS is no longer whether the league is growing — but how far and how fast that growth can continue in the seasons to come.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: February 21, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">
              Back to blog
            </Link>
            <Link
              href="/teams/mls"
              className="text-sm text-red-700 hover:text-red-800 ml-4"
            >
              #MLS
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
