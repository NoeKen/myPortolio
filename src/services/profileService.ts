
import { supabase } from "@/integrations/supabase/client";

export interface ProfileData {
  id: string;
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  cv_url?: string;
}

export const profileService = {
  async getProfile(): Promise<ProfileData | null> {
    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .single();

    if (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      return null;
    }

    return data as ProfileData;
  }
};
