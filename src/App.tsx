import { Header } from "./components/Header";
import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
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
