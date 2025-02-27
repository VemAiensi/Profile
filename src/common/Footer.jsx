import React from "react";
import "./common.css";
import { motion } from "framer-motion";
function Footer({ childVariants }) {
  const year = new Date().getFullYear();

  function renderFooter() {
    if (childVariants)
      return (
        <motion.p style={{ textAlign: "center" }} variants={childVariants}>
          © {year}
        </motion.p>
      );
    else
      return (
        <motion.p
          key="footer-text"
          style={{ textAlign: "center" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          © {year}
        </motion.p>
      );
  }

  return renderFooter();
}

export default Footer;
