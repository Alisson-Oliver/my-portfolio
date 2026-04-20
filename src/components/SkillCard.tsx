import { GlassCard } from "./GlassCard";
import type { LucideIcon } from "lucide-react";

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
    <GlassCard glowColor="purple" className="h-auto" hoverEffect={true}>
      <div className="flex items-center gap-2.5">
        <div className="bg-space-purple-deep rounded-md p-2.5">
          <Icon size={16} className="text-secondary" />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>

      <ul className="mt-4 flex flex-col gap-2 ml-1.5">
        {techStack.map((tech) => {
          const TechIcon = tech.icon;

          return (
            <li key={tech.name} className="flex items-center gap-3 text-sm">
              <TechIcon size={15} className="text-primary" />
              <span className="text-secondary">{tech.name}</span>
            </li>
          );
        })}
      </ul>
    </GlassCard>
  );
}
