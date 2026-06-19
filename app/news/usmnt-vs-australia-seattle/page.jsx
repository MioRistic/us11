'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTvsAustraliaSeattle() {
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

  const articleTitle = "USMNT vs Australia: A Statement Win, Then a Real Test of Ambition";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT faces Australia in Seattle – Big test after Paraguay thrashing 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT vs Australia: A Statement Win, Then a Real Test of Ambition
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-19">June 19, 2026</time>
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
               <figure className="relative w-full rounded-2xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
                 <Image
                   src="https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                   alt="Best World Cup 2026 Jerseys for Street Style"
                   fill
                   className="object-cover"
                   priority
                 />
                 
                 {/* COPYRIGHT NA SLICI */}
                 <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                   Getty Images Sport
                 </div>
               </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            After the euphoria of a 4-1 win over Paraguay, the United States now faces a very different challenge. On Friday in Seattle, Mauricio Pochettino’s side will meet an Australia team that has already shown it has no intention of making life easy for anyone in Group D.
          </p>

          <p>
            The 4-1 victory over Paraguay was the kind of performance the USMNT has been promising for years — dominant, clinical, and emotionally charged. Folarin Balogun’s brace wasn’t just statistically significant; it was symbolic. The forward became the first player in USMNT history to score his first international brace in a World Cup match, and only the second American ever to score multiple goals in a single World Cup game.
          </p>

          <p>
            That kind of individual milestone, combined with a convincing team result, has given this squad something it has often lacked heading into big tournaments: momentum and belief.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-5">The Stakes in Seattle</h2>
          <p>
            This is no longer just about collecting three points. With both teams sitting on three points after Matchday 1, Friday’s clash at Lumen Field carries significant weight for the top of Group D. A win for the USMNT would put them in a commanding position to finish first. Anything less, and the math suddenly becomes complicated heading into the final group game against Turkey.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-5">What Australia Brings</h2>
          <p>
            Australia will not come to Seattle to sit deep and defend. Under Tony Popovic, they have shown a willingness to press and transition quickly. They possess dangerous individuals — particularly Nestory Irankunda and the experienced Mathew Leckie. Their defensive structure is compact, and they are more than capable of punishing teams that lose discipline in possession.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-5">The Balogun Factor</h2>
          <p>
            Much of the attention will rightly fall on Folarin Balogun. After years of being labeled a prospect, the 25-year-old is finally delivering on the biggest stage. His movement, finishing, and growing confidence in the final third have been noticeable. Against a physically imposing Australian backline, his ability to find space between the lines could be decisive.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-5">The Bigger Picture</h2>
          <p>
            This match will tell us something important about where this USMNT stands. Beating Paraguay was necessary. Beating Australia would be meaningful. It would signal that this group isn’t just capable of beating weaker opposition on a good day — it can impose itself against teams that come to compete.
          </p>

          <p className="font-semibold text-lg mt-10">
            Australia has already shown it belongs in this conversation. The United States now has the chance to prove it belongs at the front of it.
          </p>

          <p className="font-semibold text-lg">
            The result in Seattle won’t decide the USMNT’s World Cup. But it could go a long way toward defining how this tournament feels for American fans — and how this team sees itself.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 19, 2026</p>
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