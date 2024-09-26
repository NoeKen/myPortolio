import "./footer.css";
export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        {/* <div class="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:tonemail@example.com">kenfackaurel1@gmail.com</a>
          </p>
          <p>Téléphone: +1 263 880 7882</p>
          <p>Localisation: Montréal, Canada</p>
        </div>
        <ul class="quick-links">
          <li>
            <a href="#about">À Propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li><a href="#skills">Compétences</a></li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}
        <div class="social-media">
          <a href="https://linkedin.com" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank">
            Twitter
          </a>
        </div>
      </div>
      <p class="copyright">© 2024 Aurel Noe Kenfack. Tous droits réservés.</p>
    </footer>
  );
}
