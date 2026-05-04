
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";

export function Contact() {
  const { form, isLoading, onSubmit } = useContactForm();

  return (
    <section id="contact" className="py-16 md:py-24">
    <motion.div
      className="container px-4 md:px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
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
              <ContactForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
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