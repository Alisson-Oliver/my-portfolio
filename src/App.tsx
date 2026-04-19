import { AboutCard } from "./components/AboutCard";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCard } from "./components/SkillCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { aboutSkills } from "./data/softSkills";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <div className="grid grid-cols-2 gap-5 m-20">
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
      <div className="grid grid-cols-2 gap-5 mx-80 mt-20">
        {aboutSkills.map((aboutSkill) => (
          <AboutCard
            icon={aboutSkill.icon}
            description={aboutSkill.description}
            title={aboutSkill.title}
          />
        ))}
      </div> */}
    </div>
  );
}

export default App;
