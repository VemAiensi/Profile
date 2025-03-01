import React, { useState, useRef } from "react";
import Content from "./Content";
import Hero from "./Hero";
import { AnimatePresence } from "framer-motion";
import Nav from "./common/Nav";

function App() {
  const [heroPage, setHeroPage] = useState(true);
  const [contentPage, setContentPage] = useState(false);
  const [linksVisibility, setLinksVisibility] = useState(true);

  const [displayedContent, setDisplayedContent] = useState("about");
  function showAbout() {
    setDisplayedContent("about");
    setLinksVisibility(true);
    if (heroPage) {
      toggleHero();
    }
  }
  function showProjects() {
    setDisplayedContent("projects");
    setLinksVisibility(true);
    if (heroPage) {
      toggleHero();
    }
  }

  function showCertificates() {
    setDisplayedContent("certs");
    setLinksVisibility(true);
    if (heroPage) {
      toggleHero();
    }
  }

  const navFncs = [toggleContent, showAbout, showProjects, showCertificates];

  function toggleHero() {
    setHeroPage(!heroPage);

    setTimeout(() => {
      setContentPage(!contentPage);
    }, 500);
  }

  function toggleContent() {
    setContentPage(!contentPage);

    setTimeout(() => {
      setHeroPage(!heroPage);
    }, 500);
  }

  return (
    <div className="main-container">
      <AnimatePresence>
        <Nav hero={heroPage} brand={!heroPage} fncs={navFncs}></Nav>
        {heroPage && <Hero key="hero" togglePage={toggleHero}></Hero>}
        {contentPage && (
          <Content
            key="content"
            displayedContent={displayedContent}
            linksVisibility={linksVisibility}
            setLinksVisibility={setLinksVisibility}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
