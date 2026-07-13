'use client';import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  imagePosition?: string;
}const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
    { name: 'Heung-Min Son', image: 'https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/lafc/son' },
    { name: 'Thomas Muller', image: 'https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/vancouver-whitecaps/muller' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/teams/inter-miami/suarez' },
    { name: 'Christian Pulisic', image: 'https://assets.goal.com/images/v3/blt033093b0707b1c17/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2279107115.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/usa-national-team/pulisic' },
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/teams/la-galaxy/reus' },
    { name: 'Jordan Morris', image: 'https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: '/teams/seattle-sounders/morris' },
  ];  return (
    
    <div className="max-w-6xl mx-auto py-12 px-4">
      
      {/* TRENDING PLAYERS - Horizontal Slider */}<div className="max-w-7xl mx-auto py-12 px-4">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-2.5px] text-center mb-10 text-[#020617]">
    Trending Players
  </h2>

  

  <div className="overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
    <div className="flex gap-6 md:gap-8 w-max">
      {players.map((player) => (
        <Link
          key={player.name}
          href={player.link}
          className="group flex-shrink-0 w-[260px] sm:w-[280px] snap-start"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
            <div className="aspect-[4/3] relative">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
        </div>

        <div className="p-5 text-center">
          <h3 className="text-xl font-black tracking-tight text-[#020617]">
            {player.name}
          </h3>
        </div>
      </div>
    </Link>
  ))}
</div>  </div>

  <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
    ← Swipe to see more →
  </p>
</div>
    </div>
  );
};
const blogPosts: Post[] = [
  {
  "id": 203,
  "title": "Benjamin Cremaschi’s Move to Parma Made Permanent: The Full Story of the American Midfielder’s European Journey",
  "author": "Mio Ristić",
  "date": "July 13, 2026",
  "excerpt": "Parma have triggered the €4 million buy option to make Benjamin Cremaschi’s move from Inter Miami permanent. The young American midfielder heads to Serie A for a fresh start.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-OyYFOezlJ99SwImyDlE2hrcELC06dVliqAIp20QYleTdBhmwUWhCH51&s=10",
  "link": "news/cremaschi-parma-permanent"
},
  {
  "id": 202,
  "title": "Antoine Griezmann Officially Arrives in Orlando: Goal and Assist in Debut as Lions Crush Tampa Bay 6-0",
  "author": "Mio Ristić",
  "date": "July 9, 2026",
  "excerpt": "Antoine Griezmann scores and assists in his Orlando City debut as the Lions thrash Tampa Bay Rowdies 6-0 in a friendly at Inter&Co Stadium.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2284675878/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORYGU======/GettyImages-2284675878.jpg",
  "link": "news/griezmann-orlando-debut"
},
  {
  "id": 201,
  "title": "Messi's Argentina Advance to World Cup Semifinals After Extra-Time Win Over Switzerland",
  "author": "Mio Ristić",
  "date": "July 12, 2026",
  "excerpt": "Argentina defeat Switzerland 3-1 in extra time to reach the 2026 World Cup semifinals. Messi breaks another assist record as La Albiceleste set up a clash with England.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2285704047/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORTGA======/GettyImages-2285704047.jpg",
  "link": "news/messi-argentina-semifinals-switzerland"
},
    
  
];

