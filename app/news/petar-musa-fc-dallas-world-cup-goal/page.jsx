'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PetarMusaWorldCupGoal() {
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

  const articleTitle = "Petar Musa Makes FC Dallas History — Scores First World Cup Goal by an Active Player";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Petar Musa becomes the first active FC Dallas player to score at a World Cup! ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

      

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Petar Musa Makes FC Dallas History — Scores First World Cup Goal by an Active Player in Croatia’s 4-2 Loss to England
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-18">June 18, 2026</time>
          </div>

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
       <figure className="relative w-full rounded-2xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
         <Image
           src="https://i.ibb.co/0p4QDPj9/petar-musa.jpg"
           alt="Best World Cup 2026 Jerseys for Street Style"
           fill
           className="object-cover"
           priority
         />
         
         {/* COPYRIGHT NA SLICI */}
         <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
           Creator: Julio Cortez
 | 
Credit: AP Photo/Julio Cortez
Copyright: AP Photo/Julio Cortez
         </div>
       </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            ARLINGTON, Texas — Petar Musa delivered a moment that will live forever in FC Dallas history.
          </p>

          <p>
            In front of a passionate crowd at Dallas Stadium, the Croatian striker became the <strong>first active FC Dallas player</strong> to score a goal at a FIFA World Cup, volleying home a stunning finish in a 4-2 opening defeat to England.
          </p>

          <p>It was the kind of moment every player dreams about — and it happened right here in Texas.</p>

          <h2 className="text-3xl font-bold mt-10 mb-5">The Goal That Made History</h2>
          <p>
            With seconds left in the first half and Croatia trailing 2-1, Ivan Perišić rose to win an aerial duel and nodded the ball back into the box. Musa was perfectly positioned. He met the ball with a crisp first-time volley, smashing it low past Jordan Pickford.
          </p>
          <p>For a brief, beautiful moment, it was 2-2.</p>
          <p>England eventually pulled away with a strong second half, but Musa’s goal was the standout individual moment of the match for Croatia.</p>

          <h2 className="text-3xl font-bold mt-10 mb-5">A Landmark for FC Dallas</h2>
          <p>
            This wasn’t just any goal — it was historic for the club. Before Musa, FC Dallas players had appeared at World Cups (Jesús Ferreira in 2022 and Deedson in 2026), but none had scored while still on the club’s books. Musa changed that forever on Wednesday night.
          </p>
          <p>For a club that has worked hard to build its international reputation, this moment carries real weight.</p>

          <h2 className="text-3xl font-bold mt-10 mb-5">Classic Musa Instinct</h2>
          <p>
            The finish itself was pure Musa — smart movement, excellent timing, and clinical execution. At 28 years old, Musa is in the prime of his career. He has already scored 13 goals across all competitions in 2026 and now has two senior goals for Croatia. This one, however, will always be the most special.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-5">Croatia Showed Fight, But England Had Too Much Quality</h2>
          <p>
            Zlatko Dalić’s side actually played well for large parts of the first half. Martin Baturina equalized, and for a while it looked like Croatia could cause a real upset. But England’s physicality and midfield control eventually took over.
          </p>
          <p>Musa was substituted in the 66th minute with Croatia trailing 3-2 — a sensible decision with two more tough group games to come (Panama and Ghana).</p>

          <h2 className="text-3xl font-bold mt-10 mb-5">What This Means Moving Forward</h2>
          <p>
            For Musa personally, this is a massive confidence boost. Scoring at a World Cup, in Texas, while representing FC Dallas — it doesn’t get much better than that.
          </p>
          <p>
            For the club, it’s another strong signal that their project is working. Players aren’t just coming to MLS to wind down their careers — they’re arriving, performing, and shining on the biggest stage in world football.
          </p>

          <p className="font-semibold text-lg mt-10">
            Croatia may have lost the match, but Petar Musa left Arlington with something much more valuable: a permanent place in FC Dallas and Croatian football history.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 18, 2026</p>
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