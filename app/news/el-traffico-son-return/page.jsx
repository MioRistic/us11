'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ElTrafficoSonReturn() {
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

  const articleTitle = "Son Heung-Min’s Statement Goal in LAFC’s El Tráfico Rout: A Triumphant Return";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Son Heung-Min scores in El Tráfico 🔥 LAFC 3-0 LA Galaxy')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Son Heung-Min’s Statement Goal in LAFC’s El Tráfico Rout: A Triumphant Return
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-19">July 19, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2237499046/crop/MM5DCNZUGA5DSNZZHJXG653FHIYDUOJR/GettyImages-2237499046.jpg?auto=webp&format=pjpg&width=1920&quality=60" 
            alt="Son Heung-Min celebrates goal in El Tráfico"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT - The Athletic Style */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p>
            It only took a few seconds after Son Heung-Min’s goal to understand what had just happened. It wasn’t just another goal in a 3-0 win over LA Galaxy. It was a statement — and a long-awaited return to form.
          </p>

          <p>
            On Friday night at a sold-out Dignity Health Sports Park, the South Korean superstar finally broke his scoring drought, helping LAFC dominate their fiercest rivals in El Tráfico and secure a convincing 3-0 victory.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Smile That Said Everything
          </h2>
          <p>
            After 45 scoreless shots across his first 13 MLS appearances in 2026, Son found the net in the 57th minute. Linking up with Mathieu Choinière, he unleashed a powerful long-range strike past Galaxy goalkeeper Novak Micović.
          </p>

          <p>
            The 34-year-old looked to the sky, then back at the pitch, and broke into a smile that stayed with him until the final whistle. It was more than relief — it was redemption.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg">
            “The derby is always really special. I just wanted to be part of it and win. Being back, scoring, and winning with a clean sheet is going to be really helpful for our confidence.”
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Night of Stars
          </h2>
          <p>
            Jacob Shaffelburg opened the scoring with a clever assist for Mark Delgado against his former club. Denis Bouanga converted a penalty in first-half stoppage time — his seventh straight goal against the Galaxy. And then came Son.
          </p>

          <p>
            LAFC head coach Marc Dos Santos captured the mood perfectly:
          </p>
          <blockquote>
            “I’m very happy Sonny scored. He came back from an emotional World Cup and deserved this moment. When you have that togetherness as a group, you feel good for a guy like him.”
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means Moving Forward
          </h2>
          <p>
            With back-to-back clean-sheet wins and a huge rivalry victory, LAFC now sit third in the Western Conference with 27 points. The result gives them crucial momentum as they push for MLS Cup contention.
          </p>

          <p>
            Dos Santos, however, struck a note of caution:
          </p>
          <blockquote>
            “We have to stay humble. There will be difficult moments. But when we stay together, we can achieve great things.”
          </blockquote>

          <p className="font-bold text-xl mt-8">
            El Tráfico once again delivered drama, quality, and emotion. And on this night, the spotlight belonged to Son Heung-Min — smiling, scoring, and reminding everyone why he remains one of the biggest stars in American soccer.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16 border-t pt-8 bg-white">
          <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
            Next For You
          </h2>

          <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">
            <Link href="/news/top-10-mls-transfers-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Top 10 Most Interesting Summer Transfers in MLS
                </h3>
              </div>
            </Link>

            <Link href="/news/cremaschi-parma-permanent" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Benjamin Cremaschi’s Move to Parma Made Permanent
                </h3>
              </div>
            </Link>

            <Link href="/news/griezmann-orlando-debut" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Antoine Griezmann Officially Arrives in Orlando
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 19, 2026</p>
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