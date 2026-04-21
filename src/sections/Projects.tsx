import { motion, type Variants } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/projects/projects";
import { projects } from "../data/projects/projectsList";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
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

export function Projects() {
  return (
    <section
      className="relative isolate overflow-hidden min-h-screen flex items-center py-16"
      id="projects"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center gap-4 px-4">
        <h2 className="font-bold text-3xl text-center">
          {projectsData.title.main}
          <span className="text-gradient">{projectsData.title.gradient}</span>
        </h2>

        <p className="text-primary text-sm max-w-xl text-center">
          {projectsData.description}
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 md:mx-20 mt-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
            margin: "0px 0px -12% 0px",
          }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                id={project.id}
                techStack={project.techStack}
                links={{ repository: project.repoLink, demo: project.demoLink }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
