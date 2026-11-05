'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BestSellingMLSJerseys2026() {
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
    'The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1';

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
            The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-04">November 4, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-6 aspect-[16/9]">
          <Image
            src="https://www.mlsstore.com/content/ws/all/55bfdb35-a7c7-406b-9192-649a14ae0501__2400X1350.jpg"
            alt="Lionel Messi Inter Miami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            MLS
          </div>
        </figure>

        {/* MAIN SHOP BANNERS – right under feature image */}
        <div suppressHydrationWarning>
          {mounted && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <a
                href="https://mlsstore.i8h2.net/6k6REQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#020617]">Shop MLS Jerseys at MLS Store</h3>
                </div>
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" />
                </div>
              </a>
              <a
                href="https://fanatics.93n6tx.net/m4Kkoa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#020617]">Shop MLS Jerseys at Fanatics</h3>
                </div>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" />
                </div>
              </a>
            </div>
          )}
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p className="text-xl">
            MLS just released its official ranking of the best-selling player jerseys of 2026. The list covers sales on MLSstore.com from January 1 to October 30, and it is dominated by the league’s biggest international names — with one teenage American breaking through.
          </p>

          <p>
            Messi finished first for the fourth straight year. Son Heung-Min and Thomas Müller rounded out the podium. Summer arrivals Robert Lewandowski and Antoine Griezmann both cracked the top five despite joining mid-season.
          </p>

          <p>
            Here’s the full ranking from 10 to 1, with the two best places to buy each jersey right now.
          </p>

          {/* 10. DE PAUL */}
          <h3 className="text-2xl font-bold mt-10 mb-4">10. Rodrigo De Paul – Inter Miami CF</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AaN-_BAtdqf2AN4pW0LnMvNatS08KRv76HdnFuGvAFMQq8MRP3vV72ij&s=10"
              alt="Rodrigo De Paul Inter Miami"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> Miami fans who already own a Messi shirt
          </p>
          <p>
            De Paul has become one of the more consistent performers on a star-heavy Inter Miami squad. His jersey landing in the top 10 shows how much demand still exists for the entire Miami roster, not just Messi.
          </p>
          <p>
            <strong>Why buy it?</strong> A solid secondary Miami option that still feels current. Perfect if you want another pink kit without defaulting to Messi again.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a
                  href="https://mlsstore.i8h2.net/m4KkG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617]">Shop De Paul at MLS Store</h3>
                  </div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" />
                  </div>
                </a>
                <a
                  href="https://fanatics.93n6tx.net/ZVGvzQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617]">Shop De Paul at Fanatics</h3>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" />
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* 9. MUKHTAR */}
          <h3 className="text-2xl font-bold mt-12 mb-4">9. Hany Mukhtar – Nashville SC</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHlHXlt2_oPkHfu5IfCyLFl96eViSYFmlKbnmf4nUHfTqpH1YHSWCuCY&s=10"
              alt="Hany Mukhtar Nashville SC"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> Nashville fans and Supporters’ Shield collectors
          </p>
          <p>
            Mukhtar has been the face of Nashville for years. His ranking reflects both his on-field consistency and the club’s growing national profile after winning the Supporters’ Shield.
          </p>
          <p>
            <strong>Why buy it?</strong> One of the cleaner, more understated options in the top 10. A strong pick if you want something that isn’t from Miami or LA.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/jR7jyZ" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Mukhtar at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/VOkj2M" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Mukhtar at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 8. SUAREZ */}
          <h3 className="text-2xl font-bold mt-12 mb-4">8. Luis Suárez – Inter Miami CF</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2269859978/crop/MM5DIMZQGQ5DENBSGE5G433XMU5DAORSGI2A====/GettyImages-2269859978.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Luis Suárez Inter Miami"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> Fans who want a classic striker name on the back
          </p>
          <p>
            Even at this stage of his career, Suárez still sells. Pairing him with Messi continues to drive interest in the Inter Miami kit.
          </p>
          <p>
            <strong>Why buy it?</strong> The classic supporting-cast purchase. Still carries real weight for anyone who grew up watching him in Europe.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/GbyYV2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Suárez at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/0G6BRE" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Suárez at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 7. BOUANGA */}
          <h3 className="text-2xl font-bold mt-12 mb-4">7. Denis Bouanga – LAFC</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2219247373/crop/MM5DGMRZGY5DCOBVGQ5G433XMU5DCOBXHI4DM===/GettyImages-2219247373.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Denis Bouanga LAFC"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> LAFC fans who prefer someone other than Son
          </p>
          <p>
            Bouanga has been one of the most reliable goal scorers in MLS for multiple seasons. His ranking reflects sustained production rather than a one-off surge.
          </p>
          <p>
            <strong>Why buy it?</strong> The clear alternative to Son if you want an LAFC shirt. Consistent scorer with real longevity in the league.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/n4KeEM" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Bouanga at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/bkBg5b" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Bouanga at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 6. SULLIVAN */}
          <h3 className="text-2xl font-bold mt-12 mb-4">6. Cavan Sullivan – Philadelphia Union</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2212433648/crop/MM5DEOJWGA5DCNRWGU5G433XMU5DCOJZHI2DI===/GettyImages-2212433648.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Cavan Sullivan Philadelphia Union"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> Getting in early on a future USMNT regular
          </p>
          <p>
            The only American in the top 10, and the only teenager. Sullivan’s breakout season for both Philadelphia and the national team pushed his jersey into the conversation. At 17, he’s already outselling several established internationals.
          </p>
          <p>
            <strong>Why buy it?</strong> The smartest long-term buy on the list. If he continues on this trajectory, this jersey will look very good in a few years.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/DW6Mnb" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Sullivan at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/3kKMYk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Sullivan at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 5. GRIEZMANN */}
          <h3 className="text-2xl font-bold mt-12 mb-4">5. Antoine Griezmann – Orlando City SC</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg"
              alt="Antoine Griezmann Orlando City"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> Immediate impact signings
          </p>
          <p>
            Griezmann arrived mid-season and still finished fifth overall. That kind of commercial impact is rare. Orlando fans bought into the signing quickly.
          </p>
          <p>
            <strong>Why buy it?</strong> One of the freshest high-profile options in the league right now. A World Cup winner on the back of a purple kit.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/5kdBY1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Griezmann at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/MKqYg2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Griezmann at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 4. LEWANDOWSKI */}
          <h3 className="text-2xl font-bold mt-12 mb-4">4. Robert Lewandowski – Chicago Fire FC</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2294419158/crop/MM5DINZZGU5DENRZG45G433XMU5DAORSGUYA====/GettyImages-2294419158.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Robert Lewandowski Chicago Fire"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> The most impressive relative ranking on the list
          </p>
          <p>
            Lewandowski joined in June and still finished fourth for the full season. Even more notably, his jersey has been the best-selling in the entire league since he arrived.
          </p>
          <p>
            <strong>Why buy it?</strong> One of the biggest names to ever play in MLS, and the demand proves it. Strong commercial performance despite the late arrival.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-robert-lewandowski-adidas-red-2026-forever-red-on-field-authentic-jersey/t-25238953+p-916637833021024+z-9-1276126776?_ref=p-DLP:m-GRID:i-r0c0:po-0&irclickid=RdkVTNUZjxyZTLmzCez1LwnGUkryWhxw-XhmyE0&irgwc=1&afsrc=1&_s=afl_impact&utm_source=Impact&utm_medium=affiliates&SSAID=6070730" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Lewandowski at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://www.mlsstore.com/en/chicago-fire/mens-chicago-fire-robert-lewandowski-adidas-red-2026-forever-red-on-field-authentic-jersey/t-25238953+p-916637833021024+z-9-1276126776?_ref=p-DLP:m-GRID:i-r0c0:po-0&irclickid=RdkVTNUZjxyZTLmzCez1LwnGUkryWh2c-XhmyE0&irgwc=1&afsrc=1&_s=afl_impact&utm_source=Impact&utm_medium=affiliates&SSAID=6070730" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Lewandowski at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 3. MULLER */}
          <h3 className="text-2xl font-bold mt-12 mb-4">3. Thomas Müller – Vancouver Whitecaps FC</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81WvSYsXccA8R2nCLD4zK5gvW4uWTiKRchrCh1Z9paflcxkyrmv7IIlo6&s=10"
              alt="Thomas Müller Vancouver Whitecaps"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> German fans and Vancouver supporters
          </p>
          <p>
            Müller has been a steady presence in Vancouver and his jersey continues to sell well even without the same level of individual hype as some of the newer arrivals.
          </p>
          <p>
            <strong>Why buy it?</strong> A World Cup winner on a Canadian club. Clean option if you want something outside of Miami or LA.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/6k6Rom" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Müller at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/3kKqqX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Müller at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 2. SON */}
          <h3 className="text-2xl font-bold mt-12 mb-4">2. Son Heung-Min – LAFC</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2302005948/crop/MM5DIOJWGQ5DENZZGI5G433XMU5DAORSGU4Q====/GettyImages-2302005948.jpg?quality=60&auto=webp&format=pjpg&width=1080"
              alt="Son Heung-Min LAFC"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> The best non-Messi option on the list
          </p>
          <p>
            Son’s move to LAFC has been one of the cleaner success stories of the past two seasons, and the jersey sales reflect that. He sits second only to Messi and has established himself as the clear commercial face of LAFC.
          </p>
          <p>
            <strong>Why buy it?</strong> The strongest high-profile alternative to Messi. If you want a current star jersey that isn’t pink, this is the one.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/R0rDmv" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Son at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/xJKjqR" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Son at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          {/* 1. MESSI */}
          <h3 className="text-2xl font-bold mt-12 mb-4">1. Lionel Messi – Inter Miami CF</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2300690760/crop/MM5DEOJRGI5DCNRTHA5G433XMU5DCMJ2GU2A====/GettyImages-2300690760.jpg?quality=60&auto=webp&format=pjpg&width=1080"
              alt="Lionel Messi Inter Miami"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Getty Images
            </div>
          </figure>
          <p>
            <strong>Best for:</strong> Anyone who wants the safest commercial bet in MLS
          </p>
          <p>
            Messi finished first for the fourth consecutive year. No one else is close. His jersey remains the default purchase for a large portion of MLS fans, and the gap between him and everyone else continues to be significant.
          </p>
          <p>
            <strong>Why buy it?</strong> As long as he’s playing, this ranking is unlikely to change. The most reliable jersey to own in the league right now.
          </p>

          <div suppressHydrationWarning>
            {mounted && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <a href="https://mlsstore.i8h2.net/dyWqn2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Messi at MLS Store</h3></div>
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center"><img src="https://www.mlsstore.com/content/content/www.mlsstore.com/www.mlsstore.com.svg" alt="MLS Store" className="w-full h-full object-contain" /></div>
                </a>
                <a href="https://fanatics.93n6tx.net/DW6ZAb" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all">
                  <div><h3 className="text-[17px] font-semibold text-[#020617]">Shop Messi at Fanatics</h3></div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"><img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="Fanatics" className="w-full h-full object-contain" /></div>
                </a>
              </div>
            )}
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Ranking</h2>

          <table className="w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Player</th>
                <th className="p-3 text-left">Club</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3">1</td><td className="p-3">Lionel Messi</td><td className="p-3">Inter Miami CF</td></tr>
              <tr><td className="p-3">2</td><td className="p-3">Son Heung-Min</td><td className="p-3">LAFC</td></tr>
              <tr><td className="p-3">3</td><td className="p-3">Thomas Müller</td><td className="p-3">Vancouver Whitecaps</td></tr>
              <tr><td className="p-3">4</td><td className="p-3">Robert Lewandowski</td><td className="p-3">Chicago Fire</td></tr>
              <tr><td className="p-3">5</td><td className="p-3">Antoine Griezmann</td><td className="p-3">Orlando City</td></tr>
              <tr><td className="p-3">6</td><td className="p-3">Cavan Sullivan</td><td className="p-3">Philadelphia Union</td></tr>
              <tr><td className="p-3">7</td><td className="p-3">Denis Bouanga</td><td className="p-3">LAFC</td></tr>
              <tr><td className="p-3">8</td><td className="p-3">Luis Suárez</td><td className="p-3">Inter Miami CF</td></tr>
              <tr><td className="p-3">9</td><td className="p-3">Hany Mukhtar</td><td className="p-3">Nashville SC</td></tr>
              <tr><td className="p-3">10</td><td className="p-3">Rodrigo De Paul</td><td className="p-3">Inter Miami CF</td></tr>
            </tbody>
          </table>

          <h2 className="text-3xl font-bold mt-10 mb-4">Which one should you buy?</h2>
          <p>
            <strong>Safest bet:</strong> Messi
          </p>
          <p>
            <strong>Best non-Messi option:</strong> Son Heung-Min
          </p>
          <p>
            <strong>Most interesting long-term:</strong> Cavan Sullivan
          </p>
          <p>
            <strong>Strongest new arrivals:</strong> Lewandowski and Griezmann
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: November 4, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}
