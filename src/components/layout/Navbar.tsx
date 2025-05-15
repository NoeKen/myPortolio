
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Compétences
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projets
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button variant="default" size="sm">
            Télécharger CV
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b border-border/40">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Compétences
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Projets
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="default" size="sm" className="w-full">
              Télécharger CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
