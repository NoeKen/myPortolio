export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  mode?: string;
  description?: string;
  bullets?: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    title: "Développeur Web Full-Stack - Stagiaire",
    company: "Adven Conseil",
    period: "Févr. 2026 – Mars 2026",
    location: "Montréal, QC",
    mode: "À distance",
    description:
      "Développement de composants React fonctionnels et API REST sécurisées avec JWT, dans un contexte Agile/Scrum.",
    bullets: [
      "Développé des composants React fonctionnels (hooks, TypeScript strict) et géré l'état applicatif avec Redux pour des flux de données complexes.",
      "Conçu des API REST sécurisées avec JWT, validation serveur et authentification via Supabase (base de données, stockage).",
      "Participé aux revues de code et aux cérémonies Agile/Scrum, respect des conventions ESLint et des échéances de sprint.",
    ],
    tags: ["React", "TypeScript", "Redux", "Supabase", "JWT", "ESLint", "GitHub Actions"],
  },
  {
    title: "Développeur Full-Stack - Projets personnels",
    company: "",
    period: "Nov. 2024 – Janv. 2026",
    location: "Canada",
    mode: "Hybride",
    description:
      "Applications Web complètes (React, Next.js, Node.js), gestion autonome du cycle de l'analyse à la mise en production.",
    bullets: [
      "Conception et développement d'applications web complètes avec React, Next.js et Node.js.",
      "Modélisation de bases de données relationnelles (PostgreSQL) et implémentation d'API REST sécurisées (JWT).",
      "Mise en place d'architectures modulaires inspirées des microservices et séparation des responsabilités (BFF, services, repositories).",
      "Déploiement d'applications (Vercel, Firebase) et mise en place de pipelines CI/CD (GitHub Actions).",
      "Utilisation de Docker pour la conteneurisation et standardisation des environnements de développement.",
      "Amélioration continue du code (ESLint, refactoring, bonnes pratiques clean code).",
    ],
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Firebase", "JWT", "Docker", "CI/CD", "Vercel"],
  },
  {
    title: "Développeur mobile React Native",
    company: "Digital Studios",
    period: "Mars 2021 - Janv. 2024",
    location: "Yaoundé, Cameroun",
    mode: "Hybride",
    description:
      "Applications multiplateformes de la maquette Figma à la publication sur Google Play et l'App Store.",
    bullets: [
      "Développé des applications multiplateformes (React Native + TypeScript), de la maquette Figma à la publication sur Google Play et l'App Store.",
      "Consommé des API RESTful et GraphQL (Node.js, Django), intégration, gestion des erreurs réseau et optimisation des requêtes.",
      "Mis en place des pipelines CI/CD avec GitHub Actions et appliqué ESLint pour garantir la maintenabilité du code en équipe.",
      "Débogage, profilage et optimisation des performances (React Native Debugger, Flipper), revues de code et livraisons Agile régulières.",
    ],
    tags: ["React Native", "TypeScript", "Redux", "GraphQL", "Node.js", "Django", "ESLint", "GitHub Actions"],
  },
  {
    title: "Développeur systèmes & applications",
    company: "Agence de Crédit et d'Épargne",
    period: "Avr. 2023 – Janv. 2024",
    location: "Yaoundé, Cameroun",
    mode: "",
    description:
      "Solutions Web internes sécurisées pour un contexte financier, avec API REST, conteneurs Docker et pipelines CI/CD.",
    bullets: [
      "Développé et déployé des solutions Web internes sécurisées (React, Node.js, PostgreSQL) dans un contexte financier réglementé.",
      "Conçu des API REST avec JWT, gestion des journaux d'audit et contrôle granulaire des accès, conforme aux exigences de sécurité bancaire.",
      "Conteneurisé les applications avec Docker et mis en place un pipeline CI/CD (Jenkins, GitHub), réduction des risques de régression en production.",
      "Optimisé les performances applicatives et modélisé des bases de données relationnelles (PostgreSQL).",
      "Supervisé et formé des stagiaires en développement et en administration de systèmes.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "JWT", "GitHub", "Jenkins"],
  },
  {
    title: "Développeur Android",
    company: "SmartDev Community",
    period: "Janv. 2021 – Mai 2021",
    location: "Yaoundé, Cameroun",
    mode: "Hybride",
    description:
      "Applications Android natives intégrant Firebase pour les données en temps réel et l’authentification.",
    bullets: [
      "Développé des interfaces Android (Kotlin), intégré Firebase pour les données en temps réel et l'authentification.",
      "Géré le versionnage du code avec GitHub dans un cadre collaboratif.",
    ],
    tags: ["Kotlin", "Android Studio", "Firebase", "GitHub", "Material Design"],
  },
];
