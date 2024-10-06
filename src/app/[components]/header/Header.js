import { Box, Button, Grid2, Typography } from "@mui/material";
import theme from "../../[constants]/theme";
import "./style.css"
// app/components/Header.js
export default function Header() {
  return (
    <>
      <Box className="header">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 5.5, lg: 5.5 }}>
            <div
              className=""
              style={{
                overflow: "hidden",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: "2%",
              }}
            >
              <img
                src="/assets/profile.jpg"
                alt="Aurel Noe Kenfack"
                style={{ width: "100%", borderRadius: 15 }}
                // className="profile-image"
              />
            </div>
            {/* <h1 className="header-title">Aurel Noe Kenfack</h1>
            <p className="header-subtitle">
              Développeur Web et Power Apps basé à Montréal, Canada.
            </p> */}
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 5.5, lg: 5.5 }} sx={{ ml: 2 }}>
            {/* <Typography sx={{ fontSize: theme.fontSize.headerTitle }}>
              Hey, Salut
            </Typography> */}
            <section style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: theme.fontSize.headerTitle,
                  marginBottom: "0.5rem",
                }}
              >
                Aurel Noe Kenfack
              </h1>
              <Typography
                style={{
                  fontSize: "1rem",
                  color: theme.colors.primary,
                  marginBottom: "2rem",
                }}
              >
                Développeur Power Apps Junior || Développeur Mobile React Native
              </Typography>
              {/* <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
                <a
                  href="/about"
                  style={{ color: "#0070f3", textDecoration: "none" }}
                >
                  En savoir plus
                </a>
              </p> */}
            </section>
            <section style={{ textAlign: "center" }}>
              <Typography>
                Développeur Power Apps junior avec plus de 3 ans d'expérience
                dans le développement d’applications web et mobiles, et
                spécialisé dans les solutions Microsoft Power Platform. Solides
                compétences dans la création d’interfaces utilisateur
                intuitives, l’automatisation de processus métier avec Power
                Automate, et la gestion de données via SharePoint et Dataverse.
                Forte capacité à résoudre des problèmes complexes et à
                collaborer efficacement en équipe pour répondre aux besoins des
                utilisateurs.
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ mx: 2, my: 2, borderRadius: 50, width: "80%" }}
              >
                Mon CV
              </Button>
            </section>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
