'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BrendenAaronsonLeedsDeal() {
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
    "Brenden Aaronson Signs New Leeds Deal Until 2029 as American Midfielder Commits to Elland Road Project";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Brenden Aaronson signs new 3-year deal with Leeds United until 2029 🇺🇸⚽️'
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
            Brenden Aaronson Signs New Leeds Deal Until 2029 as American Midfielder Commits to Elland Road Project
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-20">August 20, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              aria-label="Copy link"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Brenden Aaronson Leeds United contract extension"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2025 Getty Images | Credit: Getty Images | Creator: Ed Sykes
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Leeds United have tied down one of their most consistent performers of the past two seasons. Brenden Aaronson has signed a new three-year contract that will keep the United States international at Elland Road until the summer of 2029.
          </p>

          <p>
            The 25-year-old’s previous deal was due to expire at the end of the 2026-27 campaign. By securing his future now, Leeds have removed any uncertainty around a player who has quietly become an important part of Daniel Farke’s midfield.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            From Doubt to Commitment
          </h2>

          <p>
            Aaronson first arrived from Red Bull Salzburg in the summer of 2022 on a five-year contract. The early years were difficult. Leeds were relegated in 2023, and the attacking midfielder spent the following season on loan at Union Berlin. At that point, few expected him to rebuild his standing in West Yorkshire so successfully.
          </p>

          <p>
            He returned, accepted his situation, and gradually won back the trust of supporters and coaching staff. Last season he started 37 Premier League matches, contributing four goals and five assists as Leeds finished a solid 14th. Reliability has been one of his strongest traits — he has missed only one league game across the past two campaigns.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “It is a dream come true, being at this club and being part of this project. It is so ambitious. Yorkshire is my second home now.”
          </blockquote>

          <p>
            The timing of the extension is notable. Aaronson is the third player in a short period to commit his long-term future to the club, following renewals for Joe Rodon and Jayden Bogle. The club’s statement described the decision as a reflection of his rising status under Farke.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Summer Momentum
          </h2>

          <p>
            Aaronson also arrives into the new season with momentum from the summer. He featured for the United States at the 2026 World Cup, making a 77-minute appearance in the final group-stage match against Turkey. In pre-season friendlies he has already scored against both Liverpool and Manchester United.
          </p>

          <p>
            Since joining Leeds he has made 129 appearances, scoring 14 goals and providing 10 assists. Those numbers will not dominate highlight reels, but they underline a player who has found a role and stuck to it. Farke clearly values the energy, work rate and tactical discipline Aaronson brings to the side.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means
          </h2>

          <p>
            For Leeds, the deal removes a potential distraction ahead of the Premier League opener against Nottingham Forest. For Aaronson, it represents validation after a period when his future at the club looked far less secure.
          </p>

          <p className="font-semibold text-lg mt-10">
            The American midfielder has gone from a player many wrote off after relegation and a loan move to one the club is actively locking down. In modern football, that kind of recovery is rarely straightforward. Aaronson has earned this extension the hard way — by staying, improving, and making himself difficult to leave out.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/messi-union-miami-subaru-park" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/15qZsXB/images-6.jpg"
                    alt="Messi vs Philadelphia Union"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Battle Lines Drawn Again: Messi’s Emotional Goal and Chaos as Union Refuse to Yield
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/montreal-columbus-sanchez-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="CF Montréal vs Columbus"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Edge Columbus 2-1 as Streit’s Strike Seals a Much-Needed Road Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/griezmann-lewandowski-orlando-chicago" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/1GVM9GVD/images-5.jpg"
                    alt="Griezmann vs Lewandowski"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Griezmann vs Lewandowski: Lightning Delay, Retro Kits and a 2-1 Fire Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/gio-reyna-strasbourg" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt1c7bd4c8d2766389/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-02-20T134449.815.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Gio Reyna Strasbourg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Gio Reyna Agrees Move to Strasbourg
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 20, 2026</p>
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