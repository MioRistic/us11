

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
 
 
 

const Blog = () => {
  const blogPosts = [
    {
  "id": 1028,
  "title": "Chicago Fire Unveil Lewandowski Home Kit for Historic 2026 Season",
  "author": "Mio Ristić",
  "date": "July 13, 2026",
  "excerpt": "Chicago Fire release the official Robert Lewandowski 2026 Home Jersey – shop Replica and Authentic versions now.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-2260392490/crop/MM5DIOBWGQ5DENZTGY5G433XMU5DAORQ/GettyImages-2260392490.jpg",
  "slug": "lewandowski-chicago-kit"
},
    {
  "id": 1015,
  "title": "Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying",
  "author": "Mio Ristić",
  "date": "June 16, 2026",
  "excerpt": "Which 2026 World Cup jerseys actually look good on the street? From Germany’s clean 1990-inspired classic to Colombia’s vibrant yellow and New Zealand’s elegant black — here’s our definitive ranking of the most wearable kits for everyday life.",
  "imageUrl": "https://assets.goal.com/images/v3/blteb5ae4bd28752ec3/adidas%20FIFA%20World%20Cup%202026%20kit%20-%20Germany.png?auto=webp&format=pjpg&width=1920&quality=60",
  "slug": "best-world-cup-2026-street-style-jerseys"
},
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
      "id": 59,
      "title": "MLS Third Kit 2025: Retro Jerseys You Need in Your Collection",
      "author": "Mio Ristić",
      "date": "September 9, 2025",
      "excerpt": "Discover the best MLS third kits of 2025 – retro-inspired jerseys from Inter Miami, Seattle Sounders, LAFC, Columbus Crew, and more. Perfect for fans and collectors.",
      "imageUrl": "https://www.mlsstore.com/content/ws/all/0c171420-bd12-42f9-9806-1480b7ee4367__548X893.jpg?w=548",
      "slug": "mls-third-kit-2025"
    },
     {
      "id": 41,
      "title": "Inter Miami 2025 \"Riptide\" Jersey – The Wave You Don’t Want to Miss",
      "author": "Mio Ristić",
      "date": "June 14, 2025",
      "excerpt": "Discover the bold new Inter Miami 2025 Riptide Third Kit inspired by Miami Blue waves and Messi’s magic. Official jersey, gear, and where to buy.",
      "imageUrl": "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls/cw1sc4jlftyqxpshxuk5.jpg",
      "slug": "inter-blue-kit"
    },
    {
      id: 19,
      title: 'Top 10 MLS Jerseys of 2024',
      author: 'Mio Ristic',
      date: 'April 23, 2025',
      excerpt: 'Style, Passion & a Bit of Magic',
      imageUrl: 'https://images.supersport.com/media/0adn4b1p/lionel-messi-24-12-g-1200.jpg?width=1920&quality=90&format=webp',
      slug: 'top-mls-jersey2024',
    },
];

  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 6));

  const loadMorePosts = () => {
    const nextPosts = blogPosts.slice(visiblePosts.length, visiblePosts.length + 6);
    setVisiblePosts((prev) => [...prev, ...nextPosts]);
  };

  return (
    <>
      

      <div className="w-full min-h-screen bg-white">
        <div className="max-w-6xl mx-auto py-12 px-4">
           <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">Jerseys</h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition duration-300"
                    unoptimized={typeof post.imageUrl === 'string' && post.imageUrl.startsWith('http')}
                    priority={post.id === 19}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold group-hover:text-blue-600 transition duration-300">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-1">{post.author} | {post.date}</p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {visiblePosts.length < blogPosts.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={loadMorePosts}
                className="cursor-pointer text-white bg-[#020617] px-6 py-3 rounded-lg hover:bg-transparent hover:text-[#020617] border-2 border-transparent hover:border-[#020617] transition duration-500"
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
