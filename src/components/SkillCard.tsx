import { GlassCard } from "./GlassCard";
import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const stackContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const stackItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

interface Tech {
  name: string;
  icon: LucideIcon;
}
interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  techStack: Tech[];
}

export function SkillCard({ icon: Icon, title, techStack }: SkillCardProps) {
  return (
    <GlassCard glowColor="purple" className="h-full" hoverEffect={true}>
      <div className="flex items-center gap-2.5">
        <div className="bg-space-purple-deep rounded-md p-2.5">
          <Icon size={16} className="text-secondary" />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>

      <motion.ul
        className="mt-4 flex flex-col gap-2 ml-1.5"
        variants={stackContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6, margin: "0px 0px -8% 0px" }}
      >
        {techStack.map((tech) => {
          const TechIcon = tech.icon;

          return (
            <motion.li
              key={tech.name}
              variants={stackItemVariants}
              className="flex items-center gap-3 text-sm"
            >
              <TechIcon size={15} className="text-primary" />
              <span className="text-secondary">{tech.name}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </GlassCard>
  );
}
