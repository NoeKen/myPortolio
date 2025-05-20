
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (formData: ContactFormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Une erreur s'est produite.");
      }

      toast.success("Message envoyé avec succès !");
      reset();
    } catch (error: any) {
      toast.error(error.message || "Échec de l'envoi du message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
    <motion.div
      className="container px-4 md:px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tighter mb-4">Contact</h2>
        <p className="text-muted-foreground max-w-[700px]">
          Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[ // Cartes dynamiques animées
            {
              icon: <Mail className="h-6 w-6 text-primary" />,
              title: "Email",
              text: "kenfackaurel1@gmail.com",
              delay: 0.3,
            },
            {
              icon: <Phone className="h-6 w-6 text-primary" />,
              title: "Téléphone",
              text: "+1 263 880 7882",
              delay: 0.4,
            },
            {
              icon: <MapPin className="h-6 w-6 text-primary" />,
              title: "Localisation",
              text: "Montréal (QC), Canada",
              delay: 0.5,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="flex items-start space-x-4 pt-6">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </section>
  );
}