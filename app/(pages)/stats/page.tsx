'use client';

import { useState, useEffect } from "react";
import { StatsSection } from "@/components/organisms/StatsSection";

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

type GithubProfile = {
  profile: ProfileStats;
  contributions: GithubDay[];
};

export default function Stats() {
  const [githubData, setGithubData] = useState<GithubProfile | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  if (githubData) console.log(githubData);

  return (
    <div className="home">
      <h1>Stats</h1>
      <h2>A coder by day, problem-solver by night!</h2>
      <p>I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Next.js, React, Tailwind CSS, Node.js, Express, and MongoDB, while also applying DevOps practices, continuously aiming to deliver high-quality, comprehensive, user-centric software solutions.</p>
      <StatsSection githubData={githubData?.contributions} stats={githubData?.profile} />
    </div>
  );
}
