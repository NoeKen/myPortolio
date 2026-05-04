import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import projects from "@/datas/projects.json";
import { SectionAnimation } from "@/components/animations/SectionAnimation";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "development" | "design" | "academic" | "system";
}

const projectCategories: Array<{ id: Project["category"]; label: string }> = [
  { id: "development", label: "Développement" },
  { id: "academic", label: "Académiques" },
  { id: "design", label: "Design" },
];

export function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-accent/20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Mes projets
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Découvrez une sélection de mes projets récents dans les domaines
              du développement, du design et de l'administration système.
            </p>
          </div>

          {projectCategories.map((category) => {
            const filteredProjects = (projects as Project[]).filter(
              (project) => project.category === category.id
            );

            if (filteredProjects.length === 0) {
              return null;
            }

            return (
              <div key={category.id} className="mb-10">
                <h3 className="text-2xl font-semibold mb-6">{category.label}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((project, i) => (
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
                        {project.images && project.images.length > 0 ? (
                          <motion.div
                            className="relative h-48 w-full overflow-hidden"
                            variants={imageVariants}
                            initial="hidden"
                            whileHover="hover"
                          >
                            <Image
                              src={project.images[0]}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 45vw"
                              className="object-cover transition-transform"
                            />
                            <motion.div
                              className="absolute inset-0 bg-primary/10"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        ) : (
                          <div className="relative h-48 w-full bg-accent/30 flex items-center justify-center">
                            <span className="text-muted-foreground text-sm">
                              Aperçu du projet
                            </span>
                          </div>
                        )}

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
                                <Badge variant="secondary">{tag}</Badge>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>

                        <CardFooter className="flex gap-2">
                          {project.liveUrl && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button variant="default" size="sm" asChild>
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Voir le projet
                                </a>
                              </Button>
                            </motion.div>
                          )}
                          {project.githubUrl && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  Code source
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
            );
          })}
        </div>
      </SectionAnimation>
    </section>
  );
}
