
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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
      title: "Application de Gestion de Projet",
      description: "Une application web permettant aux équipes de gérer leurs projets, tâches et échéances.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "development"
    },
    {
      id: 2,
      title: "Refonte UI/UX Site E-commerce",
      description: "Refonte complète de l'interface utilisateur d'un site e-commerce pour améliorer l'expérience d'achat.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["UI/UX", "Figma", "Adobe XD", "Responsive"],
      liveUrl: "https://example.com",
      category: "design"
    },
    {
      id: 3,
      title: "Système de Gestion des Utilisateurs",
      description: "Mise en place d'un système de gestion des utilisateurs avec Active Directory pour une entreprise de 200 employés.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["Active Directory", "Windows Server", "PowerShell", "Sécurité"],
      category: "system"
    },
    {
      id: 4,
      title: "Application Mobile de Fitness",
      description: "Application mobile permettant aux utilisateurs de suivre leurs activités sportives et leur alimentation.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["React Native", "Firebase", "API REST", "UI/UX"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "development"
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-accent/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes projets</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Découvrez une sélection de mes projets récents dans les domaines du développement,
            du design et de l'administration système.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Voir le projet
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code source
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
