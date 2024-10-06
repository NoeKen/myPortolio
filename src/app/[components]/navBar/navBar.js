"use client";
import theme from "@/app/[constants]/theme";
import "./style.css";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Icônes

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link href="/">
          <div style={{
            // flex:1,
            // backgroundColor: "white",
            // width: 50,
            // height: 50,
            // borderRadius: 50,
            // justifyContent: "cente",
            // alignContent: "center",
          }}>
            <Typography
              sx={{
                color: 'white',
                fontWeight:'bold',
                fontSize:theme.fontSize.title
              }}
            >
              NK
              {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
            </Typography>
          </div>
        </Link>
      </div>

      {/* Bouton pour ouvrir/fermer le menu sur les petits écrans */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes color="white" /> : <FaBars color="white"  />}
      </button>

      {/* Menu de navigation */}
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link href="/">
            <Typography className="nav-link">
              {/* <FaHome className="nav-icon" /> */}
              <span>Accueil</span>
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <Typography className="nav-link">
              {/* <FaUser className="nav-icon" /> */}
              <span>À propos</span>
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            <Typography className="nav-link">
              {/* <FaProjectDiagram className="nav-icon" /> */}
              <span>Projets</span>
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <Typography className="nav-link">
              {/* <FaProjectDiagram className="nav-icon" /> */}
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
        {/* <Typography
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaTwitter className="social-icon" />
        </Typography> */}
      </div>
    </nav>
  );
}
