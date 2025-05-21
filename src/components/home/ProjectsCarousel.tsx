"use client";

import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Button } from "@/components/ui/button";
import projects from "@/datas/projects.json";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import ProjectSwiper from "../ui/projectSwiper";
import ProjectCard from "./ProjectCard";

export function ProjectsCarousel() {
  const renderCategoryCarousel = (
    category: "development" | "design" | "system"
  ) => {
    const filtered = projects.filter((p) => p.category === category);
    if (filtered.length === 0) return null;

    const categoryTitles = {
      development: "Développement",
      design: "Design",
      system: "Administration Système",
    };

    return (
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-2xl font-semibold">{categoryTitles[category]}</h3>
          <Link href={`/Projects/#${categoryTitles[category]}`}>
            <Button
              variant="link"
              className="text-sm text-primary hover:underline px-0"
            >
              Voir tout 
            </Button>
          </Link>
        </div>

        <ProjectSwiper className="!pb-12 h-[420px]">
          {filtered.map((project) => (
            <SwiperSlide key={project.id} className="h-full">
              <div className="h-full min-h-[420px] flex flex-col justify-between">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </ProjectSwiper>

        {/* Bouton voir tout */}
        <div className="mt-6 text-center">
          <Link href={`/projects?cat=${category}`}>
            <Button
              variant="link"
              className="text-sm text-primary hover:underline"
            >
              Voir tous les projets {categoryTitles[category].toLowerCase()}
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-accent/20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Mes projets
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Découvrez une sélection de mes projets récents dans les domaines
              du développement, du design et de l'administration système.
            </p>
          </div>

          {renderCategoryCarousel("development")}
          {renderCategoryCarousel("design")}
          {renderCategoryCarousel("system")}
        </div>
      </SectionAnimation>
    </section>
  );
}
