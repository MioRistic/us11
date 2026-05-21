'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const NashvilleSCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Trending Players (bez Zimmermana)
  const players = [
    // { 
    //   name: 'Hany Mukhtar', 
    //   image: 'https://via.placeholder.com/400x300?text=Hany+Mukhtar', 
    //   slug: 'mukhtar' 
    // },
    // { 
    //   name: 'Sam Surridge', 
    //   image: 'https://via.placeholder.com/400x300?text=Sam+Surridge', 
    //   slug: 'surridge' 
    // },
  ];

  // News & Blog
  const newsPosts = [
    {
      id: 1,
      title: "Hany Mukhtar Leads Nashville SC to Victory",
      author: "Mio Ristić",
      date: "May 20, 2026",
      excerpt: "The star midfielder continues his excellent form as Nashville SC picks up crucial points.",
      imageUrl: "https://via.placeholder.com/600x400?text=Hany+Mukhtar",
      slug: "hany-mukhtar-form",
    },
  ];

  const blogPosts = [
    {
      id: 1001,
      title: "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
      author: "Mio Ristić",
      date: "February 11, 2026",
      excerpt: "MLS jerseys in 2026 are more than kits — they’re fashion, identity, and culture.",
      imageUrl: "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
      slug: "mls-jerseys-2026"
    },
  ];

  const shopItems = [
    {
      id: 1,
      title: "Men's Nashville SC adidas Black 2023 Man In Black Kit Replica Jersey",
      price: "$29.99",
      imageUrl: "https://images.footballfanatics.com/nashville-sc/mens-adidas-black-nashville-sc-2023-man-in-black-kit-replica-jersey_pi5273000_ff_5273770-9a9ba13f5c9c484b448a_full.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/EEOZO2"
    },
    {
      id: 2,
      title: "Men's Nashville SC adidas Navy 2025 The Heart Of Nashville Kit Authentic Jersey",
      price: "$149.99",
      imageUrl: "https://images.footballfanatics.com/nashville-sc/mens-adidas-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-jersey_ss5_p-202652669+pv-1+u-tubrc4uty1sqpacjsbkd+v-d3zk3qn3h7qiewlvzjmr.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/APnEAR"
    },
    {
      id: 3,
      title: "Men's Nashville SC Hany Mukhtar adidas Navy 2025 The Heart of Nashville Kit Authentic Player Jersey",
      price: "$194.99",
      imageUrl: "https://images.footballfanatics.com/nashville-sc/mens-adidas-hany-mukhtar-navy-nashville-sc-2025-the-heart-of-nashville-kit-authentic-player-jersey_ss5_p-202842105+pv-1+u-vjuqsbiaud732i7nbfvb+v-ec3xjacapglkkypdfcyp.jpg?_hv=2&w=900",
      link: "https://mlsstore.i8h2.net/nXP2Ax"
    }
  ];

  const squad = {
    goalkeepers: ["Joe Willis", "Xavier Valdez", "Brian Schwake"],
    defenders: [
      "Dan Lovitz", "Maxwell Woledzi", "Jeisson Palacios", "Jack Maher",
      "Isaiah LeFlore", "Thomas Williams", "Josh Bauer", "Jordan Knight"
    ],
    midfielders: [
      "Bryan Acosta", "Cristian Espinoza", "Patrick Yazbek", "Hany Mukhtar",
      "Charles-Emile Brunet", "Shak Mohammed", "Matthew Corcoran", "Alex Muyl"
    ],
    attackers: [
      "Sam Surridge", "Woobens Pacius", "Warren Madrigal"
    ],
    headCoach: "B. J. Callaghan"
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero Section */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Nashville.png"
          alt="Nashville SC"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Nashville_SC_logo%2C_2020.svg/960px-Nashville_SC_logo%2C_2020.svg.png"
                  alt="Nashville SC Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Nashville SC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • GEODIS Park
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
                  ${activeTab === tab ? 'text-amber-500' : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Nashville SC</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Boys in Gold</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>2018</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>GEODIS Park, Nashville</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>30,000</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>B. J. Callaghan</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {players.map((player) => (
                    <Link key={player.slug} href={`/teams/nashville-sc/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-amber-500">{player.name}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Nashville SC News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {newsPosts.map((post) => (
                  <Link key={post.id} href={`/news/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Nashville SC Blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Nashville SC Squad 2026</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.attackers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-500 mb-4 border-b border-gray-200 pb-2">Head Coach</h3>
                <div className="bg-gray-50 px-5 py-4 rounded-xl font-medium inline-block">
                  B. J. Callaghan
                </div>
              </div>
            </div>
          )}

          {/* SHOP TAB */}
          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-amber-500" />
                <h2 className="text-3xl font-black text-[#020617]">Nashville SC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support the Boys in Gold by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-amber-500 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-amber-500">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/K0ODJv" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets Now
              </a>
              <a href="https://expedia.com/affiliate/FavgXSh" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near GEODIS Park
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
                      <h4 className="font-bold group-hover:text-amber-500 line-clamp-2">{item.title}</h4>
                      <p className="text-amber-500 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://mlsstore.i8h2.net/QYn0oo" target="_blank" className="text-amber-500 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NashvilleSCPage;