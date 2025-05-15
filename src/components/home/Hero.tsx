
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Développeur Analyste & Designer UI/UX
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Bienvenue sur mon portfolio. Je conçois et développe des applications web modernes
              avec une expertise en développement, design et administration système.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
