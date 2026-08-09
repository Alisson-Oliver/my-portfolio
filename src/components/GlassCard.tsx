import type React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({
  className,
  children,
  hoverEffect = true,
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
    </motion.div>
  );
}
