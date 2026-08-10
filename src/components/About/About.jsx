import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profileImage from "../../assets/vaishnavi_circle.png";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0f] pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-14 md:pb-20 lg:pb-24 px-5 sm:px-8 md:px-12 lg:px-16 font-sans"
    >
      {/* Ambient background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Fine grid, faded at edges */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* Drifting purple aurora blob */}
        <motion.div
          className="absolute -top-24 -left-20 w-[24rem] h-[24rem] sm:w-[32rem] sm:h-[32rem] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #8245ec55, transparent 70%)" }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 30, -10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Drifting violet blob */}
        <motion.div
          className="absolute -bottom-32 -right-20 w-[22rem] h-[22rem] sm:w-[30rem] sm:h-[30rem] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #a855f740, transparent 70%)" }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Open To Work Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-start mb-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Open to Full Stack Developer Opportunities
          </span>
        </div>
      </motion.div>

      {/* Main Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white"
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-2 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-white to-purple-300 bg-clip-text text-transparent"
          >
            Vaishnavi Chaudhari
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="mt-5 text-lg sm:text-2xl md:text-3xl font-semibold text-[#8245ec]"
          >
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
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm sm:text-base md:text-lg leading-7 text-gray-400"
          >
            I am an MCA graduate and Full Stack Developer with 6 months of internship experience. I work with MERN Stack, Next.js, TypeScript, Docker, and PostgreSQL to build modern and scalable web applications.

          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center md:justify-start"
          >
            <motion.a
              href="https://drive.google.com/file/d/121tqU8IRjFv8w72brdG0UGYSatRn8M3N/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-7 py-3 rounded-full text-white text-base sm:text-lg font-bold transition-shadow duration-300"
              style={{
                background: "linear-gradient(90deg, #8245ec 0%, #a855f7 100%)",
                boxShadow: "0 0 10px #8245ec, 0 0 25px rgba(130,69,236,0.8)",
              }}
            >
              DOWNLOAD CV
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side — organic blob-shaped image, no Tilt/circle */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
            {/* Blob glow behind image */}
            <div
              className="absolute -inset-4 opacity-60 blur-2xl"
              style={{
                background: "radial-gradient(circle, #8245ec55, transparent 70%)",
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            />

            {/* Blob-shaped image */}
            <motion.div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                boxShadow: "0 0 40px rgba(130,69,236,0.3)",
              }}
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "40% 60% 70% 30% / 30% 60% 40% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={profileImage}
                alt="Vaishnavi Chaudhari"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Status pill, overlapping bottom-right of the blob */}
            <div className="absolute bottom-2 right-0 sm:right-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0f]/90 backdrop-blur-sm border border-purple-400/30 shadow-[0_0_15px_rgba(130,69,236,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-70"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-purple-100 whitespace-nowrap">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;