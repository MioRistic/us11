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
    { name: 'Christian Pulisic', image: 'https://media.bleacherreport.com/image/upload/v1642803493/c6tcjkzmqnb1iphp4dik.jpg', link: '/teams/usa-national-team/pulisic' },
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
    id: 151,
    title: "No Americans in the Champions League Final: Johnny Cardoso’s Dream Ends in London",
    author: "Mio Ristić",
    date: "May 6, 2026",
    excerpt: "Johnny Cardoso came off the bench but couldn’t inspire Atlético Madrid as Arsenal advanced to the 2026 Champions League final. No American will feature in the showpiece match.",
    imageUrl: "https://assets.goal.com/images/v3/getty-2249006353/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORRHAZA====/GettyImages-2249006353.jpg",
    link: "news/no-americans-champions-league-final-2026",
  },
  {
    id: 150,
    title: "Orlando’s Miracle, Cincinnati’s Chaos and the Loons’ Aerial Assault: What We Learned from MLS Matchday 11",
    author: "Mio Ristić",
    date: "May 4, 2026",
    excerpt: "Ojeda’s historic hat-trick comeback, Evander’s heroics with 10 men, Minnesota’s set-piece masterclass and more from a chaotic Matchday 11 in MLS.",
    imageUrl: "https://assets.goal.com/images/v3/getty-2274230605/crop/MM5DIMRUGY5DEMZYHE5G433XMU5DAORUGI3A====/GettyImages-2274230605.jpg",
    link: "news/mls-matchday-11-2026",
  },
  {
    id: 149,
    title: "Martín Ojeda’s Masterpiece: One Night in Miami That No One Will Forget",
    author: "Mio Ristić",
    date: "May 3, 2026",
    excerpt: "Martín Ojeda delivered a hat-trick for the ages as Orlando City came back from 3-0 down to stun Inter Miami 4-3 at Nu Stadium in one of the most dramatic Florida Derbies in recent memory.",
    imageUrl: "https://assets.goal.com/images/v3/blt46944697bc863c53/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-02T211526.574.png",
    link: "news/martin-ojeda-masterpiece-miami-2026",
  },
];const jerseysBlogPosts: Post[] = [
  {
    id: 1011,
    title: "Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth (and a Major Shift)",
    author: "Mio Ristić",
    date: "May 5, 2026",
    excerpt: "Fanatics claims the USMNT 2026 kit is currently outselling Mexico in the United States. We analyze the data, the Messi effect, and what it really means ahead of the World Cup.",
    imageUrl: "https://i.ibb.co/Gfk3qjXJ/Untitled-design-4.png",
    link: "blog/mexico-usa-jersey-sales-2026",
  },
  {
    id: 1010,
    title: "2000s Football Nostalgia Meets Formula 1 Glamour: Adidas and Audi Drop a Miami Collection That Actually Works",
    author: "Mio Ristić",
    date: "May 2, 2026",
    excerpt: "Adidas and Audi team up with Inter Miami for a limited F1 Miami Collection that blends 2000s football kits with modern Formula 1 style.",
    imageUrl: "https://www.audif1.com/cms/api/media/file/audif1_2026_miami_collection_messi_teaser_01-1012x1350.webp",
    imagePosition: "50% 15%",
    link: "blog/adidas-audi-miami-collection-2026",
  },
  {
    id: 1008,
    title: "Griezmann #7 Jersey Already Breaking Sales Records at Orlando City",
    author: "Mio Ristić",
    date: "April 11, 2026",
    excerpt: "Antoine Griezmann's No.7 Orlando City jerseys (Home Perfect Storm & Sunken Treasure Away) went on sale immediately after the announcement and are already among the fastest-selling kits in club history. Full story, jersey details, and where to buy now.",
    imageUrl: "https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg",
    link: "/blog/griezmann-orlando-city-jersey",
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
    title: "No Americans in the Champions League Final",
    subtitle: "Johnny Cardoso’s Dream Ends in London",
    image: "https://assets.goal.com/images/v3/getty-2249006353/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORRHAZA====/GettyImages-2249006353.jpg",
    link: "/news/no-americans-champions-league-final-2026",
  },
  {
    title: "Orlando’s Miracle, Cincinnati’s Chaos",
    subtitle: "What We Learned from MLS Matchday 11",
    image: "https://assets.goal.com/images/v3/getty-2274230605/crop/MM5DIMRUGY5DEMZYHE5G433XMU5DAORUGI3A====/GettyImages-2274230605.jpg",
    link: "/news/mls-matchday-11-2026",
  },
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
        <section className="relative h-[560px] md:h-[680px] lg:h-[760px] w-full">
          <Link href={currentItem.link}>
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-cover brightness-[0.62]"
              priority
            />        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

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
          <Link href="/news" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
            Read More
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
  />  <button
    type="submit"
    className="cursor-pointer bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all font-bold text-white px-8 py-3.5 rounded-2xl text-sm tracking-wider whitespace-nowrap"  >
Subscribe  </button>
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
          <Link href="/blog/jerseys" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
            Read More
          </Link>
        </div>
      </div>
    </div>

    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">
          Hall of fame
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
          <Link href="/blog/mls-hall-of-fame" className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </article>
</>  );
}

