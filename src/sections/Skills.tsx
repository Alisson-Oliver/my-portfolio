import { Star } from "lucide-react";
import { skills } from "../data/skills";
import { SkillCard } from "../components/SkillCard";

export function Skills() {
  return (
    <section className=" py-16 bg-space-purple min-h-screen" id="skills">
      <div className="flex gap-2 items-center flex-col justify-center ">
        <div className="flex items-center gap-2 text-secondary px-2 py-1.5 border border-primary-border rounded-2xl bg-badge text-[0.65rem] font-black">
          <Star size={15} />
          <span>Arsenal Tecnológico</span>
        </div>
        <h2 className="font-bold text-3xl text-center mt-4">
          Stack <span className="text-gradient">Tecnológico</span>
        </h2>
        <p className="text-secondary text-center">
          Tecnologias e ferramentas que utilizo para construir soluções robustas
          e escaláveis.
        </p>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {skills.map((skill) => (
            <SkillCard
              icon={skill.icon}
              title={skill.title}
              techStack={skill.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
