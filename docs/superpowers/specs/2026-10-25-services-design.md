# Design Spec — Offre « Services » pour PME

**Date :** 2026-10-25
**Statut :** En revue
**Branche :** `feat/services`

## Contexte

Le portfolio vise d'abord les **employeurs** (« Développeur Fullstack à Montréal », bouton « Télécharger CV »). On y ajoute une offre de services pour un second public : les **PME québécoises** (entrepreneurs en rénovation, commerces, cliniques…) qui ont besoin d'un site vitrine, d'une refonte ou d'une landing page.

Les deux publics cohabitent : l'accueil garde son orientation employeurs et présente les services comme une offre parallèle, discrète et sans prix. La page `/services`, qu'on envoie directement aux prospects, est complète et affiche les prix.

L'IA apparaît comme un avantage pour le client (livraison rapide, prix abordable), jamais comme un sujet technique.

Référence de contenu et de ton : la page de soumission https://claude.ai/artifact/6GBoaAJmdJkuf5LXwc41Mf.

## Décisions de design

| Question | Choix retenu |
|---|---|
| Emplacements | Section aperçu sur l'accueil + page dédiée `/services` + lien « Services » dans la Navbar (bureau et mobile) |
| Prix sur l'accueil | Aucun — 4 cartes descriptives |
| Prix sur `/services` | Affichés, « à partir de », taxes en sus |
| Appel à l'action de `/services` | Formulaire de contact existant intégré en bas de `/services` (`#maquette`), sujet prérempli selon le forfait choisi |
| Envoi des messages | Réel, par Resend, côté serveur dans `/api/contact` |
| Source du contenu | Un seul fichier de données partagé : `src/datas/services.ts` |
| Langue | Tout en français |
| Style | Tokens existants (accent violet `--primary` en mode clair, mode sombre inchangé) |

## Problème corrigé au passage

`src/pages/api/contact.ts` valide le message puis fait seulement un `console.log` (`TODO`), tout en renvoyant « Message envoyé avec succès ! ». Aujourd'hui, chaque message est perdu. Comme `/services` dépend de ce formulaire pour convertir, l'envoi réel fait partie de ce chantier.

## 1. Données — `src/datas/services.ts`

Types exportés et contenu, sur le modèle de `src/datas/experiences.ts`.

```ts
export type PlanId = "landing" | "essentiel" | "croissance" | "entretien";

export interface ServicePlan {
  id: PlanId;
  name: string;          // « Landing page », « Essentiel », …
  tagline: string;       // « Pour une campagne ou un service précis. »
  summary: string;       // 1-2 phrases, utilisée sur l'accueil
  price: number;         // en CAD, taxes en sus
  priceSuffix?: string;  // « / mois » pour l'entretien
  features: string[];    // liste détaillée, utilisée sur /services
  delay?: string;        // « Livré en 2 semaines »
  featured?: boolean;    // true pour Essentiel
}

export interface ProcessStep { when: string; title: string; text: string; }
export interface FaqItem { question: string; answer: string; }

export const servicePlans: ServicePlan[];   // ordre : landing, essentiel, croissance, entretien
export const processSteps: ProcessStep[];
export const included: string[];
export const notIncluded: string[];
export const paymentTerms: string;
export const faq: FaqItem[];
```

Le prix est un nombre. C'est l'affichage qui décide de le montrer (formaté en `fr-CA`, ex. « 1 500 $ »).

### Forfaits

| Forfait | Prix | Accroche | Résumé (accueil) | Délai |
|---|---|---|---|---|
| Landing page | 800 $ | Pour une campagne ou un service précis. | Une page pensée pour transformer vos visiteurs en demandes, prête pour vos publicités Facebook ou Google. | Livrée en 5 jours ouvrables |
| **Essentiel** (mis en avant) | 1 500 $ | Pour être trouvé et inspirer confiance. | Un site vitrine de 4 à 5 pages, adapté au cellulaire, avec formulaire de soumission et fiche Google. | Livré en 2 semaines |
| Croissance | 2 500 $ | Pour recevoir plus de demandes par Google. | Tout l'Essentiel, plus une page par service, les avis Google et un site bilingue. | Livré en 3 semaines |
| Entretien | 60 $ / mois | Pour ne plus y penser. | Hébergement, nom de domaine, sauvegardes, mises à jour et petites modifications, sans contrat. | — |

