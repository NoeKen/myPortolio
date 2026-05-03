# Refonte Portfolio — Design Spec
**Date :** 2026-05-02  
**Branche :** noeDev  
**Stack :** Next.js (Pages Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion

---

## Contexte

Mise à jour et refonte du portfolio [noekenfack.vercel.app](https://noekenfack.vercel.app) pour le synchroniser avec le CV 2026 d'Aurel Noé Kenfack. Objectif : audience mixte (recruteurs fullstack + clients freelance). Approche retenue : **C** — contenu + refonte des sections principales. Le thème existant (dark/light mode, couleurs shadcn/ui) est conservé.

---

## 1. Architecture des pages

### Page d'accueil `/`
Ordre des sections :
1. Hero
2. About
3. Skills
4. Experience (résumé)
5. Formation
6. ProjectsCarousel (existant, inchangé)
7. Contact (existant, inchangé)

### Page `/experience` (nouvelle)
- Timeline complète des 5 postes
- Section Formation en bas

### Page `/projects` (existante, mise à jour)
- Ajout onglets catégorie : Tous · Développement · Scolaires · Design
- Filtrage côté client (état React local)

### Navbar
- Ajout du lien **Expériences** pointant vers `/experience`
- Ordre : Accueil · À propos · Compétences · Expériences · Projets · Contact · [Télécharger CV]

---

## 2. Section Hero

**Layout :** 2 colonnes sur desktop (texte gauche, photo droite) · 1 colonne sur mobile (photo en cercle au-dessus du texte)

**Contenu textuel :**
- Badge : `Disponible pour opportunités`
- Titre H1 : `Aurel Noé Kenfack`
- Sous-titre : `Développeur Fullstack & Product Builder — Web, mobile, architecture et expérience utilisateur`
- Stack pills (badges non-cliquables) : `Node.js` · `TypeScript` · `React` · `Next.js` · `PostgreSQL`
- Bio (texte exact fourni par le client) :

> Développeur fullstack web et mobile basé à Montréal, avec plus de 3 ans d'expérience dans l'écosystème JavaScript (Node.js, TypeScript, React, Next.js). Je conçois et développe des applications complètes, de l'architecture backend (API REST, microservices, BFF) jusqu'aux interfaces utilisateur performantes et soignées.  
> J'ai évolué dans des environnements exigeants intégrant CI/CD, Docker, revues de code et bonnes pratiques de qualité, incluant des projets en contexte financier réglementé. Cette expérience me permet de produire des solutions robustes, maintenables et adaptées à des enjeux réels de production.  
> Au-delà de l'aspect technique, je combine une approche orientée produit avec un sens du design (UX/UI) afin de livrer des solutions utiles, fluides et centrées utilisateur.  
> J'interviens sur l'ensemble du cycle de développement — de l'idée à la mise en production — en travaillant seul ou avec un réseau de partenaires selon les besoins du projet. Mon approche repose sur la clarté, la fiabilité et le respect des délais.

**Photo :** `/images/profileN.png` — affichée en cercle (aspect-ratio 1:1, object-fit cover), vraiment visible (pas opacity 10), taille ~320px desktop.

**Stats animées** (sous la photo) :
- `3+` ans d'expérience
- `5` postes occupés
- `2` plateformes (Web + Mobile)

**CTAs :**
- Bouton primaire : `Voir mes projets` → `#projects`
- Bouton outline : `Me contacter` → `#contact`

**Animations :** conserver les animations framer-motion existantes (fade-in/slide). Le cercle pulsant en fond reste.

---

## 3. Section About

Structure des 3 cartes inchangée. Contenu mis à jour :

| Carte | Titre | Contenu |
|-------|-------|---------|
| 1 | Développement Fullstack | Spécialisé dans la conception d'applications web et mobile complètes — Node.js, TypeScript, React/Next.js — de l'API REST aux microservices, avec une attention particulière à la qualité du code et à la maintenabilité. |
| 2 | Architecture & DevOps | Expérience en containerisation Docker, pipelines CI/CD (GitHub Actions, Jenkins) et déploiement sur Vercel, Firebase et Google Cloud. À l'aise avec les environnements réglementés et le refactoring de code legacy. |
| 3 | Design & Expérience utilisateur | Conception d'interfaces soignées et centrées utilisateur avec Figma et Adobe XD, alliant rigueur technique et sens du design pour livrer des produits fluides et cohérents. |

---

## 4. Section Skills — Onglets filtrables

6 onglets, filtrage instantané côté client.

### Backend
Node.js, Express.js, TypeScript, API REST, JWT, Microservices, Architecture BFF, ASP.NET MVC, C#/.NET Core

### Frontend
React.js, Next.js, TypeScript (ES2015+), Redux Toolkit, Tailwind CSS, MUI, Bootstrap, Angular, Vue.js

### DevOps & CI/CD
Docker, Docker Compose, GitHub Actions, Jenkins, Vercel, Firebase, Google Cloud, AWS (notions)

### Design
Figma, Adobe XD, Photoshop, Illustrator, Canva, UI/UX Design, Branding

### Mobile
React Native (TypeScript + Redux), Android natif (Kotlin), iOS (Swift, notions)

### BDD & Outils
**Bases de données :** PostgreSQL, SQL Server, MySQL, MongoDB, Firebase, SQLite, Sequelize, Entity Framework  
**Outils :** GitHub / GitLab / Bitbucket, Postman, npm, Jira, Confluence, Notion, Trello  
**Méthodologies :** Agile/Scrum, Kanban, SDLC, Revues de code

---

## 5. Section Experience (accueil — résumé)

**Composant :** `src/components/home/Experience.tsx` (nouveau)

Timeline verticale compacte : ligne verticale + points colorés. Affiche les **3 postes les plus récents** :

1. **Développeur Web Full-Stack — Stagiaire** · Adven Conseil · Févr.–Mars 2026 · Montréal (À distance)
2. **Développeur Full-Stack** · Pigiste indépendant · Déc. 2024–Janv. 2026 · Canada (Hybride)
3. **Développeur mobile React Native** · Digital Studios · Mars 2021–Janv. 2024 · Yaoundé, Cameroun

Chaque item : titre · entreprise · période · 1 ligne de description · badges environnement technique.

Lien en bas : `Voir toutes mes expériences →` → `/experience`

---

## 6. Section Formation (accueil)

**Composant :** `src/components/home/Formation.tsx` (nouveau)

2 cartes côte à côte :

| Diplôme | Établissement | Date |
|---------|--------------|------|
| AEC — Analyste-programmeur | Collège Bois-de-Boulogne, Montréal | Mars 2026 |
| Baccalauréat en informatique | Équivalence MIFI, Montréal | 2024 |

---

## 7. Page `/experience`

**Fichier :** `src/pages/experience.tsx` (nouveau)

**Section Expériences — 5 postes** (anti-chronologique) :

| # | Titre | Entreprise | Période | Lieu |
|---|-------|-----------|---------|------|
| 1 | Développeur Web Full-Stack (Stagiaire) | Adven Conseil | Févr.–Mars 2026 | Montréal, À distance |
| 2 | Développeur Full-Stack | Pigiste indépendant | Déc. 2024–Janv. 2026 | Canada, Hybride |
| 3 | Développeur mobile React Native | Digital Studios | Mars 2021–Janv. 2024 | Yaoundé, Cameroun |
| 4 | Développeur systèmes & applications | Agence de Crédit et d'Épargne | Avr. 2023–Janv. 2024 | Yaoundé, Cameroun |
| 5 | Développeur Android | SmartDev Community | Janv.–Mai 2021 | Yaoundé, Cameroun |

Chaque carte affiche : titre · entreprise · lieu · période · environnement technique (badges) · bullet points du CV.

**Section Formation** (bas de page) : mêmes 2 cartes que la section accueil.

---

## 8. Page `/projects` — Onglets catégorie

**Onglets :** Tous · Développement · Scolaires · Design

**Filtrage :** côté client, état React local `useState`.

### Nouveaux projets dans `projects.json`

```json
{
  "id": 6,
  "title": "Architecture microservices — Gestion événementielle",
  "description": "Conception et déploiement de 5 microservices Node.js/Express indépendants (Utilisateur, Billet, Évènement, Notification, BFF) avec exposition Web (Next.js) et mobile (React Native).",
  "images": [],
  "tags": ["Node.js", "Express", "React Native", "Next.js", "Docker", "Docker Compose", "API REST", "GitHub Actions"],
  "category": "scolaire",
  "period": "Oct. 2025 – Jan. 2026",
  "institution": "Collège Bois-de-Boulogne"
}
```

```json
{
  "id": 7,
  "title": "Plateforme e-commerce — Stack Microsoft",
  "description": "Plateforme e-commerce complète (catalogue, panier, commandes, authentification) avec ASP.NET MVC, Entity Framework et SQL Server.",
  "images": [],
  "tags": ["ASP.NET MVC", "C#", "Entity Framework", "SQL Server", "T-SQL"],
  "category": "scolaire",
  "period": "Août – Nov. 2025",
  "institution": "Collège Bois-de-Boulogne"
}
```

Le champ `category` prend les valeurs : `"development"` · `"scolaire"` · `"design"`.

---

## 9. Fichiers à créer / modifier

| Action | Fichier |
|--------|---------|
| Modifier | `src/components/home/Hero.tsx` |
| Modifier | `src/components/home/About.tsx` |
| Modifier | `src/components/home/Skills.tsx` |
| Créer | `src/components/home/Experience.tsx` |
| Créer | `src/components/home/Formation.tsx` |
| Modifier | `src/pages/index.tsx` (ajouter Experience + Formation) |
| Créer | `src/pages/experience.tsx` |
| Modifier | `src/pages/Projects.tsx` (ajouter onglets catégorie) |
| Modifier | `src/components/layout/Navbar.tsx` (ajout lien Expériences) |
| Modifier | `src/datas/projects.json` (2 nouveaux projets) |

---

## 10. Contraintes

- Aucun commit ni push à la fin
- Thème shadcn/ui conservé (dark/light mode)
- Animations framer-motion préservées et étendues aux nouvelles sections
- Pas de nouvelle dépendance npm
- TypeScript strict — pas de `any`
