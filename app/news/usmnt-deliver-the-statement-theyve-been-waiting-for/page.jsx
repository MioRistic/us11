'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTStatementWinPage() {
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

  const articleTitle = "USMNT Deliver the Statement They’ve Been Waiting For";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT Deliver the Statement They’ve Been Waiting For 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Deliver the Statement They’ve Been Waiting For
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-13">June 13, 2026</time>
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
            src="https://i.ibb.co/202b5vLP/usmnt.png"
            alt="USMNT vs Paraguay 2026 World Cup"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Kelvin Kuo
 | 
Credit: Los Angeles Times
Copyright: 2026 Los Angeles Times
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            For years, the United States men’s national team has talked about arriving. On Friday night at SoFi Stadium, in front of more than 70,000 of their own fans, they finally looked like they had.
          </p>

          <p>
            A 4-1 demolition of Paraguay in their 2026 World Cup opener was more than just three points. It was the kind of performance that had long felt out of reach — dominant, composed, and played with a belief that has often been missing on the biggest stages.
          </p>

          <p>
            The tone was set early. Just seven minutes in, Paraguay midfielder Damián Bobadilla turned a dangerous cut-back from Weston McKennie into his own net. What followed was a first half of rare control and quality from the hosts.
          </p>

          <p>
            Folarin Balogun, playing with a sharpness that has sometimes eluded him in big moments, scored twice before the break. By the time Giovanni Reyna added a late fourth, the result already felt secondary to the manner of the performance.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">A Performance That Felt Different</h2>
          
          <p>
            This was not a case of riding a single moment or benefiting from a mistake. The United States pressed with intensity, moved the ball with purpose, and looked comfortable in a way that has rarely been the case in World Cup openers.
          </p>

          <p>
            “It just felt special,” McKennie said afterward, describing the moment the national anthem played and the crowd responded. “You could feel the accumulation of everything that’s gone into getting to this point.”
          </p>

          <p>
            That feeling was shared across the squad. Sebastian Berhalter, who came on after halftime, called it exactly what U.S. soccer should look like — a packed stadium full of American fans creating an atmosphere that felt genuinely intimidating for the opponent.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">Pochettino Keeps the Foot on the Brake</h2>

          <p>
            The performance also came with the usual caveats. Christian Pulisic was substituted at halftime after taking a kick to the calf, though both he and Mauricio Pochettino described it as precautionary.
          </p>

          <p>
            Pochettino, as is his habit, was quick to dampen any premature celebrations after the match.
          </p>

          <p>
            “Sometimes in soccer it’s not just about the game plan. You have a better night than your opponent. But you have to respect Paraguay… Four years ago, Argentina started with a loss and ended up winning the World Cup. It’s not just how you start, but how you finish.”
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-5">A Clear Statement</h2>

          <p>
            Still, there was a noticeable difference in how the players spoke about this result. Balogun called it a “real statement.” There was less of the cautious language that has often followed U.S. wins against teams they were expected to beat.
          </p>

          <p>
            This was, by some distance, the most complete opening performance the United States has produced at a World Cup in the modern era. The three first-half goals were the product of sustained pressure rather than individual brilliance.
          </p>

          <p className="font-semibold text-xl">
            Whether this becomes the start of something lasting or just another encouraging opening night will be decided in the coming weeks — starting with Australia in Seattle on June 19.
          </p>

          <p>
            For one night, though, the USMNT looked like a team that believes it belongs. That, more than the scoreline, was the real takeaway from Inglewood.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 13, 2026</p>
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