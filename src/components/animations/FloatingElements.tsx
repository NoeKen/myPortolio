
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  duration: number;
  delay: number;
  type: "circle" | "square" | "triangle";
}

export function FloatingElements() {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);

  useEffect(() => {
    // Generate random shapes
    const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f97316", "#ec4899"];
    const types: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];
    
    const newShapes: FloatingShape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      type: types[Math.floor(Math.random() * types.length)]
    }));
    
    setShapes(newShapes);
  }, []);

  const renderShape = (shape: FloatingShape) => {
    switch (shape.type) {
      case "circle":
        return (
          <motion.div
            key={shape.id}
            className="absolute rounded-full opacity-10"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              zIndex: -1
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, shape.rotation, 0]
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut"
            }}
          />
        );
      case "square":
        return (
          <motion.div
            key={shape.id}
            className="absolute opacity-10"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              zIndex: -1
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, -15, 0],
              rotate: [0, shape.rotation, 0]
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut"
            }}
          />
        );
      case "triangle":
        return (
          <motion.div
            key={shape.id}
            className="absolute opacity-10"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              zIndex: -1
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              rotate: [0, shape.rotation, 0]
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut"
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map(renderShape)}
    </div>
  );
}
