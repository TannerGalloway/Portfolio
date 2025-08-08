import React, { useState } from "react";
import { builtApps, testedApps } from "../assets/projectsList.json";
import ProjectModal from "./Project-Modal";
import { BugOff, Code } from "lucide-react";

export type BuiltProject = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  videoUrl: string;
  codeUrl: string;
  liveUrl?: string;
};
export type TestedProduct = {
  id: number;
  title: string;
  studiosName: string[];
  testingFocus: string[];
  image: string;
  platforms?: string[];
  hardware?: string[];
  devices?: string[];
  toolsMethods: string[];
};

interface ProjectsProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ currentTab, setCurrentTab }) => {
  const [selectedProject, setSelectedProject] = useState<BuiltProject | null>(
    null
  );

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <div className="flex items-center space-x-2 text-sm font-mono text-gray-400 mb-2">
          <div className="h-px w-5 bg-green-500"></div>
          <span>FEATURED WORK</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Products & Projects
        </h2>
        <p className="text-gray-400 max-w-2xl">
          From hands-on QA for major releases to self-built apps, here's a look
          at my work in action.
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-1 w-80 h-12 ">
          {/* Sliding Toggle background */}
          <div
            className={`absolute top-1 bottom-1 left-1 bg-green-500 rounded-lg transition-transform duration-300 ease-in-out ${
              currentTab === "built"
                ? "transform translate-x-full"
                : "transform translate-x-0"
            }`}
            style={{
              width: "calc(50% - 4px)",
            }}
          />

          {/* Toggle buttons */}
          <div className="relative flex w-full h-full">
            <button
              onClick={() => handleTabChange("tested")}
              className={`flex-1 flex items-center justify-center rounded-lg font-medium transition-colors duration-300 cursor-pointer project-toggle ${
                currentTab === "tested" ? "text-black" : "text-gray-500"
              }`}>
              <>
                <BugOff size={20} className="mr-2" />
                <span>Tested</span>
              </>
            </button>

            <button
              onClick={() => handleTabChange("built")}
              className={`flex-1 flex items-center justify-center rounded-lg font-medium transition-colors duration-300 cursor-pointer project-toggle ${
                currentTab === "built" ? "text-black" : "text-gray-500"
              }`}>
              <>
                <Code size={20} className="mr-2" />
                <span>Built</span>
              </>
            </button>
          </div>
        </div>
      </div>

      {/* Product & Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {currentTab === "tested"
          ? testedApps.map((product) => (
              <div
                key={`product-${product.id}`}
                onClick={() =>
                  window.open(product.liveUrl, "_blank", "noopener,noreferrer")
                }
                className="group overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-green-500 hover:-translate-y-2 project-card">
                <div className="overflow-hidden relative">
                  <img
                    src={
                      `${import.meta.env.BASE_URL}${product.image}` ||
                      "https://placehold.co/400x400?text=Image+Unavailable"
                    }
                    alt={product.title}
                    className="object-cover transition-transform duration-300 h-128 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-green-500 transition-colors duration-300">
                    {product.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-400">
                    {product.studiosName.map(
                      (studio: string, index: number) => (
                        <span
                          key={`tool-${index}`}
                          className="text-gray-400 text-sm">
                          {studio}
                          {index < product.studiosName!.length - 1 && " •"}
                        </span>
                      )
                    )}
                  </div>
                  {/* Testing Focus Section */}
                  <div className="mb-4">
                    <h4 className="text-md font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                      TESTING FOCUS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.testingFocus.map((focus, index) => (
                        <span
                          key={`tag-${index}`}
                          className="text-gray-400 text-sm bg-gray-800 py-1 px-2 rounded-lg">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Platform/Hardware/Devices Section */}
                  <div className="mb-4">
                    {(product?.platforms?.length > 0 && (
                      <>
                        <h4 className="text-md font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                          PLATFORMS TESTED
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.platforms.map((platform, index) => (
                            <span
                              key={`platform-${index}`}
                              className="text-gray-400 text-sm bg-gray-800 py-1 px-2 rounded-lg">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </>
                    )) ||
                      (product.hardware?.length > 0 && (
                        <>
                          <h4 className="text-md font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                            HARDWARE TESTED
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {product.hardware.map((hardware, index) => (
                              <span
                                key={`hardware-${index}`}
                                className="text-gray-400 text-sm bg-gray-800 py-1 px-2 rounded-lg">
                                {hardware}
                              </span>
                            ))}
                          </div>
                        </>
                      )) ||
                      (product.devices?.length > 0 && (
                        <>
                          <h4 className="text-md font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                            DEVICES TESTED
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {product.devices.map((device, index) => (
                              <span
                                key={`device-${index}`}
                                className="text-gray-400 text-sm bg-gray-800 py-1 px-2 rounded-lg">
                                {device}
                              </span>
                            ))}
                          </div>
                        </>
                      ))}
                  </div>

                  {/* Tools & Methods Section */}
                  {product.toolsMethods && (
                    <div>
                      <h4 className="text-md font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                        TESTING TOOLS & METHODS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.toolsMethods.map((tool, index) => (
                          <span
                            key={`tool-${index}`}
                            className="text-gray-400 text-sm">
                            {tool}
                            {index < product.toolsMethods!.length - 1 && " •"}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          : builtApps.map((project) => (
              <div
                key={`project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-green-500 hover:-translate-y-2 project-card">
                {/* Project Image */}
                <div className="overflow-hidden relative">
                  <img
                    src={
                      `${import.meta.env.BASE_URL}${project.image}` ||
                      "https://placehold.co/400x400?text=Image+Unavailable"
                    }
                    alt={project.title}
                    className="object-cover transition-transform duration-300 h-128 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={`tag-${index}`}
                        className="text-gray-400 text-sm bg-gray-800 py-1 px-2 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
