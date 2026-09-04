'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSxCityIsMine() {
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
    'Claim Your Club. Claim Your City. Inside the MLS x Paper Planes x Vs. Everybody Drop';

  const shopCollection = 'https://mlsstore.i8h2.net/4axV5r';

  const products = [
    // {
    //   title: 'Inter Miami CF City Is Mine Tee — Paper Planes x Vs. Everybody x MLS',
    //   price: 'From $45',
    //   imageUrl:
    //     'https://images.footballfanatics.com/inter-miami-cf/mens-inter-miami-cf-messi-adidas-pink-2025-the-vice-kit-replica-player-jersey_ss5_p-202840000+u-placeholder.jpg?_hv=2&w=800',
    //   link: 'https://www.mlsstore.com/en/inter-miami-cf',
    // },
    // {
    //   title: 'LAFC City Is Mine Hoodie — Claim Your City',
    //   price: 'From $80',
    //   imageUrl:
    //     'https://images.footballfanatics.com/lafc/mens-lafc-black-primary-logo-t-shirt_ss5_p-placeholder.jpg?_hv=2&w=800',
    //   link: 'https://www.mlsstore.com/en/lafc',
    // },
    // {
    //   title: 'New York City FC City Is Mine Work Jacket',
    //   price: '$198',
    //   imageUrl:
    //     'https://images.footballfanatics.com/new-york-city-fc/mens-new-york-city-fc-navy-primary-logo-t-shirt_ss5_p-placeholder.jpg?_hv=2&w=800',
    //   link: 'https://www.mlsstore.com/en/new-york-city-fc',
    // },
    // {
    //   title: 'Seattle Sounders FC City Is Mine Scarf & Tee Pack Look',
    //   price: 'From $40',
    //   imageUrl:
    //     'https://images.footballfanatics.com/seattle-sounders-fc/seattle-sounders-fc-rave-green-scarf_ss5_p-placeholder.jpg?_hv=2&w=800',
    //   link: 'https://www.mlsstore.com/en/seattle-sounders-fc',
    // },
    // {
    //   title: 'San Diego FC City Is Mine Hat — Claim Your Club',
    //   price: 'From $38',
    //   imageUrl:
    //     'https://images.footballfanatics.com/san-diego-fc/san-diego-fc-navy-adjustable-hat_ss5_p-placeholder.jpg?_hv=2&w=800',
    //   link: 'https://www.mlsstore.com/en/san-diego-fc',
    // },
    // {
    //   title: 'Atlanta United City Is Mine Hoodie — The City Is Mine',
    //   price: 'From $80',
    //   imageUrl:
    //     'https://images.footballfanatics.com/atlanta-united-fc/mens-atlanta-united-fc-red-primary-logo-t-shirt_ss5_p-placeholder.jpg?_hv=2&w=800',
    //   link: 'https://www.mlsstore.com/en/atlanta-united-fc',
    // },
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra cost to you.
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Claim Your Club. Claim Your City. Inside the MLS x Paper Planes x Vs. Everybody Drop
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-04">September 4, 2026</time>
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
            src="https://www.mlsstore.com/content/ws/all/2fd26dec-bf1d-4dfc-89b3-0d678534ceee__2400X1200.jpg?w=2400"
            alt="MLS City Is Mine collection — Claim Your Club, Claim Your City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: MLS Store / Paper Planes / Vs. Everybody
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
                Shop the City Is Mine collection at MLS Store
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

        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p>
            MLS just stopped selling only match-day merch. The new limited drop from{' '}
            <strong>Paper Planes x Vs. Everybody x MLS</strong> is built for the street as much as the stadium — and the line on every graphic is the whole point: <strong>Claim Your Club. Claim Your City.</strong>
          </p>

          <p>
            Officially titled <em>The City Is Mine</em>, the collection launched September 2, 2026 on MLSStore.com, Paperplane.shop and Vs. Everybody. It covers nine clubs, mixes tees, hoodies, work jackets, hats and scarves, and treats city identity like a fashion brief instead of a crest slapped on a blank.
          </p>

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
                  Shop City Is Mine at MLS Store
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

          <h2 className="text-3xl font-bold mt-10 mb-4">This Is Not the Old Claim Your Club Sweepstakes</h2>
          <p>
            In November 2025, MLS and Ticketmaster ran a short “Claim Your Club” giveaway for season tickets and a suite. That contest is over. The slogan is now living on apparel.
          </p>
          <p>
            Paper Planes built the drop around “Greatness Is a Process.” Vs. Everybody added the identity questions behind the campaign: where are you from, where are you now, where are you going. The clothes answer with three lines: Claim Your Club. Claim Your City. The City Is Mine.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Nine Clubs in the Drop</h2>
          <p>
            The first wave is tightly edited on purpose. You get Atlanta United, Charlotte FC, Inter Miami CF, LAFC, Nashville SC, New York City FC, Orlando City SC, San Diego FC and Seattle Sounders FC.
          </p>
          <p>
            Those markets already have loud supporter culture and a clear city look. That is why Miami, LA, New York and Seattle will probably move first. If your club is missing, there is no official second wave yet — shop what exists now.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Pieces Worth Buying</h2>
          <p>
            If you are building one rotation instead of collecting everything, start here:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Tee</strong> — cheapest way into the graphic. Wear it under a jacket or on its own.
            </li>
            <li>
              <strong>Hoodie</strong> — the everyday piece. This is the one most people will actually live in.
            </li>
            <li>
              <strong>Work jacket</strong> — the statement item. Early reactions put some jackets near $198. Premium, limited, easy to sell out in core sizes.
            </li>
            <li>
              <strong>Hat + scarf</strong> — lowest-risk gift and the most soccer-native combo for match day.
            </li>
          </ul>
          <p>
            Streetwear sizing is not adidas replica sizing. Expect a boxier cut. Check the chart before you default to your kit size.
          </p>

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
                  Claim your club at MLS Store
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

          <h2 className="text-3xl font-bold mt-10 mb-4">Why the Collection Works</h2>
          <p>
            Most league merch still looks like a souvenir. This drop looks like a city brand. That is the gap MLS has been trying to close since the World Cup came back to North America: club pride that works on a night out, not only in section 112.
          </p>
          <p>
            Buy official. The collection is on MLS Store, Paper Planes and Vs. Everybody. Limited collabs like this do not sit in size M for long.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Take</h2>
          <p>
            If you want MLS gear that reads as culture instead of leftover replica stock, this is the drop. The slogan is sharp. The club list is strong. The product mix is built to sell.
          </p>
          <p className="font-semibold">
            Claim your club. Claim your city. Then grab the piece before your size is gone.
          </p>

        </section>

        <div className="mt-12 mb-8">
          {/* <h2 className="text-3xl font-bold mb-6">Shop the Collection</h2> */}
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
                    {product.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
                    )}
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
            <p>Published: September 4, 2026</p>
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