import React, { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { useEffect } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[4vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
  key={project.id}
  custom={project.id}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  onClick={() => handleOpenModal(project)}
  whileHover={{ y: -10, scale: 1.03 }}
  className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 transition-all duration-300"
>
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
  <div
    className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    onClick={handleCloseModal}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    className="relative w-full max-w-3xl max-h-[90vh] bg-[#111827] rounded-2xl border border-gray-700 overflow-hidden">      {/* Close Button */}
     <button
  onClick={handleCloseModal}
  className="absolute top-4 right-4 z-[100] bg-black/70 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
>
  ✕
</button>
      {/* Image */}
      <div className="h-64 sm:h-72 overflow-hidden">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="w-full h-full object-cover"
  />
</div>
      {/* Content */}
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-18rem)]">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {selectedProject.title}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-7">
          {selectedProject.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {selectedProject.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-900/40 text-purple-400 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
       <div className="mt-6 grid grid-cols-2 gap-3">
  <a
    href={selectedProject.github}
    target="_blank"
    rel="noopener noreferrer"
    className="py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold text-center"
  >
    View Code
  </a>

  <a
    href={selectedProject.webapp}
    target="_blank"
    rel="noopener noreferrer"
    className="py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold text-center"
  >
    Live Demo
  </a>
</div>
      </div>
    </motion.div>
  </div>
)}
    </section>
  );
};

export default Work;