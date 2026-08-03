'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function RiptideJerseyBlog() {
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
    'Inter Miami 2025 “Riptide” Jersey – The Wave You Don’t Want to Miss';

  const products = [
    {
      title:
        "Men's Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Authentic Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-authentic-player-jersey_ss5_p-203184855+pv-1+u-3tymtqbn2tkzdatahxr4+v-24co1ls9knmitkefhug5.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/WyKxZX',
    },
    {
      title:
        "Men's Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Replica Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462205+pv-1+u-b4isz5xg1t5ncoabky8p+v-dbxmdma814m7j0mkludq.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/nXb9qX',
    },
    {
      title:
        'Youth Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Replica Player Jersey',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462095+pv-1+u-ynteuvrrspb5ek9qkbrx+v-klfcxvmjcrzrekd0j9ue.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/dOZb2k',
    },
    {
      title:
        "Men's Inter Miami CF adidas Originals Blue 2025 Third Replica Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-replica-jersey_ss5_p-203139657+pv-1+u-el0qrzgfgtowyjwd6trh+v-bngtjiecepcg6q7fwnh0.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/YRorXj',
    },
    {
      title:
        "Women's Inter Miami CF Lionel Messi adidas Originals Blue 2025 Third Replica Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462083+pv-1+u-audr42go5kc5d3vmgnqz+v-sgsw3djrnyqmpcht73bd.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/7axWEQ',
    },
    {
      title:
        "Men's Inter Miami CF adidas Originals Blue 2025 Third Authentic Jersey with Patch",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-authentic-jersey-with-patch_ss5_p-203139641+pv-1+u-ufnvywa9xq32iwor4iee+v-rverllhwcbvch7khan2m.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/Dy1jYd',
    },
    {
      title:
        'Youth Inter Miami CF adidas Originals Blue 2025 Third Replica Jersey',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-originals-blue-inter-miami-cf-2025-third-replica-jersey_ss5_p-202462106+pv-1+u-ikkk4btsrjxmooztscbd+v-xnoazh0zcagnogfgp4vc.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/rabA93',
    },
    {
      title:
        "Women's Inter Miami CF adidas Originals Blue 2025 Third Replica Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-originals-blue-inter-miami-cf-2025-third-replica-jersey_ss5_p-202462090+pv-1+u-5t0zlrjad0iuhcpaaepg+v-bgzdayb34kmgqg7r78h9.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/APaqd7',
    },
    {
      title:
        "Men's Inter Miami CF adidas Originals Blue 2025 Third Authentic Custom Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-authentic-custom-jersey_ss5_p-203140618+pv-1+u-2ajqiciptrrxgro6wlyv+v-vacibjtxhniewzrdpfsh.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/19OaXm',
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
            Inter Miami 2025 “Riptide” Jersey – The Wave You Don’t Want to Miss
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-06-14">June 14, 2025</time>
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
            src="https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/cw1sc4jlftyqxpshxuk5.jpg"
            alt="Inter Miami 2025 Riptide Jersey"
            fill
            className="object-cover"
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
                  href="https://mlsstore.i8h2.net/LKrzJY"
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
                  href="https://mlsstore.i8h2.net/nXb9qX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop Messi Riptide
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

          <p className="text-xl font-semibold">
            Miami Blue. Messi. Riptide. The boldest MLS kit yet?
          </p>

          <p>
            If summer 2025 felt like it needed some extra heat, Inter Miami just delivered it. Meet the Riptide Third Kit — a fierce, ocean-inspired drop from adidas that blends energy, culture, and unstoppable momentum. This isn’t just a soccer jersey. It’s a wave of style.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What is the “Riptide” Kit All About?</h2>
          <p>
            Inspired by the power and unpredictability of ocean currents, the Inter Miami Riptide kit embodies everything the team stands for: fearless play, relentless drive, and bold Miami energy. Just like a riptide, this team doesn’t react — it reshapes the game.
          </p>
          <p>
            This third jersey isn’t subtle. It’s a striking Miami Blue base with pink and white accents, showing up strong both on the pitch and on the streets.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Details That Matter</h2>
          <ul>
            <li>Colorway: Miami Blue, with pink and white detailing</li>
            <li>Sponsor: Royal Caribbean featured front and center</li>
            <li>Design: Iconic two herons crest</li>
            <li>Sleeve Patch: “Freedom to Dream” on select items</li>
            <li>Full Riptide Collection includes: varsity jacket, Gazelle sneakers, tees, shorts</li>
          </ul>
          <p>
            Whether you’re pitchside or poolside, this kit screams Miami culture.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Be Part of Inter Miami’s Global Moment</h2>
          <p>
            In 2025, Inter Miami isn’t just competing in MLS — they’re making history as they gear up for the FIFA Club World Cup. This tournament is a defining moment, and the Riptide jersey is likely to be front and center as the team steps onto the global stage.
          </p>
          <p className="font-semibold">
            Buying the Riptide jersey isn’t just supporting your club — it’s joining a new identity.
          </p>
          <p>
            This could be the kit that the world remembers when they think of Inter Miami. And if you’re wearing it, you’re not just a fan — you’re part of that story.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Shop the Riptide Collection</h2>

          {/* PRODUCT GRID – no price, no button, whole card is link */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 not-prose">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition block"
              >
                <div className="relative w-full aspect-square bg-gray-50">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-base text-[#020617] leading-snug">
                    {product.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Where to Get the Riptide Kit</h2>
          <ul>
            <li>Inter Miami CF Official Store @ Chase Stadium</li>
            <li>Miami International Airport, Terminal D (Gates 27–28)</li>
            <li>Royal Caribbean cruises</li>
            <li>adidas flagship stores</li>
            <li>
              <a
                href="https://mlsstore.i8h2.net/LKrzJY"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                MLSstore.com
              </a>
            </li>
          </ul>
          <p className="font-semibold">
            Global release began June 14, 2025 — don’t sleep on this.
          </p>

        </section>

        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: June 14, 2025</span>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}