import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Contact } from "@/components/home/Contact";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";
import { Experience } from "@/components/home/Experience";
import { Formation } from "@/components/home/Formation";
import { SeoHead } from "@/components/SeoHead";

const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://noekenfack.vercel.app"
).replace(/\/$/, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aurel Noé Kenfack",
  jobTitle: "Développeur Fullstack",
  url: `${BASE_URL}/`,
  image: `${BASE_URL}/images/profileNK.png`,
  email: "kenfackaurel1@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montréal",
    addressRegion: "QC",
    addressCountry: "Canada",
  },
  sameAs: [
    "https://www.linkedin.com/in/aurel-noe-kenfack-b137b01a2/",
    "https://github.com/NoeKen",
  ],
};

export default function Home() {
  return (
    <>
      <SeoHead
        title="Développeur Fullstack à Montréal | React, Node.js, TypeScript"
        description="Portfolio de Aurel Noé Kenfack, développeur fullstack à Montréal. Applications web et mobile, architecture backend, API REST et expérience utilisateur."
        canonical="/"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Layout cvUrl={staticCvUrl}>
        <Hero />
        <section className="pb-6">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-sm md:text-base font-medium text-muted-foreground">
              Développeur Fullstack à Montréal spécialisé en React, Node.js et TypeScript
            </h2>
          </div>
        </section>
        <About />
        <Skills />
        <Experience />
        <Formation />
        <ProjectsCarousel />
        {/* <Projects /> */}
        <Contact />
      </Layout>
    </>
  );
}
