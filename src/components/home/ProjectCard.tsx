"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { useState } from "react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CustomSwiper from "../ui/customSwiper";

interface Project {
  images: string[]; // <--- mis à jour
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Card className="overflow-hidden h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <CustomSwiper
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-md overflow-hidden"
          >
            {project.images.map((img, index) => (
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
                    alt={`${project.title} - ${index}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>

        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + tagIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary">{tag}</Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          {project.liveUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" size="sm" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Voir le projet
                </a>
              </Button>
            </motion.div>
          )}
          {project.githubUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code source
                </a>
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={project.images?.map((img) => ({ src: img }))}
        carousel={{ finite: true }} // ✅ Empêche le scroll infini
      />
    </>
  );
}

// import Image from "next/image";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import { Badge } from "../ui/badge";
// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import { Button } from "../ui/button";

// interface Project {
//   image: string;
//   title: string;
//   description: string;
//   tags: string[];
//   liveUrl?: string;
//   githubUrl?: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//     const imageVariants = {
//     hidden: { scale: 1 },
//     hover: {
//       scale: 1.05,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <Card className="overflow-hidden h-full">
//       <motion.div
//         className="relative h-48 w-full overflow-hidden"
//         variants={imageVariants}
//         initial="hidden"
//         whileHover="hover"
//       >
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover transition-transform"
//         />
//         <motion.div
//           className="absolute inset-0 bg-primary/10"
//           initial={{ opacity: 0 }}
//           whileHover={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         />
//       </motion.div>
//       <CardHeader>
//         <CardTitle>{project.title}</CardTitle>
//         <CardDescription>{project.description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-wrap gap-2">
//           {project.tags.map((tag: string, tagIndex: number) => (
//             <motion.div
//               key={tag}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 + tagIndex * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Badge variant="secondary">{tag}</Badge>
//             </motion.div>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter className="flex gap-2">
//         {project.liveUrl && (
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button variant="default" size="sm" asChild>
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <ExternalLink className="mr-2 h-4 w-4" />
//                 Voir le projet
//               </a>
//             </Button>
//           </motion.div>
//         )}
//         {project.githubUrl && (
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button variant="outline" size="sm" asChild>
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Github className="mr-2 h-4 w-4" />
//                 Code source
//               </a>
//             </Button>
//           </motion.div>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }
