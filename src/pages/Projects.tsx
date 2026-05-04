import { Navbar } from "@/components/layout/Navbar";
import { SeoHead } from "@/components/SeoHead";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

const Projects = () => {
  return (
    <>
      <SeoHead
        title="Projets | Applications web et mobile"
        description="Découvrez mes projets en développement web et mobile : React, Next.js, Node.js, microservices et design UX."
        canonical="/Projects"
      />
      <Navbar cvUrl={staticCvUrl} />
      <ProjectsSection mode="grid" showFilters />
    </>
  );
};

export default Projects;
