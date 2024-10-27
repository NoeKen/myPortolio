import "./footer.css";
 const AppFooter =()=> {
  return (
    <footer className="footer">
      {/* <div class="footer-container"> */}
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
        <div className="social-media">
          <a href="https://linkedin.com/in/aurel-noe-kenfack-b137b01a2" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/NoeKen" target="_blank">
            GitHub
          </a>
          {/* <a href="https://twitter.com" target="_blank">
            Twitter
          </a> */}
        {/* </div> */}
      </div>
      <p class="copyright">©2024 par Aurel Noe Kenfack. Tous droits réservés.</p>
    </footer>
  );
}

export default AppFooter;