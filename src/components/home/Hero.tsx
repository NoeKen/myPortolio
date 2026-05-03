import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Contact } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const stackPills = ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL"];

const stats = [
  { value: "3+", label: "ans d'expérience" },
  { value: "Full", label: "cycle" },
  { value: "Web", label: "& Mobile" },
];

export function Hero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

          {/* Colonne gauche — texte */}
          <motion.div
            className="flex flex-col space-y-6 order-2 xl:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="text-primary border-primary/50 px-3 py-1 text-xs"
              >
                Disponible pour opportunités
              </Badge>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aurel Noé Kenfack
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground font-medium leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Développeur Fullstack & Product Builder — Web, mobile, architecture et expérience utilisateur
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stackPills.map((pill) => (
                <Badge key={pill} variant="secondary" className="text-xs px-2.5 py-1">
                  {pill}
                </Badge>
              ))}
            </motion.div>

            <motion.p
              className="text-muted-foreground text-sm leading-relaxed max-w-[560px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Développeur fullstack web et mobile basé à Montréal, avec plus de 3 ans
              d&apos;expérience dans l&apos;écosystème JavaScript. Je conçois des applications
              complètes — de l&apos;architecture backend (API REST, microservices, BFF) aux
              interfaces performantes et soignées — avec un sens du produit adapté à des
              enjeux réels de production.
            </motion.p>

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
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    <Contact className="mr-2 h-4 w-4" /> Me contacter
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Colonne droite — photo + stats */}
          <motion.div
            className="flex flex-col items-center gap-8 order-1 xl:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden ring-4 ring-primary/20 relative">
                <Image
                  src="/images/profileN.png"
                  alt="Aurel Noé Kenfack"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-3 rounded-full border border-primary/10 -z-10" />
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-3 rounded-lg bg-accent/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                >
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Cercle décoratif en fond */}
      <motion.div
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 z-[-1]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] as const }}
      />
    </section>
  );
}
