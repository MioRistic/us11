'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function HerringtonHullTransfer() {
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
    "Hull City Reach Agreement for Colorado Rapids Defender Lucas Herrington in Deal Worth Up to $23 Million";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Hull City agree deal for Colorado Rapids starlet Lucas Herrington worth up to $23m 🇦🇺⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hull City Reach Agreement for Colorado Rapids Defender Lucas Herrington in Deal Worth Up to $23 Million
          </h1>
          <p className="text-gray-500 text-sm">
            August 3, 2026 · By Mio Ristić
          </p>
        </header>

        {/* SHARE BUTTONS */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"
          >
            <FaWhatsapp size={16} />
          </a>
          <button
            onClick={handleCopyLink}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            <FiCopy size={16} />
          </button>
        </div>

        {/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQvO7bUgSI57bGcOGEPJu3bGSl3itgWXKTFCR188aRkwtnbym0LCQCJef&s=10"
    alt="Lucas Herrington Colorado Rapids Hull City transfer"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Getty Images Sport
  </div>
</figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Hull City have reached a club-to-club agreement with the Colorado Rapids for 18-year-old Australian centre-back Lucas Herrington, in a transfer that underlines both the growing value of MLS talent and the ambition of a newly promoted Premier League side.
          </p>

          <p>
            According to multiple sources, the deal is structured around an initial fee of approximately $17 million, with up to $6 million in add-ons. Colorado will also retain a 15 percent share of any future sale. The total package, if all bonuses are met, could reach $23 million.
          </p>

          <p>
            Personal terms have not yet been finalized, but those close to the situation do not expect significant obstacles. Once completed, the move would rank among the largest outbound transfers in MLS history and potentially become the most expensive sale of an Australian player.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Rapid Rise
          </h2>

          <p>
            Herrington’s trajectory has been unusually steep. He joined Colorado from Brisbane Roar in January 2026 for a fee reported to be under $1 million. Within months he established himself as a regular starter, earned a senior debut for Australia in March, and was selected for the Socceroos’ 2026 World Cup squad.
          </p>

          <p>
            At the tournament he started against Paraguay in the group stage and Egypt in the Round of 32. His composure drew praise, even if a missed penalty in the shootout against Egypt became the defining image of Australia’s exit. The decision to hand an 18-year-old that responsibility sparked debate, but it did little to slow the interest in him.
          </p>

          <p>
            European clubs had already taken notice. Barcelona submitted an opening bid earlier in the summer that Colorado rejected. Liverpool scouts were also reported to have watched him. Hull, freshly promoted and backed by owner Acun Ilicali’s willingness to invest, moved decisively.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the Deal Means
          </h2>

          <p>
            For Colorado, this is validation of a model that has increasingly focused on identifying and developing young talent for profitable sales. Herrington leaves after fewer than 20 appearances across all competitions. The fixed fee alone places the transfer in the upper tier of MLS outbound deals; if the add-ons are triggered, it would rank second only to Jhon Durán’s eventual package from Chicago Fire to Aston Villa.
          </p>

          <p>
            For Hull City, the signing represents a clear statement of intent. Newly promoted clubs often prioritise experience. Spending significant money on an 18-year-old centre-back with limited senior football signals a longer-term view — and confidence that Herrington can adapt quickly to the physical and tactical demands of the Premier League.
          </p>

          <p>
            For Australian football, the fee would surpass the previous high-water mark set by Harry Souttar’s move to Leicester City. It also continues a pattern of young Socceroos commanding serious interest abroad after strong tournament showings.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Road Ahead
          </h2>

          <p>
            The transfer is not yet complete. Medicals, personal terms and final documentation remain. But the framework between the clubs is in place, and momentum appears to be on Hull’s side.
          </p>

          <p>
            Herrington’s next chapter will be the most demanding of his short career. Premier League football offers little protection for young defenders, and the scrutiny that follows a high-profile fee can be intense. At the same time, few 18-year-olds arrive in England with World Cup minutes, senior international experience, and a growing reputation for calmness under pressure.
          </p>

          <p>
            Colorado will move on with a healthy return and a sell-on clause that protects their interest. Hull will hope they have secured a cornerstone for the next several seasons. And Australian football will watch closely to see whether another of its teenage prospects can make the leap stick.
          </p>

          <p className="font-bold text-xl mt-8">
            The deal is close. The formalities are next.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/mls-matchday-roundup-lewandowski-messi" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS Matchday Roundup: Lewandowski Announces Himself at Home, Messi’s Return Ends in Frustration
                </h3>
              </div>
            </Link>

            <Link href="/news/arfsten-middlesbrough-transfer" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Max Arfsten Seals Transfer to Middlesbrough, Joins USMNT Duo
                </h3>
              </div>
            </Link>

            <Link href="/news/sebastian-berhalter-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Vancouver Whitecaps Transfer USMNT’s Sebastian Berhalter to Middlesbrough
                </h3>
              </div>
            </Link>

            <Link href="/news/olwethu-makhanya-rangers" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya
                </h3>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 3, 2026</p>
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