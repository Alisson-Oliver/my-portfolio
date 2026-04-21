import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { StarBackground } from "../components/StarBackground";

export function HomePage() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0">
        <StarBackground
          intensity={0.4}
          showCloud={true}
          showSparkles={true}
          showStars={true}
          zIndex={0}
        />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
