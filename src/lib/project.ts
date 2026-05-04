export type VisibleProjectCategory = "development" | "design" | "academic";
export type ProjectCategory = VisibleProjectCategory | "system";

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  period?: string;
  institution?: string;
}

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  development: "Développement",
  design: "Design",
  academic: "Académiques",
  system: "Système",
};

export const projectCategories: Array<{ id: VisibleProjectCategory; label: string }> = [
  { id: "development", label: "Développement" },
  { id: "design", label: "Design" },
  { id: "academic", label: "Académiques" },
];

export const projectTabs: Array<{ id: "all" | VisibleProjectCategory; label: string }> = [
  { id: "all", label: "Tous" },
  { id: "development", label: "Développement" },
  { id: "design", label: "Design" },
];
