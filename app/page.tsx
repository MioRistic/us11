'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useForm } from '@formspree/react';

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

const ACCENT = '#1d4ed8';

const heroItems = [

{
  "title": "The Guardiola-to-USMNT Idea Is Real on One Side. It Is Still a Long Shot on the Other.",
  "subtitle": "U.S. Soccer has identified Pep Guardiola as a leading candidate if Mauricio Pochettino leaves for Manchester United. The bigger question is whether Guardiola is ready to return to management.",
  "image": "https://assets.goal.com/images/v3/getty-2277167485/crop/MM5DCMJTGY5DMMZZHJXG653FHI2TUMJQGY======/GettyImages-2277167485.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "/news/pep-guardiola-usmnt-manager-pochettino-manchester-united-2026",
  "external": false,
  "cta": "Read the full story"
},
{
  "title": "Pochettino’s Manchester United Interest Is Real. What It Means for the USMNT Is Less Clear.",
  "subtitle": "Manchester United’s interest in Mauricio Pochettino could have major implications for the USMNT as the national team prepares for the next stage of its development.",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1at_ZooB46OwJF3ESZJDSlpbxSHObJBzA7amwquJj3zXxdgIhVSPmrHsN&s=10",
  "link": "/news/pochettino-manchester-united-usmnt-2026",
  "external": false,
  "cta": "Read the full story"
}
,
  {
  "title": "The Forgotten Club That Finished First in MLS 30 Years Ago",
  "subtitle": "Remembering Tampa Bay Mutiny, Carlos Valderrama, Roy Lassiter and the team that topped the league's inaugural regular season.",
  "image": "https://assets.goal.com/images/v3/getty-279134/crop/MM5DGMBXGI5DEMBZGY5G433XMU5DAORQ/GettyImages-279134.jpg?auto=webp&format=pjpg&width=2048&quality=60",
  "link": "/news/tampa-bay-mutiny-first-mls-regular-season-1996",
  "external": false,
  "cta": "Read the full story"
},
  {
  "title": "Concacaf Has Rewritten the Gold Cup",
  "subtitle": "Two groups of eight and a Swiss-style format are coming in 2027",
  "image": "https://assets.goal.com/images/v3/getty-2223851504/crop/MM5DINJVGM5DENJWGE5G433XMU5DAORRGM4Q====/GettyImages-2223851504.jpg?quality=60&auto=webp&format=pjpg&width=2160",
  "link": "/news/gold-cup-2027-format-change",
  "external": false,
  "cta": "Read the full story"
},
  
  {
  "title": "The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1",
  "subtitle": "Messi still No. 1. Son, Müller, Lewandowski and Griezmann also make the top five.",
  "image": "https://www.mlsstore.com/content/ws/all/55bfdb35-a7c7-406b-9192-649a14ae0501__2400X1350.jpg",
  "link": "/blog/best-selling-mls-jerseys-2026",
  "external": false,
  "cta": "Read the full ranking"
},


 
 
];

