
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionAnimationProps {
  children: ReactNode;
  delay?: number;
}

export function SectionAnimation({ children, delay = 0 }: SectionAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
