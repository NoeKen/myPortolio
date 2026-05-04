import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Server } from "lucide-react";
import { motion } from "framer-motion";
import { SectionAnimation } from "@/components/animations/SectionAnimation";

export function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 10 },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring" as const, stiffness: 400, damping: 10 },
    },
  };

  const cards = [
    {
      icon: Code,
      title: "Développement Fullstack",
      text: "Spécialisé dans la conception d'applications web et mobile complètes - Node.js, TypeScript, React/Next.js - de l’API REST aux microservices, avec une attention particulière à la qualité du code, la maintenabilité et la performance en production.",
    },
    {
      icon: Server,
      title: "Architecture & DevOps",
      text: "Expérience en conteneurisation Docker, pipelines CI/CD (GitHub Actions, Jenkins) et déploiement cloud (Vercel, Firebase, GCP). Habitué aux environnements exigeants et à la structuration d’applications maintenables.",
    },
    {
      icon: Palette,
      title: "Design & Expérience utilisateur",
      text: "Conception d’interfaces centrées utilisateur avec Figma et Adobe XD, en combinant rigueur technique et sens du produit pour livrer des expériences fluides et cohérentes.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-accent/20 relative overflow-hidden"
    >
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              À propos de moi
            </h2>
            <h3 className="text-lg font-medium text-primary mb-4">
              Une approche orientée produit, qualité et impact.
            </h3>
            <p className="text-muted-foreground max-w-[700px]">
              Développeur fullstack web et mobile basé à Montréal, j’accompagne
              des startups, PME et organisations dans la conception et le
              développement de solutions numériques complètes, de l’idée à la
              mise en production. <br/><br/>J’interviens sur l’ensemble du cycle de
              développement : analyse des besoins, architecture, développement,
              déploiement et amélioration continue. Mon approche repose sur des
              bases solides en qualité logicielle et en structuration des
              projets, avec une attention particulière portée à la
              maintenabilité et à la performance. <br/><br/>Au-delà du développement,
              j’accorde une importance forte à l’expérience utilisateur et à la
              compréhension des enjeux métiers, afin de livrer des produits
              utiles, cohérents et adaptés aux besoins réels. Je peux travailler
              de manière autonome ou m’intégrer à une équipe existante, selon la
              nature et l’ampleur du projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="bg-background/60 backdrop-blur-sm h-full">
                    <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                      <motion.div
                        className="p-3 rounded-full bg-primary/10 mb-4"
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground">{card.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
