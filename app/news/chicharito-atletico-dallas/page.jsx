'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ChicharitoAtleticoDallas() {
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

  const articleTitle = "Chicharito Signs with Atlético Dallas: Mexico Legend Becomes First Player in Club History";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Chicharito signs with Atlético Dallas as the club’s first-ever player 🇲🇽')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Chicharito Signs with Atlético Dallas: Mexico Legend Becomes First Player in Club History
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <span>July 28, 2026</span>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2202158444/crop/MM5DGOBSGA5DEMJUHE5G433XMU5DAORRHE4Q====/GettyImages-2202158444.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Chicharito Javier Hernández Atlético Dallas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: VICTOR CRUZ | Credit: AFP via Getty Images | Copyright: AFP or licensors
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Javier “Chicharito” Hernández has a new home in Texas — but it’s not the one many expected.
          </p>

          <p>
            The Mexico legend has officially signed with <strong>Atlético Dallas</strong>, the brand-new USL Championship expansion side, becoming the first player in the club’s history. The deal was first reported by Fabrizio Romano and later confirmed by the club and the league on Monday.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Details
          </h2>

          <p>
            Hernández has signed a two-year contract with a club option for a third season. At 38 years old, he will begin contributing to the project immediately, but he will not play competitive matches until the 2027 season, when Atlético Dallas makes its official debut in the USL Championship.
          </p>

          <p>
            The team will temporarily play at the historic Cotton Bowl in Dallas.
          </p>

          <p>
            This is not a move to MLS side FC Dallas. Atlético Dallas is a second-division project still in its earliest stages, and Chicharito is the foundation they have chosen to build on.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why This Move Makes Sense
          </h2>

          <p>
            After leaving Chivas Guadalajara at the end of 2025, Hernández spent several months without a club. He worked as a pundit for FOX Sports during the 2026 World Cup and publicly rejected retirement rumors earlier this year.
          </p>

          <p>
            At 38, a high-pressure MLS return was never the most realistic path. Instead, Atlético Dallas offered something different: the chance to help create a club from the ground up in a city with one of the largest Mexican-American communities in the United States.
          </p>

          <p>
            In the club’s official announcement, Hernández said:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “I believe Dallas deserves a club that reflects its passion for football, its diversity, and its future. I didn’t come here simply to finish my career. I came here to help build the future of football in Dallas.”
          </blockquote>

          <p>
            Club founder and chairman Matt Valentine called him “the perfect person to help write the first chapter in Atlético Dallas history.”
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Career Context
          </h2>

          <p>
            Chicharito remains Mexico’s all-time leading goalscorer with 52 international goals. His career path includes Chivas Guadalajara (two spells), Manchester United, Real Madrid, Bayer Leverkusen, West Ham United, Sevilla, and LA Galaxy (2020–2023).
          </p>

          <p>
            He last played competitive football in late 2025. The gap in match fitness is real, but his name recognition, leadership, and connection to the Hispanic community in North Texas give Atlético Dallas an immediate identity that most expansion clubs can only dream of.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What’s Next
          </h2>

          <p>
            Peter Luccin, the former interim head coach of FC Dallas, has already been named the first manager of Atlético Dallas. Hernández will work closely with the coaching staff and ownership group in the coming months as the club builds its roster and culture ahead of the 2027 season.
          </p>

          <p>
            For a player who has won titles in England and played in three World Cups, this is an unusual final chapter. But for Atlético Dallas, it is a statement of ambition.
          </p>

          <p className="font-bold text-xl mt-10">
            Chicharito is no longer just a goalscorer arriving at a new club.  
            He is the first brick in the foundation.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next to Read</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <Link href="/news/vincent-janssen-portland-timbers" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Portland Timbers Set to Sign Dutch Striker Vincent Janssen
                </h3>
              </div>
            </Link>

            <Link href="/news/three-stars-first-impressions" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Three Stars, First Impressions: Griezmann, Lewandowski & Casemiro
                </h3>
              </div>
            </Link>

            <Link href="/news/berterame-injury-inter-miami" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Inter Miami’s Berterame Conscious in Hospital After Head Collision
                </h3>
              </div>
            </Link>

            <Link href="/news/lewandowski-chicago-fire-jersey" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Robert Lewandowski Chicago Fire Jersey Now Available
                </h3>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 28, 2026</p>
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