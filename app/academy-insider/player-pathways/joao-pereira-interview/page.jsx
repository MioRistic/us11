'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import YouTubeVideo from '@/app/ui/YouTubeVideo';
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const JoaoPereiraArticle = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const articleTitle = "From Portugal to the U.S. – Learning the Hard Way: Exclusive Interview with João Pereira";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + " " + currentUrl)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">{articleTitle}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-31">January 31, 2026</time>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
            </div>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/s9hjNbJL/Profile-Pic.jpg"
            alt="João Pereira"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Image: João Pereira / USL2
          </figcaption>
        </figure>

         {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">

          {/* UVOD */}
          <h2 className="text-xl font-semibold mt-6">Introduction</h2>
          <p>
            While most young footballers from the United States dream of Europe — of academies in England, Germany, or Spain and one-way tickets toward the “real” game — João Pereira chose the opposite direction. His journey didn’t begin toward the Old Continent. It began from it.
          </p>
          <p>
            He arrived in America from Portugal to play college soccer, without the illusion that a passport or the label of a “European player” would open doors for him. He quickly understood that the U.S. system doesn’t reward reputation — it rewards adaptation. The rhythms are different, the season is shorter, the competition is ruthless, and the margins for error are thin.
          </p>
          <p>
            In that space between expectation and reality, João began to build something more valuable than status: an understanding of the game and an understanding of himself. He learned where he already had an edge, where he needed to improve, and how to search for one more inch every day — whether he was in the starting lineup or not.
          </p>
          <p>
            Although he is only 21, his experience already goes beyond his years. He has lived the college system, USL2, cultural shock, the pressure to prove himself daily, and the silence that comes when minutes don’t arrive. Because of that, João Pereira doesn’t speak as someone who “knows everything,” but as someone who had to learn everything — the hard way.
          </p>
          <p>
            That is why this interview isn’t a story about quick success. It’s about adaptation, patience, and mental resilience. And that is why João is a voice worth listening to for any young player stepping into the system — whether they’re coming from Europe to the U.S. or the other way around.
          </p>

            {/* Q&A CONTENT */}
          <h2 className="text-xl font-semibold mt-6">To start, can you briefly introduce yourself and your football journey so far?</h2>
          <p className="font-bold italic">
            "I’m João Pereira, a 21‑year‑old Portuguese player currently playing college soccer in the U.S., with experience in the American leagues (USL2). I create educational football content for young players and parents who want to get informed about the college system in America. Football has taken me from local youth teams in Portugal to studying and competing in the U.S., which forced me to grow not just as a player, but as a person balancing school, a new culture, and my ambitions in the game."
          </p>

          <h2 className="text-xl font-semibold mt-6">How did you first enter the academy system, and what were your expectations at that time?

</h2>
          <p className="font-bold italic">
            "I started in Portugal like most kids: local club, training several times a week, playing weekends, completely obsessed with the game. My 'academy system' experience came through increasingly competitive environments and then the jump to the U.S. college pathway and USL2, where the structure feels very professional, even if it’s officially 'Semi-pro.' When I first entered this level, I expected that if you were good and worked hard, things would more or less take care of themselves: you play, you develop, and the pathway is linear. I quickly realized it’s much more political, competitive, and fragile than that, and that being good is just the starting point, not the guarantee."
          </p>

          

          <h2 className="text-xl font-semibold mt-6">What was the biggest reality check you experienced once you were inside the system?</h2>
          <p className="font-bold italic">
            "One of the biggest reality checks was how quickly your status can change. In Europe, you often have a long season where your form can go up and down, and you still prove yourself over time; in the U.S. college system, a bad week in a three‑month season can change how a coach sees you for the whole year. Another shock was how many players at this level are willing to do absolutely anything to stay in the team: extra work, playing through pain, changing positions, accepting roles that don’t match their 'dream version' of themselves. It taught me that mindset and adaptability can be more decisive than pure talent once you’re inside the system."
          </p>

          <h2 className="text-xl font-semibold mt-6">Have you ever been in a situation where a coach told you something like: “You have to prove you’re the best, or you’ll be on the bench for the whole season”?
How did you deal with that kind of pressure mentally and emotionally?</h2>
          <p className="font-bold italic">
            "I have been in situations where the message from a coach was basically: 'If you don’t prove you’re the best, you won’t play.' Sometimes it’s said directly, sometimes it’s implied in every session or team talk. Mentally, this was extremely difficult since players tend to perform better when the coach believes in them, but I had to get used to proving myself in every situation. The way I dealt with it was by focusing on controllables like sleep, diet, and the gym. I also tried to separate my identity from how many minutes I had, reminding myself I'm more than the last lineup or performance. Without some mental stability, that pressure easily turns into anxiety, and playing 'not to make mistakes' instead of playing freely."
          </p>
           <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/uSjUuWcMNac" 
      title="MLS Matchday 13 Highlights"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>


          <h2 className="text-xl font-semibold mt-6">Looking back, what do you think young players misunderstand most about professional academies?</h2>
          <p className="font-bold italic">
            "They imagine a straight line to 'pro,' when reality looks much more like ups, downs, injuries, position changes, being benched, moving clubs or schools, and having to reinvent yourself several times."
          </p>

          <h2 className="text-xl font-semibold mt-6">Do you think finances can be a serious obstacle for parents who want to support a talented child in football? In what ways does money influence opportunities?</h2>
          <p className="font-bold italic">
            "Finances absolutely matter. Even in 'amateur' or 'developmental' setups, there are club fees, travel, tournaments, showcases, ID camps, equipment. In the U.S. context, partial scholarships, housing, and visa costs that families have to cover, even if some tuition is paid. Money influences who can afford the right environments, exposure events, and extra support. Many talented kids either never get seen or they feel a huge emotional burden because they know their parents are sacrificing a lot, and they 'must not fail.'"
          </p>

          <h2 className="text-xl font-semibold mt-6">Can you describe a moment that really shaped you — either positively or negatively — during your development years?</h2>
          <p className="font-bold italic">
            "One of the most shaping moments for me was a low one: feeling like I wasn’t trusted as much as I believed I could contribute, and seeing my minutes not reflect how hard I was working. That frustration forced me to decide: either I become bitter and blame coaches, or I take radical responsibility for everything I can control. Out of that came daily habits that I still use today: extra individual work, honest self-analysis after games, and more intentional communication with coaches instead of silently waiting for them to 'notice me.' That shift did more for my career than any single good performance."
          </p>

          <h2 className="text-xl font-semibold mt-6">How important is the mental side of the game compared to the physical and technical aspects?</h2>
          <p className="font-bold italic">
            "Physical and technical levels are your ticket in. Once everyone is reasonably fit and technically solid, the mental side becomes just as important, if not more. The ability to handle being benched or criticized; to perform under pressure, and in big games; and even your ability to stay consistent even when you miss home or have enormous amounts of school work. Those mental skills often decide who actually progresses and who quietly disappears."
          </p>

          <h2 className="text-xl font-semibold mt-6">What advice would you give to a 14–16 year old player who is dreaming of going pro?</h2>
          <p className="font-bold italic">
            "Obsess over fundamentals. Get used to honesty. Strengthen your body. Learn the system you’re aiming for. Keep school alive as a real option."
          </p>

          <h2 className="text-xl font-semibold mt-6">If you could speak to your younger self before entering the academy, what would you tell him?</h2>
          <p className="font-bold italic">
            "Don’t attach your self-worth to starting or not starting. Ask more questions, communicate with coaches, be patient with your physical development, and use every environment—good or bad—to learn about the game and yourself."
          </p>

          <h2 className="text-xl font-semibold mt-6">What role did coaches, family, and your environment play in your journey?</h2>
          <p className="font-bold italic">
            "Coaches set standards and open doors. Family and environment kept me grounded and moving. Having people who care about you as a person, not just as a player, is one of the most underrated advantages a young footballer can have."
          </p>

          <h2 className="text-xl font-semibold mt-6">You’re still young — do you see yourself as a footballer for many years to come, or have you also thought about going into coaching one day?</h2>
          <p className="font-bold italic">
            "I see myself playing as long as my body and opportunities allow. Coaching interests me, and the game doesn’t end when your playing peak ends; there are many ways to stay in football if you love it."
          </p>

          <h2 className="text-xl font-semibold mt-6">What is the main thing you would change about the college/academy system based on your experience?</h2>
          <p className="font-bold italic">
            "Make pathways more accessible, lower-cost, with better mental support and honest communication to families about probabilities of success."
          </p>

          <h2 className="text-xl font-semibold mt-6">How did you come up with the idea to start your YouTube channel?
Your content is very educational and it’s clear you’ve put a lot of work into it — what motivated you to do that?</h2>
          <p className="font-bold italic">
            "The U.S. system is confusing from Europe. One clear video can save a family months of confusion or thousands of euros. I wish I had honest breakdowns like this when I was 16–17."
          </p>

          <h2 className="text-xl font-semibold mt-6">Finally, what does success in football truly mean to you today?</h2>
          <p className="font-bold italic">
            "Using my experiences to help younger players and parents, keeping my love for the game alive, and positively impacting others’ journeys. That is real success."
          </p>

          {/* CLOSING */}
          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>
            João Pereira’s story isn’t about shortcuts. It’s about learning how to survive inside systems that don’t promise anything — and still finding meaning in the work.
          </p>
          <p>
            At 21, he already understands something many players never do: that football isn’t just about talent or trophies, but about identity, resilience, and impact. Whether João’s future is defined by goals, coaching, or education, one thing is clear — his value to the game goes beyond the scoreboard.
          </p>
          <p>
            And for every young player trying to find their place in an uncertain system, his voice offers something rare: honesty without illusions, and ambition without arrogance.
          </p>

        </section>

      {/* YOUTUBE VIDEO LINK */}
<div className="my-6 p-4 bg-gray-100 rounded-lg text-center">
  <p className="mb-2">
    Watch João Pereira’s video "How College soccer in America ACTUALLY Works", and subscribe to his channel for more content!
  </p>
  <a
    href="https://www.youtube.com/watch?v=uSjUuWcMNac" // <-- stavi pravi kanal link ovde
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline font-semibold"
  >
    Go to YouTube Channel
  </a>
</div>



        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Author: <a className="">Mio Ristić</a></p>
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

export default JoaoPereiraArticle;
