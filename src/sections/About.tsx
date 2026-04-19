import { SquareCode } from "lucide-react";
import { AboutCard } from "../components/AboutCard";
import { aboutSkills } from "../data/softSkills";

export function About() {
  return (
    <section
      className="bg-space-purple min-h-screen flex items-center"
      id="about"
    >
      <div className="grid grid-cols-2 mx-20 screen gap-8 ">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-primary">
            <SquareCode size={22} />
            <span className="text-sm uppercase ">Sobre mim</span>
          </div>
          <h2 className="text-3xl font-bold font">
            Construindo soluções{" "}
            <span className="text-gradient block">robustas e escaláveis</span>
          </h2>
          <p className="text-text-secondary text-md">
            Desenvolvedor com paixão por desvendar desafios técnicos e construir
            soluções que fazem a diferença. Minha jornada é guiada pela
            curiosidade e pelo compromisso com excelência em engenharia de
            software.
          </p>
          <p className="text-primary text-sm">
            Acredito que o melhor código é aquele que resolve problemas reais de
            forma elegante e mantém sua qualidade ao longo do tempo. Cada
            projeto é uma oportunidade de aprender e criar algo excepcional.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {aboutSkills.map((aboutSkill) => (
            <AboutCard
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
