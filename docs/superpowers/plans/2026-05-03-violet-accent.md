# Violet Accent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter une nuance de violet douce au mode clair du portfolio en modifiant uniquement les variables CSS dans `globals.css`.

**Architecture:** Changement de 3 variables CSS dans le bloc `:root` de `src/styles/globals.css`. shadcn/ui étant entièrement piloté par CSS variables, tous les composants concernés (boutons, badges, anneaux, onglets) se mettent à jour automatiquement sans toucher au moindre fichier `.tsx`. Le bloc `.dark` reste intact.

**Tech Stack:** Next.js 14, Tailwind CSS, shadcn/ui, CSS custom properties (HSL)

---

## Fichiers modifiés

| Fichier | Action | Lignes concernées |
|---|---|---|
| `src/styles/globals.css` | Modifier | lignes 32, 38, 44 (`:root` light mode uniquement) |

---

### Task 1 : Appliquer les variables violet au mode clair

**Files:**
- Modify: `src/styles/globals.css:32-44`

- [ ] **Étape 1 : Vérifier l'état actuel des variables**

  Ouvrir [src/styles/globals.css](src/styles/globals.css) et confirmer les valeurs existantes dans le bloc `:root` :

  ```css
  --primary: 240 5.9% 10%;       /* quasi-noir */
  --accent: 240 4.8% 95.9%;      /* gris clair */
  --ring: 240 10% 3.9%;          /* quasi-noir */
  ```

- [ ] **Étape 2 : Remplacer les 3 variables dans le bloc `:root`**

  Dans `src/styles/globals.css`, remplacer ces 3 lignes dans le bloc `@layer base { :root { ... } }` (lignes 32, 38, 44) :

  ```css
  /* AVANT */
  --primary: 240 5.9% 10%;
  /* ... */
  --accent: 240 4.8% 95.9%;
  /* ... */
  --ring: 240 10% 3.9%;
  ```

  ```css
  /* APRÈS */
  --primary: 262 83% 58%;
  /* ... */
  --accent: 262 30% 97%;
  /* ... */
  --ring: 262 83% 58%;
  ```

  Le bloc `:root` complet résultant (lignes 25–59) doit être :

  ```css
  @layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 240 10% 3.9%;
      --card: 0 0% 100%;
      --card-foreground: 240 10% 3.9%;
      --popover: 0 0% 100%;
      --popover-foreground: 240 10% 3.9%;
      --primary: 262 83% 58%;
      --primary-foreground: 0 0% 98%;
      --secondary: 240 4.8% 95.9%;
      --secondary-foreground: 240 5.9% 10%;
      --muted: 240 4.8% 95.9%;
      --muted-foreground: 240 3.8% 46.1%;
      --accent: 262 30% 97%;
      --accent-foreground: 240 5.9% 10%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 0 0% 98%;
      --border: 240 5.9% 90%;
      --input: 240 5.9% 90%;
      --ring: 262 83% 58%;
      --chart-1: 12 76% 61%;
      --chart-2: 173 58% 39%;
      --chart-3: 197 37% 24%;
      --chart-4: 43 74% 66%;
      --chart-5: 27 87% 67%;
      --radius: 0.5rem;
      --sidebar-background: 0 0% 98%;
      --sidebar-foreground: 240 5.3% 26.1%;
      --sidebar-primary: 262 83% 58%;
      --sidebar-primary-foreground: 0 0% 98%;
      --sidebar-accent: 262 30% 97%;
      --sidebar-accent-foreground: 240 5.9% 10%;
      --sidebar-border: 220 13% 91%;
      --sidebar-ring: 262 83% 58%;
    }
  ```

  > Note : `--sidebar-primary`, `--sidebar-accent` et `--sidebar-ring` sont également mis à jour pour cohérence, bien qu'aucune sidebar ne soit visible sur le portfolio actuel.

- [ ] **Étape 3 : Confirmer que le bloc `.dark` est inchangé**

  Vérifier visuellement que les lignes 60–93 (`.dark { ... }`) n'ont pas été modifiées. Les valeurs `--primary: 0 0% 98%` et `--ring: 240 4.9% 83.9%` doivent être intactes.

- [ ] **Étape 4 : Lancer le serveur de développement**

  ```bash
  npm run dev
  ```

  Ouvrir [http://localhost:3000](http://localhost:3000) dans un navigateur en mode clair (light mode système).

- [ ] **Étape 5 : Vérification visuelle — mode clair**

  Contrôler point par point que le violet apparaît bien sur :

  | Élément | Localisation | Attendu |
  |---|---|---|
  | Badge "Disponible" | Hero | Fond violet pâle, texte violet |
  | Bouton "Voir mes projets" | Hero | Fond violet `#7c3aed`, texte blanc |
  | Bouton "Me contacter" | Hero | Bordure et texte violet |
  | Badges stack (Node.js, etc.) | Hero | Fond violet pâle, texte violet |
  | Anneau photo | Hero | Teinte violette subtile |
  | Valeurs stats (3+, Full, Web) | Hero | Texte violet |
  | Onglet actif | Section Skills | Fond violet, texte blanc |
  | Icônes ronds | Section About | Fond violet pâle |
  | Fond section About | Page entière | Blanc légèrement violacé (très subtil) |

- [ ] **Étape 6 : Vérification visuelle — mode sombre inchangé**

  Passer le navigateur / l'OS en dark mode et vérifier que l'interface reste identique à avant (fond quasi-noir, accents blancs — aucun violet visible).

- [ ] **Étape 7 : Commit**

  ```bash
  git add src/styles/globals.css
  git commit -m "feat: add soft violet accent to light mode palette"
  ```

---

## Résumé des changements CSS

```diff
- --primary: 240 5.9% 10%;
+ --primary: 262 83% 58%;

- --accent: 240 4.8% 95.9%;
+ --accent: 262 30% 97%;

- --ring: 240 10% 3.9%;
+ --ring: 262 83% 58%;

- --sidebar-primary: 240 5.9% 10%;
+ --sidebar-primary: 262 83% 58%;

- --sidebar-accent: 240 4.8% 95.9%;
+ --sidebar-accent: 262 30% 97%;

- --sidebar-ring: 217.2 91.2% 59.8%;
+ --sidebar-ring: 262 83% 58%;
```

**Bloc `.dark` : aucune modification.**
