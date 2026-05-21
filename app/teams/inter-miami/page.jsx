'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const InterMiamiPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Featured players shown on overview
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', path: 'messi' },
    { name: 'Luis Suárez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', path: 'suarez' },
  ];

  // News Posts
  const newsPosts = [
    {
      id: 164,
      title: "MLS Matchday 14 Recap: Chaos Before the Curtain Falls – Sarver’s Legend, Messi’s Nu Breakthrough & More",
      author: "Mio Ristić",
      date: "May 18, 2026",
      excerpt: "MLS Matchday 14 delivered pure chaos before the World Cup break: Sam Sarver’s unforgettable celebration, Messi’s first victory at Nu Stadium, FC Cincinnati’s 98th-minute madness and a coaching change in Columbus.",
      imageUrl: "https://assets.goal.com/images/v3/blt98069fadcc2b1e00/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-17T192244.735.png?auto=webp&format=pjpg&width=1920&quality=60",
      slug: "mls-matchday-14-2026"
    },
    {
      id: 159,
      title: "Noah Allen to Olympiacos? The Greek-American Prospect Facing a Defining Career Decision",
      author: "Mio Ristić",
      date: "May 14, 2026",
      excerpt: "Olympiacos are reportedly interested in Inter Miami defender Noah Allen, but a move to Greece may come with major risks for the promising 22-year-old prospect.",
      imageUrl: "https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2148224320-scaled.jpg",
      slug: "noah-allen-olympiacos"
    },
  ];

  // Blog Posts
  const blogPosts = [
    {
      id: 1010,
      title: "2000s Football Nostalgia Meets Formula 1 Glamour: Adidas and Audi Drop a Miami Collection That Actually Works",
      author: "Mio Ristić",
      date: "May 2, 2026",
      excerpt: "Adidas and Audi team up with Inter Miami for a limited F1 Miami Collection that blends 2000s football kits with modern Formula 1 style.",
      imageUrl: "https://www.audif1.com/cms/api/media/file/audif1_2026_miami_collection_messi_teaser_01-1012x1350.webp",
      slug: "adidas-audi-miami-collection-2026"
    },
  ];

  const shopItems = [
    {
      id: 1,
      title: "Men's Lionel Messi adidas Light Pink 2025 Euforia Authentic Jersey",
      imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340',
      link: 'https://mlsstore.i8h2.net/XmNXL3',
      price: '$194.99',
    },
  ];

  const squad = {
    goalkeepers: ["Luis Barraza", "Rocco Ríos Novo", "Dayne St. Clair"],
    defenders: [
      "Gonzalo Luján", "Tomás Avilés", "Sergio Reguilón", "Facundo Mura",
      "Micael", "Ian Fray", "Noah Allen", "Yannick Bright", "Ian Boatwright"
    ],
    midfielders: [
      "Rodrigo De Paul", "Telasco Segovia", "David Ayala", 
      "Benjamín Cremaschi", "David Ruiz", "Ariel Shaw"
    ],
    attackers: [
      "Luis Suárez", "Lionel Messi", "Germán Berterame", 
      "Tadeo Allende", "Mateo Silvetti"
    ],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero Section */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image 
          src="https://i.ibb.co/t6QwwQy/Interlogo.png" 
          alt="Inter Miami CF" 
          fill 
          className="object-cover" 
          priority 
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/40" />

        <div className="absolute inset-0 flex items-end pb-10 md:pb-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-5 md:gap-6 mb-4">
              <div className="w-24 h-24 md:w-40 md:h-40 relative bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/330px-Inter_Miami_CF_logo.svg.png"
                  alt="Inter Miami CF Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Inter Miami CF
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Nu Stadium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab ? 'text-pink-500' : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

        <div className="lg:col-span-2 space-y-10 md:space-y-12">

          {activeTab === 'overview' && (
            <>
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Club Overview</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Club Internacional de Fútbol Miami</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Herons, Vice City</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>January 29, 2018</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Nu Stadium, Miami</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>~25,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Owners</dt><dd>David Beckham, Jorge Mas, Jose Mas</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Guillermo Hoyos</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">The Rise of Inter Miami</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>Inter Miami CF has become one of the most talked-about clubs in world football thanks to global superstars like Lionel Messi, Luis Suárez, and Rodrigo De Paul.</p>
                  <p>Under head coach Guillermo Hoyos, the team continues to compete at the highest level in MLS.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Key Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {players.map((player) => (
                    <Link key={player.path} href={`/teams/inter-miami/${player.path}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-pink-500">{player.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {newsPosts.map((post) => (
                    <Link key={post.id} href={`/news/${post.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-56">
                          <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 line-clamp-2">{post.title}</h3>
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

          {/* NEWS TAB */}
          {activeTab === 'news' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Inter Miami News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {newsPosts.map((post) => (
                  <Link key={post.id} href={`/news/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                        <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* BLOG TAB */}
          {activeTab === 'blog' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Inter Miami Blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                        <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SQUAD TAB */}
          {activeTab === 'squad' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Inter Miami CF Squad 2026</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-pink-500 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-pink-500 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-pink-500 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-pink-500 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.attackers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-500 mb-4 border-b border-gray-200 pb-2">Head Coach</h3>
                <div className="bg-gray-50 px-5 py-4 rounded-xl font-medium inline-block">
                  Guillermo Hoyos
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-pink-500" />
                <h2 className="text-3xl font-black text-[#020617]">Inter Miami Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Inter Miami CF by shopping through our links. 
                Every purchase helps keep this site running.
              </p>

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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-pink-500 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-pink-500">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.i8h2.net/k4MJ6L" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-pink-500 font-bold hover:underline text-lg"
                >
                  View full store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-pink-600 to-pink-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/qzmP9b" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets Now
              </a>
              <a href="https://expedia.com/affiliate/YUVcU0F" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Nu Stadium
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
                      <h4 className="font-bold group-hover:text-pink-500 line-clamp-2">{item.title}</h4>
                      <p className="text-pink-500 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.i8h2.net/k4MJ6L" target="_blank" className="text-pink-500 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterMiamiPage;