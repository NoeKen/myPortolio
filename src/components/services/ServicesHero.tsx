import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <section className="py-16 md:py-24 scroll-mt-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 max-w-[800px]">
            Un site web qui fait appeler vos clients
          </h1>
          <p className="text-muted-foreground max-w-[700px] mb-8">
            Sites vitrines et landing pages pour les PME du Québec, livrés en
            quelques semaines à prix abordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href="#maquette">Demander ma maquette gratuite</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#forfaits">Voir les forfaits</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Maquette de votre page d&apos;accueil gratuite, sans engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
