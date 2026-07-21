'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiWorldCup2026Recap() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    if (!navigator?.clipboard || !currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      alert('✅ Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy link');
    }
  };

  const articleTitle = "Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Lionel Messi’s 2026 World Cup journey: Magic, drama & heartbreak 💔')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Lionel Messi at the 2026 World Cup: Magic, Controversy, and One Last Stand
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-21">July 21, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-6">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-video">
          <Image
            src="https://assets.goal.com/images/v3/bltefe763462ed181c7/crop/MM5DCMRYGA5DOMRQHJXG653FHIZDOOJ2GA======/1600.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Lionel Messi World Cup 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">
          <p>
            Even in defeat, Lionel Messi reminded the world why he remains football’s defining figure. The 2026 World Cup will be remembered as one of the most dramatic and contentious tournaments in recent memory. At its center, as always, stood the 39-year-old Argentine, who led his country to the final before falling just short against a superb Spain side.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Journey Begins
          </h2>
          <p>
            There were serious doubts before the tournament. Could a 39-year-old Messi, coming off a demanding MLS season, still carry Argentina through seven knockout matches? The group stage offered mixed signals. A frustrating draw in the opener sparked early criticism, but Messi quickly silenced the doubters with a goal and assist in the second match. By the time Argentina faced Brazil in the quarterfinals, he was once again producing moments of pure genius.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Controversies
          </h2>
          <p>
            This World Cup was far from controversy-free, especially where Argentina were concerned. Tensions boiled over in the round of 16 against Austria and exploded in the semifinal against England, where a disputed penalty and subsequent on-pitch scuffle led to multiple yellow cards. Video footage appeared to show Messi involved in the altercation, though FIFA chose not to punish him. Throughout the tournament, Argentine players and fans repeatedly complained about inconsistent refereeing, claiming stricter decisions were made against them compared to European teams.
          </p>
          <p>
            The most debated moment came in the group stage against France, when Kylian Mbappé’s goal from an apparent offside position was allowed to stand. VAR reviews became a daily talking point, and Messi himself was caught on camera expressing frustration at several calls.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Final
          </h2>
          <p>
            In the final against Spain, Argentina controlled possession but struggled to break down a brilliantly organized defense. Spain conceded only one goal across the entire tournament and limited Argentina to just two shots, neither on target. The decisive goal arrived in the 78th minute on a lightning counter-attack.
          </p>
          <p>
            When the final whistle blew, Messi sat alone on the pitch for several minutes. Later, as he received his runner-up medal, tears streamed down his face while thousands of Argentine supporters chanted his name in an emotional farewell.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Numbers
          </h2>
          <p>
            Messi finished the tournament with 8 goals and 4 assists in 8 matches. Across his World Cup career, he now holds 21 goals and 12 assists — the most direct goal contributions in history. He leaves the tournament as the player with the most appearances (34), most wins (23), and the only man to score World Cup goals in three different decades.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Happens Next?
          </h2>
          <p>
            Despite the pain of another final defeat, Messi has already made his immediate future clear. According to sources close to the player, he intends to stay at Inter Miami for at least one more season.
          </p>
          <p>
            Miami has become the perfect environment for him: less physical strain than Europe, a team built around his needs, and a city where his family is happy. After the chaos of Barcelona, Paris, and six World Cups, Inter Miami offers something he rarely found elsewhere — peace and joy in football.
          </p>
          <p>
            Whether he will attempt one final World Cup in 2030 remains unknown. At this point, even Messi himself probably doesn’t know. But after everything he has achieved since lifting the trophy in Qatar in 2022, few would dare bet against him.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Legacy Beyond Trophies
          </h2>
          <p>
            Spain deservedly won the 2026 World Cup. Yet the lasting story of the tournament will not be the winners, but the man who came so close to writing history once again.
          </p>
          <p>
            Even when he doesn’t win, Lionel Messi finds a way to transcend the result. He didn’t just play in this World Cup — he elevated it. And in doing so, he once again defeated the only opponent that eventually beats everyone: time.
          </p>
        </section>
{/* NEXT FOR YOU */}
<section className="mt-16 border-t pt-8 bg-white">
  <h2 className="text-4xl font-extrabold text-[#111] mb-8 text-center">
    Next For You
  </h2>

  <div className="grid md:grid-cols-2 gap-6 px-4 md:px-8">

    {/* Novi članak 1 - Spain World Cup */}
    <Link href="/news/spain-world-cup-victory" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Spain Won the FIFA World Cup: Ferran Torres Fires Spain to Historic Victory Over Argentina
        </h3>
      </div>
    </Link>

    {/* Novi članak 2 - Son Heung-Min */}
    <Link href="/news/el-traffico-son-return" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Son Heung-Min’s Statement Goal in LAFC’s El Tráfico Rout: A Triumphant Return
        </h3>
      </div>
    </Link>

    {/* Stari članak 1 */}
    <Link href="/news/top-10-mls-transfers-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Top 10 Most Interesting Summer Transfers in MLS
        </h3>
      </div>
    </Link>

    {/* Stari članak 2 */}
    <Link href="/news/cremaschi-parma-permanent" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Benjamin Cremaschi’s Move to Parma Made Permanent
        </h3>
      </div>
    </Link>

  </div>
</section>
        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 21, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="mt-4 sm:mt-0 hover:text-black transition-colors">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}