const staffPicks = [
  {
  name: "Lionel Messi Inter Miami CF adidas 2026 Third",
  image: "https://fanatics.frgimages.com/inter-miami-cf/mens-adidas-lionel-messi-white-inter-miami-cf-2026-third-replica-jersey_ss5_p-203610053+u-tuh1zb9m9reka0ufh3t8+v-r2koayzpqvnn9abjytax.jpg?_hv=2&w=800",
  link: "https://fanatics.93n6tx.net/AgGKd1"
},
  { name: "Antoine Griezmann - Orlando City", image: "https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-purple-orlando-city-sc-2025-perfect-storm-on-field-authentic-jersey_ss5_p-204033026+pv-1+u-hexo5oxtaqxkxng71go3+v-4wipfo65ii5bhl5wjrot.png?_hv=2&w=1018", link: "https://fanatics.93n6tx.net/B5P0rJ" },
  { name: "Lionel Messi - Inter Miami CF", image: "https://fanatics.frgimages.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2026-presagio-on-field-authentic-patch-jersey_ss5_p-203796622+u-tzaw5stbqxgry9ruqtuk+v-2zf36xgsuhqyjxgvc7tj.jpg?_hv=2&w=600", link: "https://fanatics.93n6tx.net/Qj7Dya" },
  { name: "Christian Pulisic - USMNT", image: "https://fanatics.frgimages.com/mens-nike-christian-pulisic-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203943392+u-eynkcl3yzghk7gpyutek+v-aljzxhr6ss6kqwnxjple.png?_hv=2&w=600", link: "https://fanatics.93n6tx.net/B5P0WW" },
  { name: "Son Heung-Min - LAFC", image: "https://fanatics.frgimages.com/lafc/mens-adidas-son-heung-min-black-lafc-2026-primary-kit-replica-jersey_ss5_p-203794818+pv-1+u-t6pntpj653pnuqjlbfh7+v-e7oz1xk1n4at2ey0mvab.png?_hv=2&w=1018", link: "https://fanatics.93n6tx.net/QYbyBx" },
  { name: "Jordan Morris - Seattle Sounders FC", image: "https://fanatics.frgimages.com/seattle-sounders-fc/mens-adidas-jordan-morris-rave-green-seattle-sounders-fc-2026-the-evergreen-state-kit-replica-jersey_ss5_p-203847562+u-anfboaotog9stddyjkqf+v-grwn5dj94tjvjqcdgeth.jpg?_hv=2&w=600", link: "https://fanatics.93n6tx.net/7XM5Ed" },
  { name: "Marco Reus - LA Galaxy", image: "https://fanatics.frgimages.com/la-galaxy/mens-adidas-marco-reus-white-la-galaxy-2026-the-velocity-kit-replica-jersey_ss5_p-203844369+u-ybmznn0anpqtcfobwzyl+v-yvewnw1vxaoj2m4lz3gg.png?_hv=2&w=600", link: "https://fanatics.93n6tx.net/1G7rXa" },
];

const blogPosts: Post[] = [

  
{
  "id": 1046,
  "title": "The Guardiola-to-USMNT Idea Is Real on One Side. It Is Still a Long Shot on the Other.",
  "author": "Mio Ristić",
  "date": "November 12, 2026",
  "excerpt": "U.S. Soccer is prepared to pursue Pep Guardiola if Mauricio Pochettino leaves for Manchester United. But convincing the former Manchester City manager to return from his sabbatical is another challenge entirely.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2277167485/crop/MM5DCMJTGY5DMMZZHJXG653FHI2TUMJQGY======/GettyImages-2277167485.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "link": "/news/pep-guardiola-usmnt-manager-pochettino-manchester-united-2026"
},
{
  "id": 1045,
  "title": "Pochettino’s Manchester United Interest Is Real. What It Means for the USMNT Is Less Clear.",
  "author": "Mio Ristić",
  "date": "November 10, 2026",
  "excerpt": "Mauricio Pochettino’s reported interest in Manchester United raises questions about his future with the USMNT, but the implications for the national team remain uncertain.",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1at_ZooB46OwJF3ESZJDSlpbxSHObJBzA7amwquJj3zXxdgIhVSPmrHsN&s=10",
  "link": "/news/pochettino-manchester-united-usmnt-2026"
},
{
  "id": 1044,
  "title": "Have You Heard of This MLS Club? They Finished First in the League 30 Years Ago, but No Longer Exist.",
  "author": "Mio Ristić",
  "date": "November 9, 2026",
  "excerpt": "Tampa Bay Mutiny finished first in MLS's inaugural 1996 regular season. Discover the story of Carlos Valderrama, Roy Lassiter and the club that helped shape the league's early history.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-279134/crop/MM5DGMBXGI5DEMBZGY5G433XMU5DAORQ/GettyImages-279134.jpg?auto=webp&format=pjpg&width=2048&quality=60",
  "link": "/news/tampa-bay-mutiny-first-mls-regular-season-1996"
},



  
 


  
];

