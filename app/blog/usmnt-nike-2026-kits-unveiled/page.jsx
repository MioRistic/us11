'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const USMNT2026KitsBlog = () => {
  const products = [
    {
      title: "USMNT Nike 2026 Home Stadium Replica Jersey - White",
      price: "$100.00",
      imageUrl: "https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203965490+u-it1nev0d5ux18upodbtk+v-50sz1hlmvcpkiijaf9eh.png?_hv=2&w=600",
      link: "https://fanatics.93n6tx.net/L0KRaj" // Replace with real affiliate link
    },
    {
      title: "USMNT Nike 2026 Away Stadium Replica Jersey - Blue",
      price: "$100.00",
      imageUrl: "https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2026-away-stadium-replica-jersey_ss5_p-203514504+pv-1+u-3lnsvwvcz0geopmzy99o+v-txw6kv4siuq2umlcfulb.png?_hv=2&w=1018", // Placeholder – replace with actual away image URL if you have it
      link: "https://fanatics.93n6tx.net/jReJWe"
    },
    {
      title: "USMNT Nike 2026 Away Match Authentic Jersey - Blue",
      price: "$180.00",
      imageUrl: "https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2026-away-match-authentic-jersey_ss5_p-203514503+u-oxgtp6ywc4k8pq5jcy5i+v-9qf46gpzhaqaiwcktyoz.png?_hv=2&w=600", // Placeholder – update with real URL
      link: "https://fanatics.93n6tx.net/gROabr"
    },
    {
      title: "USMNT Nike 2026 Home Match Authentic Jersey - White",
      price: "$180.00",
      imageUrl: "https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2026-home-match-authentic-jersey_ss5_p-203965489+pv-1+u-aliioamyxlhg5iej9hzk+v-kggopjettshp6mprc50s.jpg?_hv=2&w=1018", // Placeholder – update
      link: "https://fanatics.93n6tx.net/R0G2y9"
    },
    // {
    //   title: "Christian Pulisic USMNT Nike 2026 Away Stadium Replica Jersey - Blue",
    //   price: "$135.00",
    //   imageUrl: "https://fanatics.frgimages.com/usmnt/mens-christian-pulisic-blue-usmnt-2026-away-stadium-replica-jersey_ss5_p-203965494+u-pulisic-away-2026+v-custom.png?_hv=2&w=600", // Placeholder – replace with actual Pulisic away
    //   link: "https://fanatics.93n6tx.net/c/YourAffiliateID/pulisic-2026-away-replica-blue"
    // },
    // {
    //   title: "Christian Pulisic USMNT Nike 2026 Home Stadium Replica Jersey - White",
    //   price: "$135.00",
    //   imageUrl: "https://fanatics.frgimages.com/usmnt/mens-christian-pulisic-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203965495+u-pulisic-home-2026+v-custom.png?_hv=2&w=600", // Placeholder – replace
    //   link: "https://fanatics.93n6tx.net/c/YourAffiliateID/pulisic-2026-home-replica-white"
    // }
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            U.S. Soccer and Nike Unveil 2026 Kits: Patriotic Boldness for the Home World Cup
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-16">March 16, 2026</time>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt532e5fdd75fc8dc0/crop/MM5DIMBZGM5DEMZQGI5G433XMU5DAORYHA======/USSF_MNT_Kit_Launch_Vogue_mntjerseyshoot_11-09-25-124.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT Nike 2026 Home and Away kits official launch shoot"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            © Nike
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">
          <p>
            On March 16, 2026, U.S. Soccer and Nike officially unveiled the national team's new kits for the 2026 FIFA Men's World Cup, co-hosted on American soil. Dubbed the "Stripes Kit" (home) and "Stars Kit" (away), the designs represent a bold, unified visual identity across all 27 U.S. Soccer national teams—from the USMNT and USWNT to youth and para squads—for the first time ever.
          </p>

          <p>
            Coming off widespread player and fan backlash to the plain 2022 kits, this cycle involved direct input from stars like Tyler Adams and Christian Pulisic. The result? A patriotic, motion-inspired home jersey with wavy red-and-white stripes, and a sleek navy away featuring subtle metallic star jacquard. These kits debut in friendlies against Belgium and Portugal in Atlanta later this month, building momentum for the biggest World Cup in history.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Stripes Home Kit: Flag in Motion</h2>
          <p>
            The home jersey features horizontal red and white waves across an off-white base—evoking the American flag rippling in the wind. Navy collar, cuffs, and shoulders frame the look, while "THE BEST OF U.S." is scripted inside the neckline. Nike's Dri-FIT ADV tech ensures breathability and performance. It's dynamic, high-visibility, and a clear step up from 2022's minimalism.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Stars Away Kit: Subtle Power</h2>
          <p>
            The away kit opts for a deep navy base with all-over sublimated stars that shimmer under lights. Red piping adds edge, while the silver crest and Swoosh keep it clean. It's understated yet premium—echoing the spirit of past bold aways without overdoing it.
          </p>

          <p>
            Both use recycled polyester, unified crest, and are available in replica ($100 stadium versions) and authentic match ($180) formats. Player versions (e.g., Pulisic #10) add a premium upcharge.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Shop the USMNT Nike 2026 Kits Now</h2>
          <p className="text-lg">
            Gear up for the home World Cup—prices current as of March 2026. Support US11 with these affiliate links (we may earn a small commission at no extra cost to you).
          </p>
        </section>

        {/* PRODUCTS GRID with images */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-contain p-4"  // object-contain to show full jersey nicely
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg text-[#020617] mb-2">{product.title}</h4>
                <p className="text-xl font-bold text-green-600 mb-4">{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full text-center"
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
            href="https://fanatics.93n6tx.net/MKARXJ" // Replace with main collection affiliate link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-red-700 inline-block"
          >
            Shop Full USMNT 2026 Nike Kits on Fanatics →
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

export default USMNT2026KitsBlog;