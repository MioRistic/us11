'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PlayerPathwaysArticle = () => {
  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
                <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                    Mexico FIFA World Cup 2026 Kit: The Green Jersey
                  </h1>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>Mio Ristić</span>
                    <span>•</span>
                    <time dateTime="2026-01-25">January 25, 2026</time>
                  </div>
                </header>
        
                {/* FEATURE IMAGE */}
                <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
                  <Image
                    src="https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018"
                    alt="Mexico 2026 World Cup Home Kit"
                    width={1018}
                    height={420}
                    className="w-full h-[420px] object-cover object-center"
                    priority
                  />
                  <figcaption className="text-xs text-gray-400 px-3 py-2">
                    Creator: adidas | Copyright: 2025
                  </figcaption>
                </figure>
        

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">

          <h2 className="text-xl font-semibold mt-6">Introduction</h2>
          <p>
            In the world of youth soccer, information is more accessible than ever — but that doesn’t mean it’s accurate. Young players grow up with films, biographies, and motivational stories that rarely reflect the real path to success. Instead of processes, they sell fairy tales. Instead of hard work, they sell emotion.
          </p>
          <p>
            The reality is much more complex. Only a small percentage of players ever reach the top. For everyone else, the real challenge isn’t believing in myths, but understanding their own potential and building a path that makes sense for them — academically, athletically, and personally.
          </p>
          <p>
            That’s why we spoke with Harrison Szep, agent and founder of StudentAthlete.ai, who has dedicated his career to cutting through the illusions of the U.S. soccer system. His goal isn’t to sell dreams, but to help young players and their families make informed, long-term decisions.
          </p>
          <p>
            This interview isn’t a motivational speech. It’s a guide — for anyone who wants to understand how the system really works, and how to find their place in it.
          </p>

          <h2 className="text-xl font-semibold mt-6">Getting Started with StudentAthlete.ai</h2>
          <p>
            I began helping athletes with recruitment during my third year of college in 2022. My entry point was assisting players with transfers, which gave me invaluable hands-on experience quickly. By 2023, I had formalized the service and started charging for my work. To date, I've successfully guided over 100 athletes through their commitment process. What drives me is seeing talented young players navigate a complex system and ultimately find the right fit for their academic and athletic development.
          </p>

          <h2 className="text-xl font-semibold mt-6">Working with Young Players</h2>
          <p>
            The biggest difference today is our network. Initially, I had 200 coaches, so clients paid for access to connections. Now, we have over 1,000 connections across all 50 states, making it easier to find the right fit for any player who meets academic and athletic standards.
          </p>
          <p>
            Families today are more informed and expect transparency and personalized guidance. They want to understand not just where they can go, but why a particular program is the right fit.
          </p>

          <h2 className="text-xl font-semibold mt-6">Following the U.S. Soccer System</h2>
          <p>
            Personal experience inspired me to study the system deeply. College soccer looked shiny from the outside, but I learned it’s all about fit — what works for one player may not for another. Staying updated involves watching games, speaking with coaches daily, and relying on a team that’s equally obsessed with the sport.
          </p>

          <h2 className="text-xl font-semibold mt-6">Program Choices</h2>
          <p>
            Division III and II pathways are becoming common, but often for the wrong reasons. Many families assume D2 or D3 keeps doors open in the NCAA, but NAIA and NJCAA can offer superior options. Choosing the right program matters more than divisional labels.
          </p>

          <h2 className="text-xl font-semibold mt-6">Advice for Young Players</h2>
          <p>
            For a talented 14-year-old, I recommend going abroad to experience different styles of play and coaching philosophies. Americans should consider Europe; Europeans, South America. This helps players mature and improves their development before college soccer.
          </p>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>
            The system won’t bend to your dreams, but it can be understood. Harrison Szep’s goal isn’t to sell fairy tales — it’s to help players make the right decisions, build their path, and maximize potential.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Author: <a href="https://studentathlete.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mio Ristić</a></p>
            <p>Source: StudentAthlete.ai</p>
          </div>
          <div className="flex gap-2">
            <Link href="/academy-insider/player-pathways" className="text-sm text-gray-500 hover:text-gray-800">
              Back to Player Pathways
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
};

export default PlayerPathwaysArticle;
