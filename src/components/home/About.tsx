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
      text: "Spécialisé dans la conception d'applications web et mobile complètes — Node.js, TypeScript, React/Next.js — de l'API REST aux microservices, avec une attention particulière à la qualité du code et à la maintenabilité.",
    },
    {
      icon: Server,
      title: "Architecture & DevOps",
      text: "Expérience en containerisation Docker, pipelines CI/CD (GitHub Actions, Jenkins) et déploiement sur Vercel, Firebase et Google Cloud. À l'aise avec les environnements réglementés et le refactoring de code legacy.",
    },
    {
      icon: Palette,
      title: "Design & Expérience utilisateur",
      text: "Conception d'interfaces soignées et centrées utilisateur avec Figma et Adobe XD, alliant rigueur technique et sens du design pour livrer des produits fluides et cohérents.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-accent/20 relative overflow-hidden">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">À propos de moi</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Développeur fullstack web & mobile basé à Montréal. Fort de plus de 3 ans
              d&apos;expérience, je conçois des solutions numériques complètes pour des
              startups, PME, associations et particuliers — du backend à l&apos;interface,
              avec rigueur, sens du produit et respect des délais.
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
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
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
