'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday6Page() {
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

  const articleTitle = "MLS Matchday 6 2026: Bouanga’s Rampage, Miami’s New Stadium Debut and Orlando’s Nightmare – What It Means for the Season";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Matchday 6 2026: Bouanga hat-trick, Inter Miami new stadium, LAFC dominate')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 6 2026: Bouanga’s Rampage, Miami’s New Stadium Debut and Orlando’s Nightmare – What It Means for the Season
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-07">April 07, 2026</time>
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
            src="https://assets.goal.com/images/v3/blt8209e4c975d96a14/GettyImages-2250417409.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS Matchday 6 2026 – Denis Bouanga hat-trick for LAFC, Inter Miami new stadium opening"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Source: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed">
          <p>It was meant to be a weekend of celebration with Inter Miami opening their brand-new Nu Stadium. Instead, LAFC stole the show with one of the most dominant performances of the young 2026 MLS season.</p>

          <p>Matchday 6 delivered goals, drama, and a few harsh realities. From Denis Bouanga’s lightning-fast hat-trick to a chaotic draw in Miami’s new home, here’s what we learned after another wild weekend in Major League Soccer.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Bouanga Goes Nuclear: LAFC 6–0 Orlando City</h2>
          <p>Denis Bouanga needed just 28 minutes to complete a hat-trick as LAFC dismantled Orlando City 6-0 at BMO Stadium. The Gabonese forward was unstoppable, while Son Heung-min provided four assists before halftime. This wasn’t just a win — it was a statement.</p>

          <p>LAFC remain the only unbeaten team in MLS (5-0-1) and, remarkably, are yet to concede a single goal this season. Their defensive record is now one of the best opening stretches in league history.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Inter Miami’s New Stadium Debut Ends in Entertaining Draw</h2>
          <p>In front of a sell-out crowd, Inter Miami christened Nu Stadium with a thrilling 2-2 draw against Austin FC. Lionel Messi opened the scoring in the 10th minute, but Austin twice took the lead. Luis Suárez rescued a point with a trademark volley in the 82nd minute.</p>

          <p>It was a fittingly chaotic night for a stadium opening, but also a reminder that Miami’s defense still needs work despite the attacking talent on show.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Philadelphia’s Nightmare Continues</h2>
          <p>The Philadelphia Union suffered a sixth consecutive defeat, losing 2-1 at home to Charlotte FC. Once considered one of the most stable clubs in the East, Philly now sit near the bottom of the conference and face serious questions about their form.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Other Key Results from Matchday 6</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Toronto FC 3–2 Colorado Rapids</strong> – Entertaining goal-fest at BMO Field</li>
            <li><strong>New England Revolution 3–0 CF Montréal</strong> – Solid home win</li>
            <li><strong>Real Salt Lake 3–1 Sporting Kansas City</strong> – RSL continue strong start</li>
            <li><strong>Atlanta United 1–3 Columbus Crew</strong></li>
            <li><strong>DC United 0–4 FC Dallas</strong> – Dallas cruise in the capital</li>
            <li><strong>New York Red Bulls 4–2 FC Cincinnati</strong> – High-scoring Eastern clash</li>
            <li><strong>Houston Dynamo 0–1 Seattle Sounders</strong></li>
            <li><strong>LA Galaxy 1–2 Minnesota United</strong></li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Early Season Standings & Takeaways</h2>
          <p>After six matchdays, the picture is becoming clearer:</p>
          <ul className="list-disc ml-6">
            <li><strong>Eastern Conference:</strong> Nashville SC lead with 13 points and an impressive goal difference. Charlotte FC, Inter Miami, and New York City FC are all on 11 points in a very tight race.</li>
            <li><strong>Western Conference:</strong> LAFC sit comfortably on top with 16 points and a staggering defensive record.</li>
            <li><strong>Biggest concerns:</strong> Philadelphia Union’s collapse and Orlando City’s defensive fragility.</li>
            <li><strong>Standout player:</strong> Denis Bouanga is the early favorite for MVP after his explosive start.</li>
          </ul>

          <p className="mt-6">Matchday 6 confirmed that LAFC look like the team to beat in the West, while the East remains wide open. With Inter Miami now playing at their new home, expect the atmosphere — and the stakes — to rise even higher in the coming weeks.</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 07, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}