'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTicketAlt, FaBed, FaShoppingBag } from 'react-icons/fa';

const USNationalTeamPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trendingPlayers = [
    { 
      name: 'Christian Pulisic', 
      image: 'https://assets.goal.com/images/v3/blt033093b0707b1c17/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2279107115.jpg?auto=webp&format=pjpg&width=1920&quality=60', 
      slug: 'pulisic' 
    },
    // { 
    //   name: 'Giovanni Reyna', 
    //   image: 'https://static01.nyt.com/athletic/uploads/wp/2020/05/08030603/Reyna-USA-scaled.jpg', 
    //   slug: 'gio' 
    // },
    // { 
    //   name: 'Weston McKennie', 
    //   image: 'https://cdn1.intermiami.news/uploads/52/2024/07/GettyImages-2160612538-1140x752.jpg', 
    //   slug: 'mckennie' 
    // },
    // { 
    //   name: 'Tyler Adams', 
    //   image: 'https://cdn1.leedsunited.news/uploads/5/2022/11/GettyImages-1244973081-1024x682.jpg', 
    //   slug: 'adams' 
    // },
  ];

  const newsPosts = [
    {
  "id": 184,
  "title": "USMNT vs Australia: A Statement Win, Then a Real Test of Ambition",
  "author": "Mio Ristić",
  "date": "June 19, 2026",
  "excerpt": "After the dominant 4-1 win over Paraguay, the USMNT faces a much tougher test against Australia in Seattle. Preview, stakes, and what a win would mean for Group D.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2269402545/crop/MM5DIOBRGY5DENZQHE5G433XMU5DAORRG44Q====/GettyImages-2269402545.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "usmnt-vs-australia-seattle"
},
    {
      id: 180,
      title: "USMNT Deliver the Statement They've Been Waiting For",
      author: "Mio Ristić",
      date: "June 13, 2026",
      excerpt: "The United States produced their most dominant World Cup opening performance in years with a convincing 4-1 win over Paraguay. A statement result that showed the USMNT finally looked like they belonged on the biggest stage.",
      imageUrl: "https://i.ibb.co/202b5vLP/usmnt.png",
      slug: "usmnt-deliver-the-statement-theyve-been-waiting-for"
    },
    {
      id: 177,
      title: "USMNT Establish World Cup Base at Great Park in Orange County Ahead of 2026",
      author: "Mio Ristić",
      date: "June 9, 2026",
      excerpt: "The United States Men's National Team has officially set up its 2026 FIFA World Cup base at Great Park in Orange County, creating a high-performance training hub ahead of the tournament under Mauricio Pochettino.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Championship_Soccer_Stadium_NW_View_2024-08-03.jpg/1280px-Championship_Soccer_Stadium_NW_View_2024-08-03.jpg",
      slug: "usmnt-camp"
    },
  {
    id: 176,
    title: "USMNT Fall to Germany in Final World Cup Send-Off, But Deliver Plenty of Reasons for Optimism",
    author: "Mio Ristić",
    date: "June 6, 2026",
    excerpt: "The USMNT closed out World Cup preparations with a competitive 2-1 loss to Germany, as Antonee Robinson’s stunning equalizer highlighted an encouraging performance ahead of the tournament.",
    imageUrl: "https://assets.goal.com/images/v3/bltf6b8614c13a32667/crop/MM5DINZUGA5DENRWGY5G433XMU5DAORSGQ3Q====/GettyImages-2280213323.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    slug: "usmnt-germany-world-cup-send-off"
  },
  {
    id: 174,
    title: "USMNT Builds World Cup Momentum With Bounce-Back 3-2 Win Over Senegal",
    author: "Mio Ristić",
    date: "May 31, 2026",
    excerpt: "Christian Pulisic ended his scoring drought, Ricardo Pepi impressed, and Folarin Balogun scored the winner as the USMNT came from behind to defeat Senegal 3-2 ahead of the 2026 FIFA World Cup.",
    imageUrl: "https://assets.goal.com/images/v3/getty-2279124591/crop/MM5DGMZTG45DCOBXG45G433XMU5DAORRGY4Q====/GettyImages-2279124591.jpg?auto=webp&format=pjpg&width=1920&quality=60",
    slug: "usmnt-senegal-world-cup-momentum"
  },
  ];

  const latestNews = newsPosts.slice(0, 3);

  const blogPosts = [
  {
    "id": 1016,
    "title": "USMNT vs Australia 2026 Tickets: How to Buy + Match Preview at Lumen Field",
    "author": "Mio Ristić",
    "date": "June 14, 2026",
    "excerpt": "Everything you need to know about the crucial USMNT vs Australia match on June 19, 2026 at Lumen Field in Seattle. Ticket prices, where to buy, stadium info, and full tactical preview.",
    "imageUrl": "https://i.ibb.co/pBqFXjG0/Untitled-design-7.png",
    "slug": "usmnt-vs-australia-2026-tickets"
  },
  {
    "id": 1011,
    "title": "Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth (and a Major Shift)",
    "author": "Mio Ristić",
    "date": "May 5, 2026",
    "excerpt": "Fanatics claims the USMNT 2026 kit is currently outselling Mexico in the United States. We analyze the data, the Messi effect, and what it really means ahead of the World Cup.",
    "imageUrl": "https://i.ibb.co/Gfk3qjXJ/Untitled-design-4.png",
    "slug": "mexico-usa-jersey-sales-2026"
  },
  {
    "id": 1007,
    "title": "USMNT Nike 2026 Kits Unveiled: Stripes Home & Stars Away for World Cup",
    "author": "Mio Ristić",
    "date": "March 16, 2026",
    "excerpt": "Nike and U.S. Soccer reveal bold 2026 World Cup kits: wavy red-white Stripes home jersey ($100 replica) and navy Stars away with metallic jacquard. Full breakdown, player input, and where to shop authentic & replica jerseys now.",
    "imageUrl": "https://assets.goal.com/images/v3/blt532e5fdd75fc8dc0/crop/MM5DIMBZGM5DEMZQGI5G433XMU5DAORYHA======/USSF_MNT_Kit_Launch_Vogue_mntjerseyshoot_11-09-25-124.jpg?auto=webp&format=pjpg&width=1200&quality=80",
    "slug": "usmnt-nike-2026-kits-unveiled"
  },
  {
    "id": 1006,
    "title": "Adidas USA 1994 Denim Graphic Collection: Iconic USMNT Throwback for World Cup 2026",
    "author": "Mio Ristić",
    "date": "March 16, 2026",
    "excerpt": "Adidas revives the legendary 1994 USMNT away jersey with its iconic denim wash and scattered stars – now available for $89.99 (jersey), $119.99 (track jacket), $59.99 (shorts), and more. Pure 1994 World Cup nostalgia meets 2026 World Cup hype – full collection in the shop!",
    "imageUrl": "https://assets.goal.com/images/v3/bltf53f7a9a05821020/crop/MM5DIMEBYGU5DEMRZHA5G433XMU5DAORYHE2Q====/U.S%20Denim%20Kit%20Collection%2024.jpg?auto=webp&format=pjpg&width=1200&quality=80",
    "slug": "adidas-usa-1994-denim-collection"
  }
];

  const shopItems = [
  {
    "title": "USMNT Nike 2026 Home Stadium Replica Jersey - White",
    "price": "$100.00",
    "imageUrl": "https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203965490+pv-1+u-it1nev0d5ux18upodbtk+v-bpkaffazj30helruvqt6.png?_hv=2&w=1018",
    "link": "https://fanatics.93n6tx.net/yZjqo2"
  },
  {
    "title": "USMNT Nike 2026 Away Stadium Replica Jersey - Blue",
    "price": "$100.00",
    "imageUrl": "https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2026-away-stadium-replica-jersey_ss5_p-203514504+pv-1+u-3lnsvwvcz0geopmzy99o+v-txw6kv4siuq2umlcfulb.png?_hv=2&w=1018",
    "link": "https://fanatics.93n6tx.net/KBO0Ex"
  },
  {
    "title": "USMNT Nike 2026 Home Match Authentic Jersey - White",
    "price": "$180.00",
    "imageUrl": "https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2026-home-match-authentic-jersey_ss5_p-203965489+pv-1+u-aliioamyxlhg5iej9hzk+v-kggopjettshp6mprc50s.jpg?_hv=2&w=1018",
    "link": "https://fanatics.93n6tx.net/jRQea5"
  },
  {
    "title": "USMNT Nike 2026 Away Match Authentic Jersey - Blue",
    "price": "$180.00",
     "imageUrl": "https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2026-away-match-authentic-jersey_ss5_p-203514503+pv-1+u-oxgtp6ywc4k8pq5jcy5i+v-vnawitjx8r8hbllij830.png?_hv=2&w=1018",
    "link": "https://fanatics.93n6tx.net/aNjODZ"
  },
  {
    "title": "Christian Pulisic USMNT Nike 2026 Home Stadium Replica Jersey - White",
    "price": "$135.00",
    "imageUrl": "https://fanatics.frgimages.com/usmnt/mens-nike-christian-pulisic-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203943392+pv-1+u-eynkcl3yzghk7gpyutek+v-oe4mlrgn8nxeyhfoxxdc.png?_hv=2&w=1018",
    "link": "https://fanatics.93n6tx.net/X4GmEa"
  },
  {
    "title": "adidas Youth USA 1994 Denim Graphic Fashion Jersey - Blue",
    "price": "$70.00",
    "imageUrl": "https://fanatics.frgimages.com/usmnt/youth-adidas-blue-usa-1994-denim-graphic-fashion-jersey_ss5_p-203132704+pv-1+u-rl1sbzpxqeqvfwdt6pi5+v-xgmw4arjmafopvf3i1ig.jpg?_hv=2&w=1018",
    "link": "https://fanatics.93n6tx.net/0Gy9zV"
  }
];

