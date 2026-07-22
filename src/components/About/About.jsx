import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/vaishnavi_circle.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 sm:py-10 md:py-14 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-16 mt-8 font-sans"
    >
      {/* Open To Work Badge */}
      <div className="flex justify-center md:justify-start mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-green-500/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>

          <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Open to Full Stack Developer Opportunities
          </span>
        </div>
      </div>

      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Vaishnavi Chaudhari
          </h2>

          {/* Typing Animation */}
          <h3 className="mt-5 text-lg sm:text-2xl md:text-3xl font-semibold text-[#8245ec]">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>

          {/* About */}
          <p className="mt-6 text-sm sm:text-base md:text-lg leading-7 text-gray-400">
            I am a passionate Full Stack Developer and MCA graduate. I
            specialize in the MERN stack and enjoy building modern,
            responsive, and user-friendly web applications. I have worked on
            projects like AI SaaS platforms, portfolio websites, and
            real-world full stack applications. With 6 months of internship
            experience, I have gained practical exposure to development
            workflows, teamwork, and real-time project execution.
          </p>

          {/* Resume Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1WPPxTKtZMNs4KAblRbdHC1UflOc8n59x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full text-white text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #8245ec 0%, #a855f7 100%)",
                boxShadow:
                  "0 0 10px #8245ec, 0 0 25px rgba(130,69,236,0.8)",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="
              w-56 h-56
              sm:w-72 sm:h-72
              md:w-[24rem] md:h-[24rem]
              lg:w-[30rem] lg:h-[30rem]
              border-4 border-purple-700
              rounded-full
            "
          >
            <img
              src={profileImage}
              alt="Vaishnavi Chaudhari"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </motion.div>
    </section>
  );
};

export default About;