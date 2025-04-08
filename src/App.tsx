import React from "react";
import Hero from "./components/Hero";

const App: React.FC = function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hero />
      </div>
    </>
  );
};

export default App;
