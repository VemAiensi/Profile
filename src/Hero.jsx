import React from "react";
import "./components.css";
import Links from "./common/Links";
import { motion, easeInOut } from "framer-motion";

function Hero(props) {
  const year = new Date().getFullYear();

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <motion.div
      key={props.key}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: easeInOut }}
      exit={{ y: -100, opacity: 0 }}
      className="hero"
      onClick={props.togglePage}
    >
      <motion.img variants={childVariants} src="/white.svg" />
      <motion.h1 variants={childVariants}>PROFESSIONAL PROFILE</motion.h1>
      <motion.h2 variants={childVariants}>VEM AIENSI MARASIGAN</motion.h2>
      <motion.div variants={childVariants} className="quick-links">
        <Links direction="links-row"></Links>
      </motion.div>
      <motion.p variants={childVariants}>© {year}</motion.p>
    </motion.div>
  );
}

export default Hero;
