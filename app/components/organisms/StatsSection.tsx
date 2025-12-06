"use client";

import { useState, useEffect } from "react";
import React from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { ProfileData } from "@/config/content";

type GithubDay = {
    date: string;
    count: number;
    level: number;
};
  
type ProfileStats = {
    hireable: boolean;
    publicRepos: number;
    followers: number;
    following: number;
    company: string | null;
    location: string | null;
};
  
type StatsSectionProps = {
    githubData?: GithubDay[];
    stats?: ProfileStats;
};

export function StatsSection({ githubData = [], stats }: StatsSectionProps) {
    const [visits, setVisits] = useState(0);
    const [appreciations, setAppreciations] = useState(0);

  useEffect(() => {
    // Get existing visit count
    const existingVisits = Number(localStorage.getItem("my_visits") || 498);

    // Increment
    const newVisits = existingVisits + 1;

    // Save back
    localStorage.setItem("my_visits", newVisits.toString());
    setVisits(newVisits);

    // Load appreciation count
    const existingAppreciations = Number(localStorage.getItem("my_likes") || 276);
    setAppreciations(existingAppreciations);
  }, []);

  const handleAppreciate = () => {
    // Prevent multiple likes
    if (localStorage.getItem("liked") === "yes") {
      alert("Bro you already hyped me up once 😭💜");
      return;
    }

    const newCount = appreciations + 1;
    localStorage.setItem("my_likes", newCount.toString());
    localStorage.setItem("liked", "yes");
    setAppreciations(newCount);
  };
  return (
    <section className="w-full space-y-12 py-12">
      {/* ============ TOP CARDS ============ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Views */}
        <div className="bg-[#0b0b0f] border border-white/10 rounded-2xl p-6 shadow-lg">
          <h3 className="text-md opacity-70 mb-2">Total Views</h3>
          <p className="text-5xl font-extrabold text-purple-400">{visits}</p>
          <p className="text-xs opacity-60 mt-1">Unique page visits since Oct 2025</p>
        </div>

        {/* Appreciation Count */}
        <div className="bg-[#0b0b0f] border border-white/10 rounded-2xl p-6 shadow-lg">
          <h3 className="text-md opacity-70 mb-2">Appreciation Count</h3>
          <p className="text-5xl font-extrabold text-red-400">{appreciations}</p>

          <button onClick={handleAppreciate} className="mt-4 px-5 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition">❤️ Love this portfolio</button>
        </div>
      </div>

      {/* ============ GITHUB STATS ============ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">GitHub Stats</h2>
        <p className="text-sm opacity-70 mb-6">Insights and metrics about my GitHub profile</p>

        <div className="bg-[#0b0b0f] border border-white/10 rounded-2xl p-6 shadow-lg mt-6">
        {githubData.length === 0 ? (
            <div className="grid grid-cols-[repeat(53,1fr)] gap-[3px] py-6">
            {[...Array(53 * 7)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded bg-white/5 animate-pulse"
                style={{ animationDelay: `${(i % 7) * 50}ms` }}
              />
            ))}
          </div>
        ) : (
                
          <ActivityCalendar
            data={githubData}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
            theme={{
                dark: [
                    "#111318", // level 0
                    "#14432D", // level 1
                    "#1FAD50", // level 2
                    "#0FDD51", // level 3
                    "#56FF75", // level 4
                ],
            }}
            colorScheme="dark"
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                style: {
                  ...block.props.style,
                  borderRadius: "4px",
                },
              })
            }
          />
        )}
        </div>
      </div>

      {/* ============ MORE STATS GRID ============ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard label="Hireable" value={ProfileData?.Availability ? "Yes" : "No"} green />

        <StatCard label="Total Public Repos" value={stats?.publicRepos} />

        <StatCard label="Followers" value={stats?.followers} />

        <StatCard label="Following" value={stats?.following} />

        <StatCard label="Current Company" value={ProfileData?.CurrentlyWorking || "None"} />

        <StatCard label="Location" value={stats?.location || "—"} />
      </div>
    </section>
  );
}

type StatCardProp = {
    label : string,
    value : string | number | undefined,
    green?: boolean | undefined
}

function StatCard({ label, value, green = false }: StatCardProp) {
  return (
    <div
      className={`rounded-2xl p-6 border border-white/10 shadow-md ${
        green ? "bg-green-900/40" : "bg-[#0b0b0f]"
      }`}
    >
      <p className="opacity-70 mb-1 text-sm">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}