'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import SanDiegoLogo from '../../public/logos/San_Diego_FC_logo.svg.png';
import Us11 from '../../public/11.png';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string | StaticImageData;
  imagePosition?: string;
  slug: string;
}

interface CategoryItem {
  id: number;
  title: string;
  imageUrl: string;
  slug: string;
}

const items: CategoryItem[] = [
  {
    id: 1,
    title: 'Jerseys',
    imageUrl:
      'https://www.mlsstore.com/content/ws/all/d0b78fe8-b232-4778-93ce-204ce96f975a__548X893.jpg?w=548',
    slug: 'jerseys',
  },
  {
    id: 2,
    title: 'Legends',
    imageUrl:
      'https://media.gettyimages.com/id/130977814/photo/harrison-nj-david-beckham-of-the-los-angeles-galaxy-and-thierry-henry-of-the-new-york-red.jpg?s=612x612&w=gi&k=20&c=_FdM-NTasUPlRVjpuF0i6dFh4995HSlyT7QFCkNQ6Fo=',
    slug: 'mls-hall-of-fame',
  },
  {
    id: 3,
    title: 'From the Stands',
    imageUrl:
      'https://assets.goal.com/images/v3/getty-2201968019/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2201968019.jpg',
    slug: 'from-the-stands',
  },
];

const blogPosts: BlogPost[] = [
  {
  "id": 1014,
  "title": "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy",
  "author": "Mio Ristić",
  "date": "May 11, 2026",
  "excerpt": "Mexico and adidas unveiled a bold new all-black 2026 third kit that celebrates the nation’s World Cup legacy with premium design details and deep cultural identity.",
  "imageUrl": "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1440/723904.jpg",
  "slug": "mexico-adidas-third-kit-2026"
},
  {
  "id": 1013,
  "title": "Atlanta United x MARTA: When Football, Public Transit and Street Style Collide",
  "author": "Mio Ristić",
  "date": "May 10, 2026",
  "excerpt": "Atlanta United’s new collaboration with MARTA transforms Atlanta’s public transit culture into one of the most authentic and stylish football collections in recent MLS history.",
  "imageUrl": "https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480",
  "slug": "atlanta-united-marta-collection"
},
  {
  "id": 1012,
  "title": "James. Netflix’s Intimate Portrait of Colombia’s Last True No. 10",
  "author": "Mio Ristić",
  "date": "May 8, 2026",
  "excerpt": "Netflix is releasing 'James.', a raw and deeply personal documentary series about James Rodríguez ahead of the 2026 World Cup. The Colombian superstar opens up about his life, career pressures, and legacy.",
  "imageUrl": "https://i.ibb.co/jZk4DKwK/M5-HDXY3-HJ5-HAFMM6-DCSGAK33-KU.avif",
  "slug": "james-netflix-documentary"
},
  {
  "id": 1011,
  "title": "Mexico or USA: Whose Jersey Sells More in America? The Surprising Truth (and a Major Shift)",
  "author": "Mio Ristić",
  "date": "May 5, 2026",
  "excerpt": "Fanatics claims the USMNT 2026 kit is currently outselling Mexico in the United States. We analyze the data, the Messi effect, and what it really means ahead of the World Cup.",
  "imageUrl": "https://i.ibb.co/Gfk3qjXJ/Untitled-design-4.png",
  "slug": "mexico-usa-jersey-sales-2026",
},
  {
  "id": 1010,
  "title": "2000s Football Nostalgia Meets Formula 1 Glamour: Adidas and Audi Drop a Miami Collection That Actually Works",
  "author": "Mio Ristić",
  "date": "May 2, 2026",
  "excerpt": "Adidas and Audi team up with Inter Miami for a limited F1 Miami Collection that blends 2000s football kits with modern Formula 1 style.",
  "imageUrl": "https://www.audif1.com/cms/api/media/file/audif1_2026_miami_collection_messi_teaser_01-1012x1350.webp",
  "imagePosition": "50% 12%",
  "slug": "adidas-audi-miami-collection-2026"
},
  {
  "id": 1009,
  "title": "Who Should Replace Javier Mascherano at Inter Miami? Ranking the Leading Candidates",
  "author": "Mio Ristić",
  "date": "April 16, 2026",
  "excerpt": "Just four months after winning their first MLS Cup, Javier Mascherano has stepped down as head coach of Inter Miami. Full ranking of the leading candidates including Xavi, Wilfried Nancy, Marcelo Gallardo and more.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2219044340/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2219044340.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "slug": "inter-miami-new-coach"
},
  {
  "id": 1008,
  "title": "Griezmann #7 Jersey Already Breaking Sales Records at Orlando City",
  "author": "Mio Ristić",
  "date": "April 11, 2026",
  "excerpt": "Antoine Griezmann's No.7 Orlando City jerseys (Home Perfect Storm & Sunken Treasure Away) went on sale immediately after the announcement and are already among the fastest-selling kits in club history. Full story, jersey details, and where to buy now.",
  "imageUrl": "https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg",
  "slug": "griezmann-orlando-city-jersey"
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
  "imageUrl": "https://assets.goal.com/images/v3/bltf53f7a9a05821020/crop/MM5DIMBYGU5DEMRZHA5G433XMU5DAORYHE2Q====/U.S%20Denim%20Kit%20Collection%2024.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "slug": "adidas-usa-1994-denim-collection"
},
  {
  "id": 1005,
  "title": "MLS Cities That Almost Made It: Sacramento, Detroit, Las Vegas, Phoenix & More",
  "author": "Mio Ristić",
  "date": "March 10, 2026",
  "excerpt": "Explore the MLS cities that came closest to joining the league but never did: failed bids from Sacramento Republic, Detroit, Las Vegas, Phoenix, and others. Why they missed out and what's next for expansion beyond 30 teams in 2026.",
  "imageUrl": "https://www.sacrepublicfc.com/wp-content/uploads/sites/33/2024/03/03232024_INDvSAC_t6105.jpg",
  "slug": "mls-expansion-cities-2026"
},
  {
  "id": 1004,
  "title": "Why the New York Cosmos, Once America’s Soccer Giants, Remain Outside MLS",
  "author": "Mio Ristić",
  "date": "March 9, 2026",
  "excerpt": "A deep dive into the history of the New York Cosmos, their golden era, financial missteps, and why this iconic American soccer brand remains outside MLS as of 2026.",
  "imageUrl": "https://nypost.com/wp-content/uploads/sites/2/2022/12/GettyImages-488780302-1.jpg?resize=1200,810&quality=75&strip=all",
  "slug": "new-york-cosmos-mls-2026"
},
  {
  "id": 1003,
  "title": "Top 10 MLS Prospects to Watch in 2026",
  "author": "Mio Ristić",
  "date": "February 24, 2026",
  "excerpt": "Discover the top 10 MLS prospects set to shine in 2026: Zavier Gozo, Peyton Miller, Luca Bombino, and more rising talents with breakout potential, European transfer buzz, and USMNT upside.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2202625521/crop/MM5DGOBXGQ5DEMJXHE5G433XMU5DQNBSHIYA====/GettyImages-2202625521.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "slug": "mls-prospects-2026"
},
  {
  "id": 1002,
  "title": "Top 10 MLS Players to Watch in 2026: From Messi to Rising Stars",
  "author": "Mio Ristić",
  "date": "February 24, 2026",
  "excerpt": "Record crowds, teenage breakthroughs, and early contenders headline a thrilling opening weekend of the 2026 MLS season.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2227792192/crop/MM5DCOBUGA5DCMBTGU5G433XMU5DCMRRGU5DENBX/GettyImages-2227792192.jpg?auto=webp&format=pjpg&width=1920&quality=60",
  "slug": "mls-players-2026"
},
  {
  "id": 1001,
  "title": "MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear",
  "author": "Mio Ristić",
  "date": "February 11, 2026",
  "excerpt": "MLS jerseys in 2026 are more than kits — they’re fashion, identity, and culture. A deep dive into the designs fans love (and hate) the most.",
  "imageUrl": "https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg",
  "slug": "mls-jerseys-2026"
},
  {
  "id": 1000,
  "title": "Mexico FIFA World Cup 2026 Kit: The Green Jersey",
  "author": "Mio Ristić",
  "date": "January 25, 2026",
  "excerpt": "A full overview of Mexico's 2026 World Cup home kit, featuring the iconic green jersey with Aztec-inspired design, 'SOMOS MÉXICO' detail, and official fan replicas.",
  "imageUrl": "https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018",
  "slug": "mexico-2026-world-cup-kit"
},
  {
  "id": 106,
  "title": "Argentina FIFA World Cup 2026 Kits: Home and Away",
  "author": "Mio Ristić",
  "date": "January 18, 2026",
  "excerpt": "A full overview of Argentina's 2026 World Cup kits, including Messi's final World Cup home jersey, away kit, youth and goalkeeper editions, and fan replicas.",
  "imageUrl": "https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60",
  "slug": "argentina-2026-world-cup-kits"
},
  {
    id: 85,
    title: 'Why Everyone’s Talking About the USMNT vs Paraguay Brawl',
    author: 'Mio Ristić',
    date: 'November 17, 2025',
    excerpt:
      'The USMNT vs Paraguay friendly ended in a dramatic bench-clearing brawl.',
    imageUrl:
      'https://assets.goal.com/images/v3/blt19784dca8a91db2a/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2246884471.jpg',
    slug: 'us-paraguay-brawl',
  },
  
];

