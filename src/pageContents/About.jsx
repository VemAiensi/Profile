import React from "react";
import List from "./List";
import svgator from "../assets/skillicons/svgator.svg";
import { motion } from "framer-motion";

function About(props) {
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

  const schools = [
    { title: "New Era University", subtitle: "2021-2026" },
    { title: "Infanta National High School", subtitle: "2015-2021" },
    { title: "Infanta Central Elementary School", subtitle: "2015" },
  ];
  const awards = [
    { title: "DOST SEI Scholarship Awardee", subtitle: "2021" },
    { title: "Constant With High Honors: Grade 9-12", subtitle: "2017-2021" },
    { title: "100% Score NAT: Math Subject", subtitle: "2014" },
  ];

  const frontendSkills = [
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    svgator,
    "https://www.vectorlogo.zone/logos/blender/blender-icon.svg",
    "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg",
    "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  ];

  const backendSkills = [
    "https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    "https://www.vectorlogo.zone/logos/ibm_cloud/ibm_cloud-icon.svg",
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  ];

  const foundations = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
    "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  ];

  function getYearMonthDifference(date1, date2) {
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }

  const yReactStart = new Date(2025, 0, 9); //January 9, 2025
  const difference = getYearMonthDifference(yReactStart, new Date());
  const yearExp = difference.years;
  const monthExp = difference.months;

  function renderExp() {
    let experience = "";
    if (yearExp > 0) {
      if (yearExp > 1) {
        experience = `${yearExp} years`;
      } else experience = `a year`;
    }

    if (yearExp > 0 && monthExp > 0) {
      experience += ` and `;
    }

    if (monthExp > 0) {
      if (monthExp > 1) {
        experience += `${monthExp} months`;
      } else experience += `a month`;
    }

    return experience;
  }

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
          I am a Web Developer with a strong foundation in front-end development
          and the ability to handle full-stack projects. Skilled in creating
          visually appealing and user-friendly interfaces through effective
          design and layout.
        </motion.p>
        <br />
        <motion.p variants={childVariants}>
          I started using native HTML, CSS and Javascript by 2021. Building
          enough foundation, I learned to use React.js and had been using it for
          over {renderExp()} now.
        </motion.p>
      </section>

      <section>
        <motion.h2 variants={childVariants}>Skills</motion.h2>
        <div className="section-row">
          <div className="section">
            <div>Frontend</div>
            <div className="skill-icons">
              {frontendSkills.map((icon, index) => (
                <motion.img variants={childVariants} key={index} src={icon} />
              ))}
            </div>
          </div>
          <div className="section">
            <div>Backend</div>
            <div className="skill-icons">
              {backendSkills.map((icon, index) => (
                <motion.img variants={childVariants} key={index} src={icon} />
              ))}
            </div>
          </div>
          <div className="section">
            <div>Foundations</div>
            <div className="skill-icons">
              {foundations.map((icon, index) => (
                <motion.img variants={childVariants} key={index} src={icon} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-row">
        <div className="section">
          <motion.h2 variants={childVariants}>Education</motion.h2>
          <List
            style="lined"
            list={schools}
            childVariants={childVariants}
          ></List>
        </div>
        <div className="section">
          <motion.h2 variants={childVariants}>Awards</motion.h2>
          <List style="star" list={awards} childVariants={childVariants}></List>
        </div>
      </div>

      <motion.h2 variants={childVariants}>Find Me</motion.h2>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            width="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?height=400&hl=en&q=New Era Men's Dorm 9&t=&z=13&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
          <a href="https://sprunkin.com/">Sprunki Phases</a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
