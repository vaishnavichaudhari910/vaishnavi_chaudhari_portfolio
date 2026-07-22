import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 font-sans bg-skills-gradient clip-path-custom"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>

        <p className="text-gray-400 mt-5 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-7">
          A showcase of my technical skills, tools, and technologies developed
          through hands-on projects and practical experience in full stack
          development.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              className="h-full"
            >
              <div
                className="
                  bg-gray-900
                  border border-gray-700
                  rounded-2xl
                  p-5 sm:p-6 md:p-8
                  shadow-[0_0_20px_rgba(130,69,236,0.25)]
                  h-full
                "
              >
                {/* Category Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 text-center mb-6">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        border
                        border-gray-700
                        rounded-full
                        py-2
                        px-3
                        hover:border-[#8245ec]
                        transition-all
                        duration-300
                      "
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                      />

                      <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;