const usmntPosts: Post[] = [
  {
  "id": 198,
  "title": "FIFA’s Shocking Decision to Let Balogun Play vs Belgium Ignites Major Controversy at World Cup 2026",
  "author": "Mio Ristić",
  "date": "July 5, 2026",
  "excerpt": "FIFA has allowed Folarin Balogun to play against Belgium despite receiving a red card vs Bosnia. The Royal Belgian FA has issued a strong statement, sparking widespread controversy.",
  "imageUrl": "https://assets.goal.com/images/v3/blt68d4a08caa1ea2fa/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DAORWGQ3A====/GettyImages-2240353608.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "news/fifa-balogun-controversy-belgium"
},
  {
  "id": 195,
  "title": "USMNT Advance to World Cup Round of 16 with 2-0 Win Over Bosnia and Herzegovina – Balogun Shines Before Controversial Red Card",
  "author": "Mio Ristić",
  "date": "July 2, 2026",
  "excerpt": "The United States defeated Bosnia and Herzegovina 2-0 to advance to the Round of 16. Folarin Balogun scored but was controversially sent off, while Malik Tillman sealed the win with a stunning free-kick.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2284249560/crop/MM5DINJSGI5DENJUGQ5G433XMU5DAORSGM3A====/GettyImages-2284249560.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "news/usmnt-advance-to-round-of-16-bosnia"
},
  {
  "id": 1027,
  "title": "USA vs Bosnia and Herzegovina Tickets: How to Buy Round of 32 World Cup Tickets + Match Preview",
  "author": "Mio Ristić",
  "date": "June 29, 2026",
  "excerpt": "The United States face Bosnia and Herzegovina in the Round of 32 at San Francisco Bay Area Stadium. Everything you need to know about tickets, prices, and the match.",
  "imageUrl": "https://i.ibb.co/N6sw1JtY/Untitled-design-9.png",
  "link": "blog/usa-vs-bosnia-herzegovina-round-of-32"
},
 
  
   
];
  


