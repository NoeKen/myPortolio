
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
  cvUrl?: string;
}

export function Layout({ children, cvUrl }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar cvUrl={cvUrl} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