const jerseysBlogPosts: Post[] = [
  {
  "id": 1046,
  "title": "The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1",
  "author": "Mio Ristić",
  "date": "November 4, 2026",
  "excerpt": "MLS released its official 2026 jersey sales ranking. Messi finished first for the fourth straight year, followed by Son Heung-Min and Thomas Müller. Full list from 10 to 1.",
  "imageUrl": "https://www.mlsstore.com/content/ws/all/55bfdb35-a7c7-406b-9192-649a14ae0501__2400X1350.jpg",
  "link": "/blog/best-selling-mls-jerseys-2026"
},
  {
  "id": 1035,
  "title": "Peace Collective x Street Fighter x MLS: The Crossover Collection Worth Buying",
  "author": "Mio Ristić",
  "date": "October 29, 2026",
  "excerpt": "Peace Collective teamed up with Street Fighter for an MLS lifestyle collection featuring Griezmann, Son Heung-min, Lewandowski and club designs. Tees, hoodies and more available now.",
  "imageUrl": "https://i.postimg.cc/jSgdw8JN/Screenshot-2026-10-29-at-5-04-00-PM.png",
  "link": "/blog/peace-collective-street-fighter-mls"
},
  {
  id: 296,
  title: "Orlando City Just Dropped a Peace Collective x Street Fighter Collection With Griezmann. Here’s What’s Worth Buying.",
  author: "Mio Ristic",
  date: "October 22, 2026",
  excerpt: "Limited Peace Collective drop with Griezmann graphics and Street Fighter mash-ups. Tees, hoodies and jackets now available.",
  imageUrl: "https://www.mlsstore.com/content/ws/all/71cebf47-8fc9-46ab-b6e7-971b9dc298f2__480X639.jpg?w=480",
  link: "/blog/griezmann-peace-collective-street-fighter"
},
  
 
];

const hallOfFamePosts: Post[] = [
  { id: 87, title: "Hall of Fame: Thierry Henry — The King Who Brought Class to New York", author: "Mio Ristić", date: "April 12, 2026", excerpt: "From Arsenal and Barcelona to New York Red Bulls — how Thierry Henry elevated MLS with elegance, intelligence and leadership.", imageUrl: "https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=1200&quality=80", imagePosition: "center", link: "/blog/mls-hall-of-fame/thierry-henry" },
  { id: 86, title: "Hall of Fame: David Beckham — The Player Who Changed Football's Geography", author: "Mio Ristić", date: "January 6, 2026", excerpt: "David Beckham's move to LA Galaxy in 2007 transformed MLS, elevating the league's global profile and leaving a lasting legacy.", imageUrl: "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp", imagePosition: "10% 5%", link: "/blog/mls-hall-of-fame/david-beckham" },
];

