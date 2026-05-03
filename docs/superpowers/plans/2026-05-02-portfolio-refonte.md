# Portfolio Refonte — Implementation Plan (v2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Synchroniser le portfolio avec le CV 2026 — nouveau Hero 2 colonnes, Skills 6 onglets, sections Experience et Formation, page `/experience`, page `/projects` avec onglets catégorie.

**Architecture:** Toutes les modifications sont dans le Next.js Pages Router existant. Données en constantes locales aux composants + `projects.json`. Aucun appel API, aucune nouvelle dépendance npm.

**Tech Stack:** Next.js 14 (Pages Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · lucide-react

**Contraintes :**
- Aucun commit ni push
- Utiliser des edits ciblés quand possible — ne pas remplacer un fichier complet si la logique existante est utile
- Après chaque tâche TypeScript-impactante : `npx tsc --noEmit`

---

## Fichiers touchés

| Action | Fichier | Rôle |
|--------|---------|------|
| Modifier | `src/datas/projects.json` | Ajout 2 projets académiques, correction IDs, "academic" |
| Modifier | `src/components/home/ProjectCard.tsx` | Guard images vides |
| Modifier | `src/components/layout/Navbar.tsx` | Ajout lien Expériences |
| Réécrire | `src/components/home/Hero.tsx` | 2 colonnes, photo visible, bio courte, stats valeur |
| Réécrire | `src/components/home/About.tsx` | Nouveau contenu 3 cartes |
| Réécrire | `src/components/home/Skills.tsx` | 6 onglets filtrables (remplace code mort commenté) |
| Créer | `src/components/home/Experience.tsx` | Timeline résumé (3 postes récents) |
| Créer | `src/components/home/Formation.tsx` | 2 cartes diplôme |
| Modifier | `src/pages/index.tsx` | Ajouter imports + Experience + Formation |
| Créer | `src/pages/experience.tsx` | Page complète (5 postes + formation) |
| Réécrire | `src/pages/Projects.tsx` | Onglets Tous/Développement/Académiques/Design |
| Modifier | `src/components/home/ProjectsCarousel.tsx` | Fix type "academic", retrait "system" |

---

## Task 1 — Mettre à jour `projects.json`

**Fichiers :**
- Modifier : `src/datas/projects.json`

La catégorie des projets scolaires s'appelle `"academic"` dans le code ; l'UI affiche `"Académiques"`.

- [ ] **Remplacer le contenu complet du fichier**

```json
[
  {
    "id": 1,
    "title": "Application de Gestion de Congés",
    "description": "Application mobile pour gérer les demandes de congés en entreprise.",
    "images": [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
    ],
    "tags": ["Power Apps", "Sharepoint", "Power Automate"],
    "category": "development"
  },
  {
    "id": 2,
    "title": "Suivi des Dépenses Personnelles",
    "description": "Application mobile pour suivre et analyser ses dépenses personnelles.",
    "images": [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1580910051073-dc918f5f2447?w=800"
    ],
    "tags": ["React Native", "SQLite", "Redux"],
    "liveUrl": "https://play.google.com/store/apps/details?id=com.beaware&pcampaignid=web_share",
    "githubUrl": "https://github.com/NoeKen/BeAware.git",
    "category": "development"
  },
  {
    "id": 3,
    "title": "Site Web de Portfolio",
    "description": "Site web personnel pour présenter mes projets et compétences.",
    "images": ["/images/Portfolio/image2.png"],
    "tags": ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    "liveUrl": "https://noekenfack.vercel.app/",
    "githubUrl": "",
    "category": "development"
  },
  {
    "id": 6,
    "title": "Architecture microservices — Gestion événementielle",
    "description": "Conception et déploiement de 5 microservices Node.js/Express indépendants (Utilisateur, Billet, Évènement, Notification, BFF) avec exposition Web (Next.js) et mobile (React Native).",
    "images": [],
    "tags": ["Node.js", "Express", "React Native", "Next.js", "Docker", "Docker Compose", "API REST", "GitHub Actions"],
    "category": "academic",
    "period": "Oct. 2025 – Jan. 2026",
    "institution": "Collège Bois-de-Boulogne"
  },
  {
    "id": 7,
    "title": "Plateforme e-commerce — Stack Microsoft",
    "description": "Plateforme e-commerce complète (catalogue, panier, commandes, authentification) avec ASP.NET MVC, Entity Framework et SQL Server.",
    "images": [],
    "tags": ["ASP.NET MVC", "C#", "Entity Framework", "SQL Server", "T-SQL"],
    "category": "academic",
    "period": "Août – Nov. 2025",
    "institution": "Collège Bois-de-Boulogne"
  },
  {
    "id": 8,
    "title": "Logo pour entreprise de BTP",
    "description": "Création d'identité visuelle pour une entreprise de bâtiment et travaux publics.",
    "images": [
      "/images/BTP/image1.png",
      "/images/BTP/image2.png",
      "/images/BTP/image3.png",
      "/images/BTP/image4.png"
    ],
    "tags": ["Photoshop", "Design Research", "Logo Design"],
    "category": "design"
  },
  {
    "id": 9,
    "title": "Flyers pour des formations en DAO",
    "description": "Conception de supports visuels pour des formations en dessin assisté par ordinateur.",
    "images": [
      "/images/DT_Design/image1.png",
      "/images/DT_Design/image2.png",
      "/images/DT_Design/image3.png"
    ],
    "tags": ["Photoshop", "Design Research", "Logo Design"],
    "category": "design"
  },
  {
    "id": 10,
    "title": "Journée de la langue maternelle 2023",
    "description": "Flyers pour cérémonie de la journée de la langue maternelle 2023.",
    "images": [
      "/images/JLM/image1.png",
      "/images/JLM/image2.png",
      "/images/JLM/image3.png",
      "/images/JLM/image4.png",
      "/images/JLM/image5.png",
      "/images/JLM/image7.png",
      "/images/JLM/image8.png"
    ],
    "tags": ["Photoshop", "Design Research", "Logo Design"],
    "category": "design"
  },
  {
    "id": 11,
    "title": "Journée de la langue maternelle 2024",
    "description": "Flyers pour cérémonie de la journée de la langue maternelle 2024.",
    "images": [
      "/images/JLM2024/image1.png",
      "/images/JLM2024/image2.png",
      "/images/JLM2024/image3.png",
      "/images/JLM2024/image4.png"
    ],
    "tags": ["Photoshop", "Design Research", "Logo Design"],
    "category": "design"
  },
  {
    "id": 12,
    "title": "Logo pour boutique d'appareils informatiques",
    "description": "Logo et mockup pour boutique de distribution d'appareils informatiques.",
    "images": [
      "/images/Hight_Tech/image1.png",
      "/images/Hight_Tech/image2.png"
    ],
    "tags": ["Photoshop", "Logo Design", "Mock-up", "Design Research"],
    "category": "design"
  },
  {
    "id": 13,
    "title": "Calendriers",
    "description": "Calendriers professionnels et d'anniversaire.",
    "images": [
      "/images/Calendar/image1.png",
      "/images/Calendar/image2.png",
      "/images/Calendar/image3.png",
      "/images/Calendar/image4.png",
      "/images/Calendar/image5.png"
    ],
    "tags": ["Photoshop", "Design Research", "Logo Design"],
    "category": "design"
  },
  {
    "id": 14,
    "title": "Logo Association",
    "description": "Logo pour l'association des anciens de la communauté kribienne.",
    "images": ["/images/EIPF/image1.png"],
    "tags": ["Photoshop", "Design Research", "Logo Design"],
    "category": "design"
  },
  {
    "id": 15,
    "title": "HBD / HNY",
    "description": "Affiches pour souhaiter Joyeux anniversaire et bonne année.",
    "images": [
      "/images/HBD/image1.png",
      "/images/HBD/image2.png",
      "/images/HBD/image3.png"
    ],
    "tags": ["Photoshop", "Design Research", "Logo Design"],
    "category": "design"
  }
]
```

- [ ] **Vérifier TypeScript**

```bash
npx tsc --noEmit
```

---

## Task 2 — Guard images vides dans `ProjectCard`

**Fichiers :**
- Modifier : `src/components/home/ProjectCard.tsx` (edit ciblé — ne pas remplacer le fichier)

- [ ] **Remplacer le bloc `<div className="relative h-48 w-full overflow-hidden">` par :**

```tsx
{project.images && project.images.length > 0 ? (
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
) : (
  <div className="h-48 w-full bg-accent/30 flex items-center justify-center">
    <span className="text-muted-foreground text-sm">Projet académique</span>
  </div>
)}
```

- [ ] **Remplacer la prop `slides` dans `<Lightbox>` :**

```tsx
slides={(project.images ?? []).map((img) => ({ src: img }))}
```

---

## Task 3 — Mettre à jour `Navbar.tsx`

**Fichiers :**
- Modifier : `src/components/layout/Navbar.tsx` (2 insertions ciblées)

- [ ] **Insérer après le lien `/#skills` dans la nav desktop :**

```tsx
<Link
  href="/experience"
  className="text-sm font-medium hover:text-primary transition-colors"
>
  Expériences
</Link>
```

- [ ] **Insérer après le lien `/#skills` dans la nav mobile :**

```tsx
<Link
  href="/experience"
  className="text-sm font-medium hover:text-primary transition-colors"
  onClick={toggleMenu}
>
  Expériences
</Link>
```

---

## Task 4 — Réécrire `Hero.tsx`

**Fichiers :**
- Réécrire : `src/components/home/Hero.tsx`

**Bio hero — courte et impactante (2 phrases) :**
> Développeur fullstack web et mobile basé à Montréal, avec plus de 3 ans d'expérience dans l'écosystème JavaScript. Je conçois des applications complètes — de l'architecture backend (API REST, microservices, BFF) aux interfaces performantes et soignées — avec un sens du produit adapté à des enjeux réels de production.

**Stats — orientées valeur :**
- `3+` / `ans d'expérience`
- `Full` / `cycle`
- `Web` / `& Mobile`

- [ ] **Remplacer le contenu complet du fichier :**

```tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Contact } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const stackPills = ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL"];

const stats = [
  { value: "3+", label: "ans d'expérience" },
  { value: "Full", label: "cycle" },
  { value: "Web", label: "& Mobile" },
];

export function Hero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

          {/* Colonne gauche — texte */}
          <motion.div
            className="flex flex-col space-y-6 order-2 xl:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="text-primary border-primary/50 px-3 py-1 text-xs"
              >
                Disponible pour opportunités
              </Badge>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aurel Noé Kenfack
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground font-medium leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Développeur Fullstack & Product Builder — Web, mobile, architecture et expérience utilisateur
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stackPills.map((pill) => (
                <Badge key={pill} variant="secondary" className="text-xs px-2.5 py-1">
                  {pill}
                </Badge>
              ))}
            </motion.div>

            <motion.p
              className="text-muted-foreground text-sm leading-relaxed max-w-[560px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Développeur fullstack web et mobile basé à Montréal, avec plus de 3 ans
              d&apos;expérience dans l&apos;écosystème JavaScript. Je conçois des applications
              complètes — de l&apos;architecture backend (API REST, microservices, BFF) aux
              interfaces performantes et soignées — avec un sens du produit adapté à des
              enjeux réels de production.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg">
                  <Link href="#projects">
                    Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    <Contact className="mr-2 h-4 w-4" /> Me contacter
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Colonne droite — photo + stats */}
          <motion.div
            className="flex flex-col items-center gap-8 order-1 xl:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden ring-4 ring-primary/20 relative">
                <Image
                  src="/images/profileN.png"
                  alt="Aurel Noé Kenfack"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-3 rounded-full border border-primary/10 -z-10" />
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-3 rounded-lg bg-accent/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                >
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Cercle décoratif en fond */}
      <motion.div
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 z-[-1]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] as const }}
      />
    </section>
  );
}
```

- [ ] **Vérifier TypeScript**

```bash
npx tsc --noEmit
```

---

## Task 5 — Mettre à jour `About.tsx`

**Fichiers :**
- Réécrire : `src/components/home/About.tsx` (les animations et la structure sont conservées, seul le contenu change)

- [ ] **Remplacer le contenu complet du fichier :**

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Server } from "lucide-react";
import { motion } from "framer-motion";
import { SectionAnimation } from "@/components/animations/SectionAnimation";

