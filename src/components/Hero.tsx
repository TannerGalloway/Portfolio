import React from "react";

const Hero: React.FC = function Hero() {
  return (
    <section className="min-h-screen flex justify-center py-20">
      <div className="flex items-center">
        {/* Left Content */}
        <div className="left-container">
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-sm font-mono text-gray-400 mb-2">
              <div className="h-px w-5 bg-green-500"></div>
              <span>QA ENGINEER | SOFTWARE DEVELOPER</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold xl:w-2/3 mb-6">
            DEBUGGING REALITY, BUILDING POSSIBILITY
          </h1>

          <p className="text-gray-400 max-w-xl mb-8 text-lg">
            Delivering dependable software through sharp QA skills and hands-on
            development.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition-colors duration-300 hero-button">
              View Work
            </a>

            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 border border-green-500 text-green-500 font-medium rounded-md hover:bg-green-500/20 transition-colors duration-300 hero-button">
              Contact Me
            </a>
          </div>
        </div>
        {/* Right Content */}
        <div className="right-container hidden lg:block">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="relative h-full w-full rounded-full border border-green-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="font-mono text-sm text-green-500 mb-4">
                  // CODE. TEST. REPEAT.
                </div>
                <div className="h-px w-16 mx-auto bg-green-500/50 mb-4"></div>
                <div className="font-mono text-xs text-gray-400 mb-4">
                  Web Development
                </div>
                <div className="font-mono text-xs text-gray-400 mb-4">
                  Mobile Development
                </div>
                <div className="font-mono text-xs text-gray-400">
                  Game Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
