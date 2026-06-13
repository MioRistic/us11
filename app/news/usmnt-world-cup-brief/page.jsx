'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTWorldCupBrief() {
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

  const articleTitle = "USMNT World Cup Brief";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT World Cup Brief 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* NASLOV */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight">USMNT World Cup Brief</h1>
        <p className="text-gray-500 mt-2">Daily updates from the 2026 FIFA World Cup</p>
      </div>

      {/* SHARE DUGMAD */}
      <div className="flex items-center gap-3 mb-8">
        <a href={facebookShare} target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
          <FaFacebookF size={18} />
        </a>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
          <FaTwitter size={18} />
        </a>
        <a href={whatsappShare} target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
          <FaWhatsapp size={18} />
        </a>
        <button 
          onClick={handleCopyLink}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <FiCopy size={18} />
        </button>
        {copied && <span className="text-green-600 text-sm ml-2">Link copied!</span>}
      </div>

      {/* FEATURE IMAGE */}
      <figure className="w-full rounded-3xl overflow-hidden shadow-xl mb-10">
        <Image
          src="https://i.ibb.co/202b5vLP/usmnt.png"
          alt="USMNT World Cup 2026"
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
          priority
        />
        <figcaption className="text-xs text-gray-400 px-3 py-2">
          USMNT during the 2026 FIFA World Cup
        </figcaption>
      </figure>

      {/* NEXT MATCH */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Next Match</h2>
        
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Group D • Matchday 2</p>
              <p className="text-2xl font-semibold mt-1">United States vs Australia</p>
              <p className="text-gray-600 mt-1">June 19, 2026 • 12:00 PT • Seattle</p>
            </div>
            <div className="text-right">
              {/* <Link 
                href="/matches/usmnt-australia-2026" 
                className="inline-block px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition"
              >
                Match Preview
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* MATCH UPDATES */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Match Updates</h2>

        {/* Prva utakmica */}
        <div className="border border-gray-200 rounded-2xl p-6 mb-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">June 12, 2026</span>
              <h3 className="text-xl font-semibold mt-1">United States 4 - 1 Paraguay</h3>
            </div>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-medium">
              Win
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>• Early own goal by Damián Bobadilla (7') gave USMNT the lead.</p>
            <p>• Folarin Balogun scored twice in the first half (31' &amp; 45+5').</p>
            <p>• Giovanni Reyna sealed the win with a late goal in stoppage time.</p>
            <p>• Dominant first-half performance in front of 70,492 fans at SoFi Stadium.</p>
            <p>• Christian Pulisic was subbed at halftime as a precaution (calf injury).</p>
          </div>

          <div className="mt-5">
            <Link 
              href="/news/usmnt-deliver-the-statement-theyve-been-waiting-for" 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Read full match recap →
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}