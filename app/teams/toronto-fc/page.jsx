'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const TorontoFCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { name: 'Djordje Mihailovic', image: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/6057277724001/81fbb3c7-8451-4448-94bc-6b9fefe1fd24/fcb23ad0-8a30-46c2-8c37-6406f1dc0142/1280x720/match/image.jpg', slug: 'mihailovic' },
    { name: 'Jonathan Osorio', image: 'https://cdn1.deepdaledigest.com/uploads/10/2022/11/GettyImages-1411935788-750x500.jpg', slug: 'osorio' },
    // { name: 'Walker Zimmerman', image: 'https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju', slug: 'zimmerman' },
  ];

  const newsPosts = [
 
  ];

  const blogPosts = [];

  const shopItems = [
    {
      id: 1,
      title: "Men's Toronto FC Federico Bernardeschi adidas White 2024 GTA Kit Replica Player Jersey",
      price: "$101.24",
      imageUrl: "https://images.footballfanatics.com/toronto-fc/mens-adidas-federico-bernardeschi-white-toronto-fc-2024-gta-kit-replica-player-jersey_ss5_p-202853685+pv-1+u-rcupfzgff6hrufpicreh+v-sorpqq8rog94o44zl8q2.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/gR6r1g"
    },
    {
      id: 2,
      title: "Men's Toronto FC adidas White 2024 GTA Kit Replica Jersey",
      price: "$69.99",
      imageUrl: "https://images.footballfanatics.com/toronto-fc/mens-adidas-white-toronto-fc-2024-gta-kit-replica-jersey_ss5_p-201102339+pv-1+u-qr7crpvoajravp4hrcfh+v-avneoacewfz8wr9jdsd0.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/gR6r1g"
    },
    {
      id: 3,
      title: "Men's Toronto FC adidas Red 2025 Club Kit Authentic Jersey",
      price: "$149.99",
      imageUrl: "https://images.footballfanatics.com/toronto-fc/mens-adidas-red-toronto-fc-2025-club-kit-authentic-jersey_ss5_p-202644598+pv-1+u-g1gr2zkmwbvs2m2xa3bz+v-rvf5vxfedajr0xyq5zxi.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/gR6r1g"
    },
    {
      id: 4,
      title: "Men's Toronto FC adidas Red 2025 Club Kit Replica Jersey",
      price: "$99.99",
      imageUrl: "https://images.footballfanatics.com/toronto-fc/mens-adidas-red-toronto-fc-2025-club-kit-replica-jersey_ss5_p-202644714+pv-1+u-rgdgdgz8k5aun2fbgoqh+v-hbcnp4seq6lt6mdljbq3.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/gR6r1g"
    }
  ];

  const squad = {
    goalkeepers: ["Luka Gavran", "William Yarbrough", "Adisa De Rosario"],
    defenders: [
      "Henry Wingo", "Matheus Pereira", "Zane Monlouis", "Benjamín Kuscevic",
      "Nicksoen Gomis", "Kobe Franklin", "Richie Laryea", "Raheem Edwards",
      "Stefan Kapor"
    ],
    midfielders: [
      "Djordje Mihailovic", "José Cifuentes", "Alonso Coello", "Jonathan Osorio",
      "Mark-Anthony Kaye", "Markus Cimermancic", "Malik Henry"
    ],
    attackers: [
      "Theo Corbeanu", "Josh Sargent", "Derrick Etienne Jr.", "Emilio Aristizábal",
      "Dániel Sallói", "Deandre Kerr", "Jules-Anthony Vilsaint"
    ],
    headCoach: "Robin Fraser"
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image src="/Toronto.png" alt="Toronto FC" fill className="object-cover" priority />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/40" />

        <div className="absolute inset-0 flex items-end pb-10 md:pb-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-5 md:gap-6 mb-4">
              <div className="w-24 h-24 md:w-40 md:h-40 relative bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Toronto_FC_Logo.svg/500px-Toronto_FC_Logo.svg.png"
                  alt="Toronto FC Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Toronto FC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • BMO Field
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
                  ${activeTab === tab ? 'text-red-600' : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>}
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Toronto FC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Reds</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2005</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>BMO Field</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Robin Fraser</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">A Legacy of Success</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Toronto FC is one of the most successful Canadian clubs in MLS history, winning the MLS Cup in 2017 and multiple Canadian Championships. With a passionate fanbase at BMO Field, they are a cornerstone of soccer in Canada.</p>
                  <p>Featuring world-class talents like Lorenzo Insigne and Djordje Mihailovic, Toronto FC continues to deliver exciting attacking soccer in the Eastern Conference.</p>
                </div>
              </div>

              {/* Trending Players */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/toronto-fc/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-red-600">{player.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Latest News - ispod Trending Players */}
              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {newsPosts.map((post) => (
                    <Link key={post.id} href={`/news/${post.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-56">
                          <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 line-clamp-2">{post.title}</h3>
                          <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                          <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
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
                        <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Toronto FC Squad 2026</h2>

              {['goalkeepers', 'defenders', 'midfielders', 'attackers'].map((pos) => (
                <div key={pos} className="mb-10">
                  <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2 capitalize">
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
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Head Coach</h3>
                <div className="bg-gray-50 px-5 py-4 rounded-xl font-medium inline-block">
                  Robin Fraser
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-red-600" />
                <h2 className="text-3xl font-black text-[#020617]">Toronto FC Shop</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {shopItems.map((item) => (
                  <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"
                     className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                    <div className="relative h-64 bg-gray-50 p-6">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-red-600 line-clamp-2">{item.title}</h3>
                      <p className="text-2xl font-bold text-red-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a href="https://mlsstore.i8h2.net/gR6r1g" target="_blank" 
                   className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline text-lg">
                  View full store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/vPQ7Z3" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://expedia.com/affiliate/SUHIUxP" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near BMO Field
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
                      <h4 className="font-bold group-hover:text-red-600 line-clamp-2">{item.title}</h4>
                      <p className="text-red-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.i8h2.net/gR6r1g" target="_blank" className="text-red-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorontoFCPage;