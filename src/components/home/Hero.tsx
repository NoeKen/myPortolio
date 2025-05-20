import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Contact, Download } from "lucide-react";
import { motion } from "framer-motion";



export function Hero() {
  return (
    <>
      <section className="py-20 md:py-28 relative overflow-hidden">
        <motion.img
          src="/images/profileN.png"
          alt="Photo de profil KLAN"
          className="absolute bottom-40  left-0 w-24 md:w-96 opacity-10 z-0 pointer-events-none object-contain hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1.2 }}
        />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              className="space-y-4 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Salut, moi c'est Noé Kenfack
              </motion.h1>
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl  tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Développeur Web & Mobile • Designer UI/UX & Graphique • Analyste
                Programmeur
              </motion.h3>
              <motion.p
                className="text-xl text-muted-foreground max-w-[700px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Je conçois des solutions digitales modernes et intuitives,
                alliant performance technique, design visuel impactant et
                expérience utilisateur fluide. Que vous soyez une entreprise,
                une startup ou un particulier avec un projet en tête, je vous
                accompagne de l’idée à la mise en ligne avec efficacité, écoute
                et clarté.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg">
                  <Link href="#projects">
                    Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    <Contact className="mr-2 h-4 w-4" /> Me contacter
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
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* <section className="py-20 text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Salut, moi c’est KLAN
        </h1>
        <p className="text-xl md:text-2xl">
          Développeur Web & Mobile • UX/UI Designer • Analyste Programmeur
        </p>
        <p className="mt-4 max-w-2xl mx-auto">
          Je conçois des expériences digitales sur mesure et intuitives pour les
          startups, PME et entrepreneurs à Montréal et à l'international. Code
          propre, design réfléchi et vision orientée résultats.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md"
          >
            Voir mes projets
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white rounded-full"
          >
            Me contacter
          </a>
        </div>
      </section> */}
    </>
  );
}
