import { Mail, MapPin, Phone } from "lucide-react";
import { SectionAnimation } from "@/components/animations/SectionAnimation";
import ContactForm from "@/components/home/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { useContactForm } from "@/hooks/useContactForm";

const contactCards = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    text: "kenfackaurel1@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Téléphone",
    text: "+1 263 880 7882",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Localisation",
    text: "Montréal (QC), Canada",
  },
];

export function QuoteRequest({
  form,
  isLoading,
  onSubmit,
}: ReturnType<typeof useContactForm>) {
  return (
    <section id="maquette" className="py-16 md:py-24 scroll-mt-20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Demander ma maquette gratuite
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Décrivez votre entreprise en quelques lignes : je vous envoie la
              maquette de votre page d&apos;accueil d&apos;ici 5 jours, sans
              engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et je vous répondrai dans
                  les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
              </CardContent>
            </Card>

            <div className="flex flex-col justify-center space-y-6">
              {contactCards.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
