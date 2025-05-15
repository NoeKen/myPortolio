
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionAnimation } from "@/components/animations/SectionAnimation";

interface Skill {
  name: string;
  level: number;
  category: "development" | "design" | "system";
}

export function Skills() {
  const developmentSkills: Skill[] = [
    { name: "JavaScript/TypeScript", level: 90, category: "development" },
    { name: "React/Next.js", level: 85, category: "development" },
    { name: "Node.js", level: 80, category: "development" },
    { name: "HTML/CSS", level: 90, category: "development" },
  ];

  const designSkills: Skill[] = [
    { name: "UI/UX Design", level: 85, category: "design" },
    { name: "Figma", level: 80, category: "design" },
    { name: "Adobe Photoshop", level: 75, category: "design" },
    { name: "Responsive Design", level: 90, category: "design" },
  ];

  const systemSkills: Skill[] = [
    { name: "Active Directory", level: 80, category: "system" },
    { name: "Windows Server", level: 75, category: "system" },
    { name: "Réseau", level: 70, category: "system" },
    { name: "Sécurité informatique", level: 75, category: "system" },
  ];

  const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 300 + index * 200);
      
      return () => clearTimeout(timer);
    }, [skill.level, index]);

    return (
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{skill.name}</span>
          <motion.span 
            className="text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            {progress}%
          </motion.span>
        </div>
        <Progress 
          value={progress} 
          className="h-2"
          style={{
            transition: "all 1s cubic-bezier(0.65, 0, 0.35, 1)"
          }}
        />
      </motion.div>
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes compétences</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Un aperçu de mes compétences techniques dans les domaines du développement,
              du design et de l'administration système.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Développement</h3>
                  {developmentSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Design</h3>
                  {designSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Administration Système</h3>
                  {systemSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
