import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

type TabId = "backend" | "frontend" | "devops" | "design" | "mobile" | "bdd";

const tabs: { id: TabId; label: string }[] = [
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "devops", label: "DevOps & CI/CD" },
  { id: "design", label: "Design" },
  { id: "mobile", label: "Mobile" },
  { id: "bdd", label: "BDD & Outils" },
];

const skillsByTab: Record<TabId, string[]> = {
  backend: [
    "Node.js", "Express.js", "TypeScript", "API REST", "JWT",
    "Microservices", "Architecture BFF", "ASP.NET MVC", "C#/.NET Core",
  ],
  frontend: [
    "React.js", "Next.js", "TypeScript (ES2015+)", "Redux Toolkit",
    "Tailwind CSS", "MUI", "Bootstrap", "Angular", "Vue.js",
  ],
  devops: [
    "Docker", "Docker Compose", "GitHub Actions", "Jenkins",
    "Vercel", "Firebase", "Google Cloud", "AWS (notions)",
  ],
  design: [
    "Figma", "Adobe XD", "Photoshop", "Illustrator",
    "Canva", "UI/UX Design", "Branding",
  ],
  mobile: [
    "React Native", "TypeScript + Redux", "Android natif (Kotlin)",
    "iOS (Swift, notions)",
  ],
  bdd: [
    "PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Firebase",
    "SQLite", "Sequelize", "Entity Framework",
    "GitHub / GitLab / Bitbucket", "Postman", "npm",
    "Jira", "Confluence", "Notion", "Trello",
    "Agile/Scrum", "Kanban", "SDLC", "Revues de code",
  ],
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabId>("backend");

  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes compétences</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Stack technique complet — du backend à l&apos;infrastructure, en passant par
              le frontend, le mobile et le design.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {skillsByTab[activeTab].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
              >
                <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionAnimation>
    </section>
  );
}
