import React, { useState } from "react";
import Nav from "./common/Nav";
import Links from "./common/Links";
import "./content.css";
import ProfilePic from "./ProfilePictures";
import About from "./pageContents/About";
import Projects from "./pageContents/Projects";
import Certificates from "./pageContents/Certificates";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";

function Content({ displayedContent }) {
  function renderContent(page) {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "certs":
        return <Certificates />;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="content-container"
    >
      <div className="content">
        <div className="profile">
          <ProfilePic></ProfilePic>
          <h3>VEM AIENSI A. MARASIGAN</h3>
          <h3>UI/ UX | Full Stack Web Developer</h3>
          <br />

          <div className="profile-details">
            <SchoolIcon /> <span>New Era University</span>
          </div>

          <div className="profile-details">
            <LocationOnIcon /> <span>Quezon City Manila</span>
          </div>
        </div>

        <div className="divider"></div>

        {renderContent(displayedContent)}
      </div>

      <Links direction="links"></Links>
    </motion.div>
  );
}

export default Content;
