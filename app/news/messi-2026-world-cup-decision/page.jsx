'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiWorldCupPage() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle = "The Messi Question: Why Argentina’s Greatest Still Hasn’t Decided on the 2026 World Cup";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            The Messi Question: Why Argentina’s Greatest Still Hasn’t Decided on the 2026 World Cup
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-16">April 16, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE - Nova slika koju si poslao */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2268176070/crop/MM5DGNBSGQ5DCOJSGY5G433XMU5DGORQ/GettyImages-2268176070.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Lionel Messi with the Argentina national team"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Lionel Messi during Argentina game. Creator: AFP | Credit: AFP via Getty Images | Copyright: AFP or licensors
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT - Messi World Cup tekst */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            With just over two months until the opening match of the 2026 FIFA World Cup, the biggest question hanging over the defending champions is not about tactics, squad depth or the pressure of playing on home soil across North America. It is far simpler, and far more profound:
          </p>

          <p className="text-2xl font-semibold text-center my-8">
            Will Lionel Messi be there?
          </p>

          <p>
            As of mid-April 2026, the answer remains a deliberate, respectful silence. Argentina head coach Lionel Scaloni has made it crystal clear on multiple occasions: the decision belongs entirely to Messi.
          </p>

          <p>
            “That’s a question more for him,” Scaloni said recently. “I’ll do everything possible to make sure he’s there. I believe that, for the good of football, he has to be there. But it’s not me who decides. It’s up to him — his state of mind, his physical condition. He has earned the right to decide with peace of mind. We are in no hurry.”
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Different Kind of Pressure</h2>
          <p>
            In 2022, the narrative was urgent: this might be Messi’s last realistic chance to win the World Cup. The emotional release after the final against France was visceral.
          </p>
          <p>
            Four years later, the dynamic has flipped. There is no longer the desperate hunger. Messi has nothing left to prove on the international stage. The 2026 World Cup would be a bonus lap, not a redemption arc.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Physical and Mental Reality</h2>
          <p>
            At 38 (he will turn 39 during the tournament), Messi is no longer the indestructible force of his mid-20s. Minor muscular issues have become more frequent. More importantly, Messi has always been brutally honest with himself about his performance. He has said repeatedly that if he cannot help the team at the highest level, he would rather not be there at all.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What “No” Would Mean</h2>
          <p>
            If Messi ultimately decides to skip the tournament, it would mark one of the most graceful exits in football history. No injury-forced withdrawal, no drama — simply a man who knows his body and his priorities after two decades at the absolute peak.
          </p>
          <p>
            Argentina would still enter the World Cup as one of the favorites. But the emotional and symbolic void would be enormous. For many fans, a World Cup without Messi in an Argentine shirt would feel incomplete.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Clock Is Ticking — But Not for Everyone</h2>
          <p>
            Scaloni’s repeated message of “we are in no hurry” is telling. Argentina does not need an answer tomorrow. Messi continues to be named in squads for friendlies. The door stays wide open.
          </p>
          <p>
            Yet with the tournament drawing closer, the speculation will only intensify. Every Instagram story, every minor absence from a club match will spark fresh debate.
          </p>

          <p className="mt-8 font-medium">
            For now, the greatest player of his generation continues to do what he has always done best: let his football speak when it is ready, and protect his peace when it is not.
          </p>

          <p className="mt-6 text-center font-semibold text-xl">
            The 2026 World Cup will be historic for many reasons. But the story that will dominate until the first whistle blows is still the same one that has defined Argentine football for two decades:
          </p>

          <p className="text-3xl font-bold text-center my-8">
            Will Leo be there?
          </p>

          <p className="text-center font-medium">
            And for the first time, the answer is entirely his to give.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 16, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}