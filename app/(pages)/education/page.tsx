import { TimelineList } from "@/components/organisms/TimelineList";
import { ProfileData as data } from "@/config/content";


export default function Education() {
  return (
    <div className="home">
      <h1>Education</h1>
      <h2>A coder by day, problem-solver by night!</h2>
      {data.educationIntro && data.educationIntro
          .split('\n')
          .map((line, i) =>
            line.trim() ? <p key={i}>{line}</p> : null
          )
      }
      <div className="mt-8"><TimelineList items={data.education}/></div>
    </div>
  );
}
