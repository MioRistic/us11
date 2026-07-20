'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SpainWorldCupVictory() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    if (!navigator?.clipboard || !currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      alert('✅ Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy link');
    }
  };

  const articleTitle = "Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Spain win the 2026 FIFA World Cup! 🇪🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-19">July 19, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-6">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/FqWwj6Lv/spain-1400.webp"
            alt="Spain World Cup Victory 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Copyright 2026 The Associated Press. All rights reserved.
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p>
            Spain are the 2026 FIFA World Cup champions after defeating Argentina 1-0 in extra time in a dramatic final. Ferran Torres scored the decisive goal in the 106th minute, securing Spain’s second world title.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Spain Crowned FIFA World Cup Champions
          </h2>
          <p>
            Spain controlled possession from the opening whistle and created the better scoring opportunities throughout the match. Despite Argentina’s disciplined defending during regular time, the European side consistently looked more dangerous in attack.
          </p>

          <p>
            The turning point came late in the game when Argentina midfielder Enzo Fernandez was sent off after receiving a second yellow card. Playing with a numerical advantage in extra time, Spain increased the pressure and finally found the breakthrough.
          </p>

          <p>
            In the 106th minute, Nico Williams delivered a perfect pass into the penalty area, where Ferran Torres calmly finished past Emiliano Martinez to score the winning goal and send Spain to World Cup glory.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Lionel Messi Unable to Inspire Argentina
          </h2>
          <p>
            Lionel Messi, who hoped to lead Argentina to back-to-back FIFA World Cup titles, was kept quiet throughout the final. Spain’s organized defense and relentless pressing limited the Argentine captain’s influence.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Rodri Leads Spain’s Dominant Performance
          </h2>
          <p>
            Midfielder Rodri once again proved why he is regarded as one of the world’s best players. His exceptional passing, defensive awareness, and leadership allowed Spain to control every phase of the game.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Tensions After the Final Whistle
          </h2>
          <p>
            Emotions ran high after the match as players from both teams became involved in heated confrontations following the final whistle. Despite the brief scuffles, celebrations quickly took over as Spain celebrated another historic achievement.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Spain Wins the FIFA World Cup for the Second Time
          </h2>
          <p>
            With this victory, Spain won the FIFA World Cup for the second time in the nation’s history, confirming their place among football’s elite. Their defensive solidity, tactical discipline, and attacking quality made them deserving champions.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            FIFA World Cup Final Highlights
          </h2>
          <ul>
            <li><strong>Result:</strong> Spain 1-0 Argentina (after extra time)</li>
            <li><strong>Winning Goal:</strong> Ferran Torres (106')</li>
            <li><strong>Red Card:</strong> Enzo Fernandez (Argentina)</li>
            <li><strong>Champion:</strong> Spain</li>
            <li><strong>Runner-up:</strong> Argentina</li>
          </ul>

          <p className="font-bold text-xl mt-8">
            Spain’s triumph will be remembered as one of the greatest performances in World Cup history, while Argentina and Lionel Messi were left heartbroken after falling just short of another global title.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">

            <Link href="/news/top-10-mls-transfers-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Top 10 Most Interesting Summer Transfers in MLS
                </h3>
              </div>
            </Link>

            <Link href="/news/cremaschi-parma-permanent" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Benjamin Cremaschi’s Move to Parma Made Permanent
                </h3>
              </div>
            </Link>

            <Link href="/news/griezmann-orlando-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Antoine Griezmann Officially Arrives in Orlando
                </h3>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 19, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="mt-4 sm:mt-0 hover:text-black transition-colors">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}