'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function UsmntRosterSullivanPulisic() {
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
    "Pochettino Called the Kids. He Left Pulisic Off.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Cavan Sullivan is in. Christian Pulisic is out. Pochettino’s first post-World Cup roster.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Pochettino Called the Kids. He Left Pulisic Off.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-17">September 17, 2026</time>
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
            src="https://assets.goal.com/images/v3/imago-sport-1079257579/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU4Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Cavan Sullivan and the USMNT’s first post-World Cup cycle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Imago
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Mauricio Pochettino’s first roster after a World Cup is a statement with a teenager in the headline.
          </p>

          <p>
            Cavan Sullivan, 16, is in. Christian Pulisic is not. Folarin Balogun is not. Weston McKennie is not. Diego Luna is not. Thirteen players on the list have never earned a senior cap. Thirteen names from the World Cup 26 are back. The United States play Peru, Chile, Canada and Mexico between Sept. 26 and Oct. 6. The 2030 cycle starts here, whether the old face of the program likes the optics or not.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the list actually is
          </h2>

          <p>
            ESPN and The Guardian put it at 28. AP and U.S. Soccer’s preview language had been 26. Use the published camp list when the PDF lands. The shape does not change with two names.
          </p>

          <p>
            Sullivan is the hook because the tape demanded it. A brace in San Diego. Production since the World Cup pause. Philadelphia’s attack now runs through a kid who turns 17 on Sept. 28. If he plays against Peru in Orlando he will be among the youngest to appear for this team. He will not beat Freddy Adu’s record from 2006 unless the calendar lies. Call him historic. Do not call him the youngest until he takes the field and the birthdays are checked.
          </p>

          <p>
            He is not alone. Adri Mehmeti, 17, comes from the Red Bulls. Mathis Albert from Dortmund. Neil Pierre and Frankie Westfield from the Union. Peyton Miller, Julian Hall, Zavier Gozo, Justin Ellis, Brooklyn Raines, Cole Campbell, Diego Kochen, Brian Schwake. That is a camp, not a coronation.
          </p>

          <p>
            The veterans who survived: Tyler Adams, Chris Richards, Antonee Robinson, Miles Robinson, Sergiño Dest, Yunus Musah, Malik Tillman, Gio Reyna, Ricardo Pepi, Matt Freese, Chris Brady, Alex Freeman, Auston Trusty, Sebastian Berhalter. Musah had not been in a U.S. camp since before the 2025 Gold Cup. He is Pulisic’s teammate at Milan. He made the trip. Pulisic did not.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why the omissions are not one story
          </h2>

          <p>
            Pulisic left the Belgium game with a lower-leg injury that became a microfracture and a bone bruise. He missed the start of Milan’s season. Ruben Amorim was not quiet about it. He played well when he came back last weekend. That was not enough.
          </p>

          <p>
            FOX’s Doug McIntyre reported a strained relationship that dates to Pulisic skipping the 2025 Gold Cup. Pochettino used an expletive about that choice earlier this week. Both things can be true: the player is not fully through a World Cup injury, and the coach is done pretending the Gold Cup chapter closed clean. “End of an era” is a headline. It is not a retirement. It is a window.
          </p>

          <p>
            Balogun has barely played for Monaco after a move to Everton collapsed. McKennie has not appeared for Juventus this season because of a muscle problem. Luna is having the meniscus repaired and will miss months. Those are medical. The World Cup cuts around them — Matt Turner, Tim Ream, Joe Scally, Tim Weah, Brenden Aaronson, Haji Wright, Cristian Roldan, Alejandro Zendejas, Max Arfsten, Mark McKenzie — are the cycle turning.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What this camp is for
          </h2>

          <p>
            Pochettino said after the tournament that Philadelphia had good young players and that some of them might come in. He did not say Sullivan’s name then. He put it on a list now. He also talked about arrogance without pinning a shirt to it. Sullivan had told a studio he thought he could have changed the Belgium game. Belief at 16 is not a crime. It is also not how this coach likes his introductions written.
          </p>

          <p>
            The useful test is minutes, not quotes. Peru on the 26th. Chile on the 29th. Then Canada and Mexico. If Sullivan plays, the clip writes itself. If he sits behind Pepi and Reyna, the call-up was still the point: the program is looking at 2030 with a 16-year-old in the building and the last decade’s star at home in Milan.
          </p>

          <p className="font-semibold text-lg mt-10">
            Pulisic has 90 caps. He will get more if he is fit and the relationship thaws. This roster does not owe him the first week of the next cycle. It owes the next cycle a look at the players who will still be here when Spain, Portugal and Morocco arrive. Sullivan is the name. The list is the news.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/messi-campeones-cup-kily-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2295673367/crop/MM5DGNRSGU5DEMBTHE5G433XMU5DAORQ/GettyImages-2295673367.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Leads Inter Miami to Campeones Cup in Kily González’s First Match
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 17, 2026</p>
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

            <Link href="/news/donovan-inter-miami-attitude" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2294428481/crop/MM5DEMRXGI5DCMRXHA5G433XMU5DQNRRHIYTSOA=/GettyImages-2294428481.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Donovan: Inter Miami Look for a Fight Every Time They Don’t Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 16, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 17, 2026</p>
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