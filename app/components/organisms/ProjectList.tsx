import { ProjectCard } from "@/components/atoms/ProjectCard";
import { ProfileData as data } from "@/config/content";

export const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};
