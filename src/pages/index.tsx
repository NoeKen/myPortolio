
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Projects } from "@/components/home/Projects";
import { Contact } from "@/components/home/Contact";
import { profileService, ProfileData } from "@/services/profileService";
import { GetServerSideProps } from "next";

interface HomePageProps {
  profile: ProfileData | null;
}

export default function Home({ profile }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Portfolio | Développeur Analyste & Designer UI/UX</title>
        <meta name="description" content="Portfolio professionnel d'un développeur analyste avec 3 ans d'expérience, compétences en design UI/UX et administration système." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout cvUrl={profile?.cv_url || undefined}>
        <Hero cvUrl={profile?.cv_url || undefined} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const profile = await profileService.getProfile();
  return {
    props: {
      profile,
    },
  };
};
