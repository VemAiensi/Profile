import React, { useRef, useEffect } from "react";
import "./components.css";
import Links from "./common/Links";
import { motion, easeInOut, reverseEasing } from "framer-motion";
import Footer from "./common/Footer";
import { useMediaQuery } from "@mui/material";
import DoubleDown from "@mui/icons-material/KeyboardDoubleArrowDownSharp";

function Hero({ togglePage }) {
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

  const contentRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (
        contentRef.current.scrollTop + contentRef.current.clientHeight + 10 >=
        contentRef.current.scrollHeight
      ) {
        console.log(
          contentRef.current.scrollTop + contentRef.current.clientHeight
        );
        togglePage();
      } else {
      }
    }

    const scrollableElement = contentRef.current;
    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={contentRef} className="hero-container">
      <motion.div
        key="hero"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: easeInOut }}
        exit={{ y: -100, opacity: 0 }}
        className="hero"
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

        <motion.div
          style={{
            width: "100%",
            height: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 1,
            ease: easeInOut,
          }}
          onClick={togglePage}
        >
          <motion.div
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: easeInOut,
            }}
          >
            <DoubleDown style={{ fontSize: "3rem" }} />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div variants={childVariants} className="quick-links">
        <Links direction="links-row"></Links>
        <Footer childVariants={childVariants}></Footer>
      </motion.div>
    </div>
  );
}

export default Hero;
