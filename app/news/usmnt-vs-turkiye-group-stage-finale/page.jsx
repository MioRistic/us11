'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTvsTurkiyePreview() {
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

  const articleTitle = "USMNT vs Türkiye: Playing for Pride, Momentum and a Perfect Group Stage";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT vs Türkiye: Playing for pride and momentum in final group game ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT vs Türkiye: Playing for Pride, Momentum and a Perfect Group Stage
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-25">June 25, 2026</time>
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHG58xIJA464ZXYwF1YUDzSKe11IXvZX2m4DdIAEjFgA&s=10"
            alt="USMNT vs Türkiye World Cup 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Jared C. Tilton
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            For the first time in their World Cup history, the United States Men’s National Team will play their final group stage match with first place already secured.
          </p>

          <p>
            That in itself is a major achievement. But it also creates a unique challenge for Mauricio Pochettino heading into Thursday’s clash against Türkiye at SoFi Stadium.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Pochettino Wants Intensity
          </h2>
          <p>
            Even with qualification assured, the American coach is demanding intensity and focus. He wants to maintain momentum, confidence, and winning habits heading into the knockout stages.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “We need to defend the colors, the jersey, and American culture. I want the team that steps on the field tomorrow to want to eat the grass here at SoFi Stadium and play like it’s the World Cup final.”
          </blockquote>

        

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Expected Rotation
          </h2>
          <p>
           With several key players on yellow cards — including Tyler Adams, Chris Richards, Antonee Robinson, and Folarin Balogun — heavy rotation is almost certain. Pochettino has already hinted that risking suspension for the Round of 16 would be unnecessary.
          </p>

          <p>
            Cristian Roldan remains doubtful due to a quad issue, while Christian Pulisic is available and could feature off the bench. This opens the door for players like Gio Reyna, Brenden Aaronson, Alex Zendejas, and Tim Weah to earn important minutes.


          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Türkiye Playing for Pride
          </h2>
          <p>
            Eliminated from the tournament, Türkiye still pose a dangerous threat. Despite poor results, they have shown quality — particularly through young stars Arda Güler and Kenan Yıldız. Manager Vincenzo Montella is expected to give minutes to fringe players, but the Turks will be motivated to end their World Cup on a high note and prove their first two games were an anomaly.Pochettino is taking them seriously:


          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
“They have good players. Of course they are eliminated, but I think it’s going to be a tough game. We are not thinking that it’s going to be easy.”

          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>
          <p>
            A victory on Thursday would give the USMNT a perfect group stage record — three wins from three matches. 
            That kind of momentum, combined with finishing top of Group D, could be invaluable as they prepare for the knockout rounds.
          </p>

          <p className="font-semibold text-lg mt-10">
            This is no longer a must-win match for qualification. 
            It’s a match for momentum, rhythm, and statement-making.
          </p>

          <p className="font-bold text-xl mt-8">
            The statement has already begun. Now it’s time to finish it properly.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 25, 2026</p>
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