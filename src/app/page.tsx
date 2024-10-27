import Formation from "./[components]/formation/formation";
import Header from "./[components]/header/Header";
import Skills from "./skills/page";
import Projects from "./projects/page"
import Contact from "./contact/page"

// app/page.js
export default function Home() {
  return (
    <>
      <Header />
      <Formation/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <Box component="section" sx={{ p: 2 }}>
        <section style={{ padding: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Aurel Noe Kenfack
          </h1>
          <p style={{ fontSize: "1.5rem", color: "#555" }}>
            Développeur Power Apps Junior basé à Montréal, Canada. Spécialiste
            en développement web et mobile, avec une expertise dans les
            solutions Microsoft Power Platform.
          </p>
          <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
            <a
              href="/about"
              style={{ color: "#0070f3", textDecoration: "none" }}
            >
              En savoir plus
            </a>
          </p>
        </section>
      </Box> */}
    </>
  );
}
