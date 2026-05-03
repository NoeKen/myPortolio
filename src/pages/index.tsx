
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Contact } from "@/components/home/Contact";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";
import { Experience } from "@/components/home/Experience";
import { Formation } from "@/components/home/Formation";

// CV URL can be hardcoded here if needed, e.g.
// const staticCvUrl = "/path/to/your/cv.pdf"; 
// or leave it undefined if you don't want the download button for now.
const staticCvUrl = "/docs/CV_Noe-Kenfack.pdf"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Noé Kenfack — Développeur Fullstack</title>
        <meta
          name="description"
          content="Portfolio de Noé Kenfack — Développeur Fullstack Web & Mobile basé à Montréal. Node.js, TypeScript, React, Next.js, PostgreSQL."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout cvUrl={staticCvUrl}>
        <Hero />
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
