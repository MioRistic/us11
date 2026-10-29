'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GriezmannPeaceCollective() {
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
    "Orlando City Just Dropped a Peace Collective x Street Fighter Collection With Griezmann. Here’s What’s Worth Buying.";

  const shopCollection = 'https://mlsstore.i8h2.net/xJ3MJd'; // replace with your real affiliate link

  const products = [
    {
      title: "Unisex Orlando City SC x Street Fighter Antoine Griezmann Peace Collective Black Player Premium T-Shirt",
      price: "$50.00",
      imageUrl: "https://images.footballfanatics.com/unisex-peace-collective-antoine-griezmann-black-orlando-city-sc-x-street-fighter-player-premium-t-shirt_ss5_p-205110912+u-jc9yvsoicx3w5lxqv8n9+v-xl2mwqc43oqq68j8xjua.jpg?_hv=2&w=800",
      link: "https://mlsstore.i8h2.net/X4Akdo",
    },
    {
      title: "Unisex Orlando City SC Antoine Griezmann Peace Collective Black Number Hoodie",
      price: "$50.00",
      imageUrl: "https://images.footballfanatics.com/orlando-city-sc/unisex-peace-collective-antoine-griezmann-black-orlando-city-sc-big-face-garment-dyed-t-shirt_ss5_p-204397809+pv-1+u-z0tv36o6ujxp9b7k9rwl+v-y2xwhn5bkzkxgngdkhq2.jpg?_hv=2&w=1018",
      link: "https://mlsstore.i8h2.net/YVGe1J",
    },
    
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Orlando City Just Dropped a Peace Collective x Street Fighter Collection With Griezmann. Here’s What’s Worth Buying.
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-22">October 22, 2026</time>
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
            src="https://www.mlsstore.com/content/ws/all/71cebf47-8fc9-46ab-b6e7-971b9dc298f2__480X639.jpg?w=480"
            alt="Orlando City SC Antoine Griezmann Peace Collective Street Fighter collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: MLS Store / Peace Collective
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
                Shop the Peace Collective x Griezmann collection at MLS Store
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
            Antoine Griezmann has been one of the best stories in MLS since he arrived in Orlando in July. Now the club has turned that momentum into merchandise.
          </p>

          <p>
            Peace Collective released a limited <strong>Orlando City SC x Street Fighter</strong> collection that includes several pieces built around Griezmann. The drop mixes the club’s purple identity with the arcade game’s visual language. It is not a full Street Fighter jersey line. It is a small, focused run of apparel and accessories aimed at people who want something more specific than a standard home shirt.
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
                  Shop the Griezmann Peace Collective drop
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
            The clearest pieces are the ones built specifically around Griezmann:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Peace Collective Black Player Premium T-Shirt</strong> ($50) — Simple, heavyweight, with Griezmann graphics. One of the cleaner options if you want something you can actually wear more than once.
            </li>
            <li>
              <strong>Black Big Face Garment Dyed T-Shirt</strong> ($50) — Larger Griezmann print on the back. Soft, garment-dyed feel. Already in a lot of carts.
            </li>
            <li>
              <strong>Black Number Hoodie</strong> ($94) — Midweight pullover with Griezmann’s number. Better for cooler nights than the tees.
            </li>
            <li>
              <strong>Denim Full-Button Coach Jacket</strong> ($164) — The most expensive item in the Griezmann-focused part of the drop. Limited stock.
            </li>
            <li>
              <strong>Street Fighter Mash-Up T-Shirt</strong> (around $45–50) — The one that leans hardest into the collaboration. Available at Dick’s and through Peace Collective.
            </li>
          </ul>

          <p>
            There are also standard Orlando City items that carry Griezmann’s name: the 2026 Archive Replica Jersey ($135), the Authentic version ($205), the Yellow Sunken Treasure Kit, and various name-and-number tees and hats. Those are separate from the Peace Collective pieces but are selling alongside them.
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
                  Shop Griezmann gear at MLS Store
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
            Most of the Peace Collective items sit in a normal streetwear price range for licensed MLS product. The tees at $45–50 are reasonable if the fit and fabric hold up. The hoodie at $94 is on the higher side for a number hoodie, but consistent with what Peace Collective charges for similar pieces. The denim jacket is the one that feels more like a collector item than everyday wear.
          </p>
          <p>
            The Street Fighter angle is the main reason these pieces exist. If you only want a Griezmann shirt, the standard adidas jerseys or the simpler name-and-number tees will do the same job for less money. If you like the crossover, this is one of the more limited Orlando drops of the season.
          </p>
          <p>
            Griezmann has 12 goals and 7 assists in 14 MLS games since arriving. The club is in the playoff race. The merchandise is following the form. Whether that form lasts into November is a separate question. The collection is already live.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Where to Buy</h2>
          <p>
            Shop the Peace Collective pieces at the MLS Store or directly through Peace Collective. The Street Fighter mash-up is also at Dick’s Sporting Goods. Most of the Griezmann-specific items are still available, but a few are already labeled “Almost Gone.”
          </p>

          <p className="font-semibold">
            Choose your fighter. Then grab the size before it disappears.
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
            <p>Published: October 22, 2026</p>
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