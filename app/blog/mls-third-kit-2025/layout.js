'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSThirdKitBlog() {
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
    'MLS Third Kit 2025: The Retro Jerseys You Can’t Miss';

  const products = [
    {
      title: "Men's Seattle Sounders 2025 Retro Sky Blue Third Jersey",
      price: '$159.99',
      imageUrl:
        'https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-blue-seattle-sounders-fc-2025-third-authentic-jersey_ss5_p-203139646+pv-1+u-fstyerasqku4yi2jcxvg+v-xk93ztridacqnopdg5om.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/QjLjAP',
      text: `Seattle Sounders’ 2025 third kit pays homage to their roots even before MLS was founded. The iconic sky-blue design and nod to the early dolphin crest bring back the spirit of those days.`,
    },
    {
      title: "Men's New England Revolution 2025 Retro Third Jersey",
      price: '$159.99',
      imageUrl:
        'https://images.footballfanatics.com/new-england-revolution/mens-adidas-red-new-england-revolution-2025-third-authentic-jersey_ss5_p-203139644+pv-1+u-e0efdfcwggeomky0fy2h+v-pfscys1rvxkqgq80hril.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/kO35AL',
      text: `Bold red, white, and navy blocks give this kit a strong 90s vibe. A nostalgic throwback to MLS’s early years and a true collector’s piece.`,
    },
    {
      title: "Men's Inter Miami 2025 Sunset Edition Third Jersey",
      price: '$134.99',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-originals-blue-inter-miami-cf-2025-third-replica-custom-jersey_ss5_p-203140647+pv-1+u-byogy3wwcw9r7olgegc7+v-41aqtlo7gkvqm5rjhdof.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/bOzLgv',
      text: `Inspired by Miami sunsets, the light blue and pink details capture the city’s unique identity. A perfect fusion of lifestyle, culture, and football.`,
    },
    {
      title: 'San Jose Clash 2025 Latin Inspired Third Jersey',
      price: '$159.99',
      imageUrl:
        'https://images.footballfanatics.com/san-jose-earthquakes/mens-adidas-white-san-jose-earthquakes-2025-third-authentic-jersey_ss5_p-203139645+pv-1+u-e6l5ijrkuxudyjkq5ghz+v-nxr1anhzoynyyubjfdxk.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/ra3V1v',
      text: `With shades of green and the bold “Clash” script, this kit draws inspiration from Mexican football culture. A standout design for Latino fans and lovers of exotic football style.`,
    },
    {
      title: "Men's Columbus Crew 2025 Legendary Crest Third Jersey",
      price: '$159.99',
      imageUrl:
        'https://images.footballfanatics.com/columbus-crew/mens-adidas-white-columbus-crew-2025-third-authentic-jersey_ss5_p-203139638+pv-1+u-8ldxnzlfcs52duk8fctn+v-33vuqww3ux9kbq5j1mko.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/vP3X9A',
      text: `The legendary workers crest returns. Removed in 2015 but never forgotten, this design reconnects Crew fans with the heart of their history.`,
    },
    {
      title: 'Colorado Rapids Third Kit – Back to the Mountains',
      price: '$159.99',
      imageUrl:
        'https://images.footballfanatics.com/colorado-rapids/mens-adidas-green-colorado-rapids-2025-third-authentic-jersey_ss5_p-203139637+pv-1+u-ciu3szl9ebbt3bmtiaua+v-s1zrohs5ureczjmmzqvg.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/Z612zR',
      text: `Colorado Rapids return to their roots with a green jersey featuring a retro mountain crest in the center. It’s an authentic old-school look that makes this kit one of the most original in the entire collection.`,
    },
    {
      title: 'Charlotte FC Third Kit – Teal and Green Freshness',
      price: '$159.99',
      imageUrl:
        'https://images.footballfanatics.com/charlotte-fc/mens-adidas-yellow-charlotte-fc-2025-third-authentic-jersey_ss5_p-203139636+pv-1+u-lp2ttecwfge7a6ipejpp+v-toopx2gsvhauskwld6dr.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/Wyabz3',
      text: `As one of MLS’s newer clubs, Charlotte FC is already making a mark. Their teal-green third kit, featuring the crown emblem, is bold, refreshing, and destined to be a favorite among collectors.`,
    },
    {
      title: "D.C. United Third Kit – Champions’ Heritage",
      price: '$159.99',
      imageUrl:
        'https://images.footballfanatics.com/dc-united/mens-adidas-white-dc-united-2025-third-authentic-jersey_ss5_p-203139639+pv-1+u-uka8wuszmrmvtjkriqv6+v-upo2txntcdbbugk4xu4y.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/2aqOeD',
      text: `D.C. United brings back a design that echoes their championship-winning DNA. For longtime supporters, this jersey is a reminder of the glory years.`,
    },
  ];

  const ShopBanner = ({ href = 'https://mlsstore.i8h2.net/QjLjAP' }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
      <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
            alt="MLS Store"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
            Shop MLS third kits at MLS Store
          </h3>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
      >
        Shop now
      </a>
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

        {/* 1) NASLOV */}
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
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* 2) SLIKA */}
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

        {/* 3) STICKY AFFILIATE (kao World Cup jerseys) */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://mlsstore.i8h2.net/QjLjAP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop MLS third kits at MLS Store
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

        {/* 4) TEKST + BANERI */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6 pt-6">
          <p>
            The 2025 MLS season introduces a line of third kits that take fans back to the roots of soccer in North America — inspired by the 80s, 90s, and even the era before MLS officially began.
          </p>
          <p>
            These aren’t just alternate kits. They’re nostalgia pieces: bold colors, old crests, and designs built to wear on the street as much as in the stands.
          </p>

          <ShopBanner />

          {products.map((product, index) => (
            <div key={index} className="not-prose">
              <h2 className="text-2xl md:text-3xl font-bold text-[#020617] mb-3">
                {product.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {product.text}
              </p>

              <figure className="relative w-full rounded-2xl overflow-hidden shadow-md mb-4 aspect-[16/9] bg-gray-50">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-contain p-6"
                />
              </figure>

              <p className="text-xl font-bold text-[#020617] mb-3">{product.price}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full transition mb-8"
              >
                Shop now
              </a>

              {/* baner posle svakog 2. dresa – kao ranking page */}
              {(index + 1) % 2 === 0 && <ShopBanner href={product.link} />}
            </div>
          ))}

          <h2 className="text-2xl md:text-3xl font-bold text-[#020617]">
            Bonus Pick – LAFC x NTS Radio Fashion Jersey
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Not an official third kit, but a fashion-forward collaboration that blends football with streetwear. Minimalist gray, subtle detailing, and NTS Radio’s touch make this jersey perfect both on the terraces and the streets.
          </p>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md mb-4 aspect-[16/9] bg-gray-50 not-prose">
            <Image
              src="https://images.footballfanatics.com/lafc/mens-adidas-gray-lafc-x-nts-radio-fashion-jersey_ss5_p-201937809+pv-1+u-aboi9cdw3lw22qdcd9re+v-yevcqwmod8dmijoimjux.jpg?_hv=2&w=900"
              alt="LAFC x NTS Radio Fashion Jersey"
              fill
              className="object-contain p-6"
            />
          </figure>
          <p className="text-xl font-bold text-[#020617]">$109.99</p>
          <a
            href="https://mlsstore.i8h2.net/3Jx2av"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
          >
            Shop now
          </a>

          <ShopBanner href="https://mlsstore.i8h2.net/3Jx2av" />
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: July 2, 2025</p>
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