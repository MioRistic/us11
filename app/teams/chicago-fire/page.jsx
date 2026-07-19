'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const ChicagoFirePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Trending Players
  const players = [
      { 
      name: 'Robert Lewandowski', 
      image: 'https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60', 
      slug: 'lewandowski' 
    },
    { 
      name: 'Chris Mueller', 
      image: 'https://wgntv.com/wp-content/uploads/sites/5/2023/02/gettyimages-1416710153-594x594-1.jpg', 
      slug: 'mueller' 
    },
   
   
  ];

  // News Posts
  const newsPosts = [
    {
      id: 73,
      title: "Chicago Fire Blaze Past Orlando in Wild Card Clash",
      author: "Mio Ristić",
      date: "October 23, 2025",
      excerpt: "Chicago Fire defeated Orlando City 3–1 in the 2025 MLS Wild Card match, with Brian Gutiérrez and Hugo Cuypers leading the charge.",
      imageUrl: "https://cdn.wsn.com/filters:format(webp)/filters:no_upscale()/fit-in/1200x585/1745997572/chicago-fire-fc-vs-orlando-city-sc-2025-05-03.jpg",
      slug: "chicago-orlando-playoffs"
    },
  ];

  // Blog Posts
  const blogPosts = [
    {
      id: 1001,
      title: "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
      author: "Mio Ristić",
      date: "February 11, 2026",
      excerpt: "MLS jerseys in 2026 are more than kits — they’re fashion, identity, and culture. A deep dive into the designs fans love (and hate) the most.",
      imageUrl: "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
      slug: "mls-jerseys-2026"
    },
  ];

  const shopItems = [
    { 
      id: 1, 
      title: "Men's Chicago Fire adidas White 2024 A Kit For All Authentic Jersey", 
      price: "$74.99", 
      imageUrl: "https://images.footballfanatics.com/chicago-fire/mens-adidas-white-chicago-fire-2024-a-kit-for-all-authentic-jersey_ss5_p-201176885+u-gwgmhdijt3sgz33lnugg+v-lclsfgv1nhawxjk9nq4m.jpg?_hv=2&w=400", 
      link: "https://mlsstore.i8h2.net/ChicagoFireLink1" 
    },
    { 
      id: 2, 
      title: "Men's Chicago Fire adidas Light Blue 2025 The Municipal Kit Authentic Jersey", 
      price: "$149.99", 
      imageUrl: "https://images.footballfanatics.com/chicago-fire/mens-adidas-light-blue-chicago-fire-2025-the-municipal-kit-authentic-jersey_ss5_p-202652658+u-sotkmx7dodfovjiayqca+v-xrvfezkvr8tfwmltjrev.jpg?_hv=2&w=400", 
      link: "https://mlsstore.i8h2.net/ChicagoFireLink2" 
    },
  ];

 const squad = {
  goalkeepers: [
    "Chris Brady",
    "Jeffrey Gal",
    "Josh Cohen"
  ],
  defenders: [
    "Leonardo Barroso",
    "Jack Elliott",
    "Mbekezeli Mbokazi",
    "Sam Rogers",
    "Viktor Radojević",
    "Andrew Gutman",
    "Joel Waterman",
    "Jonathan Dean",
    "Christopher Cupps"
  ],
  midfielders: [
    "Anton Salétros",
    "Maren Haile-Selassie",
    "André Franco",
    "Robin Lod",
    "Mauricio Pineda",
    "Dylan Borso",
    "David Poreba",
    "Sergio Oregel",
    "Robert Turdean",
    "Djé D'Avilla"
  ],
  attackers: [
    "Chris Mueller",
    "Hugo Cuypers",
    "Philip Zinckernagel",
    "Puso Dithejane",
    "Jonathan Bamba",
    "Jason Shokalook",
    "Dean Boltz"
  ],
};

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero Section */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image 
          src="/Chicago.png" 
          alt="Chicago Fire FC" 
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chicago_Fire_logo%2C_2021.svg/960px-Chicago_Fire_logo%2C_2021.svg.png"
                  alt="Chicago Fire FC Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Chicago Fire FC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Soldier Field
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
                  ${activeTab === tab ? 'text-red-500' : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Chicago Fire Football Club</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Fire</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1997</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Soldier Field, Chicago</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>61,500</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>Joe Mansueto</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Gregg Berhalter</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {players.map((player) => (
                    <Link key={player.slug} href={`/teams/chicago-fire/${player.slug}`} className="group">
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

          {/* NEWS TAB */}
          {activeTab === 'news' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Chicago Fire News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

          {/* BLOG TAB */}
          {activeTab === 'blog' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Chicago Fire Blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
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

          {/* SQUAD TAB */}
          {activeTab === 'squad' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Chicago Fire FC Squad 2026</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.attackers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4 border-b border-gray-200 pb-2">Head Coach</h3>
                <div className="bg-gray-50 px-5 py-4 rounded-xl font-medium inline-block">
                  Gregg Berhalter
                </div>
              </div>
            </div>
          )}

          {/* SHOP TAB */}
          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-red-600" />
                <h2 className="text-3xl font-black text-[#020617]">Chicago Fire Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Chicago Fire by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-red-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-red-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline text-lg"
                >
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
              <a href="https://ticketnetwork.lusg.net/yqj7Zy" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets Now
              </a>
              <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Soldier Field
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
              <a href="https://mlsstore.com" target="_blank" className="text-red-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChicagoFirePage;