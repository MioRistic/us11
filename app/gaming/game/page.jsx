'use client';

import React, { useState } from "react";

const GROUPS = {
  A: ["Mexico", "South Africa", "Korea Republic", "Czech Republic"],
  B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["United States", "Paraguay", "Australia", "Türkiye"],
  E: ["Germany", "Curaçao", "Ivory Coast", "Ecuador"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Belgium", "Egypt", "Iran", "New Zealand"],
  H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "Iraq", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"]
};

export default function WorldCupPredictor() {
  const [stage, setStage] = useState("groups");

  // Poredak u grupama: [1., 2., 3., 4.]
  const [groupStandings, setGroupStandings] = useState(
    Object.fromEntries(Object.keys(GROUPS).map(g => [g, []]))
  );

  const [qualified, setQualified] = useState([]);     // 32 tima
  const [bracket, setBracket] = useState([]);         // Trenutni mečevi
  const [winner, setWinner] = useState(null);

  // Biranje mesta u grupi (1-4)
  const selectPosition = (group, team, position) => {
    setGroupStandings(prev => {
      const current = [...(prev[group] || [])];
      const existingIndex = current.indexOf(team);
      if (existingIndex !== -1) current.splice(existingIndex, 1);

      current[position - 1] = team;
      return { ...prev, [group]: current };
    });
  };

  const canContinue = Object.values(groupStandings).every(arr => arr.length === 4);

  const goToKnockout = () => {
    const top24 = Object.values(groupStandings).flatMap(standings => standings.slice(0, 2));
    const allThirds = Object.values(groupStandings).map(standings => standings[2]);

    const sortedThirds = [...allThirds].sort(() => Math.random() - 0.5);
    const best8Thirds = sortedThirds.slice(0, 8);

    const allQualifiedTeams = [...top24, ...best8Thirds];

    setQualified(allQualifiedTeams);

    // Pravljenje bracket-a za osminu finala
    const shuffled = [...allQualifiedTeams].sort(() => Math.random() - 0.5);
    const matches = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      matches.push([shuffled[i], shuffled[i + 1]]);
    }

    setBracket(matches);
    setStage("round32");
  };

  // Korisnik bira pobednika meča
  const chooseWinner = (matchIndex, winnerTeam) => {
    const newBracket = bracket.map((match, i) => {
      if (i === matchIndex) {
        return match[0] === winnerTeam ? [match[0], match[1]] : [match[1], match[0]];
      }
      return match;
    });

    // Prelazimo na sledeću rundu
    const winners = newBracket.map(match => match[0]); // prvi u paru je pobednik

    if (winners.length === 1) {
      setWinner(winners[0]);
      setStage("champion");
    } else {
      const nextMatches = [];
      for (let i = 0; i < winners.length; i += 2) {
        nextMatches.push([winners[i], winners[i + 1]]);
      }
      setBracket(nextMatches);
    }
  };

  const reset = () => {
    setStage("groups");
    setGroupStandings(Object.fromEntries(Object.keys(GROUPS).map(g => [g, []])));
    setQualified([]);
    setBracket([]);
    setWinner(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">🌍 2026 FIFA World Cup Predictor</h1>

        {/* GROUP STAGE */}
        {stage === "groups" && (
          <div>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Select the full ranking (1st to 4th) for each group
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(GROUPS).map(([groupLetter, teams]) => (
                <div key={groupLetter} className="bg-white border-2 border-gray-200 rounded-3xl p-6">
                  <h2 className="text-2xl font-bold text-center mb-6">Group {groupLetter}</h2>

                  {teams.map((team) => {
                    const position = groupStandings[groupLetter].indexOf(team) + 1;
                    return (
                      <div
                        key={team}
                        onClick={() => selectPosition(groupLetter, team, position || groupStandings[groupLetter].length + 1)}
                        className={`flex items-center gap-4 p-4 mb-3 rounded-2xl cursor-pointer transition-all border ${
                          position ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-100 border-gray-300"
                        }`}
                      >
                        <div className="w-9 h-9 flex items-center justify-center bg-white text-black font-bold rounded-xl border border-gray-300">
                          {position || "-"}
                        </div>
                        <span className="font-medium text-lg">{team}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                disabled={!canContinue}
                onClick={goToKnockout}
                className={`px-12 py-5 text-xl font-semibold rounded-3xl text-white transition ${
                  canContinue ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Continue to Round of 32
              </button>
            </div>
          </div>
        )}

        {/* KNOCKOUT STAGE - USER PICKS WINNERS */}
        {stage === "round32" && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">🏆 Round of 32</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bracket.map((match, i) => (
                <div key={i} className="bg-white border border-gray-300 rounded-3xl p-6">
                  <div className="flex justify-between items-center text-xl">
                    <button
                      onClick={() => chooseWinner(i, match[0])}
                      className={`flex-1 py-4 rounded-2xl transition ${
                        match[0] === match[0] && match[1] !== match[0] ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      {match[0]}
                    </button>

                    <span className="px-6 text-gray-400 font-bold">VS</span>

                    <button
                      onClick={() => chooseWinner(i, match[1])}
                      className={`flex-1 py-4 rounded-2xl transition ${
                        match[1] === match[1] && match[0] !== match[1] ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      {match[1]}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHAMPION */}
        {stage === "champion" && winner && (
          <div className="text-center mt-20">
            <h2 className="text-6xl font-bold text-yellow-500 mb-6">🏆 WORLD CHAMPION</h2>
            <p className="text-5xl font-semibold">{winner}</p>
            <button
              onClick={reset}
              className="mt-12 px-10 py-5 bg-black text-white text-2xl font-bold rounded-3xl hover:bg-gray-800"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}