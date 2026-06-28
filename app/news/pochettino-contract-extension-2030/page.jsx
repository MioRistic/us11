 'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoContractExtension() {
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

  const articleTitle = "Pochettino’s Future at the USMNT: Why U.S. Soccer Made Its Move Early";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Pochettino offered USMNT extension through 2030')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Pochettino’s Future at the USMNT: Why U.S. Soccer Made Its Move Early
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-28">June 28, 2026</time>
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
            src="https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=1080&quality=60"
            alt="Mauricio Pochettino USMNT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            INGLEWOOD, Calif. — Before the United States even kicked a ball at the 2026 World Cup, U.S. Soccer had already made its position clear: it wants Mauricio Pochettino to be the man who takes the program into the next cycle.
          </p>

          <p>
            According to multiple sources, the federation presented Pochettino with a contract extension that would keep him in charge through the 2030 World Cup in Spain, Portugal, and Morocco. The offer was made before the tournament began, and both sides have agreed to delay any final decision until after the USMNT’s run in 2026 is complete.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Calculated Show of Faith
          </h2>
          <p>
            It is a significant show of faith — and a calculated one. Pochettino’s current deal was always set to expire after this summer’s World Cup. By making an offer now, U.S. Soccer is attempting to remove uncertainty at a time when the coach’s stock in Europe remains high.
          </p>

          <p>
            The early results have been encouraging. The USMNT topped Group D with six points and showed signs of the identity Pochettino has been trying to build since taking over in 2024. Even in the 3-2 defeat to Türkiye, there were moments that suggested the team is moving in the right direction.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why the Decision Is Not Simple
          </h2>
          <p>
            Still, the decision is far from straightforward. Pochettino, 54, remains one of the most sought-after coaches in European football. His time at Tottenham, PSG, and Chelsea has kept him on the radar of several clubs.
          </p>

          <p>
            For U.S. Soccer, the calculation is clear. Continuity has long been a problem for the program. Extending his contract through 2030 would allow him to work with the current generation of players into their prime years and help shape the next wave of talent.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Happens Next?
          </h2>
          <p>
            Whether he accepts will likely depend on two things: how far the USMNT goes in 2026 and what kind of club opportunities arise afterward. If the team reaches the quarterfinals or beyond, the case for staying becomes significantly stronger.
          </p>

          <p className="font-semibold text-lg mt-10">
            What is already evident is that the federation sees Pochettino as more than just a coach for one cycle. They see him as the man who can take the program from promising to consistently competitive on the global stage.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 28, 2026</p>
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