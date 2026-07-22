'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function FuruhashiLAGalaxy() {
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

  const articleTitle = "LA Galaxy sign Kyōgo Furuhashi: A calculated gamble on proven pedigree and Pacific Rim ambition";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('LA Galaxy sign Kyōgo Furuhashi ⚽')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            LA Galaxy Sign Kyōgo Furuhashi: A Calculated Gamble on Proven Pedigree and Pacific Rim Ambition
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-21">July 21, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-video">
          <Image
            src="https://i.ibb.co/9HPvvXNp/Getty-Images-2257281996-1024x683.webp"
            alt="Kyōgo Furuhashi LA Galaxy signing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: George Wood
 | 
Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">
          <p>
            The LA Galaxy have made their biggest statement of the summer transfer window, announcing the acquisition of Japanese international striker Kyōgo Furuhashi from Birmingham City.
          </p>
          <p>
            The 31-year-old arrives in Los Angeles on a contract that runs through the 2030-31 season, signaling both the club&rsquo;s long-term commitment and belief that Furuhashi can be a centerpiece of their attack for years to come.
          </p>
          <blockquote className="border-l-4 border-[#020617] pl-6 italic text-xl text-gray-700">
            &ldquo;We&rsquo;re excited to welcome Kyōgo to the LA Galaxy and to Los Angeles,&rdquo; said Galaxy general manager Will Kuntz. &ldquo;His movement, finishing ability, and experience at the highest levels will be valuable additions to our group.&rdquo;
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why This Move Makes Sense
          </h2>
          <p>
            On paper, this is a smart, calculated signing. Furuhashi is a proven goalscorer who enjoyed tremendous success at Celtic, where he won multiple Player of the Year awards and Golden Boots. Even though his time at Birmingham City this past season was relatively quiet by his standards, he remains a dynamic forward with excellent off-ball movement, clinical finishing, and the ability to stretch defenses — qualities that remain highly valued in MLS.
          </p>
          <p>
            At 31, Furuhashi is entering what many consider the prime years for a No. 9. He joins a Galaxy side that has Japanese talent already in place (Maya Yoshida and Miki Yamane), creating a familiar cultural environment that should help him settle quickly.
          </p>
          <p>
            This is also a strategic move in the broader context of MLS&rsquo;s growing interest in the Asian market. With the 2026 World Cup still fresh in everyone&rsquo;s minds and the league continuing to push for global appeal, signing a Japanese international with a strong reputation adds both sporting quality and commercial upside.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Questions That Remain
          </h2>
          <p>
            While the pedigree is clear, there are legitimate questions worth asking. Furuhashi&rsquo;s production dipped noticeably during his time in the Championship. Can he rediscover the sharp, high-pressing, goal-a-game form he showed consistently at Celtic? Will the physical demands and travel schedule of MLS suit a player who has spent most of his career in Europe?
          </p>
          <p>
            The length of the contract — nearly five full seasons — also raises eyebrows. It&rsquo;s a significant commitment from the Galaxy, especially for a player who will be 36 when the deal expires. Success will depend heavily on how quickly Furuhashi adapts to the league and how well Gregg Vanney integrates him into an already established attacking group.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture for LA Galaxy
          </h2>
          <p>
            This signing fits into a clear pattern under Will Kuntz and the current Galaxy regime: targeted, experienced international additions who can contribute immediately while also serving as mentors and cultural bridges. After years of chasing star power with mixed results, the Galaxy appear to be building a more balanced, sustainable roster.
          </p>
          <p>
            For Furuhashi, Los Angeles offers a new challenge and a chance at a late-career renaissance in front of passionate crowds at Dignity Health Sports Park. For the Galaxy, it&rsquo;s another step toward returning to consistent contention in the Western Conference.
          </p>
          <p className="font-semibold text-[#020617]">
            Whether this becomes a masterstroke or a calculated risk will be one of the more interesting storylines to follow in the second half of the 2026 MLS season.
          </p>
        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/nycfc-pulisic" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”
                </h3>
              </div>
            </Link>

            <Link href="/news/spain-world-cup-victory" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina
                </h3>
              </div>
            </Link>

            <Link href="/news/el-traffico-son-return" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Son Heung-Min’s Statement Goal in LAFC’s El Tráfico Rout: A Triumphant Return
                </h3>
              </div>
            </Link>

            <Link href="/news/top-10-mls-transfers-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Top 10 Most Interesting Summer Transfers in MLS
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 21, 2026</p>
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