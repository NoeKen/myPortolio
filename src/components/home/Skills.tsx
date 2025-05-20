import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Cloud,
  Code,
  Code2,
  Database,
  Figma,
  Github,
  Layers,
  Paintbrush2,
  Palette,
  Server,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import { useState } from "react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: "development" | "design" | "system";
}

export function Skills() {
  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const skillsData = [
  {
    title: "Développement Web & Mobile",
    icon: Code2,
    items: [
      "HTML, CSS, JavaScript, TypeScript, ",
      "React, Next.js, Tailwind CSS, Bootstrap, ",
      "React Native",
      "Node.js, Express.js, Sequelize,",
      "API REST, Firebase"
    ]
  },
  {
    title: "Design UX/UI & Graphisme",
    icon: Paintbrush2,
    items: [
      "Figma, Adobe XD, Photoshop",
      "Illustrator, Canva",
      "Design UI/UX, Branding"
    ]
  },
  {
    title: "Base de données",
    icon: Database,
    items: [
      "MongoDB, PostgreSQL, MySQL, SQLite, Oracle",
    ]
  },
  {
    title: "Déploiement & Maintenance",
    icon: Cloud,
    items: [
      "Firebase, Vercel, Netlify",
      "Git, GitHub",
      "Windows Server"
    ]
  },
  {
    title: "Gestion de projet",
    icon: ClipboardList,
    items: [
      "Trello, Jira, Notion, Slack"
    ]
  },
  {
    title: "NoCode / LowCode",
    icon: Wrench,
    items: [
      "Webflow, Framer",
      "Airtable, Notion",
      "Zapier, Make (Integromat)"
    ]
  }
];

  const developmentSkills: Skill[] = [
    { name: "JavaScript / TypeScript", icon: Code2, category: "development" },
    {
      name: "React / Next.js (Front-end)",
      icon: Layers,
      category: "development",
    },
    {
      name: "Node.js / Express (Back-end)",
      icon: TerminalSquare,
      category: "development",
    },
    { name: "API REST / Firebase", icon: Server, category: "development" },
    { name: "HTML / CSS / Tailwind CSS", icon: Code, category: "development" },
  ];

  const designSkills: Skill[] = [
    {
      name: "UI/UX Design (interfaces, prototypage, parcours utilisateur)",
      icon: Paintbrush2,
      category: "design",
    },
    {
      name: "Figma & Adobe XD (maquettes, prototypes interactifs)",
      icon: Figma,
      category: "design",
    },
    {
      name: "Design Graphique (logos, identités visuelles)",
      icon: Palette,
      category: "design",
    },
    { name: "Photoshop / Illustrator", icon: Paintbrush2, category: "design" },
  ];

  const systemSkills: Skill[] = [
    {
      name: "Firebase / Vercel / Netlify (hébergement & déploiement)",
      icon: Cloud,
      category: "system",
    },
    {
      name: "Bases de données : MongoDB / PostgreSQL / MySQL",
      icon: Database,
      category: "system",
    },
    { name: "Git / GitHub (versioning)", icon: Github, category: "system" },
    {
      name: "Trello / Jira / Notion (gestion de projet)",
      icon: Server,
      category: "system",
    },
  ];

  const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
    const Icon = skill.icon;

    return (
      <motion.div
        className="flex items-center gap-4 mb-4 px-4 py-2 rounded-md bg-background/60 backdrop-blur-sm hover:shadow-md transition-all"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="p-2 rounded-full bg-primary/10"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <Icon className="h-5 w-5 text-primary" />
        </motion.div>
        <span className="text-sm font-medium text-muted-foreground">
          {skill.name}
        </span>
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
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Mes compétences
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Cette section présente un inventaire structuré de mes compétences
              techniques, classées selon les domaines du développement, du
              design, ainsi que des outils et processus de déploiement,
              attestant de ma rigueur et de mon expertise professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1  text-center md:grid-cols-3 xl:grid-cols-3 gap-6">
            {skillsData.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full bg-background/60 backdrop-blur-sm">
                    <CardContent className="pt-6 px-6 pb-4 flex flex-col">
                      <motion.div
                        className="p-3 rounded-full bg-primary/10 mb-4 self-center"
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-center mb-2">
                        {section.title}
                      </h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {section.items.map((item, i) => (
                          <>{item}</>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              // onHoverStart={() => setHoveredCard("development")}
              // onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="p-3 rounded-full bg-primary/10 mb-4"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <Code className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Développement
                  </h3>
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
              // onHoverStart={() => setHoveredCard("design")}
              // onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="p-3 rounded-full bg-primary/10 mb-4"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <Palette className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Design
                  </h3>
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
              // onHoverStart={() => setHoveredCard("system")}
              // onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <motion.div
                    className="p-3 rounded-full bg-primary/10 mb-4"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    // whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <Server className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Déploiement & Outils
                  </h3>
                  {systemSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div> */}
        </div>
      </SectionAnimation>
    </section>
  );
}

// import { SectionAnimation } from "@/components/animations/SectionAnimation";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Cloud, Code, Code2, Database, Figma, Github, Layers, Paintbrush2, Palette, Server, TerminalSquare } from "lucide-react";
// import { useState } from "react";

// interface Skill {
//   name: string;
//   // level: number;
//   icon: React.ElementType; // on utilise l'icône comme composant
//   category: "development" | "design" | "system";
// }

// export function Skills() {
//   const iconVariants = {
//     hidden: { scale: 0, rotate: -45 },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 10,
//       },
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//   };

//   const developmentSkills: Skill[] = [
//   { name: "JavaScript / TypeScript", icon: Code2, category: "development" },
//   { name: "React / Next.js", icon: Layers, category: "development" },
//   { name: "Node.js / Express", icon: TerminalSquare, category: "development" },
//   { name: "HTML / CSS / Tailwind", icon: Code2, category: "development" },
// ];

// const designSkills: Skill[] = [
//   { name: "UI/UX Design", icon: Paintbrush2, category: "design" },
//   { name: "Figma", icon: Figma, category: "design" },
//   { name: "Photoshop / Illustrator", icon: Paintbrush2, category: "design" },
// ];

// const systemSkills: Skill[] = [
//   { name: "Firebase / Vercel / Netlify", icon: Cloud, category: "system" },
//   { name: "MongoDB / PostgreSQL / MySQL", icon: Database, category: "system" },
//   { name: "Git / GitHub", icon: Github, category: "system" },
//   { name: "Trello / Jira / Notion", icon: Server, category: "system" },
// ];

//   // const developmentSkills: Skill[] = [
//   //   { name: "JavaScript/TypeScript", level: 90, category: "development" },
//   //   { name: "React/Next.js", level: 85, category: "development" },
//   //   { name: "Node.js", level: 80, category: "development" },
//   //   { name: "HTML/CSS", level: 90, category: "development" },
//   // ];

//   // const designSkills: Skill[] = [
//   //   { name: "UI/UX Design", level: 85, category: "design" },
//   //   { name: "Figma", level: 80, category: "design" },
//   //   { name: "Adobe Photoshop", level: 75, category: "design" },
//   //   { name: "Responsive Design", level: 90, category: "design" },
//   // ];

//   // const systemSkills: Skill[] = [
//   //   { name: "Active Directory", level: 80, category: "system" },
//   //   { name: "Windows Server", level: 75, category: "system" },
//   //   { name: "Réseau", level: 70, category: "system" },
//   //   { name: "Sécurité informatique", level: 75, category: "system" },
//   // ];

//   const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
//     const Icon = skill.icon;

//   return (
//     <motion.div
//       className="flex items-center gap-4 mb-4 px-4 py-2 rounded-md bg-background/60 backdrop-blur-sm hover:shadow-md transition-all"
//       initial={{ opacity: 0, x: -10 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.08 }}
//       viewport={{ once: true }}
//     >
//       <motion.div
//         className="p-2 rounded-full bg-primary/10"
//         variants={iconVariants}
//         initial="hidden"
//         whileInView="visible"
//         whileHover="hover"
//         viewport={{ once: true }}
//       >
//         <Icon className="h-5 w-5 text-primary" />
//       </motion.div>
//       <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
//     </motion.div>
//   );
// };

//   // const SkillItem = ({ skill, index, isHovered }: { skill: Skill; index: number; isHovered: boolean }) => {
//   //   const [progress, setProgress] = useState(0);

//   //   useEffect(() => {
//   //     const timer = setTimeout(() => {
//   //       setProgress(skill.level);
//   //     }, 300 + index * 200);

//   //     return () => clearTimeout(timer);
//   //   }, [skill.level, index]);

//   //   return (
//   //     <motion.div
//   //       className="mb-4 relative"
//   //       initial={{ opacity: 0, x: -20 }}
//   //       whileInView={{ opacity: 1, x: 0 }}
//   //       transition={{ duration: 0.5, delay: index * 0.1 }}
//   //       viewport={{ once: true }}
//   //     >
//   //       <div className="flex justify-between mb-1">
//   //         <span className="text-sm font-medium">{skill.name}</span>
//   //         <motion.span
//   //           className="text-sm font-medium"
//   //           initial={{ opacity: 0 }}
//   //           animate={{ opacity: 1 }}
//   //           transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//   //         >
//   //           {progress}%
//   //         </motion.span>
//   //       </div>
//   //       <div className="relative">
//   //         <Progress
//   //           value={progress}
//   //           className="h-2"
//   //           style={{
//   //             transition: "all 1s cubic-bezier(0.65, 0, 0.35, 1)"
//   //           }}
//   //         />
//   //         {isHovered && (
//   //           <motion.div
//   //             className="absolute left-0 top-0 h-2 bg-primary/30"
//   //             initial={{ width: 0 }}
//   //             animate={{ width: `${progress}%` }}
//   //             transition={{ duration: 0.3 }}
//   //             style={{ width: `${progress}%` }}
//   //           />
//   //         )}
//   //         {isHovered && (
//   //           <motion.div
//   //             className="absolute -top-8 px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium"
//   //             initial={{ opacity: 0, y: 10 }}
//   //             animate={{ opacity: 1, y: 0 }}
//   //             transition={{ duration: 0.2 }}
//   //             style={{ left: `calc(${progress}% - 20px)` }}
//   //           >
//   //             {progress}%
//   //           </motion.div>
//   //         )}
//   //       </div>
//   //     </motion.div>
//   //   );
//   // };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.5,
//       },
//     }),
//   };

//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);

//   return (
//     <section id="skills" className="py-16 md:py-24">
//       <SectionAnimation>
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter mb-4">
//               Mes compétences
//             </h2>
//             <p className="text-muted-foreground max-w-[700px]">
//               Un aperçu de mes compétences techniques dans les domaines du
//               développement, du design et de l'administration système.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               custom={0}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               onHoverStart={() => setHoveredCard("development")}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <Card className="h-full">
//                 <CardContent className="pt-6 flex flex-col items-center text-center h-full">
//                 <motion.div
//                   className="p-3 rounded-full bg-primary/10 mb-4"
//                   variants={iconVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover="hover"
//                   viewport={{ once: true }}
//                 >
//                   <Code className="h-6 w-6 text-primary" />
//                 </motion.div>
//                   <h3 className="text-xl font-semibold mb-4 text-center">
//                     Développement
//                   </h3>
//                   {developmentSkills.map((skill, index) => (
//                     <SkillItem
//                       key={skill.name}
//                       skill={skill}
//                       index={index}
//                       // isHovered={hoveredCard === "development"}
//                     />
//                   ))}
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               custom={1}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               onHoverStart={() => setHoveredCard("design")}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <Card className="h-full">
//                 <CardContent className="pt-6 flex flex-col items-center text-center h-full">
//                   <motion.div
//                     className="p-3 rounded-full bg-primary/10 mb-4"
//                     variants={iconVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     whileHover="hover"
//                     viewport={{ once: true }}
//                   >
//                     <Palette className="h-6 w-6 text-primary" />
//                   </motion.div>
//                   <h3 className="text-xl font-semibold mb-4 text-center">
//                     Design
//                   </h3>
//                   {designSkills.map((skill, index) => (
//                     <SkillItem
//                       key={skill.name}
//                       skill={skill}
//                       index={index}
//                       // isHovered={hoveredCard === "design"}
//                     />
//                   ))}
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               custom={2}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               onHoverStart={() => setHoveredCard("system")}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <Card className="h-full">
//                 <CardContent className="pt-6 flex flex-col items-center text-center h-full">
//                   <motion.div
//                     className="p-3 rounded-full bg-primary/10 mb-4"
//                     variants={iconVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     whileHover="hover"
//                     viewport={{ once: true }}
//                   >
//                     <Server className="h-6 w-6 text-primary" />
//                   </motion.div>
//                   <h3 className="text-xl font-semibold mb-4 text-center">
//                     Déploiement & Outils
//                   </h3>
//                   {systemSkills.map((skill, index) => (
//                     <SkillItem
//                       key={skill.name}
//                       skill={skill}
//                       index={index}
//                       // isHovered={hoveredCard === "system"}
//                     />
//                   ))}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </SectionAnimation>
//       {/* <SectionAnimation>
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes compétences</h2>
//             <p className="text-muted-foreground max-w-[700px]">
//               Un aperçu de mes compétences techniques dans les domaines du développement,
//               du design et de l'administration système.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <motion.div
//               custom={0}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               onHoverStart={() => setHoveredCard("development")}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <Card className="h-full">
//                 <CardContent className="pt-6">
//                   <h3 className="text-xl font-semibold mb-4 text-center">Développement</h3>
//                   {developmentSkills.map((skill, index) => (
//                     <SkillItem
//                       key={skill.name}
//                       skill={skill}
//                       index={index}
//                       isHovered={hoveredCard === "development"}
//                     />
//                   ))}
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               custom={1}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               onHoverStart={() => setHoveredCard("design")}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <Card className="h-full">
//                 <CardContent className="pt-6">
//                   <h3 className="text-xl font-semibold mb-4 text-center">Design</h3>
//                   {designSkills.map((skill, index) => (
//                     <SkillItem
//                       key={skill.name}
//                       skill={skill}
//                       index={index}
//                       isHovered={hoveredCard === "design"}
//                     />
//                   ))}
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               custom={2}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               onHoverStart={() => setHoveredCard("system")}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <Card className="h-full">
//                 <CardContent className="pt-6">
//                   <h3 className="text-xl font-semibold mb-4 text-center">Administration Système</h3>
//                   {systemSkills.map((skill, index) => (
//                     <SkillItem
//                       key={skill.name}
//                       skill={skill}
//                       index={index}
//                       isHovered={hoveredCard === "system"}
//                     />
//                   ))}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </SectionAnimation> */}
//     </section>
//   );
// }
