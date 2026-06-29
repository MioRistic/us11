'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LewandowskiChicagoFire() {
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

  const articleTitle = "Robert Lewandowski Agrees to Join Chicago Fire: One of MLS’s Biggest Signings in History";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Robert Lewandowski agrees to join Chicago Fire ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Robert Lewandowski Agrees to Join Chicago Fire: One of MLS’s Biggest Signings in History
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-29">June 29, 2026</time>
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
            src="https://assets.goal.com/images/v3/blt4e611d016b7d111f/crop/MM5DKOJUHIZTGNB2NZXXOZJ2GA5DGMI=/gettyimages-2255221090-594x594.jpg?auto=webp&format=pjpg&width=1080&quality=60"
            alt="Robert Lewandowski Chicago Fire"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            CHICAGO — It’s official, or as close to official as these things get before the paperwork is signed.
          </p>

          <p>
            Robert Lewandowski has agreed to join the Chicago Fire on a two-year contract, multiple sources with knowledge of the situation have confirmed. The Polish superstar, one of the greatest strikers of his generation, is set to become one of the highest-paid players in Major League Soccer and the clear face of the Fire franchise.
          </p>
          <p>
            The move marks the latest — and arguably one of the most significant — arrivals of a global superstar to MLS in recent years.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            How It Came Together
          </h2>
          <p>
            Lewandowski became a free agent after his contract with FC Barcelona expired at the end of the 2025–26 season. While there was interest from several European clubs, the 37-year-old ultimately decided that a new challenge in the United States was the right next step.
          </p>

          <p>
            Chicago Fire had been pursuing Lewandowski aggressively for months. The club made him a centerpiece of their long-term vision, offering not just a lucrative contract but also a central role in building the team around a proven winner. Sources say Lewandowski visited Chicago earlier this month, toured the facilities, and met with club leadership. Those meetings clearly left a strong impression.
          </p>

          <p>
The deal is expected to be formally announced in the coming days, with Lewandowski likely joining the Fire for the remainder of the 2026 MLS season.

          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Lewandowski Brings
          </h2>
          <p>
Even at 37, Lewandowski remains one of the most clinical finishers in world football. His movement, positioning, and ability to score from almost any situation are still elite. In his final season with Barcelona, he continued to show why he is considered one of the best No. 9s of the past two decades.

          </p>
          <p>
For Chicago Fire, this is a transformative signing. The club has long struggled to break into the upper echelon of the Eastern Conference. Bringing in a player of Lewandowski’s caliber instantly raises the ceiling of the entire project. He will not only score goals but also elevate the standard of training, professionalism, and expectation around the team.


          </p>
          <p>
There have also been reports of continued interest in reuniting Lewandowski with former Bayern Munich teammate Leon Goretzka, though that remains a separate conversation for now.



          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture for MLS
          </h2>
          <p>
This move continues the trend of MLS attracting aging but still world-class talent who want one final big payday and a new challenge. Following in the footsteps of Lionel Messi at Inter Miami, Lewandowski’s arrival will bring even more global attention to the league.

          </p>
          <p>
For Chicago specifically, it is a statement of ambition. The Fire are no longer content to be a mid-table side. They are investing heavily to become a destination club.


          </p>
          <p>
Lewandowski’s presence will also have a major impact off the field — ticket sales, jersey sales, sponsorships, and international viewership are all expected to rise significantly.



          </p>

          <p className="font-bold text-xl mt-8">
            What’s Next?


          </p>
          <p>
Lewandowski will arrive in Chicago with the clear goal of helping the Fire reach the playoffs and make a deep run. At this stage of his career, he is no longer chasing individual awards — he is chasing trophies and legacy.




          </p>
            

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 29, 2026</p>
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