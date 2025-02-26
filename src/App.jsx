import React, { useState } from "react";
import Content from "./Content";
import Hero from "./Hero";
import { AnimatePresence } from "framer-motion";
import Nav from "./common/Nav";

function App() {
  const [hero, setHero] = useState(true);
  const [content, setContent] = useState(false);

  const [displayedContent, setDisplayedContent] = useState("about");
  function showAbout() {
    setHero(false);
    setDisplayedContent("about");
  }
  function showProjects() {
    setHero(false);
    setDisplayedContent("projects");
  }

  function showCertificates() {
    setHero(false);
    setDisplayedContent("certs");
  }

  const navFncs = [toggleContent, showAbout, showProjects, showCertificates];

  function toggleHero() {
    setHero(!hero);

    setTimeout(() => {
      setContent(!content);
    }, 500);
  }

  function toggleContent() {
    setContent(!content);

    setTimeout(() => {
      setHero(!hero);
    }, 500);
  }

  return (
    <div className="main-container">
      <AnimatePresence>
        <Nav hero={hero} fncs={navFncs}></Nav>
        {hero && <Hero key="hero" togglePage={toggleHero}></Hero>}
        {content && (
          <Content key="content" displayedContent={displayedContent} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
