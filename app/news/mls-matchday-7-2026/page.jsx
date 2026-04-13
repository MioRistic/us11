'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday7Page() {
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

  const articleTitle = "MLS Matchday 7 2026: Portland Ends LAFC’s Unbeaten Run, Colorado Thrash Houston 6-2, Red Bulls Youth Shine in Miami";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'MLS Matchday 7 2026: Portland beat LAFC 2-1, Colorado 6-2 Houston, Red Bulls draw with Miami'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 7 2026: Portland Ends LAFC’s Unbeaten Run, Colorado Thrash Houston 6-2, Red Bulls Youth Shine in Miami
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-13">April 13, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/60w8D5L3/01kp2p36s2sbzft3tvfe.jpg"
            alt="MLS Matchday 7 2026 – Portland vs LAFC, Colorado Rapids 6-2 Houston"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-[10%_5%]"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Copyright: 2026 Michael Pimentel/ISI Photos
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Matchday 7 of the 2026 MLS season delivered drama, late winners, and a clear reminder that no result can be taken for granted in this league.
          </p>

          <p>
            From Portland ending LAFC’s unbeaten run to Colorado’s goal-scoring masterclass and the New York Red Bulls’ young talents earning a valuable point in Miami — here’s everything you need to know from another exciting weekend.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Portland Timbers 2–1 LAFC: First Defeat for the Western Powerhouses</h2>
          <p>
            The biggest upset of the weekend came at Providence Park, where the Portland Timbers defeated LAFC 2-1. Kristoffer Velde opened the scoring, and Kevin Kelsy headed home the winner deep into stoppage time.
          </p>
          <p>
            LAFC had taken the lead through a stunning debut goal from 17-year-old Jude Terry, but Portland showed greater character and clinical finishing to secure three valuable points and end LAFC’s unbeaten start to the season.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Colorado Rapids 6–2 Houston Dynamo: Goal Fest in the Rockies</h2>
          <p>
            Colorado Rapids delivered one of the most dominant attacking displays of the young season, thrashing Houston Dynamo 6-2 at home.
          </p>
          <p>
            The Rapids were ruthless in front of goal, exploiting Houston’s defensive vulnerabilities. This result significantly improved Colorado’s goal difference and boosted their position in the Western Conference.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Inter Miami 2–2 New York Red Bulls: Youth Takes Center Stage</h2>
          <p>
            In the marquee match at the brand-new Nu Stadium, Inter Miami were held to a 2-2 draw by a fearless New York Red Bulls side. 
            Seventeen-year-old Adri Mehmeti scored his first MLS goal to equalize late in the game, while 18-year-old Julian Hall impressed with two assists.
          </p>
          <p>
            Michael Bradley’s young squad showed real character and quality against a star-studded Miami team.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Other Key Results from Matchday 7</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Austin FC 1–2 LA Galaxy</strong> – Galaxy continue solid start with road win</li>
            <li><strong>CF Montréal 1–2 Philadelphia Union</strong> – Union come from behind on the road</li>
            <li><strong>Toronto FC 1–1 FC Cincinnati</strong> – Cincinnati play most of match with 10 men</li>
            <li><strong>Vancouver Whitecaps 2–0 New York City FC</strong> – Comfortable win for the Canadian side</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Standings After Matchday 7</h2>
          <p><strong>Eastern Conference (Top 6):</strong></p>
          <ul className="list-disc ml-6">
            <li>Nashville SC – 16 points</li>
            <li>Chicago Fire – 13 points</li>
            <li>Inter Miami – 12 points</li>
            <li>New York City FC – 11 points</li>
            <li>Charlotte FC – 11 points</li>
            <li>Toronto FC – 11 points</li>
          </ul>

          <p className="mt-6"><strong>Western Conference:</strong> LAFC remain near the top despite the loss, but Vancouver Whitecaps, San Jose Earthquakes, and now Portland are all breathing down their neck.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Key Takeaways from Matchday 7</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Young talent is rising fast — Mehmeti, Hall, and Jude Terry showed real promise this weekend.</li>
            <li>Defensive fragility remains a problem for several teams, especially in transition.</li>
            <li>Late goals continue to decide matches — stoppage time drama is becoming a recurring theme.</li>
            <li>Orlando City are in serious early-season trouble with just 4 points from 7 games.</li>
          </ul>

          <p className="mt-8 font-medium">
            Matchday 7 once again proved that the 2026 MLS season is wide open and unpredictable. With young academy players stepping up and big teams dropping points, the race for the playoffs is already heating up.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 13, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}