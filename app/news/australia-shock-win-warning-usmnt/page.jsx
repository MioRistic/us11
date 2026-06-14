'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AustraliaWarningUSMNTPage() {
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

  const articleTitle = "Australia’s Shock Win Sends a Clear Warning to the USMNT";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Australia’s Shock Win Sends a Clear Warning to the USMNT')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Australia’s Shock Win Sends a Clear Warning to the USMNT
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-14">June 14, 2026</time>
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
        <figure className="w-full rounded-3xl overflow-hidden shadow-xl mb-10">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITnpzO9KfF_PkVXTCN0YiJJwGUpuLPV2mV7yMWvSBWSEWgHKz3d-n6sM&s=10"
            alt="Australia vs Turkey 2026 World Cup"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Richard Heathcote
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            Group D was supposed to be relatively straightforward for the United States. After a dominant 4-1 win over Paraguay, many expected the USMNT to control their own destiny. However, Australia’s 2-0 victory over Turkey in Vancouver has changed the equation.
          </p>

          <p>
            The Socceroos didn’t just win — they exposed weaknesses that the United States will have to address if they want to top the group and secure a comfortable path to the Round of 32.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">Australia’s Clinical Performance Against Turkey</h2>

          <p>
            Despite entering the match as underdogs, Australia delivered a tactically mature and disciplined performance. Tony Popovic’s side sat deep, absorbed pressure, and struck efficiently on the counter-attack.
          </p>

          <p>
            The first goal came from 20-year-old Nestory Irankunda, who became Australia’s youngest-ever World Cup goalscorer. His goal was a product of smart movement and composure in the final third. The second goal, scored by Connor Metcalfe with 15 minutes remaining, came at the perfect moment as Turkey pushed forward.
          </p>

          <p>
            Turkey dominated possession at times and created danger through players like Arda Güler and Kenan Yıldız, but they found no way past an organized and resolute Australian defense. Their inability to break down a compact block raised serious questions about their tactical execution.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">What the USMNT Must Learn Before Facing Australia</h2>

          <p>
            The United States now faces a much tougher task than many anticipated. Australia is no longer just an opponent to beat — they are a legitimate threat to finish first in the group. Here’s what the USMNT needs to focus on:
          </p>

          <h3 className="text-2xl font-bold">1. Respect Australia’s counter-attacking threat</h3>
          <p>
            Australia thrives on transitions. The USMNT must avoid overcommitting in attack and leaving space behind their defensive line. Ball circulation needs to be more controlled, and players must remain disciplined when possession is lost.
          </p>

          <h3 className="text-2xl font-bold">2. Improve efficiency in the final third</h3>
          <p>
            While the USMNT created chances against Paraguay, they will face a more compact and organized defense against Australia. Better decision-making and more variety in attacking patterns will be required.
          </p>

          <h3 className="text-2xl font-bold">3. Set-piece organization</h3>
          <p>
            Australia has shown vulnerability from set pieces. The USMNT should look to exploit this area, especially with players who can cause problems in the box.
          </p>

          <h3 className="text-2xl font-bold">4. Mental approach</h3>
          <p>
            Australia used the narrative of being underestimated as motivation. The USMNT cannot afford to approach the match on June 19 thinking it will be an easy three points. Overconfidence could prove costly.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">Final Thoughts</h2>

          <p>
            Australia’s win over Turkey was more than just an upset — it was a reminder that Group D is far from decided. The United States remains in a strong position, but they no longer control the narrative alone.
          </p>

          <p>
            The match against Australia on June 19 in Seattle has suddenly become a defining moment of the group stage. If the USMNT can combine the dominance they showed against Paraguay with the necessary respect for Australia’s strengths, they should still be favorites to top the group.
          </p>

          <p className="font-semibold text-xl">
            However, any signs of complacency could turn what was supposed to be a comfortable path into a much more difficult one.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 14, 2026</p>
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