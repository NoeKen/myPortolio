"use client";
import SkillModal from "@/app/[components]/skills/skillModal";
import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from "@mui/material";
import { useState } from "react";
import theme from "../[constants]/theme";

const skillsData = [
  {
    category: "No code / low code",
    details: "Power Apps, Power Automate, SharePoint, Make",
    skills: [
      { name: "Power Apps", proficiency: 90 },
      { name: "Power Automate", proficiency: 85 },
      { name: "SharePoint", proficiency: 80 },
      { name: "Make", proficiency: 75 },
    ],
  },
  {
    category: "Développement",
    details: "React-Native, React, Node.js, JavaScript, SQL, Java",
    skills: [
      { name: "React-Native", proficiency: 90 },
      { name: "React", proficiency: 85 },
      { name: "Node.js", proficiency: 80 },
      { name: "JavaScript", proficiency: 90 },
      { name: "SQL", proficiency: 75 },
      { name: "Java", proficiency: 70 },
    ],
  },
  {
    category: "Systèmes & Réseaux",
    details: "Active Directory, GPO, IIS, VMware ESXi, Winbox",
    skills: [
      { name: "Active Directory", proficiency: 80 },
      { name: "GPO", proficiency: 75 },
      { name: "IIS", proficiency: 70 },
      { name: "VMware ESXi", proficiency: 80 },
      { name: "Winbox", proficiency: 75 },
    ],
  },
  {
    category: "Support Technique",
    details: "Remote Desktop, Anydesk, Maintenance, Windows Server",
    skills: [
      { name: "Remote Desktop", proficiency: 80 },
      { name: "Anydesk", proficiency: 75 },
      { name: "Maintenance", proficiency: 85 },
      { name: "Windows Server", proficiency: 80 },
    ],
  },
  {
    category: "Design",
    details: "Adobe Photoshop, Adobe XD, Adobe Illustrator, Figma",
    skills: [
      { name: "Adobe Photoshop", proficiency: 80 },
      { name: "Adobe XD", proficiency: 75 },
      { name: "Adobe Illustrator", proficiency: 80 },
      { name: "Figma", proficiency: 70 },
    ],
  },
  {
    category: "Outils de collaboration",
    details: "Github, Bitbucket, Trello, Asana, ClickUp, Bitrix24",
    skills: [
      { name: "Github", proficiency: 90 },
      { name: "Bitbucket", proficiency: 85 },
      { name: "Trello", proficiency: 75 },
      { name: "Asana", proficiency: 70 },
      { name: "ClickUp", proficiency: 80 },
      { name: "Bitrix24", proficiency: 75 },
    ],
  },
  {
    category: "Autres Connaissances",
    details: "C, C#, Java",
    skills: [
      { name: "C", proficiency: 70 },
      { name: "C#", proficiency: 75 },
      { name: "Java", proficiency: 80 },
    ],
  },
];

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClickOpen = (category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
  };

  const calculateAverageProficiency = (skills) => {
    const total = skills.reduce((acc, skill) => acc + skill.proficiency, 0);
    return Math.round(total / skills.length);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Mes Compétences
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{
          mb: 3,
          fontFamily: theme.fonts.main,
          fontSize: theme.fontSize.content,
        }}
      >
        
        {/* Au fil des années, j&apos;ai développé un ensemble varié de compétences
        techniques qui me permettent de relever des défis complexes dans le
        développement web, mobile, et les plateformes low-code. Voici un aperçu
        de mes compétences et de leur niveau de maîtrise dans différents
        domaines. */}
      </Typography>
      <Grid container spacing={3}>
        {skillsData.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              onClick={() => handleClickOpen(category)}
              sx={{ cursor: "pointer" }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {category.category}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {category.details}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={calculateAverageProficiency(category.skills)}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >{`${calculateAverageProficiency(
                      category.skills
                    )}%`}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Utilisation du composant SkillModal */}
      <SkillModal open={open} handleClose={handleClose} selectedCategory={selectedCategory} />
  

      {/* Modal for category details */}
      {/* <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedCategory?.category}</DialogTitle>
        <DialogContent>
          {selectedCategory?.skills.map((skill, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mt: 2 }}
            >
              <Box sx={{ width: "100%", mr: 1 }}>
                <Typography variant="body1" gutterBottom>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.proficiency}
                />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >{`${skill.proficiency}%`}</Typography>
              </Box>
            </Box>
          ))}
        </DialogContent>
      </Dialog> */}
    </Box>
  );
};

export default Skills;
