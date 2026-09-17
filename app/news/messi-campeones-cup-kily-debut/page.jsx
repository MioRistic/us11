'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiCampeonesCupKilyDebut() {
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
    "Messi Leads Inter Miami to Campeones Cup in Kily González’s First Match";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Messi scores his 100th Inter Miami goal as the Herons win the Campeones Cup 2-0')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Messi Leads Inter Miami to Campeones Cup in Kily González’s First Match
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
            src="https://assets.goal.com/images/v3/getty-2295673367/crop/MM5DGNRSGU5DEMBTHE5G433XMU5DAORQ/GettyImages-2295673367.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Lionel Messi celebrates after scoring for Inter Miami against Cruz Azul"
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
            Messi scored his 100th Inter Miami goal the same way the club keeps collecting silver: against Cruz Azul, on a night that needed a story.
          </p>

          <p>
            Wednesday at Nu Stadium it was a header. Luis Suárez hung a ball into the box in the 24th minute. Willer Ditta had a lane. Then 5-foot-7 and 39 years old arrived first. 1-0. First Inter Miami player to 100, in 115 appearances across everything. The first of those 100 was also Cruz Azul, a stoppage-time free kick in the 2023 Leagues Cup. The bookend is too clean to ignore and too cheap to lean on.
          </p>

          <p>
            Casemiro finished it in the 81st, another header, this time off Messi’s corner. Fourth goal in five games for the Brazilian, all with his head. 2-0. Campeones Cup. One match, MLS champion versus Liga MX champion. Miami’s first trophy of 2026. Kily González’s first match on the touchline.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Watch: Messi’s 100th, then the cup
          </h2>

          <div className="relative w-full overflow-hidden rounded-3xl shadow-md aspect-video not-prose">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/guHiXnYequQ"
              title="Inter Miami vs Cruz Azul Campeones Cup highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A debut that waited on a visa
          </h2>

          <p>
            González was hired Aug. 27 to replace interim Guillermo Hoyos. The contract runs through June 2028. The work permit did not. He trained Tuesday. He lifted a cup Wednesday. He is the sixth coach in seven Inter Miami seasons, which is a sentence that should embarrass someone in the building and instead reads like logistics.
          </p>

          <p>
            After the match he said Messi told him he would make him a champion on night one. Believe the quote or don’t. The tape does not need it. Messi scored. Messi served the second. Messi was the MVP. The new manager got the version of this job that still exists: stand there while No. 10 decides whether the week was a crisis.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the cup is and is not
          </h2>

          <p>
            This is not the Champions Cup. It is not a FIFA mountain. It is a sponsored one-off that now sits 4-4 between the leagues. Treat it like that. Also treat what it ended: a Miami side that had been leaking points in MLS, sitting second in the East behind Nashville, dragging a winless run into a night that could have been another argument with a referee.
          </p>

          <p>
            They did not need a manifesto. They needed a clean sheet and two set-piece wins. Dayne St. Clair denied José Paradela early. Gabriel Fernández hit the post. Casemiro blocked the rebound. The rest was headers.
          </p>

          <p>
            Since Messi arrived in July 2023 the club has taken something every year: Leagues Cup, Supporters’ Shield, MLS Cup, now this. Four seasons. Four pieces of metal. The Concacaf Champions Cup remains the hole. The rest of the continent already knew.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The number that will travel
          </h2>

          <p>
            One hundred goals in pink. Eleven in 2023, 23 in 2024, 43 in 2025, 23 already in 2026. Desks split on the career trophy count. Do not die on that number. Die on the club count. Nobody else in this shirt has 100.
          </p>

          <p className="font-semibold text-lg mt-10">
            Sunday is San Diego at home and the table again. González will have had five days. Messi will have had a hundred. The act Donovan described earlier in the week — Miami hunting a second game after every dropped point — gets quieter when they actually win the first one. That is the entire franchise, compressed.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

            <Link href="/news/moratti-messi-inter-500-million" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2294966080/crop/MM5DIOBWGM5DENZTGU5G433XMU5DAORTG4ZA====/GettyImages-2294966080.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi"
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