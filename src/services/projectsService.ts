
import { supabase } from "@/integrations/supabase/client";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: "development" | "design" | "system";
  live_url?: string;
  github_url?: string;
  tags?: string[];
}

export const projectsService = {
  async getProjects(): Promise<ProjectData[]> {
    // Récupérer les projets
    const { data: projects, error: projectsError } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (projectsError) {
      console.error("Erreur lors de la récupération des projets:", projectsError);
      return [];
    }

    // Pour chaque projet, récupérer ses tags
    const projectsWithTags = await Promise.all(
      projects.map(async (project) => {
        const { data: tags, error: tagsError } = await supabase
          .from("project_tags")
          .select("tag")
          .eq("project_id", project.id);

        if (tagsError) {
          console.error(`Erreur lors de la récupération des tags pour le projet ${project.id}:`, tagsError);
          return { ...project, tags: [] };
        }

        return {
          ...project,
          tags: tags.map(t => t.tag)
        };
      })
    );

    return projectsWithTags as ProjectData[];
  },

  async getProjectsByCategory(category: string): Promise<ProjectData[]> {
    // Récupérer les projets par catégorie
    const { data: projects, error: projectsError } = await supabase
      .from("projects")
      .select("*")
      .eq("category", category)
      .order("created_at", { ascending: false });

    if (projectsError) {
      console.error(`Erreur lors de la récupération des projets de catégorie ${category}:`, projectsError);
      return [];
    }

    // Pour chaque projet, récupérer ses tags
    const projectsWithTags = await Promise.all(
      projects.map(async (project) => {
        const { data: tags, error: tagsError } = await supabase
          .from("project_tags")
          .select("tag")
          .eq("project_id", project.id);

        if (tagsError) {
          console.error(`Erreur lors de la récupération des tags pour le projet ${project.id}:`, tagsError);
          return { ...project, tags: [] };
        }

        return {
          ...project,
          tags: tags.map(t => t.tag)
        };
      })
    );

    return projectsWithTags as ProjectData[];
  }
};
