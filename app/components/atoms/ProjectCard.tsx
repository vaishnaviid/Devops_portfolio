// components/ProjectCard.tsx
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({ title, description, link }: Project) => {
  return (
    <Link
      href={link}
      className="block group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
    >
      <h3 className="text-xl font-semibold mb-2 group-hover:opacity-90 m-0 mb-3">{title}</h3>
      <p className="text-sm">{description}</p>
      <span className="inline-block mt-2 text-sm">Learn More…</span>
    </Link>
  );
};