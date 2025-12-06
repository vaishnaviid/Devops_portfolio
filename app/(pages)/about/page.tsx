import Image from "next/image";
import { ProfileData as data } from "@/config/content";

export default function About() {
  return (
    <div className="home">
      <h1>About {data.fname}</h1>
      <h2>{data.aboutSubTitle}</h2>
      {data.aboutMe
        .split('\n')
        .map((line, i) =>
          line.trim() ? <p key={i}>{line}</p> : null
        )
      }
    </div>
  );
}
