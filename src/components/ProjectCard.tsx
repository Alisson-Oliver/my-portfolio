import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./Badge";
import { GlassCard } from "./GlassCard";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  links: {
    repository: string;
    demo?: string;
  };
}

export function ProjectCard({
  id,
  title,
  description,
  techStack,
  links,
}: ProjectCardProps) {
  const visibleTechs = techStack.slice(0, 4);
  const remainingCount = techStack.length - 4;

  return (
    <GlassCard
      glowColor="purple"
      hoverEffect={false}
      className="flex flex-col h-full hover:text-primary py-8"
    >
      <div>
        <h3 className="text-xl text-main font-semibold">{title}</h3>

        <p className="text-text-secondary mt-2 text-sm min-h-15">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {visibleTechs.map((tech) => (
            <Badge key={tech} title={tech} />
          ))}

          {remainingCount > 0 && (
            <Badge
              className={cn("bg-secondary text-badge")}
              title={`+${remainingCount}`}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-auto pt-5">
        <div className="flex gap-4">
          <a
            href={links.repository}
            target="_blank"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <LuGithub size={15} />
            <span className="text-xs">Código</span>
          </a>

          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <SquareArrowOutUpRight size={15} />
              <span className="text-xs">Demo</span>
            </a>
          )}
        </div>

        <motion.div
          whileHover={{ x: 5 }}
          transition={{ ease: [0.4, 0, 0.2, 0.5] }}
        >
          <a
            href={id}
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
          >
            <span className="text-xs">Detalhes</span>
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </GlassCard>
  );
}
