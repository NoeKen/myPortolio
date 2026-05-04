"use client";

import { ReactNode, useId, useMemo, useEffect, useState } from "react";
import { Swiper as SwiperReact } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { SwiperOptions } from "swiper/types";

interface SwiperProps {
  children: ReactNode;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: boolean | object;
  navigation?: boolean;
  breakpoints?: SwiperOptions["breakpoints"];
  modules?: any[];
}

export default function Swiper({
  children,
  className = "",
  slidesPerView = 1,
  spaceBetween = 10,
  pagination = { clickable: true },
  navigation = true,
  breakpoints,
  modules = [Navigation, Pagination],
}: SwiperProps) {
  const rawId = useId();
  const sliderId = useMemo(() => rawId.replace(/[^a-zA-Z0-9-_]/g, ""), [rawId]);
  const prevClass = `prev-${sliderId}`;
  const nextClass = `next-${sliderId}`;

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const navButtons = document.querySelectorAll(`.${prevClass}, .${nextClass}`);
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

      <SwiperReact
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigation ? { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` } : false}
        pagination={pagination}
        breakpoints={breakpoints}
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
      </SwiperReact>
    </div>
  );
}
