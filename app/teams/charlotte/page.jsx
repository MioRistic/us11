'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const CharlotteFCPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Trending Players
  const players = [
    { 
      name: 'Ashley Westwood', 
      image: 'https://www.qcnews.com/wp-content/uploads/sites/109/2024/05/GettyImages-2152987244.jpg', 
      slug: 'westwood' 
    },
    { 
      name: 'Tim Ream', 
      image: 'https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2175381685-1024x721.jpg', 
      slug: 'ream' 
    },
    { 
      name: 'Liel Abada', 
      image: 'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_900/v1/media/gmg/XYANLDQB2NDYPCMTNDRVN75J64.jpg?_a=DAJAUVWIZAAA', 
      slug: 'abada' 
    },
  ];

  // News Posts
  const newsPosts = [
     {
  "id": 167,
  "title": "Wilfried Zaha Plays Final Game for Charlotte FC as Loan Spell Ends",
  "author": "Mio Ristić",
  "date": "May 24, 2026",
  "excerpt": "Wilfried Zaha officially announced his departure from Charlotte FC after an 18-month MLS spell that included 13 goals, 14 assists, and a major role in the club’s rise into playoff contention.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2204351245/crop/MM5DGNZVHA5DEMJRGQ5G433XMU5DAORRHE3A====/GettyImages-2204351245.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "wilfried-zaha-charlotte-fc-departure"
},
     
  ];

  // Blog Posts
  const blogPosts = [
     {
  "id": 1001,
  "title": "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
  "author": "Mio Ristić",
  "date": "February 11, 2026",
  "excerpt": "MLS jerseys in 2026 are more than kits — they’re fashion, identity, and culture. A deep dive into the designs fans love (and hate) the most.",
  "imageUrl": "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
  "slug": "mls-jerseys-2026"
},
  ];

  const shopItems = [
    { 
      id: 1, 
      title: "Men's Charlotte FC adidas Black 2025 Fortress Kit Authentic Jersey", 
      price: "$149.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-authentic-jersey_ss5_p-202652657+u-mdhtpdooxasksaeiwgao+v-ritrwloqfmd2i3vwm2la.jpg?_hv=2&w=900", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-authentic-jersey/t-87206043+p-80778017490811+z-8-3047227005"
    },
    { 
      id: 2, 
      title: "Men's Charlotte FC adidas Black 2025 Fortress Kit Authentic Custom Jersey", 
      price: "$194.99", 
      imageUrl: "https://images.footballfanatics.com/charlotte-fc/mens-adidas-black-charlotte-fc-2025-fortress-kit-authentic-custom-jersey_ss5_p-202709828+u-86hwyp7swiq49ezamamx+v-0bpamjdnovafflrwqzgl6y.jpg?_hv=2&w=900", 
      link: "https://www.mlsstore.com/en/charlotte-fc/mens-charlotte-fc-adidas-black-2025-fortress-kit-authentic-custom-jersey/t-65759376+p-35882429775515+z-8-155414585"
    },
  ];

  const squad = {
  goalkeepers: [
      "Kristijan Kahlina",
      "Tyler Miller",
      "Isaac Walker"
    ],
    defenders: [
      "Tim Ream",
      "Andrew Privett",
      "Nathan Byrne",
      "Harry Toffolo",
      "Henry Kessler",
      "David Schnegg",
      "Adilson Malanda",
      "Andrew Johnson",
      "Will Cleary",
      "Jack Neeley",
      "Morrison Agyemang"
    ],
    midfielders: [
      "Ashley Westwood",
      "Brandt Bronico",
      "Pep Biel",
      "Luca de la Torre",
      "Djibril Diani",
      "Baye Coulibaly",
      "Aron John"
    ],
    attackers: [
      "Archie Goodwin",
      "Idan Toklomati",
      "Wilfried Zaha",
      "Liel Abada",
      "Kerwin Vargas",
      "Tyger Smalls",
      "Nimfasha Berchimas",
      "Rodolfo Aloko",
      "Brian Romero"
    ],
  };

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero Section */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image 
          src="/charlotte.png" 
          alt="Charlotte FC" 
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
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Charlotte_FC_logo.svg/330px-Charlotte_FC_logo.svg.png"
                  alt="Charlotte FC Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  Charlotte FC
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  Major League Soccer • Bank of America Stadium
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
                  ${activeTab === tab ? 'text-blue-500' : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
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
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>Charlotte Football Club</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Crown</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>December 17, 2019</dd></div>
                  <div><dt className="font-bold text-gray-600">Stadium</dt><dd>Bank of America Stadium, Charlotte</dd></div>
                  <div><dt className="font-bold text-gray-600">Capacity</dt><dd>74,867</dd></div>
                  <div><dt className="font-bold text-gray-600">Owner</dt><dd>David Tepper</dd></div>
                  <div><dt className="font-bold text-gray-600">Head Coach</dt><dd>Dean Smith</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {players.map((player) => (
                    <Link key={player.slug} href={`/teams/charlotte/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image src={player.image} alt={player.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-blue-600">{player.name}</h3>
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
                          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Charlotte FC News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {newsPosts.map((post) => (
                  <Link key={post.id} href={`/news/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Charlotte FC Blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-8 text-[#020617]">Charlotte FC Squad 2026</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.attackers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SHOP TAB */}
          {activeTab === 'shop' && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaShoppingBag className="text-4xl text-blue-600" />
                <h2 className="text-3xl font-black text-[#020617]">Charlotte FC Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support Charlotte FC by shopping through our links. 
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
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-blue-600 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://mlsstore.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg"
                >
                  View full store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Plan Your Visit</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/GKOvKB" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets Now
              </a>
              <a href="https://expedia.com/affiliate/C0Hi9ST" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Bank of America Stadium
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
                      <h4 className="font-bold group-hover:text-blue-600 line-clamp-2">{item.title}</h4>
                      <p className="text-blue-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://ticketnetwork.lusg.net/GKOvKB" target="_blank" className="text-blue-600 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharlotteFCPage;