'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SportingKCCaricSigning() {
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

  const articleTitle = "Sporting Kansas City Sign Experienced Bosnian Left Back Emir Karić — But Is It Enough?";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Sporting KC sign Bosnian left back Emir Karić — smart move or not enough?')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Sporting Kansas City Sign Experienced Bosnian Left Back Emir Karić — But Is It Enough?
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-24">June 24, 2026</time>
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
            src="https://i.ibb.co/XZc4whwT/2025-08-28-T205307-Z-2122236778-RC27-FGAVCAME-RTRMADP-3-SOCCER-CHAMPIONS-STU-BOD.jpg"
            alt="Emir Karić Sporting Kansas City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Borut Zivulovic
 | 
Credit: REUTERS
Copyright: F.A.BOBO
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            Sporting Kansas City announced on Tuesday the signing of 29-year-old Bosnian left back Emir Karić from Sturm Graz. The experienced defender has signed a two-year deal with an option for a third season.
          </p>

          <p>
            On paper, it makes sense. Karić is a battle-tested defender with over 340 professional appearances, experience in the German Bundesliga with Darmstadt, and he played a key role in Sturm Graz winning the Austrian league title last season. He brings exactly the kind of profile SKC has often lacked — a reliable, physical, and technically sound left-sided defender. But the bigger question remains:Is this the type of signing that can actually move the needle for Sporting Kansas City?

          </p>

        <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">What Karić Brings</h2>
          <p>
           Karić is a modern full-back who is solid in duels, comfortable on the ball, and physically strong enough to handle the demands of the position. His experience is his biggest asset — he has played in different systems, under pressure, and knows what it takes to win titles. That kind of know-how is valuable in MLS.


          </p>

          <p>
            However, he has never been a player who dominates games or provides consistent attacking threat from left back. He is a solid, dependable option — not a game-changer.


          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">The Bigger Issue for SKC</h2>

<p>
  Sporting Kansas City’s problems go far beyond the left-back position. For several seasons now, the team has struggled with:
</p>

<ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
  <li>Lack of creativity in central midfield</li>
  <li>Defensive instability</li>
  <li>An attack that lacks consistency and cutting edge</li>
</ul>

<p>
  Signing a solid, experienced left back helps patch one hole, but it doesn’t solve the structural issues that have kept SKC stuck in the middle of the Western Conference.
</p>

<p>
  General Manager David Lee highlighted Karić’s “winning mentality” and technical ability in the announcement. 
  The reality is that SKC still needs more dynamism and quality in key areas if they want to return to playoff contention, let alone challenge for silverware.
</p>

          <p>
            Signing a solid experienced defender helps patch one hole, but it is unlikely to solve the structural issues keeping SKC in the middle of the Western Conference.
          </p>

         <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">The Verdict</h2>
          <p>
            This is a sensible, low-risk signing. Karić should be able to contribute immediately and bring stability to the left side. But if Sporting Kansas City truly wants to take the next step, they will need more than one experienced international to fix deeper problems. For now, this move feels more like a solid reinforcement than a transformative one.


          </p>

          <p className="font-semibold text-lg mt-10">
            We’ll see starting in July whether Emir Karić can help push Sporting KC forward — or if he becomes just another good player on a team stuck in mediocrity.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 24, 2026</p>
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