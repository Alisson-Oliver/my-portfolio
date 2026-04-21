import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects/projectsList";
import { Badge } from "../components/Badge";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  Cpu,
  Flag,
  SquareArrowOutUpRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { GlassCard } from "../components/GlassCard";
import { StarBackground } from "../components/StarBackground";
import { useEffect, useState } from "react";

export function ProjectDetails() {
  const { id } = useParams();
  const projectData = projects.find((project) => project.id === id);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleResize = () => setIsMd(media.matches);

    handleResize();
    media.addEventListener("change", handleResize);

    return () => media.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="min-h-screen pt-32 px-6 pb-20">
      {isMd && <StarBackground opacity={0.5} intensity={1.5} />}
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <motion.div whileHover={{ x: -5 }}>
            <Link to={"/#projects"} className="flex items-center gap-1 mb-5">
              <ArrowLeft size={15} className="text-secondary" />
              <span className="text-sm text-secondary">
                Voltar aos Projetos
              </span>
            </Link>
          </motion.div>

          <span className="text-sm text-primary font-mono uppercase">
            Projeto
          </span>
          <h1 className="text-5xl leading-[1.16] pb-1 text-gradient font-extrabold mb-5">
            {projectData?.title}
          </h1>
          <p className="text-text-secondary leading-relaxed w-auto">
            {projectData?.longDescription}
          </p>

          <div className="flex gap-3 my-6 text-sm">
            <a
              href={projectData?.repoLink}
              target="_blank"
              className="bg-primary button-gradient p-2 px-3 md:px-5 rounded-sm flex items-center gap-2 text-semis"
            >
              <LuGithub size={17} />
              Ver Código
            </a>
            {projectData?.demoLink && (
              <a
                href={projectData?.demoLink}
                target="_blank"
                className="border border-primary-border text-text-secondary p-2 px-3 md:px-5 rounded-sm flex items-center gap-2 glass"
              >
                <SquareArrowOutUpRight size={17} />
                Ver Demo
              </a>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4 gap-2">
            <Cpu size={17} className="text-secondary" />
            <h2 className="text-xl font-semibold text-white">Tecnologias</h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {projectData?.techStack.map((stack) => (
              <Badge key={stack} title={stack} className="px-3 py-1 text-xs" />
            ))}
          </ul>
        </div>

        <GlassCard className="mt-8 rounded-md w-auto" hoverEffect={false}>
          <div className=" flex items-center gap-2">
            <BadgeCheck size={20} className="text-secondary" />
            <span className="font-semibold">Problema Solucionado</span>
          </div>
          <p className="mt-2 text-sm text-text-secondary">
            {projectData?.problemSolved}
          </p>
        </GlassCard>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={17} className="text-secondary" />
            <h3 className="text-xl font-semibold  text-white">
              Funcionalidades
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {projectData?.features.map((feature) => (
              <GlassCard
                hoverEffect={false}
                className="h-full rounded-md p-3 w-auto"
              >
                <div className="flex items-center gap-2">
                  <Check size={17} className="text-green-300 shrink-0" />
                  <span className="text-xs md:text-sm text-text-secondary">
                    {feature}
                  </span>
                </div>
              </GlassCard>
            ))}
          </ul>
        </div>

        <GlassCard className="mt-8 rounded-md w-auto" hoverEffect={false}>
          <div className=" flex items-center gap-2">
            <Flag size={20} className="text-secondary" />
            <span className="font-semibold">Maior Desafio</span>
          </div>
          <p className="mt-2 text-sm text-text-secondary">
            {projectData?.difficultChallenge}
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
