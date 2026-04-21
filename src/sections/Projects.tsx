import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/projects/projects";
import { projects } from "../data/projects/projectsList";

export function Projects() {
  return (
    <section
      className="relative isolate overflow-hidden min-h-screen flex items-center py-16"
      id="projects"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center gap-4 px-4">
        <h2 className="font-bold text-3xl text-center">
          {projectsData.title.main}
          <span className="text-gradient">{projectsData.title.gradient}</span>
        </h2>

        <p className="text-primary text-sm max-w-xl text-center">
          {projectsData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 md:mx-20 mt-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              id={project.id}
              techStack={project.techStack}
              links={{ repository: project.repoLink, demo: project.demoLink }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
