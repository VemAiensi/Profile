import React from "react";
import "./common.css";
function Nav({ fncs }) {
  return (
    <div className="nav">
      <div className="brand">
        <img src="/white.svg" alt="" />
        <div className="title" onClick={fncs}>
          V. A. Marasigan
        </div>
      </div>

      <div className="nav-links">
        <span>ABOUT</span>
        <span>PROJECTS</span>
        <span>CERTIFICATES</span>
      </div>
    </div>
  );
}

export default Nav;
