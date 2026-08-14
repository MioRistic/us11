'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BreelEmboloAtlanta() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    setMounted(true);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Atlanta United Finalizing $18m Deal for Switzerland Forward Breel Embolo";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Atlanta United Finalizing $18m Deal for Switzerland Forward Breel Embolo
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-14">August 14, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwzV8zjhlrGysUyoFj63vuCBg-DpmwygmARa2ASDwTA&s=10"
            alt="Breel Embolo Atlanta United transfer"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 DeFodi Images, Credit: DeFodi Images via Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Atlanta United are closing in on one of the biggest signings in MLS history, finalizing a deal worth around $18 million to bring Switzerland international Breel Embolo from Stade Rennes.
          </p>

          <p>
            The 29-year-old forward would become one of the five most expensive players ever signed by an MLS club. Atlanta already account for five of the league’s ten costliest transfers, underlining the club’s continued willingness to spend at the top end of the market.
          </p>

          <p>
            Embolo arrives after a solid season in Ligue 1, scoring 10 goals and adding three assists in 34 appearances for Rennes. He previously played for AS Monaco and Borussia Mönchengladbach, and began his career at FC Basel before moving to Schalke.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">A proven international</h3>
          <p>
            The Swiss striker has 26 goals in 92 caps for his country. He featured at the 2026 World Cup, where his tournament ended with a controversial red card in Switzerland’s elimination against Argentina.
          </p>
          <p>
            His combination of physical presence, hold-up play and experience at the highest level makes him a clear upgrade in attack for Atlanta, who lost Emmanuel Latte Lath to Union Berlin earlier this summer.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Context of the move</h3>
          <p>
            Atlanta worked on several high-profile forward targets this window, including Darwin Núñez, before advancing talks for Embolo. French reports and multiple sources now indicate the deal is close to completion, with the fee reported in the region of $18 million (€15.5m).
          </p>
          <p>
            If confirmed, Embolo would immediately become one of the highest-profile European arrivals of the MLS season and a centerpiece of Atlanta’s attack under Tata Martino.
          </p>
          <p>
            For Rennes, the sale after just one season would represent a profitable exit after signing him from Monaco. For Atlanta, it is another statement of ambition — and further proof that the Five Stripes remain among the most aggressive spenders in the league.
          </p>

          <p className="font-bold text-xl mt-8">
            The deal is not yet officially announced, but sources say it is in the final stages.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/kevin-kelsy-rangers-bid" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
                    alt="Kevin Kelsy Rangers bid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 13, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/alexis-sanchez-cf-montreal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10"
                    alt="Alexis Sánchez CF Montréal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 11, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/middlesbrough-usmnt-trio" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/G4WV0yhL/images.jpg"
                    alt="USMNT Trio Middlesbrough"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT Trio Living Together at Middlesbrough as Premier League Dream Takes Shape
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 10, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/la-galaxy-chucky-lozano-loan" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Chucky Lozano LA Galaxy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: August 14, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}