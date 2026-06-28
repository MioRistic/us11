'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTvsTurkiyeReview() {
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

  const articleTitle = "USMNT Fall to Türkiye 3-2 in Group Finale But Finish Top of Group D";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT lose 3-2 to Türkiye but top Group D ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Fall to Türkiye 3-2 in Group Finale But Finish Top of Group D
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-25">June 25, 2026</time>
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

        {/* FEATURE IMAGE - Zamenićeš sliku kasnije */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2283360510/crop/MM5DCNZSGA5DSNRYHJXG653FHIYDUNBR/GettyImages-2283360510.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT vs Türkiye World Cup 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            INGLEWOOD, Calif. — It wasn’t the result they wanted, but it wasn’t a night to panic either.
          </p>

          <p>
            The United States lost 3-2 to Türkiye in their final group stage match at SoFi Stadium, but with first place already secured, Mauricio Pochettino’s side can now turn their full attention to the knockout rounds with confidence and valuable lessons learned.


          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Pulisic Returns, Berhalter Shines
          </h2>
          <p>
            The biggest positive of the night was the return of Christian Pulisic. Coming off the bench after missing the previous game, Pulisic looked sharp, dangerous, and — most importantly — fully fit. He created chances, stretched the Turkish defense, and showed no lingering effects from his injury. For the USMNT, knowing their talisman is ready for the Round of 32 is the most important takeaway.


          </p>

          <p>
           The biggest positive of the night was the return of Christian Pulisic. Coming off the bench after missing the previous game, Pulisic looked sharp, dangerous, and — most importantly — fully fit. He created chances, stretched the Turkish defense, and showed no lingering effects from his injury. For the USMNT, knowing their talisman is ready for the Round of 32 is the most important takeaway.


          </p>

          <p>
           Auston Trusty also scored his first World Cup goal early in the match, giving the USMNT a dream start and sparking emotional celebrations as he sprinted toward the bench. Moments like that matter for squad morale.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Defensive Concerns Exposed
          </h2>
          <p>
            Despite the individual positives, the game highlighted ongoing questions about defensive depth. With key starters rested, the backup unit (particularly Mark McKenzie and Miles Robinson) struggled at times to maintain organization and concentration. Türkiye scored three goals, and the manner of the concessions — especially the late winner — showed that the drop-off when the first-choice defenders are out is still noticeable.


          </p>

          <p>
            Matt Turner was left exposed on multiple occasions, and while he made some saves, the defense in front of him lacked the cohesion seen in the first two matches. This is an area Pochettino will need to address before the Round of 32.


          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>
          <p>
            A loss always stings, especially one that came so late. But context is everything. The USMNT finished the group stage with two wins and one defeat, topped Group D, and — most importantly — maintained strong team spirit. The post-match huddle, singing “Country Roads” even in defeat, showed the character this group possesses.


          </p>
          <p>
           Pochettino was measured afterward, reminding everyone that the priority was always to finish first in the group and enter the knockout stage in good condition. Mission accomplished.



          </p>
          <p>
Now the real tournament begins.




          </p>

          <p className="font-semibold text-lg mt-10">
The USMNT head into the Round of 32 with growing belief, their best players healthy and available, and a clear understanding of what they need to improve. A perfect group stage record would have been nice, but six points and first place is what truly matters.

          </p>

          <p className="font-bold text-xl mt-8">
            The statement has been made. Now it’s time to prove it.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: June 25, 2026</p>
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