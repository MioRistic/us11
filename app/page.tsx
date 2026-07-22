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
    title: "LA Galaxy Sign Kyōgo Furuhashi", 
    subtitle: "The Japanese striker joins LA Galaxy on a long-term deal through 2030-31", 
    image: "https://i.ibb.co/9HPvvXNp/Getty-Images-2257281996-1024x683.webp", 
    link: "/news/furuhashi", 
    external: false, 
    cta: "Read the full story" 
  },
  { 
    title: "NYCFC CEO: “We Want Christian Pulisic”", 
    subtitle: "Brad Sims sends a clear message about signing the USMNT star", 
    image: "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=1920&quality=60", 
    link: "/news/nycfc-pulisic", 
    external: false, 
    cta: "Read the full story" 
  },
  { title: "Top 10 Most Interesting Summer Transfers in MLS", subtitle: "Griezmann, Lewandowski and more — the biggest moves of the 2026 summer window so far", image: "https://i.ibb.co/0p04zs5V/dc2772d1-orlando-city-antoine-griezmann.avif", link: "/news/top-10-mls-transfers-2026", external: false, cta: "Read the story" },
  { title: "Shop World Cup 2026 Jerseys", subtitle: "Collect the kits from every nation competing on the biggest stage", image: "https://assets.goal.com/images/v3/bltc50f036015249aeb/adidas%20WC%20kits%20.jpg?format=pjpg&quality=60&auto=webp&width=1200", link: "https://fanatics.93n6tx.net/L0RXVO", external: true, cta: "Shop now" },
  { title: "Lionel Messi at the 2026 World Cup", subtitle: "From early doubts to final heartbreak, Lionel Messi's journey at the 2026 World Cup was filled with brilliance, controversy, and emotion.", image: "https://assets.goal.com/images/v3/bltefe763462ed181c7/crop/MM5DCMRYGA5DOMRQHJXG653FHIZDOOJ2GA======/1600.jpg?auto=webp&format=pjpg&width=1920&quality=60", link: "/news/messi-recap", external: false, cta: "Read the story" },
  

];

const staffPicks = [
  { name: "Antoine Griezmann - Orlando City", image: "https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-purple-orlando-city-sc-2025-perfect-storm-on-field-authentic-jersey_ss5_p-204033026+pv-1+u-hexo5oxtaqxkxng71go3+v-4wipfo65ii5bhl5wjrot.png?_hv=2&w=1018", link: "https://fanatics.93n6tx.net/B5P0rJ" },
  { name: "Lionel Messi - Argentina National Team", image: "https://fanatics.frgimages.com/argentina-national-team/mens-argentina-national-team-lionel-messi-adidas-white-fifa-x-world-cup-2026-home-on-field-authentic-jersey_ss5_p-203130492+u-4t5gbwgzj2qugoxbeefs+v-ib2spequ9pvuf4ixgrwz.jpg?_hv=2&w=600", link: "https://fanatics.93n6tx.net/Qj7Dya" },
  { name: "Lionel Messi - Inter Miami CF", image: "https://fanatics.frgimages.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2026-presagio-on-field-authentic-patch-jersey_ss5_p-203796622+u-tzaw5stbqxgry9ruqtuk+v-2zf36xgsuhqyjxgvc7tj.jpg?_hv=2&w=600", link: "https://fanatics.93n6tx.net/gRG1ZX" },
  { name: "Christian Pulisic - USMNT", image: "https://fanatics.frgimages.com/mens-nike-christian-pulisic-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203943392+u-eynkcl3yzghk7gpyutek+v-aljzxhr6ss6kqwnxjple.png?_hv=2&w=600", link: "https://fanatics.93n6tx.net/B5P0WW" },
  { name: "Son Heung-Min - LAFC", image: "https://fanatics.frgimages.com/lafc/mens-adidas-son-heung-min-black-lafc-2026-primary-kit-replica-jersey_ss5_p-203794818+pv-1+u-t6pntpj653pnuqjlbfh7+v-e7oz1xk1n4at2ey0mvab.png?_hv=2&w=1018", link: "https://fanatics.93n6tx.net/QYbyBx" },
  { name: "Jordan Morris - Seattle Sounders FC", image: "https://fanatics.frgimages.com/seattle-sounders-fc/mens-adidas-jordan-morris-rave-green-seattle-sounders-fc-2026-the-evergreen-state-kit-replica-jersey_ss5_p-203847562+u-anfboaotog9stddyjkqf+v-grwn5dj94tjvjqcdgeth.jpg?_hv=2&w=600", link: "https://fanatics.93n6tx.net/7XM5Ed" },
  { name: "Marco Reus - LA Galaxy", image: "https://fanatics.frgimages.com/la-galaxy/mens-adidas-marco-reus-white-la-galaxy-2026-the-velocity-kit-replica-jersey_ss5_p-203844369+u-ybmznn0anpqtcfobwzyl+v-yvewnw1vxaoj2m4lz3gg.png?_hv=2&w=600", link: "https://fanatics.93n6tx.net/1G7rXa" },
];

