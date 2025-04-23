import { useEffect, useRef } from "react";
import { X, Code, ExternalLink } from "lucide-react";
import type { Project } from "./Projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;
  console.log(project.videoUrl);
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in">
      <div
        ref={modalRef}
        className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-4xl overflow-hidden scale-in">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Video */}
        <div className="aspect-video bg-black relative">
          {project.videoUrl ? (
            <iframe
              allow="fullscreen"
              height="100%"
              src={project.videoUrl}
              width="100%"></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <p>No video available for this project</p>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-6">
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-transform hover:scale-105 active:scale-95">
              <Code size={16} />
              View Code
            </a>
            {project.liveUrl !== "#" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-black rounded-md transition-transform hover:scale-105 active:scale-95">
                <ExternalLink size={16} />
                View Live Site
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
