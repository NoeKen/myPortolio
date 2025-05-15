
import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // TODO: Implement actual message sending (e.g., email) or storage here.
      // For now, we just log it to the server console.
      console.log("Nouveau message de contact reçu:", validatedData);

      // Simulate successful processing for "realtime" feel on the frontend
      res.status(200).json({ message: "Message envoyé avec succès !" });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Données invalides.", errors: error.errors });
      }
      console.error("API Contact Error:", error);
      res.status(500).json({ message: "Une erreur interne s'est produite lors du traitement de votre message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
