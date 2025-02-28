import React, { useState, useRef, useEffect } from "react";
import Nav from "./common/Nav";
import Links from "./common/Links";
import Footer from "./common/Footer";
import "./content.css";
import ProfilePic from "./ProfilePictures";
import About from "./pageContents/About";
import Projects from "./pageContents/Projects";
import Certificates from "./pageContents/Certificates";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import { easeOut, motion, AnimatePresence } from "framer-motion";

function Content({ displayedContent }) {
  function renderContent(page) {
    switch (page) {
      case "about":
        return (
          <div className="content-container">
            <div className="heading">
              <motion.h1
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                About Me
              </motion.h1>
            </div>

            <About ref={contentRef} />
            <AnimatePresence>
              {!linksVisibility && (
                <div className="content-links">
                  <motion.p
                    key="contact-text"
                    style={{ textAlign: "center" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    vem.aiensi@gmail.com
                  </motion.p>
                  <Links direction="links-row"></Links>
                  <Footer></Footer>
                </div>
              )}
            </AnimatePresence>

            <div className="bottom-shade"></div>
          </div>
        );
      case "projects":
        return (
          <div className="content-container">
            <div className="heading">
              <motion.h1
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Projects
              </motion.h1>
            </div>

            <Projects ref={contentRef} />
            <AnimatePresence>
              {!linksVisibility && (
                <div className="content-links">
                  <motion.p
                    key="contact-text"
                    style={{ textAlign: "center" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    vem.aiensi@gmail.com
                  </motion.p>
                  <Links direction="links-row"></Links>
                  <Footer></Footer>
                </div>
              )}
            </AnimatePresence>

            <div className="bottom-shade"></div>
          </div>
        );
      case "certs":
        return (
          <div className="content-container">
            <div className="heading">
              <motion.h1
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                About Me
              </motion.h1>
            </div>

            <About ref={contentRef} />
            <AnimatePresence>
              {!linksVisibility && (
                <div className="content-links">
                  <motion.p
                    key="contact-text"
                    style={{ textAlign: "center" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    vem.aiensi@gmail.com
                  </motion.p>
                  <Links direction="links-row"></Links>
                  <Footer></Footer>
                </div>
              )}
            </AnimatePresence>

            <div className="bottom-shade"></div>
          </div>
        );
    }
  }

  const [linksVisibility, setLinksVisibility] = useState(true);

  const contentRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (
        contentRef.current.scrollTop + contentRef.current.clientHeight ===
        contentRef.current.scrollHeight
      ) {
        setLinksVisibility(false);
      } else {
        setLinksVisibility(true);
      }
    }

    const scrollableElement = contentRef.current;
    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="profile"
        >
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
        </motion.div>

        <div className="divider"></div>

        {renderContent(displayedContent)}
      </div>
      <AnimatePresence>
        {linksVisibility && <Links direction="links"></Links>}
      </AnimatePresence>
    </motion.div>
  );
}

export default Content;
