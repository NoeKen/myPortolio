
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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

  const SkillItem = ({ skill }: { skill: Skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm font-medium">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2" />
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes compétences</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Un aperçu de mes compétences techniques dans les domaines du développement,
            du design et de l'administration système.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Développement</h3>
              {developmentSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Design</h3>
              {designSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Administration Système</h3>
              {systemSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