const trendingPlayers = [
  { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
  { name: 'Robert Lewandowski', image: 'https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: '/teams/chicago-fire/lewandowski' },
  { name: 'Antoine Griezmann', image: 'https://assets.goal.com/images/v3/getty-2294479946/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORRHA4A====/GettyImages-2294479946.jpg?auto=webp&format=pjpg&width=2048&quality=60',  link: '/teams/orlando-city/griezmann' },
  { name: 'Heung-Min Son', image: 'https://assets.goal.com/images/v3/getty-2229316055/crop/MM5DGNBTHA5DCOJTGQ5G433XMU5DAORRG44Q====/GettyImages-2229316055.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/lafc/son' },
  { name: 'Thomas Muller', image: 'https://assets.goal.com/images/v3/getty-2230148654/crop/MM5DIMRWGY5DENBQGA5G433XMU5DAORSGIZA====/GettyImages-2230148654.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/vancouver-whitecaps/muller' },
  { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: '/teams/inter-miami/suarez' },
  { name: 'Christian Pulisic', image: 'https://assets.goal.com/images/v3/blt033093b0707b1c17/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2279107115.jpg?auto=webp&format=pjpg&width=1920&quality=60', link: '/teams/usa-national-team/pulisic' },
  { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: '/teams/la-galaxy/reus' },
  { name: 'Jordan Morris', image: 'https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: '/teams/seattle-sounders/morris' },
];

/* ============== HERO SLIDER ============== */
function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = heroItems.length;
  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [count]);

  const slide = heroItems[index];

  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {heroItems.map((s, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === index ? 1 : 0 }}>
            {s.image && <Image src={s.image} alt={s.title} fill priority={i === 0} className="object-cover brightness-[0.62]" />}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <button onClick={prev} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 md:left-8"><ChevronLeft className="h-5 w-5" /></button>
      <button onClick={next} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 md:right-8"><ChevronRight className="h-5 w-5" /></button>
      <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col gap-6 px-6 pb-16 md:flex-row md:items-end md:justify-between md:px-12 lg:px-16">
        <div className="max-w-2xl text-white">
          <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: ACCENT }}>Featured</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[0.95] tracking-tight drop-shadow-2xl md:text-6xl lg:text-7xl">{slide.title}</h1>
          {slide.subtitle && <p className="mt-4 max-w-xl text-lg font-medium text-white/85 drop-shadow-lg md:text-2xl">{slide.subtitle}</p>}
        </div>
        {slide.external ? (
          <a href={slide.link} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 border border-white/70 px-7 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">{slide.cta}</a>
        ) : (
          <Link href={slide.link} className="inline-flex shrink-0 items-center gap-2 border border-white/70 px-7 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">{slide.cta}</Link>
        )}
      </div>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroItems.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-10' : 'w-4 bg-white/40 hover:bg-white/70'}`} style={i === index ? { backgroundColor: ACCENT } : undefined} />
        ))}
      </div>
    </section>
  );
}

