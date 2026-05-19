'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
 
const Blog = () => {
  const blogPosts = [
    {
  "id": 87,
  "title": "Hall of Fame: Thierry Henry — The King Who Brought Class to New York",
  "author": "Mio Ristić",
  "date": "April 12, 2026",
  "excerpt": "From Arsenal and Barcelona to New York Red Bulls — how Thierry Henry elevated MLS with elegance, intelligence and leadership.",
  "imageUrl": "https://assets.goal.com/images/v3/getty-459466526/crop/MM5DCNZWGA5DSOJQHJXG653FHIZDGNR2GE3TM===/GettyImages-459466526.jpg?auto=webp&format=pjpg&width=1200&quality=80",
  "imagePosition": "center",
  "slug": "thierry-henry"
},
    {
      id: 86,
      title: "Hall of Fame: David Beckham — The Player Who Changed Football’s Geography",
      author: "Mio Ristić",
      date: "January 6, 2026",
      excerpt: "David Beckham's move to LA Galaxy in 2007 transformed MLS, elevating the league’s global profile and leaving a lasting legacy.",
      imageUrl: "https://i.ibb.co/kVfLGrpP/david-beckham-soccer-field-22396823.webp",
      imagePosition: "10% 5%",
      slug: "david-beckham"
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
          <h2 className="text-5xl md:text-6xl font-black tracking-[-2.8px] leading-none text-[#020617] mb-8 text-center">
          Let's talk about Legends
        </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/mls-hall-of-fame/${post.slug}`}
                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    // Object position sa JSON-a
                    style={{ objectPosition: post.imagePosition }}
                    className="object-cover group-hover:scale-105 transition duration-300"
                    unoptimized={typeof post.imageUrl === 'string' && post.imageUrl.startsWith('http')}
                    priority={post.id === 86}
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
