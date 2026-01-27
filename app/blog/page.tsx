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
    title: 'Hall of Fame',
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
        <h2 className="text-5xl font-bold text-[#020617] mb-12">Blog</h2>

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
        <h2 className="text-5xl font-bold text-[#020617] mb-12">
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
                  className="object-cover"
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
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
