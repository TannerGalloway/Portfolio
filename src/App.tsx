import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const App: React.FC = function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hero />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
};

export default App;
