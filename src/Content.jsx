import React from "react";
import Nav from "./common/Nav";
import Links from "./common/Links";
import "./content.css";
function Content({ togglePage }) {
  return (
    <>
      <Nav fncs={togglePage}></Nav>
      <div className="content">
        <div className="profile">
          <img src="/white.svg" alt="" width="100px" />
          <h3>Vem Aiensi Marasigan</h3>
          <h3>Full Stack Web Developer</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            maiores dolore reprehenderit modi reiciendis eius eos vel tempore
            libero sequi, fugiat harum quibusdam animi labore magnam consequatur
            illo. Debitis, qui.
          </p>
        </div>
        <div className="divider"></div>
        <div className="main-window">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            maiores dolore reprehenderit modi reiciendis eius eos vel tempore
            libero sequi, fugiat harum quibusdam animi labore magnam consequatur
            illo. Debitis, qui.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            maiores dolore reprehenderit modi reiciendis eius eos vel tempore
            libero sequi, fugiat harum quibusdam animi labore magnam consequatur
            illo. Debitis, qui.
          </p>
        </div>
      </div>

      <Links direction="links"></Links>
    </>
  );
}

export default Content;
