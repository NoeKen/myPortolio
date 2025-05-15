import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  cvUrl?: string;
}

export function Hero({ cvUrl }: HeroProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div 
            className="space-y-4 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Développeur Analyste & Designer UI/UX
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-[700px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bienvenue sur mon portfolio. Je conçois et développe des applications web modernes
              avec une expertise en développement, design et administration système.
            </motion.p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg">
                <Link href="#projects">
                  Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild disabled={!cvUrl}>
                <a 
                  href={cvUrl || "#"} 
                  target={cvUrl ? "_blank" : undefined} 
                  rel={cvUrl ? "noopener noreferrer" : undefined} 
                  download={cvUrl ? "cv.pdf" : undefined}
                >
                  <Download className="mr-2 h-4 w-4" /> Télécharger mon CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 z-[-1]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
    </section>
  );
}