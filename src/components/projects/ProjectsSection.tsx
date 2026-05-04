"use client";

import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import ProjectSwiper from "@/components/ui/projectSwiper";
import ProjectCard from "@/components/home/ProjectCard";
import { projectCategories, projectCategoryLabels, projectTabs } from "@/lib/project";
import { useProjects } from "@/hooks/useProjects";
import { ProjectsGrid } from "./ProjectsGrid";

interface ProjectsSectionProps {
  mode: "grid" | "carousel";
  showFilters?: boolean;
  className?: string;
}

export function ProjectsSection({
  mode,
  showFilters = false,
  className = "",
}: ProjectsSectionProps) {
  const { activeCategory, setActiveCategory, filteredProjects } = useProjects();

  const tabs = projectTabs;

  const renderGrid = () => (
    <>
      {showFilters && (
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
      )}
      <ProjectsGrid projects={filteredProjects} />
    </>
  );

  const renderCarousel = () => (
    <>
      {projectCategories.map((category) => {
        const filtered = filteredProjects.filter((p) => p.category === category.id);
        if (filtered.length === 0) return null;

        return (
          <div key={category.id} className="mb-16">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-2xl font-semibold">
                {projectCategoryLabels[category.id]}
              </h3>
              <Link href={`/Projects/#${projectCategoryLabels[category.id]}`}>
                <Button
                  variant="link"
                  className="text-sm text-primary hover:underline px-0"
                >
                  Voir tout
                </Button>
              </Link>
            </div>

            <ProjectSwiper 
              className="!pb-12 h-[420px]"
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {filtered.map((project, projectIndex) => (
                <SwiperSlide
                  key={`${project.id}-${project.title}-${projectIndex}`}
                  className="h-full"
                >
                  <div className="h-full min-h-[420px] flex flex-col justify-between">
                    <ProjectCard project={project} />
                  </div>
                </SwiperSlide>
              ))}
            </ProjectSwiper>
          </div>
        );
      })}
    </>
  );

  return (
    <section id="projects" className={`py-16 md:py-24 bg-accent/20 ${className}`}>
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes projets</h2>
            <p className="text-muted-foreground max-w-[700px]">
              {mode === "grid"
                ? "Découvrez une sélection de mes projets dans les domaines du développement, des projets académiques et du design graphique."
                : "Découvrez une sélection de mes projets récents dans les domaines du développement, du design et de l'administration système."
              }
            </p>
          </div>

          {mode === "grid" ? renderGrid() : renderCarousel()}
        </div>
      </SectionAnimation>
    </section>
  );
}
