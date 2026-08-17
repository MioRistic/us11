'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MlsArchiveCollection2026() {
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
    '2026 MLS Archive Collection: Ranking the Retro Kits — From Grimace Purple to Mountain Power';

  // Generalni link za hero baner
  const heroMlsStoreLink = 'https://mlsstore.i8h2.net/NGEMn2';

  const KitShopBanners = ({ clubName, fanaticsHref, mlsHref }) => (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-6">
        <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
            <img
              src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
              alt="Fanatics"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
              Shop {clubName} Archive kit at Fanatics
            </h3>
          </div>
        </div>
        <a
          href={fanaticsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
        >
          Shop now
        </a>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-6 mb-10">
        <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-black p-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
              alt="MLS Store"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
              Shop {clubName} Archive kit at MLS Store
            </h3>
          </div>
        </div>
        <a
          href={mlsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
        >
          Shop now
        </a>
      </div>
    </>
  );

  const kits = [
    {
      shortName: 'Austin FC',
      name: 'Austin FC — The Violet Crown',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/ju0ttcobcdloiwylc3ih.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/', // TODO: Austin Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/enjYvO/', // TODO: Austin MLS Store
      text: (
        <>
          <p>
            Austin is a young club. They don’t have deep roots for a true throwback, so they simply
            invented one. The result is a full purple kit that breaks completely from their usual
            green and black.
          </p>
          <p>
            The color immediately recalls Fiorentina, the Byzantine flag, or even a soft nod to
            Orlando. In fact, this shirt looks so much like an older Fiorentina jersey that if you
            wore it to a match in Florence, local fans would probably stop you and ask which team
            you support.
          </p>
          <p>
            It’s bold, different, and already generating strong reactions. For a club that usually
            stays in green, this is a genuine statement piece — even if it drifts into Grimace
            territory when worn as a full kit.
          </p>
        </>
      ),
    },
    {
      shortName: 'CF Montréal',
      name: 'CF Montréal — 1993 Nostalgia',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/ha4fqtacez5ebdcs0dno.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/VOd7xR', // TODO: Montréal Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/oNJYeO/', // TODO: Montréal MLS Store
      text: (
        <>
          <p>
            Montréal goes pure nostalgia. White base with light blue and black details, inspired by
            the 1993 Montréal Impact kit from their first professional season.
          </p>
          <p>
            Clean, classic, and perfectly timed. With Alexis Sánchez now in the building, this
            jersey becomes an easy must-have for supporters. It’s one of the strongest pure
            heritage looks in the entire collection and sits at the top of my personal ranking.
          </p>
        </>
      ),
    },
    {
      shortName: 'Chicago Fire',
      name: 'Chicago Fire — Classic Minimalism',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/qqi40kpftiiabw0tn4pn.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/QYE7KY', // TODO: Chicago Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/R0E7yN/', // TODO: Chicago MLS Store
      text: (
        <>
          <p>
            White shirt with blue and red details. The design leans into the early 2000s and
            specifically references the 2000 away kit that featured a bold “CHICAGO” wordmark.
          </p>
          <p>
            Chicago’s kits haven’t changed dramatically in style over the past two decades, so this
            one feels familiar rather than revolutionary. Still, the minimalism works. Clean lines,
            classic colors, and a timeless feel that always looks good.
          </p>
        </>
      ),
    },
    {
      shortName: 'Houston Dynamo',
      name: 'Houston Dynamo — Short and Sharp',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/weuxfww1juvw2xibnxst.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/7XKzyO', // TODO: Houston Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/L0E7PM/', // TODO: Houston MLS Store
      text: (
        <>
          <p>
            Another exercise in minimalism. White base with orange and black accents. Simple, clear,
            and effective. Nothing overcomplicated — just a clean third kit that does its job
            without trying too hard.
          </p>
        </>
      ),
    },
    {
      shortName: 'Orlando City',
      name: 'Orlando City — Bold Color Shift',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/boxzlez2yvgeqa9iypib.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/DWa7Qq', // TODO: Orlando Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/QYE7Oo/', // TODO: Orlando MLS Store
      text: (
        <>
          <p>
            Orlando reaches back to its pre-MLS era around 2010, when the club used a three-headed
            lion crest instead of today’s sun-style badge. The biggest talking point is the color
            change: moving away from purple toward more red tones.
          </p>
          <p>
            Reactions are split. Some fans love the bravery. Others miss the traditional purple.
            Either way, it’s a distinctive piece with real history behind it and worth owning if
            you follow the Lions.
          </p>
        </>
      ),
    },
    {
      shortName: 'Philadelphia Union',
      name: 'Philadelphia Union — Quiet Retro Details',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/ehsjsdzr0nsmb7oz8y8g.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/rEWYGB', // TODO: Philly Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/', // TODO: Philly MLS Store
      text: (
        <>
          <p>
            Philadelphia continues the minimalist theme with a cream-colored kit. The real character
            sits in the details — sleeve lines and a snake-wrapped Liberty Bell that give it a
            clear 1990s edge.
          </p>
          <p>
            It’s understated compared to some of the louder designs in the collection, but the
            small retro touches make it one of the more interesting quiet kits of the drop.
          </p>
        </>
      ),
    },
    {
      shortName: 'Real Salt Lake',
      name: 'Real Salt Lake — Mountain Aggression',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/aptibbwlk7mofypy7yyj.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/k4AYzv', // TODO: RSL Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/L0E7XM', // TODO: RSL MLS Store
      text: (
        <>
          <p>
            Black base with four shades of red. This is one of the strongest kits in the collection.
          </p>
          <p>
            RSL leaned into Utah’s mountain and ski culture while bringing back the original “Real
            Salt Lake” wordmark. The result feels aggressive and powerful. Some clubs use dark kits
            to intimidate; this one actually delivers that energy. Mountain tops done right — and a
            clear second place for me.
          </p>
        </>
      ),
    },
    {
      shortName: 'Vancouver Whitecaps',
      name: 'Vancouver Whitecaps — The Dogwood Standout',
      image:
        'https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/qz0cb2rnd46csb7pxvkt.jpg',
      fanaticsLink: 'https://fanatics.93n6tx.net/2R7ZjG/', // TODO: Vancouver Fanatics
      mlsStoreLink: 'https://mlsstore.i8h2.net/L0E7XM/', // TODO: Vancouver MLS Store
      text: (
        <>
          <p>
            Vancouver’s kit is instantly recognizable thanks to the Pacific dogwood, the official
            flower of British Columbia, placed prominently on the chest. It also nods to the old
            ‘86ers era.
          </p>
          <p>
            The design is elegant and distinctive without being loud. Multiple reviewers have
            already placed it near the top of the rankings for good reason. Clean, local, and smart
            — a strong third on my list.
          </p>
        </>
      ),
    },
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra
        cost to you.
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            2026 MLS Archive Collection: Ranking the Retro Kits — From Grimace Purple to Mountain
            Power
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-17">August 17, 2026</time>
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

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-0 aspect-[16/9]">
          <Image
            src="https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/rsyenouylj95wi8oeipx.jpg"
            alt="2026 MLS Archive Collection kits"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            MLS
          </div>
        </figure>
      </div>

      {/* FULL-BLEED MLS BANER ispod hero */}
      <div className="w-full bg-white border-y border-zinc-100 py-4 md:py-6">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <a
            href={heroMlsStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 w-full"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop Archive Collection
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">Official MLS Store</p>
            </div>
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0 p-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                alt="MLS Store"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-0 pb-12">
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-8">
          <p>
            The third wave of the Adidas x MLS Archive Collection is here, and eight clubs just
            dropped their retro-inspired third kits. Some lean hard into nostalgia. Others invent a
            past they never had. Here’s a clear look at every kit and which ones are actually worth
            buying.
          </p>

          {kits.map((kit) => (
            <div key={kit.name}>
              <h2 className="text-3xl font-bold mt-12 mb-4">{kit.name}</h2>

              <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
                <Image src={kit.image} alt={kit.name} fill className="object-cover" />
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                  MLS
                </div>
              </figure>

              {kit.text}

              <KitShopBanners
                clubName={kit.shortName}
                fanaticsHref={kit.fanaticsLink}
                mlsHref={kit.mlsStoreLink}
              />
            </div>
          ))}

          <h2 className="text-3xl font-bold mt-12 mb-4">Mio’s Top 3</h2>
          <ol className="list-decimal pl-6 space-y-3 text-lg">
            <li>
              <strong>CF Montréal</strong> — Pure nostalgia executed cleanly, and the Sánchez
              factor makes it the must-buy of the collection.
            </li>
            <li>
              <strong>Real Salt Lake</strong> — Aggressive, powerful, and the best use of color in
              the drop. Mountain energy done properly.
            </li>
            <li>
              <strong>Vancouver Whitecaps</strong> — Elegant, distinctive, and tied to real local
              identity through the Pacific dogwood.
            </li>
          </ol>

          <p className="mt-8">
            The 2026 Archive Collection continues MLS and Adidas’ yearly dive into heritage. Some
            clubs rediscovered real history. Others invented it. Both approaches produced kits worth
            talking about — and a few that belong in every serious collector’s rotation.
          </p>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: August 17, 2026</p>
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