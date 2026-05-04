import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Formation } from "@/components/home/Formation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/datas/experiences";

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Expériences — Noé Kenfack</title>
        <meta
          name="description"
          content="Parcours professionnel de Noé Kenfack — développeur fullstack web et mobile basé à Montréal."
        />
      </Head>
      <Layout cvUrl={staticCvUrl}>
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Expériences professionnelles
              </h1>
              <p className="text-muted-foreground max-w-[700px]">
                Plus de 3 ans d&apos;expérience fullstack — du mobile natif aux architectures
                microservices, en passant par le contexte financier réglementé.
              </p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={`${exp.company}-${i}`}
                    className="relative pl-12 md:pl-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <Card className="bg-background/60 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <h2 className="font-semibold text-lg">{exp.title}</h2>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-primary mb-4">
                          <MapPin className="h-3 w-3" />
                          <span>
                            {exp.company} · {exp.location}
                            {exp.mode ? ` (${exp.mode})` : ""}
                          </span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Formation />
      </Layout>
    </>
  );
}
