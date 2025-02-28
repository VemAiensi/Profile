import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ img, src, title, description }) {
  return (
    <div className="project-card">
      <a href={src} target="_blank">
        <motion.img whileHover={{ scale: 1.1 }} src={img} />
      </a>
      <br />
      <br />

      <a href={src} target="_blank">
        <h3>{title}</h3>
      </a>

      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
