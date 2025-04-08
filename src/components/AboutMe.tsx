"use client";
import React from "react";
import { Heart } from "lucide-react";

const AboutMe: React.FC = function AboutMe() {
  return (
    <section id="about" className="py-20">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 text-sm font-mono text-gray-400 mb-2">
          <div className="h-px w-5 bg-green-500"></div>
          <span>ABOUT ME</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Developer Behind the Code
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Get to know more about my journey, experience, and what drives me as a
          software developer.
        </p>
      </div>

      <div className="flex justify-between lg:gap-12">
        {/* Left column - Bio and Interests */}
        <div className="space-y-8 lg:w-1/2">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-400 mb-6">
              I'm a software developer with a interest in how technology can
              solve real-world problems, which led me to pursue a degree in
              Computer Science. Since then, I have always been looking to
              improve my skills and build something bigger.
            </p>
            <p className="text-gray-400">
              What excites me most about software development is the constant
              evolution of technologies and the endless opportunities to learn
              and grow. I thrive in collaborative environments where I can
              contribute my technical expertise while also learning from others.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Heart className="mr-2 h-5 w-5 text-green-500" />
              Personal Interests
            </h3>
            <p className="text-gray-400 mb-4">
              Beyond coding, I'm passionate about a few other things that keep
              me inspired and motivated:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 p-3 rounded-md text-center">
                <div className="text-white font-medium">Travel</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-md text-center">
                <div className="text-white font-medium">Learning</div>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-md text-center">
                <div className="text-white font-medium">Psychology</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Profile image*/}
        <div className="space-y-6 hidden lg:block">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 w-fit h-fit hover:border-green-500/50 transition-colors">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/333x333"
                alt="Profile"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Tanner Galloway</h3>
            <p className="text-green-500 mb-1">Software Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
