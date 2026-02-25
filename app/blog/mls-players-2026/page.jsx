'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSPlayers2026Article() {
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
    "Top 10 MLS Players to Watch in 2026"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Top 10 MLS Players to Watch in 2026: From Messi to Rising Stars
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-24">February 24, 2026</time>
          </div>

          {/* Social Icons */}
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
            src="https://assets.goal.com/images/v3/getty-2227792192/crop/MM5DCOBUGA5DCMBTGU5G433XMU5DCMRRGU5DENBX/GettyImages-2227792192.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS 2026 top players"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Credit: Getty Images | Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            The 2026 Major League Soccer season kicked off in spectacular fashion, with record-breaking attendance and massive expectations. Across Matchday 1, 387,271 fans packed stadiums nationwide—the highest ever for an MLS opening weekend—highlighting the league’s growing popularity. With the World Cup coming to North America this year, pressure is on the league’s biggest stars, but these 10 players are set to dominate headlines, drive results, and lead their teams.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">1. Lionel Messi (Inter Miami CF) – MLS 2026 Top Performer</h2>
          <p>
            Messi remains untouchable. With eight Ballon d’Or awards, back-to-back MLS MVP titles, and the 2025 MLS Cup under his belt, he continues to play at a level unmatched in the league. Expectations: another trophy, Golden Boot, or MVP award (third consecutive), and to lead Inter Miami to repeat dominance. Healthy and motivated, Messi will also be a focal point at the 2026 World Cup.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">2. Son Heung-min (LAFC) – MLS 2026 Key Player</h2>
          <p>
            Son is LAFC’s marquee signing with full-season experience. In the first half of 2025, he scored 12 goals and added several assists in just 13 matches. Paired with Denis Bouanga under new coach Marc Dos Santos, Son is expected to contend for MLS MVP or Golden Boot and lead LAFC to a Western Conference title.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">3. Denis Bouanga (LAFC) – Deadly Partner</h2>
          <p>
            A consistent scorer over three seasons (65 goals in 101 matches), Bouanga’s chemistry with Son Heung-min forms one of MLS’s most lethal attacking duos. Expectations: 25+ goals, playoff success, and possibly a high-profile summer transfer if performances continue.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">4. Thomas Müller (Vancouver Whitecaps FC) – Tactical Maestro</h2>
          <p>
            The “interpreter of space” transformed Vancouver in the second half of 2025. With 35 career trophies, his intelligence and vision are unmatched. Expectations: 15–20 combined goals and assists, leading Vancouver to Supporters’ Shield contention, and another standout World Cup performance with Germany.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">5. James Rodríguez (Minnesota United FC) – Creative Engine</h2>
          <p>
            The winter’s headline signing and 2014 World Cup Golden Boot winner brings elite experience to Minnesota. Expectations: 10+ assists, creative leadership, and proof that he still belongs at the top level heading into what could be his final World Cup.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">6. Anders Dreyer (San Diego FC) – Rising Star</h2>
          <p>
            MLS Newcomer of the Year 2025, Dreyer notched 19 goals and 19 assists in his debut season with the expansion team, playing every match. Expectations: continue his scoring form and help San Diego become a legitimate playoff contender in just their second season.
          </p>

          {/* Buy Jersey Section */}
<div className="my-12 p-6 bg-gray-100 rounded-2xl text-center shadow-md">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">Buy Your Favorite Player's Jersey</h2>
  <p className="mb-4">
    You can purchase the jersey of your favorite MLS player directly from the official store. Show your support and sport the colors of your team!
  </p>
  <Link
    href="https://mlsstore.i8h2.net/dyo3k7"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
  >
    Shop Now
  </Link>
</div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">7. Marco Reus (LA Galaxy) – Visionary Leader Under Pressure</h2>
          <p>
            At 36, Marco Reus continues to prove that class doesn’t age. After leaving Borussia Dortmund in 2024 following 12 years of loyalty, the German midfielder chose a new challenge in MLS, signing a 2.5-year deal with LA Galaxy through the end of 2026. He has already become a key pillar of Galaxy’s attack, tasked with restoring the team to the top of the Western Conference. Expectations: lead LA Galaxy creatively, provide goals and assists, and help the team reclaim dominance in MLS while under the pressure of high expectations.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">8. Rodrigo De Paul (Inter Miami CF) – Messi’s Shield</h2>
          <p>
            De Paul, joining mid-2025, has already become vital in midfield. Expectations: provide balance, protect Messi, and help Inter Miami dominate possession and results throughout 2026.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">9. Hany Mukhtar (Nashville SC) – Clinical Finisher</h2>
          <p>
            When fit, Mukhtar is one of the league’s deadliest forwards, routinely scoring hat-tricks. With Cristian Espinoza and Warren Madrigal supporting him, expectations: top-three finish in the Eastern Conference and a strong Golden Boot candidacy.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">10. Timo Werner (San Jose Earthquakes) – Speed and Experience</h2>
          <p>
            Werner combines Premier League and Bundesliga experience with raw pace and finishing ability. Expectations: 15+ goals and to become the key factor in lifting San Jose from Western Conference underdogs to playoff challengers.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why These 10 Players Matter in 2026</h2>
          <p>
            MLS 2026 is already shaping up to be historic. From veterans like Messi and Müller delivering elite performances to newcomers like Dreyer and Mukhtar injecting excitement, these players are setting the tone for the season. With the World Cup looming, every match matters—not just for points, but for global attention.
          </p>

          <p>
            Fans, analysts, and casual viewers alike should keep a close eye on these 10 stars—they will define MLS in 2026.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: February 24, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">
              Back to blog
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}