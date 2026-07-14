'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Top10MLSTransfers2026() {
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

  const articleTitle = "Top 10 Most Interesting Summer Transfers in MLS (as of July 13, 2026)";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Top 10 Summer Transfers in MLS 2026 🔥')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Top 10 Most Interesting Summer Transfers in MLS (as of July 13, 2026)
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-13">July 13, 2026</time>
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
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/0p04zs5V/dc2772d1-orlando-city-antoine-griezmann.avif"
            alt="MLS Summer Transfers 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Free Malaysia Today
Copyright: © Free Malaysia Today, 2026
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
<section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

  <p>
    The 2026 MLS summer transfer window has burst into life, with global superstars arriving, promising young talents on the move, and ambitious clubs making bold statements ahead of the second half of the season. While there is still plenty of business to be done before the deadline, several transfers have already captured the attention of fans across the league.
  </p>

  <p>
    We couldn't separate the two biggest signings of the summer, so they share the top spot in our rankings. From blockbuster arrivals to smart value additions and one notable departure, here are the 10 most interesting MLS transfers completed so far.
  </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">1. Antoine Griezmann → Orlando City</h2>
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/MDvczDc9/salario-antoine-griezmann-orlando-city-mls-principal-1.jpg"
            alt="MLS Summer Transfers 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Deportes TVC
          </div>
        </figure>
          <p>
            The 2018 World Cup winner Antoine Griezmann has joined Orlando City as a Designated Player on a free transfer from Atlético Madrid.
          </p>
          <p>
            At 35, Griezmann is no longer the explosive, tireless forward who terrorized defenses in his prime, but he remains one of the most intelligent and technically gifted attackers of his generation. His debut in a friendly against Tampa Bay Rowdies already offered a glimpse of what he can still provide: a goal and an assist in just over 60 minutes, showing sharp movement, intelligent link-up play, and the composure that has defined his career.
          </p>
          <p>
            For Orlando City, this is more than just a signing of a veteran star. Griezmann brings proven leadership and a winning mentality honed at the highest levels in Europe. He has the ability to elevate those around him — not just through his on-ball quality, but through his work ethic, positional understanding, and experience in big moments.
          </p>
          <p>
            Beyond the pitch, his arrival delivers a significant marketing and commercial boost. A player of Griezmann’s global profile immediately raises the profile of both the club and the league in a key market. For a franchise that has long aimed to establish itself as a major player in Florida and beyond, landing a player of this caliber is a statement of serious ambition.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  2. Robert Lewandowski → Chicago Fire
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://assets.goal.com/images/v3/getty-2260392490/crop/MM5DIOBWGQ5DENZTGY5G433XMU5DAORQ/GettyImages-2260392490.jpg"
    alt="Robert Lewandowski Chicago Fire 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: Judit Cartiel | 
    Credit: Getty Images
    Copyright: 2026 Getty Images
  </div>
</figure>

<p>
  The legendary Polish striker Robert Lewandowski has signed with Chicago Fire as a free agent after departing Barcelona.
</p>

<p>
  At 37, Lewandowski is no longer the relentless goal machine who dominated the Bundesliga for years, but he remains one of the most clinical and intelligent finishers in world football. 
</p>

<p>
  His movement inside the box, positioning, and ability to score from a variety of situations are still elite, even if the explosive pace of his younger days has faded.
</p>

<p>
  For Chicago Fire, this is a transformative signing. The club has struggled for consistent relevance in recent seasons, and Lewandowski’s arrival on a two-year Designated Player contract instantly raises the profile of the franchise both on and off the field.
</p>

<p>
  He gives them a proven goal scorer who knows how to perform at the highest level and lead by example in the locker room.
</p>

<p>
  Beyond the numbers, Lewandowski brings a winning mentality and vast experience from Bayern Munich, Barcelona, and the Polish national team. For a Fire team looking to take the next step, landing one of the greatest strikers of the past decade is a clear statement of ambition.
</p>
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  3. Allan Saint-Maximin → Charlotte FC
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://assets.goal.com/images/v3/getty-2271855695/crop/MM5DCNRQGA5DSMBQHJXG653FHI4TKOB2HEZQ====/GettyImages-2271855695.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    alt="Allan Saint-Maximin Charlotte FC 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: SAMEER AL-DOUMY | 
    Credit: AFP via Getty Images
    Copyright: AFP or licensors
  </div>
</figure>

