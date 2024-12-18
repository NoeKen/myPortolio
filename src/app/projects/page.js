// app/projects/page.js
import ProjectCard from "@/app/[components]/projectCard/ProjectCard";
import { Box, Typography } from "@mui/material";
import theme from "../[constants]/theme";

export default function Projects() {
  const projects = [
    {
      image: "./assets/conges.png", // Remplace par le chemin de l'image de ton projet EchoArt
      title: "Plateforme de gestion de congés",
      description:
        "Applications Power Apps pour la demande, gestion et suivi des congés, avec automatisations et envoie de mails.",
      // title: 'EchoArt',
      // description: 'Plateforme de partage d\'images captivantes d\'animaux, permettant aux utilisateurs de télécharger et de partager leurs œuvres.',
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Power FX"],
      link: "",
    },
    {
      image: "./assets/conges.png", // Remplace par le chemin de l'image de ton projet ShareSpace
      title: "ShareSpace",
      description:
        "Une plateforme de petites annonces locales pour la consultation d'événements et la location d'espaces.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "",
    },
    {
      image: "./assets/beAware.png", // Remplace par le chemin de l'image de ton application d'alimentation bio
      title: "BeAware",
      description:
        "Application mobile Android d'aide a la gestion financière, suivi des dépenses quotidiennes, génération et exportation de rapports.",
      technologies: ["React Native", "Redux", "SQLite"],
      link: "https://play.google.com/store/apps/details?id=com.beaware&pcampaignid=web_share",
    },
  ];

  return (
    <>
      <div id="projects"></div>
      <Box className="projects-section">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontFamily: theme.fonts.main, mt: 5 }}
        >
          PROJETS CLES
        </Typography>
        <Typography
          sx={{
            mb: 5,
            textAlign: "center",
            fontSize: theme.fontSize.content,
            fontFamily: theme.fonts.main,
          }}
        >
          Bienvenue sur mon portfolio. Vous trouverez ici une sélection de
          quelques un de mes travaux. Explorez mes projets pour en savoir plus.
        </Typography>
        <Typography style={style.title} >Developpement</Typography>
        <div className="projects-grid">
          {projects?.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              // title={project.title}
              // description={project.description}
              // image={project.image}
            />
          ))}
        </div>
        <Typography style={style.title}>Design</Typography>
      </Box>
    </>
  );
}

const style = {
  title :{
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom : 20,
    fontSize: theme.fontSize.title,
    fontFamily: theme.fonts.main,
    textAlign:"center"
  }
}