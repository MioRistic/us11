'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function DonovanInterMiamiAttitude() {
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
    "Donovan: Inter Miami Look for a Fight Every Time They Don’t Win";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Donovan: Inter Miami look for a fight every time they don’t win')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Donovan: Inter Miami Look for a Fight Every Time They Don’t Win
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-16">September 16, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-8 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2294428481/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DQNRRHIYTSOA=/GettyImages-2294428481.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Inter Miami players argue with officials during an MLS match"
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
            Landon Donovan is tired of watching Inter Miami lose a game and then hunt for a second one.
          </p>

          <p>
            That was the point on Unfiltered Soccer, not a referendum on Lionel Messi. Every time they tie or lose, Donovan said, they are in people’s faces. Yelling at referees. Complaining at opponents. Looking for a fight. Shake hands, he said. Walk off. It does not have to be like this every week. They are making enemies.
          </p>

          <p>
            He is not describing a single night in Nashville. He is describing a habit.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What he is actually angry about
          </h2>

          
          <p>
            Inter Miami are second in the East. They drew 2-2 with Nashville on Saturday after leading. They have the stars, the building, the clips. They also sit, per AS, first in the league in yellow cards and eighth in fouls. The numbers are a snapshot. The tape is the argument. Post-whistle theater has followed this club around since the Messi years: assistants grabbed, officials crowded, opponents turned into content.
          </p>

          <p>
            Donovan played in a league that already had a version of this. The Galaxy used to get the Real Salt Lake treatment — Kyle Beckerman in an official’s ear after every duel. If that was the comparison on the show, it is not nostalgia. It is a warning that the act stops being competitive and starts being the product.
          </p>

          <p>
            He is not asking Miami to become polite. He is asking them to stop turning every dropped point into a grievance session.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Where Howard usually sits
          </h2>

          <p>
            Tim Howard has spent two years telling the league it needs a villain. Hate Miami, he has said. It is good for MLS. Haves and have-nots. Heroes and villains. That is a different sentence from “I love watching them scream at a referee in the 94th minute.”
          </p>

          <p>
            The promo wants a coin flip: Landon or Tim. The tape of their show is sloppier than that. Howard likes heat. He has also put the onus on MLS when Miami’s heat turned into spit and punches. Those two positions can live in the same person. They do not add up to a vote.
          </p>

          <p>
            If you need a side, pick the one that matches the week. Donovan is talking about a team that is good enough to be second and still behaves like the call is the story. Howard is talking about a league that was boring before people had someone to boo.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The part Miami will not say
          </h2>

          <p>
            This club does not lose quietly because the roster was built to never be ordinary. Messi has spent a career arguing with officials in leagues that booked him for it. MLS has spent three years acting grateful he showed up. Those incentives stack. Rodrigo De Paul reciting trophies at Robert Lewandowski is the same movie with new subtitles. Kily González is still sorting a work permit while the players run the post-match.
          </p>
          {/* VIDEO */}
        <div className="relative w-full overflow-hidden rounded-3xl shadow-md mb-10 aspect-[9/16] md:aspect-video max-w-md md:max-w-none mx-auto">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/gLxs1jDJG2M"
            title="Landon Donovan and Tim Howard on Inter Miami"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

          <p>
            None of that makes Donovan wrong. It explains why the act does not stop. Enemies are a byproduct of being Inter Miami. They are also a choice.
          </p>

          <p className="font-semibold text-lg mt-10">
            The useful question is not whose side you are on. It is whether a second-place team that leads the league in yellows is competing or performing. Donovan thinks he can tell the difference. The rest of the East already voted with how they line up when the pink shirts arrive.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/moratti-messi-inter-500-million" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2294966080/crop/MM5DIOBWGM5DENZTGU5G433XMU5DAORTG4ZA====/GettyImages-2294966080.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi Barcelona"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Moratti Says He Offered Messi €500m. Messi Never Opened the Letter.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 16, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/diego-luna-meniscus-rsl" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHzGZltSPgPaMIYQ7qfUqUFz96nBx9OaDsah1QDhislUHvTHDuK4XKeGP&s=10"
                    alt="Diego Luna"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Diego Luna Will Miss the Rest of the MLS Season With a Torn Meniscus
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 16, 2026</p>
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

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 16, 2026</p>
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