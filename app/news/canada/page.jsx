'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CanadaWorldCupCampPage() {
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

  const articleTitle =
    "Jesse Marsch Calls 11 MLS Players to Canada’s Pre-World Cup Training Camp";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Jesse Marsch names 11 MLS players in Canada’s World Cup training camp 🇨🇦⚽'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Jesse Marsch Calls 11 MLS Players to Canada’s Pre-World Cup Training Camp
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-26">May 26, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/DPKbdcTr/20221117-1668705421-556.jpg"
            alt="Canada national team Jesse Marsch"
             width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Eloisa Sanchez de Alba
 | 
Credit: Getty Images
Copyright: All rights reserved
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Canada head coach Jesse Marsch has named 11 MLS players to a 32-man preliminary training camp roster ahead of the 2026 FIFA World Cup.
          </p>

          <p>
            The co-host nation will now begin final preparations before Marsch trims the squad down to the final 26-man World Cup roster later this week.
          </p>

          <p className="font-semibold text-xl">
            Canada’s golden generation is now only weeks away from opening the biggest tournament in the country’s football history.
          </p>

         

          <h2 className="text-3xl font-bold mt-10 mb-4">
            MLS Strongly Represented
          </h2>

          <p>
            Eleven players currently based in Major League Soccer were included in Marsch’s preliminary squad.
          </p>

          <p>
            Orlando City goalkeeper Maxime Crépeau and Inter Miami shot-stopper Dayne St. Clair headline the domestic contingent as both continue battling for the starting role ahead of the tournament.
          </p>

          <p>
            Toronto FC veterans Richie Laryea and Jonathan Osorio were also included, alongside Chicago Fire defender Joel Waterman.
          </p>

          <p>
            LAFC leads all MLS clubs with three players called into camp:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Mathieu Choinière</li>
            <li>Stephen Eustáquio</li>
            <li>Jacob Shaffelburg</li>
          </ul>

          <p>
            Vancouver Whitecaps midfielder Ralph Priso, Sporting Kansas City defender Zorhan Bassong, and Austin FC winger Jayden Nelson were also selected.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Goalkeepers
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Maxime Crépeau — Orlando City</li>
            <li>Owen Goodman — Barnsley FC</li>
            <li>Dayne St. Clair — Inter Miami CF</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Defensive Core
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Zorhan Bassong — Sporting Kansas City</li>
            <li>Moïse Bombito — OGC Nice</li>
            <li>Derek Cornelius — Rangers</li>
            <li>Alphonso Davies — Bayern Munich</li>
            <li>Luc de Fougerolles — FCV Dender</li>
            <li>Alistair Johnston — Celtic</li>
            <li>Alfie Jones — Middlesbrough</li>
            <li>Jamie Knight-Lebel — Swindon Town</li>
            <li>Richie Laryea — Toronto FC</li>
            <li>Ralph Priso — Vancouver Whitecaps FC</li>
            <li>Niko Sigur — Hajduk Split</li>
            <li>Joel Waterman — Chicago Fire FC</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Midfield Talent
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Ali Ahmed — Norwich City</li>
            <li>Tajon Buchanan — Villarreal</li>
            <li>Mathieu Choinière — LAFC</li>
            <li>Stephen Eustáquio — LAFC</li>
            <li>Marcelo Flores — Tigres UANL</li>
            <li>Ismaël Koné — Sassuolo</li>
            <li>Liam Millar — Hull City</li>
            <li>Jayden Nelson — Austin FC</li>
            <li>Jonathan Osorio — Toronto FC</li>
            <li>Nathan Saliba — Anderlecht</li>
            <li>Jacob Shaffelburg — LAFC</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Attackers Selected
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Jonathan David — Juventus</li>
            <li>Promise David — Royale Union Saint-Gilloise</li>
            <li>Daniel Jebbison — Preston North End</li>
            <li>Cyle Larin — Southampton</li>
            <li>Tani Oluwaseyi — Villarreal</li>
            <li>Jacen Russell-Rowe — Toulouse</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Final Preparations Begin
          </h2>

          <p>
            Canada will now play two pre-World Cup friendlies before the final squad announcement.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>June 1 vs Uzbekistan in Alberta</li>
            <li>June 5 vs Ireland in Montréal</li>
          </ul>

          <p>
            The Canadians will then officially open Group B against Bosnia and Herzegovina on June 12 in Toronto.
          </p>

          <p>
            Group-stage matches against Qatar and Switzerland will follow.
          </p>

          <p className="font-semibold text-xl">
            Canada is aiming to reach the knockout stage of the FIFA World Cup for the first time in program history.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 26, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}