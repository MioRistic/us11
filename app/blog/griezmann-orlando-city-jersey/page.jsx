'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GriezmannOrlandoJerseyBlog = () => {
  const products = [
    {
      title: "Antoine Griezmann Orlando City SC adidas 2025 Perfect Storm On-Field Authentic Jersey - Purple",
      price: "$194.99",
      imageUrl: "https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-purple-orlando-city-sc-2025-perfect-storm-on-field-authentic-jersey_ss5_p-204033026+pv-1+u-hexo5oxtaqxkxng71go3+v-4wipfo65ii5bhl5wjrot.png?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/L0DV40"   // ← Zameni svojim affiliate linkom
    },
    {
      title: "Antoine Griezmann Orlando City SC adidas 2026 Sunken Treasure Kit Replica Jersey - Yellow",
      price: "$134.99",
      imageUrl: "https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-yellow-orlando-city-sc-2026-sunken-treasure-kit-replica-jersey_ss5_p-204033023+pv-1+u-n9kp1xxxujkydfq3meoa+v-w4cfrmomzn7dim5t6r02.png?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/enR9gQ"
    },
    // {
    //   title: "Antoine Griezmann Orlando City SC 2026 Sunken Treasure Kit Authentic Jersey - Yellow",
    //   price: "$194.99",
    //   imageUrl: "https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-yellow-orlando-city-sc-2026-sunken-treasure-kit-authentic-jersey-griezmann-7",
    //   link: "https://fanatics.93n6tx.net/c/XXXXXX"
    // },
    // {
    //   title: "Antoine Griezmann Orlando City SC Name & Number T-Shirt",
    //   price: "$34.99",
    //   imageUrl: "https://fanatics.frgimages.com/orlando-city-sc/mens-nike-black-orlando-city-sc-griezmann-name-number-t-shirt",
    //   link: "https://fanatics.93n6tx.net/c/XXXXXX"
    // }
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
         <div className="-mx-4 md:-mx-6 lg:-mx-8 xl:-mx-0 bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
  This page contains affiliate links. When you purchase through the links provided, 
  <span className="text-zinc-700 font-medium"> US11 may earn a commission</span> 
  at no extra cost to you.
</div>

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            How Griezmann’s No. 7 Jersey Became Orlando City’s Fastest-Selling Kit in Club History
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By <strong>Mio Ristić</strong></span>
            <span>•</span>
            <time dateTime="2026-04-11">April 11, 2026</time>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg"
            alt="Antoine Griezmann Orlando City No.7 Jersey"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Antoine Griezmann will wear the No. 7 for Orlando City starting July 2026 | Photo: Orlando City SC
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT - TAČNO ISTI TEKST KAO RANije */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">
          <p>When Orlando City SC announced the signing of Antoine Griezmann on March 24, 2026, many viewed it as another big-name MLS arrival — a 35-year-old World Cup winner coming to Florida for one last big payday.</p>
          
          <p>What happened next proved it was much more than that.</p>

          <p>Within days, Griezmann jerseys — complete with his name and the iconic <strong>No. 7</strong> — were already on sale across the MLS Store, Fanatics, Dick’s Sporting Goods, World Soccer Shop, and inside The Den at Inter&Co Stadium.</p>

          <p>The club didn’t wait for Griezmann to step on the pitch in July. They didn’t even wait for him to finish the season at Atlético Madrid.</p>

          <p>And the jerseys started flying off the shelves.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Why Griezmann? And Why So Fast?</h2>
          <p>Antoine Griezmann is not just another aging star. He is a proven winner: 2018 FIFA World Cup champion with France, a two-time La Liga title challenger with Atlético Madrid, and one of the most technically gifted and charismatic forwards of his generation.</p>

          <p>At 35, he chose Orlando City as his next chapter — signing a two-year Designated Player contract through the 2027-28 season, with an option for 2028-29. He will wear the No. 7, the same number he made famous in Madrid and with Les Bleus.</p>

          <p>Orlando understood the moment perfectly.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What Makes a Jersey Sell?</h2>
          <p>In today’s football world, a jersey is more than clothing — it’s a statement, a memory, and an emotional connection.</p>

          <p>Buying a Griezmann Orlando City jersey means owning:</p>
          <ul>
            <li>A piece of 2018 World Cup history</li>
            <li>Memories of his iconic “chicken dance” celebrations and clinical finishes under Diego Simeone</li>
            <li>A symbol that Orlando City is no longer “just another MLS club” — it’s a club capable of attracting genuine global talent</li>
          </ul>

          <p>The <strong>Sunken Treasure Kit</strong> in particular has proven extremely popular. Its bold gold design pairs beautifully with Griezmann’s black lettering and the No. 7.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Shop Griezmann Orlando City Jerseys</h2>
          <p className="text-lg">
            Grab your favorites below. Support US11 with these affiliate links (we may earn a small commission at no extra cost to you).
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

        {/* BIG CTA */}
        <div className="text-center my-12">
          <a
            href="https://fanatics.93n6tx.net/qWgJZN" // ← Glavni affiliate link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-red-700 inline-block"
          >
            Shop All Griezmann Orlando City Jerseys →
          </a>
        </div>

        {/* DISCLAIMER / AFFILIATE NOTE */}
<div className="bg-gray-100 border border-gray-300 rounded-2xl p-8 text-center text-sm text-gray-600 max-w-2xl mx-auto">
  <p>
    <strong>Note:</strong> If you make a purchase through the links in this article, 
    US11 may earn a small commission at no extra cost to you. 
    This helps support our work and allows us to continue creating quality content about MLS and big-name signings. 
    Thank you for your support!
  </p>
</div>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 11, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
        </footer>

      </div>
    </article>
  );
};

export default GriezmannOrlandoJerseyBlog;