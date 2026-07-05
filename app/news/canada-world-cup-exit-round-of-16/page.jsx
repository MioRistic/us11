'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CanadaWorldCup2026Exit() {
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

  const articleTitle = "Canada’s World Cup Dream Ends, But a New Era Has Already Begun";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Canada’s World Cup journey ends with pride and promise 🇨🇦')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Canada’s World Cup Dream Ends, But a New Era Has Already Begun
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-05">July 5, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2280851139/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DGNBXHI2TGMI=/GettyImages-2280851139.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Canada World Cup 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Charlotte Wilson
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            HOUSTON — Even in a 3-0 defeat, Stephen Eustáquio rose from his knees with a quiet smile.
          </p>

          <p>
            Around him, 68,777 fans inside a rocking Houston Stadium stood to applaud a Canadian team that had just been eliminated from the 2026 World Cup, yet felt anything but defeated.
          </p>

          <p>
            For a nation that entered this tournament with modest expectations, reaching the Round of 16 already represented uncharted territory. The manner of their exit — against a dangerous and experienced Morocco side — left them with something far more valuable than a result: belief.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Tournament Defined by Firsts
          </h2>
          <p>
            Canada’s 2026 World Cup will be remembered as the tournament that changed everything. They recorded their first-ever World Cup victory — a resounding 6-0 win over Qatar. They advanced to the knockout stage for the first time in their history. And perhaps most importantly, they consistently competed with top-level nations rather than simply participating.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “Before the tournament, if we had said we’d reach the Round of 16, I think we would have been pretty satisfied. But now that we’re here, you can see the hunger to go further.” — Jesse Marsch
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Cost of Ambition
          </h2>
          <p>
            There will be “what-ifs,” of course. What if Alphonso Davies had been fully fit? What if Ismaël Koné and Marcelo Flores hadn’t been injured? Those absences mattered.
          </p>

          <p>
            Yet even without their full complement of weapons, Canada pushed Morocco harder than many expected. It was a performance that hinted at what this group might become when healthy and battle-hardened.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Next Generation Is Already Ready
          </h2>
          <p>
            As the senior players processed the end of their campaign, the younger members of the squad were already looking forward. Luc De Fougerolles spoke with striking maturity:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “I just can’t wait for four years’ time. I want another one like this — but go further, and do even more for the country.”
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Defining Moment for Canadian Soccer
          </h2>
          <p>
            Canada leaves the tournament not with regret, but with a new sense of identity. They are no longer plucky underdogs hoping to avoid embarrassment. They are a competitive football nation with a clear path forward.
          </p>

          <p className="font-bold text-xl mt-8">
            The dream ended in the Round of 16 in Houston. But the foundation for 2030 — and beyond — has never looked stronger.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 5, 2026</p>
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