Listes détaillées (`features`) :

- **Landing page :** une page pensée pour transformer les visiteurs en demandes ; texte, photos et appel à l'action ; formulaire relié à votre courriel ; prête pour vos publicités Facebook ou Google ; livrée en 5 jours ouvrables.
- **Essentiel :** site vitrine de 4 à 5 pages (accueil, services, réalisations, à propos, contact) ; galerie de photos de vos réalisations ; formulaire de demande de soumission ; adapté au cellulaire ; fiche Google Business et référencement local de base ; livré en 2 semaines.
- **Croissance :** tout le forfait Essentiel ; une page dédiée par service (référencement local) ; avis clients Google intégrés ; site bilingue ; statistiques de visites et de demandes ; livré en 3 semaines.
- **Entretien :** hébergement ; nom de domaine ; copies de sécurité ; mises à jour ; jusqu'à 30 minutes de modifications par mois ; sans contrat, annulable en tout temps.

### Déroulement

1. **Jour 1 — Appel de 20 minutes.** On valide vos services, vos photos et vos priorités.
2. **Jours 2 à 5 — Maquette.** Vous voyez votre page d'accueil avant que le reste soit construit.
3. **Construction.** Toutes les pages, le formulaire et la version cellulaire.
4. **Lancement.** Mise en ligne, fiche Google et courte formation pour vos mises à jour.

### Inclus / Non inclus

- **Inclus :** 2 rondes de révisions ; rédaction des textes à partir de vos informations ; certificat de sécurité (HTTPS) ; le site vous appartient.
- **Non inclus :** séance photo professionnelle ; boutique en ligne ; gestion de vos publicités ; rédaction d'articles de blogue.

### Modalités

50 % à la signature, 50 % à la mise en ligne. La maquette de votre page d'accueil est gratuite, avant tout engagement. Les taxes (TPS et TVQ) s'ajoutent.

On retire volontairement de la soumission « Virement Interac ou chèque » et « valide 30 jours » : ces détails servent à une soumission personnalisée, pas à une page publique.

### FAQ

1. **Facebook me suffit, pourquoi un site ?** Facebook est utile pour vos clients actuels. Les nouveaux clients, eux, cherchent sur Google et comparent les sites avant d'appeler. Le site et la page Facebook se complètent.
2. **Pourrai-je modifier mon site moi-même ?** Oui. Je vous montre comment changer vos textes et vos photos. Avec l'entretien mensuel, je m'en occupe pour vous.
3. **Comment livrez-vous aussi vite ?** J'utilise des outils d'intelligence artificielle pour accélérer la conception et la rédaction. Chaque page est ensuite revue et ajustée à la main. Vous payez pour le résultat, pas pour des heures.
4. **Et si la maquette ne me plaît pas ?** La maquette sert justement à valider la direction avant de construire. Si elle ne vous plaît pas, on l'ajuste. Si vous décidez de ne pas aller plus loin, vous ne payez rien.

## 2. Composants

### `src/components/services/PlanCard.tsx`

Carte de forfait réutilisable, construite sur `Card` et `Badge` (shadcn).

```ts
interface PlanCardProps {
  plan: ServicePlan;
  variant: "compact" | "full";
  onChoose?: (plan: ServicePlan) => void;
}
```

- **`compact` (accueil) :** nom, accroche, `summary`, délai. Pas de prix, pas de liste, pas de bouton.
- **`full` (`/services`) :** nom, accroche, « à partir de X $ » (avec `priceSuffix`) et « taxes en sus », liste `features` avec des coches, délai, bouton « Choisir ce forfait » qui appelle `onChoose`.
- **`featured` :** bordure `border-primary` (2px) et badge « Le plus populaire ».

