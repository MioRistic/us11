'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSxHypeAndVice() {
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
    'MLS x Hype and Vice: The Women’s Collection That Finally Treats Female Fans Like Fashion Consumers';

  const products = [
    {
      title: 'Women’s Inter Miami CF Hype and Vice Black Scoop Neck MVP Tank Top',
      price: '$33.74',
      originalPrice: '$44.99',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/womens-hype-and-vice-black-inter-miami-cf-scoop-neck-mvp-tank-top_ss5_p-201268874+u-65yq4zpnua70imduvmej+v-eqr6rawbcwjicgjhejid.jpg?_hv=2&w=800',
      link: 'https://mlsstore.i8h2.net/Gb2rVV',
    },
    {
      title: 'Women’s LAFC Hype and Vice White Homerun Cropped Raglan T-Shirt',
      price: '$33.74',
      originalPrice: '$39.99',
      imageUrl:
        'https://images.footballfanatics.com/lafc/womens-hype-and-vice-black-lafc-scoop-neck-mvp-tank-top_ss5_p-201268873+pv-1+u-io2ftdczi57n9ibiwtir+v-i0nchbx0jrtxnrslyua4.jpg?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/3kLbZK',
    },
    {
      title: 'Women’s San Diego FC Hype and Vice Navy MVP Tank',
      price: '$44.99',
      imageUrl:
        'https://images.footballfanatics.com/san-diego-fc/womens-hype-and-vice-navy-san-diego-fc-mvp-tank_ss5_p-203991813+pv-1+u-muyvnhoc2bv6lehhfmgr+v-xwqrtxrlh8k4eegnd5y5.jpg?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/PzW14z',
    },
    {
      title: 'Women’s Charlotte FC Hype and Vice White Home Run Cropped Raglan T-Shirt',
      price: '$44.99',
      imageUrl:
        'https://images.footballfanatics.com/charlotte-fc/womens-hype-and-vice-white-charlotte-fc-mvp-tank_ss5_p-203991814+pv-1+u-bisu6bdhzulttcle83zr+v-hgh9dzaitbjdprlayeva.jpg?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/QYWVAA',
    },
    {
      title: 'Women’s Inter Miami CF Hype and Vice Denim Cropped Full-Button Jean Jacket',
      price: '$128.00',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/womens-hype-and-vice-denim-inter-miami-cf-cropped-full-button-jean-jacket_ss5_p-204169427+pv-2+u-zuhyczoruy3lnbtgws0q+v-u5tjdu45qi12j7xs7u3n.jpg?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/R0WJZg',
    },
    {
      title: 'Women’s LAFC Hype and Vice Black Offside Sweatshirt',
      price: '$80.00',
      imageUrl:
        'https://images.footballfanatics.com/lafc/womens-hype-and-vice-black-lafc-offside%C2%A0sweatshirt_ss5_p-204169433+pv-1+u-j3kodhdeecdzswh6apel+v-gpbitfnvm6zbg2yg4t6r.jpg?_hv=2&w=1018',
      link: 'https://mlsstore.i8h2.net/PzW1mY',
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
            MLS x Hype and Vice: The Women’s Collection That Finally Treats Female Fans Like Fashion Consumers
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-10">August 10, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://www.mlsstore.com/content/ws/all/30b36d86-a697-404f-be84-66d333c8aafb__2400X900.jpg"
            alt="MLS x Hype and Vice Women’s Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: MLS Store / Hype and Vice
          </div>
        </figure>

        {/* STICKY BUY BANNER */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://mlsstore.i8h2.net/6kD2EK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop the full Hype and Vice collection at MLS Store
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

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p>
            For years, women’s MLS apparel felt like an afterthought — oversized men’s cuts dyed pink, or basic tanks that looked like they were designed in 2012. Hype and Vice just changed that.
          </p>

          <p>
            The Los Angeles-based brand, already known for elevating college and NBA women’s fashion, has dropped a full MLS collection that actually treats female fans like style-conscious consumers. Cropped raglan tees, scoop-neck MVP tanks, denim jackets, and Offside sweatshirts now exist for almost every club, and they look like something you’d wear outside the stadium.
          </p>

          {/* Banner 1 */}
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
                  Shop Hype and Vice at MLS Store
                </h3>
              </div>
            </div>
            <a
              href="https://mlsstore.i8h2.net/6kD2EK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Why This Collection Hits Different</h2>
          <p>
            Hype and Vice was built by women who were tired of cutting up oversized men’s shirts at tailgates. That DNA shows. The fit is intentional — slim through the body, cropped in the right places, with soft ribbed fabrics on the tanks and substantial weight on the denim pieces.
          </p>
          <p>
            The standout styles right now are the <strong>MVP Tank</strong> (scoop neck, ribbed, body-hugging) and the <strong>Home Run Cropped Raglan T-Shirt</strong>. Both come in club colors and clean white versions that work with almost anything. Inter Miami, LAFC, San Diego FC, Charlotte FC, Atlanta United, Nashville SC, Philadelphia Union and FC Cincinnati all have strong drops.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Pieces Worth Buying</h2>
          <p>
            If you’re building a rotation, start with these:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>MVP Tank</strong> – the everyday hero. Scoop neck, soft rib, perfect length. Available in almost every club color.
            </li>
            <li>
              <strong>Home Run / Homerun Cropped Raglan Tee</strong> – the modern classic. Contrast sleeves, cropped hem, clean branding.
            </li>
            <li>
              <strong>Denim Cropped Full-Button Jean Jacket</strong> – the statement piece. $128, but it feels premium and works year-round.
            </li>
            <li>
              <strong>Offside Sweatshirt</strong> – clean, heavyweight, and actually flattering.
            </li>
          </ul>

          <p>
            Several items are already on sale or clearance (especially older colorways of the Tailgate Halter tops and some St. Louis City SC pieces), so timing matters.
          </p>

          {/* Banner 2 */}
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
                  Shop Hype and Vice at MLS Store
                </h3>
              </div>
            </div>
            <a
              href="https://mlsstore.i8h2.net/6kD2EK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Take</h2>
          <p>
            This is one of the first times MLS women’s apparel feels like it was designed by people who actually wear the clothes. It sits at the intersection of sports, fashion, and lifestyle in a way most league merch still doesn’t.
          </p>
          <p className="font-semibold">
            If you’ve been waiting for MLS gear that doesn’t force you to choose between supporting your team and looking good, this is the collection.
          </p>

        </section>

        {/* SHOP - PRODUCTS */}
        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-bold mb-6">Shop the Collection</h2>
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
                    {product.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
                    )}
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

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: August 10, 2026</p>
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