import Image from "next/image";
import { TimelineList } from "@/components/organisms/TimelineList";
import { ProfileData as data } from "@/config/content";

export default function Experience() {
  return (
    <div className="home">
      <h1>Experience</h1>
      <h2>A coder by day, problem-solver by night!</h2>
      {data.experienceIntro && data.experienceIntro
              .split('\n')
              .map((line, i) =>
                line.trim() ? <p key={i}>{line}</p> : null
              )
      }
      <div className="mt-8"><TimelineList items={data.experiences}/></div>
    </div>
  );
}
