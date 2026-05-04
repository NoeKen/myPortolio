import { useMemo, useState } from "react";
import projects from "@/datas/projects.json";
import type { Project, VisibleProjectCategory } from "@/lib/project";

export type ProjectFilterCategory = "all" | VisibleProjectCategory;

export function useProjects(initialCategory: ProjectFilterCategory = "all") {
  const [activeCategory, setActiveCategory] = useState<ProjectFilterCategory>(initialCategory);

  const filteredProjects = useMemo(() => {
    const allProjects = projects as Project[];
    return activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredProjects,
  };
}
