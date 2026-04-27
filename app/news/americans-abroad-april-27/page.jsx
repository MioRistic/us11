'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AmericansAbroad() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle = "Americans Abroad: Pulisic and McKennie Neutralize Each Other as Aaronson’s Leeds Fall Just Short at Wembley";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Americans Abroad: Pulisic and McKennie Neutralize Each Other as Aaronson’s Leeds Fall Just Short at Wembley
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-27">April 27, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2260113972/crop/MM5DINZQGM5DENRUGU5G433XMU5DAORSGQ2Q====/GettyImages-2260113972.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Americans Abroad"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: | Credit: Getty Images | Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Another weekend of mixed emotions for the American contingent in Europe.
          </p>

          <p>
            From San Siro to Wembley, U.S. talents were involved in high-stakes matches across the continent, delivering moments of promise, frustration, and breakthrough performances.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Pulisic and McKennie Neutralize Each Other in San Siro Stalemate</h2>
          <p>
            Christian Pulisic and Weston McKennie faced off in a tense, physical 0-0 draw between AC Milan and Juventus. Neither American could make the decisive impact as the match ended goalless at San Siro.
          </p>

          <p>
            Pulisic struggled to link up effectively with Rafael Leão, while McKennie battled hard in midfield but was forced to endure a heavy challenge from Fikayo Tomori. Milan will be the happier side, maintaining their position in the Champions League places.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Aaronson and Leeds Fall Just Short at Wembley</h2>
          <p>
            Brenden Aaronson came agonizingly close to sending Leeds United to the FA Cup final, only for Chelsea goalkeeper Robert Sánchez to deny him with a crucial save. Enzo Fernández’s first-half header proved enough as Chelsea advanced with a 1-0 victory.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Title Glory for Haji Wright and Coventry City</h2>
          <p>
            Haji Wright and Coventry City capped off a dream season by winning the Championship title. Although promotion was already secured, lifting the trophy with a 3-1 win over Wrexham provided the perfect finish.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Other Notable Performances</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Alex Freeman</strong> impressed in his first La Liga start for Villarreal.</li>
            <li><strong>Mathis Albert (16)</strong> became the youngest American to play in the Bundesliga for Borussia Dortmund.</li>
            <li><strong>Folarin Balogun</strong> saw his eight-game scoring streak end in Monaco’s 2-2 draw with Toulouse.</li>
            <li><strong>Mark McKenzie</strong> had a strong defensive showing against Balogun.</li>
          </ul>

          <p className="font-medium text-lg mt-10">
            Another busy weekend for Americans in Europe showed both the highs and the frustrations of playing at a high level abroad.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: April 27, 2026</span>
          <Link href="/news" className="hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}