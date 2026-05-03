import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const formations = [
  {
    degree: "AEC — Analyste-programmeur",
    institution: "Collège Bois-de-Boulogne",
    location: "Montréal, QC",
    year: "Mars 2026",
    description:
      "Architectures applicatives, développement Web et mobile moderne (React, Node.js, ASP.NET), microservices, applications transactionnelles.",
  },
  {
    degree: "Baccalauréat en informatique",
    institution: "Équivalence MIFI",
    location: "Montréal, QC",
    year: "2024",
    description:
      "Équivalence québécoise reconnue par le Ministère de l'Immigration, de la Francisation et de l'Intégration.",
  },
];

export function Formation() {
  return (
    <section id="formation" className="py-16 md:py-24 bg-accent/20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Formation</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Parcours académique en informatique et développement logiciel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {formations.map((f, i) => (
              <motion.div
                key={f.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Card className="bg-background/60 backdrop-blur-sm h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">{f.year}</div>
                    <h3 className="font-semibold text-base mb-1">{f.degree}</h3>
                    <div className="text-sm text-primary mb-3">
                      {f.institution} · {f.location}
                    </div>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
