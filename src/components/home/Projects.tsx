
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionAnimation } from "@/components/animations/SectionAnimation";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "development" | "design" | "system";
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Application de Gestion de Congés",
      description: "Une application mobile permettant aux équipes de gérer le suivi des demandes de congés au sein de l'entreprise.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["Power Apps", "Power Automate", "Sharepoint", "Power FX"],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
      category: "development"
    },
    {
      id: 2,
      title: "Application de Gestion des dépences financières",
      description: "Application de gestion des dépenses financières pour une meilleure visibilité sur les finances personnelles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["React-Native", "Sqlite", "Redux", "Playstore"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.beaware&pcampaignid=web_share",
      category: "development"
    },
    // {
    //   id: 3,
    //   title: "Système de Gestion des Utilisateurs",
    //   description: "Mise en place d'un système de gestion des utilisateurs avec Active Directory pour une entreprise de 200 employés.",
    //   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    //   tags: ["Active Directory", "Windows Server", "PowerShell", "Sécurité"],
    //   category: "system"
    // },
    // {
    //   id: 4,
    //   title: "Application Mobile de Fitness",
    //   description: "Application mobile permettant aux utilisateurs de suivre leurs activités sportives et leur alimentation.",
    //   image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    //   tags: ["React Native", "Firebase", "API REST", "UI/UX"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   category: "development"
    // },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-accent/20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes projets</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Découvrez une sélection de mes projets récents dans les domaines du développement,
              du design et de l'administration système.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden h-full">
                  <motion.div 
                    className="relative h-48 w-full overflow-hidden"
                    variants={imageVariants}
                    initial="hidden"
                    whileHover="hover"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-primary/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + tagIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.liveUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="default" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Voir le projet
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.githubUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code source
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