<p>
  The fast, skillful French winger Allan Saint-Maximin has joined Charlotte FC as a free agent and Designated Player.
</p>

<p>
  Saint-Maximin arrives from RC Lens with a reputation as one of the most dynamic and unpredictable attackers in European football. 
</p>

<p>
  Known for his explosive dribbling, pace, and ability to beat defenders in tight spaces, he brings valuable Premier League experience from his time at Newcastle United.
</p>

<p>
  For Charlotte, this signing is a direct and ambitious response to the departure of Wilfried Zaha. Saint-Maximin, still only 29 and in his prime, has the potential to become the focal point of the attack and a major source of excitement for the fans.
</p>

<p>
  Beyond his on-ball talent, he adds flair and unpredictability that can energize both the team and the fanbase. If he can stay consistent and injury-free, Saint-Maximin has all the tools to be one of the standout performers in MLS this season.
</p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  4. Brais Méndez → Columbus Crew
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://i.ibb.co/k2HxVbL6/Getty-Images-1063322776-1536x1024.webp"
    alt="Brais Méndez Columbus Crew 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: LLUIS GENE | 
    Credit: AFP via Getty Images
  </div>
</figure>

<p>
  The Spanish international midfielder Brais Méndez has joined Columbus Crew as a Designated Player.
</p>

<p>
  At 29, Méndez arrives from Real Sociedad as a technically gifted, intelligent central midfielder with excellent set-piece delivery and a strong understanding of the game.
</p>

<p>
  Known for his composure on the ball, vision, and ability to control the tempo, he brings European experience and a winning mentality to a Crew side that is looking to strengthen its midfield depth and creativity.
</p>

<p>
  This is a smart, high-quality addition for Columbus. Méndez has the profile of a player who can contribute immediately in the center of the park and help the team compete at a higher level in the Eastern Conference.
</p>

