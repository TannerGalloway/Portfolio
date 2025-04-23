import React, { useState } from "react";
import projectsList from "../assets/projectsList.json";
import ProjectModal from "./Project-Modal";

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  videoUrl: string;
  codeUrl: string;
  liveUrl?: string;
};

const Projects: React.FC = function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <div className="flex items-center space-x-2 text-sm font-mono text-gray-400 mb-2">
          <div className="h-px w-5 bg-green-500"></div>
          <span>FEATURED WORK</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Projects Showcase
        </h2>
        <p className="text-gray-400 max-w-2xl">
          A collection of projects, showcasing my skills in various
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {/* Project Cards */}
        {projectsList.projects.map((project) => (
          <div
            key={`project-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="group overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-green-500 hover:-translate-y-2 project-card">
            {/* Project Image */}
            <div className="overflow-hidden relative">
              <img
                src={
                  `${import.meta.env.BASE_URL}${project.image}` ||
                  "https://placehold.co/400x400"
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
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
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