const squad = {
  goalkeepers: [
    "Matt Turner",
    "Matt Freese",
    "Chris Brady"
  ],
  defenders: [
    "Sergiño Dest",
    "Chris Richards",
    "Antonee Robinson",
    "Auston Trusty",
    "Miles Robinson",
    "Tim Ream",
    "Alex Freeman",
    "Max Arfsten",
    "Mark McKenzie",
    "Joe Scally"
  ],
  midfielders: [
    "Tyler Adams",
    "Giovanni Reyna",
    "Weston McKennie",
    "Sebastian Berhalter",
    "Cristian Roldan",
    "Malik Tillman"
  ],
  attackers: [
    "Ricardo Pepi",
    "Christian Pulisic",
    "Brenden Aaronson",
    "Haji Wright",
    "Folarin Balogun",
    "Timothy Weah",
    "Alejandro Zendejas"
  ]
};

  return (
    <div className="bg-white min-h-screen text-[#0d1117]">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[620px] bg-gradient-to-b from-black/70 to-black/90 overflow-hidden">
        <Image
          src="/Usa.png"
          alt="USA National Team"
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/United_States_Soccer_Federation_logo.svg/330px-United_States_Soccer_Federation_logo.svg.png"
                  alt="USA National Team Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl">
                  USA National Team
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-1 font-medium">
                  United States Men's National Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Tamnoplava boja (kao US dres) */}
      <div className="bg-[#020617] text-white sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-6 md:gap-10 py-4 whitespace-nowrap scrollbar-hide">
            {['overview', 'news', 'blog', 'squad', 'shop'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`font-bold text-base md:text-lg pb-2 transition relative flex-shrink-0
                  ${activeTab === tab 
                    ? 'text-blue-700' 
                    : 'text-white/80 hover:text-white'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"></span>
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
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Team Information</h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
                  <div><dt className="font-bold text-gray-600">Full Name</dt><dd>United States Men's National Team</dd></div>
                  <div><dt className="font-bold text-gray-600">Nickname</dt><dd>The Yanks, Stars and Stripes</dd></div>
                  <div><dt className="font-bold text-gray-600">Founded</dt><dd>1913</dd></div>
                  <div><dt className="font-bold text-gray-600">Manager</dt><dd>Mauricio Pochettino</dd></div>
                  <div><dt className="font-bold text-gray-600">Confederation</dt><dd>CONCACAF</dd></div>
                  <div><dt className="font-bold text-gray-600">FIFA Ranking</dt><dd>#15 (recent)</dd></div>
                </dl>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">The Stars and Stripes on the World Stage</h2>
                <div className="prose max-w-none text-lg text-gray-800">
                  <p>The United States Men's National Team (USMNT) has a long and growing history in international soccer. With consistent participation in the FIFA World Cup and strong performances in the CONCACAF Gold Cup, the team continues to rise on the global stage.</p>
                  <p>Led by world-class talents such as Christian Pulisic, Giovanni Reyna, Weston McKennie, and Tyler Adams, the USMNT plays an exciting, high-pressing style and is developing one of the most promising young generations in its history.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 text-[#020617]">Trending Players</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {trendingPlayers.map((player) => (
                    <Link key={player.slug} href={`/teams/usa-national-team/${player.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-64">
                          <Image 
                            src={player.image} 
                            alt={player.name} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            unoptimized 
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg group-hover:text-blue-700">{player.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-black text-[#020617]">Latest News</h2>
                  <Link href="#" onClick={(e) => { e.preventDefault(); setActiveTab('news'); }} className="text-blue-700 font-bold hover:underline text-base">
                    View All News →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                  {latestNews.map((post, index) => (
                    <Link key={post.id} href={`/news/${post.slug}`} className="group">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col md:flex-row">
                        <div className="relative w-full md:w-64 h-56 md:h-auto flex-shrink-0">
                          <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-6 flex flex-col justify-center flex-1">
                          <div className="inline-flex items-center mb-3">
                            <span className="text-xs font-bold text-white bg-blue-700 px-3 py-1 rounded-full">Featured Article</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-700 line-clamp-2">{post.title}</h3>
                          <p className="text-sm text-gray-500 mb-4">{post.author} • {post.date}</p>
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
              <h2 className="text-3xl font-black mb-6 text-[#020617]">All News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {newsPosts.map((post) => (
                  <Link key={post.id} href={`/news/${post.slug}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                      <div className="relative h-56">
                        <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 line-clamp-2">{post.title}</h3>
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
              <h2 className="text-3xl font-black mb-6 text-[#020617]">Blog</h2>
              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                        <div className="relative h-56">
                          <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 line-clamp-2">{post.title}</h3>
                          <p className="text-sm text-gray-500 mb-3">{post.author} • {post.date}</p>
                          <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-12 rounded-2xl text-center">
                  <p className="text-lg text-gray-600">Coming soon! Blog articles will be available here.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'squad' && (
            <div>
              <h2 className="text-3xl font-black mb-8 text-[#020617]">USMNT Squad</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Goalkeepers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.goalkeepers.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Defenders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.defenders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Midfielders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {squad.midfielders.map((name, i) => (
                    <div key={i} className="bg-gray-50 px-5 py-4 rounded-xl font-medium">{name}</div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">Attackers</h3>
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
                <FaShoppingBag className="text-4xl text-blue-700" />
                <h2 className="text-3xl font-black text-[#020617]">USMNT Shop</h2>
              </div>

              <p className="text-lg text-gray-600 mb-10">
                Support the USMNT by shopping through our links. 
                Every purchase helps us keep this site running and bring you better content.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {shopItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="relative h-64 bg-gray-50 p-6">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title} 
                        fill 
                        className="object-contain group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-blue-700 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-blue-700">{item.price}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://fanatics.93n6tx.net/YVbRkRgit status" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline text-lg"
                >
                  View full USMNT store →
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-black mb-6">Support the Yanks</h3>
            <div className="space-y-4">
              <a href="https://ticketnetwork.lusg.net/GbR7W9" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaTicketAlt /> Buy Tickets
              </a>
              <a href="https://expedia.com/affiliate/npW1Cmw" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition text-center justify-center">
                <FaBed /> Hotels Near Match Venues
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-black mb-6 text-[#020617]">Official Shop</h3>
            <div className="space-y-6">
              {shopItems.slice(0, 4).map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-blue-700 line-clamp-2 text-sm">{item.title}</h4>
                      <p className="text-blue-700 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="https://fanatics.93n6tx.net/YVbRkR" target="_blank" className="text-blue-700 font-bold hover:underline">
                View Full Shop →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USNationalTeamPage;