### `src/components/home/ServicesPreview.tsx`

Section de l'accueil, `id="services"`, enveloppée dans `SectionAnimation` (même structure que `Skills.tsx`).

- Titre `h2` : « Services pour PME ».
- Intro : « Vous êtes une PME ? En parallèle, j'aide les entreprises d'ici à avoir un site qui fait appeler. »
- Grille des 4 `PlanCard variant="compact"` : 1 colonne sur cellulaire, 2 sur tablette (`sm`), 4 sur grand écran (`lg`).
- Bouton `Button` « Voir les détails » → `/services` (`next/link`).

### Sections de `/services` — `src/components/services/`

| Composant | Contenu |
|---|---|
| `ServicesHero.tsx` | `h1` « Un site web qui fait appeler vos clients » ; sous-titre « Sites vitrines et landing pages pour les PME du Québec, livrés en quelques semaines à prix abordable. » ; bouton principal « Demander ma maquette gratuite » (→ `#maquette`) ; bouton secondaire « Voir les forfaits » (→ `#forfaits`) ; réassurance « Maquette de votre page d'accueil gratuite, sans engagement. » |
| `PlansGrid.tsx` | `id="forfaits"`. Les 3 forfaits ponctuels en `PlanCard variant="full"` (1 colonne sur cellulaire, 3 sur `lg`), puis l'Entretien en bande horizontale (prix mensuel, ce qui est compris, « sans contrat »). Reçoit `onChoose` et le transmet. |
| `ProcessSteps.tsx` | Les 4 étapes numérotées, en 4 colonnes sur `lg` et 1 sur cellulaire. |
| `IncludedList.tsx` | 2 colonnes (Inclus avec l'icône `Check`, Non inclus avec l'icône `X`, de `lucide-react`) et le bloc Modalités en dessous. |
| `ServicesFaq.tsx` | `Accordion` shadcn (`type="single" collapsible`) avec les 4 questions. |
| `QuoteRequest.tsx` | `id="maquette"`. Titre « Demander ma maquette gratuite », texte d'invitation, `ContactForm` existant dans une `Card` et, à côté, les cartes Courriel / Téléphone / Localisation (même disposition que `Contact.tsx`). Reçoit `form`, `isLoading` et `onSubmit`. |

Chaque section utilise `SectionAnimation`, sauf `ServicesHero`, qui s'anime au chargement comme l'en-tête de `experience.tsx`. Un fond `bg-accent/20` alterne une section sur deux, comme pour la section Projets.

### `src/pages/services.tsx`

- `SeoHead` :
  - titre « Création de site web pour PME au Québec | Aurel Noé Kenfack » ;
  - description « Sites vitrines et landing pages pour les PME du Québec : adaptés au cellulaire, optimisés pour Google, livrés en 2 à 3 semaines. Maquette gratuite. » ;
  - `canonical="/services"`.
- JSON-LD `Service` avec `provider` (`Person`, Aurel Noé Kenfack), `areaServed` (Québec) et un `OfferCatalog` de 4 `Offer` (prix, `priceCurrency: "CAD"`), sur le modèle du bloc JSON-LD de `index.tsx`.
- `Layout cvUrl={staticCvUrl}`, comme `experience.tsx`.
- Appelle `useContactForm()` et le transmet à `QuoteRequest`. Le sujet par défaut est « Maquette gratuite ».
- `handleChoose(plan)` : `form.setValue("subject", \`Maquette gratuite — forfait ${plan.name}\`)`, puis défilement doux jusqu'à `#maquette`.

`useContactForm` accepte une option `defaultSubject?: string` qu'il passe aux `defaultValues` de `useForm`. Sans option, le comportement de l'accueil ne change pas.

## 3. Fichiers modifiés

