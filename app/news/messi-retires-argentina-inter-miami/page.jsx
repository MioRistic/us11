'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiRetiresArgentinaMiami() {
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

  const articleTitle =
    "Lionel Messi Retires From Argentina, Continues at Inter Miami Through 2028";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Lionel Messi retires from Argentina but continues at Inter Miami through 2028 ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Lionel Messi Retires From Argentina, Continues at Inter Miami Through 2028
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-01">September 1, 2026</time>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FaFacebookF className="text-gray-600" />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FaTwitter className="text-gray-600" />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FaWhatsapp className="text-gray-600" />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              aria-label="Copy link"
            >
              <FiCopy className="text-gray-600" />
            </button>
          </div>
        </header>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt17f9a8f2fd6b8229/GOAL_-_Blank_WEB_-_Facebook_-_2023-08-31T080917.696.jpg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Lionel Messi Inter Miami after retiring from Argentina national team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Lionel Messi has retired from international football with Argentina. He has not retired from Inter Miami.
          </p>

          <p>
            That distinction is the entire story now. The eight-time Ballon d’Or winner confirmed on August 31, 2026 that he is stepping away from the national team after 207 appearances and 125 goals. His last match for Argentina was the 2026 World Cup final defeat to Spain. His next matches will be in Major League Soccer, where his Inter Miami contract runs through the 2028 season.
          </p>

          <p>
            For fans who followed every Copa América and World Cup cycle, the stage has changed. The only place left to watch Lionel Messi play regularly is Inter Miami.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Lionel Messi International Retirement: What He Said
          </h2>

          <p>
            Messi wrote that the decision hurt his soul, that he had given everything for the Argentina shirt, and that the death of his father, Jorge Messi, on August 8 made him more certain. He also pointed to the next generation. He was 39. He had already won the 2022 World Cup, two Copa América titles, and Olympic gold. There was nothing left to prove in an Argentina jersey.
          </p>

          <p>
            The retirement closed a two-decade argument inside the country itself. For years Messi was treated as the Barcelona star who did not quite belong to Argentina. He left Rosario at 13. He was measured against Diego Maradona. After the 2016 Copa América final he tried to quit. The country asked him back. Lionel Scaloni’s team let him play like Messi instead of the next Maradona. Qatar completed the conversion. The 2026 World Cup did not add a second title. It did give him a last final.
          </p>

          <p>
            That chapter is over.
          </p>

          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-10 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/blt4266b7cc591b8b57/GOAL%20-%20Blank%20WEB%20-%20Facebook.jpg?quality=60&auto=webp&format=pjpg&width=1920"
              alt="Lionel Messi Argentina farewell Inter Miami future"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Copyright: Getty Images
            </div>
          </figure>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Inter Miami Contract: Messi Signed Through 2028
          </h2>

          <p>
            Messi is not a free agent and he is not looking for a new club. Inter Miami extended him in October 2025 on a three-year deal through the 2028 MLS season. He will turn 40 in June 2027. If he plays the contract out, he will be 41 when it expires.
          </p>

          <p>
            There is no credible report that he will join a Saudi club, return to Europe, or move to another MLS team. Miami is the last club. The paper runs to 2028. The body decides the real date. Messi will stop when he wants, and Inter Miami will accept it.
          </p>

          <p>
            What remains on the calendar:
          </p>

          <ul>
            <li>the rest of the 2026 MLS season and playoffs</li>
            <li>a shortened 2027 MLS season as the league shifts toward a European calendar</li>
            <li>the 2027–28 campaign</li>
            <li>a possible 2028 Concacaf Champions Cup, a title Inter Miami still does not have</li>
          </ul>

          <p>
            Without international windows, the travel drops. No more Copa or World Cup camps in the middle of the MLS year. The only job is the club. That could help him last. It could also make the weekends feel smaller.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Inter Miami Is Now the Only Stage
          </h2>

          <p>
            This is the part American soccer actually owns.
          </p>

          <p>
            Messi did not come to MLS to disappear. He came after PSG, won the Leagues Cup, won MVP, helped deliver the club’s first MLS Cup, and still leads the 2026 scoring chart. The weekend before his Argentina announcement he scored four goals in a 7–1 win over CF Montréal.
          </p>

          <p>
            The global audience used to gather for him in June and July. That audience now has to come to Apple broadcasts, Freedom Park, and regular-season Saturday nights. For MLS, that was always the point of the signing. The league does not get Messi for the World Cup anymore. It gets him for the season.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Happens After Messi Stops Playing
          </h2>

          <p>
            The next question is not which club is next. It is what Inter Miami does with him when the minutes stop.
          </p>

          <p>
            The original Miami project was built on the Beckham model: play, then stay. Reporting around the extension has long included an equity path — a stake in the club after retirement, a seat in the structure next to David Beckham and the Mas family. That is not a transfer rumor. It is an exit plan.
          </p>

          <p>
            Until then, the watch is simple. Lionel Messi will not drag Argentina through another knockout round. He will try to drag Inter Miami through another autumn. For a player asked to be two things at once for most of his career, it may be the cleanest job he has left.
          </p>

          <p className="font-bold text-xl mt-8">
            Messi’s retirement from Argentina does not end his career. It narrows it. From now on, if you want to see Lionel Messi play, you watch Inter Miami.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/balogun-everton-monaco" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt14fc8dda9e344682/crop/MM5DEMZYGQ5DCMZUGE5G433XMU5DGOBSHIYTGMA=/GettyImages-2279226293.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Folarin Balogun Everton Monaco"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Everton Reach Agreement With Monaco for Folarin Balogun
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 1, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/pochettino-usmnt-extension-2030" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Mauricio Pochettino USMNT"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Mauricio Pochettino Returns as USMNT Coach on New Deal Through 2030
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/kily-gonzalez-inter-miami" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-1736243127/crop/MM5DGNZQGA5DEMBYGE5G433XMU5DAORUGI======/GettyImages-1736243127.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Kily González Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Inter Miami Appoint Kily González as New Head Coach
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-leagues-cup" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi Inter Miami Leagues Cup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Record-Setting Lionel Messi Leads Inter Miami Opening Leagues Cup Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 1, 2026</p>
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