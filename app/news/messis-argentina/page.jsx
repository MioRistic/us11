'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ArgentinaSwitzerlandMatch() {
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

  const articleTitle = "Messi's Argentina Advance to World Cup Semifinals After Extra-Time Win Over Switzerland";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Argentina reach World Cup semifinals after extra-time win over Switzerland 🇦🇷')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Messi&apos;s Argentina Advance to World Cup Semifinals After Extra-Time Win Over Switzerland
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-12">July 12, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2285704047/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORTGA======/GettyImages-2285704047.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Lionel Messi Argentina World Cup 2026"
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
            Argentina are through to the semifinals of the 2026 FIFA World Cup after a hard-fought <strong>3-1</strong> extra-time victory over Switzerland on Saturday night in Kansas City.
          </p>

          <p>
            It was never easy — and that’s becoming the story of this Argentine campaign. Lionel Messi continued to rewrite history, while the defending champions showed once again that they can suffer, grind, and still find a way through.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Messi’s Magic and the Long Road to the Semis
          </h2>
          <p>
            Messi delivered his 10th career World Cup assist (an all-time record) with a perfect corner kick that <strong>Alexis Mac Allister</strong> headed home in the 10th minute. For a brief moment, it looked like a routine night for the Albiceleste.
          </p>

          <p>
            Switzerland had different plans. <strong>Dan Ndoye</strong> equalized clinically in the 67th minute, and for a while the Swiss looked dangerous. But <strong>Breel Embolo’s</strong> second yellow card in the 72nd minute left them with 10 men.
          </p>

          <p>
            Argentina finally broke through in the 112th minute when <strong>Julián Álvarez</strong> produced a thunderous strike. <strong>Lautaro Martínez</strong> added an insurance goal in the 121st minute to make it 3-1.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Not Dominant — But Dangerous
          </h2>
          <p>
            This tournament has shown a different Argentina. They have not cruised through any knockout round:
          </p>
          <ul>
            <li>Struggled past Egypt</li>
            <li>Needed extra time against Cape Verde</li>
            <li>Again went to extra time against Switzerland</li>
          </ul>

          <p>
            Three knockout matches. Three difficult battles. Yet they keep advancing. That resilience could be their greatest weapon as the competition intensifies.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Next: A Massive Semifinal Against England
          </h2>
          <p>
            Argentina now face England in the semifinals on Wednesday in Atlanta. England have been one of the strongest teams at the tournament and will provide the toughest test yet.
          </p>

          <p>
            For Messi, the stakes could not be higher:
          </p>
          <ul>
            <li>Chance to defend the World Cup title (something only Brazil have done since 1962)</li>
            <li>Opportunity to cement his legacy as the best player of the tournament</li>
            <li>A shot at history — becoming the leader of the first team to win back-to-back World Cups in the modern era</li>
          </ul>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Key Stats
          </h2>
          <ul>
            <li><strong>Lionel Messi:</strong> 10 World Cup assists (all-time record)</li>
            <li><strong>Argentina in 2026 knockout stage:</strong> 3 wins, 2 matches went to extra time</li>
            <li><strong>Undefeated against European teams</strong> at this tournament</li>
          </ul>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>
          <p>
            This is no longer just about reaching the semifinals. It’s about whether this Argentina side has what it takes to go all the way and defend their crown.
          </p>

          <p>
            England will be waiting. The world will be watching. And Messi, at 39, still has one more mountain to climb.
          </p>

          <p className="font-bold text-xl mt-8">
            Argentina vs England — 2026 World Cup Semifinal<br />
            Wednesday, July 15 – 3:00 PM ET (Atlanta)
          </p>

          <p className="font-bold text-xl">
            The dream of back-to-back titles is alive. The hardest part is just beginning.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 12, 2026</p>
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