import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

/* Inline icons — avoids lucide-react version/export mismatches */
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.79 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.76.11 3.05.74.8 1.19 1.85 1.19 3.11 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .3.21.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: (i % 3) * 0.12,
      ease: "easeOut",
    },
  }),
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0a0a0f] pt-4 sm:pt-6 md:pt-8 pb-16 md:pb-24 px-5 sm:px-8 md:px-12 lg:px-16 font-sans"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full blur-[130px] opacity-30"
          style={{ background: "radial-gradient(circle, #8245ec, transparent 70%)" }}
          animate={{ x: [0, 40, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 md:mb-16"
      >
        <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#a855f7] uppercase">
          What I've built
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Projects
        </h2>
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <p className="text-gray-400 mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => handleOpenModal(project)}
            whileHover={{ y: -6 }}
            className="
              group relative rounded-2xl overflow-hidden cursor-pointer
              bg-white/[0.03] backdrop-blur-sm
              border border-white/10
              transition-all duration-300
              hover:border-[#8245ec]/60
              hover:shadow-[0_0_35px_rgba(130,69,236,0.3)]
            "
          >
            {/* Image with hover overlay */}
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent opacity-80" />

              {/* View project overlay, appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#8245ec] text-white text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(130,69,236,0.6)] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                  View Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 truncate">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#8245ec]/10 border border-[#8245ec]/30 text-[11px] sm:text-xs font-medium text-[#c9a9f7] rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="inline-block text-[11px] sm:text-xs font-medium text-gray-500 px-1.5 py-1">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg sm:max-w-2xl max-h-[92vh] bg-[#0e0e14] rounded-2xl border border-[#8245ec]/30 shadow-[0_0_50px_rgba(130,69,236,0.25)] overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                aria-label="Close"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[100] bg-black/60 hover:bg-[#8245ec] w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </button>

              {/* Image */}
              <div className="relative h-52 sm:h-72 overflow-hidden flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 top-0 h-52 sm:h-72 bg-gradient-to-t from-[#0e0e14] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7 overflow-y-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>

                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-7">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#8245ec]/10 border border-[#8245ec]/30 text-[#c9a9f7] px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/15 bg-white/[0.03] hover:border-[#8245ec]/50 text-white text-sm font-semibold transition-colors duration-300"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View Code
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-white text-sm font-semibold transition-shadow duration-300"
                    style={{
                      background: "linear-gradient(90deg, #8245ec 0%, #a855f7 100%)",
                      boxShadow: "0 0 15px rgba(130,69,236,0.5)",
                    }}
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;