import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";
import profileImage from "../../assets/vaishnavi_circle.png";

const quickLinksLeft = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
];

const quickLinksRight = [
  { name: "Projects", id: "work" },
  { name: "Stats", id: "stats" },
];

const socials = [
  {
    icon: <FiMail size={18} />,
    link: "mailto:your.email@gmail.com",
    label: "Email",
  },
  {
    icon: <FaGithub size={18} />,
    link: "https://github.com/vaishnavichaudhari910",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    link: "https://www.linkedin.com/in/vaishnavi-chaudhari-192099285/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 pt-12 pb-8 px-5 sm:px-8 md:px-12 lg:px-16 font-sans overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[30rem] h-[16rem] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, #8245ec, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Profile block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                src={profileImage}
                alt="Vaishnavi Chaudhari"
                className="w-10 h-10 rounded-full object-cover border border-[#8245ec]/40"
              />

              <h2 className="text-lg font-bold text-white">
                Vaishnavi Chaudhari
              </h2>
            </div>

            <p className="text-sm text-gray-400">
              Full Stack Developer
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Pune, Maharashtra
            </p>

            <a
              href="mailto:vaishnavichaudhari910@gmail.com"
              className="text-sm text-gray-400 hover:text-[#a855f7] transition-colors duration-300 mt-1 inline-block"
            >
              vaishnavichaudhari910@gmail.com
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
              Quick Links
            </h3>

            <div className="flex justify-center md:justify-start gap-10">
              <ul className="space-y-2.5">
                {quickLinksLeft.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="text-sm text-gray-400 hover:text-[#8245ec] transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2.5">
                {quickLinksRight.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="text-sm text-gray-400 hover:text-[#8245ec] transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
              Connect
            </h3>

            <div className="flex justify-center md:justify-start gap-3">
              {socials.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:text-white hover:border-[#8245ec]/60 hover:shadow-[0_0_15px_rgba(130,69,236,0.4)] transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-gray-400 hover:text-[#8245ec] hover:border-[#8245ec]/50 transition-colors duration-300"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 mt-6">
          © 2026 Vaishnavi Chaudhari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
