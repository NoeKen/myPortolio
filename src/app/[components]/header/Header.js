import { Box, Button, Grid2, Typography } from "@mui/material";
import theme from "../../[constants]/theme";
import "./style.css";
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
            <Box style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: theme.fontSize.headerTitle,
                  marginBottom: "0.5rem",
                  marginTop: -2,
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
            </Box>
            <Box style={{ textAlign: "justify" }}>
              <Typography sx={{ fontSize: theme.fontSize.content }}>
                {/* Développeur Power Apps junior avec plus de 3 ans d&apos;expérience
                dans le développement d’applications web et mobiles, et
                spécialisé dans les solutions Microsoft Power Platform. Solides
                compétences dans la création d’interfaces utilisateur
                intuitives, l’automatisation de processus métier avec Power
                Automate, et la gestion de données via SharePoint et Dataverse.
                Forte capacité à résoudre des problèmes complexes et à
                collaborer efficacement en équipe pour répondre aux besoins des
                utilisateurs. */}
                Enthousiaste du développement depuis mon enfance, je suis
                fasciné par la création d&apos;applications qui transforment des
                idées en solutions concrètes. Mon parcours a commencé avec le
                développement d&apos;applications de livraison en utilisant Kotlin,
                mais c&apos;est grâce à React Native et à l&apos;écosystème Microsoft
                Power Platform que j&apos;ai vraiment trouvé ma passion pour la
                création d&apos;applications innovantes.
                <br /> <br /> En tant que développeur mobile et web, je tire parti de
                la puissance de React Native pour créer des applications
                performantes et réactives, tout en utilisant Power Apps pour
                concevoir des interfaces utilisateur intuitives. Grâce à
                l&apos;automatisation des processus métiers avec Power Automate,
                j&apos;optimise l&apos;efficacité des solutions que je développe.
                <br /><br />  Curieux, rigoureux et toujours en quête d&apos;apprentissage,
                je suis déterminé à explorer de nouvelles technologies et à
                améliorer mes compétences. Mon objectif est de créer des
                expériences mémorables qui allient esthétique et fonctionnalité,
                tout en contribuant à des projets innovants et stimulants.
              </Typography>
              <Button
                variant="contained"
                // color="success"
                sx={{
                  mx: 2,
                  my: 2,
                  borderRadius: 50,
                  width: "80%",
                  bgcolor: theme.colors.primary,
                }}
              >
                Mon CV
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
