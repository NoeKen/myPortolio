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
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

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
            <p className="text-muted-foreground max-w-[700px]">
              Développeur fullstack web & mobile, designer UX/UI & graphique, et
              analyste programmeur basé à Montréal. Fort de plus de 3 ans
              d’expérience, je conçois des solutions numériques sur mesure pour
              des startups, PME, associations et particuliers. Je combine le
              sens du design, la rigueur du code et la compréhension des besoins
              métiers pour offrir des produits à la fois performants, élégants
              et centrés utilisateur. <br /> Je travaille seul ou en réseau avec
              des partenaires de confiance selon l’ampleur et les besoins du
              projet. Mon approche est simple : écoute, clarté, fiabilité, et
              respect des délais. Si vous avez un projet — même juste une idée —
              je peux vous aider à le transformer en produit concret et
              fonctionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              custom={0}
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
                    <Code className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Développement</h3>
                  <p className="text-muted-foreground">
                    Spécialisé dans le développement d'applications web modernes
                    et performantes avec une attention particulière à la qualité
                    du code et l'expérience utilisateur.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
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
                    <Palette className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    Design UI/UX & Graphique
                  </h3>
                  <p className="text-muted-foreground">
                    Conception d’interfaces utilisateur modernes, accessibles et
                    centrées utilisateur, avec une attention particulière à
                    l’esthétique et à la cohérence visuelle. Je travaille
                    principalement avec Figma, Adobe XD et Photoshop, et je
                    réalise également des supports graphiques (logos, branding)
                    adaptés à chaque projet.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={2}
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
                    <Server className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    Déploiement & Maintenance
                  </h3>
                  <p className="text-muted-foreground">
                    J’assure aussi la mise en ligne, l’hébergement et la
                    maintenance de vos projets, pour que vous n’ayez rien à
                    gérer côté technique.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
