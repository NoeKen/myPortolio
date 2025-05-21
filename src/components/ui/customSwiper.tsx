"use client";

import { ReactNode, useId, useMemo, useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CustomSwiperProps {
  children: ReactNode;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: object;
  navigation?: boolean;
  breakpoints?: object;
  modules?: any[];
}

export default function CustomSwiper({
  children,
  className,
  slidesPerView = 1,
  spaceBetween = 10,
  pagination,
  navigation = true,
  breakpoints,
  modules = [Navigation],
}: CustomSwiperProps) {
  const rawId = useId();
  const sliderId = useMemo(() => rawId.replace(/[^a-zA-Z0-9-_]/g, ""), [rawId]);
  const nextClass = `next-${sliderId}`;
  const prevClass = `prev-${sliderId}`;

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Optionnel : pour réactiver les boutons au chargement
  useEffect(() => {
    const navButtons = document.querySelectorAll(`.${nextClass}, .${prevClass}`);
    navButtons.forEach((btn) => btn?.removeAttribute("disabled"));
  }, [nextClass, prevClass]);

  return (
    <div className="relative w-full">
      {navigation && (
        <>
          <button
            className={`custom-prev ${prevClass} absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md transition ${
              isBeginning
                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                : "bg-white/90 text-primary hover:bg-white"
            }`}
            disabled={isBeginning}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className={`custom-next ${nextClass} absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md transition ${
              isEnd
                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                : "bg-white/90 text-primary hover:bg-white"
            }`}
            disabled={isEnd}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <Swiper
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation ? { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` } : false}
        pagination={pagination}
        // breakpoints={breakpoints}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={() => {
          setIsBeginning(false);
          setIsEnd(false);
        }}
        className={className}
      >
        {children}
      </Swiper>
    </div>
  );
}
