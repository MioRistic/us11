'use client';

import Image from "next/image";
import ProfileImage from "../../public/Mio.png";

export default function AuthorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans">

      {/* ===== HEADER ===== */}
      <div className="flex flex-col md:flex-row gap-12">

        {/* LEFT SIDEBAR */}
        <aside className="md:w-1/3 flex flex-col items-center md:items-start">
          <div className="w-48 h-48 overflow-hidden relative shadow-md">
            <Image
              src={ProfileImage}
              alt="Mio Ristic"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-[#020617] mt-6">
            Mio Ristić
          </h1>

          <p className="text-lg font-medium text-gray-600 mt-2">
            Sports Writer & Analyst
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
            <a
              href="mailto:us11footballclub@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              us11footballclub@gmail.com
            </a>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="md:w-2/3 space-y-12">

          {/* ========== BIO ========== */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">Bio</h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              I am Mio Ristić Mikaso, a dedicated sports writer and analyst with
              a focus on MLS, global football trends, tactical analysis, and player
              development. I aim to bring clarity, insight, and depth to every story 
              I cover—whether it’s a high-stakes playoff match or the rise of a young 
              talent breaking onto the scene.
            </p>
          </section>

          {/* ========== MY FOOTBALL STORY ========== */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">My Football Story</h2>
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              The first match I ever watched was <strong>Yugoslavia vs Spain at Euro 2000</strong>.
              But I truly fell in love with football shortly after, watching the elegance of 
              the Italian national team with <strong>Francesco Totti</strong> and 
              <strong> Alessandro Del Piero</strong> leading the attack.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              My passion for MLS began with the unforgettable attacking duo 
              <strong> Clint Dempsey – Obafemi Martins</strong> at the Seattle Sounders.
              Since then, I’ve followed the league every season, finding the joy and 
              unpredictability that modern European football has slowly lost.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              In MLS, every match feels alive—open, creative, and unpredictable.
              It’s a league where players express themselves, where tactics bend instead of restrict,
              and where every week brings something completely unexpected. That’s the beauty of it.
            </p>
          </section>

          
          {/* ========== FAVOURITE FOOTBALLING MEMORIES ========== */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">
              Favourite Footballing Memories
            </h2>

            <p className="text-lg text-gray-800 mb-4">
              <strong>• 2003 — Newcastle United vs Partizan</strong>  
              <br />
              Partizan eliminating mighty Newcastle on penalties — the match that 
              cemented my love for emotional, unpredictable football.
            </p>

            <p className="text-lg text-gray-800">
              <strong>• MLS Cup 2016 — Seattle Sounders vs Toronto FC</strong>  
              <br />
              Seattle winning the MLS Cup on penalties — a match that defined the 
              league’s drama and the moment I knew MLS would be part of my life forever.
            </p>
          </section>


          {/* ========== HOW WE WRITE AT US11 ========== */}
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#020617] mb-4">How We Write at US11</h2>
            <p className="text-gray-800 leading-relaxed text-lg mb-6">
              At US11, we believe soccer deserves better writing.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg mb-6">
              We don’t just report results — we tell stories, provide context, and deliver meaningful analysis. 
              Our goal is to create content that serious fans actually enjoy reading.
            </p>

            <div className="pl-6 border-l-4 border-red-600 mb-8">
              <ul className="list-disc text-lg text-gray-800 space-y-3">
                <li><strong>Depth over speed</strong> — We take the time to explain why something matters, not just what happened.</li>
                <li><strong>Clear and engaging</strong> — Professional tone with personality. No unnecessary jargon, but no dumbing down either.</li>
                <li><strong>Honest and balanced</strong> — We say what we see, even when it’s unpopular.</li>
                <li><strong>Story-driven</strong> — Every article should feel like a narrative with purpose.</li>
                <li><strong>Thorough research</strong> — Facts, context, and background are always included.</li>
              </ul>
            </div>

            <p className="text-gray-800 leading-relaxed text-lg">
              We write for fans who want more than headlines — fans who want to truly understand the game, 
              the players, the clubs, and the league.
            </p>
          </section>

          {/* ========== AREAS OF EXPERTISE ========== */}
          <section>
            <h2 className="text-3xl font-bold text-[#020617] mb-4">Areas of Expertise</h2>
            <ul className="list-disc pl-6 text-lg text-gray-800 space-y-2">
              <li>MLS match analysis & tactical breakdowns</li>
              <li>U.S. national team coverage</li>
              <li>Player development & scouting profiles</li>
              <li>Opinion pieces on global football trends</li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}