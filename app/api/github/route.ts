// app/api/github/route.ts
import { NextResponse } from "next/server";

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
let cachedData: any = null;
let lastFetchTime = 0;

export async function GET() {
  const now = Date.now();

  // If cached and fresh → return instantly
  if (cachedData && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json(cachedData);
  }

  const username = "vaishnaviid";

  try {
    // Fetch Profile Info
    const profileRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, //Use token if needed (massive rate limit increase)
      },
      // next: { revalidate: 3600 },
    });

    const profile = await profileRes.json();

    // Fetch Contribution Graph
    const contribRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      // { next: { revalidate: 3600 } }
    );

    const contrib = await contribRes.json();

    // Prepare clean response object
    const result = {
      profile: {
        followers: profile.followers,
        following: profile.following,
        publicRepos: profile.public_repos,
        company: profile.company,
        location: profile.location,
        hireable: profile.hireable,
        avatar: profile.avatar_url,
        url: profile.html_url,
      },
      contributions: contrib.contributions || [],
      summary: contrib.summary || {},
    };

    // Cache it
    cachedData = result;
    lastFetchTime = now;

    return NextResponse.json(result);
  } catch (e: any) {
    console.error("GitHub API error:", e);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
