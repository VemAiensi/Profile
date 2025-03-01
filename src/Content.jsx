import React, { useState, useRef, useEffect } from "react";
import Links from "./common/Links";
import "./content.css";
import Profile from "./Profile";
import About from "./pageContents/About";
import Projects from "./pageContents/Projects";
import Certificates from "./pageContents/Certificates";
import { useMediaQuery } from "@mui/material";
import { easeOut, motion, AnimatePresence } from "framer-motion";

function Content({ displayedContent, linksVisibility, setLinksVisibility }) {
  //Variables
  const wideScreen = useMediaQuery("(min-width: 1100px)");
  function updateLinksVisibility(displayed) {
    setLinksVisibility(displayed);
  }
  function renderContent(page) {
    switch (page) {
      case "about":
        return <About linksVisibilityFnc={updateLinksVisibility} />;
      case "projects":
        return <Projects linksVisibilityFnc={updateLinksVisibility} />;
      case "certs":
        return <Certificates linksVisibilityFnc={updateLinksVisibility} />;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={{
          width: "100%",
          transition: {
            duration: 1,
            ease: easeOut,
          },
        }}
        className="nav-line"
      ></motion.div>
      <div className="content">
        {wideScreen && (
          <div className="profile-container">
            <Profile detailsDisplay={true}></Profile>
            <div className="divider"></div>
          </div>
        )}

        {renderContent(displayedContent)}
      </div>
      <AnimatePresence>
        {linksVisibility && wideScreen && <Links direction="links"></Links>}
      </AnimatePresence>
    </motion.div>
  );
}

export default Content;