- **`src/pages/index.tsx` :** `<ServicesPreview />` entre `<ProjectsSection mode="carousel" />` et `<Contact />`.
- **`src/components/layout/Navbar.tsx` :** lien « Services » (`/services`) entre « Projets » et « Contact », dans la navigation bureau et dans la navigation mobile (avec `onClick={toggleMenu}`).
- **`public/sitemap.xml` :** entrée `https://noekenfack.vercel.app/services`, `lastmod` 2026-10-25, `changefreq` monthly, `priority` 0.8.
- **`src/hooks/useContactForm.ts` :** option `defaultSubject` (voir plus haut).
- **`src/pages/api/contact.ts` :** envoi par Resend (section 4).
- **`package.json` :** dépendance `resend`.
- **`.env.example` (nouveau) :** documente `RESEND_API_KEY`, `CONTACT_TO_EMAIL` et les variables existantes, sans valeurs.

## 4. Envoi des messages — `/api/contact`

- La validation Zod existante reste en place (400 si les données sont invalides).
- Le serveur lit `process.env.RESEND_API_KEY` et `process.env.CONTACT_TO_EMAIL`.
  - Ces deux variables vont dans `.env.local` (ignoré par git) et dans les variables d'environnement Vercel.
  - **Jamais dans `.env`**, qui est suivi par git.
- Envoi avec `resend.emails.send` :
  - `from: "Portfolio <onboarding@resend.dev>"` (en attendant un domaine vérifié) ;
  - `to: CONTACT_TO_EMAIL` ;
  - `replyTo` : le courriel du visiteur ;
  - `subject: "[Portfolio] " + subject` ;
  - `text` : nom, courriel et message en **texte brut**. Aucun HTML n'est construit à partir de la saisie, ce qui écarte les injections.
- Réponses :
  - succès → 200 « Message envoyé avec succès ! » ;
  - variable d'environnement manquante → erreur journalisée et 500 « Le service d'envoi n'est pas configuré. » ;
  - erreur Resend → erreur journalisée et 500 « L'envoi a échoué. Écrivez-moi directement à kenfackaurel1@gmail.com. »
  - On ne renvoie plus jamais de faux succès.
- Côté client, `useContactForm` affiche déjà `errorData.message` dans un toast d'erreur. Rien à changer.
- Limite de Resend sans domaine vérifié : il n'envoie qu'à l'adresse du compte Resend. `CONTACT_TO_EMAIL` doit donc être cette adresse.

## 5. Vérification

Le projet n'a pas de suite de tests, et on n'en ajoute pas pour ce contenu statique.

- `npm run lint` et `npm run build` passent.
- Dans le navigateur, sur `/` et `/services`, en mode clair et en mode sombre, en largeur bureau et en largeur cellulaire (375 px) :
  - aucun défilement horizontal ;
  - l'accueil n'affiche aucun prix, et les 4 cartes sont présentes entre Projets et Contact ;
  - « Voir les détails » mène à `/services` ;
  - le lien « Services » de la Navbar fonctionne sur bureau et sur mobile (et le menu mobile se ferme) ;
  - « Choisir ce forfait » descend jusqu'à `#maquette` avec le sujet « Maquette gratuite — forfait X » ;
  - les 4 questions de la FAQ s'ouvrent et se ferment.
- Un envoi réel avec une clé Resend dans `.env.local` arrive dans la boîte de `CONTACT_TO_EMAIL`, et « Répondre » répond au visiteur. C'est le propriétaire qui crée le compte et la clé Resend.
- Si `RESEND_API_KEY` est retirée, le formulaire affiche le toast d'erreur au lieu d'un succès.
- `/services` a le bon `<title>`, la bonne balise canonical et le JSON-LD `Service`, et figure dans `sitemap.xml`.

## Hors périmètre

- Domaine d'envoi vérifié pour Resend.
- Changements au Hero, au bouton CV ou aux autres sections de l'accueil.
- Pages de réalisations propres aux PME.

## Prochains chantiers (après celui-ci)

1. **Anti-spam du formulaire :** captcha ou limite de débit sur `/api/contact`.
2. **Version anglaise** de `/services` (et éventuellement du portfolio).
3. **Page de soumission personnalisée**, sur le modèle de la soumission de référence.
