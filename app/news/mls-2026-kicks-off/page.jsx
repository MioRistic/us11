'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLS2026KickoffArticle() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(
    'MLS 2026 Kicks Off in Spectacular Fashion'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS 2026 Kicks Off in Spectacular Fashion: Record Crowds, Youth Revolutions, and Early Statements
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-24">February 24, 2026</time>
          </div>

          {/* Social */}
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
            src="https://assets.goal.com/images/v3/blt13a6a3cd66e0c26a/GettyImages-2262888870.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS 2026 opening weekend"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Shaun Clark 
| 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            The 2026 Major League Soccer season burst into life over the weekend, delivering an opening Matchday filled with goals, historic moments, and a clear signal that the league's evolution continues at pace. A staggering 387,271 fans packed stadiums across the country—the highest attendance ever recorded for any MLS weekend, let alone an opener—underscoring the growing hunger for the product.
          </p>

          <p>
            The crown jewel was the 75,673-strong crowd at the Los Angeles Memorial Coliseum for LAFC's clash with reigning MLS Cup champions Inter Miami, the second-highest single-game attendance in league history.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LAFC Delivers a Stark Warning to the Rest of the League
          </h2>

          <p>
            In the marquee Walmart Saturday Showdown, new head coach Marc Dos Santos orchestrated a clinical 3-0 victory that felt like more than three points. LAFC defended with discipline in a compact shape, suffocating Lionel Messi and Inter Miami's attacking threats while transitioning with lethal speed.
          </p>

          <p>
            Denis Bouanga (1 goal, 1 assist) and Stephen Eustáquio (midfield mastery and an assist on the opener) shone brightest, with Son Heung-min adding his trademark threat. David Martínez and Nathan Ordaz chipped in with goals of their own, highlighting the depth in attack.
          </p>

          <p>
            This wasn't just a win against the champions—it was a tactical blueprint that suggests LAFC remain serious contenders in the West, perhaps even the team to beat.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Red Bull New York's Teenage Trio Makes History
          </h2>

          <p>
            Few narratives captured the imagination quite like Michael Bradley's coaching debut with Red Bull New York. In a 2-1 road win over Orlando City, the former U.S. international unleashed an aggressive 4-3-3 built on pressing and possession—and three starters aged 17 or younger.
          </p>

          <p>
            Sixteen-year-old homegrown midfielder Adri Mehmeti dazzled on his MLS debut with an assist and precise distribution; 17-year-old left back Matthew Dos Santos drove forward confidently; and 17-year-old forward Julian Hall stole the show with a brace, including the winner.
          </p>

          <p>
            Hall earned Player of the Matchday honors as the youngest player ever to score twice in a club's season opener. The performance—dominating the first half with 3.65 xG—hints at a refreshed, youthful RBNY side that could be must-watch television all year.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nashville's Attack Looks Frighteningly Potent
          </h2>

          <p>
            Nashville SC announced their intentions with a 4-1 demolition of New England Revolution. The addition of Designated Player Cristian Espinoza unlocked fluidity alongside Hany Mukhtar and Sam Surridge, but Costa Rican newcomer Warren Madrigal (1 goal, 2 assists) emerged as the surprise package on the left.
          </p>

          <p>
            Their high xG output early on suggests this front line could terrorize Eastern Conference defenses if it maintains sharpness.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Standout Performances and Emerging Stories
          </h2>

          <p>
            Expansion San Diego FC roared to a 5-0 thrashing of CF Montréal, with Christopher McVey (goal + assist) among the standouts. Houston Dynamo's Guilherme scored a late brace in a 2-1 comeback over Chicago Fire, while Tai Baribo's winner for D.C. United against former club Philadelphia Union carried palpable emotion.
          </p>

          <p>
            St. Louis CITY SC, under new coach Yoann Damet, shifted to a possession-heavy 3-4-3 in a 1-1 draw with Charlotte, Marcel Hartel scoring the league's first goal of the year. FC Cincinnati navigated an early Evander injury thanks to young midfielder Samuel Gidi's incisive play in a 2-0 win over Atlanta United.
          </p>

          <p>
            After one weekend, MLS 2026 already feels alive with contrast: veteran stars delivering in big moments, smart signings paying dividends, and a surge of teenage talent rewriting records.
          </p>

          <p>
            LAFC set an early bar, Red Bull New York's kids injected excitement, and Nashville's attack promises fireworks. The season is young—but the storylines are already compelling, and the league is officially back in full force.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: February 24, 2026</p>
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