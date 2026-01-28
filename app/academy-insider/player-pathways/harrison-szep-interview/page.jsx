'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const PlayerPathwaysArticle = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const articleTitle = "What No One Tells Young American Soccer Players – Exclusive Interview with Harrison Szep";

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
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            {articleTitle}
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-28">January 28, 2026</time>
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
                           src="https://i.ibb.co/KcZr92s1/IMG-6685.jpg"
                           alt="Szep"
                           width={1018}
                           height={420}
                           className="w-full h-[420px] object-cover object-cover object-[50%_25%]"
                           priority
                         />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Image: Harrison Szep
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">

          <h2 className="text-xl font-semibold mt-6">Introduction</h2>
          <p>
            In the world of youth soccer, information is more accessible than ever — but that doesn’t mean it’s accurate. Young players grow up with films, biographies, and motivational stories that rarely reflect the real path to success. Instead of processes, they sell fairy tales. Instead of hard work, they sell emotion.
          </p>
          <p>
            The reality is much more complex. Only a small percentage of players ever reach the top. For everyone else, the real challenge isn’t believing in myths, but understanding their own potential and building a path that makes sense for them — academically, athletically, and personally.
          </p>
          <p>
            That’s why we spoke with Harrison Szep, agent and founder of StudentAthlete.ai, who has dedicated his career to cutting through the illusions of the U.S. soccer system. His goal isn’t to sell dreams, but to help young players and their families make informed, long-term decisions.
          </p>
          <p>
            This interview isn’t a motivational speech. It’s a guide — for anyone who wants to understand how the system really works, and how to find their place in it.
          </p>

          <h2 className="text-xl font-semibold mt-6">Getting Started with StudentAthlete.ai</h2>
          <p>
            StudentAthlete.ai is an agency that helps young players and students with recruiting and development. When did you officially start the project, and what was your main motivation behind it?
          </p>
          <p className="font-bold italic">
            "I began helping athletes with recruitment during my third year of college in 2022. My entry point was assisting players with transfers, which gave me invaluable hands-on experience quickly. By 2023, I had formalized the service and started charging for my work. To date, I've successfully guided over 100 athletes through their commitment process. What drives me is seeing talented young players navigate a complex system and ultimately find the right fit for their academic and athletic development."
          </p>

          <h2 className="text-xl font-semibold mt-6">Working Directly with Young Footballers</h2>
          <p>
            How did you experience working directly with young footballers when you first started, and how do you see that work today? Do you notice big differences in mentality, expectations, and approach?
          </p>
          <p className="font-bold italic">
            "The biggest difference is honestly my network. When I first started, I had a pool of 200 coaches I was a text away from, so my clients at the time were paying for access to those 200 connections — nothing more. At this point, we have over 1,000 connections across all 50 states, so there's practically no school we can't reach with one of our players' profiles, as long as they meet the athletic and academic standards."
          </p>
          <p className="font-bold italic">
            "Beyond the network growth, I've also noticed a shift in how families approach the process. Today's players and parents are more informed and have higher expectations around transparency and personalized guidance. They want to understand not just where they can go, but why a particular program is the right fit for their development."
          </p>

          <h2 className="text-xl font-semibold mt-6">Studying the U.S. Soccer System</h2>
          <p>
            On your YouTube channel, you often critically and factually analyze U.S. Soccer programs. What inspired you to study the system so deeply, and how difficult is it to constantly keep up with changes, rules, and innovations?
          </p>
          <p className="font-bold italic">
            "The biggest inspiration comes from personal experience. I've been on the other side of the fence as a player, and I always felt I existed in an information gap. College soccer, to me at the time, was this shiny object that could do no harm. Although I'm a huge advocate of it, it isn’t straightforward to assume that every school will offer a great experience. I've learned it's all about fit — what could be perfect for one player could be the worst place for another."
          </p>
          <p className="font-bold italic">
            "When it comes to staying up to date, I find it fairly straightforward. I watch college soccer, I played college soccer, I speak to coaches every day, and my whole team is just as obsessed as I am."
          </p>

          <h2 className="text-xl font-semibold mt-6">Program Choices & Pathways</h2>
          <p>
            Your content is designed to give players and parents a realistic picture of each pathway. Which programs do young players most often choose today, and what are the main reasons behind those choices?
          </p>
          <p className="font-bold italic">
            "I'm seeing Division III and Division II becoming increasingly common pathways, but often for the wrong reasons. The old 'Division I or bust' mentality is finally fading, which is positive. However, many families simply replace it with 'stay in the NCAA bubble at all costs.' They assume that choosing D2 or D3 keeps the door open to move up within the NCAA system, but they're overlooking NAIA and NJCAA — two viable and often superior pathways for development. The reality is that the right program matters far more than the divisional label, and sometimes the best environment exists outside the traditional NCAA structure."
          </p>

          <h2 className="text-xl font-semibold mt-6">Advice for Young Players</h2>
          <p>
            If you met an exceptionally talented 14-year-old player today, which pathway would you recommend and why?
          </p>
          <p className="font-bold italic">
            "I'd say go abroad. One of the most valuable experiences as a young player is being exposed to a different way of life around the sport you love. If you're American, go to Europe. If you're from Europe, go to South America. Immerse yourself in different styles of play and coaching philosophies. Then, if college soccer ends up being your destination at 18, you'll not only be a better player but also a more mature and well-rounded person."
          </p>

          <h2 className="text-xl font-semibold mt-6">Key Lessons from European Academies</h2>
          <p>
            You closely follow European academies and development systems that are still ahead of the U.S. If you could bring three key things from Europe into American soccer, what would they be?
          </p>
          <p className="font-bold italic">
            "First, locker room culture. It plays a huge part in team performance — it builds community and a willingness to fight for teammates, something American teams often lack. Second, coaching philosophy. The “run-and-gun” style in the U.S. is outdated; many coaches remain athlete-focused rather than technical. Third, grit. American kids are respectful — which is good — but they often lack the European-style mentality of leaving everything on the field and showing emotion. That small shift makes a big difference in mindset and success."
          </p>

          <h2 className="text-xl font-semibold mt-6">Future of U.S. Soccer</h2>
          <p>
            How do you see U.S. soccer developing over the next five years, especially in terms of youth programs and the pathway to professional soccer?
          </p>
          <p className="font-bold italic">
            "I think we're heading toward a split. MLS Next and USL Academy pathways will become more structured, creating a clearer pipeline to pro soccer for elite talent. College soccer will continue evolving, with more partnerships between colleges and pro clubs — similar to European loan systems. The key shift will be youth clubs prioritizing development over winning at young ages. My biggest concern is the pay-to-play model: if you’re not in MLS Next or can’t afford high-level club soccer, your options remain limited. The pathway to pro will look less linear: some kids academy-to-pro, others through college, and more going abroad early then returning. Multiple viable routes are the goal, not one single mold."
          </p>

          <h2 className="text-xl font-semibold mt-6">Barriers & Myths</h2>
          <p>
            How much of a barrier is money today for talented kids and their families?
          </p>
          <p className="font-bold italic">
            "Huge. Money is one of the biggest barriers in U.S. youth soccer, and the system doesn’t do enough to protect players without financial resources. Most elite pathways still require thousands of dollars per year in club fees, travel, showcases, and tournaments. Families without that cushion often see their kids stuck at lower levels or missing exposure entirely. Scholarships and financial aid are often underfunded or come with strings attached. In practice, access to top coaching, facilities, and recruiting networks is still largely determined by financial means."
          </p>

          <p>
            What is the biggest myth about MLS Next and college soccer that you wish people would stop believing?
          </p>
          <p className="font-bold italic">
            "That playing MLS Next guarantees a college soccer career. It’s not that simple. Many players overestimate their ability, and the MLS Next brand can inflate egos. College soccer isn’t right for everyone. Education and long-term career should come first."
          </p>

          <h2 className="text-xl font-semibold mt-6">Common Mistakes & Evaluation</h2>
          <p>
            What are the most common mistakes parents make when trying to "help" their child’s football career?
          </p>
          <p className="font-bold italic">
            "Spending thousands on club soccer — often $10,000+ per year — and leaving recruitment entirely to their 15- or 16-year-old. These kids have no experience marketing themselves or building relationships with college coaches. The families who educate themselves and treat recruitment as a shared responsibility consistently get results."
          </p>

          <p>
            How can a young player realistically evaluate their own level and know whether they're ready for MLS Next, an academy, college, or pro pathway?
          </p>
          <p className="font-bold italic">
            "A simple litmus test: if you see someone like you — similar background, similar level — in the position you want, you have reason to believe you belong there too. Compare yourself honestly to existing players, manage expectations, and consider pathways that fit your level."
          </p>

          <h2 className="text-xl font-semibold mt-6">Video, Data, & Connections</h2>
          <p>
            How important are video, data, and online presence today in the recruiting process?
          </p>
          <p className="font-bold italic">
            "Video is essential — it’s the foundation of modern recruiting. Data validates what coaches see on film, especially at higher levels. Online presence is emerging as a valuable asset. All three combined maximize success, but quality video remains the most critical."
          </p>

          <p>
            What truly separates players who make it from those who get stuck halfway?
          </p>
          <p className="font-bold italic">
            "Connections. Talent alone isn’t enough; sports are built on relationships. Whether it’s elite clubs, college recruitment, MLS draft, or professional transfers, who you know matters. Connections open doors that talent alone cannot."
          </p>

          <h2 className="text-xl font-semibold mt-6">How StudentAthlete.ai Helps</h2>
          <p>
            How does StudentAthlete.ai specifically help families make smart, long-term decisions?
          </p>
          <p className="font-bold italic">
            "We operate on two principles: radical honesty and proven access. First, honesty — we prioritize fit over prestige. Players must play to develop. Second, access — we have relationships with 1,000+ coaches across all 50 states. Families get strategy, access, and a partner invested in their success."
          </p>

          <h2 className="text-xl font-semibold mt-6">Looking Back</h2>
          <p>
            Looking back, what would you tell your 16-year-old self, knowing everything you know today?
          </p>
          <p className="font-bold italic">
            "Work harder. At that age, I thought I was putting in the work, but I left a lot on the table. Rejections taught me that talent alone isn’t enough — obsession with improvement every day is what truly matters."
          </p>

          <h2 className="text-xl font-semibold mt-6">Conclusion</h2>
          <p>
            The system won’t wait for you. It won’t bend to your dreams. But it can be understood — if you’re willing to listen to those who know it from the inside.
          </p>
          <p>
            Harrison Szep is one of them. His job isn’t to sell fairy tales; it’s to help you make the right decisions, build your path, and maximize your potential.
          </p>
          <p>
            Now it’s up to you to decide: will you chase myths — or the truth? Because understanding the system, being honest with yourself, and focusing on development is what separates those who make it from those who get stuck along the way.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Author: <a target="_blank" rel="noopener noreferrer" className="">Mio Ristić</a></p>
            
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

export default PlayerPathwaysArticle;