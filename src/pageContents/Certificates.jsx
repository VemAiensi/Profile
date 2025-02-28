import React from "react";
import { motion } from "framer-motion";
import cert1 from "../assets/certificates/BAWE.png";
import cert2 from "../assets/certificates/OCDM.png";
import cert3 from "../assets/certificates/OCI.png";
import cert4 from "../assets/certificates/pythonbeginners.png";
import cert5 from "../assets/certificates/SQL_RD_101.png";

function Certificates(props) {
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
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="main-window"
      ref={props.ref}
    >
      <section>
        <motion.p variants={childVariants}>
          This page showcases my commitment to continuous learning, with
          certificates earned through various courses and programs throughout my
          web development journey.
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
  );
}

export default Certificates;
