'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Messi = () => {
  const items = [
    {
      title:
        "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Authentic Player Jersey",
      price: '$194.99',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340',
      link: 'https://mlsstore.i8h2.net/GKgZVr',
    },
    {
      title:
        'Youth Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey',
      price: '$109.99',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677367+u-hrow2y8rhvpwrddyelhp+v-dftko5xtuap5eeoanmxy.jpg?_hv=2&w=340',
      link: 'https://mlsstore.i8h2.net/JK2m4r',
    },
    {
      title:
        "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Authentic Player Jersey",
      price: '$194.99',
      imageUrl:
        'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-authentic-player-jersey_ss5_p-202594033+u-knqnh7w92m4datnj7vqo+v-ouhd9owk3afqcevad5fn.jpg?_hv=2&w=340',
      link: 'https://mlsstore.i8h2.net/o4Oy0n',
    },
  ];

  return (
    <div className="w-full bg-white text-[#020617] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Lionel Messi
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Inter Miami CF • Argentina
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://en.nogomania.com/GetFile.ashx?id=271175"
            alt="Lionel Messi"
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/2" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm uppercase tracking-widest">
              Getty Images
            </p>
          </div>
        </div>

        {/* Player Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Player Information
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Full Name:</strong> Lionel Andrés Messi
              </li>
              <li>
                <strong>Date of Birth:</strong> June 24, 1987
                (Rosario, Argentina)
              </li>
              <li>
                <strong>Position:</strong> Forward
              </li>
              <li>
                <strong>Height:</strong> 5 ft 7 in (1.70 m)
              </li>
              <li>
                <strong>Current Team:</strong> Inter Miami CF
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Career History
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Barcelona (2004–2021):</strong>
                {' '}778 appearances, 672 goals
              </li>
              <li>
                <strong>Paris Saint-Germain (2021–2023):</strong>
                {' '}75 appearances, 32 goals
              </li>
              <li>
                <strong>Inter Miami CF (2023–present):</strong>
                {' '}70+ appearances, 50+ goals
              </li>
              <li>
                <strong>Argentina:</strong>
                {' '}World Cup winner, Copa América champion
              </li>
            </ul>
          </div>
        </div>

        {/* About */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            About Lionel Messi
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Lionel Messi is widely regarded as one of the greatest
            footballers of all time. Known for his incredible dribbling,
            vision, goalscoring ability, and leadership, Messi has won
            numerous individual and team honors, including the FIFA World
            Cup, multiple UEFA Champions League titles, and a record number
            of Ballon d'Or awards.
          </p>
        </div>

        {/* Shop */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Shop the Collection
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {items.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-64">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-lg text-[#020617]">
                    {product.title}
                  </h4>

                  <p className="text-xl font-bold mt-2">
                    {product.price}
                  </p>

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
        </div>

        {/* Store Banner */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#020617] mb-2">
              Shop Messi merchandise
            </h3>

            <p className="text-gray-600">
              Discover official Lionel Messi and Inter Miami jerseys,
              apparel and collectibles.
            </p>
          </div>

          <a
            href="https://mlsstore.i8h2.net/GKgZVr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
          >
            Buy now
          </a>
        </div>

      </div>
    </div>
  );
};

export default Messi;