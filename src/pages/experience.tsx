import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Formation } from "@/components/home/Formation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

const experiences = [
  {
    title: "Développeur Web Full-Stack — Stagiaire",
    company: "Adven Conseil",
    period: "Févr. 2026 – Mars 2026",
    location: "Montréal, QC",
    mode: "À distance",
    tags: ["React", "TypeScript", "Vite", "Redux", "Supabase", "JWT", "ESLint", "GitHub Actions"],
    bullets: [
      "Développé des composants React fonctionnels (hooks, TypeScript strict) et géré l'état applicatif avec Redux pour des flux de données complexes.",
      "Conçu des API REST sécurisées avec JWT, validation serveur et authentification via Supabase (base de données, stockage).",
      "Participé aux revues de code et aux cérémonies Agile/Scrum, respect des conventions ESLint et des échéances de sprint.",
    ],
  },
  {
    title: "Développeur Full-Stack",
    company: "Pigiste indépendant",
    period: "Déc. 2024 – Janv. 2026",
    location: "Canada",
    mode: "Hybride",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Firebase", "JWT", "Docker", "CI/CD", "Vercel"],
    bullets: [
      "Conçu et développé des applications Web complètes (React, Next.js, Node.js), gestion autonome du cycle complet de l'analyse à la mise en production.",
      "Modélisé des bases de données relationnelles (PostgreSQL) et implémenté des API REST avec authentification JWT.",
      "Déployé sur Vercel et Firebase avec surveillance des métriques et optimisation des performances applicatives.",
      "Géré les exigences clientèles, les délais et les retours de recette, livraisons itératives.",
    ],
  },
  {
    title: "Développeur mobile React Native",
    company: "Digital Studios",
    period: "Mars 2021 – Janv. 2024",
    location: "Yaoundé, Cameroun",
    mode: "Hybride",
    tags: ["React Native", "TypeScript", "Redux", "GraphQL", "Node.js", "Django", "ESLint", "GitHub Actions"],
    bullets: [
      "Développé des applications multiplateformes (React Native + TypeScript), de la maquette Figma à la publication sur Google Play et l'App Store.",
      "Consommé des API RESTful et GraphQL (Node.js, Django), intégration, gestion des erreurs réseau et optimisation des requêtes.",
      "Mis en place des pipelines CI/CD avec GitHub Actions et appliqué ESLint pour garantir la maintenabilité du code en équipe.",
      "Débogage, profilage et optimisation des performances (React Native Debugger, Flipper), revues de code et livraisons Agile régulières.",
    ],
  },
  {
    title: "Développeur systèmes & applications",
    company: "Agence de Crédit et d'Épargne",
    period: "Avr. 2023 – Janv. 2024",
    location: "Yaoundé, Cameroun",
    mode: "",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "JWT", "GitHub", "Jenkins"],
    bullets: [
      "Développé et déployé des solutions Web internes sécurisées (React, Node.js, PostgreSQL) dans un contexte financier réglementé.",
      "Conçu des API REST avec JWT, gestion des journaux d'audit et contrôle granulaire des accès, conforme aux exigences de sécurité bancaire.",
      "Conteneurisé les applications avec Docker et mis en place un pipeline CI/CD (Jenkins, GitHub), réduction des risques de régression en production.",
      "Optimisé les performances applicatives et modélisé des bases de données relationnelles (PostgreSQL).",
      "Supervisé et formé des stagiaires en développement et en administration de systèmes.",
    ],
  },
  {
    title: "Développeur Android",
    company: "SmartDev Community",
    period: "Janv. 2021 – Mai 2021",
    location: "Yaoundé, Cameroun",
    mode: "Hybride",
    tags: ["Kotlin", "Android Studio", "Firebase", "GitHub", "Material Design"],
    bullets: [
      "Développé des interfaces Android (Kotlin), intégré Firebase pour les données en temps réel et l'authentification.",
      "Géré le versionnage du code avec GitHub dans un cadre collaboratif.",
    ],
  },
];

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
