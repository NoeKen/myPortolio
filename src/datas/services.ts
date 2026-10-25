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

export interface ServiceOption {
  id: "logo" | "application";
  name: string;
  price: number;
  onQuote?: boolean;
  description: string;
  note?: string;
  cta?: { label: string; subject: string };
}

export interface ShowcaseItem {
  projectId: number;
  description: string;
  liveUrl?: string;
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

export const taxNote = "taxes en sus, si applicables";

export const servicePlans: ServicePlan[] = [
  {
    id: "landing",
    name: "Landing page",
    tagline: "Pour une campagne ou un service précis.",
    summary:
      "Une page pensée pour transformer vos visiteurs en demandes, prête pour vos publicités Facebook ou Google.",
    price: 800,
    features: [
      "Une page pensée pour transformer les visiteurs en demandes",
      "Texte, photos et appel à l'action",
      "Formulaire relié à votre courriel",
      "Prête pour vos publicités Facebook ou Google",
    ],
    delay: "Livrée en 5 jours ouvrables",
  },
  {
    id: "essentiel",
    name: "Essentiel",
    tagline: "Pour être trouvé et inspirer confiance.",
    summary:
      "Un site vitrine de 4 à 5 pages, adapté au cellulaire, avec formulaire de soumission et fiche Google.",
    price: 1300,
    features: [
      "Site vitrine de 4 à 5 pages (accueil, services, réalisations, à propos, contact)",
      "Galerie de photos de vos réalisations",
      "Formulaire de demande de soumission",
      "Adapté au cellulaire",
      "En français (anglais en option)",
      "Fiche Google Business et référencement local de base",
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
      "Tout le forfait Essentiel",
      "Une page dédiée par service (référencement local)",
      "Avis clients Google intégrés",
      "Site bilingue",
      "Statistiques de visites et de demandes",
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
      "Hébergement",
      "Nom de domaine",
      "Copies de sécurité",
      "Mises à jour",
      "Jusqu'à 30 minutes de modifications par mois",
      "Sans contrat, annulable en tout temps",
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
  "Rédaction des textes à partir de vos informations",
  "Optimisation des photos fournies",
  "Certificat de sécurité (HTTPS)",
  "Le site vous appartient",
];

export const notIncluded: string[] = [
  "Séance photo professionnelle",
  "Boutique en ligne",
  "Gestion de vos publicités",
  "Rédaction d'articles de blogue",
];

export const paymentTerms: string =
  "50 % à la signature, 50 % à la mise en ligne. La maquette de votre page d'accueil est gratuite, avant tout engagement. Les taxes (TPS et TVQ) s'ajoutent, si applicables.";

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
  {
    question: "Ai-je besoin d'une application ou d'un site ?",
    answer:
      "Pour être trouvé et recevoir des demandes, un site suffit. Une application devient utile quand vos clients reviennent souvent (réservations, fidélité, suivi) ou pour un outil interne. On en parle et je vous conseille honnêtement.",
  },
];

export const serviceOptions: ServiceOption[] = [
  {
    id: "logo",
    name: "Logo et identité visuelle",
    price: 400,
    description:
      "Logo, couleurs et déclinaisons pour votre site, vos cartes et votre camion.",
  },
  {
    id: "application",
    name: "Application mobile iOS et Android",
    price: 5000,
    onQuote: true,
    description:
      "Réservation, prise de rendez-vous, fidélité, suivi de chantier ou outil interne pour vos employés. Une seule application pour iPhone et Android, publiée sur l'App Store et Google Play.",
    note: "Frais des magasins d'applications en sus (Apple : 99 $ US par an; Google : 25 $ US une fois).",
    cta: {
      label: "Discuter de mon application",
      subject: "Projet d'application mobile",
    },
  },
];

export const showcase: ShowcaseItem[] = [
  {
    projectId: 8,
    description: "Identité visuelle pour une entreprise de construction.",
  },
  {
    projectId: 3,
    description: "Ce site : rapide, adapté au cellulaire et bien référencé.",
    liveUrl: "/",
  },
  {
    projectId: 6,
    description:
      "Plateforme web complète : inscription, planification, communication.",
  },
  {
    projectId: 2,
    description:
      "Application mobile React Native publiée sur Google Play pour suivre ses dépenses.",
  },
];

// Affiché au-dessus des réalisations dès qu'un premier client est livré.
export const testimonial: Testimonial | null = null;

export function formatPrice(price: number): string {
  return price.toLocaleString("fr-CA") + "\u00a0$";
}
