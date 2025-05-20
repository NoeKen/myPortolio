
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/logo-t.png" width={80} height={70} alt="Logo KLAN"></Image>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/NoeKen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aurel-noe-kenfack-b137b01a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:kenfackaurel1@gmail.com"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