const jerseysBlogPosts: Post[] = [
     {
  "id": 1015,
  "title": "Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying",
  "author": "Mio Ristić",
  "date": "June 16, 2026",
  "excerpt": "Which 2026 World Cup jerseys actually look good on the street? From Germany’s clean 1990-inspired classic to Colombia’s vibrant yellow and New Zealand’s elegant black — here’s our definitive ranking of the most wearable kits for everyday life.",
  "imageUrl": "https://assets.goal.com/images/v3/blteb5ae4bd28752ec3/adidas%20FIFA%20World%20Cup%202026%20kit%20-%20Germany.png?auto=webp&format=pjpg&width=1920&quality=60",
  "link": "blog/best-world-cup-2026-street-style-jerseys"
},
  {
  "id": 1014,
  "title": "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy",
  "author": "Mio Ristić",
  "date": "May 11, 2026",
  "excerpt": "Mexico and adidas unveiled a bold new all-black 2026 third kit that celebrates the nation’s World Cup legacy with premium design details and deep cultural identity.",
  "imageUrl": "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1440/723904.jpg",
  "link": "blog/mexico-adidas-third-kit-2026"
},
 
  {
    id: 1011,
    title: "Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth (and a Major Shift)",
    author: "Mio Ristić",
    date: "May 5, 2026",
    excerpt: "Fanatics claims the USMNT 2026 kit is currently outselling Mexico in the United States. We analyze the data, the Messi effect, and what it really means ahead of the World Cup.",
    imageUrl: "https://i.ibb.co/Gfk3qjXJ/Untitled-design-4.png",
    link: "blog/mexico-usa-jersey-sales-2026",
  },
  

];const hallOfFamePosts: Post[] = [
  {
    id: 87,
    title: "Hall of Fame: Thierry Henry — The King Who Brought Class to New York",
    author: "Mio Ristić",
    date: "April 12, 2026",
    excerpt: "From Arsenal and Barcelona to New York Red Bulls — how Thierry Henry elevated MLS with elegance, intelligence and leadership.",
    imageUrl: "https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=1200&quality=80",
    imagePosition: "center",
    link: "/blog/mls-hall-of-fame/thierry-henry",
  },
  {
    id: 86,
    title: "Hall of Fame: David Beckham — The Player Who Changed Football’s Geography",
    author: "Mio Ristić",
    date: "January 6, 2026",
    excerpt: "David Beckham's move to LA Galaxy in 2007 transformed MLS, elevating the league’s global profile and leaving a lasting legacy.",
    imageUrl: "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp",
    imagePosition: "10% 5%",
    link: "/blog/mls-hall-of-fame/david-beckham",
  },
];const heroItems = [

 
 {
  "title": "USMNT World Cup Brief",
  "subtitle": "Daily updates from the 2026 FIFA World Cup",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/United_States_Soccer_Federation_logo.svg/960px-United_States_Soccer_Federation_logo.svg.png",
  "link": "/news/usmnt-world-cup-brief"
}, 
{
  "title": "Shop world cup 2026 jerseys",
  "subtitle": "",
  "image": "https://assets.goal.com/images/v3/bltc50f036015249aeb/adidas%20WC%20kits%20.jpg?format=pjpg&quality=60&auto=webp&width=1200",
  "link": "https://fanatics.93n6tx.net/L0RXVO",
   "target": "_blank"
}
 
 

 
 
];const staffPicks = [
  {
    name: "Antoine Griezmann - Orlando City",
    price: "Buy now",
    image: "https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-purple-orlando-city-sc-2025-perfect-storm-on-field-authentic-jersey_ss5_p-204033026+pv-1+u-hexo5oxtaqxkxng71go3+v-4wipfo65ii5bhl5wjrot.png?_hv=2&w=1018",
    link: "https://fanatics.93n6tx.net/B5P0rJ",
  },
  {
    name: "Lionel Messi - Argentina National Team",
    price: "Buy now",
    image: "https://fanatics.frgimages.com/argentina-national-team/mens-argentina-national-team-lionel-messi-adidas-white-fifa-x-world-cup-2026-home-on-field-authentic-jersey_ss5_p-203130492+u-4t5gbwgzj2qugoxbeefs+v-ib2spequ9pvuf4ixgrwz.jpg?_hv=2&w=600",
    link: "https://fanatics.93n6tx.net/Qj7Dya",
  },
  {
    name: "Lionel Messi - Inter Miami CF",
    price: "Buy now",
    image: "https://fanatics.frgimages.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2026-presagio-on-field-authentic-patch-jersey_ss5_p-203796622+u-tzaw5stbqxgry9ruqtuk+v-2zf36xgsuhqyjxgvc7tj.jpg?_hv=2&w=600",
    link: "https://fanatics.93n6tx.net/gRG1ZX",
  },
  {
    name: "Christian Pulisic - USMNT",
    price: "$134.99",
    image: "https://fanatics.frgimages.com/mens-nike-christian-pulisic-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203943392+u-eynkcl3yzghk7gpyutek+v-aljzxhr6ss6kqwnxjple.png?_hv=2&w=600",
    link: "https://fanatics.93n6tx.net/B5P0WW",
  },
  {
    name: "Son Heung-Min - LAFC",
    price: "$129.99",
    image: "https://fanatics.frgimages.com/lafc/mens-adidas-son-heung-min-black-lafc-2026-primary-kit-replica-jersey_ss5_p-203794818+pv-1+u-t6pntpj653pnuqjlbfh7+v-e7oz1xk1n4at2ey0mvab.png?_hv=2&w=1018",
    link: "https://fanatics.93n6tx.net/QYbyBx",
  },
  {
    name: "Jordan Morris - Seattle Sounders FC",
    price: "$114.99",
    image: "https://fanatics.frgimages.com/seattle-sounders-fc/mens-adidas-jordan-morris-rave-green-seattle-sounders-fc-2026-the-evergreen-state-kit-replica-jersey_ss5_p-203847562+u-anfboaotog9stddyjkqf+v-grwn5dj94tjvjqcdgeth.jpg?_hv=2&w=600",
    link: "https://fanatics.93n6tx.net/7XM5Ed",
  },
  {
    name: "Marco Reus - LA Galaxy",
    price: "$134.99",
    image: "https://fanatics.frgimages.com/la-galaxy/mens-adidas-marco-reus-white-la-galaxy-2026-the-velocity-kit-replica-jersey_ss5_p-203844369+u-ybmznn0anpqtcfobwzyl+v-yvewnw1vxaoj2m4lz3gg.png?_hv=2&w=600",
    link: "https://fanatics.93n6tx.net/1G7rXa",
  },
];/* ===================== HOME ===================== */export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);  /*  FIXED FORMSPREE */
  const [formState, formspreeSubmit] = useForm('xykodqab');  useEffect(() => {
    setMounted(true);
  }, []);  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    formspreeSubmit(e);
  };  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [mounted, heroItems.length]);  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroItems.length);  const currentItem = heroItems[currentIndex];  return (
    <>
      <article
        className="w-full min-h-screen bg-white text-[#020617]"
        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
      >
        <section suppressHydrationWarning className="relative h-[560px] md:h-[680px] lg:h-[760px] w-full">
          <Link href={currentItem.link}>
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-cover brightness-[0.62]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-2xl max-w-4xl">
                {currentItem.title}
              </h1>

          <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-xl">
            {currentItem.subtitle}
          </p>
        </div>
      </Link>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20 hidden md:flex">
        {heroItems.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative h-[3px] w-10 md:w-14 overflow-hidden rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
              suppressHydrationWarning
            >
              <div className="absolute inset-0 bg-gray-300/30 rounded-full" />
              {isActive && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black-400 to-white-600 rounded-full animate-progress"
                />
              )}
            </button>
            
          );
        })}
      </div>
      
      
    </section><div className="bg-white py-16">
      {/* Hero */}
      <div className=" md:-mx-6 lg:-mx-8 xl:-mx-0 bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
  This page contains affiliate links. When you purchase through the links provided, 
  <span className="text-zinc-700 font-medium"> US11 may earn a commission</span> 
  at no extra cost to you.
