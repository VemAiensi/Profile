import React, { useState, useRef, useEffect } from "react";
import List from "./List";
import svgator from "../assets/skillicons/svgator.svg";
import { motion, AnimatePresence } from "framer-motion";
import Links from "../common/Links";
import Footer from "../common/Footer";
import Profile from "../Profile";
import { useMediaQuery } from "@mui/material";
function About({ linksVisibilityFnc }) {
  //Animations
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

  //Variables
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

  let githubIcon = (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#ffffff"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>github [#ffffff]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>{" "}
        <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd">
          {" "}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-140.000000, -7559.000000)"
            fill="#ffffff"
          >
            {" "}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {" "}
              <path
                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                id="github-[#ffffff]"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  const wideScreen = useMediaQuery("(min-width: 1100px)");

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

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="main-window"
        ref={contentRef}
      >
        <section>
          <div className="section-row-about">
            <div className="section">
              <motion.p variants={childVariants}>
                I am a Web Developer with a strong foundation in front-end
                development and the ability to handle full-stack projects.
                Skilled in creating visually appealing and user-friendly
                interfaces through effective design and layout.
              </motion.p>
              <br />
              <motion.p variants={childVariants}>
                I started using native HTML, CSS and Javascript by 2021.
                Building enough foundation, I began to use frameworks, mainly
                React.js and Express.js, and had been using it for over{" "}
                {renderExp()} now.
              </motion.p>

              <br />

              <motion.p variants={childVariants}>
                Throughout this full-stack journey, I've cultivated a strong
                understanding of Node.js and its ecosystem. Understanding how to
                manage dependencies and leverage the vast library of npm
                packages has been a crucial part of my learning process.
              </motion.p>

              <br />

              <div className="quicklinks">
                <a href="">{githubIcon}College Journey</a>
                <a href="">{githubIcon}Profile</a>
              </div>
            </div>

            {!wideScreen && (
              <div className="section-about">
                <Profile alignment="center"></Profile>
              </div>
            )}
          </div>
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
            <List
              style="star"
              list={awards}
              childVariants={childVariants}
            ></List>
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

export default About;
