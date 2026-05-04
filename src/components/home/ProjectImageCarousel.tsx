"use client";

import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CustomSwiper from "@/components/ui/customSwiper";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  tags: string[];
}

export default function ProjectImageCarousel({
  images,
  title,
  tags,
}: ProjectImageCarouselProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {images.length > 0 ? (
        <div className="relative h-48 w-full overflow-hidden">
          <CustomSwiper
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-md overflow-hidden"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative h-48 w-full cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={img}
                    alt={
                      index === 0
                        ? `${title} — ${tags.slice(0, 4).join(", ")}`
                        : `${title} — aperçu ${index + 1}`
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      ) : (
        <div className="h-48 w-full bg-accent/30 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Projet académique</span>
        </div>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={images.map((img) => ({ src: img }))}
        carousel={{ finite: true }}
      />
    </>
  );
}
