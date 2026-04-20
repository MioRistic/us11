'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
 



interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  imagePosition?: string;
}


const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
    { name: 'Heung-Min Son', image: 'https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/lafc/son' },
    { name: 'Thomas Muller', image: 'https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/vancouver-whitecaps/muller' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/teams/inter-miami/suarez' },
    { name: 'Christian Pulisic', image: 'https://media.bleacherreport.com/image/upload/v1642803493/c6tcjkzmqnb1iphp4dik.jpg', link: '/teams/usa-national-team/pulisic' },
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/teams/la-galaxy/reus' },
    { name: 'Jordan Morris', image: 'https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: '/teams/seattle-sounders/morris' },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-6xl font-bold text-[#020617] mb-8 text-center">Trending Players</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
        {players.map((player) => (
          <Link
            key={player.name}
            href={player.link}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">
              {player.name}
            </h3>
          </Link>
        ))}
      </div>

      <div ref={scrollRef} className="hidden lg:flex overflow-x-auto space-x-6 pb-4">
        {players.map((player) => (
          <Link
            key={player.name}
            href={player.link}
            className="flex-shrink-0 w-1/4 group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={player.image}
              alt={player.name}
              className="h-64 w-full object-cover mb-4 rounded-lg"
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className="text-lg font-semibold text-center text-[#020617]">{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

// News JSON
const blogPosts: Post[] = [
  {
  "id": 136,
  "title": "MLS Matchday 8 2026: Messi Magic in Denver, San Jose Shocks LAFC 4-1 and 56 Goals Across the League",
  "author": "Mio Ristić",
  "date": "April 20, 2026",
  "excerpt": "Messi scores twice to secure a 3-2 comeback win for Inter Miami in Denver, San Jose Earthquakes stun LAFC 4-1 at BMO Stadium, and 56 goals were scored across a chaotic Matchday 8.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2271966216/crop/MM5DEMBQGA5DCMJSGU5G433XMU5DAORWHE3A====/GettyImages-2271966216.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "link": "news/mls-matchday-8-2026"
},
  {
  "id": 135,
  "title": "The Messi Question: Why Argentina’s Greatest Still Hasn’t Decided on the 2026 World Cup",
  "author": "Mio Ristić",
  "date": "April 16, 2026",
  "excerpt": "With the 2026 World Cup just months away, Lionel Messi has still not confirmed whether he will participate. Scaloni gives him full freedom as the biggest question looms over Argentina.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2268176070/crop/MM5DGNBSGQ5DCOJSGY5G433XMU5DGORQ/GettyImages-2268176070.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "link": "news/messi-2026-world-cup-decision"
},
  
  {
  "id": 134,
  "title": "US Open Cup Round of 32 2026: Multiple Upsets as Four MLS Teams Eliminated",
  "author": "Mio Ristić",
  "date": "April 16, 2026",
  "excerpt": "One Knoxville SC stuns D.C. United on penalties, Colorado Springs Switchbacks beat Sporting KC 3-0, Louisville City eliminates Austin FC and more. Full recap from the 2026 US Open Cup Round of 32.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-1705295975/crop/MM5DGNRXG45DEMBWHA5G433XMU5DAORTGM2A====/GettyImages-1705295975.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "link": "news/us-open-cup-round-of-32-2026"
},


  

  
];

// Jerseys Blog JSON
const jerseysBlogPosts: Post[] = [
  {
  "id": 1008,
  "title": "Griezmann #7 Jersey Already Breaking Sales Records at Orlando City",
  "author": "Mio Ristić",
  "date": "April 11, 2026",
  "excerpt": "Antoine Griezmann's No.7 Orlando City jerseys (Home Perfect Storm & Sunken Treasure Away) went on sale immediately after the announcement and are already among the fastest-selling kits in club history. Full story, jersey details, and where to buy now.",
  "imageUrl": "https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg",
  "link": "blog/griezmann-orlando-city-jersey"
},
  {
  "id": 1007,
  "title": "USMNT Nike 2026 Kits Unveiled: Stripes Home & Stars Away for World Cup",
  "author": "Mio Ristić",
  "date": "March 16, 2026",
  "excerpt": "Nike and U.S. Soccer reveal bold 2026 World Cup kits: wavy red-white Stripes home jersey ($100 replica) and navy Stars away with metallic jacquard. Full breakdown, player input, and where to shop authentic & replica jerseys now.",
  "imageUrl": "https://assets.goal.com/images/v3/blt532e5fdd75fc8dc0/crop/MM5DIMBZGM5DEMZQGI5G433XMU5DAORYHA======/USSF_MNT_Kit_Launch_Vogue_mntjerseyshoot_11-09-25-124.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "link": "blog/usmnt-nike-2026-kits-unveiled"
},
  {
  "id": 1006,
  "title": "Adidas USA 1994 Denim Graphic Collection: Iconic USMNT Throwback for World Cup 2026",
  "author": "Mio Ristić",
  "date": "March 16, 2026",
  "excerpt": "Adidas revives the legendary 1994 USMNT away jersey with its iconic denim wash and scattered stars – now available for $89.99 (jersey), $119.99 (track jacket), $59.99 (shorts), and more. Pure 1994 World Cup nostalgia meets 2026 World Cup hype – full collection in the shop!",
  "imageUrl": "https://assets.goal.com/images/v3/bltf53f7a9a05821020/crop/MM5DIMBYGU5DEMRZHA5G433XMU5DAORYHE2Q====/U.S%20Denim%20Kit%20Collection%2024.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "link": "blog/adidas-usa-1994-denim-collection"
},
 

];

// Hall of Fame JSON
const hallOfFamePosts: Post[] = [
  {
  "id": 87,
  "title": "Hall of Fame: Thierry Henry — The King Who Brought Class to New York",
  "author": "Mio Ristić",
  "date": "April 12, 2026",
  "excerpt": "From Arsenal and Barcelona to New York Red Bulls — how Thierry Henry elevated MLS with elegance, intelligence and leadership.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "imagePosition": "center",
  "link": "blog/mls-hall-of-fame/thierry-henry"
},
  {
  id: 86,
  title: "Hall of Fame: David Beckham — The Player Who Changed Football’s Geography",
  author: "Mio Ristić",
  date: "January 6, 2026",
  excerpt: "David Beckham's move to LA Galaxy in 2007 transformed MLS, elevating the league’s global profile and leaving a lasting legacy.",
  imageUrl: "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp",
  imagePosition: "10% 5%", // sada TS ovo prepoznaje
  link: "blog/mls-hall-of-fame/david-beckham"
},
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroItems = [
//     {
//   "title": "Antoine Griezmann to Orlando City",
//   "subtitle": "World Cup winner agrees to join Orlando City on free transfer in July 2026 – 2+1 year deal, will wear No. 7 jersey",
//   "image": "https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg",
//   "link": "/news/griezmann-orlando-city-jersey"
// }
// ,
{
  "title": "Who Should Replace Javier Mascherano at Inter Miami?",
  "subtitle": "Ranking the Leading Candidates",
  "image": "https://assets.goal.com/images/v3/getty-2219044340/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2219044340.jpg?auto=webp&format=pjpg&width=1920&quality=60",
  "link": "/blog/inter-miami-new-coach"
},
{
  "title": "MLS Matchday 7 2026",
  "subtitle": "Portland stun LAFC 2-1, Colorado win 6-2, Red Bulls kids earn point in Miami – full recap and key takeaways",
  "image": "https://i.ibb.co/60w8D5L3/01kp2p36s2sbzft3tvfe.jpg",
  "link": "/news/mls-matchday-7-2026"
},
   {
  "title": "How Griezmann’s No. 7 Jersey Became Orlando City’s Fastest-Selling Kit",
  "subtitle": "Griezmann #7 already breaking sales records – Home Perfect Storm & Sunken Treasure Away kits",
  "image": "https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg",
  "link": "/blog/griezmann-orlando-city-jersey"
},
    {
  "title": "The Messi Question",
  "subtitle": "Why Argentina’s Greatest Still Hasn’t Decided on the 2026 World Cup",
  "image": "https://assets.goal.com/images/v3/getty-2268176070/crop/MM5DGNBSGQ5DCOJSGY5G433XMU5DGORQ/GettyImages-2268176070.jpg?auto=webp&format=pjpg&width=1920&quality=60",
  "link": "/news/messi-2026-world-cup-decision"
}
  ];

  const staffPicks = [
     {
      name: "Antoine Griezmann Orlando City SC adidas 2025 Perfect Storm On-Field Authentic Jersey - Purple",
      price: "$194.99",
      image: "https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-purple-orlando-city-sc-2025-perfect-storm-on-field-authentic-jersey_ss5_p-204033026+pv-1+u-hexo5oxtaqxkxng71go3+v-4wipfo65ii5bhl5wjrot.png?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/L0DV40"   // ← Zameni svojim affiliate linkom
    },
    {
      name: "Lionel Messi Inter Miami CF adidas Youth 2025 The Fortitude Kit Replica Player Jersey - Black",
      price: "$109.99",
      image: "https://fanatics.frgimages.com/inter-miami-cf/youth-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604870+pv-1+u-mgihjk9ywffxfwjtkbrl+v-5p4ohbnddixdv7gyxn48.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/Qj7Dya",
    },
    {
      name: "Lionel Messi Inter Miami CF adidas Originals Youth 2025 Third Replica Player Jersey - Blue",
      price: "$109.99",
      image: "https://fanatics.frgimages.com/inter-miami-cf/youth-adidas-originals-lionel-messi-blue-inter-miami-cf-2025-third-replica-player-jersey_ss5_p-202462095+pv-1+u-ynteuvrrspb5ek9qkbrx+v-klfcxvmjcrzrekd0j9ue.jpg?_hv=2&w=1018",
      link: "https://www.fanatics.com/mls/inter-miami-cf/lionel-messi-inter-miami-cf-adidas-originals-youth-2025-third-replica-player-jersey-blue/o-3555+t-21474441+p-2422463797239+z-9-3173708973?_ref=p-XLP:m-LD:pi-SOCCER_XLP_CAROUSEL:i-r0c2:po-2",
    },
    {
      name: "Christian Pulisic AC Milan Puma 2025/26 Home Replica Player Jersey - Red",
      price: "$134.99",
      image: "https://fanatics.frgimages.com/ac-milan/mens-puma-christian-pulisic-red-ac-milan-2025/26-home-replica-player-jersey_ss5_p-203151178+pv-1+u-er1btbt7mp3rzbnzbc8c+v-roiui1cm4q80cwatqrz9.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/4G4WLZ",
    },
    {
      name: "Lamine Yamal Barcelona Nike 2025/26 Replica Player Jersey - Blue",
      price: "$129.99",
      image: "https://fanatics.frgimages.com/barcelona/mens-nike-lamine-yamal-blue-barcelona-2025/26-replica-player-jersey_ss5_p-203284529+pv-1+u-egcn4pkk9yugwdxafypr+v-9yopybyijyh7ysmfxoob.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/4GX9G0",
    },
    {
      name: "Lamine Yamal Barcelona Nike Youth 2025/26 Away Stadium Replica Jersey - Gold",
      price: "$114.99",
      image: "https://fanatics.frgimages.com/barcelona/youth-nike-lamine-yamal-gold-barcelona-2025/26-away-stadium-replica-jersey_ss5_p-203336005+pv-1+u-5ha2rhncky9c4bvfgydm+v-umguisys7a3vzdlecyg8.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/K07b07",
    },
    {
      name: "Jude Bellingham Real Madrid adidas 2025/26 Home Replica Jersey - White",
      price: "$134.99",
      image: "https://fanatics.frgimages.com/real-madrid/mens-adidas-jude-bellingham-white-real-madrid-2025/26-home-replica-jersey_ss5_p-203133325+pv-1+u-8y839qsuhqg7lfvmfaes+v-lnvrnkzo9datsjzfrvja.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/EE4ZG4",
    },
    {
      name: "adidas 2026 FIFA World Cup Pro Soccer Ball",
      price: "$169.99",
      image: "https://fanatics.frgimages.com/fifa-world-cup-gear/adidas-2026-fifa-world-cup-pro-soccer-ball_ss5_p-202753932+pv-1+u-uioraphtnaputjyep8cm+v-5vubzbfxseqln05alds1.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/qzYMzb",
    },
    {
      name: "USMNT Nike 2025 Away Replica Jersey - Navy",
      price: "$104.99",
      image: "https://fanatics.frgimages.com/usmnt/mens-nike-navy-usmnt-2025-away-replica-jersey_ss5_p-202297013+pv-1+u-f9wal9lduvhdzyrsu8xw+v-p6kn5elckajdhcsojmpr.jpg?_hv=2&w=1018",
      link: "https://fanatics.93n6tx.net/9L0kL4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % heroItems.length);

  const currentItem = heroItems[currentIndex];

  return (
    <>
 {/* NOVI HERO SLIDER - tekst levo, linije ispod teksta, responsive */}
<section className="relative h-[560px] md:h-[680px] lg:h-[760px] w-full">
  <Link href={currentItem.link}>
    <Image
      src={currentItem.image}
      alt={currentItem.title}
      fill
      className="object-cover brightness-[0.62]"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-2xl max-w-4xl">
        {currentItem.title}
      </h1>

      <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-xl">
        {currentItem.subtitle}
      </p>
    </div>
  </Link>


  {/* Progress Lines - ispod teksta, responsive */}
  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 flex gap-3 z-20">
    {heroItems.map((_, index) => (
      <div
        key={index}
        className="w-10 md:w-12 h-[3px] bg-white/40 rounded-full overflow-hidden cursor-pointer"
        onClick={() => setCurrentIndex(index)}
      >
        <div
          className={`h-full bg-white transition-all duration-[8000ms] ease-linear ${
            index === currentIndex ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    ))}
  </div>
</section>

 

      {/* Staff Picks Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-[#020617] mb-12 text-center">Staff Picks</h2>
          <div className="overflow-x-auto pb-4 flex space-x-6">
            {staffPicks.map((shirt) => (
              <a
                key={shirt.name}
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
                  <h3 className="text-lg font-semibold text-[#020617] mb-2">{shirt.name}</h3>
                  <p className="text-blue-600 font-bold text-xl">{shirt.price}</p>
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
          </div>
        </div>
      </div>

      <TrendingPlayers />

      {/* News Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link href={post.link} key={post.id} className="h-full">
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
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
            <Link href="/news" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Jerseys Blog Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">Jerseys Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jerseysBlogPosts.map((post) => (
              <Link href={post.link} key={post.id} className="h-full">
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
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
            <Link href="/blog/jerseys" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* MLS Hall of Fame Section */}
<div className="bg-white py-16">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-5xl font-bold text-[#020617] mb-8 text-center">Hall of Fame</h2>
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
      objectPosition: post.imagePosition || '50% 50%', // ovo će pomeriti glavu na gore
    }}
    className="group-hover:scale-105 transition-transform duration-300"
    unoptimized={true} // zbog eksternih linkova
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
            <Link href="/blog/mls-hall-of-fame" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16 text-center mt-16">
        <h2 className="text-4xl font-bold mb-4">Stay Updated with US11</h2>
        <p className="text-lg mb-8">Subscribe to our newsletter and never miss an MLS update</p>
        <Link
          href="/newsletter"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-100 hover:scale-105 transition duration-300 ease-in-out inline-block"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </>
  );
}