export default function BlogPage() {
  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 6));

  const loadMorePosts = () => {
    setVisiblePosts((prev) => [
      ...prev,
      ...blogPosts.slice(prev.length, prev.length + 6),
    ]);
  };

  return (
    <div className="w-full bg-white">
      {/* CATEGORIES */}
      <div className="max-w-6xl mx-auto py-12 px-4">
         <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">Blog</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition block"
            >
              <div className="relative h-38">
                <Image
  src={item.imageUrl}
  alt={item.title}
  fill
  className="object-cover object-top"
/>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* BLOG POSTS */}
      <div className="max-w-6xl mx-auto py-12 px-4">
         <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">
          Latest Blog Posts
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition block"
            >
              <div className="relative h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                  style={{
                    objectPosition: post.imagePosition || '50% 50%',  // ← ovde se primenjuje
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {visiblePosts.length < blogPosts.length && (
          <div className="mt-10 text-center">
            <button
  onClick={loadMorePosts}
  className="bg-[#020617] text-white px-8 py-3 rounded-lg font-semibold 
             hover:bg-white hover:text-[#020617] hover:border-[#020617] 
             border-2 transition-all duration-300 ease-in-out 
             transform hover:scale-105 
             cursor-pointer"   // ← OVO JE DODATO
>
  Read More
</button>
          </div>
        )}
      </div>
    </div>
  );
}
