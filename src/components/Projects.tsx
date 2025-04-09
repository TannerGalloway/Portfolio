"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import projectsList from "../assets/projectsList.json";

const Projects: React.FC = function Projects() {
  return (
    <section className="py-20">
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
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 hover:border-green-500/50 transition-colors transition-transform duration-300 ease-in-out hover:-translate-y-2">
              {/* Project Image */}
              <div className="overflow-hidden relative">
                <img
                  src={project.image || "https://placehold.co/400x400"}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-green-500 text-black p-2 rounded-full">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors">
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
