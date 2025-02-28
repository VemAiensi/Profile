import React from "react";
import "./components.css";
import Links from "./common/Links";
import { motion, easeInOut } from "framer-motion";
import Footer from "./common/Footer";
import { useMediaQuery } from "@mui/material";

function Hero(props) {
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
  const wideScreen = useMediaQuery("(min-width: 550px)");

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
      <motion.h1
        variants={childVariants}
        className={wideScreen ? "wide-h1" : "mobile-h1"}
      >
        PROFESSIONAL PROFILE
      </motion.h1>
      <motion.h2
        variants={childVariants}
        className={wideScreen ? "wide-h2" : "mobile-h2"}
      >
        VEM AIENSI MARASIGAN
      </motion.h2>
      <motion.div variants={childVariants} className="quick-links">
        <Links direction="links-row"></Links>
      </motion.div>
      <Footer childVariants={childVariants}></Footer>
    </motion.div>
  );
}

export default Hero;
