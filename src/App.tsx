import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import GridBackground from "./components/GridBackground";

const App: React.FC = function App() {
  return (
    <>
      <GridBackground />
      <div className="container mx-auto px-4">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </>
  );
};

export default App;
