import type React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowColor?: `blue` | `purple` | `none`;
}

export function GlassCard({
  className,
  children,
  hoverEffect = true,
  glowColor = "none",
}: GlassCardProps) {
  return (
    <motion.div
      className={cn("glass rounded-2xl p-6", className)}
      whileHover={
        hoverEffect
          ? {
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            }
          : undefined
      }
      style={{
        willChange: "transform",
      }}
    >
      {children}
      {hoverEffect && glowColor !== "none" && (
        <motion.div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 pointer-events-none",
            glowColor === "blue" && "neon-glow-blue",
            glowColor === "purple" && "neon-glow-purple",
          )}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
