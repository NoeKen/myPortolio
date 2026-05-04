"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/home/ProjectCard";
import type { Project } from "@/lib/project";

interface ProjectsGridProps {
  projects: Project[];
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function ProjectsGrid({ projects, className = "" }: ProjectsGridProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ${className}`}
    >
      {projects.map((project, index) => (
        <motion.div
          key={`${project.id}-${project.title}`}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
