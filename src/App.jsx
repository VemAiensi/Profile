import React, { useState } from "react";
import Content from "./Content";
import Hero from "./Hero";

function App() {
  const [hero, setHero] = useState(true);
  function togglePage() {
    console.log("Page Toggle - Hero Page Visibility:", !hero);
    setHero(!hero);
  }

  return (
    <div>
      {hero ? (
        <Hero togglePage={togglePage}></Hero>
      ) : (
        <Content togglePage={togglePage}>Hello</Content>
      )}
    </div>
  );
}

export default App;
