import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";
import { FloatingElements } from "@/components/animations/FloatingElements";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence mode="sync">
        <Component {...pageProps} />
        <Analytics />
      </AnimatePresence>
      <FloatingElements />
      <Toaster />
    </>
  );
}
