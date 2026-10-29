'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PeaceCollectiveStreetFighterMLS() {
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

  const articleTitle =
    'Peace Collective x Street Fighter x MLS: The Crossover Collection Worth Buying';

  const shopCollection = 'https://mlsstore.i8h2.net/DWGa9b';

  const products = [];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Affiliate disclosure */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 text-sm text-gray-600">
          <p>
            <strong>Affiliate disclosure:</strong> Some links in this article are affiliate links. If you shop through them, US11 may earn a commission at no extra cost to you. We only recommend products we think are worth your attention.
          </p>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Peace Collective x Street Fighter x MLS: The Crossover Collection Worth Buying
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-29">October 29, 2026</time>
          </div>

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

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[2/1]">
          <Image
            src="https://i.postimg.cc/jSgdw8JN/Screenshot-2026-10-29-at-5-04-00-PM.png"
            alt="Peace Collective x Street Fighter x MLS collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Peace Collective / MLS Store
          </div>
        </figure>

        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href={shopCollection}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop the Peace Collective x Street Fighter x MLS collection
              </h3>
            </div>
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
              <img
                src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg"
                alt="MLS"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">
          <p>
            Peace Collective has spent the last few seasons making MLS apparel that people actually wear on non-match days. Their latest drop takes that idea one step further.
          </p>

          <p>
            The brand teamed up with Street Fighter for a crossover collection that puts MLS players and clubs into the same visual language as one of the most iconic fighting games of all time. The result is a range of black tees, hoodies, and heavier pieces that feel more like streetwear than traditional team merch.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-black p-1.5">
                <img
                  src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg"
                  alt="MLS"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop the full Street Fighter x MLS collection
                </h3>
              </div>
            </div>
            <a
              href={shopCollection}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">What Stands Out</h2>
          <p>
            The clearest pieces are the ones built around individual players:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Antoine Griezmann Player Tee (Orlando City)</strong> ($50) — One of the cleanest designs in the drop. Heavyweight cotton with a stylized Griezmann graphic.
            </li>
            <li>
              <strong>Son Heung-min Player Tee (LAFC)</strong> ($50) — Same treatment for Son. Strong contrast and a design that works even if you do not follow LAFC.
            </li>
            <li>
              <strong>Robert Lewandowski Player Tee (Chicago Fire)</strong> ($50) — Lewandowski gets the Street Fighter treatment as well.
            </li>
            <li>
              <strong>All Fighters / Character designs</strong> ($50–$108) — Club-wide versions for Nashville SC, Charlotte FC, San Diego FC, Seattle Sounders and others. These lean harder into the Street Fighter aesthetic.
            </li>
          </ul>

          <p>
            Most core tees sit around $45–$50. Hoodies push higher, closer to $100–$110. The fabric is the usual Peace Collective heavyweight cotton that holds up better than standard licensed merch.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-black p-1.5">
                <img
                  src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg"
                  alt="MLS"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop Griezmann, Son, Lewandowski and more
                </h3>
              </div>
            </div>
            <a
              href={shopCollection}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Is Any of It Worth It?</h2>
          <p>
            Crossover collections can feel forced. This one does not. Street Fighter has always had a strong aesthetic that translates well to clothing, and Peace Collective already knows how to make MLS gear that people actually wear outside the stadium. Combining the two is a logical step rather than a random collaboration.
          </p>
          <p>
            It also arrives at the right time. MLS has more high-profile European talent than ever — Griezmann, Lewandowski, Son, Müller and others. Putting those players into a gaming-inspired streetwear format gives fans a different way to represent their club without defaulting to a replica jersey.
          </p>
          <p>
            A portion of proceeds from Peace Collective’s MLS work continues to support mental health research, which is consistent with how the brand has operated across its licensed collections.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Where to Buy</h2>
          <p>
            The collection is available on the MLS Store, Peace Collective’s site, and through select retail partners including Dick’s Sporting Goods. Inventory moves quickly on the player-specific designs, especially the Griezmann and Son versions.
          </p>

          <p className="font-semibold">
            From picking your fighter to repping your club. Grab the size before it disappears.
          </p>
        </section>

        <div className="mt-12 mb-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-64 bg-gray-50">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg text-[#020617] leading-snug">
                    {product.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-xl font-bold text-[#020617]">{product.price}</p>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full transition w-full text-center"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: October 29, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}