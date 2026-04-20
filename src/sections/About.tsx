import { SquareCode } from "lucide-react";
import { AboutCard } from "../components/AboutCard";
import { aboutSkills } from "../data/about/softSkills";
import { aboutData } from "../data/about/about";
export function About() {
  return (
    <section
      className="bg-space-purple min-h-screen flex items-center py-20 md:py-0"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-20 gap-10 lg:gap-20">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex items-center gap-2 text-primary">
            <SquareCode size={22} />
            <span className="text-sm uppercase font-medium">Sobre mim</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            {aboutData.title.main}
            <span className="text-gradient block sm:inline">
              {aboutData.title.gradient}
            </span>
          </h2>

          <div className="space-y-4">
            <p className="text-text-secondary text-base md:text-md">
              Desenvolvedor com paixão por desvendar desafios técnicos e
              construir soluções que fazem a diferença.
            </p>
            <p className="text-primary text-sm italic">
              Acredito que o melhor código é aquele que resolve problemas reais
              de forma elegante.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {aboutSkills.map((aboutSkill, index) => (
            <AboutCard
              key={index}
              icon={aboutSkill.icon}
              description={aboutSkill.description}
              title={aboutSkill.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
