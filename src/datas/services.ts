export type PlanId = "landing" | "essentiel" | "croissance" | "entretien";

export interface ServicePlan {
  id: PlanId;
  name: string;
  tagline: string;
  summary: string;
  price: number;
  priceSuffix?: string;
  features: string[];
  delay?: string;
  featured?: boolean;
}

export interface ProcessStep {
  when: string;
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const servicePlans: ServicePlan[] = [
  {
    id: "landing",
    name: "Landing page",
    tagline: "Pour une campagne ou un service précis.",
    summary:
      "Une page pensée pour transformer vos visiteurs en demandes, prête pour vos publicités Facebook ou Google.",
    price: 800,
    features: [
      "une page pensée pour transformer les visiteurs en demandes",
      "texte, photos et appel à l'action",
      "formulaire relié à votre courriel",
      "prête pour vos publicités Facebook ou Google",
      "livrée en 5 jours ouvrables",
    ],
    delay: "Livrée en 5 jours ouvrables",
  },
  {
    id: "essentiel",
    name: "Essentiel",
    tagline: "Pour être trouvé et inspirer confiance.",
    summary:
      "Un site vitrine de 4 à 5 pages, adapté au cellulaire, avec formulaire de soumission et fiche Google.",
    price: 1500,
    features: [
      "site vitrine de 4 à 5 pages (accueil, services, réalisations, à propos, contact)",
      "galerie de photos de vos réalisations",
      "formulaire de demande de soumission",
      "adapté au cellulaire",
      "fiche Google Business et référencement local de base",
      "livré en 2 semaines",
    ],
    delay: "Livré en 2 semaines",
    featured: true,
  },
  {
    id: "croissance",
    name: "Croissance",
    tagline: "Pour recevoir plus de demandes par Google.",
    summary:
      "Tout l'Essentiel, plus une page par service, les avis Google et un site bilingue.",
    price: 2500,
    features: [
      "tout le forfait Essentiel",
      "une page dédiée par service (référencement local)",
      "avis clients Google intégrés",
      "site bilingue",
      "statistiques de visites et de demandes",
      "livré en 3 semaines",
    ],
    delay: "Livré en 3 semaines",
  },
  {
    id: "entretien",
    name: "Entretien",
    tagline: "Pour ne plus y penser.",
    summary:
      "Hébergement, nom de domaine, sauvegardes, mises à jour et petites modifications, sans contrat.",
    price: 60,
    priceSuffix: "/ mois",
    features: [
      "hébergement",
      "nom de domaine",
      "copies de sécurité",
      "mises à jour",
      "jusqu'à 30 minutes de modifications par mois",
      "sans contrat, annulable en tout temps",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    when: "Jour 1",
    title: "Appel de 20 minutes",
    text: "On valide vos services, vos photos et vos priorités.",
  },
  {
    when: "Jours 2 à 5",
    title: "Maquette",
    text: "Vous voyez votre page d'accueil avant que le reste soit construit.",
  },
  {
    when: "Semaine 2",
    title: "Construction",
    text: "Toutes les pages, le formulaire et la version cellulaire.",
  },
  {
    when: "Mise en ligne",
    title: "Lancement",
    text: "Mise en ligne, fiche Google et courte formation pour vos mises à jour.",
  },
];

export const included: string[] = [
  "2 rondes de révisions",
  "rédaction des textes à partir de vos informations",
  "certificat de sécurité (HTTPS)",
  "le site vous appartient",
];

export const notIncluded: string[] = [
  "séance photo professionnelle",
  "boutique en ligne",
  "gestion de vos publicités",
  "rédaction d'articles de blogue",
];

export const paymentTerms: string =
  "50 % à la signature, 50 % à la mise en ligne. La maquette de votre page d'accueil est gratuite, avant tout engagement. Les taxes (TPS et TVQ) s'ajoutent.";

export const faq: FaqItem[] = [
  {
    question: "Facebook me suffit, pourquoi un site ?",
    answer:
      "Facebook est utile pour vos clients actuels. Les nouveaux clients, eux, cherchent sur Google et comparent les sites avant d'appeler. Le site et la page Facebook se complètent.",
  },
  {
    question: "Pourrai-je modifier mon site moi-même ?",
    answer:
      "Oui. Je vous montre comment changer vos textes et vos photos. Avec l'entretien mensuel, je m'en occupe pour vous.",
  },
  {
    question: "Comment livrez-vous aussi vite ?",
    answer:
      "J'utilise des outils d'intelligence artificielle pour accélérer la conception et la rédaction. Chaque page est ensuite revue et ajustée à la main. Vous payez pour le résultat, pas pour des heures.",
  },
  {
    question: "Et si la maquette ne me plaît pas ?",
    answer:
      "La maquette sert justement à valider la direction avant de construire. Si elle ne vous plaît pas, on l'ajuste. Si vous décidez de ne pas aller plus loin, vous ne payez rien.",
  },
];

export function formatPrice(price: number): string {
  return price.toLocaleString("fr-CA") + " $";
}
