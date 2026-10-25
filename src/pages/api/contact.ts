
import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import { Resend } from "resend";

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
      
      const apiKey = process.env.RESEND_API_KEY;
      const toEmail = process.env.CONTACT_TO_EMAIL;
      if (!apiKey || !toEmail) {
        console.error("API Contact: RESEND_API_KEY ou CONTACT_TO_EMAIL manquant.");
        return res.status(500).json({ message: "Le service d'envoi n'est pas configuré." });
      }

      const { name, email, subject, message } = validatedData;
      const text = `Nom : ${name}\nCourriel : ${email}\n\n${message}`;

      const { error } = await new Resend(apiKey).emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: toEmail,
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text,
      });

      if (error) {
        console.error("API Contact Resend Error:", error);
        return res.status(500).json({
          message: "L'envoi a échoué. Écrivez-moi directement à kenfackaurel1@gmail.com.",
        });
      }

      return res.status(200).json({ message: "Message envoyé avec succès !" });

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
