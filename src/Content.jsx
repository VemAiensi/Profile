import React, { useState, useRef, useEffect } from "react";
import Nav from "./common/Nav";
import Links from "./common/Links";
import Footer from "./common/Footer";
import "./content.css";
import Profile from "./Profile";
import About from "./pageContents/About";
import Projects from "./pageContents/Projects";
import Certificates from "./pageContents/Certificates";
import { useMediaQuery } from "@mui/material";
import { easeOut, motion, AnimatePresence } from "framer-motion";

function Content({ displayedContent }) {
  const wideScreen = useMediaQuery("(min-width: 1100px)");

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
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Certificates
              </motion.h1>
            </div>

            <Certificates ref={contentRef} />
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
        contentRef.current.scrollTop + contentRef.current.clientHeight + 10 >=
        contentRef.current.scrollHeight
      ) {
        console.log(
          contentRef.current.scrollTop + contentRef.current.clientHeight
        );
        setLinksVisibility(false);
      } else {
        console.log(
          "Max:",
          contentRef.current.scrollHeight,
          contentRef.current.scrollTop + contentRef.current.clientHeight
        );
        setLinksVisibility(true);
      }
    }

    const scrollableElement = contentRef.current;
    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, [contentRef]);

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
          <>
            <Profile></Profile>
            <div className="divider"></div>
          </>
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
