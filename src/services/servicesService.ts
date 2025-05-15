
import { supabase } from "@/integrations/supabase/client";

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const servicesService = {
  async getServices(): Promise<ServiceData[]> {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Erreur lors de la récupération des services:", error);
      return [];
    }

    return data as ServiceData[];
  }
};
