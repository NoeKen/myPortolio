
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Server } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-accent/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">À propos de moi</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Développeur analyste avec 3 ans d'expérience dans la création d'applications web
            et mobiles. Je combine mes compétences techniques avec ma passion pour le design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-background/60 backdrop-blur-sm">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement</h3>
              <p className="text-muted-foreground">
                Spécialisé dans le développement d'applications web modernes et performantes
                avec une attention particulière à la qualité du code et l'expérience utilisateur.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design UI/UX</h3>
              <p className="text-muted-foreground">
                Création d'interfaces utilisateur intuitives et esthétiques, en mettant l'accent
                sur l'accessibilité et l'expérience utilisateur.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Administration Système</h3>
              <p className="text-muted-foreground">
                Expérience en tant que technicien informatique avec des compétences en
                Active Directory, administration système et résolution de problèmes techniques.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
