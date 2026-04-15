'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MascheranoExitPage() {
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

  const articleTitle = "The Sudden Exit: Why Javier Mascherano Left Inter Miami Just Months After Their First MLS Cup";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'The Sudden Exit: Javier Mascherano leaves Inter Miami just months after winning MLS Cup'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            The Sudden Exit: Why Javier Mascherano Left Inter Miami Just Months After Their First MLS Cup
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-15">April 15, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2215792362/crop/MM5DGNZQHA5DEMBYGY5G433XMU5DAORRHEZQ====/GettyImages-2215792362.jpg?auto=webp&format=pjpg&width=1920&quality=80"
            alt="Javier Mascherano Inter Miami exit 2026"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            It was supposed to be the beginning of a new dynasty. Instead, it lasted less than five months.
          </p>

          <p>
            On Tuesday evening, April 14, 2026, Inter Miami CF announced a bombshell: Javier Mascherano was no longer the head coach of the Herons. The man who took over in November 2024, led the club to its first MLS Cup title just 17 months later, and became a symbol of the Messi era — was gone.
          </p>

          <p>
            And he didn’t leave alone. His entire coaching staff, brought in with him in January 2025, departed alongside him.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Official Reason: “Personal Reasons”</h2>
          <p>
            Both the club and Mascherano were clear in their statements. The reason given was simply “personal reasons.” No further details were provided. In football, that phrase often means exactly what it says — something private that the individual does not wish to make public.
          </p>

          <p>
            Mascherano released a short, dignified statement:
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “I want everyone to know that, for personal reasons, I have decided to end my tenure as head coach of Inter Miami CF. I will always carry with me the memory of our first star, and wherever I am, I will continue to wish the club all the best. Thank you to the club for the trust, to all the staff for the hard work, and especially to the players who made unforgettable moments possible.”
          </blockquote>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Short but Historic Chapter</h2>
          <p>
            Mascherano arrived with relatively little managerial experience but quickly proved his worth. In 2025, he delivered Inter Miami’s first MLS Cup title and helped build a competitive, disciplined side around Messi, Suárez, and Busquets.
          </p>
          <p>
            His departure comes at a strange time — just weeks after the opening of the club’s long-awaited new stadium and while the team sits in a respectable position in the Eastern Conference.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What This Means for Messi and Inter Miami</h2>
          <p>
            For Lionel Messi, this is more than a coaching change. Mascherano was not only a former teammate and compatriot — he was one of his closest friends in football. Their relationship was a cornerstone of the dressing room.
          </p>
          <p>
            The interim role has been given to Guillermo Hoyos, a man Messi has known since he was 16 and who once called him “a genius.” While Hoyos brings experience and a deep connection to Messi, few see him as a long-term solution.
          </p>

          <p>
            Rumors are already linking Xavi Hernández with the job — a move that would reunite Messi with another former Barcelona captain.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Mascherano’s Legacy</h2>
          <p>
            In just 17 months, Javier Mascherano achieved something historic: he delivered Inter Miami’s first major trophy and proved that a young coach could succeed in a high-pressure environment surrounded by global superstars.
          </p>
          <p>
            He leaves with his head held high — no public drama, no accusations, just quiet dignity. In modern football, where coaching changes are often messy, that alone is rare.
          </p>

          <p className="font-medium mt-8">
            Whether we ever learn the full story behind his departure remains to be seen. For now, Inter Miami enter a new, uncertain chapter — with Messi still on the pitch, but without the man who helped bring them their first piece of silverware.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 15, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
}