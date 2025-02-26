import React from "react";
import List from "./List";
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

  const schools = [
    { school: "New Era University", time: "2021-2026" },
    { school: "Infanta National High School", time: "2015-2021" },
    { school: "Infanta Central Elementary School", time: "2013-2015" },
    { school: "INHS", time: "2015-2021" },
  ];

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="main-window"
    >
      <div className="section">
        <motion.p variants={childVariants}>
          Web Developer with a strong foundation in front-end development and
          the ability to handle full-stack projects. Skilled in creating
          visually appealing and user-friendly interfaces through effective
          design and layout.
        </motion.p>
      </div>

      <div className="section">
        <div className="section">
          <motion.h2 variants={childVariants}>Education</motion.h2>
          <List list={schools} childVariants={childVariants}></List>
        </div>
        <div className="section">
          <motion.h2 variants={childVariants}>Education</motion.h2>
          <List list={schools} childVariants={childVariants}></List>
        </div>
      </div>

      <div className="section">
        <motion.h2 variants={childVariants}>Education</motion.h2>
        <List list={schools} childVariants={childVariants}></List>
      </div>
    </motion.div>
  );
}

export default About;
