import React from "react";
import { motion } from "framer-motion";

function About() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="main-window"
    >
      <motion.h1 variants={childVariants}>About Me</motion.h1>
      <motion.p variants={childVariants}>
        Web Developer with a strong foundation in front-end development and the
        ability to handle full-stack projects. Skilled in creating visually
        appealing and user-friendly interfaces through effective design and
        layout.
      </motion.p>
      <br />

      <motion.h3 variants={childVariants}>Education</motion.h3>
      <motion.p variants={childVariants}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores
        dolore reprehenderit modi reiciendis eius eos vel tempore libero sequi,
        fugiat harum quibusdam animi labore magnam consequatur illo. Debitis,
        qui.
      </motion.p>
    </motion.div>
  );
}

export default About;
