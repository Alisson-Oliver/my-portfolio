import { ProjectCard } from "./components/ProjectCard";
import { SkillCard } from "./components/SkillCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

function App() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 m-20">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            id={project.id}
            techStack={project.techStack}
            links={{ repository: project.repoLink, demo: project.demoLink }}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5 m-20">
        {skills.map((skill) => (
          <SkillCard
            icon={skill.icon}
            techStack={skill.techStack}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
