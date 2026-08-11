import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    y: 20,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      delay: (i % 3) * 0.15,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <section
      id="education"
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
              "radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 30%, black 30%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full blur-[130px] opacity-30"
          style={{ background: "radial-gradient(circle, #8245ec, transparent 70%)" }}
          animate={{ x: [0, 30, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#a855f7] uppercase">
          Academic background
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Education
        </h2>
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-[#8245ec] to-transparent mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <p className="text-gray-400 mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7">
          My education has been a journey of learning and development. Here
          are the details of my academic background.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Base track line */}
        <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

        {/* Animated glowing progress line */}
        <motion.div
          className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-0 w-px origin-top"
          style={{
            background: "linear-gradient(to bottom, #8245ec, #a855f7)",
            boxShadow: "0 0 12px #8245ec",
            height: "100%",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.1 }}
        />

        <div className="flex flex-col gap-12 sm:gap-16">
          {education.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={edu.id} className="relative w-full">
                {/* Timeline dot */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 top-6 z-10">
                  <span className="relative flex h-4 w-4 sm:h-6 sm:w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8245ec] opacity-50" />
                    <span className="relative inline-flex items-center justify-center h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-[#0a0a0f] border-2 border-[#8245ec] overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </span>
                  </span>
                </div>

                {/* Card row */}
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex w-full ${
                    isEven ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`
                      w-[calc(100%-2.75rem)] ml-11
                      sm:w-[46%] sm:ml-0
                      max-w-full box-border
                      relative rounded-2xl p-4 sm:p-6 md:p-7
                      bg-white/[0.03] backdrop-blur-sm
                      border border-white/10
                      transition-all duration-300
                      hover:border-[#8245ec]/50
                      hover:shadow-[0_0_30px_rgba(130,69,236,0.25)]
                    `}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-white/90 flex-shrink-0">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white break-words">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xs sm:text-sm text-gray-400 break-words">
                          {edu.school}
                        </h4>
                        <p className="text-[10px] sm:text-xs font-mono text-[#a855f7] mt-0.5">
                          {edu.date}
                        </p>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-[11px] sm:text-sm font-semibold text-[#c9a9f7] bg-[#8245ec]/10 border border-[#8245ec]/30 rounded-full px-2.5 sm:px-3 py-1">
                      Grade: {edu.grade}
                    </div>

                    {/* Description */}
                    <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-400 leading-6 break-words">
                      {edu.desc}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;