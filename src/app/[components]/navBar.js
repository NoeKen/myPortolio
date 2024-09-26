// app/components/Navbar.js
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa'; // Icônes

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <p className="nav-link"><FaHome /> Accueil</p>
      </Link>
      <Link href="/about">
        <p className="nav-link"><FaUser /> À propos</p>
      </Link>
      <Link href="/projects">
        <p className="nav-link"><FaProjectDiagram /> Projets</p>
      </Link>
    </nav>
  );
}
