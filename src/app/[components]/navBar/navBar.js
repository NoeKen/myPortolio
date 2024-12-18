"use client";
import theme from "@/app/[constants]/theme";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa"; // Icônes
import { usePathname } from "next/navigation"; // Importer usePathname
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtenir la route actuelle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isCurrentPage = (path) => pathname === path; // Vérifie si la route correspond à la page actuelle

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link href="/">
          <img src="/assets/NKLogo_L.png" alt="logo" width={150}/>
          {/* <div>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: theme?.fontSize?.title
              }}
            >
              NK
            </Typography>
          </div> */}
        </Link>
      </div>

      {/* Bouton pour ouvrir/fermer le menu sur les petits écrans */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
      </button>

      {/* Menu de navigation */}
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          {/* <Link href="/"> */}
          <Link href="#info">
            <Typography
              className="nav-link"
              // sx={{ color: pathname === "/" ? "green" : "white" }} // Mettre en vert si c'est la page active
            >
              <span>Accueil</span>
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#skills">
            <Typography
              className="nav-link"
              sx={{ color: isCurrentPage("/about") ? "green" : "white" }} // Couleur verte pour la page active
            >
              <span>Compétences</span>
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          {/* <Link href="/projects"> */}
          <Link href="#projects">
            <Typography
              className="nav-link"
              sx={{ color: isCurrentPage("/projects") ? "green" : "white" }} // Couleur verte pour la page active
            >
              <span>Projets</span>
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          {/* <Link href="/contact"> */}
          <Link href="#contact">
            <Typography
              className="nav-link"
              // sx={{ color: isCurrentPage("/contact") ? "green" : "white" }} // Couleur verte pour la page active
            >
              <span>Contact</span>
            </Typography>
          </Link>
        </li>
      </ul>

      {/* Icônes des réseaux sociaux */}
      <div className="navbar-socials">
        <a
          href="https://github.com/NoeKen"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="www.linkedin.com/in/aurel-noe-kenfack-b137b01a2"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
