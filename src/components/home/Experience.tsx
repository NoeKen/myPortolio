import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { experiences } from "@/datas/experiences";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Expériences</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Parcours professionnel dans le développement web, mobile et fullstack.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={`${exp.company}-${i}`}
                  className="relative pl-12 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-base">{exp.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary mb-3">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.company} · {exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/experience">
                  Voir toutes mes expériences <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
