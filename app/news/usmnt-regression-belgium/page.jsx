'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTBelgiumDefeat() {
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

  const articleTitle = "A Night of Regression: How the USMNT Fell Well Short Against a Superior Belgium Side";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT fall short against Belgium in Round of 16 ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            A Night of Regression: How the USMNT Fell Well Short Against a Superior Belgium Side
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-06">July 6, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2284972795/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRG42Q====/GettyImages-2284972795.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT vs Belgium World Cup 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Carl Recine
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            HOUSTON — For long stretches of this tournament, the United States had shown genuine progress. Against Belgium in the Round of 16, they took a significant step backward.
          </p>

          <p>
            Belgium were the better team — technically, tactically, and individually. That much was expected. What hurt most for American fans was how far below their own recent standards the USMNT performed. The energy, cohesion, and intensity that defined their group-stage performances were largely absent on Sunday night.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Early Dominance and a Familiar Story
          </h2>
          <p>
            Belgium took control early. Charles De Ketelaere opened the scoring in the 9th minute, and then doubled the lead in the 33rd minute to make it 2-0. It was a difficult start, but the United States responded with character. Malik Tillman pulled one back with a well-taken free-kick in the 31st minute, giving the home crowd hope and making it 2-1 at the break.
          </p>

          <p>
            At halftime, the mood in the U.S. camp was one of measured defiance. An assistant coach told reporters they would quickly analyze the mistakes from the first 45 minutes and prepare for a stronger second half. The goal, he said, was at least to force extra time.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Second Half That Slipped Away
          </h2>
          <p>
            The Americans did come out more aggressively after the break. For a brief window, it looked like they might make a game of it. But control of the match soon slipped through their fingers — quite literally.
          </p>

          <p>
            Goalkeeper Matt Freese committed a catastrophic error, gifting Belgium their third goal when Hans Vanaken made it 3-1 in the 57th minute. The mistake was a turning point. Christian Pulisic was forced off shortly afterward with what appeared to be a minor injury. From that moment, the game went into a downward spiral.
          </p>

          <p>
            Romelu Lukaku added a fourth for Belgium in stoppage time, sealing a 4-1 victory. The final scoreline flattered Belgium slightly, but the performance gap was undeniable.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Sobering Reality Check
          </h2>
          <p>
            This was not the night the USMNT envisioned when they entered the knockout stage full of confidence after topping their group. While Belgium were clearly the superior side, the most disappointing aspect was how little fight and quality the Americans showed once things started to go wrong.
          </p>

          <p>
            Too many players who had performed at a high level in previous matches failed to replicate that form. The defensive lapses that had been largely avoided during the group stage all appeared at once.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Comes Next
          </h2>
          <p>
            The result marks the end of the 2026 World Cup journey for the co-hosts. It was a tournament of notable achievements — reaching the Round of 16 and recording strong group-stage performances. But nights like this serve as a reminder of how much work remains if the United States truly wants to establish itself among the world’s elite.
          </p>

          <p>
            Belgium advance to face Spain in the quarterfinals. For the USMNT, the focus now shifts to reflection, rebuilding, and preparing for the next cycle.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 6, 2026</p>
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