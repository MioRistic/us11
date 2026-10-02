'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function UsmntMexicoPreview() {
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
    "USMNT vs Mexico: The Friendly That Will Not Feel Like One";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT vs Mexico in Glendale. A friendly that will not feel like one.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT vs Mexico: The Friendly That Will Not Feel Like One
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-02">October 2, 2026</time>
          </div>
        </header>

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

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2297307455/crop/MM5DINZZHA5DENRZHE5G433XMU5DAORQ/GettyImages-2297307455.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="USMNT preparing to face Mexico"
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
            The United States will play Mexico on Saturday in a stadium that is unlikely to sound like home. That is the match. Everything else remains a question.
          </p>

          <p>
            Kickoff is scheduled for 10 p.m. ET (7 p.m. local time) at State Farm Stadium in Glendale. TNT and HBO Max will carry the game in English, with Telemundo, Universo and Peacock providing Spanish-language coverage.
          </p>

          <p>
            Officially, it is a friendly. It is also the first meeting between the two teams since Mexico&apos;s 2-1 victory over the United States in the 2025 Gold Cup final. For Mauricio Pochettino, it is the third match of a window that has already produced a 4-1 victory over Peru and a 4-2 win against Chile. Mexico, coached by Rafa Márquez, have drawn both of their matches in the window, 1-1 against Colombia and 1-1 against Peru.
          </p>

          <p>
            The United States will finish the window against Canada on Tuesday in St. Paul. Mexico will travel to Los Angeles to face Chile. But Saturday is different. The opponent is different. The stadium will be different. And the atmosphere should tell Pochettino something that the previous two games could not.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The absences are part of the story
          </h2>

          <p>
            The roster is defined as much by the players missing as those who are there. Christian Pulisic remained at Milanello after the fibula fracture he suffered against Belgium. Folarin Balogun is being rested. Weston McKennie and Tim Weah were never included in this camp. Alejandro Zendejas is out with a knee injury, while Ricardo Pepi is dealing with a muscle strain.
          </p>

          <p>
            Mexico have their own list. Raúl Jiménez, Julián Quiñones, Edson Álvarez and César Montes are all absent. Montes left camp after suffering a glute strain. That matters because this is not simply a replay of the Gold Cup final with different names. It is the first look at the next cycle while some of the players expected to shape it are still unavailable. The absences create opportunities, but they also remove some of the context that would normally make a Mexico-USMNT meeting easier to read.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Sullivan and Mora give the game its youngest storyline
          </h2>

          <p>
            Cavan Sullivan is one of the few genuinely new variables. The American is 17 and has two senior caps after making his debut against Peru at 16 years and 363 days. He played fewer than 10 minutes against Chile. Whether he starts against Mexico is far from settled. Different projected lineups have placed Sullivan on the wing, on the bench or outside the starting XI altogether. That uncertainty is worth preserving.
          </p>

          <p>
            Gilberto Mora is Mexico&apos;s corresponding young storyline. He is also 17, but his international experience is already considerably greater. Mora has 13 caps for Mexico and was a doubt after an ankle flare-up during training following the draw with Peru. He arrived in Arizona without a brace, trained and remains part of Márquez&apos;s plans for the match.
          </p>

          <p>
            If both teenagers play, they will inevitably become part of the game&apos;s central image. If only one plays, the other should not be forced into the story simply because the comparison is convenient. The next generation does not need to be manufactured. It is already there.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Richards has already shown the edge
          </h2>

          <p>
            Chris Richards may be one of the players who understands the tone of the match better than anyone. He scored against Chile and was involved in the confrontation that followed after Leandro Hernández put a foot into Brian Schwake. It was a reminder that the word &quot;friendly&quot; does not necessarily describe how a Mexico-USMNT match feels once the players are on the field.
          </p>

          <p>
            Tyler Adams is also in camp. Antonee Robinson and Sergiño Dest have both said this week that the friendly label does not change what Mexico represents. The crowd in Glendale will test that idea quickly. The United States are unbeaten in their last three meetings with Mexico in Arizona, with the most recent ending 1-1 at this stadium in April 2023. That is useful historical context. It is not a form guide.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Predicted lineups are not team news
          </h2>

          <p>
            There is already plenty of speculation about who will start. One projected XI has Schwake, Hall and Reyna, but no Sullivan. Another has Brady, Sullivan and Hall. A third includes Dest, Richards, Robinson, Adams, Tillman and Reyna, with Mora in Mexico&apos;s front line. None of those lineups tells us what Pochettino has actually decided.
          </p>

          <p>
            That is particularly relevant during a window in which the United States coach has already handed out a dozen debuts. He does not need to give another player a first cap against Mexico to make Saturday useful. The more important question is whether the players who impressed against Chile can handle an opponent with a different level of experience and pressure.
          </p>

          <p>
            Mexico still have Hirving Lozano. They still have Santiago Giménez. They still have Johan Vásquez. And they will have a stadium in which the green shirts are likely to be far more visible than the American ones. That is a different examination from Peru or Chile.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The game is the test
          </h2>

          <p>
            The score will not qualify anyone for anything. The tape will. Who starts matters. Who takes responsibility when Mexico controls possession matters. Who disappears matters. Who walks into the first foul matters. Those moments will tell Pochettino more about his players than a projected lineup ever could.
          </p>

          <p>
            The United States have spent this window looking toward the next cycle. Peru showed what the new generation can do when given space. Chile showed that the young players can contribute to a result. Mexico should show something else. Whether they can do it when the game feels less like an exhibition and more like the rivalry it has always been.
          </p>

          <p className="font-semibold text-lg mt-10">
            That is the announcement. The result can wait until Sunday.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/pulisic-milan-2031" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2296411105/crop/MM5DCNRZGI5DSNJSHJXG653FHI2DGNR2GEZDC===/GettyImages-2296411105.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Christian Pulisic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Milan Want Christian Pulisic Through 2031. The Harder Part Is Getting There
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 2, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/usmnt-peru-kids-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1083844060/crop/MM5DGNJYGA5DEMBRGQ5G433XMU5DAORRHA3Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="USMNT vs Peru"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT&apos;s New Era Starts With a 4-1 Win Over Peru — and a Lot of Questions
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 28, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/usmnt-tim-ream-captaincy" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt068fb33c5ea803c3/GOAL_-_Blank_WEB_-_Facebook.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Tim Ream"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    St. Louis Honors World Cup Captain Tim Ream While the USMNT Looks for the Next Armband
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 29, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/cavan-sullivan-usmnt-call" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280"
                    alt="Cavan Sullivan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 14, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 2, 2026</p>
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