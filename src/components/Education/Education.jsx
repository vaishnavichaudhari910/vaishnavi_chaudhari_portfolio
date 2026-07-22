import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-28 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-5 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-5 md:left-1/2 top-0 h-full w-1 bg-gray-500 md:-translate-x-1/2"></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className={`relative flex mb-12 ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-5 md:left-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border-4 border-[#8245ec] rounded-full -translate-x-1/2 flex items-center justify-center z-20">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full md:w-[42%] ml-14 md:ml-0 p-5 sm:p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-[0_0_20px_rgba(130,69,236,0.25)] transition duration-300 hover:scale-[1.02]
              
              ${
                index % 2 === 0
                  ? "md:mr-auto md:ml-16"
                  : "md:ml-auto md:mr-16"
              }`}
            >
              {/* Top */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-sm text-gray-300">
                    {edu.school}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-5 text-purple-400 font-semibold">
                Grade : {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-400 text-sm sm:text-base leading-7">
                {edu.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;