
import { supabase } from "@/integrations/supabase/client";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactService = {
  async sendMessage(message: ContactMessage): Promise<boolean> {
    const { error } = await supabase
      .from("contact_messages")
      .insert([message]);

    if (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      return false;
    }

    return true;
  }
};
