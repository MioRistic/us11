'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ArgentinaNavyBlueKit() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setMounted(true);
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

  const articleTitle = "Why Argentina Are Wearing Their Navy Blue Kit Against England in the 2026 World Cup Semi-Final";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Why Argentina are wearing navy blue vs England in 2026 WC Semi-Final 🇦🇷')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Why Argentina Are Wearing Their Navy Blue Kit Against England in the 2026 World Cup Semi-Final
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-15">July 15, 2026</time>
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
            src="https://i.ibb.co/Wbxt5X1/3-EWNH7-J-1-1024x536.jpg"
            alt="Argentina Navy Blue Kit vs England 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Credit: Sipa US / Alamy Stock Photo
          </div>
        </figure>

        {/* STICKY DUAL BUY TICKETS BANNERS */}
        <div suppressHydrationWarning>
          {mounted && (
            <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white">
              <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Banner 1 */}
                  <a
                    href="https://fanatics.93n6tx.net/L0o4BM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div>
                      <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                        Shop at Fanatics
                      </h3>
                    </div>
                    <div className="w-14 h-14 bg-white-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="TicketNetwork" className="w-full h-full object-contain" />
                    </div>
                  </a>

                 
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            Atlanta — July 15, 2026
          </p>

          <p>
            When Argentina take to the field for their 2026 FIFA World Cup semi-final against England, they won’t be wearing their iconic sky-blue and white striped home shirt. Instead, Lionel Messi and his teammates will line up in their **navy blue away kit**.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Are Argentina Wearing Navy Blue Against England?
          </h2>
          <p>
            Although there is no colour clash with England’s traditional all-white kit, Argentina requested — and FIFA approved — the use of their navy blue away jersey. Many believe this decision is rooted in history, tradition, and a touch of superstition.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Historic Connection
          </h2>
          <p>
            The navy blue shirt has been worn during two of Argentina’s most memorable World Cup encounters with England:
          </p>
           {/* Lewandowski Banner - Fanatics */}
  <div suppressHydrationWarning>{mounted && (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
  <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
      <img 
        src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" 
        alt="Fanatics" 
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
      />
    </div>
    
    <div className="flex-1 min-w-0">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
        Chicago Fire Robert Lewandowski adidas 2026 Home Jersey
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://fanatics.93n6tx.net/L0o4BM"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
  >
    Shop now
  </a>
  </div>
)}</div>

          <h3>1986 World Cup Quarter-Final – Argentina 2-1 England</h3>
          <p>
            Diego Maradona produced the most famous individual performance in World Cup history — scoring the “Hand of God” and the “Goal of the Century” — while wearing the navy blue kit.
          </p>

          <h3>1998 World Cup Round of 16 – Argentina 2-2 England (Argentina won on penalties)</h3>
          <p>
            Another dramatic meeting where Argentina once again emerged victorious in the navy blue shirt.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Maradona Effect
          </h2>
           {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/b5qZvN8L/SHILTON-MARADONA-scaled-e1606511778453.jpg"
            alt="Argentina Navy Blue Kit vs England 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2015 Getty Images
          </div>
        </figure>
        
          <p>
            For many Argentinians, the navy blue kit carries what fans call the “Maradona effect.” It is not just superstition — it is a powerful symbol of belief and confidence tied to one of the greatest nights in Argentine football history.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Kit Will They Wear?
          </h2>
          <p>
            Argentina are expected to line up in:
          </p>
          <ul>
            <li><strong>Navy blue shirt</strong></li>
            <li>Black shorts</li>
            <li>Black socks</li>
          </ul>

          <p>
            England will wear their classic all-white home kit.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Can the Navy Blue Kit Give Argentina a Psychological Edge?
          </h2>
           {/* Lewandowski Banner - Fanatics */}
  <div suppressHydrationWarning>{mounted && (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
  <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
      <img 
        src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" 
        alt="Fanatics" 
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
      />
    </div>
    
    <div className="flex-1 min-w-0">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
        Chicago Fire Robert Lewandowski adidas 2026 Home Jersey
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://fanatics.93n6tx.net/L0o4BM"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
  >
    Shop now
  </a>
  </div>
)}</div>

          <p>
            Whether it provides a real psychological advantage is impossible to measure, but it certainly reinforces memories of two iconic victories over England. In football, traditions and rituals matter — and for Argentina, this shirt is part of their World Cup identity against one of their greatest rivals.
          </p>

          <p className="font-bold text-xl mt-8">
            As Messi and his teammates chase back-to-back World Cup titles, every detail counts — even the colour of the shirt.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: July 15, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">← Back to blog</Link>
        </footer>

      </div>
    </article>
  );
}