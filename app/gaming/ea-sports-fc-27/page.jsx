'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function EASportsFC27() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    setMounted(true);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "EA Sports FC 27: Everything New – The Grounds, Manual Defending, Dynamic Corners & More";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            EA Sports FC 27: Everything New – The Grounds, Manual Defending, Dynamic Corners & More
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-10">August 10, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/7NXp1FqH/fc-27-ultimate-plus.avif"
            alt="EA Sports FC 27 Ultimate Plus Edition"
            fill
            className="object-cover"
            priority
          />
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            EA Sports FC 27 launches worldwide on September 25, 2026, with early access beginning September 18 for Ultimate and Ultimate Plus editions. Cover stars Kylian Mbappé and Jude Bellingham headline the new chapter, but the real story lies in the biggest philosophical shift the series has made in years.
          </p>

          <p>
            After community feedback on FC 26, EA has reduced automation across the board and put more power back into the player’s hands. Here’s everything that’s new.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The Grounds – The Biggest New Mode</h3>
          <p>
            The headline addition is <strong>The Grounds</strong>, a social football playground inspired by NBA 2K’s City. Players create their own footballer and explore three districts based on real football cultures: Parkside (Britain), Montclair (Paris) and Zeiza (Buenos Aires).
          </p>
          <p>
            You can jump into Kickabouts, 1v1s, 2v2s, 3v3s and 5v5 Rush matches, meet mentors like Mbappé, Chloe Kelly, Paulo Dybala and Alex Hunter, and develop your player both on and off the pitch. The mode is available only on PlayStation 5, Xbox Series X|S, PC and Nintendo Switch 2.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Gameplay: Manual Skill Over AI Assistance</h3>
          <p>
            The biggest change is defensive. EA has significantly reduced the influence of AI defenders. Automatic tackles and interceptions are far less frequent, forcing players to take control manually. Jockeying is more responsive, tackling range is larger, and well-timed interventions are now clearly rewarded.
          </p>
          <p>
            In attack, spatial awareness has improved. Teammates make smarter overlapping and underlapping runs, while new <strong>Triggered Curved Runs</strong> and <strong>Pass & Follow</strong> options give more creative control. Off-balance dribbling allows agile players to maintain momentum through contact.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Completely Redesigned Corners & Crossing</h3>
          <p>
            Corners are now a two-phase system. First you choose the delivery area and power, then the camera switches into the box where you take control of an attacker. You can use a new Avoidance mechanic to lose your marker and time your run to meet the ball. Crossing has also been reworked to deliver the ball into space rather than directly at a player.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Career Mode Overhaul</h3>
          <p>
            Manager Career receives a fully rebuilt transfer market powered by real-world data from TransferRoom. Negotiations are multi-stage, valuations are more realistic, and AI clubs behave more competitively. Dynamic Overall Ratings now fluctuate throughout the season based on form, morale, fitness and playing time.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Ultimate Team Updates</h3>
          <p>
            Football Ultimate Team introduces the <strong>FUT Gallery</strong> — a permanent collection of your Player Items, Sets and achievements that levels up and unlocks rewards. New Holographic Player Items add a rarer visual tier, SBCs have been streamlined into a score-based system, and Evolutions now feature branching Pathways. The maximum number of PlayStyle+ on a single item has been reduced from five to three, putting more emphasis back on base attributes.
          </p>

          <p className="font-bold text-xl mt-8">
            FC 27 is not a complete engine overhaul, but it is the clearest response yet to years of community feedback. Less AI magic, more player control, and a brand-new social hub make this one of the most interesting entries in the series for a long time.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: August 10, 2026</span>
          <Link href="/gaming" className="hover:text-gray-800">
            ← Back to gaming
          </Link>
        </footer>

      </div>
    </article>
  );
}