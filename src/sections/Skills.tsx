import { Star } from "lucide-react";
import { skills } from "../data/skills/skillsList";
import { SkillCard } from "../components/SkillCard";
import { skillsData } from "../data/skills/skills";
import { motion, type Variants } from "framer-motion";

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function Skills() {
  return (
    <section className=" py-16 bg-space-purple min-h-screen" id="skills">
      <div className="flex gap-2 items-center flex-col justify-center ">
        <div className="flex items-center gap-2 text-secondary px-2 py-1.5 border border-primary-border rounded-2xl bg-badge text-[0.65rem] font-black">
          <Star size={15} />
          <span>{skillsData.badgeLabel}</span>
        </div>
        <h2 className="font-bold text-3xl text-center mt-4">
          {skillsData.title.main}{" "}
          <span className="text-gradient">{skillsData.title.gradient}</span>
        </h2>
        <p className="text-secondary text-center text-sm w-[90%] md:text-md">
          {skillsData.description}
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 w-[90%]"
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35, margin: "0px 0px -10% 0px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              className="h-full"
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                techStack={skill.techStack}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
