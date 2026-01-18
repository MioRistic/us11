'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Argentina2026JerseyBlog = () => {
  const products = [
    {
      title: "Lionel Messi Argentina National Team adidas FIFA x World Cup 2026 Home Replica Jersey - White",
      price: "$129.99",
      imageUrl: "https://fanatics.frgimages.com/argentina-national-team/mens-argentina-national-team-lionel-messi-adidas-white-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203130486+pv-1+u-zxkxbhk1zvj49qk9dqrq+v-fseuhfzd3mduw0oxzo1v.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/bO4My6"
    },
    {
      title: "Lionel Messi Argentina National Team adidas FIFA x World Cup 2026 Home On Field Authentic Jersey - White",
      price: "$89.99",
      imageUrl: "https://fanatics.frgimages.com/argentina-national-team/mens-argentina-national-team-lionel-messi-adidas-white-fifa-x-world-cup-2026-home-on-field-authentic-jersey_ss5_p-203130492+pv-3+u-4t5gbwgzj2qugoxbeefs+v-baj6vv12izzd2xt8rbi2.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/yqJXBy"
    },
    {
      title: "Lionel Messi Argentina National Team adidas Youth FIFA x World Cup 2026 Home Replica Jersey - White",
      price: "$109.99",
      imageUrl: "https://fanatics.frgimages.com/argentina-national-team/youth-adidas-lionel-messi-white-argentina-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203130485+pv-1+u-ly6apmcuzdawsbxuvwv1+v-46d1zbnvf9w9cpdptzvp.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/qz5aBO"
    },
    {
      title: "Argentina National Team adidas FIFA x World Cup 2026 Home Replica Long Sleeve Jersey - White",
      price: "$109.99",
      imageUrl: "https://fanatics.frgimages.com/argentina-national-team/mens-adidas-white-argentina-national-team-fifa-x-world-cup-2026-home-replica-long-sleeve-jersey_ss5_p-203487738+pv-1+u-xf7hqoiao7qqxo2qv3es+v-jwld24attowqvqiztfeu.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/qz5aBq"
    }
  ];

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Argentina FIFA World Cup 2026 Kits: Home and Away
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-10">January 18, 2026</time>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Argentina 2026 World Cup Kit"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: adidas | Copyright: 2025
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">
          <p>
            Argentina’s 2026 World Cup home jersey isn’t just a uniform — it’s a piece of history, carrying the weight of past triumphs and memories of legendary moments. For many fans, this edition will be especially poignant as it marks Lionel Messi’s final World Cup in the Albiceleste shirt. Having lifted the trophy in 2022, Messi now defends Argentina’s title with the world watching.
          </p>

          <p>
           The home kit stays true to Argentina’s iconic identity, but with a modern twist. The classic white and sky-blue stripes are reimagined with a subtle three-tone gradient, paying homage to the country’s three World Cup triumphs in 1978, 1986, and 2022. A small “1896” detail at the back of the neck nods to the founding year of the Argentine Football Association, while navy accents on the shoulders and cuffs add a refined, contemporary edge. Wearing the sky-blue and white stripes, every touch of the ball Messi makes echoes the legacy of Kempes, Maradona, and the heroes of 2022. The result is a jersey that feels timeless yet fresh—a perfect visual link between the legends of the past and the heroes of today.
          </p>

          <h2 className="text-xl font-semibold mt-6">The Black Away Kit: Bold and Modern</h2>
<p>
  Argentina’s away kit is rumored to return with a striking black base, featuring white logos and sky-blue accents. While official images have not yet been released, leaks suggest a swirling, art-inspired graphic across the front, giving the kit a bold, modern personality and a strong contrast to the heritage-driven home jersey. The black away kit has long been popular among fans for its sleek aesthetic and expressive style, and 2026 appears set to continue that tradition.
</p>

<p>
  Alongside the home and away kits, a goalkeeper jersey and lifestyle editions are also expected, rounding out the collection and celebrating Argentina’s dominance both on and off the pitch. Once the official designs are unveiled, we will publish a dedicated blog diving deeper into every detail, giving fans a closer look at the 2026 World Cup kits in all their glory.
</p>

<p className="mt-6 text-lg">
  You can <a 
    href="https://fanatics.93n6tx.net/JKeMWe" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-600 hover:underline"
  >
    shop the Argentina World Cup Kit 2026 at Fanatics
  </a> and get ready to cheer the Albiceleste in style.
</p>

        </section>

        {/* PRODUCTS GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.title} />
              <div className="p-4">
                <h4 className="font-semibold text-lg text-[#020617]">{product.title}</h4>
                <p className="text-gray-600">{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: January 18, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">Back to blog</Link>
          </div>
        </footer>

      </div>
    </article>
  );
};

export default Argentina2026JerseyBlog;
