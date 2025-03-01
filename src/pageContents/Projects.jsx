import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Links from "../common/Links";
import Footer from "../common/Footer";
import ProjectCard from "./ProjectCard";
import qrgengif from "../assets/projects/qrgen.gif";
import simonsays from "../assets/projects/simonsays.gif";
import merrmail from "../assets/projects/merrmail.gif";
import docsgen from "../assets/projects/docsgen.gif";
import scompiler from "../assets/projects/scompiler.gif";

function Projects({ linksVisibilityFnc }) {
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
  const [linksDisplay, setDisplay] = useState(false);
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
        linksVisibilityFnc(false);
        setDisplay(true);
      } else {
        linksVisibilityFnc(true);
        setDisplay(false);
      }
    }

    const scrollableElement = contentRef.current;
    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="main-window"
        ref={contentRef}
      >
        <section>
          <motion.p variants={childVariants}>
            My portfolio documents my growth in web development. Beginning with
            a solid understanding of HTML, CSS, and JavaScript, I now focus on
            building applications using the React framework and leveraging the
            power of npm packages.
          </motion.p>
          <br />
        </section>
        <section>
          <motion.h2 variants={childVariants}>Personal</motion.h2>
          <div className="section-row">
            <motion.div variants={childVariants} className="section">
              <ProjectCard
                img={docsgen}
                src="https://va-docs-gen.pages.dev"
                title="Document Generator"
                description="My own activity compiler into a document type output."
              ></ProjectCard>
            </motion.div>
            <motion.div variants={childVariants} className="section">
              <ProjectCard
                img={simonsays}
                src="https://github.com/VemAiensi/SimonSaysGame"
                title="Simon Says"
                description="Just a little game to test your memory ^_^"
              ></ProjectCard>
            </motion.div>
          </div>
        </section>

        <section>
          <motion.h2 variants={childVariants}>
            My Platform: vibrant-arrow.org
          </motion.h2>
          <div className="section-row">
            <motion.div variants={childVariants} className="section">
              <ProjectCard
                img={qrgengif}
                src="https://qr.vibrant-arrow.org/"
                title="QR Code Generator"
                description="A pretty straight forward QR code generator that gives basic customization."
              ></ProjectCard>
            </motion.div>
          </div>
        </section>

        <section>
          <motion.h2 variants={childVariants}>Collaborations</motion.h2>
          <div className="section-row">
            <motion.div variants={childVariants} className="section">
              <ProjectCard
                img={scompiler}
                src="https://vemaiensi.github.io/Basic-Java-Syntax-Checker/"
                title="Basic Java Syntax Checker"
                description="A pretty straight forward QR code generator that gives basic customization."
              ></ProjectCard>
            </motion.div>
            <motion.div variants={childVariants} className="section">
              <ProjectCard
                img={merrmail}
                src="https://github.com/merrmail/merrmail"
                title="Merrmail"
                description="A pretty straight forward QR code generator that gives basic customization."
              ></ProjectCard>
            </motion.div>
          </div>
        </section>
      </motion.div>
      <AnimatePresence>
        {linksDisplay && (
          <div className="content-links">
            <motion.div
              className="quicklinks"
              key="contact-text"
              style={{ alignSelf: "center" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <a
                href="mailto:your.email@gmail.com?subject=Inquiry&body=Hello,%20I'm%20interested%20in..."
                target="_blank"
                rel="noopener noreferrer"
              >
                vem.aiensi@gmail.com
              </a>
            </motion.div>
            <Links direction="links-row"></Links>
            <Footer></Footer>
          </div>
        )}
      </AnimatePresence>

      <div className="bottom-shade"></div>
    </div>
  );
}

export default Projects;
