import { SectionAnimation } from "@/components/animations/SectionAnimation";
import ProjectCard from "@/components/home/ProjectCard";
import { Navbar } from "@/components/layout/Navbar";
import projects from "@/datas/projects.json";
import { motion } from "framer-motion";
import { useState } from "react";
import { SeoHead } from "@/components/SeoHead";

type Category = "all" | "development" | "academic" | "design";

const tabs: { id: Category; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "development", label: "Développement" },
  { id: "academic", label: "Académiques" },
  { id: "design", label: "Design" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SeoHead
        title="Projets | Applications web et mobile"
        description="Découvrez mes projets en développement web et mobile : React, Next.js, Node.js, microservices et design UX."
        canonical="/Projects"
      />
      <Navbar cvUrl={staticCvUrl} />
      <section id="projects" className="py-16 md:py-24 bg-accent/20">
        <SectionAnimation>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes projets</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Découvrez une sélection de mes projets dans les domaines du développement,
                des projets académiques et du design graphique.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border hover:bg-accent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={`${project.id}-${project.title}`}
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
            </motion.div>
          </div>
        </SectionAnimation>
      </section>
    </>
  );
};

export default Projects;
