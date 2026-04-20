import type { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AboutCard({ icon: Icon, title, description }: AboutCardProps) {
  return (
    <GlassCard
      hoverEffect={false}
      className="p-3 rounded-lg hover:neon-glow hover:border hover:border-primary transition-all duration-300 ease-in-out"
      glowColor="purple"
    >
      <div className="bg-space-purple-deep rounded-md h-11 w-11 flex items-center justify-center">
        <Icon size={20} className="text-secondary" />
      </div>
      <h4 className="text-xs md:text-md mt-4 font-semibold">{title}</h4>
      <span className="text-[0.7rem] md:text-xs text-primary">
        {description}
      </span>
    </GlassCard>
  );
}