export function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 10 },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring" as const, stiffness: 400, damping: 10 },
    },
  };

  const cards = [
    {
      icon: Code,
      title: "Développement Fullstack",
      text: "Spécialisé dans la conception d'applications web et mobile complètes — Node.js, TypeScript, React/Next.js — de l'API REST aux microservices, avec une attention particulière à la qualité du code et à la maintenabilité.",
    },
    {
      icon: Server,
      title: "Architecture & DevOps",
      text: "Expérience en containerisation Docker, pipelines CI/CD (GitHub Actions, Jenkins) et déploiement sur Vercel, Firebase et Google Cloud. À l'aise avec les environnements réglementés et le refactoring de code legacy.",
    },
    {
      icon: Palette,
      title: "Design & Expérience utilisateur",
      text: "Conception d'interfaces soignées et centrées utilisateur avec Figma et Adobe XD, alliant rigueur technique et sens du design pour livrer des produits fluides et cohérents.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-accent/20 relative overflow-hidden">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">À propos de moi</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Développeur fullstack web & mobile basé à Montréal. Fort de plus de 3 ans
              d&apos;expérience, je conçois des solutions numériques complètes pour des
              startups, PME, associations et particuliers — du backend à l&apos;interface,
              avec rigueur, sens du produit et respect des délais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Card className="bg-background/60 backdrop-blur-sm h-full">
                    <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                      <motion.div
                        className="p-3 rounded-full bg-primary/10 mb-4"
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-muted-foreground">{card.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
```

---

## Task 6 — Réécrire `Skills.tsx` avec 6 onglets

**Fichiers :**
- Réécrire : `src/components/home/Skills.tsx` (le fichier actuel est quasi-entièrement du code mort commenté — remplacement complet justifié)

- [ ] **Remplacer le contenu complet du fichier :**

```tsx
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
```

- [ ] **Vérifier TypeScript**

```bash
npx tsc --noEmit
```

---

## Task 7 — Créer `Experience.tsx` (résumé accueil — 3 postes récents)

**Fichiers :**
- Créer : `src/components/home/Experience.tsx`

Note : Ce composant affiche les 3 postes les plus récents. Tous les 5 postes (incluant Agence de Crédit et d'Épargne, SmartDev Community) sont sur la page `/experience` (Task 10).

- [ ] **Créer le fichier :**

```tsx
import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Développeur Web Full-Stack — Stagiaire",
    company: "Adven Conseil",
    period: "Févr. 2026 – Mars 2026",
    location: "Montréal, QC (À distance)",
    description:
      "Développement de composants React fonctionnels et API REST sécurisées avec JWT, dans un contexte Agile/Scrum.",
    tags: ["React", "TypeScript", "Redux", "Supabase", "JWT"],
  },
  {
    title: "Développeur Full-Stack",
    company: "Pigiste indépendant",
    period: "Déc. 2024 – Janv. 2026",
    location: "Canada (Hybride)",
    description:
      "Applications Web complètes (React, Next.js, Node.js), gestion autonome du cycle de l'analyse à la mise en production.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Vercel"],
  },
  {
    title: "Développeur mobile React Native",
    company: "Digital Studios",
    period: "Mars 2021 – Janv. 2024",
    location: "Yaoundé, Cameroun (Hybride)",
    description:
      "Applications multiplateformes de la maquette Figma à la publication sur Google Play et l'App Store.",
    tags: ["React Native", "TypeScript", "Redux", "GraphQL", "CI/CD"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Expériences</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Parcours professionnel dans le développement web, mobile et fullstack.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={`${exp.company}-${i}`}
                  className="relative pl-12 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-base">{exp.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary mb-3">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.company} · {exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/experience">
                  Voir toutes mes expériences <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
```

---

## Task 8 — Créer `Formation.tsx`

**Fichiers :**
- Créer : `src/components/home/Formation.tsx`

- [ ] **Créer le fichier :**

```tsx
import { SectionAnimation } from "@/components/animations/SectionAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const formations = [
  {
    degree: "AEC — Analyste-programmeur",
    institution: "Collège Bois-de-Boulogne",
    location: "Montréal, QC",
    year: "Mars 2026",
    description:
      "Architectures applicatives, développement Web et mobile moderne (React, Node.js, ASP.NET), microservices, applications transactionnelles.",
  },
  {
    degree: "Baccalauréat en informatique",
    institution: "Équivalence MIFI",
    location: "Montréal, QC",
    year: "2024",
    description:
      "Équivalence québécoise reconnue par le Ministère de l'Immigration, de la Francisation et de l'Intégration.",
  },
];

export function Formation() {
  return (
    <section id="formation" className="py-16 md:py-24 bg-accent/20">
      <SectionAnimation>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Formation</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Parcours académique en informatique et développement logiciel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {formations.map((f, i) => (
              <motion.div
                key={f.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Card className="bg-background/60 backdrop-blur-sm h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">{f.year}</div>
                    <h3 className="font-semibold text-base mb-1">{f.degree}</h3>
                    <div className="text-sm text-primary mb-3">
                      {f.institution} · {f.location}
                    </div>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionAnimation>
    </section>
  );
}
```

---

## Task 9 — Mettre à jour `index.tsx`

**Fichiers :**
- Modifier : `src/pages/index.tsx` (edit ciblé — ajouter imports + 2 sections)

- [ ] **Ajouter les imports manquants** (après les imports existants) :

```tsx
import { Experience } from "@/components/home/Experience";
import { Formation } from "@/components/home/Formation";
```

- [ ] **Mettre à jour le `<title>` :**

```tsx
<title>Noé Kenfack — Développeur Fullstack</title>
```

- [ ] **Mettre à jour la `meta description` :**

```tsx
<meta
  name="description"
  content="Portfolio de Noé Kenfack — Développeur Fullstack Web & Mobile basé à Montréal. Node.js, TypeScript, React, Next.js, PostgreSQL."
/>
```

- [ ] **Insérer `<Experience />` et `<Formation />` entre `<Skills />` et `<ProjectsCarousel />` :**

```tsx
<Skills />
<Experience />
<Formation />
<ProjectsCarousel />
```

---

## Task 10 — Créer la page `/experience`

**Fichiers :**
- Créer : `src/pages/experience.tsx`

Cette page contient **tous les 5 postes** du CV, incluant Agence de Crédit et d'Épargne et SmartDev Community, plus la section Formation réutilisée depuis `Formation.tsx`.

- [ ] **Créer le fichier :**

```tsx
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Formation } from "@/components/home/Formation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

const experiences = [
  {
    title: "Développeur Web Full-Stack — Stagiaire",
    company: "Adven Conseil",
    period: "Févr. 2026 – Mars 2026",
    location: "Montréal, QC",
    mode: "À distance",
    tags: ["React", "TypeScript", "Vite", "Redux", "Supabase", "JWT", "ESLint", "GitHub Actions"],
    bullets: [
      "Développé des composants React fonctionnels (hooks, TypeScript strict) et géré l'état applicatif avec Redux pour des flux de données complexes.",
      "Conçu des API REST sécurisées avec JWT, validation serveur et authentification via Supabase (base de données, stockage).",
      "Participé aux revues de code et aux cérémonies Agile/Scrum, respect des conventions ESLint et des échéances de sprint.",
    ],
  },
  {
    title: "Développeur Full-Stack",
    company: "Pigiste indépendant",
    period: "Déc. 2024 – Janv. 2026",
    location: "Canada",
    mode: "Hybride",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Firebase", "JWT", "Docker", "CI/CD", "Vercel"],
    bullets: [
      "Conçu et développé des applications Web complètes (React, Next.js, Node.js), gestion autonome du cycle complet de l'analyse à la mise en production.",
      "Modélisé des bases de données relationnelles (PostgreSQL) et implémenté des API REST avec authentification JWT.",
      "Déployé sur Vercel et Firebase avec surveillance des métriques et optimisation des performances applicatives.",
      "Géré les exigences clientèles, les délais et les retours de recette, livraisons itératives.",
    ],
  },
  {
    title: "Développeur mobile React Native",
    company: "Digital Studios",
    period: "Mars 2021 – Janv. 2024",
    location: "Yaoundé, Cameroun",
    mode: "Hybride",
    tags: ["React Native", "TypeScript", "Redux", "GraphQL", "Node.js", "Django", "ESLint", "GitHub Actions"],
    bullets: [
      "Développé des applications multiplateformes (React Native + TypeScript), de la maquette Figma à la publication sur Google Play et l'App Store.",
      "Consommé des API RESTful et GraphQL (Node.js, Django), intégration, gestion des erreurs réseau et optimisation des requêtes.",
      "Mis en place des pipelines CI/CD avec GitHub Actions et appliqué ESLint pour garantir la maintenabilité du code en équipe.",
      "Débogage, profilage et optimisation des performances (React Native Debugger, Flipper), revues de code et livraisons Agile régulières.",
    ],
  },
  {
    title: "Développeur systèmes & applications",
    company: "Agence de Crédit et d'Épargne",
    period: "Avr. 2023 – Janv. 2024",
    location: "Yaoundé, Cameroun",
    mode: "",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "JWT", "GitHub", "Jenkins"],
    bullets: [
      "Développé et déployé des solutions Web internes sécurisées (React, Node.js, PostgreSQL) dans un contexte financier réglementé.",
      "Conçu des API REST avec JWT, gestion des journaux d'audit et contrôle granulaire des accès, conforme aux exigences de sécurité bancaire.",
      "Conteneurisé les applications avec Docker et mis en place un pipeline CI/CD (Jenkins, GitHub), réduction des risques de régression en production.",
      "Optimisé les performances applicatives et modélisé des bases de données relationnelles (PostgreSQL).",
      "Supervisé et formé des stagiaires en développement et en administration de systèmes.",
    ],
  },
  {
    title: "Développeur Android",
    company: "SmartDev Community",
    period: "Janv. 2021 – Mai 2021",
    location: "Yaoundé, Cameroun",
    mode: "Hybride",
    tags: ["Kotlin", "Android Studio", "Firebase", "GitHub", "Material Design"],
    bullets: [
      "Développé des interfaces Android (Kotlin), intégré Firebase pour les données en temps réel et l'authentification.",
      "Géré le versionnage du code avec GitHub dans un cadre collaboratif.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Expériences — Noé Kenfack</title>
        <meta
          name="description"
          content="Parcours professionnel de Noé Kenfack — développeur fullstack web et mobile basé à Montréal."
        />
      </Head>
      <Layout cvUrl={staticCvUrl}>
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Expériences professionnelles
              </h1>
              <p className="text-muted-foreground max-w-[700px]">
                Plus de 3 ans d&apos;expérience fullstack — du mobile natif aux architectures
                microservices, en passant par le contexte financier réglementé.
              </p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={`${exp.company}-${i}`}
                    className="relative pl-12 md:pl-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <Card className="bg-background/60 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <h2 className="font-semibold text-lg">{exp.title}</h2>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-primary mb-4">
                          <MapPin className="h-3 w-3" />
                          <span>
                            {exp.company} · {exp.location}
                            {exp.mode ? ` (${exp.mode})` : ""}
                          </span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-0.5 shrink-0">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Formation />
      </Layout>
    </>
  );
}
```

---

## Task 11 — Réécrire `Projects.tsx` avec onglets

**Fichiers :**
- Réécrire : `src/pages/Projects.tsx`

La catégorie interne est `"academic"` ; l'UI affiche `"Académiques"`.

- [ ] **Remplacer le contenu complet du fichier :**

```tsx
import { SectionAnimation } from "@/components/animations/SectionAnimation";
import ProjectCard from "@/components/home/ProjectCard";
import { Navbar } from "@/components/layout/Navbar";
import projects from "@/datas/projects.json";
import { motion } from "framer-motion";
import { useState } from "react";

type Category = "all" | "development" | "academic" | "design";

const tabs: { id: Category; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "development", label: "Développement" },
  { id: "academic", label: "Académiques" },
  { id: "design", label: "Design" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar cvUrl={staticCvUrl} />
      <section id="projects" className="py-16 md:py-24 bg-accent/20">
        <SectionAnimation>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Mes projets</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Découvrez une sélection de mes projets dans les domaines du développement,
                des projets académiques et du design graphique.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border hover:bg-accent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={`${project.id}-${project.title}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionAnimation>
      </section>
    </>
  );
};

export default Projects;
```

- [ ] **Vérifier TypeScript**

```bash
npx tsc --noEmit
```

---

## Task 12 — Corriger `ProjectsCarousel.tsx` (edit ciblé)

**Fichiers :**
- Modifier : `src/components/home/ProjectsCarousel.tsx` (3 edits ciblés uniquement)

- [ ] **Edit 1 — Mettre à jour la signature de `renderCategoryCarousel`** :

Remplacer :
```tsx
const renderCategoryCarousel = (
  category: "development" | "design" | "system"
) => {
```
Par :
```tsx
const renderCategoryCarousel = (
  category: "development" | "design" | "academic"
) => {
```

- [ ] **Edit 2 — Mettre à jour `categoryTitles`** :

Remplacer :
```tsx
const categoryTitles = {
  development: "Développement",
  design: "Design",
  system: "Administration Système",
};
```
Par :
```tsx
const categoryTitles: Record<"development" | "design" | "academic", string> = {
  development: "Développement",
  design: "Design",
  academic: "Académiques",
};
```

- [ ] **Edit 3 — Retirer l'appel `renderCategoryCarousel("system")`** :

Remplacer :
```tsx
{renderCategoryCarousel("development")}
{renderCategoryCarousel("design")}
{renderCategoryCarousel("system")}
```
Par :
```tsx
{renderCategoryCarousel("development")}
{renderCategoryCarousel("design")}
```

- [ ] **Vérifier TypeScript**

```bash
npx tsc --noEmit
```

---

## Task 13 — Vérification finale

- [ ] **Démarrer le serveur de développement**

```bash
npm run dev
```

Attendre `Ready` sur `http://localhost:3000`.

- [ ] **Vérifier la page d'accueil `http://localhost:3000`**
  - Hero 2 colonnes : photo circulaire visible, badge "Disponible pour opportunités", stats `3+` / `Full cycle` / `Web & Mobile`, bio courte 2 phrases, stack pills
  - About : 3 cartes avec le nouveau contenu (Développement Fullstack / Architecture & DevOps / Design & UX)
  - Skills : 6 onglets cliquables — tester chaque onglet, vérifier les badges
  - Experience : timeline 3 postes (Adven, Pigiste, Digital Studios) + bouton "Voir toutes mes expériences →"
  - Formation : 2 cartes (AEC + Baccalauréat)
  - Carousel Projets : inchangé, catégorie "development" et "design" seulement
  - Contact : inchangé

- [ ] **Vérifier la page `/experience`**
  - 5 postes dans la timeline (Adven · Pigiste · Digital Studios · Agence de Crédit et d'Épargne · SmartDev Community)
  - Chaque poste a : titre, période, localisation + mode, bullet points, badges
  - Section Formation en bas de page

- [ ] **Vérifier la page `/projects`**
  - 4 onglets : Tous / Développement / Académiques / Design
  - Onglet Académiques : affiche les 2 projets avec placeholder "Projet académique"
  - Onglet Design : affiche tous les projets design
  - Onglet Développement : Portfolio, BeAware, Gestion Congés

- [ ] **Vérifier la navbar**
  - Lien "Expériences" présent sur desktop (entre Compétences et Projets)
  - Lien "Expériences" présent dans le menu mobile
  - Navigation vers `/experience` fonctionnelle

- [ ] **Vérification TypeScript finale**

```bash
npx tsc --noEmit
```

Résultat attendu : zéro erreur.
