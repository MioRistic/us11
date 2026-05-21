'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const PhiladelphiaUnionPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    // { 
    //   name: 'Andre Blake', 
    //   image: 'https://cdn1.intermiami.news/uploads/52/2024/05/GettyImages-2153690433-1140x760.jpg', 
    //   slug: 'blake' 
    // },
    // { 
    //   name: 'Quinn Sullivan', 
    //   image: 'https://assets.goal.com/images/v3/getty-2150744981/crop/MM5DGOBYHA5DEMJYG45G433XMU5DOMBSHIYTANQ=/GettyImages-2150744981.jpg', 
    //   slug: 'sullivan' 
    // },
    // { 
    //   name: 'Nathan Harriel', 
    //   image: 'https://icdn.sempremilan.com/wp-content/uploads/2021/12/ssc-napoli-v-atalanta-bc-serie-a-1.jpg', 
    //   slug: 'harriel' 
    // },
  ];

  const newsPosts = [
     
  ];

  const blogPosts = []; // Add real posts later

  const shopItems = [
    {
      id: 1,
      title: "Youth Philadelphia Union adidas Blue 2025 The Voltage Kit Replica Custom Jersey",
      price: "$114.99",
      imageUrl: "https://images.footballfanatics.com/philadelphia-union/youth-adidas-blue-philadelphia-union-2025-the-voltage-kit-replica-custom-jersey_ss5_p-202709980+pv-1+u-nzuemkcwamxejerqgtpa+v-xpyos4c87rjkyfkiclzg.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/MKBkXM"
    },
    {
      id: 2,
      title: "Men's Philadelphia Union adidas Navy 2024 The XV Kit Replica Custom Jersey",
      price: "$134.99",
      imageUrl: "https://images.footballfanatics.com/philadelphia-union/mens-adidas-navy-philadelphia-union-2024-the-xv-kit-replica-custom-jersey_ss5_p-201110903+pv-1+u-xf3yd0zdd1ssuto96fzo+v-ess1kld9p176szr4g3iu.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/bOP0Pb"
    },
    {
      id: 3,
      title: "Men's Philadelphia Union adidas Blue 2025 The Voltage Kit Replica Jersey",
      price: "$99.99",
      imageUrl: "https://images.footballfanatics.com/philadelphia-union/mens-adidas-blue-philadelphia-union-2025-the-voltage-kit-replica-jersey_ss5_p-202652752+pv-1+u-nb2nsow6h2z2fqzxh0dm+v-mwp7lzc5kehmfpkucyhr.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/Z6LRYQ"
    },
    {
      id: 4,
      title: "Men's Philadelphia Union adidas Blue 2025 The Voltage Kit Authentic Jersey",
      price: "$149.99",
      imageUrl: "https://images.footballfanatics.com/philadelphia-union/mens-adidas-blue-philadelphia-union-2025-the-voltage-kit-authentic-jersey_ss5_p-202652671+pv-1+u-7q4b3w9v5x3k8n2l5v6m+v-p8k7j9h2f3d4s5a6g7h8.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/MKBkXM"
    }
  ];

  const squad = {
    goalkeepers: ["Andre Blake", "Andrew Rick", "George Marks"],
    defenders: [
      "Geiner Martínez", "Japhet Sery Larsen", "Olivier Mbaizo", "Nathan Harriel",
      "Philippe Ndinga", "Olwethu Makhanya", "Frankie Westfield", "Finn Sundstrum"
    ],
    midfielders: [
      "Jovan Lukić", "Cavan Sullivan", "Jesús Bueno", "Alejandro Bedoya",
      "Jeremy Rafanello", "Ben Bender", "Indiana Vassilev", "Danley Jean Jacques",
      "Quinn Sullivan"
    ],
    attackers: [
      "Bruno Damiani", "Milan Iloski", "Agustin Anello", "Stas Korzeniowski",
      "Eddy Davis III", "Malik Jakupović", "Sal Olivas"
    ],
    headCoach: "Bradley Carnell"
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image src="/Union.png" alt="Philadelphia Union" fill className="object-cover" priority />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/40" />

        <div className="absolute inset-0 flex items-end pb-10 md:pb-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-5 md:gap-6 mb-4">
              <div className="w-24 h-24 md:w-40 md:h-40 relative bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Philadelphia_Union_2018_logo.svg/330px-Philadelphia_Union_2018_logo.svg.png"
                  alt="Philadelphia Union Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Philadelphia Union
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Subaru Park
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab ? 'text-blue-800' : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

        <div className="lg:col-span-2 space-y-12">

          {activeTab === 'overview' && (
            <>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Club Overview</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Philadelphia Union</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The U</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2008</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Subaru Park</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Bradley Carnell</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/philadelphia-union/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-blue-800">{player.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'news' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsPosts.map((post) => (
                  <Link key={post.id} href={`/news/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-800 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                        <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Blog</h2>
              <p className="text-gray-500 italic">No blog posts available at the moment.</p>
            </div>
          )}

          {activeTab === 'squad' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Philadelphia Union Squad 2026</h2>

              {['goalkeepers', 'defenders', 'midfielders', 'attackers'].map((pos) => (
                <div key={pos} className="mb-10">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b border-gray-200 pb-2 capitalize">
                    {pos}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {squad[pos].map((name, i) => (
                      <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b border-gray-200 pb-2">Head Coach</h3>
                <div className="bg-gray-50 px-5 py-4 rounded-xl font-medium inline-block">
                  Bradley Carnell
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-blue-800" />
                <h2 className="text-3xl font-black text-[#020617]">Philadelphia Union Shop</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {shopItems.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="relative h-64 bg-gray-50 p-6">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-blue-800 line-clamp-2">{item.title}</h3>
                      <p className="text-2xl font-bold text-blue-800">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a href="https://mlsstore.i8h2.net/MKBkXM" target="_blank" 
                   className="inline-flex items-center gap-2 text-blue-800 font-bold hover:underline text-lg">
                  View full store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/qzm7Eq" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://expedia.com/affiliate/HH31r6P" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Subaru Park
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-6 text-[#020617]">Official Shop</h3>
            <div className="space-y-6">
              {shopItems.map((item) => (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-blue-800 line-clamp-2">{item.title}</h4>
                      <p className="text-blue-800 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.i8h2.net/MKBkXM" target="_blank" className="text-blue-800 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhiladelphiaUnionPage;