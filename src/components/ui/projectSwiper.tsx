"use client"; // Nécessaire pour l'utilisation de hooks dans un composant Next.js avec App Router

// Imports React
import { ReactNode, useId, useMemo, useState, useEffect } from "react";

// Composant Swiper
import { Swiper } from "swiper/react";

// Modules additionnels de Swiper
import { Navigation, Pagination } from "swiper/modules";

// Icônes Lucide pour les flèches personnalisées
import { ChevronLeft, ChevronRight } from "lucide-react";

// Styles Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Typage des options Swiper pour typer proprement `breakpoints`
import { SwiperOptions } from "swiper/types";

/**
 * Interface des props attendues par le composant ProjectSwiper
 */
interface ProjectSwiperProps {
  children: ReactNode; // Les slides (généralement des <SwiperSlide>)
  className?: string;  // Classe CSS personnalisable
  breakpoints?: SwiperOptions["breakpoints"]; // Options responsive
  spaceBetween?: number; // Espace entre les slides
}

/**
 * ProjectSwiper
 * Ce composant encapsule un carrousel Swiper avec :
 * - Navigation personnalisée (flèches)
 * - Pagination (points cliquables)
 * - Comportement responsive
 * - Désactivation automatique des boutons aux extrémités
 */
export default function ProjectSwiper({
  children,
  className = "",
  spaceBetween = 30,
  breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}: ProjectSwiperProps) {
  // Génère un ID unique pour éviter les conflits entre plusieurs Swipers
  const rawId = useId();
  const sliderId = useMemo(() => rawId.replace(/[^a-zA-Z0-9-_]/g, ""), [rawId]);

  // Classes CSS dynamiques pour les boutons de navigation
  const prevClass = `prev-${sliderId}`;
  const nextClass = `next-${sliderId}`;

  // États pour savoir si on est au début ou à la fin du carrousel
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  /**
   * Nettoyage de Swiper : enlève les attributs `disabled` ajoutés automatiquement,
   * pour que nos propres styles conditionnels prennent le relais.
   */
  useEffect(() => {
    const buttons = document.querySelectorAll(`.${prevClass}, .${nextClass}`);
    buttons.forEach((btn) => btn?.removeAttribute("disabled"));
  }, [prevClass, nextClass]);

  return (
    <div className="relative w-full">
      {/* Bouton flèche gauche */}
      <button
        className={`custom-prev ${prevClass} absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md transition ${
          isBeginning
            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            : "bg-black/70 text-white hover:bg-black "
        }`}
        disabled={isBeginning}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Bouton flèche droite */}
      <button
        className={`custom-next ${nextClass} absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md transition ${
          isEnd
            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            : "bg-black/70 text-white hover:bg-black "
        }`}
        disabled={isEnd}
      >
        <ChevronRight className="h-5 w-5 " />
      </button>

      {/* Swiper principal */}
      <Swiper
        spaceBetween={spaceBetween} // Espace entre les slides
        breakpoints={breakpoints}   // Configuration responsive
        modules={[Navigation, Pagination]} // Modules utilisés
        navigation={{
          prevEl: `.${prevClass}`, // Lien vers le bouton précédent
          nextEl: `.${nextClass}`, // Lien vers le bouton suivant
        }}
        pagination={{ clickable: true }} // Pagination activée
        onSlideChange={(swiper) => {
          // Met à jour les états selon la position actuelle du carrousel
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={() => {
          setIsBeginning(false);
          setIsEnd(false);
        }}
        className={className} // Classe CSS personnalisable
      >
        {children}
      </Swiper>
    </div>
  );
}
