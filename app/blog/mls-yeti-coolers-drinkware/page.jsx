'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSxYETI() {
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
    'MLS x YETI 2026: Official Team Coolers & Ramblers That Actually Keep Ice for Days';

  const products = [
  {
    title: 'Inter Miami CF YETI 20oz. Rambler Tumbler with MagSlider Lid',
    price: '$50.00',
    imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/yeti-inter-miami-cf-20oz-rambler-tumbler-with-magslider-lid_ss5_p-203969479+pv-1+u-0cwl5rjm2czg5dtvgqt4+v-qvnvrvqngnf7xq5veaeu.jpg?_hv=2&w=1018',
    link: 'https://mlsstore.i8h2.net/xJRARk',
  },
  {
    title: 'LAFC YETI Roadie 15 Hard Cooler',
    price: '$250.00',
    imageUrl: 'https://images.footballfanatics.com/lafc/yeti-lafc-roadie-15-hard-cooler_ss5_p-203966904+pv-1+u-78t6bstdeoyqvcwtegdp+v-fbvci0jtsy3wqwfmru5g.jpg?_hv=2&w=1018',
    link: 'https://mlsstore.i8h2.net/oNBQBg',
  },
  {
    title: 'Charlotte FC YETI 16oz. Rambler Stackable Cup with MagSlider Lid',
    price: '$43.00',
    imageUrl: 'https://images.footballfanatics.com/charlotte-fc/yeti-charlotte-fc-16oz-rambler-stackable-cup-with-magslider-lid_ss5_p-203969464+pv-1+u-yltgjgko05dmaczq4mzz+v-79d0wgfwtms9thfoer3x.jpg?_hv=2&w=1018',
    link: 'https://mlsstore.i8h2.net/YV0W0O',
  },
  {
    title: 'Seattle Sounders FC YETI 16oz. Rambler Stackable Cup with MagSlider Lid',
    price: '$43.00',
    imageUrl: 'https://images.footballfanatics.com/seattle-sounders-fc/yeti-seattle-sounders-fc-16oz-rambler-stackable-cup-with-magslider-lid_ss5_p-203969455+pv-1+u-dtmz5clwykgc391we9z5+v-1xcdcn4hv5staadbueq8.jpg?_hv=2&w=1018',
    link: 'https://mlsstore.i8h2.net/k4NLAM',
  },
];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      {/* FULL-BLEED AFFILIATE NOTICE */}
      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra cost to you.
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS x YETI 2026: Official Team Coolers & Ramblers That Actually Keep Ice for Days
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-10">August 10, 2026</time>
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
            src="https://www.mlsstore.com/content/ws/all/b5a4ef4c-bacc-413d-bef4-44b8c4a6efe3__2400X900.gif"
            alt="MLS x YETI Official Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: MLS Store / YETI
          </div>
        </figure>

        {/* STICKY BUY BANNER */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://mlsstore.i8h2.net/4aq6Kn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop the full MLS x YETI collection
              </h3>
            </div>
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-1.5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                alt="MLS"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p>
            If you’re the type of fan who shows up to the tailgate with a half-melted bag of ice and warm drinks, it’s time to upgrade.
          </p>

          <p>
            YETI just dropped the official <strong>MLS collection</strong> — premium hard coolers and Rambler drinkware featuring the logos of almost every MLS club. This isn’t cheap licensed merch. It’s the same gear that outdoor professionals and serious sports fans actually buy and keep for years.
          </p>

          {/* Banner 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50 p-1.5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                  alt="MLS"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop MLS x YETI at MLS Store
                </h3>
              </div>
            </div>
            <a
              href="https://mlsstore.i8h2.net/4aq6Kn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Why YETI + MLS Actually Works</h2>
          <p>
            YETI built its reputation on one simple promise: <strong>ice that lasts</strong>. Their hard coolers (especially the Roadie and Tundra lines) are famous for keeping ice solid for days, not hours. Pair that with officially licensed MLS logos and you get something rare — gear that looks good and actually performs.
          </p>
          <p>
            Whether you’re heading to a match, hosting a watch party, or just want a daily tumbler that doesn’t sweat all over your desk, this collection covers it.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Best Sellers Right Now</h2>

          <h3 className="text-xl font-semibold mt-6">Drinkware (Best Entry Point)</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>16oz Rambler Stackable Cup</strong> – $43  
              Compact, stackable, MagSlider lid. Currently “Almost Gone” for most teams.
            </li>
            <li>
              <strong>20oz Rambler Tumbler</strong> – $50  
              The everyday hero. Great for coffee in the morning and cold drinks later. Charlotte FC version is currently the most popular.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Coolers (The Real Flex)</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Roadie 15 Hard Cooler</strong> – $250  
              Perfect size for small groups or shorter trips. Available for LAFC, Charlotte FC, Seattle Sounders, LA Galaxy, San Diego FC, Austin FC and more.
            </li>
            <li>
              <strong>Tundra 45 Hard Cooler</strong> – $375  
              The bigger option. Ideal for full matchday tailgates. Available for Atlanta United, Philadelphia Union, Portland Timbers, Orlando City, FC Cincinnati and several others.
            </li>
          </ul>

          {/* Banner 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50 p-1.5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                  alt="MLS"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Shop MLS x YETI at MLS Store
                </h3>
              </div>
            </div>
            <a
              href="https://mlsstore.i8h2.net/4aq6Kn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Quick Buying Guide</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 pr-4 font-semibold">Need</th>
                  <th className="text-left py-3 pr-4 font-semibold">Best Choice</th>
                  <th className="text-left py-3 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Daily drink</td>
                  <td className="py-3 pr-4">20oz Rambler Tumbler</td>
                  <td className="py-3 font-medium">$50</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Small group / casual</td>
                  <td className="py-3 pr-4">Roadie 15</td>
                  <td className="py-3 font-medium">$250</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Serious tailgate</td>
                  <td className="py-3 pr-4">Tundra 45</td>
                  <td className="py-3 font-medium">$375</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4">Budget entry</td>
                  <td className="py-3 pr-4">16oz Stackable Cup</td>
                  <td className="py-3 font-medium">$43</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Take</h2>
          <p>
            Most team merch is disposable. YETI is the opposite. You buy it once and it becomes part of every matchday, every road trip, and every backyard hang for years.
          </p>
          <p className="font-semibold">
            If you’re going to rep your club, you might as well do it with gear that actually works.
          </p>

        </section>

        {/* SHOP - PRODUCTS */}
        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-bold mb-6">Shop the Collection</h2>
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
                  <p className="text-xl font-bold text-[#020617] mt-2">{product.price}</p>
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

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: August 10, 2026</p>
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