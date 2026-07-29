'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SebastianBerhalterMiddlesbrough() {
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

  const articleTitle =
    "Sebastian Berhalter Leaves Vancouver for Middlesbrough, Reuniting With Aidan Morris in the Championship";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Sebastian Berhalter joins Middlesbrough from Vancouver Whitecaps 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Sebastian Berhalter Leaves Vancouver for Middlesbrough, Reuniting With Aidan Morris in the Championship
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <span>July 29, 2026</span>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2221149180/crop/MM5DGOBTHE5DEMJVHE5G433XMU5DAORSGAYA====/GettyImages-2221149180.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Sebastian Berhalter Vancouver Whitecaps"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Sebastian Berhalter’s rise in Major League Soccer was one of the more satisfying stories of the past two seasons. On Tuesday, it reached its logical next chapter.
          </p>

          <p>
            The Vancouver Whitecaps transferred the 25-year-old U.S. international midfielder to English Championship side Middlesbrough for a reported fee in the region of $2 million. Whitecaps retain a sell-on percentage. Berhalter has signed a four-year contract.
          </p>

          <p>
            The move ends a four-and-a-half-year stay in Vancouver that transformed Berhalter from a low-cost acquisition into one of the most productive midfielders in the league. It also reunites him with childhood friend and former Columbus Crew academy teammate Aidan Morris.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            From $50,000 GAM to European Transfer
          </h2>

          <p>
            Berhalter arrived at the Whitecaps in February 2022 in a trade from Columbus Crew that cost Vancouver just $50,000 in General Allocation Money, with the possibility of another $50,000 in conditional GAM. At the time, few outside the Columbus system expected him to become a cornerstone.
          </p>

          <p>
            He left having made 167 appearances across all competitions, scoring 20 goals and recording 34 assists — the second-highest assist total in the club’s MLS era. In 2025 he earned MLS Best XI honors, was named Whitecaps Player of the Year, and helped the team reach both the MLS Cup final and the Concacaf Champions Cup final while winning a fourth consecutive Canadian Championship. This season he again earned All-Star recognition and led Vancouver with 13 goal contributions before the World Cup.
          </p>

          <p>
            His contract was due to expire at the end of 2026. Rather than risk losing him for free, the Whitecaps moved when interest intensified after the tournament.
          </p>

          {/* SECOND IMAGE */}
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-10 aspect-[16/9]">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLG3pa7VHNgfobg_siKf1fEOwQtBQ_g57xhaGKkWvwmvNsRCjU554-xY&s=10"
              alt="Sebastian Berhalter Middlesbrough"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              credit: Getty Images
            </div>
          </figure>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The World Cup Effect
          </h2>

          <p>
            Berhalter featured in all five of the United States’ matches at the 2026 World Cup. His only start came against Türkiye, where he scored and provided an assist — becoming the first MLS player to record both in a single World Cup match. The performances raised his profile significantly. Around six to ten clubs were seriously interested this summer, according to reports.
          </p>

          <p>
            Middlesbrough won the race.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Morris Factor
          </h2>

          <p>
            The decisive element appears to have been personal. Berhalter and Morris came through the Columbus Crew academy together, made their senior debuts around the same time, and have remained close. Morris, already established at Middlesbrough, spoke highly of the club and the dressing room. Berhalter had been watching Boro closely for two years because of his friend.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “I’ve been watching the club closely over the last two years because of Aidan, and I kind of fell in love with the club, especially over the last year with the way they play and the way they fight. This is where I want to be. I want to keep getting better as a player and person, and this is a great place to do it.”
          </blockquote>

          <p>
            Whitecaps sporting director Axel Schuster struck a measured tone: “Through his development at our club and his consistent performances, it was only natural that Sebastian attracted interest from several clubs… It was always clear that if the right opportunity to move to Europe presented itself, he wanted the chance to pursue that challenge.”
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means
          </h2>

          <p>
            For Berhalter, the Championship offers a clear next step after a breakout period in MLS and a solid World Cup. Playing regularly alongside Morris in a competitive environment should help his continued development with the national team.
          </p>

          <p>
            For Vancouver, it is the departure of a key contributor who arrived cheaply and left as one of the league’s better midfielders. The sell-on clause provides some future protection.
          </p>

          <p>
            For Middlesbrough, it continues a deliberate interest in American talent and adds a high-volume, progressive midfielder who has already proven he can perform under pressure on the biggest stage.
          </p>

          <p className="font-semibold text-lg mt-10">
            Berhalter’s path — from academy prospect to World Cup contributor to European transfer — has been steady rather than spectacular. The move to Teesside feels like the natural progression of that work.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/andoni-iraola-nycfc-liverpool" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Andoni Iraola’s Journey from NYCFC to Liverpool Manager
                </h3>
              </div>
            </Link>

            <Link href="/news/olwethu-makhanya-rangers" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya
                </h3>
              </div>
            </Link>

            <Link href="/news/mls-all-star-game-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS All-Star Game 2026: Missing Messi But Riding Post-World Cup Momentum
                </h3>
              </div>
            </Link>

            <Link href="/news/chicharito-dallas" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Chicharito Returns to MLS with FC Dallas
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 29, 2026</p>
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