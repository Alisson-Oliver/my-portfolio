import { Stars } from "lucide-react";
import { heroData } from "../data/hero/hero";
import { StarBackground } from "../components/StarBackground";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center px-4">
      <StarBackground
        intensity={0.6}
        showCloud={true}
        showSparkles={true}
        showStars={true}
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-xl">
        <div className="flex items-center gap-2 text-secondary px-2 py-1.5 border border-primary-border rounded-2xl bg-badge text-[0.65rem] font-black">
          <Stars size={15} />
          <span>{heroData.badgeLabel}</span>
        </div>

        <h1 className="text-gradient text-4xl md:text-6xl font-bold">
          {heroData.fullName}
        </h1>
        <h2 className="text-text-secondary text-xl md:text-2xl font-light">
          {heroData.position}
        </h2>

        <p className="text-xs md:text-sm text-secondary">
          {heroData.description}
        </p>
        <div className="flex gap-3 justify-center mt-4 text-sm">
          <a
            href="#projects"
            className="bg-primary primary p-2 px-4 md:px-5 rounded-sm"
          >
            Ver Projetos
          </a>
          <a
            href="#skills"
            className="border border-primary p-2 px-4 md:px-5 rounded-sm"
          >
            Habilidades
          </a>
        </div>
      </div>
    </section>
  );
}
