// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';


import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

import Clerk from './assets/tech_logo/Clerk.png';
import typescriptLogo from "./assets/tech_logo/typescript.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
// Experience Section Logo's
import uslogo from './assets/company_logo/uslogo.webp';

// Education Section Logo's
import IMRLogo from './assets/education_logo/IMRLogo.png';
import DNVKLogo from './assets/education_logo/DNVKLogo.jpeg';


// Project Section Logo's
import Prompta from './assets/work_logo/Prompta.png';
import QueryBot from './assets/work_logo/QueryBot.png';
import snake from './assets/work_logo/snake.png';
import DevPathAI from './assets/work_logo/DevPathAI.png';
import Neighbour_hub from './assets/work_logo/Neighbour_hub.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'TypeScript', logo: typescriptLogo },
{ name: 'Next.js', logo: nextjsLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Next.js', logo: nextjsLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Clerk', logo: Clerk},
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: uslogo,
      role: "MERN Stack Internship",
      company: "UpToSkills",
      date: "January 2026 - July 2026",
      desc: "Worked as a Full Stack Developer Intern using the MERN stack, contributing to the development of responsive and user-friendly web applications. Assisted in building frontend components with React and developing backend APIs using Node.js and Express.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "PostgreSql",

      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: IMRLogo,
      school: "KCES Institute of Management And Research,Jalgaon",
      date: "June 2021 - June 2026",
      grade: "9.65 CGPA",
     desc: "Completed an Integrated Master of Computer Applications (IMCA) from KCES Institute of Management and Research, Jalgaon, with a CGPA of 9.63. Developed a strong foundation in Data Structures, Algorithms, DBMS, OOP, and Web Development while gaining practical experience in MERN Stack development through real-world projects." ,   
     degree: "Integrated Master of Computer Applications - IMCA",
    },
    {
      id: 1,
      img: DNVKLogo,
      school: "Dhanaji Nana Vidyalaya,Khiroda",
      date: "February 2021",
      grade: "87.67%",
      desc:"Completed Higher Secondary Education (12th) from Dhanaji Nana Vidyalaya, Khiroda with 87.67%. Strengthened core knowledge in subjects like Mathematics and Science, building a solid academic base for pursuing computer applications. Developed analytical thinking, problem-solving skills, and a keen interest in technology and programming.",
        degree: "12th",
    },
    {
      id: 2,
      img: DNVKLogo,
      school: "Dhanaji Nana Vidyalaya,Khiroda",
      date: "March 2019",
      grade: "86.20%",
      desc: "Completed Secondary School (10th) from Dhanaji Nana Vidyalaya, Khiroda with 86.20%. Built a strong academic foundation in core subjects including Mathematics, Science, and English. Developed analytical thinking, discipline, and problem-solving skills, which laid the groundwork for further studies in computer science and technology.",
      degree: "10th",
    },
   
  ];
  
  export const projects = [
    {
      
  id: 0,
  title: "Prompta AI | Full-Stack AI Content and Media SaaS Platform",
  description:
    "Developed an AI-powered SaaS platform offering 5+ features including article writing, image generation, background removal, resume analysis, and object removal. Built a responsive and intuitive frontend using React, Tailwind CSS, and React Router with 10+ user-facing screens. Implemented secure authentication and subscription-based access (free and premium) using Clerk. Integrated Gemini APIs for AI content generation and managed image uploads and processing using Cloudinary and Multer.",
  image: Prompta,
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Node JS",
    "Express JS",
    "PostgreSQL",
    "Clerk",
    "Gemini API",
    "Cloudinary",
  ],
  github: "https://github.com/vaishnavichaudhari910/Prompta_AI",
  webapp: "https://prompta-ai-eight.vercel.app/",
},
   {
  id: 1,
  title: "QueryBot AI | Chat and Image Generation Platform",
  description:
    "Engineered an AI-driven chat and image generation platform using the MERN stack, enabling real-time conversations and AI-assisted image creation. Integrated Gemini APIs to generate intelligent responses while managing chat history and media outputs efficiently for multiple users. Implemented JWT-based authentication and secured APIs, along with a credit-based premium subscription model using Stripe payments and webhook handling for monetization.",
  image: QueryBot,
  tags: [
    "React JS",
    "Node.js",
    "Express",
    "MongoDB",
    
    "JavaScript",
    "JWT",
    "Gemini API",
    "Stripe",
  ],
  github: "https://github.com/vaishnavichaudhari910/QueryBot",
  webapp: "https://query-bot-tawny.vercel.app/",
},
    // {
    //   id: 2,
    //   title: "Snake Game",
    //   description:
    //     "A classic Snake Game built using JavaScript, where players control the snake to eat food, grow longer, and avoid collisions.",
    //   image: snake,
    //   tags: [ "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/vaishnavichaudhari910/Snake_Game",
    //   webapp: "https://snake-game-real.netlify.app/",
    // },
    {
  id: 2,
  title: "DevPath AI | AI-Powered Developer Career Guidance Platform",
  description:
    "Built an AI-powered career guidance platform that helps developers analyze resumes, identify skill gaps, generate personalized learning roadmaps, and discover relevant job opportunities. Integrated Google Gemini AI, GitHub REST API, JWT Authentication, and PDF resume parsing to provide ATS scoring, GitHub insights, AI career coaching, and interview preparation. Created a responsive dashboard using React, Tailwind CSS, ShadCN UI, Framer Motion, Redux Toolkit, and MongoDB with progress tracking, personalized recommendations, and light/dark theme support.",
  image: DevPathAI,
  tags: [
    "React JS",
    "Tailwind CSS",
    "ShadCN UI",
    "Framer Motion",
    "Redux Toolkit",
    "Node JS",
    "Express JS",
    "MongoDB",
    "JWT",
    "Gemini API",
    "GitHub API",
    "Multer",
    "PDF Parse",
  ],
  github: "https://github.com/vaishnavichaudhari910/developer-career-gps",
  webapp: "https://developer-career-gps.vercel.app/",
},
 
  {
  id: 3,
  title: "NeighbourHub AI",
  description:
    "A full-stack smart community platform where citizens can discover and book trusted local services, while providers manage their offerings and bookings in real time. Features role-based dashboards for citizens and providers, a 4-step booking flow with mock payment, booking accept/reject system, Cloudinary avatar uploads, and light/dark theme support.",
  image: Neighbour_hub,
  tags: [
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "TanStack Query",
    "Cloudinary",
    "Vercel",
  ],
  github: "https://github.com/vaishnavichaudhari910/neighbourhub-ai",
  webapp: "https://neighbourhub-ai-w19z.vercel.app/",
},
];