/* ============== STAFF PICKS ============== */
function StaffPicks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-black tracking-tight text-black md:text-4xl">Staff Picks</h2>
          <div className="mt-4 h-px w-full bg-[#eaeaea]" />
        </div>
        <div className="relative">
          <div ref={trackRef} className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {staffPicks.map((item) => (
              <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer" className="group flex w-56 shrink-0 snap-start flex-col items-center text-center">
                <div className="relative aspect-square w-full overflow-hidden bg-transparent">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2" />
                </div>
                <span className="mt-4 text-base font-semibold text-black transition group-hover:text-[#1d4ed8]">{item.name}</span>
                <div className="mt-3 flex justify-center">
                  <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-7 opacity-80 transition group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
          <button onClick={() => scroll(-1)} aria-label="Previous" className="absolute left-0 top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#eaeaea] bg-white shadow-md transition hover:scale-110 hover:shadow-xl"><ChevronLeft className="h-6 w-6 text-black" /></button>
          <button onClick={() => scroll(1)} aria-label="Next" className="absolute right-0 top-1/2 z-10 grid h-12 w-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#eaeaea] bg-white shadow-md transition hover:scale-110 hover:shadow-xl"><ChevronRight className="h-6 w-6 text-black" /></button>
        </div>
        <div className="mt-10 flex justify-center">
  <a
    href="https://fanatics.93n6tx.net/Vx7PO6"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    View all shirts
  </a>
</div>
      </div>
    </section>
  );
}

/* ============== TRENDING PLAYERS ============== */
function TrendingPlayers() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-2.5px] text-center mb-10 text-[#020617]">Trending Players</h2>
      <div className="overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-6 md:gap-8 w-max">
          {trendingPlayers.map((player) => (
            <Link key={player.name} href={player.link} className="group flex-shrink-0 w-[260px] sm:w-[280px] snap-start">
              <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className="aspect-[4/3] relative">
                  <img src={player.image} alt={player.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-black tracking-tight text-[#020617]">{player.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-4 md:hidden">← Swipe to see more →</p>
    </div>
  );
}

/* ============== NEWS GRID ============== */
function NewsGrid({ posts, title, moreLink }: { posts: Post[]; title: string; moreLink: string }) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link href={post.link} key={post.id} className="h-full">
              <div className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                <div className="relative w-full h-48">
                  <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover', objectPosition: post.imagePosition || '50% 50%' }} className="group-hover:scale-105 transition-transform duration-300" />
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
          <Link href={moreLink} className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#020617] hover:border-[#020617] border-2 transition-all duration-300 ease-in-out transform hover:scale-105">Read More</Link>
        </div>
      </div>
    </div>
  );
}

/* ============== NEWSLETTER ============== */
function Newsletter() {
  const [formState, formspreeSubmit] = useForm('xykodqab');
  return (
    <div className="px-4 py-4">
      <section className="max-w-7xl mx-auto w-full bg-[#0a0a0a] rounded-2xl overflow-hidden my-8 shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative h-[240px] sm:h-[260px] md:h-[280px] lg:h-[340px] overflow-hidden">
            <img src="https://i.ibb.co/r23DDmSR/14cb010a-88e2-4289-8264-bb21b5baadcd.png" alt="US11 Daily Drill" className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110 object-center lg:object-top" />
          </div>
          <div className="px-7 py-8 lg:py-12 bg-[#0a0a0a] flex flex-col justify-center min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[340px]">
            <div className="mb-4 flex items-center gap-2">
              <Image src="/logo11.png" alt="US11 Logo" width={48} height={48} className="rounded-2xl" />
              <span className="text-white font-black text-3xl tracking-[-1px]">US11</span>
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-black leading-tight tracking-tighter">Stay Updated with US</h2>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">Subscribe to our newsletter for daily updates on MLS, USMNT, transfers & soccer culture.</p>
            <form onSubmit={formspreeSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" name="email" placeholder="Enter your email" required className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-white/60 rounded-2xl px-5 py-3.5 text-sm outline-none text-white placeholder:text-gray-500" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <button type="submit" disabled={formState?.submitting} className="cursor-pointer bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all font-bold text-white px-8 py-3.5 rounded-2xl text-sm tracking-wider whitespace-nowrap disabled:opacity-50">
                {formState?.submitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {formState?.succeeded && <p className="text-green-400 text-sm mt-3">Successfully subscribed! Check your email.</p>}
            {formState?.errors && <p className="text-red-400 text-sm mt-3">Error. Please try again.</p>}
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">By subscribing, you agree to receive US11 newsletter with MLS, USMNT, transfers and American soccer updates. You can unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


/* ============== FEATURED COLLECTIBLE ============== */

function FeaturedCollectible() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <p className="text-blue-700 font-mono text-xs font-bold uppercase tracking-[0.25em]">
            US11 Featured Collectible
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#020617] mt-2">
            For the Ultimate Football Collector
          </h2>
          <div className="h-px w-full bg-gray-200 mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Product Image */}
          <a
            href="https://fanatics.93n6tx.net/AgGKd1"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="group relative bg-[#f8f8f8] rounded-2xl overflow-hidden flex items-center justify-center p-5 md:p-10"
          >
            <img
              src="https://fanatics.frgimages.com/inter-miami-cf/lionel-messi-inter-miami-cf-autographed-framed-2025-mls-cup-champions-alternate-blue-adidas-jersey-collage_ss5_p-203695693+u-g0ynztkycvquexeqpzs5+v-hd0tbagaymu0i8eyic0m.jpg?_hv=2&w=1018"
              alt="Lionel Messi autographed Inter Miami 2025 MLS Cup Champions framed jersey collage"
              className="w-full max-w-[650px] h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute top-5 left-5 bg-[#020617] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              Exclusive Collectible
            </span>
          </a>

          {/* Product Information */}
          <div className="flex flex-col">

            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">
              Inter Miami CF · Lionel Messi
            </p>

            <h3 className="text-2xl md:text-3xl font-black text-[#020617] leading-tight">
              Lionel Messi Inter Miami CF Autographed Fanatics Authentic Framed 2025 MLS Cup Champions Alternate Blue adidas Jersey Collage
            </h3>

            <div className="flex items-center gap-2 mt-5">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-green-700">
                In Stock
              </span>
              <span className="text-sm text-gray-500">
                – Ships within 3 business days
              </span>
            </div>

            <div className="mt-7">
              <p className="text-4xl font-black text-[#020617]">
                $4,999.99
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Or 4 interest-free payments of $1,249.99 with Affirm.
              </p>
            </div>

            <div className="border-t border-gray-200 mt-7 pt-6">
              <h4 className="text-lg font-bold text-[#020617] mb-3">
                Description
              </h4>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Celebrate the historic Inter Miami CF 2025 MLS Cup victory
                and honor Lionel Messi with this exceptional autographed
                framed jersey collage.

                Messi's personally signed alternate blue adidas jersey is
                showcased alongside commemorative imagery, creating a
                premium centerpiece for any football memorabilia collection.

                Each piece is individually numbered and authenticated
                with FanSecure technology, providing confidence in its
                provenance and collectible value.
              </p>
            </div>

            <a
              href="https://fanatics.93n6tx.net/jR7xJZ"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-[#020617] text-white px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] shadow-lg"
            >
              View Collectible at Fanatics
              <span className="text-lg">→</span>
            </a>

            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              US11 may earn a commission from qualifying purchases made
              through this affiliate link, at no additional cost to you.
              Product availability and pricing are subject to change.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}


/* ===================== HOME ===================== */
export default function Home() {
  return (
    <article className="w-full min-h-screen bg-white text-[#020617]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <HeroSlider />

      {/* Affiliate disclosure */}
      <div className="border-b border-zinc-200 bg-white py-5">
        <div className="mx-auto max-w-md px-4 text-center">
          <p className="font-mono text-[11px] leading-relaxed text-zinc-500">
            This page contains affiliate links. When you purchase through the links provided,{" "}
            <span className="font-semibold" style={{ color: ACCENT }}>US11 may earn a commission</span> at no extra cost to you.
          </p>
        </div>
      </div>

      <StaffPicks />

      <NewsGrid posts={blogPosts} title="News" moreLink="/news" />

      <TrendingPlayers />

      <Newsletter />

      <NewsGrid posts={jerseysBlogPosts} title="Jersey blog" moreLink="/blog/jerseys" />

      <FeaturedCollectible />

      <NewsGrid posts={hallOfFamePosts} title="Let's talk about Legends" moreLink="/blog/mls-hall-of-fame" />

      {/* Affiliates */}
      <div className="bg-white py-12 border-t border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight mb-8 text-[#020617]">Affiliates</h2>
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-8 md:gap-12 justify-center items-center min-w-max">
              <a href="https://fanatics.93n6tx.net/qWyyEj" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
                  <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-12 grayscale group-hover:grayscale-0 transition-all" />
                </div>
              </a>
              <a href="https://mlsstore.i8h2.net/9VEEM0" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png" alt="MLS" className="h-12 grayscale group-hover:grayscale-0 transition-all" />
                </div>
              </a>
              <a href="https://ticketnetwork.lusg.net/n4yy2o" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
                  <img src="https://image.pitchbook.com/oh2B6dUL35JJWowDTTX4JutnVAI1659528454068_200x200" alt="Ticket Network" className="h-14 grayscale group-hover:grayscale-0 transition-all" />
                </div>
              </a>
              <a href="https://www.expedia.com/Mercedes-Benz-Stadium-Hotels.0-l553248633992329628-0.Travel-Guide-Filter-Hotels?clickref__=1110l3VMB7b4&affcid=US.DIRECT.PHG.1100l424389.1100l68075&ref_id=1110l3VMB7b4&my_ad=AFF.US.DIRECT.PHG.1100l424389.1100l68075&afflid=1110l3VMB7b4&affdtl=PHG.1110l3VMB7b4.PZmW8eyzcc" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl p-6 w-28 h-28 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Expedia_Logo_2023.svg/500px-Expedia_Logo_2023.svg.png" alt="Expedia" className="h-6 grayscale group-hover:grayscale-0 transition-all" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}