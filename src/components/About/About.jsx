import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/vaishnavi_circle.png';
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
  id="about"
  className="py-2 px-[7vw] md:px-[7vw] lg:px-[4vw] font-sans mt-6 md:mt-2 lg:mt-10"
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex flex-col-reverse md:flex-row justify-between items-center"
  >   {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vaishnavi Chaudhari
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
  sequence={[
     'MERN Stack Developer', 2000,
    'Full Stack Developer', 2000,
    'React Developer', 2000,
    'Node.js Developer', 2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer and MCA student.
             I specialize in the MERN stack and enjoy building modern, responsive, and user-friendly web applications. 
             I have worked on projects like AI SaaS platforms, portfolio websites, and real-world full stack applications. 
             With 3 months of internship experience, I have gained practical exposure to development workflows, teamwork, and real-time project execution.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/121CMtxrPlyRzqQsFfD_9tBlX0noZpcLL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Vaishnavi Chaudhari"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </motion.div>
    </section>
  );
};

export default About;