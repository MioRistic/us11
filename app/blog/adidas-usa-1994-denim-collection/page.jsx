'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const USA1994DenimCollectionBlog = () => {
  const products = [
    {
      title: "adidas USA 1994 Denim Graphic Fashion Jersey - Blue",
      price: "$89.99",
      imageUrl: "https://fanatics.frgimages.com/usa-soccer/mens-adidas-blue-usa-1994-denim-graphic-fashion-jersey_ss5_p-203129860+pv-1+u-0rqaiuefrdexz2opesdp+v-o83yze9tdyacuelka5l5.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/9VLE4Y" // ← Zameni sa pravim affiliate linkom
    },
    {
      title: "adidas Unisex USA 1994 Denim Graphic Adjustable Hat - Blue",
      price: "$39.99",
       imageUrl: "https://fanatics.frgimages.com/usa-soccer/unisex-adidas-blue-usa-1994-denim-graphic-adjustable-hat_ss5_p-203129152+u-ufbkjduhsucpukw0cesc+v-eqmpbab0xuzn4twyojyx.jpg?_hv=2&w=600", // ← Ako nemaš tačnu, koristi placeholder ili pronađi
      link: "https://fanatics.93n6tx.net/9VLE44"
    },
    {
      title: "adidas USA 1994 Denim Graphic Full-Zip Track Jacket - Blue",
      price: "$119.99",
  imageUrl: "https://fanatics.frgimages.com/usa-soccer/mens-adidas-blue-usa-1994-denim-graphic-full-zip-track-jacket_ss5_p-203129859+pv-1+u-rw23rgbp8na8855pobnj+v-smgnnf10isvaqecfx273.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/5k5n2o"
    },
    {
      title: "adidas USA 1994 Denim Graphic Shorts - White (Most Popular)",
      price: "$59.99",
      imageUrl: "https://fanatics.frgimages.com/usa-soccer/mens-adidas-white-usa-1994-denim-graphic-shorts_ss5_p-203129861+pv-4+u-y6odtdjcqz7mbdppfn38+v-kp2n7yddbhfs8lvfjruz.jpg?_hv=2&w=1018", // ← Ako nemaš tačnu, koristi placeholder ili pronađi
      link: "https://fanatics.93n6tx.net/gROGyg"
    },
    {
      title: "adidas Youth USA 1994 Denim Graphic Fashion Jersey - Blue",
      price: "$69.99",
      imageUrl: "https://fanatics.frgimages.com/usa-soccer/youth-adidas-blue-usa-1994-denim-graphic-fashion-jersey_ss5_p-203132704+pv-1+u-rl1sbzpxqeqvfwdt6pi5+v-xgmw4arjmafopvf3i1ig.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/bkOVRg"
    }
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Adidas USA 1994 Denim Graphic Collection: Iconic USMNT Throwback Jersey & Gear for World Cup 2026
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-16">March 16, 2026</time>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/bltf53f7a9a05821020/crop/MM5DIMBYGU5DEMRZHA5G433XMU5DAORYHE2Q====/U.S%20Denim%20Kit%20Collection%2024.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Adidas USA 1994 Denim Graphic Jersey blue stars retro USMNT 2026 collection"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            The iconic Adidas U.S. Denim Graphic Jersey – revived for World Cup 2026 hype | Credit: adidas / Goal.com
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">
          <p>
            Just in time for the countdown to the 2026 FIFA World Cup on home soil, adidas has dropped a fire throwback: the **USA 1994 Denim Graphic Collection**. This isn't just any retro kit—it's a bold revival of the legendary (and polarizing) away jersey worn by the USMNT during the 1994 World Cup, the last time the tournament was hosted in the United States.
          </p>

          <p>
            Featuring that signature washed-denim look with scattered white stars, red accents, and a fearless '90s vibe, the collection channels pure American soccer nostalgia. Former USMNT legends Alexi Lalas and Cobi Jones star in the campaign—Lalas even unboxed the jersey himself, declaring "DENIM IS UPON US! 1994 LIVES AGAIN!" Perfect for fans reliving the '94 magic or gearing up for WC 2026.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Iconic 1994 Denim Jersey – Now Modern & Comfy</h2>
          <p>
            The star of the show is the **adidas USA 1994 Denim Graphic Fashion Jersey** in blue. Lightweight recycled polyester gives it modern breathability while keeping the classic V-neck, relaxed fit, and bold star graphics. No official USSF badge (adidas isn't current supplier), but that's what makes it a pure lifestyle piece—streetwear meets soccer heritage.
          </p>

          <p>
            Pair it with the matching track jacket, star-motif shorts, adjustable hat, or youth sizes for the whole family. This drop is already flying off shelves ahead of summer 2026—don't sleep on it!
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Shop the Full Adidas USA 1994 Denim Graphic Collection</h2>
          <p className="text-lg">
            Grab your favorites below—prices are current as of March 2026. Support US11 with these affiliate links (we may earn a small commission at no extra cost to you).
          </p>
        </section>

        {/* PRODUCTS GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg text-[#020617]">{product.title}</h4>
                <p className="text-xl font-bold text-green-600 mt-2">{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full text-center"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="text-center my-12">
          <a
            href="https://fanatics.93n6tx.net/vDPVe3" // ← Glavni collection link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-red-700 inline-block"
          >
            Shop Full 1994 Denim Collection on Fanatics →
          </a>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 16, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
        </footer>

      </div>
    </article>
  );
};

export default USA1994DenimCollectionBlog;