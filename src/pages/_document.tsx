import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr" suppressHydrationWarning>
      <Head>
        <meta name="author" content="Aurel Noé Kenfack" />
        <meta
          name="keywords"
          content="développeur fullstack Montréal, React, Node.js, TypeScript, développeur web Montréal"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}