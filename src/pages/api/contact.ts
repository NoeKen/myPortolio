
import type { NextApiRequest, NextApiResponse } from "next";
import { contactService, ContactMessage } from "@/services/contactService";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const success = await contactService.sendMessage(validatedData as ContactMessage);

      if (success) {
        res.status(200).json({ message: "Message envoyé avec succès !" });
      } else {
        res.status(500).json({ message: "Échec de la sauvegarde du message." });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Données invalides.", errors: error.errors });
      }
      console.error("API Contact Error:", error);
      res.status(500).json({ message: "Une erreur interne s'est produite." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
