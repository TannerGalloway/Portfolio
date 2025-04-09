import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App: React.FC = function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default App;