const blogPosts: Post[] = [
  
  {
  "id": 212,
  "title": "LA Galaxy Sign Kyōgo Furuhashi: A Calculated Gamble on Proven Pedigree and Pacific Rim Ambition",
  "author": "Mio Ristić",
  "date": "July 21, 2026",
  "excerpt": "The LA Galaxy have signed Japanese international striker Kyōgo Furuhashi from Birmingham City on a long-term deal.",
  "imageUrl": "https://i.ibb.co/9HPvvXNp/Getty-Images-2257281996-1024x683.webp",
  "link": "news/furuhashi"
},
  {
  "id": 211,
  "title": "NYCFC CEO Brad Sims Sends Clear Message: “We Want Christian Pulisic”",
  "author": "Mio Ristić",
  "date": "July 21, 2026",
  "excerpt": "NYCFC CEO Brad Sims has publicly expressed strong interest in signing Christian Pulisic despite AC Milan’s stance.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=1920&quality=60",
  "link": "news/nycfc-pulisic"
},
  { id: 210, title: "Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand", author: "Mio Ristić", date: "July 21, 2026", excerpt: "From early doubts to final heartbreak, Lionel Messi's journey at the 2026 World Cup was filled with brilliance, controversy, and emotion.", imageUrl: "https://assets.goal.com/images/v3/bltefe763462ed181c7/crop/MM5DCMRYGA5DOMRQHJXG653FHIZDOOJ2GA======/1600.jpg?auto=webp&format=pjpg&width=1920&quality=60", link: "/news/messi-recap" },
  
  
];

const jerseysBlogPosts: Post[] = [
  { id: 1029, title: "Why Argentina Are Wearing Their Navy Blue Kit Against England in the 2026 World Cup Semi-Final", author: "Mio Ristić", date: "July 15, 2026", excerpt: "Argentina will wear their navy blue away kit against England in the semi-final. The historic and symbolic reason behind the choice.", imageUrl: "https://i.ibb.co/Wbxt5X1/3-EWNH7-J-1-1024x536.jpg", link: "/blog/argentina-navy-blue-kit" },
  { id: 1028, title: "Chicago Fire Unveil Lewandowski Home Kit for Historic 2026 Season", author: "Mio Ristić", date: "July 13, 2026", excerpt: "Chicago Fire release the official Robert Lewandowski 2026 Home Jersey – shop Replica and Authentic versions now.", imageUrl: "https://assets.goal.com/images/v3/getty-2260392490/crop/MM5DIOBWGQ5DENZTGY5G433XMU5DAORQ/GettyImages-2260392490.jpg", link: "/blog/lewandowski-chicago-kit" },
  { id: 1015, title: "Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying", author: "Mio Ristić", date: "June 16, 2026", excerpt: "Which 2026 World Cup jerseys actually look good on the street? From Germany's clean 1990-inspired classic to Colombia's vibrant yellow and New Zealand's elegant black — here's our definitive ranking of the most wearable kits for everyday life.", imageUrl: "https://assets.goal.com/images/v3/blteb5ae4bd28752ec3/adidas%20FIFA%20World%20Cup%202026%20kit%20-%20Germany.png?auto=webp&format=pjpg&width=1920&quality=60", link: "/blog/best-world-cup-2026-street-style-jerseys" },
];

const hallOfFamePosts: Post[] = [
  { id: 87, title: "Hall of Fame: Thierry Henry — The King Who Brought Class to New York", author: "Mio Ristić", date: "April 12, 2026", excerpt: "From Arsenal and Barcelona to New York Red Bulls — how Thierry Henry elevated MLS with elegance, intelligence and leadership.", imageUrl: "https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=1200&quality=80", imagePosition: "center", link: "/blog/mls-hall-of-fame/thierry-henry" },
  { id: 86, title: "Hall of Fame: David Beckham — The Player Who Changed Football's Geography", author: "Mio Ristić", date: "January 6, 2026", excerpt: "David Beckham's move to LA Galaxy in 2007 transformed MLS, elevating the league's global profile and leaving a lasting legacy.", imageUrl: "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp", imagePosition: "10% 5%", link: "/blog/mls-hall-of-fame/david-beckham" },
];

const trendingPlayers = [
  { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: '/teams/inter-miami/messi' },
  { name: 'Robert Lewandowski', image: 'https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: '/teams/chicago-fire/lewandowski' },
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
            <Image src={s.image} alt={s.title} fill priority={i === 0} className="object-cover brightness-[0.62]" />
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