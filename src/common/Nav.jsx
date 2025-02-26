import React from "react";
import "./common.css";
function Nav({ fncs }) {
  const [togglePage, showAbout, showProjects, showCertificates] = fncs;
  return (
    <div className="nav">
      <div className="brand">
        {/* <img src="/white.svg" alt="" /> */}
        <div className="nav-links" onClick={togglePage}>
          <span>V. A. Marasigan</span>
        </div>
      </div>

      <div className="nav-links">
        <span onClick={showAbout}>ABOUT</span>
        <span onClick={showProjects}>PROJECTS</span>
        <span onClick={showCertificates}>CERTIFICATES</span>
      </div>
    </div>
  );
}

export default Nav;