<h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  5. Duncan McGuire → Houston Dynamo
</h2>
{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6e3vTYrBl7bfK6udGb-qEeKVFqeEpDTiNtBAQs8Xn6joZ4MzEasIqGQ&s=10"
    alt="Brais Méndez Columbus Crew 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: Megan Briggs
 | 
Credit: Getty Images
Copyright: 2025 Getty Images
  </div>
</figure>

<p>
  One of the most promising young American strikers, Duncan McGuire, has moved within MLS, joining Houston Dynamo from Orlando City.
</p>

<p>
  The 24-year-old brings size, athleticism, and a natural goal-scoring instinct. Standing at 6'3", McGuire is strong in the air, holds up play well, and possesses a clinical finish that has made him one of the most dangerous young forwards in the league.
</p>

<p>
  Houston Dynamo have struggled to find consistent scoring options in recent seasons, and McGuire’s arrival represents a significant upgrade to their attacking line. His combination of physical presence and movement makes him an ideal target man who can also stretch defenses with his runs in behind.
</p>

<p>
  This intra-league move gives Houston a high-upside player who is still improving and has the potential to become a cornerstone of their attack for years to come.
</p>

         <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  6. Moisés Mosquera → Sporting Kansas City
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://i.ibb.co/jZzGzV25/Getty-Images-2229762342.jpg"
    alt="Moisés Mosquera Sporting Kansas City 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: ULISES RUIZ | 
    Credit: AFP via Getty Images
    Copyright: AFP or licensors
  </div>
</figure>

<p>
  The young Colombian center-back Moisés Mosquera has joined Sporting Kansas City.
</p>

<p>
  Mosquera arrives from FC Juárez with a strong physical profile and good pace for a central defender. At 24 years old, he is a modern-style stopper who is comfortable carrying the ball out from the back and competing in aerial duels.
</p>

<p>
  Sporting Kansas City has struggled with defensive consistency in recent seasons, and Mosquera represents a targeted reinforcement for the backline. He brings youth, athleticism, and the potential to develop into a long-term starter in MLS.
</p>

<p>
  This is a sensible, value-oriented signing for SKC — a player with upside who can help stabilize the defense while growing alongside the team.
</p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  7. Nelson Palacio → Toronto FC
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://i.ibb.co/r2tgWxC1/2022-11-29-T161457-Z-1861440355-UP1-EIBT194-VEZ-RTRMADP-3-SOCCER-WORLDCUP-ECU-SEN-REPORT-e1755801119823.jpg"
    alt="Nelson Palacio Toronto FC 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: JENNIFER LORENZINI | 
    Credit: REUTERS
  </div>
</figure>

<p>
  The energetic Colombian midfielder Nelson Palacio has joined Toronto FC.
</p>

<p>
  Palacio arrives from Real Salt Lake as a dynamic, high-pressing central midfielder with excellent stamina and the ability to cover large distances.
</p>

<p>
  At 24 years old, he brings youth, intensity, and a strong work rate — qualities that Toronto has often lacked in midfield in recent seasons. He is comfortable both winning the ball back and progressing it forward, making him a well-rounded addition to the squad.
</p>

<p>
  This move gives Toronto a player who can inject energy and competitiveness into the engine room. If he adapts quickly to the physical demands of the league, Palacio has the profile to become an important piece in Toronto’s rebuild.
</p>

        <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  8. Daniel (GK) → FC Dallas
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://i.ibb.co/C5Mqgwf0/01hqdy5gn7q3p9drvzy5.webp"
    alt="Daniel Goalkeeper FC Dallas 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: Omar Vega | 
    Credit: Getty Images
    Copyright: 2023 Omar Vega
  </div>
</figure>

<p>
  The experienced Brazilian goalkeeper Daniel has joined FC Dallas.
</p>

<p>
  Daniel arrives as a veteran presence between the posts, bringing stability and leadership to a position that has been a point of concern for Dallas in recent seasons.
</p>

<p>
  Known for his shot-stopping ability, command of the penalty area, and experience in competitive environments, the Brazilian goalkeeper is expected to immediately challenge for the starting spot and provide consistency at the back.
</p>

<p>
  For FC Dallas, this is a pragmatic and important signing. In a league where goalkeepers can define a season, adding a seasoned professional like Daniel should help tighten the defense and give the team a more reliable last line of defense.
</p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  9. Gabriel Pec → Cruzeiro
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://assets.goal.com/images/v3/getty-2226070146/crop/MM5DGNRRHA5DEMBTGU5G433XMU5DOOJWHI4TQ===/GettyImages-2226070146.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    alt="Gabriel Pec Cruzeiro 2026"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: Luiza Moraes | 
    Credit: Getty Images
    Copyright: 2025 Getty Images
  </div>
</figure>

<p>
  The talented Brazilian winger Gabriel Pec has returned home, completing a transfer to Cruzeiro from LA Galaxy.
</p>

<p>
  Pec was one of the most creative and exciting young players in MLS during his time with the Galaxy. Known for his dribbling, flair, and ability to create chances from the right wing, he quickly became a fan favorite in Los Angeles.
</p>

<p>
  At just 24 years old, Pec showed significant potential in the league, but the opportunity to return to Brazil and join a historic club like Cruzeiro proved too attractive to turn down.
</p>

<p>
  For LA Galaxy, this represents a notable loss. Pec was a key part of their attacking threat, and replacing his creativity and dynamism will not be easy. For Cruzeiro, however, it is a smart addition of a young, hungry talent with proven quality in a competitive league.
</p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
  10. Emir Karić → Sporting Kansas City
</h2>

{/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://i.ibb.co/XZc4whwT/2025-08-28-T205307-Z-2122236778-RC27-FGAVCAME-RTRMADP-3-SOCCER-CHAMPIONS-STU-BOD.jpg"
    alt="Emir Karić Sporting Kansas City"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Creator: Borut Zivulovic | 
    Credit: REUTERS
    Copyright: F.A.BOBO
  </div>
</figure>

<p>
  The Bosnian left-back Emir Karić has joined Sporting Kansas City.
</p>

<p>
  Karić arrives from Sturm Graz with solid European experience, having played regularly in the Austrian league and European competitions.
</p>

<p>
  A reliable and tactically disciplined defender, he brings composure on the ball, good crossing ability from the left flank, and a strong understanding of defensive organization — qualities that SKC has needed in recent seasons.
</p>

<p>
  At 29 years old and in his prime, Karić represents a sensible, low-risk reinforcement for the left side of defense. He should provide immediate stability and competition for the starting spot while helping Sporting Kansas City build a more consistent backline.
</p>

<p className="font-bold text-xl mt-8">
  The transfer window is still wide open, and plenty of major moves could still be on the horizon. As clubs continue to strengthen their squads ahead of the playoff push, this ranking is sure to evolve. For now, these 10 transfers stand out as the biggest, boldest, and most intriguing deals of the 2026 MLS summer window—and each has the potential to leave a lasting mark on the season.
</p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 13, 2026</p>
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