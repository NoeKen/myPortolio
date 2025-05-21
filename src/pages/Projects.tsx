import { SectionAnimation } from "@/components/animations/SectionAnimation";
import ProjectCard from "@/components/home/ProjectCard";
import { Navbar } from "@/components/layout/Navbar";
import projects from "@/datas/projects.json";
import { motion } from "framer-motion";

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };


  const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";
  return (
    <>
      <Navbar cvUrl={staticCvUrl} />
      <section id="projects" className="py-16 md:py-24 bg-accent/20">
        <SectionAnimation>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4" >
                Mes projets
              </h2>
              <p className="text-muted-foreground max-w-[700px]">
                Découvrez une sélection de mes projets récents dans les domaines
                du développement, du design et de l'administration système.
              </p>
            </div>

            {/* Développement */}
            <div className="mb-10" id="Development">
              <h3 className="text-2xl font-semibold mb-6">Développement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === "development")
                  .map((project, i) => (
                    <motion.div
                      key={project.id}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Design */}
            <div className="mb-10" id="Design">
              <h3 className="text-2xl font-semibold mb-6">Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === "design")
                  .map((project, i) => (
                    <motion.div
                      key={project.id}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </SectionAnimation>
      </section>
    </>
  );
};

export default Projects;
