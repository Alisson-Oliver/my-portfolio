import { SquareCode } from "lucide-react";
import { AboutCard } from "../components/AboutCard";
import { aboutSkills } from "../data/about/softSkills";
import { aboutData } from "../data/about/about";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function About() {
  return (
    <section
      className="bg-space-purple min-h-screen flex items-center py-20 md:py-0"
      id="about"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-20 gap-10 lg:gap-20">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex items-center gap-2 text-primary">
            <SquareCode size={22} />
            <span className="text-sm uppercase font-medium">Sobre mim</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            {aboutData.title.main}
            <span className="text-gradient block sm:inline">
              {aboutData.title.gradient}
            </span>
          </h2>

          <div className="space-y-4">
            <p className="text-text-secondary text-sm md:text-md">
              {aboutData.description}
            </p>
            <p className="text-primary text-sm italic">{aboutData.resume}</p>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {aboutSkills.map((aboutSkill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <AboutCard
                key={index}
                icon={aboutSkill.icon}
                description={aboutSkill.description}
                title={aboutSkill.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
