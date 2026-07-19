'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LewandowskiChicago = () => {
  const items = [
    {
      title: "Robert Lewandowski Chicago Fire adidas Youth 2026 Forever Red Replica Jersey - Red",
      price: "$114.99",
      imageUrl: "https://fanatics.frgimages.com/chicago-fire/youth-adidas-robert-lewandowski-red-chicago-fire-2026-forever-red-replica-jersey_ss5_p-204579809+u-qfounp7zui6vxmvelicv+v-qrvu3blql7rgmdb3rpdo.png?_hv=2&w=600",
      link: "https://fanatics.93n6tx.net/qWk31y"
    },
    {
      title: "Robert Lewandowski Chicago Fire adidas 2026 Home Replica Jersey",
      price: "$134.99",
      imageUrl: "https://fanatics.frgimages.com/chicago-fire/mens-adidas-robert-lewandowski-red-chicago-fire-2026-forever-red-replica-jersey_ss5_p-204579807+u-nxbzt0em2stdfqk4czaq+v-efo0lioxddfddqyy9mpv.png?_hv=2&w=600",
      link: "https://fanatics.93n6tx.net/jRD3P5"
    },
    {
      title: "Robert Lewandowski Chicago Fire adidas Women's 2025 The Municipal Kit Replica Jersey - Light Blue",
      price: "$134.99",
      imageUrl: "https://fanatics.frgimages.com/chicago-fire/womens-adidas-robert-lewandowski-light-blue-chicago-fire-2025-the-municipal-kit-replica-jersey_ss5_p-204579812+pv-1+u-2ljcqvtvhn0egaiycdwl+v-p0rwdd9aponpsmydsrgr.png?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/L0oqJY"
    }
  ];

  return (
    <div className="w-full bg-white text-[#020617] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Robert Lewandowski
          </h1>
          <p className="text-xl text-gray-600 mt-2">Chicago Fire • Poland</p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Robert Lewandowski Chicago Fire"
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/2" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm uppercase tracking-widest">Getty Images</p>
          </div>
        </div>

        {/* Player Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Player Information</h2>
            <ul className="space-y-4 text-gray-700">
              <li><strong>Date of Birth:</strong> August 21, 1988 (Warsaw, Poland)</li>
              <li><strong>Position:</strong> Striker</li>
              <li><strong>Height:</strong> 6 ft 0 in (1.85 m)</li>
              <li><strong>Current Team:</strong> Chicago Fire</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Career Highlights</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Borussia Dortmund (2010–2014):</strong> 187 appearances, 103 goals</li>
              <li><strong>Bayern Munich (2014–2022):</strong> 375 appearances, 344 goals</li>
              <li><strong>Barcelona (2022–2026):</strong> 108 appearances, 85 goals</li>
              <li><strong>Chicago Fire (2026–present):</strong> New chapter in MLS</li>
            </ul>
          </div>
        </div>

        {/* About */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Robert Lewandowski</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            One of the greatest strikers of his generation, Robert Lewandowski has brought his legendary goal-scoring ability to Major League Soccer with Chicago Fire. 
            Known for his clinical finishing, aerial ability, and professionalism, he continues to set new standards even at 37 years old.
          </p>
        </div>

        {/* SHOP - 3 PROIZVODA */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Shop Lewandowski Collection</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((product, index) => (
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
                  <h4 className="font-semibold text-lg text-[#020617] line-clamp-2">{product.title}</h4>
                  <p className="text-xl font-bold text-black-600 mt-2">{product.price}</p>
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

        {/* FANATICS SHOP BANNER */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" 
                alt="Fanatics" 
                className="h-8" 
              />
            </div>
            <h3 className="text-2xl font-bold text-[#020617] mb-2">
              Shop Official Lewandowski Chicago Fire Jerseys
            </h3>
          </div>

          <a
            href="https://fanatics.93n6tx.net/PzY9oQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
          >
            Shop now
          </a>
        </div>

      </div>
    </div>
  );
};

export default LewandowskiChicago;