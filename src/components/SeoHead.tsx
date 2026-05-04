import Head from "next/head";

const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://noekenfack.vercel.app"
).replace(/\/$/, "");

const DEFAULT_OG_IMAGE = `${BASE_URL}/images/profileNK.png`;

interface SeoHeadProps {
  title: string;
  description: string;
  /** Route path — e.g. "/" or "/experience" */
  canonical: string;
  ogImage?: string;
}

export function SeoHead({ title, description, canonical, ogImage }: SeoHeadProps) {
  const url = `${BASE_URL}${canonical}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="robots" content="index, follow" key="robots" />
      <link rel="canonical" href={url} key="canonical" />

      {/* Open Graph */}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:locale" content="fr_CA" key="og:locale" />
      <meta property="og:site_name" content="Aurel Noé Kenfack" key="og:site_name" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:image" content={image} key="twitter:image" />
    </Head>
  );
}
