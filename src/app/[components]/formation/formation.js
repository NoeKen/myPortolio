"use client";
import React from "react";
import { Box, Typography, Grid2, Card, CardContent } from "@mui/material";
// import { Line } from "react-chartjs-2";
import "chart.js/auto";
import theme from "@/app/[constants]/theme";

// const educationData = {
//   labels: ["Baccalauréat", "Maîtrise", "DESS", "Maîtrise au Canada"],
//   datasets: [
//     {
//       label: "Mon Parcours Éducatif",
//       data: [2015, 2019, 2024, 2025], // Exemples d&apos;années de formation
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)",
//       borderWidth: 2,
//       fill: true,
//     },
//   ],
// };

const Formation = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontFamily: theme.fonts.main }}
      >
        FORMATION ACADÉMIQUE
      </Typography>
      <Typography
        gutterBottom
        align="center"
        sx={{
          mb: 3,
          fontFamily: theme.fonts.main,
          fontSize: theme.fontSize.content,
        }}
      >
        Ma formation académique
        {/* Mon parcours éducatif m&apos;a permis d&apos;acquérir les bases solides et les
        compétences avancées nécessaires pour exceller dans le développement
        d&apos;applications et l&apos;ingénierie logicielle. Chaque étape de ma formation
        a renforcé ma passion pour les nouvelles technologies et mon envie
        d&apos;innover. */}
      </Typography>
      <Grid2 container spacing={3}>
        {/* Formation 1 */}
        <Grid2 item size={{ xs: 12, sm: 6, lg: 6 }} md={6}>
          <Card>
            <CardContent>
              <p gutterBottom>
                <Typography variant="h6" gutterBottom>
                  Diplôme d&apos;Etude Collégiale
                </Typography>
                (Sciences informatiques et mathématiques)
              </p>
              <Typography variant="body2" color="textSecondary">
                Lycée bilingue de Tcholliré | Tcholliré - Cameroun | 2019
              </Typography>
              {/* <Typography variant="body2" color="textSecondary">
                Yaoundé - Cameroun - 2019
              </Typography> */}
            </CardContent>
          </Card>
        </Grid2>

        {/* Formation 2 */}
        <Grid2 item size={{ xs: 12, sm: 6, lg: 6 }} md={6}>
          <Card>
            <CardContent>
              <p>
                <Typography variant="h6" gutterBottom>
                  Baccalaureat en Informatique
                </Typography>
                ICT4D (Information And Communication Technology For Development)
              </p>
              <Typography variant="body2" color="textSecondary">
                Université de Yaoundé 1 | Yaoundé - Cameroun | 2022
              </Typography>
            </CardContent>
          </Card>
        </Grid2>

        {/* Formation 3 */}
        {/* <Grid2 item size={{ xs: 12, sm: 6, lg: 12 }} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                DESS en Génie Logiciel
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Canada - Prévu en 2025
              </Typography>
            </CardContent>
          </Card>
        </Grid2> */}

        {/* Graphique */}
        {/* <Grid2 item xs={12}>
          <Box sx={{ maxWidth: 700, margin: &apos;0 auto&apos; }}>
            <Line data={educationData} />
          </Box>
        </Grid2> */}
      </Grid2>
    </Box>
  );
};

export default Formation;
