import type React from "react";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowColor?: `blue` | `purple` | `none`;
}

export function GlassCard({
  className,
  children,
  hoverEffect,
  glowColor,
}: GlassCardProps) {
  return <div className="glass">{title}</div>;
}
