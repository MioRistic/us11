'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Top10MLSTransfers2026() {
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

  const articleTitle = "Top 10 Most Interesting Summer Transfers in MLS (as of July 13, 2026)";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Top 10 Summer Transfers in MLS 2026 🔥')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Top 10 Most Interesting Summer Transfers in MLS (as of July 13, 2026)
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-13">July 13, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS Summer Transfers 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Copyright: 2026
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p>
            The 2026 summer transfer window has delivered some major headlines for MLS. Here is our ranking of the most significant and exciting moves so far.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">1. Antoine Griezmann → Orlando City</h2>
          <p>
            The 2018 World Cup winner joined Orlando City as a Designated Player on a free transfer from Atlético Madrid. At 35, Griezmann has already shown his class with a goal and assist in his first friendly appearance. He brings leadership, creativity, and a massive marketing boost to the Lions.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">2. Robert Lewandowski → Chicago Fire</h2>
          <p>
            The legendary Polish striker signed with Chicago Fire as a free agent after leaving Barcelona. At 37, Lewandowski remains one of the most clinical finishers in the world. His arrival on a two-year Designated Player deal instantly raises the profile of the Fire franchise and gives them a proven goal scorer.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">3. Allan Saint-Maximin → Charlotte FC</h2>
          <p>
            The fast, skillful French winger arrives from RC Lens as a free agent. Saint-Maximin brings Premier League experience, dribbling ability, and excitement. Charlotte sees him as the direct replacement for Wilfried Zaha.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">4. Brais Méndez → Columbus Crew</h2>
          <p>
            The Spanish international midfielder joined Columbus as a Designated Player. At 29, Méndez is a technically gifted, intelligent player with excellent set-piece delivery.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">5. Duncan McGuire → Houston Dynamo</h2>
          <p>
            One of the best young American strikers moves within MLS. McGuire brings size, athleticism, and finishing ability. Houston strengthened their attack significantly.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">6. Moisés Mosquera → Sporting Kansas City</h2>
          <p>
            The young Colombian center-back arrives with good pace and defensive qualities.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">7. Nelson Palacio → Toronto FC</h2>
          <p>
            The energetic Colombian midfielder brings dynamism and pressing ability.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">8. Daniel (GK) → FC Dallas</h2>
          <p>
            The experienced Brazilian goalkeeper joins Dallas to stabilize the position.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">9. Gabriel Pec → Cruzeiro</h2>
          <p>
            The talented Brazilian winger returns home. Pec was one of Galaxy’s most creative players — a notable loss for LA.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">10. Emir Karić → Sporting Kansas City</h2>
          <p>
            The Bosnian left-back brings European experience and solidity.
          </p>

          <p className="font-bold text-xl mt-12">
            The 2026 summer transfer window is far from over. Which move do you think will have the biggest impact this season?
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 13, 2026</p>
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