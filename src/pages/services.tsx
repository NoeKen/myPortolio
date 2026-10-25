import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { SeoHead } from "@/components/SeoHead";
import { ServicesHero } from "@/components/services/ServicesHero";
import { PlansGrid } from "@/components/services/PlansGrid";
import { ShowcaseSection } from "@/components/services/ShowcaseSection";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { IncludedList } from "@/components/services/IncludedList";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { QuoteRequest } from "@/components/services/QuoteRequest";
import { useContactForm } from "@/hooks/useContactForm";
import { servicePlans, type ServicePlan } from "@/datas/services";

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://noekenfack.vercel.app"
).replace(/\/$/, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de site web pour PME",
  provider: {
    "@type": "Person",
    name: "Aurel Noé Kenfack",
    url: `${BASE_URL}/`,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Québec" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Forfaits",
    itemListElement: servicePlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: String(plan.price),
      priceCurrency: "CAD",
      ...(plan.priceSuffix && {
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: String(plan.price),
          priceCurrency: "CAD",
          unitCode: "MON",
        },
      }),
    })),
  },
};

export default function ServicesPage() {
  const contact = useContactForm({ defaultSubject: "Maquette gratuite" });

  const handleChoose = (plan: ServicePlan) =>
    requestWithSubject(`Maquette gratuite — forfait ${plan.name}`);

  const requestWithSubject = (subject: string) => {
    contact.form.setValue("subject", subject, { shouldValidate: true });
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    document
      .getElementById("maquette")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    contact.form.setFocus("name", { shouldSelect: false });
  };

  return (
    <>
      <SeoHead
        title="Création de site web pour PME au Québec | Aurel Noé Kenfack"
        description="Sites vitrines et landing pages pour les PME du Québec : adaptés au cellulaire, optimisés pour Google, livrés en 2 à 3 semaines. Maquette gratuite."
        canonical="/services"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Layout cvUrl={staticCvUrl}>
        <ServicesHero />
        <PlansGrid onChoose={handleChoose} onRequest={requestWithSubject} />
        <ShowcaseSection />
        <ProcessSteps />
        <IncludedList />
        <ServicesFaq />
        <QuoteRequest {...contact} />
      </Layout>
    </>
  );
}
