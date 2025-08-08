import React from "react";
import { Heart } from "lucide-react";
import ProfilePic from "/tannerProfilePicture.jpg";

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
          Bridging Code and Quality
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Explore my journey through software testing and development.
        </p>
      </div>

      <div className="flex justify-between lg:gap-12">
        {/* Left column - Bio and Interests */}
        <div className="space-y-8 lg:w-1/2 card-container">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors duration-300 about-card">
            <p className="text-gray-400 mb-6">
              For the past 3 years, I've worked as a QA Engineer testing
              features for Xbox Game Studios and Windows OS. During this time,
              I've gained hands-on experience with functional, non-functional,
              exploratory testing, test planning, bug reporting, and cross-team
              collaboration across large-scale projects.
            </p>
            <p className="text-gray-400 mb-6">
              My work has given me appreciation for both the technical and human
              side of quality. I've learned how users interact with products and
              how to make those experiences smooth, stable, and enjoyable.
            </p>
            <p className="text-gray-400 mb-6">
              On the side, I build small projects, explore software engineering
              to deepen my understanding of the systems I test. It's a hands-on
              way for me to stay curious and continue growing as both a tester
              and a developer.
            </p>
            <p className="text-gray-400">
              Today, I bring a hybrid mindset to every project: part tester,
              part devloper who is always focused on quality.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors duration-300 about-card">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Heart className="mr-2 h-5 w-5 text-green-500" />
              Personal Interests
            </h3>
            <p className="text-gray-400 mb-4">
              When I'm not hunting for bugs, or coding, I enjoy exploring
              various interests such as:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded-md text-center">
                <div className="text-white font-medium">Travel</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-md text-center">
                <div className="text-white font-medium">Psychology</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-md text-center">
                <div className="text-white font-medium">Japanese Culture</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Profile image*/}
        <div className="space-y-6 hidden lg:block">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 w-fit h-fit hover:border-green-500 transition-colors duration-300 about-card">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img src={ProfilePic} alt="Profile Picture" loading="lazy" />
            </div>
            <h3 className="text-xl font-bold mb-2">Tanner Galloway</h3>
            <p className="text-green-500 mb-1">
              QA Engineer | Software Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
