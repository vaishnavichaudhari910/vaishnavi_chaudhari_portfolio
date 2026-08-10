import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const categoryVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0f] py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 font-sans"
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full blur-[130px] opacity-40"
          style={{ background: "radial-gradient(circle, #8245ec, transparent 70%)" }}
          animate={{ x: [0, 40, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Section Title */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#a855f7] uppercase">
          What I work with
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Skills
        </h2>
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <p className="text-gray-400 mt-5 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-7">
          A showcase of my technical skills, tools, and technologies developed
          through hands-on projects and practical experience in full stack
          development.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1200}
              scale={1.01}
              transitionSpeed={1200}
              gyroscope={true}
              className="h-full"
            >
              <div
                className="
                  relative h-full
                  bg-white/[0.03]
                  backdrop-blur-sm
                  border border-white/10
                  rounded-2xl
                  p-5 sm:p-6 md:p-8
                  transition-all duration-300
                  hover:border-[#8245ec]/50
                  hover:shadow-[0_0_30px_rgba(130,69,236,0.2)]
                "
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-[#8245ec]/10 border border-[#8245ec]/30 text-[#c9a9f7]">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skills */}
                <motion.div
                  className="flex flex-wrap gap-2.5 sm:gap-3"
                  variants={categoryVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{
                        y: -4,
                        borderColor: "#8245ec",
                        boxShadow: "0 6px 20px rgba(130,69,236,0.3)",
                      }}
                      className="
                        flex items-center gap-2
                        border border-white/10
                        bg-white/[0.02]
                        rounded-full
                        py-2 px-3.5
                        cursor-default
                        transition-colors duration-300
                      "
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                      <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;