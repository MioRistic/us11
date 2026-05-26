'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTWorldCupRosterPage() {
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
    "Pochettino Names Final 26-Man USMNT Roster for 2026 World Cup";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Mauricio Pochettino announces final USMNT squad for the 2026 FIFA World Cup 🇺🇸⚽'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Pochettino Names Final 26-Man USMNT Roster for 2026 World Cup
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
            src="https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="USMNT World Cup roster"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Jared C. Tilton
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Mauricio Pochettino has officially named his final 26-man United States Men’s National Team roster for the 2026 FIFA World Cup.
          </p>

          <p>
            With the tournament taking place on home soil, expectations surrounding the USMNT are higher than ever as the Americans aim for their deepest World Cup run in decades.
          </p>

          {/* VIDEO */}
<div className="my-10">
  <h2 className="text-3xl font-bold mb-4">
    Mauricio Pochettino Talks About the 2026 FIFA World Cup Roster
  </h2>

  <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/4OKry-JHj8E?rel=0&modestbranding=1"
      title="Mauricio Pochettino talks 2026 FIFA World Cup roster"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div>


          <p className="font-semibold text-xl">
            The pressure is on — and Pochettino has now revealed the squad he believes can deliver.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Goalkeepers
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Chris Brady — Chicago Fire FC</li>
            <li>Matt Freese — New York City FC</li>
            <li>Matt Turner — New England Revolution</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Defenders
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Max Arfsten — Columbus Crew</li>
            <li>Sergiño Dest — PSV</li>
            <li>Alex Freeman — Villarreal</li>
            <li>Mark McKenzie — Toulouse</li>
            <li>Tim Ream — Charlotte FC</li>
            <li>Chris Richards — Crystal Palace</li>
            <li>Antonee Robinson — Fulham</li>
            <li>Miles Robinson — FC Cincinnati</li>
            <li>Joe Scally — Borussia Mönchengladbach</li>
            <li>Auston Trusty — Celtic</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Midfielders
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Tyler Adams — AFC Bournemouth</li>
            <li>Sebastian Berhalter — Vancouver Whitecaps FC</li>
            <li>Weston McKennie — Juventus</li>
            <li>Gio Reyna — Borussia Mönchengladbach</li>
            <li>Cristian Roldan — Seattle Sounders FC</li>
            <li>Malik Tillman — Bayer Leverkusen</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Forwards
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Brenden Aaronson — Leeds United</li>
            <li>Folarin Balogun — AS Monaco</li>
            <li>Ricardo Pepi — PSV</li>
            <li>Christian Pulisic — AC Milan</li>
            <li>Tim Weah — Marseille</li>
            <li>Haji Wright — Coventry City</li>
            <li>Alex Zendejas — Club América</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Key Takeaways
          </h2>

          <p>
            MLS continues to play a major role in the national team pipeline.
          </p>

          <p>
            Eight current MLS players made the squad, representing 31% of the roster, while a remarkable 81% of the team has developmental roots in Major League Soccer.
          </p>

          <p>
            At the same time, Pochettino heavily leaned on Europe-based experience, selecting 13 players currently competing in the Big Five leagues.
          </p>

          <p>
            The roster also features several veterans expected to form the spine of the team, including Tyler Adams, Christian Pulisic, Weston McKennie and Tim Ream.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Biggest Omissions
          </h2>

          <h3 className="text-2xl font-bold mt-12 mb-4">USMNT midfielder Tanner Tessmann</h3>
                    <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://assets.goal.com/images/v3/blt7640151dc572ab0a/crop/MM5DGMRQGA5DCOBQGA5G433XMU5DIMJRHI2A====/GettyImages-2245892515.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                        alt="Argentina 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Creator: Franco Arland
 | 
Credit: Getty Images
Copyright: 2025 Franco Arland
                      </div>
                    </figure>

          <p>
            The most surprising exclusion is midfielder Tanner Tessmann, who many expected to make the final squad after a strong campaign with Lyon.
          </p>

          <p>
            Diego Luna was another notable omission following his impressive 2026 MLS season with Real Salt Lake.
          </p>

          <p>
            Aidan Morris also narrowly missed out despite consistent performances at Middlesbrough.
          </p>

          <p className="font-semibold">
            Pochettino clearly prioritized experience and tactical reliability in midfield over experimentation.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            USA Group D Schedule
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>June 12 — USA vs Paraguay (Los Angeles)</li>
            <li>June 19 — USA vs Australia (Seattle)</li>
            <li>June 25 — USA vs Türkiye (Los Angeles)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Expectations on Home Soil
          </h2>

          <p>
            This will mark the United States’ 12th FIFA World Cup appearance and their second time hosting the tournament.
          </p>

          <p>
            After reaching the Round of 16 in Qatar four years ago, expectations have dramatically increased for this generation.
          </p>

          <p className="font-semibold text-xl">
            Advancing from the group stage is now considered the minimum objective.
          </p>

          <p className="font-semibold text-xl">
            In front of home crowds, Pochettino’s squad will be expected to make a serious run.
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