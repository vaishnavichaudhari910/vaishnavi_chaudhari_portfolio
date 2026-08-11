import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiUser,
  FiCode,
  FiBriefcase,
  FiFolder,
  FiBookOpen,
  FiActivity,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About", icon: FiUser },
  { id: "skills", label: "Skills", icon: FiCode },
  { id: "experience", label: "Experience", icon: FiBriefcase },
  { id: "work", label: "Projects", icon: FiFolder },
  { id: "education", label: "Education", icon: FiBookOpen },
  { id: "stats", label: "Stats", icon: FiActivity },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-5 sm:px-8 md:px-[7vw] lg:px-[4vw] ${
        isScrolled
          ? "bg-[#0a0a0f]/70 backdrop-blur-md border-b border-white/5 shadow-[0_4px_20px_rgba(130,69,236,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-4 sm:py-5 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="text-base sm:text-lg font-semibold cursor-pointer font-mono"
          onClick={() => handleMenuItemClick("about")}
        >
          <span className="text-[#4811a8]">&lt;</span>
          <span className="text-white">Vaishnavi</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Chaudhari</span>
          <span className="text-[#8245ec]">&gt;</span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 ml-auto mr-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {item.label}
                </button>

                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-3 right-3 h-[2px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #8245ec, #a855f7)",
                      boxShadow: "0 0 8px #8245ec",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Social Links */}
        <div className="hidden md:flex gap-3">
          <motion.a
            whileHover={{ y: -2, scale: 1.1 }}
            href="https://github.com/vaishnavichaudhari910"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaGithub size={22} />
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.1 }}
            href="https://www.linkedin.com/in/vaishnavi-chaudhari-192099285/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#8245ec]"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden rounded-2xl mb-4 bg-[#0e0e14]/95 backdrop-blur-lg border border-[#8245ec]/20 shadow-[0_10px_40px_rgba(130,69,236,0.15)]"
          >
            <ul className="flex flex-col py-3">
              {menuItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-white bg-[#8245ec]/10 border-l-2 border-[#8245ec]"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-6 py-4 border-t border-white/5">
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="https://github.com/vaishnavichaudhari910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#8245ec] transition-colors duration-300"
              >
                <FaGithub size={22} />
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="https://www.linkedin.com/in/vaishnavi-chaudhari-192099285/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#8245ec] transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

