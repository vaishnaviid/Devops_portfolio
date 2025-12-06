import Image from "next/image";
import { ToolsGrid } from "@/components/organisms/ToolsGrid";
import { ProfileData as data } from "@/config/content";

export default function Skills() {
  return (
    <div className="home">
      <h1>Skills & Tools</h1>
      <h2>From Cloud to Code, from Scripts to Systems.</h2>
      {data.skillsIntro && data.skillsIntro
              .split('\n')
              .map((line, i) =>
                line.trim() ? <p key={i}>{line}</p> : null
              )
      }
      <div className="mt-8"><ToolsGrid /></div>
    </div>
  );
}
