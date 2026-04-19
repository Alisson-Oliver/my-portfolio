import { AboutCard } from "./components/AboutCard";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCard } from "./components/SkillCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { aboutSkills } from "./data/softSkills";
import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* 
      <div className="grid grid-cols-4 gap-5 m-20">
        {skills.map((skill) => (
          <SkillCard
            icon={skill.icon}
            techStack={skill.techStack}
            title={skill.title}
          />
        ))}
      </div>
       */}
    </div>
  );
}

export default App;
