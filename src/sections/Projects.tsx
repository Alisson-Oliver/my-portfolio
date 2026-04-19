import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="min-h-screen flex items-center py-16" id="projects">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-4 px-4">
        <h2 className="font-bold text-3xl text-center">
          Trabalhos <span className="text-gradient">Selecionados</span>
        </h2>

        <p className="text-primary text-sm max-w-xl text-center">
          Uma seleção de projetos que demonstram minha experiência em
          desenvolvimento backend, arquitetura de sistemas e soluções cloud.
        </p>

        <div className="grid grid-cols-2 gap-5 mx-20 mt-5">
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
