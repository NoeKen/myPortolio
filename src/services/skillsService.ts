
import { supabase } from "@/integrations/supabase/client";

export interface SkillData {
  id: string;
  name: string;
  level: number;
  category: "development" | "design" | "system";
}

export const skillsService = {
  async getSkills(): Promise<SkillData[]> {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("category", { ascending: true })
      .order("level", { ascending: false });

    if (error) {
      console.error("Erreur lors de la récupération des compétences:", error);
      return [];
    }

    return data as SkillData[];
  },

  async getSkillsByCategory(category: string): Promise<SkillData[]> {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .eq("category", category)
      .order("level", { ascending: false });

    if (error) {
      console.error(`Erreur lors de la récupération des compétences de catégorie ${category}:`, error);
      return [];
    }

    return data as SkillData[];
  }
};
