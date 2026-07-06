'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BalogunFIFAControversy() {
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

  const articleTitle = "FIFA’s Shocking Decision to Let Balogun Play vs Belgium Ignites Major Controversy at World Cup 2026";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('FIFA allows Balogun to play vs Belgium despite red card – Huge controversy')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            FIFA’s Shocking Decision to Let Balogun Play vs Belgium Ignites Major Controversy at World Cup 2026
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-05">July 5, 2026</time>
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
            src="https://assets.goal.com/images/v3/blt68d4a08caa1ea2fa/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DAORWGQ3A====/GettyImages-2240353608.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Folarin Balogun Red Card Controversy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: John Dorton/ISI Photos/USSF
 | 
Credit: Getty Images
Copyright: 2025 John Dorton/ISI Photos/USSF
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            One of the most contentious decisions of the 2026 World Cup has erupted just hours before the United States face Belgium in the Round of 16.
          </p>

          <p>
            Folarin Balogun, the USA’s leading scorer at the tournament, was sent off in the 64th minute of their Round of 32 clash against Bosnia and Herzegovina. Referee Raphael Claus, after consulting VAR, judged that the forward had committed a deliberate and reckless challenge on Tarik Muharemović.
          </p>

          <p>
            Under normal circumstances, that would have been the end of Balogun’s tournament. FIFA’s own regulations — Article 66.4 of the Disciplinary Code and Article 10.5 of the World Cup competition rules — state that a red card carries an automatic one-game suspension.
          </p>

          <p>
            Instead, FIFA invoked Article 27 of the Disciplinary Code, an exceptional clause that allows them to suspend the execution of a sanction in “exceptional circumstances.” The governing body has ruled that Balogun is eligible to face Belgium on Sunday in Seattle.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Belgium Left Stunned and Furious
          </h2>
          <p>
            The reaction from the Royal Belgian Football Association (RBFA) was swift and scathing.
          </p>

          <p>
            In a strongly worded official statement released late Saturday, the Belgians expressed “deep shock and disbelief” at the decision. They argued that it directly contradicts the clear rules of the competition and sets a dangerous precedent that undermines the integrity of the tournament.
          </p>

          <p>
            The RBFA confirmed they are exploring “all available options” to challenge the ruling and protect the principle of fair play.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Backlash Grows on Social Media
          </h2>
          <p>
            Public reaction, particularly on X, has been overwhelmingly negative toward both FIFA and the United States.
          </p>

          <p>
            Many fans have accused FIFA of favoritism toward the co-hosts, with some going as far as alleging political influence from the U.S. government. Others have called the decision “outright corruption.”
          </p>

          <p>
            Some Belgian supporters took a more defiant tone, suggesting they would actually prefer to face the strongest possible American team.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Happens Next?
          </h2>
          <p>
            Balogun is now expected to start against Belgium on Sunday evening in Seattle. For the Americans, his presence is a significant boost in attack. For Belgium, it adds both difficulty and motivation — a chance to prove they can overcome not just the U.S., but what many perceive as an unfair advantage.
          </p>

          <p>
            This latest controversy arrives at a time when FIFA’s credibility is already under scrutiny during this World Cup. Whether the decision was technically within the rules or not, the optics are poor — and the football world is watching closely.
          </p>

          <p className="font-bold text-xl mt-8">
            The sporting merit of the United States’ Round of 16 campaign may now hinge on how this very public dispute plays out on the pitch.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 5, 2026</p>
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