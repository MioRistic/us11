'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function TopMLSJerseys2024() {
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

  const articleTitle = 'Top 10 MLS Jerseys of 2024: Style, Passion & a Bit of Magic';

  const jerseys = [
    {
      name: '1. Lionel Messi',
      team: 'Inter Miami CF',
      text: 'It wasn’t just about the pink. It was about what the pink represented. Legacy. Magic. The Messi Effect™.',
      title: "Men's Inter Miami CF Lionel Messi adidas Pink 2024 2getherness Authentic Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2024-2getherness-2024-2getherness-authentic-player-jersey_ss5_p-201189575+pv-1+u-9kfkaf3zfug6vvnjhtfv+v-pf8n5nvtxvzilgitissc.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/19ZLn6',
      shopTitle: 'Shop Messi Inter Miami kit at MLS Store',
    },
    {
      name: '2. Luis Suárez',
      team: 'Inter Miami CF',
      text: 'The return of El Pistolero. Suárez brought fire, flair, and that signature grit — his kit flew off shelves from day one.',
      title: "Men's Inter Miami CF Luis Suarez adidas Black 2025 The Fortitude Kit Replica Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-luis-suarez-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-202595534+pv-1+u-uzrf6bpveoidjzydgbjb+v-m7iia5jbaffsrzonyfzl.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/7a1qa5',
      shopTitle: 'Shop Suárez Inter Miami kit at MLS Store',
    },
    {
      name: '3. Denis Bouanga',
      team: 'LAFC',
      text: 'Pace. Power. Precision. Bouanga’s performances made him LAFC’s engine — and turned his jersey into pure gold.',
      title: "Men's LAFC Denis Bouanga adidas Black 2024 Primary Replica Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/lafc/mens-adidas-denis-bouanga-black-lafc-2024-primary-replica-player-jersey_ss5_p-202853329+pv-1+u-4tohvuj5sw60sqbqhgef+v-7grrq5ju4mtcpl3xqb2d.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/jeJ0e6',
      shopTitle: 'Shop Bouanga LAFC kit at MLS Store',
    },
    {
      name: '4. Luciano Acosta',
      team: 'FC Cincinnati',
      text: 'The heart of Cincinnati. Acosta’s magic on the ball made him unmissable — and fans rocked his jersey with pride.',
      title: "Men's FC Cincinnati Luciano Acosta adidas White 2024 The Canvas Kit Authentic Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/fc-cincinnati/mens-adidas-luciano-acosta-white-fc-cincinnati-2024-the-canvas-kit-authentic-player-jersey_ss5_p-201205504+pv-1+u-ybpx25vwfmpufdkjmash+v-nkc0aqflclualvjtc72y.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/BnRanW',
      shopTitle: 'Shop Acosta FC Cincinnati kit at MLS Store',
    },
    {
      name: '5. Cucho Hernández',
      team: 'Columbus Crew',
      text: 'Speed and style from Colombia to Columbus. Cucho was electric, and his kit captured that same energy.',
      title: null,
      imageUrl: null,
      link: null,
      shopTitle: null,
    },
    {
      name: '6. Olivier Giroud',
      team: 'LAFC',
      text: 'From Milan to LA, Giroud brought elegance and experience. A world-class striker with a jersey just as smooth.',
      title: "Men's LAFC Olivier Giroud adidas Black 2024 Primary Replica Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/lafc/mens-adidas-olivier-giroud-black-lafc-2024-primary-replica-player-jersey_ss5_p-201684692+pv-1+u-nc0zfynjukhnb4reitux+v-mzjxw8k4xwituvnvlxsj.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/nXWxNo',
      shopTitle: 'Shop Giroud LAFC kit at MLS Store',
    },
    {
      name: '7. Riqui Puig',
      team: 'LA Galaxy',
      text: 'Barça blood, West Coast vibe. Puig’s play was silky, and his jersey became streetwear gold in SoCal.',
      title: "Men's LA Galaxy Riqui Puig adidas White 2024 Angeleno Kit Authentic Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/la-galaxy/mens-adidas-riqui-puig-white-la-galaxy-2024-angeleno-kit-authentic-player-jersey_ss5_p-201285133+pv-1+u-cmpegvgxudfwkryajunw+v-uwkwutbjliclijbeznp9.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/jeJ016',
      shopTitle: 'Shop Puig LA Galaxy kit at MLS Store',
    },
    {
      name: '8. Hany Mukhtar',
      team: 'Nashville SC',
      text: 'The MVP spirit lived on. Mukhtar carried Nashville with flair, and his kit screamed Southern pride.',
      title: "Men's Nashville SC Hany Mukhtar adidas Yellow 2024 The 615 Kit Authentic Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/nashville-sc/mens-adidas-hany-mukhtar-yellow-nashville-sc-2024-the-615-kit-authentic-player-jersey_ss5_p-201205833+pv-1+u-o7x6joluzxxbob1bec2p+v-umwkigu1ark9xsqhi7zg.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/Xm2jL4',
      shopTitle: 'Shop Mukhtar Nashville kit at MLS Store',
    },
    {
      name: '9. Jordan Morris',
      team: 'Seattle Sounders FC',
      text: 'The Sounders’ steady force. Morris kept delivering — and Seattle fans kept showing love with his name on their backs.',
      title: "Men's Seattle Sounders FC Jordan Morris adidas Green 2024 The Anniversary Kit Authentic Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-jordan-morris-green-seattle-sounders-fc-2024-the-anniversary-kit-authentic-player-jersey_ss5_p-201206352+pv-1+u-pxdv6nb5qvseotmqxgj5+v-ljkwntjjvyrwggrtsyls.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/e1e5Vj',
      shopTitle: 'Shop Morris Seattle kit at MLS Store',
    },
    {
      name: '10. Pedro de la Vega',
      team: 'Seattle Sounders FC',
      text: 'Newcomer, fan favorite. Pedro’s creativity and drive made his jersey one of the most-wanted in the league.',
      title: "Men's Seattle Sounders FC Pedro de la Vega adidas Green 2024 The Anniversary Kit Replica Player Jersey",
      imageUrl:
        'https://images.footballfanatics.com/seattle-sounders-fc/mens-adidas-pedro-de-la-vega-green-seattle-sounders-fc-2024-the-anniversary-kit-replica-player-jersey_ss5_p-201240703+pv-1+u-scpcbvltztbceofagkex+v-cjcnxavrqcfsisef7yzt.jpg?_hv=2&w=900',
      link: 'https://mlsstore.i8h2.net/kOJEoz',
      shopTitle: 'Shop de la Vega Seattle kit at MLS Store',
    },
  ];

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
            Top 10 MLS Jerseys of 2024: Style, Passion & a Bit of Magic
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2025-04-01">April 2025</time>
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
            src="https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg?width=1920&quality=90&format=webp"
            alt="Top MLS Jerseys 2024"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Megan Briggs / Getty Images
          </div>
        </figure>

        {/* STICKY DUAL BUY BANNERS */}
        <div suppressHydrationWarning>
          {mounted && (
            <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://mlsstore.i8h2.net/mOoq9M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop MLS Jerseys
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
                  href="https://mlsstore.i8h2.net/19ZLn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop Messi Jersey
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

          <p>
            As the league grew bolder and stars shined brighter, MLS 2024 turned into more than just a soccer season — it became a cultural moment.
          </p>
          <p>
            The games thrilled, the players delivered, but the real stars? The jerseys.
          </p>
          <p>
            Some were worn for the colors. Some for the design. And some because, well — “It’s Messi’s jersey, bro.”
          </p>
          <p>
            These kits weren’t just gear — they were a statement, a style choice, a symbol of loyalty. Not just to clubs, but to icons.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">When Style Hits the Pitch</h2>
          <p>
            Big names lit up the scoreboards, and brands answered with bold designs. Adidas held the license for the entire league, but didn’t play it safe.
          </p>
          <p>
            Inter Miami served up full-on Art Deco elegance. LA went Hollywood gold. Elsewhere, teams dropped retro heat that flew off shelves.
          </p>
          <p>
            These weren’t just for the pitch — they were built for streetwear, selfies, and Saturday night fits.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Most Popular MLS Jerseys of 2024</h2>

          {jerseys.map((jersey) => (
            <div key={jersey.name}>
              <h3 className="text-2xl font-bold mt-12 mb-4">
                {jersey.name} – {jersey.team}
              </h3>

              {jersey.imageUrl && (
                <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9] bg-gray-50">
                  <Image
                    src={jersey.imageUrl}
                    alt={jersey.title || jersey.name}
                    fill
                    className="object-contain p-6"
                  />
                </figure>
              )}

              <p>{jersey.text}</p>

              {jersey.link && jersey.shopTitle && (
                <ShopBanner title={jersey.shopTitle} href={jersey.link} />
              )}
            </div>
          ))}

          <h2 className="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>
          <p>
            2024 proved that MLS kits aren’t just matchday merchandise — they’re fashion, they’re identity, they’re part of your story.
          </p>
          <p>
            Fans rocked them on matchdays, yes. But also at brunch, on dates, in photoshoots, and even festivals.
          </p>
          <p>
            The jersey became part of the everyday rotation — and it looked damn good doing it. The league is evolving. So is the fanbase. MLS is no longer just building teams — it’s building culture.
          </p>
          <p>
            And let’s be honest — no one buys a jersey just for the fabric. They buy it for the feeling it gives them.
          </p>
          <p>
            That 2024 feeling? Pink, golden, bold — and full hype.
          </p>

        </section>

        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: April 2025</span>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}