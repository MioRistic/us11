'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function WorldCupPowerRankingsPage() {
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

  const articleTitle = "2026 World Cup Power Rankings: USMNT Ranked No.17 as Highest Host Nation";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT ranked No.17 in latest 2026 World Cup Power Rankings — highest-ranked host nation! 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            2026 World Cup Power Rankings: USMNT Enter Tournament Ranked No. 17
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-10">June 10, 2026</time>
          </div>

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
<figure className="w-full rounded-3xl overflow-hidden shadow-md mb-10">
  <Image
    src="https://i.ibb.co/9m39nVB1/images-voltax-Media-Library-mmsport-si-01ktccszn19tx200d8ag.webp"
    alt="USMNT Great Park Sports Complex Irvine"
    width={1200}
    height={675}
    className="w-full h-auto object-cover object-center"
    priority
  />

  <figcaption className="text-xs text-gray-400 px-3 py-2">
   Creator: Robin Alam/ISI Photos
 | 
Credit: ISI Photos via Getty Images
Copyright: 2026 Robin Alam/ISI Photos
  </figcaption>
</figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl leading-relaxed">
  With the 2026 FIFA World Cup now just days away, the latest Power Rankings have dropped — and for the United States Men’s National Team, there is quiet cause for optimism.
</p>

<p className="text-lg leading-relaxed text-gray-700">
  According to the consensus of major outlets, the <strong>USMNT enters the tournament ranked No. 17</strong> globally. That places them as the highest-ranked of the three co-hosts, ahead of Mexico and some distance clear of Canada.
</p>

<p className="text-lg leading-relaxed text-gray-700">
  It marks the strongest pre-tournament position for an American side in modern World Cup history and reflects the steady progress made under Mauricio Pochettino. With a blend of Premier League-proven talent, young depth, and home advantage, the U.S. is no longer viewed merely as a host nation making up the numbers — but as a legitimate contender to reach the knockout stages and potentially cause problems beyond that.
</p>

          <h2 className="text-3xl font-bold mt-12 mb-5">Current Top 10 Power Rankings (June 10, 2026)</h2>

      <div className="overflow-x-auto">
  <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-xl">
    <thead>
      <tr className="bg-gradient-to-r from-[#020617] to-[#1e2937] text-white">
        <th className="px-6 py-6 text-left font-bold text-lg w-20">Rank</th>
        <th className="px-6 py-6 text-left font-bold text-lg">Team</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 text-gray-800">
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">1</td>
        <td className="px-6 py-5 font-semibold text-lg">Argentina</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">2</td>
        <td className="px-6 py-5 font-semibold text-lg">Spain</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">3</td>
        <td className="px-6 py-5 font-semibold text-lg">France</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">4</td>
        <td className="px-6 py-5 font-semibold text-lg">England</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">5</td>
        <td className="px-6 py-5 font-semibold text-lg">Portugal</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">6</td>
        <td className="px-6 py-5 font-semibold text-lg">Brazil</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">7</td>
        <td className="px-6 py-5 font-semibold text-lg">Morocco</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">8</td>
        <td className="px-6 py-5 font-semibold text-lg">Netherlands</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">9</td>
        <td className="px-6 py-5 font-semibold text-lg">Belgium</td>
      </tr>
      <tr className="hover:bg-blue-50 transition-colors">
        <td className="px-6 py-5 font-bold text-2xl text-center text-[#020617]">10</td>
        <td className="px-6 py-5 font-semibold text-lg">Germany</td>
      </tr>
    </tbody>
  </table>
</div>

          <h2 className="text-3xl font-bold mt-12 mb-5">The Three Hosts</h2>

          <p>
            <strong>United States – No. 17</strong><br />
            The USMNT is the highest-ranked host nation heading into the tournament. Mauricio Pochettino has built a competitive side full of young talent and European experience. This ranking gives American fans real hope that the team can advance deep into the knockout stages on home soil.
          </p>

          <p>
            <strong>Mexico – No. 14</strong><br />
            Mexico remains the best-ranked of the three hosts. Javier Aguirre has stabilized the team, and they look dangerous and organized.
          </p>

          <p>
            <strong>Canada – No. 30</strong><br />
            Canada is the lowest-ranked host nation, but still sits higher than they have in previous World Cup cycles. With stars like Alphonso Davies and Jonathan David, their goal is to make history by advancing from the group stage.
          </p>

        
        
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 10, 2026</p>
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