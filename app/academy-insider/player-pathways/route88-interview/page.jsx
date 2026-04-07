'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const Route88Article = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const articleTitle = "Route 88: From Pro Players to Helping the Next Generation – Exclusive Interview with Kirill & Carlota";

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
            <time dateTime="2026-04-07">April 07, 2026</time>
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
            alt="Route 88 - Kirill & Carlota"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Image: Route 88 Founders
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">

          <h2 className="text-xl font-semibold mt-6">Introduction</h2>
          <p>
            Many young footballers from Europe dream of the American college system, but they often get lost in unfamiliar rules, timing, highlight videos, and realistic scholarship chances.
            Route 88 is an agency founded by two current professional athletes — Carlota Alcalde (currently playing in Europe with Europa League experience) and Kirill Pakhomov (former Marshall University player and current pro in the USA).
          </p>
          <p>
            Not only have they been through the entire journey themselves, but they now help young players navigate it intelligently, transparently, and without illusions. 
            In this exclusive interview, they talk about the reality of the process, the most common mistakes, scholarships, and why their “athlete-first” approach is different.
          </p>

          {/* Q&A */}

          <h2 className="text-xl font-semibold mt-6">1. Introduction & What You Do<br />Can you give us a clear, concise overview of what Route 88 exactly does?</h2>
          <p className="font-bold italic">
            "Route88 is an agency founded by two current pro athletes who took the USA College route and now help and serve as consultants for athletes who want to take a similar path. 
            We help international players understand how the U.S. college system actually works, and guide them through it properly. Prioritizing honesty and transparency, and with an athlete-first mentality.
            We guide them through the whole process — from the moment we start talking to the athlete, to talking to coaches, setting up interviews, committing to a university, getting the visa, arriving in the States, and everything in between until they graduate. 
            We build long-term relationships; it is not just about placing them."
          </p>

          <h2 className="text-xl font-semibold mt-6">How can young footballers (especially from Europe) get in touch with you?</h2>
          <p className="font-bold italic">
            "They can contact us directly on Instagram <a href='https://www.instagram.com/route88scholarships/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>@route88scholarships</a>. 
            Free consultation, no ties, just information about the process for whoever wants it."
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Your Personal Playing Background as Mentors<br />How do you use your own playing background to create personalized plans?</h2>
          <p className="font-bold italic">
            "This is our biggest asset. We have actually been through it and know exactly how it works. When a player comes to us, we're not guessing. We understand levels, expectations, and what coaches are really looking for.
            We don't believe in one path for everyone. Some players need structure, some need honesty about their level, some just need clarity. Our job is to read that and build something that makes sense for them.
            The biggest mistake is getting involved in the process without knowing really what it is all about."
          </p>

          <h2 className="text-xl font-semibold mt-6">3. Europe vs. USA: How Your Current Pro Careers Shape the Business</h2>
          <p className="font-bold italic">
            "Between the two of us, we're living in both worlds at the same time. We know exactly the levels and expectations across many leagues in both continents.
            Europe can be very competitive and unstable if you're not in the right environment. The U.S. offers structure and the opportunity to combine both athletics and academics.
            So when we advise players, it's not 'go to the U.S. no matter what'. Sometimes the right decision is to stay. What matters is choosing based on your situation, not on assumptions."
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Why Choose the US Path? Advice for Parents</h2>
          <p className="font-bold italic">
            "For parents, it's often about security and long-term thinking about academics and athletics. There is no need to quit one to excel at the other.
            The U.S. gives players the chance to keep competing while getting an education, in an environment that's usually more organized and supportive than what you find in lower levels in Europe. 
            You get the chance to become a pro and get a college diploma — even a master's degree — for free."
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Most Common Mistakes You See</h2>
          <p className="font-bold italic">
            "Many players approach this without really understanding how it works. They send random messages, have videos that don't show what coaches need to see, or aim for levels that don't match their reality. 
            Timing is also a big issue. Most mistakes come from a lack of understanding. We walk with the athlete every step of the way."
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Realistic Chances of Getting a Scholarship</h2>
          <p className="font-bold italic">
            "Full rides exist, but they're not as common as people think. For D1, you need to be very solid and compete at the highest level. 
            But there are many good opportunities in D2 and NAIA where players of all levels can still have a great experience and receive solid scholarships.
            The key is understanding where you actually fit."
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Support After Receiving an Offer</h2>
          <p className="font-bold italic">
            "Getting an offer is just one part. We help players understand what that offer really means, compare options, and make the best decision.
            Once they arrive, we help them find jobs on campus, apply for more scholarships, summer leagues, and even switch schools if needed. 
            We want everyone to have the best possible experience."
          </p>

          <h2 className="text-xl font-semibold mt-6">8. Your Success Stories So Far</h2>
          <p className="font-bold italic">
            "We're still at the beginning, but we are very happy with the players who have trusted us. 
            For example, Jovan Manasijević, who came from Red Star academy in Serbia, saw the U.S. as a second chance. 
            We also work with prospects from first-division academies in Spain, Russia, Colombia, and players already in the States who want to transfer.
            We help with everything: editing highlight videos, translating grades, applications, eligibility — you just need to be committed and responsive."
          </p>

          <h2 className="text-xl font-semibold mt-6">9. The Growing Trend of Europeans Choosing the US</h2>
          <p className="font-bold italic">
            "It's definitely growing. The U.S. is gaining greater visibility thanks to globalization and social media. 
            Even kids from top academies and national teams are choosing the USA because it offers a real combination of sport and education."
          </p>

          <h2 className="text-xl font-semibold mt-6">10. One Piece of Universal Advice</h2>
          <p className="font-bold italic">
            "Take the process seriously earlier than you think. Not just training, but understanding how everything works and trying your best at school. 
            Good grades and English level will broaden your options significantly."
          </p>

          <h2 className="text-xl font-semibold mt-6">11. Your Vision for the Future of Route 88</h2>
          <p className="font-bold italic">
            "In the next 2–3 years, we want to grow Route88 into a trusted reference point for international student-athletes. 
            We already work with other sports (tennis, volleyball, weightlifting, track and field) and plan to expand carefully where our knowledge and contacts allow."
          </p>

          {/* CLOSING */}
          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>
            Route 88 is not a classic "placement" agency. It is a team that has personally gone through the journey from Europe to the American college system and is now making it more transparent and safer for the next generation.
          </p>
          <p>
            If you’re thinking about college football in the USA — whether you’re from Europe, South America, or already in the States — their message is clear: it’s better to truly understand the system than to blindly send emails.
          </p>

        </section>

        {/* Instagram / Contact */}
        <div className="my-8 p-6 bg-gray-100 rounded-2xl text-center">
          <p className="text-lg font-semibold mb-2">Want a free consultation?</p>
          <p className="mb-4">Reach out to us directly on Instagram:</p>
          <a
            href="https://www.instagram.com/route88scholarships/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            @route88scholarships
          </a>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Author: <span>Mio Ristić</span></p>
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

export default Route88Article;