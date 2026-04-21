import { Stars } from "lucide-react";
import { heroData } from "../data/hero/hero";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-4 max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-secondary px-2 py-1.5 border border-primary-border rounded-2xl bg-badge text-[0.65rem] font-black"
        >
          <Stars size={15} />
          <span>{heroData.badgeLabel}</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-gradient text-4xl md:text-6xl font-bold"
        >
          {heroData.fullName}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-text-secondary text-xl md:text-2xl font-light"
        >
          {heroData.position}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xs md:text-sm text-secondary"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-3 justify-center mt-4 text-sm"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
