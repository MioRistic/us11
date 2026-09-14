'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function CavanSullivanUsmntCall() {
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
    "Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Cavan Sullivan scores twice as a USMNT call beckons ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-14">September 14, 2026</time>
          </div>
        </header>

        {/* SHARE */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on X"
          >
            <FaTwitter />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Copy link"
          >
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280"
            alt="Cavan Sullivan celebrates after scoring for the Philadelphia Union against San Diego FC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Cavan Sullivan is 16 years old, two weeks from 17, and the clip is already tired of him.
          </p>

          <p>
            That is not a compliment to Major League Soccer. It is what happens when a kid keeps scoring the kind of goals that used to be a once-a-month appointment. Sunday night in San Diego it was a back-heel off Indiana Vassilev’s cross in first-half stoppage time, then a drive through Duran Ferree’s legs in the 62nd minute, then the chip that put Frankie Westfield in for Bruno Damiani. Philadelphia won 5-0. Again. Second straight by that score. Ten games without a loss since the World Cup pause.
          </p>

          <p>
            The brace was his first in MLS. Treat that sentence carefully. First brace is a milestone for most players. For Sullivan it read like the next clip in a sequence that started when Ryan Richter stopped treating him like a luxury and started treating him like a starter.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the week actually was
          </h2>

          <p>
            Snapdragon Stadium. Sunday Night Soccer. A San Diego side that had won four in a row at home. Ian Murphy’s red card got overturned. None of it mattered. Sullivan opened the night with the finish that will live on league accounts for a week and closed the serious part of the game with a run off the left that had nothing to do with street ball. Timed. Direct. Through the goalkeeper.
          </p>

          <p>
            MLS listed him at six goals and 11 assists for the season after the match, 17 involvements, with five goals and seven assists coming in the last seven games. ESPN’s wire went five and six in seven. Use the league sheet if you need a number in a graphic. Use the tape if you need the argument.
          </p>

          <p>
            The tape says the Union’s attack now runs through a teenager who, a few months ago, could not get consecutive starts under Bradley Carnell. Carnell is gone. Richter is not asking Sullivan to fit a system that did not want him. Sullivan has said he feels “more comfortable.” That is the least interesting quote of his month and the most important.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The call that has not come
          </h2>

          <p>
            Mauricio Pochettino names a roster this week for four friendlies: Peru, Chile, Canada, Mexico. First window after a World Cup that ended against Belgium in the round of 16. Landon Donovan already said call him. Tim Howard said there are not many American attackers doing this. Pochettino said Philadelphia has good young players and maybe a few of them will come in. He did not say the name.
          </p>

          <p>
            He also spent last week talking about arrogance without attaching a jersey to it. Sullivan had told Alexi Lalas he thought he could have changed the Belgium game from the right side. Belief is not a crime at 16. It is also not how Pochettino likes his introductions written. The two things can sit next to each other. The roster will tell you which one won.
          </p>

          <p>
            If Sullivan plays against Peru on Sept. 26 he is two days short of 17. That would put him among the youngest to appear for the senior team. It would not mean the program had solved its post-tournament attack. It would mean the coach decided the club tape was louder than the podcast.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What this is not
          </h2>

          <p>
            It is not a coronation. Manchester City still owns the next chapter when he is old enough to move. The Union are 9-10-6 on the season and 8-0-2 since the break. Those are different teams wearing the same shirt. Damiani has four goals in two games. Westfield and Vassilev are the reason the back-heel had a runway. Andre Blake made a 290th appearance and a clean sheet. The night was a rout, not a one-man documentary.
          </p>

          <p>
            It is also not complicated. The United States does not produce this kind of attacker on a schedule. When one shows up in Chester and then does it in San Diego on national television, the senior team either looks or it explains itself later.
          </p>

          <p className="font-semibold text-lg mt-10">
            Pochettino has until Thursday. Sullivan has Sporting Kansas City on Saturday. The clip will be ready either way.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/nashville-sc-clinch-playoffs" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Nashville SC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    How Nashville SC Can Clinch an MLS Playoff Spot
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 12, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/ac-boise-usl-championship-2027" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png"
                    alt="Athletic Club Boise"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    AC Boise Jumps to USL Championship in 2027 After One League One Season
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 9, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/noah-allen-chicago-fire" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Noah Allen Chicago Fire"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Chicago Fire Sign Noah Allen on Loan From Inter Miami
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 4, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-retires-argentina-inter-miami" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt17f9a8f2fd6b8229/GOAL_-_Blank_WEB_-_Facebook_-_2023-08-31T080917.696.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Lionel Messi Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Lionel Messi Retires From Argentina — Inter Miami Is Where We Watch Him Now
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 3, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 14, 2026</p>
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