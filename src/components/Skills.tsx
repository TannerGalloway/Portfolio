"use client";

import type React from "react";
import { Code, Server, Layout } from "lucide-react";
import skillsList from "../assets/skillsList.json";

const Skills: React.FC = function Skills() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="h-6 w-6" />;
      case 1:
        return <Server className="h-6 w-6" />;
      case 2:
        return <Code className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 text-sm font-mono text-gray-400 mb-2">
          <div className="h-px w-5 bg-green-500"></div>
          <span>EXPERTISE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl">
          An overview of my technical skills, tools, and technologies that I
          have experience with.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsList.skills.map((skill, index) => (
          <div
            key={`card ${index}`}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors duration-300 skill-card">
            <div className="flex items-center mb-4">
              <div className="mr-3 text-green-500">{getIcon(index)}</div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>

            <ul className="space-y-2">
              {skill.items.map((item, index) => (
                <li
                  key={`skill ${index}`}
                  className="flex items-center text-gray-400">
                  <div className="h-1 w-1 rounded-full bg-green-500 mr-2"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
