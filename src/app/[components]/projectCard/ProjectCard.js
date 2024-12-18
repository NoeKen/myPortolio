import React from "react";
import "./projectCard.css";
import theme from "@/app/[constants]/theme";
import { Typography } from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project?.image}
        alt={project?.title}
        className="project-image"
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p
          className="project-description"
          style={{
            fontSize: theme.fontSize.content,
            fontFamily: theme.fonts.main,
            // color: theme.colors.primary,
          }}
        >
          {project.description}
        </p>
        {project.link !== "" ? (
          <Typography>
            Aperçu:{" "}
            <a href={project?.link} target="_blank">
              PlayStore
            </a>{" "}
          </Typography>
        ) : null}
        <div className="project-technologies">
          {project?.technologies.map((tech, index) => (
            <span
              key={index}
              className="technology"
              style={{
                fontSize: theme.fontSize.span,
                color: theme.colors.primary,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
