'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoStays2030() {
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

  const articleTitle =
    "Mauricio Pochettino Stays: USMNT Coach Signs New Deal Through 2030 World Cup";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Mauricio Pochettino stays as USMNT coach through 2030 World Cup 🇺🇸'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Mauricio Pochettino Stays: USMNT Coach Signs New Deal Through 2030 World Cup
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-03">August 3, 2026</time>
          </div>
        </header>

        {/* SHARE BUTTONS */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition"
          >
            <FaWhatsapp size={18} />
          </a>
          <button
            onClick={handleCopyLink}
            className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
          >
            <FiCopy size={16} />
          </button>
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Mauricio Pochettino USMNT coach"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p className="text-xl font-medium">
            Mauricio Pochettino is staying.
          </p>

          <p>
            U.S. Soccer announced Monday that the Argentine has signed a new contract that will keep him as head coach of the United States Men’s National Team through the 2030 World Cup.
          </p>

          <p>
            The deal marks a significant commitment to continuity after Pochettino led the co-hosts to a first-place finish in Group D and a Round of 16 appearance at this summer’s tournament on home soil.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            From Short-Term Project to Full Cycle
          </h2>

          <p>
            Pochettino was hired in September 2024 on a two-year contract that was always designed to run through the end of the 2026 World Cup. His mandate was clear: prepare the team for the biggest tournament in American soccer history.
          </p>

          <p>
            He delivered. The USMNT won its group for only the third time in program history, beating Paraguay and Australia before falling 4-1 to Belgium in the Round of 16.
          </p>

          <p>
            Even before the tournament began, U.S. Soccer had already tabled an extension offer. Both sides agreed to wait until the World Cup was over before making a final decision.
          </p>

          <p>
            That decision is now official.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Expanded Role
          </h2>

          <p>
            Under the new agreement, Pochettino and his staff will not only continue leading the senior national team. They will also take on a broader advisory role across the federation — supporting the national team pathway, youth development, coaching education, and collaboration with the professional leagues.
          </p>

          <p>
            Longtime assistants Jesús Pérez, Miguel D’Agostino and Toni Jiménez will remain, along with more recent additions Sebastian Pochettino and Silvia Tuyà.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “Mauricio and his staff believe in the future of soccer in the United States and our new project allows us to build on the progress of the USMNT and the momentum of U.S. Soccer.”
            <br />
            <span className="text-base not-italic text-gray-600">— JT Batson, U.S. Soccer CEO</span>
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Comes Next
          </h2>

          <p>
            The next four years will be packed. Before World Cup qualifying for 2030 even begins, the USMNT will compete in the 2027 Concacaf Nations League and Gold Cup, the 2028 Olympics in Los Angeles, and potentially another Copa América on home soil.
          </p>

          <p>
            Pochettino, 54, becomes the first USMNT coach since Bruce Arena to be handed a second full World Cup cycle. History shows second cycles have often been difficult for American coaches. This time, the federation is betting that stability and a clearer long-term vision will produce different results.
          </p>

          <p className="font-semibold text-lg mt-10">
            For now, the message is simple: the project continues.
          </p>

          <p className="font-bold text-xl mt-6">
            Pochettino is back. The next chapter starts now.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/gio-reyna-strasbourg"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  1
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Gio Reyna Agrees Move to Strasbourg
                </h3>
              </div>
            </Link>

            <Link
              href="/news/leeds-liverpool-chicago"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  2
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Leeds Stun Liverpool 4-2 in Chicago
                </h3>
              </div>
            </Link>

            <Link
              href="/news/lucas-herrington-hull-city"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  3
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Hull City Agree Deal for Lucas Herrington
                </h3>
              </div>
            </Link>

            <Link
              href="/news/mls-matchday-roundup-lewandowski-messi"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  4
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS Matchday Roundup
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 3, 2026</p>
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