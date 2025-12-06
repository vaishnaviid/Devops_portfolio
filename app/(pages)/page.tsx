import Image from "next/image";
import { ProfileData as data } from "@/config/content";

export default function Home() {
  return (
    <div className="home">
      <h1>{data.fname} {data.lname}</h1>
      <h2>{data.tagline}</h2>
      {data.intro && data.intro
        .split('\n')
        .map((line, i) =>
          line.trim() ? <p key={i}>{line}</p> : null
        )
      }
    </div>
  );
}


