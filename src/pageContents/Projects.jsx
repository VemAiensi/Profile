import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import qrgengif from "../assets/projects/qrgen.gif";
import simonsays from "../assets/projects/simonsays.gif";
import merrmail from "../assets/projects/merrmail.gif";
import docsgen from "../assets/projects/docsgen.gif";
import scompiler from "../assets/projects/scompiler.gif";

function Projects(props) {
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
          My portfolio documents my growth in web development. Beginning with a
          solid understanding of HTML, CSS, and JavaScript, I now focus on
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
              src="https://va-docs-gen.pages.dev"
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
              src="https://va-docs-gen.pages.dev"
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
              src="https://va-docs-gen.pages.dev"
              title="Basic Java Syntax Checker"
              description="A pretty straight forward QR code generator that gives basic customization."
            ></ProjectCard>
          </motion.div>
          <motion.div variants={childVariants} className="section">
            <ProjectCard
              img={merrmail}
              src="https://va-docs-gen.pages.dev"
              title="Merrmail"
              description="A pretty straight forward QR code generator that gives basic customization."
            ></ProjectCard>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
