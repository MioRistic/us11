'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ParaguayStunTurkey() {
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

  const articleTitle = "How Miguel Almirón’s Red Card Backfired — Paraguay Stun Turkey and Clear Path for USMNT";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Paraguay stun Turkey 1-0 with 10 men after Almirón red card! ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            How Miguel Almirón’s Red Card Backfired — Paraguay Stun Turkey and Clear Path for USMNT
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-20">June 20, 2026</time>
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
            src="https://i.ibb.co/qqjbKM9/gettyimages-2282439188-612x612-1.jpg"
            alt="Miguel Almirón Red Card Paraguay vs Turkey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Richard Heathcote | Credit: Getty Images | Copyright: 2026 Getty Images
          </div>
        </figure>

      {/* ARTICLE CONTENT */}
<section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

  <p className="text-xl font-medium">
    SAN FRANCISCO BAY AREA — Sometimes the biggest moments in football come from the most unexpected places.
  </p>

  <p>
    Miguel Almirón, usually known for his dazzling dribbles and infectious smile, made history for all the wrong reasons on Saturday night. The former Newcastle star became the first player at a World Cup to be sent off for covering his mouth during an altercation with an opponent.
  </p>

  <p>
    But what should have been Turkey’s golden opportunity turned into one of the biggest shocks of the 2026 tournament.
  </p>


  <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
    The Dismissal
  </h2>

  <p>
    In first-half stoppage time, with the score still 1-0 to Paraguay, Almirón and Turkey’s Barış Alper Yılmaz got into a heated exchange.
  </p>

  <p>
    Almirón instinctively covered his mouth while responding — a gesture that, after a VAR review, was deemed worthy of a straight red card by the referee.
  </p>

  <p>
    Down to 10 men before halftime, most teams would have collapsed. Not this Paraguay side.
  </p>


  <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
    A Masterclass in Defiance
  </h2>

  <p>
    Matías Galarza had already given Paraguay a dream start in just the second minute, latching onto a pass from the brilliant Julio Enciso and firing a low shot into the bottom corner from 20 yards.
  </p>

  <p>
    From that moment on, it became a story of incredible resilience.
  </p>

  <p>
    Even with a numerical disadvantage, Paraguay refused to sit deep. They defended with intelligence, pressed selectively, and used every ounce of experience to frustrate Turkey.
  </p>

  <p>
    Orlando Gill in goal was outstanding, making several crucial saves, particularly from Abdülkerim Bardakçı and Can Uzun.
  </p>

  <p>
    Turkey dominated possession after the break, but they lacked the cutting edge to break down Paraguay’s compact shape.
  </p>

  <p className="font-bold text-xl">
    In the end, the 1-0 scoreline stood.
  </p>


  <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
    Turkey Eliminated, Path Opens for USMNT
  </h2>

  <p>
    With this result, Turkey is officially eliminated from the 2026 World Cup after just two matches.
  </p>

  <p>
    For a team that arrived with genuine ambitions of reaching the knockout stages, this is a bitter disappointment.
  </p>

  <p>
    For the United States, however, the picture has suddenly become much clearer.
  </p>

  <p>
    With Paraguay’s victory, the USMNT now sits in a very strong position in Group D. Having already beaten Paraguay 4-1 and Australia 2-0, the Americans are in control.
  </p>

  <p>
  With qualification already secured, the United States will approach their final group game against Türkiye with a degree of freedom. While a win would confirm first place in Group D, even a draw or narrow defeat would likely be enough to finish in the top two — though the margin of victory in Seattle means the USMNT are now firmly in control of their own destiny heading into the knockout stage.
</p>

  <p>
    Mauricio Pochettino’s team no longer needs a heroic performance in the last match — they simply need to be professional.
  </p>


  <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
    The Bigger Picture
  </h2>

  <p>
    This was more than just a 1-0 win for Paraguay.
  </p>

  <p>
    It was a tactical and mental masterclass — a reminder that heart, organization, and discipline can still overcome talent and numbers on the biggest stage.
  </p>

  <p>
    And for the United States, it was the perfect result.
  </p>

  <p>
    Now they head into their final group game against Turkey with confidence, control, and a clear path to the knockout stages.
  </p>

  <p className="font-bold text-xl mt-10">
    The statement has been made.
  </p>

  <p className="font-bold text-xl">
    The real test of ambition is coming.
  </p>

</section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 20, 2026</p>
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