import { SectionAnimation } from "@/components/animations/SectionAnimation";
import ProjectCard from "@/components/home/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import projects from "@/datas/projects.json";
import { showcase, testimonial } from "@/datas/services";
import type { Project } from "@/lib/project";

const showcaseProjects: Project[] = showcase.flatMap((item) => {
  const project = (projects as Project[]).find((p) => p.id === item.projectId);
  return project
    ? [{ ...project, description: item.description, liveUrl: item.liveUrl ?? project.liveUrl }]
    : [];
});

export function ShowcaseSection() {
  return (
    <section id="realisations" className="py-16 md:py-24 scroll-mt-20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Quelques réalisations
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Sites web, identités visuelles et applications conçus de A à Z.
            </p>
          </div>

          {testimonial && (
            <Card className="mb-8 max-w-3xl mx-auto">
              <CardContent className="pt-6 text-center">
                <blockquote className="text-lg italic">
                  « {testimonial.quote} »
                </blockquote>
                <p className="mt-3 text-sm text-muted-foreground">
                  {testimonial.name}, {testimonial.company}
                </p>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseProjects.map((project) => (
              <div key={project.id} data-showcase={project.id} className="min-w-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-muted-foreground">
              Votre site pourrait être le prochain : la maquette est gratuite.
            </p>
            <Button asChild>
              <a href="#maquette">Demander ma maquette gratuite</a>
            </Button>
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
