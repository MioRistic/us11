'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSThirdKitBlog() {
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

  const articleTitle = 'MLS Third Kit 2025: The Retro Jerseys You Can’t Miss';

  // Banner without price and without button – whole card is the link
  const ShopBanner = ({ title, href }) => (
    <div suppressHydrationWarning>
      {mounted && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 my-10 not-prose hover:shadow-md transition"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                alt="MLS Store"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
              {title}
            </h3>
          </div>
        </a>
      )}
    </div>
  );

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
            MLS Third Kit 2025: The Retro Jerseys You Can’t Miss
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-07-02">July 2, 2025</time>
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

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://www.mlsstore.com/content/ws/all/0c171420-bd12-42f9-9806-1480b7ee4367__548X893.jpg?w=548"
            alt="MLS Retro Third Kits 2025"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            © MLS Official Site
          </div>
        </figure>

        {/* STICKY DUAL BUY BANNERS */}
        <div suppressHydrationWarning>
          {mounted && (
            <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://mlsstore.i8h2.net/QjLjAP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop at MLS Store
                    </h3>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                      alt="MLS Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </a>

                <a
                  href="https://mlsstore.i8h2.net/bOzLgv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop Inter Miami Third
                    </h3>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                      alt="MLS Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p className="text-xl">
            The 2025 MLS third kits are some of the best retro drops the league has released in years.
          </p>
          <p>
            Inspired by the 80s, 90s, and even the pre-MLS era, these alternate jerseys are built for collectors and street style — not just match day.
          </p>
          <p>
            Here are the third kits worth buying this season.
          </p>

          {/* 1. SEATTLE */}
          <h3 className="text-2xl font-bold mt-10 mb-4">1. Seattle Sounders 2025 Retro Sky Blue Third Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-third-authentic-jersey_ss5_p-203139646+pv-1+u-fstyerasqku4yi2jcxvg+v-xk93ztridacqnopdg5om.jpg?_hv=2&w=900"
              alt="Seattle Sounders 2025 Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Classic Pacific Northwest identity
          </p>
          <p>
            Seattle Sounders’ 2025 third kit pays homage to their roots even before MLS was founded. The iconic sky-blue design and nod to the early dolphin crest bring back the spirit of those days.
          </p>
          <p>
            <strong>Why buy it?</strong> Strong heritage piece with real collector value and everyday wearability.
          </p>
          <ShopBanner title="Shop Seattle Sounders kits at MLS Store" href="https://mlsstore.i8h2.net/QjLjAP" />

          {/* 2. NEW ENGLAND */}
          <h3 className="text-2xl font-bold mt-12 mb-4">2. New England Revolution 2025 Retro Third Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/new-england-revolution/mens-adidas-red-new-england-revolution-2025-third-authentic-jersey_ss5_p-203139644+pv-1+u-e0efdfcwggeomky0fy2h+v-pfscys1rvxkqgq80hril.jpg?_hv=2&w=900"
              alt="New England Revolution 2025 Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Bold 90s nostalgia
          </p>
          <p>
            Bold red, white, and navy blocks give this kit a strong 90s vibe. A nostalgic throwback to MLS’s early years and a true collector’s piece.
          </p>
          <p>
            <strong>Why buy it?</strong> Loud, fun, and pure early-MLS energy that still works on the street.
          </p>
          <ShopBanner title="Shop New England Revolution kits at MLS Store" href="https://mlsstore.i8h2.net/kO35AL" />

          {/* 3. INTER MIAMI */}
          <h3 className="text-2xl font-bold mt-12 mb-4">3. Inter Miami 2025 Sunset Edition Third Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-replica-custom-jersey_ss5_p-203140647+pv-1+u-byogy3wwcw9r7olgegc7+v-41aqtlo7gkvqm5rjhdof.jpg?_hv=2&w=900"
              alt="Inter Miami 2025 Sunset Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Lifestyle and city identity
          </p>
          <p>
            Inspired by Miami sunsets, the light blue and pink details capture the city’s unique identity. A perfect fusion of lifestyle, culture, and football.
          </p>
          <p>
            <strong>Why buy it?</strong> One of the most wearable third kits in the league — easy to style off the pitch.
          </p>
          <ShopBanner title="Shop Inter Miami kits at MLS Store" href="https://mlsstore.i8h2.net/bOzLgv" />

          {/* 4. SAN JOSE */}
          <h3 className="text-2xl font-bold mt-12 mb-4">4. San Jose Clash 2025 Latin Inspired Third Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/san-jose-earthquakes/mens-adidas-white-san-jose-earthquakes-2025-third-authentic-jersey_ss5_p-203139645+pv-1+u-e6l5ijrkuxudyjkq5ghz+v-nxr1anhzoynyyubjfdxk.jpg?_hv=2&w=900"
              alt="San Jose Earthquakes 2025 Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Bold cultural design
          </p>
          <p>
            With shades of green and the bold “Clash” script, this kit draws inspiration from Mexican football culture. A standout design for Latino fans and lovers of exotic football style.
          </p>
          <p>
            <strong>Why buy it?</strong> Unique look that stands out from standard MLS third kits.
          </p>
          <ShopBanner title="Shop San Jose Earthquakes kits at MLS Store" href="https://mlsstore.i8h2.net/ra3V1v" />

          {/* 5. COLUMBUS */}
          <h3 className="text-2xl font-bold mt-12 mb-4">5. Columbus Crew 2025 Legendary Crest Third Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/columbus-crew/mens-adidas-white-columbus-crew-2025-third-authentic-jersey_ss5_p-203139638+pv-1+u-8ldxnzlfcs52duk8fctn+v-33vuqww3ux9kbq5j1mko.jpg?_hv=2&w=900"
              alt="Columbus Crew 2025 Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Club heritage
          </p>
          <p>
            The legendary workers crest returns. Removed in 2015 but never forgotten, this design reconnects Crew fans with the heart of their history.
          </p>
          <p>
            <strong>Why buy it?</strong> Pure nostalgia for longtime supporters and a clean look for collectors.
          </p>
          <ShopBanner title="Shop Columbus Crew kits at MLS Store" href="https://mlsstore.i8h2.net/vP3X9A" />

          {/* 6. COLORADO */}
          <h3 className="text-2xl font-bold mt-12 mb-4">6. Colorado Rapids Third Kit – Back to the Mountains</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-third-authentic-jersey_ss5_p-203139637+pv-1+u-ciu3szl9ebbt3bmtiaua+v-s1zrohs5ureczjmmzqvg.jpg?_hv=2&w=900"
              alt="Colorado Rapids 2025 Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Old-school mountain identity
          </p>
          <p>
            Colorado Rapids return to their roots with a green jersey featuring a retro mountain crest in the center. An authentic old-school look that stands out in the collection.
          </p>
          <p>
            <strong>Why buy it?</strong> Distinctive design that feels true to the club’s history.
          </p>
          <ShopBanner title="Shop Colorado Rapids kits at MLS Store" href="https://mlsstore.i8h2.net/Z612zR" />

          {/* 7. CHARLOTTE */}
          <h3 className="text-2xl font-bold mt-12 mb-4">7. Charlotte FC Third Kit – Teal and Green Freshness</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/charlotte-fc/mens-adidas-yellow-charlotte-fc-2025-third-authentic-jersey_ss5_p-203139636+pv-1+u-lp2ttecwfge7a6ipejpp+v-toopx2gsvhauskwld6dr.jpg?_hv=2&w=900"
              alt="Charlotte FC 2025 Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Modern club energy
          </p>
          <p>
            As one of MLS’s newer clubs, Charlotte FC is already making a mark. Their third kit with the crown emblem is bold, refreshing, and collector-friendly.
          </p>
          <p>
            <strong>Why buy it?</strong> Fresh look from a rising club — great for fans who want something current.
          </p>
          <ShopBanner title="Shop Charlotte FC kits at MLS Store" href="https://mlsstore.i8h2.net/Wyabz3" />

          {/* 8. DC UNITED */}
          <h3 className="text-2xl font-bold mt-12 mb-4">8. D.C. United Third Kit – Champions’ Heritage</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/dc-united/mens-adidas-white-dc-united-2025-third-authentic-jersey_ss5_p-203139639+pv-1+u-uka8wuszmrmvtjkriqv6+v-upo2txntcdbbugk4xu4y.jpg?_hv=2&w=900"
              alt="D.C. United 2025 Third Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Championship DNA
          </p>
          <p>
            D.C. United brings back a design that echoes their championship-winning DNA. For longtime supporters, this jersey is a tribute to the club’s historic legacy.
          </p>
          <p>
            <strong>Why buy it?</strong> A meaningful piece for fans of one of MLS’s original powerhouses.
          </p>
          <ShopBanner title="Shop D.C. United kits at MLS Store" href="https://mlsstore.i8h2.net/2aqOeD" />

          {/* BONUS LAFC */}
          <h3 className="text-2xl font-bold mt-12 mb-4">Bonus: LAFC x NTS Radio Fashion Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://images.footballfanatics.com/lafc/mens-adidas-gray-lafc-x-nts-radio-fashion-jersey_ss5_p-201937809+pv-1+u-aboi9cdw3lw22qdcd9re+v-yevcqwmod8dmijoimjux.jpg?_hv=2&w=900"
              alt="LAFC x NTS Radio Fashion Jersey"
              fill
              className="object-cover"
            />
          </figure>
          <p>
            <strong>Best for:</strong> Streetwear crossover
          </p>
          <p>
            Not an official third kit, but a fashion-forward collaboration that blends football with streetwear. Minimalist gray and subtle detailing make it easy to wear off the pitch.
          </p>
          <p>
            <strong>Why buy it?</strong> Perfect if you want something that works both on the terraces and in everyday outfits.
          </p>
          <ShopBanner title="Shop LAFC x NTS kits at MLS Store" href="https://mlsstore.i8h2.net/3Jx2av" />

        </section>

        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: July 2, 2025</span>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}