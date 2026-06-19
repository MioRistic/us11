'use client';

import React from 'react';
import Image from 'next/image';

const ChristianPulisic = () => {
  const items = [
    {
      title: "Christian Pulisic USMNT Nike 2026 Home Stadium Replica Jersey - White",
      price: "$135.00",
      imageUrl: "https://fanatics.frgimages.com/usmnt/mens-nike-christian-pulisic-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203943392+pv-1+u-eynkcl3yzghk7gpyutek+v-oe4mlrgn8nxeyhfoxxdc.png?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/5k1M62"
    },
    {
      title: "Christian Pulisic USMNT Nike 2026 Home Match Authentic Jersey - White",
      price: "$215.00",
      imageUrl: "https://fanatics.frgimages.com/usmnt/mens-nike-christian-pulisic-white-usmnt-2026-home-match-authentic-jersey_ss5_p-203943391+pv-1+u-rtwb091xrfmsurttdlic+v-sglvqpgdt3vg75g6qmb4.png?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/1GZDq9"
    },
    {
      title: "Christian Pulisic USMNT Nike 2026 Away Stadium Replica Jersey - Blue",
      price: "$34.99",
      imageUrl: "https://fanatics.frgimages.com/usmnt/mens-nike-christian-pulisic-blue-usmnt-2026-away-stadium-replica-jersey_ss5_p-203943368+pv-1+u-4kwjxphvzhkxgrstlepr+v-vfmduagkmtljge9q3nyd.png?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/gRaAM0"
    }
  ];

  return (
    <div className="w-full bg-white text-[#020617] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Christian Pulisic
          </h1>
          <p className="text-xl text-gray-600 mt-2">AC Milan • USMNT</p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://assets.goal.com/images/v3/blt033093b0707b1c17/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2279107115.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Christian Pulisic"
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-1/2" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm uppercase tracking-widest">Getty</p>
          </div>
        </div>

        {/* Player Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Player Information</h2>
            <ul className="space-y-4 text-gray-700">
              <li><strong>Date of Birth:</strong> September 18, 1998 (Hershey, Pennsylvania)</li>
              <li><strong>Position:</strong> Winger / Attacking Midfielder</li>
              <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
              <li><strong>Current Team:</strong> AC Milan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Career History</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Borussia Dortmund (2016–2019):</strong> 81 appearances, 10 goals</li>
              <li><strong>Chelsea (2019–2023):</strong> 98 appearances, 20 goals</li>
              <li><strong>Borussia Dortmund (loan 2019):</strong> 9 appearances, 3 goals</li>
              <li><strong>AC Milan (2023–present):</strong> 52 appearances, 17 goals</li>
            </ul>
          </div>
        </div>

        {/* About */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Christian Pulisic</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Christian Pulisic is one of the brightest talents in American soccer history. 
            Known for his incredible pace, technical ability, and leadership on the field, 
            he has become the face of the United States national team and a key player for AC Milan.
          </p>
        </div>

        {/* SHOP - 4 PROIZVODA */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6">Shop the Collection</h2>
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
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
                          <h4 className="font-semibold text-lg text-[#020617]">{product.title}</h4>
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
      Shop Pulisic kits at Fanatics
    </h3>
   
  </div>

  <a
    href="https://fanatics.93n6tx.net/VO2boJ" 
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

export default ChristianPulisic;