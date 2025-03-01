import React, { useState, useRef, useEffect } from "react";
import cert1 from "../assets/certificates/BAWE.png";
import cert2 from "../assets/certificates/OCDM.png";
import cert3 from "../assets/certificates/OCI.png";
import cert4 from "../assets/certificates/pythonbeginners.png";
import cert5 from "../assets/certificates/SQL_RD_101.png";
import { motion, AnimatePresence } from "framer-motion";
import Links from "../common/Links";
import Footer from "../common/Footer";

function Certificates({ linksVisibilityFnc }) {
  const certs = [cert1, cert2, cert3, cert4, cert5];

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
          key="certificates"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Certificates
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
            This page showcases my commitment to continuous learning, with
            certificates earned through various courses and programs throughout
            my web development journey.
          </motion.p>
        </section>

        <div className="section-row">
          {certs.map((cert, index) => (
            <div key={index} className="section">
              <motion.div variants={childVariants} className="cert">
                <img src={cert} />
              </motion.div>
            </div>
          ))}
        </div>
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

export default Certificates;
