'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday11Preview() {
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

  const articleTitle = "Matchday 11 Preview: Serious Battle for the Top of the Table and the Golden Boot";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Matchday 11 Preview: Serious Battle for the Top of the Table and the Golden Boot
          </h1>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-02">May 2, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE - NOVA SLKA */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/G34vz80S/mday-11.png"
            alt="MLS Matchday 11 Preview 2026"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Matchday 11 Preview
          </figcaption>
        </figure>

        {/* PODNASLOV ISPOD SLIKE */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#020617]">
            The Golden Boot Race is Heating Up
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Surridge and Musa are leading the way — and they have a real chance to pull further ahead this weekend.
          </p>
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Two strikers, nine goals each, and a weekend that could see one — or both — pull clear in the race for the Golden Boot.
          </p>

          <p>
            We are only through ten matchdays, but the 2026 MLS season is already starting to reveal its real protagonists in front of goal. While the spotlight continues to follow the usual suspects and big-market clubs, two forwards have quietly (and efficiently) put themselves in pole position: Sam Surridge of Nashville SC and Petar Musa of FC Dallas.
          </p>

          <p>
            This is no fluke.
          </p>

          <p>
            Surridge has always been a striker who punishes teams when given service and space. At Nashville, he finally looks like the complete No. 9 many in England thought he could become. Strong in the air, clinical with both feet, and showing a willingness to drop deep and link play when needed. Musa, on the other hand, has always had the talent. What we’re seeing now in Dallas is confidence and consistency — the two things that separate good strikers from the ones who end up on the Golden Boot shortlist.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">This Weekend’s Opportunity</h2>
          <p>
            Matchday 11 offers both men a genuine chance to create daylight in the scoring charts.
          </p>

          <p>
            Nashville travels to face a Colorado Rapids side that has struggled to keep clean sheets, while Dallas hosts a Minnesota United team that has been leaky defensively on the road. Neither Surridge nor Musa will need a second invitation. If either (or both) find the net this weekend, we could be looking at a two- or even three-goal lead at the top of the Golden Boot race before we even reach mid-October.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Bigger Picture</h2>
          <p>
            Of course, the race is far from over. Lionel Messi (currently on seven goals) remains the ultimate X-factor for Inter Miami, and players like Denis Bouanga and others are never more than a hot streak away from joining the conversation. But right now, the momentum sits with Surridge and Musa.
          </p>

          <p>
            They are not just riding form — they are playing with purpose. Both have something to prove: Surridge that he can be the main man in a league that rewards strikers who deliver consistently, and Musa that his best years are very much still ahead of him.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What to Watch This Weekend</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Inter Miami vs Orlando City</strong> – The Florida Derby. Messi magic is always possible, but Orlando’s improvement under their interim coach makes this trickier than it looks on paper.</li>
            <li><strong>San Diego FC vs LAFC</strong> – A fiery Southern California derby. Expect goals, especially if Bouanga and Son are given freedom.</li>
            <li><strong>Austin FC vs St. Louis CITY SC</strong> – Two attacking sides who will likely trade chances in what could be an open, entertaining affair.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Thought</h2>
          <p>
            We’re still early in the season, but the 2026 Golden Boot race already has a clear leading duo. The question is no longer whether Surridge and Musa belong at the top — it’s how far ahead they can go before the chasing pack reacts.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 2, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}