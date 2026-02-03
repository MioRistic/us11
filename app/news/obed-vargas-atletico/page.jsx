'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function VargasArticle() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "Obed Vargas: From Seattle to Madrid, and Why Atlético See Him as a Project, Not a Risk"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Obed Vargas: From Seattle to Madrid, and Why Atlético See Him as a Project, Not a Risk
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-01">February 3, 2026</time>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link href="/teams/seattle-sounders" className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition">
              #SeattleSounders
            </Link>
            
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src='https://sports.mynorthwest.com/wp-content/uploads/2024/04/Obed-Vargas-plays-for-the-Seattle-Sounders-ball-on-ground-Getty-900.jpg'
            alt="Obed Vargas joins Atletico Madrid"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
           Creator: Steph Chambers 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            When Obed Vargas faced Atlético Madrid with the Seattle Sounders at last summer’s FIFA Club World Cup, it felt like a coincidence of fate. For Vargas, it meant more. He had grown up as an Atlético supporter — following the club even as a kid in Alaska, drawn to Diego Simeone’s discipline, intensity, and identity.
          </p>

          <p>
            Now it’s clear that meeting wasn’t random. That summer, Atlético began seriously tracking a young midfielder who, at just 19, already played with a level of tactical maturity associated with European football.
          </p>

          <p>
            Vargas was born in Alaska but shaped in Seattle’s system — a club that has increasingly produced players ready for the highest level. He was never a “headline” talent. He didn’t demand the ball to be seen. He took it to connect lines, close space, and speed up the game.
          </p>

          <p>
            Over four seasons in MLS, Vargas became central to the Sounders’ structure. His value wasn’t in goals, but in tempo control, positional discipline, and work off the ball. In a league that often celebrates individual flair, Vargas built his reputation on reliability.
          </p>

          <p>
            Atlético don’t buy potential without context. They buy players who fit a system. Vargas arrives as a project with a clear purpose: to develop into a midfielder who understands pressing, transitions, and defensive responsibility — the three pillars of Simeone’s philosophy.
          </p>

          <p>
            For Seattle, his departure is a loss in the middle of the pitch, but also a statement of identity. Vargas is further proof that the Sounders don’t just produce MLS starters — they produce players for Europe’s elite.
          </p>

          <p>
            For Vargas himself, the move to Madrid is not a reward. It’s a test. At 20, he isn’t coming to Europe to learn the basics — he’s coming to show how far he already is.
          </p>

          <p>
            Atlético don’t see a romantic story in him. They see a functional midfielder in development. And that may be the clearest sign this transfer is serious.
          </p>

        </section>

        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: February 3, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">
              Back to news
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