</div>
      
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-12 text-center">
      Staff Picks
    </h2>

<div className="overflow-x-auto pb-4 flex space-x-6">
  {staffPicks.map((shirt) => (
    <a
      key={`${shirt.name}-${shirt.link}`}
      href={shirt.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      <img
        src={shirt.image}
        alt={shirt.name}
        className="rounded-t-2xl h-72 w-full object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#020617] mb-3">{shirt.name}</h3>
        
        {/* Fanatics Logo umesto cene */}
        <div className="flex justify-center">
          <img 
            src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" 
            alt="Fanatics" 
            className="h-8 opacity-90" 
          />
        </div>
      </div>
    </a>
  ))}
</div>

<div className="flex justify-center mt-10">
  <a
    href="https://fanatics.93n6tx.net/Vx7PO6"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    View All Shirts
  </a>
</div>  </div>
</div>

    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">
          News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link href={post.link} key={post.id} className="h-full">
              <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                  <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/news"  className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105">
            Read More
          </Link>
        </div>
      </div>
    </div>

               

    {/* ==================== USMNT ON WORLD CUP ==================== */}
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">
          USMNT on World Cup
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usmntPosts.map((post) => (
            <Link href={post.link} key={post.id} className="h-full">
              <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                  <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link 
            href="/teams/usa-national-team" 
            className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            View All USMNT News
          </Link>
        </div>
      </div>
    </div>

    <TrendingPlayers />

    <div className="px-4 py-4">  <section className="max-w-7xl mx-auto w-full bg-[#0a0a0a] rounded-2xl overflow-hidden my-8 shadow-2xl border border-white/10">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      
  {/* IMAGE */}
  <div className="relative h-[240px] sm:h-[260px] md:h-[280px] lg:h-[340px] overflow-hidden">
    <img
      src="https://i.ibb.co/r23DDmSR/14cb010a-88e2-4289-8264-bb21b5baadcd.png"
      alt="US11 Daily Drill"
      className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110 object-center lg:object-top"
    />
  </div>

  {/* CONTENT */}
  <div className="px-7 py-8 lg:py-12 bg-[#0a0a0a] flex flex-col justify-center min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[340px]">

    <div className="mb-4 flex items-center gap-2">
      <Image
        src="/logo11.png"
        alt="US11 Logo"
        width={48}
        height={48}
        className="rounded-2xl"
      />
      <span className="text-white font-black text-3xl tracking-[-1px]">
        US11
      </span>
    </div>

    <h2 className="text-white text-2xl md:text-3xl font-black leading-tight tracking-tighter">
      Stay Updated with US
    </h2>

    <p className="text-gray-400 mt-3 text-sm leading-relaxed">
      Subscribe to our newsletter for daily updates on MLS,
      USMNT, transfers & soccer culture.
    </p>

   <form  action="https://formspree.io/f/xeorwale"
  method="POST"
  className="mt-6 flex flex-col sm:flex-row gap-3"
  suppressHydrationWarning>
  {/* Glavno polje */}
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    required
    className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-white/60 rounded-2xl px-5 py-3.5 text-sm outline-none text-white placeholder:text-gray-500"
    suppressHydrationWarning
  />  {/* Zaštita od spama (skriveno) */}
  <input 
    type="text" 
    name="_gotcha" 
    style={{ display: 'none' }} 
  />

  <button
    type="submit"
    className="cursor-pointer bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all font-bold text-white px-8 py-3.5 rounded-2xl text-sm tracking-wider whitespace-nowrap"
    suppressHydrationWarning
  >
    Subscribe
  </button>
</form>

{/* Success / Error poruke */}
{formState?.succeeded && (
  <p className="text-green-400 text-sm mt-3"> Successfully subscribed! Check your email.</p>
)}{formState?.errors && (
  <p className="text-red-400 text-sm mt-3">Error. Please try again.</p>
)}    <p className="text-gray-500 text-xs mt-4 leading-relaxed">
  By subscribing, you agree to receive US11 newsletter with MLS, USMNT, transfers and American soccer updates. 
  You can unsubscribe at any time.
</p>
  </div>
</div>  </section>
</div>

    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">
          Jersey blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jerseysBlogPosts.map((post) => (
            <Link href={post.link} key={post.id} className="h-full">
              <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: post.imagePosition || '50% 50%',
                    }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                  <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/blog/jerseys"  className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105">
            Read More
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">
          Let's talk about Legends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hallOfFamePosts.map((post) => (
            <Link href={post.link} key={post.id} className="h-full">
              <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: post.imagePosition || '50% 50%',
                    }}
                    className="group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition duration-300">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.author} | {post.date}</p>
                  <p className="text-gray-700 mt-2 flex-grow">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/blog/mls-hall-of-fame"  className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105">
            Read More
          </Link>
        </div>
      </div>
    </div>
    {/* OFFICIAL PARTNERS / COLLABS SECTION */}
<div className="bg-white py-12 border-t border-b">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-center text-3xl font-bold tracking-tight mb-8 text-[#020617]">
        Affiliates
    </h2>

    <div className="overflow-x-auto pb-6 scrollbar-hide">
      <div className="flex gap-8 md:gap-12 justify-center items-center min-w-max">

          {/* Fanatics */}
        <div className="flex flex-col items-center group">
  <a 
    href="https://fanatics.93n6tx.net/qWyyEj" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
      <img
        src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg"
        alt="Fanatics"
        className="h-12 grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
  </a>
</div>
          {/* MLS */}
        <div className="flex flex-col items-center group">
  <a 
    href="https://mlsstore.i8h2.net/9VEEM0" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
        alt="MLS"
        className="h-12 grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
  </a>
</div>

       {/* Ticket Network */}
        <div className="flex flex-col items-center group">
  <a 
    href="https://ticketnetwork.lusg.net/n4yy2o" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
      <img
        src="https://image.pitchbook.com/oh2B6dUL35JJWowDTTX4JutnVAI1659528454068_200x200"
        alt="Ticket Network"
        className="h-18 grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
  </a>
</div>
      

       {/* Expedia */}
        <div className="flex flex-col items-center group">
  <a 
    href="https://www.expedia.com/Mercedes-Benz-Stadium-Hotels.0-l553248633992329628-0.Travel-Guide-Filter-Hotels?clickref=1110l3VMB7b4&affcid=US.DIRECT.PHG.1100l424389.1100l68075&ref_id=1110l3VMB7b4&my_ad=AFF.US.DIRECT.PHG.1100l424389.1100l68075&afflid=1110l3VMB7b4&affdtl=PHG.1110l3VMB7b4.PZmW8eyzcc" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Expedia_Logo_2023.svg/500px-Expedia_Logo_2023.svg.png"
        alt="Expedia"
        className="h-4 grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
  </a>
</div>

      </div>
    </div>
  </div>
</div>
  </article>
</>  );
}

