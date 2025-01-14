import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "MELBIN SUNNY",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate and versatile Full Stack Developer with expertise in building scalable, user-focused applications. Proficient in both front-end and back-end technologies",
};

export const PROJECTS = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using React.js , featuring a comprehensive product catalog, shopping cart.",
    image: projectImage1,
    githubLink: "https://github.com/MELBINn/Ekart",
  },
  {
    id: 2,
    name: "Blog application",
    description:
    "A blogging platform developed with React.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, and user authentication.",
    
    image: projectImage2,
    githubLink: "https://github.com/MELBINn/blogAPP",
  },
  {
    id: 3,
    name: "Netflix Clone",
    description:
      "A fully responsive and interactive streaming platform replica, mimicking Netflix's core functionalities and user experience.",
    image: projectImage3,
    githubLink: "https://github.com/MELBINn/netflix",
  },
  {
    id: 4,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage4,
    githubLink: "https://github.com/MELBINn/Ekart",
  },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: projectImage5,
  //   githubLink: "https://github.com/MELBINn/Ekart",
  // },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/MELBINn/Ekart",
  // },
];

export const BIO = [
  // "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  // "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  // "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
  // 
  "I am a dedicated web developer specializing in React and the MERN stack which includes MongoDB, Express.js, React, and Node.js. With a strong foundation in building and deploying interactive websites, I thrive on creating responsive, user-friendly applications. My expertise lies in developing scalable front-end interfaces and integrating seamless back-end solutions, ensuring a complete end-to-end user experience. I am passionate about clean code, continuous learning, and leveraging technology to solve real-world challenges."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1 year",
  },
  {
    icon: <FaHtml5 className="text-4xl text-white lg:text-5xl" />,
    name: "HTML",
    experience: "1 year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1 year",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Javascript",
    experience: "1 year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1 year",
  },
  {
    icon: <IoLogoCss3 className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "CSS",
    experience: "1 year",
  },
  {
    icon: <SiRedux  className="text-4xl text-white lg:text-5xl" />,
    name: "Redux",
    experience: "1 year",
  }
];

export const EXPERIENCES = [
  {
    title: "Web developer",
    company: "Altos technologies",
    duration: "oct 2024 - Present",
    description:
      "As the web Developer, I am currently working on developing the front-end of an e-commerce application using React and Tailwind CSS. I created a modern, responsive, and user-friendly interface to provide a seamless shopping experience.Leveraging Tailwind CSS,I ensured efficient styling and a consistent design across the application."},
  {
    title: "junior full-stack developer",
    company: "Soften technologies",
    duration: "june 2023 - November 2023",
    description:
      // "At soften,I focused on developing and maintained responsive, user-friendly front-end interfaces using technologies like React, HTML, CSS, and JavaScript.Built and integrated APIs using Node.js and Express to streamline data flow.",
      "At Soften, I focused on developing and maintaining responsive, user-friendly front-end interfaces using technologies like React, HTML, CSS, and JavaScript. Additionally, I built and integrated APIs using Node.js and Express to streamline data flow. During my time there, I worked on two significant projects. The first was an e-commerce application, where I designed and developed a responsive and intuitive user interface to ensure a seamless browsing and shopping experience. I also integrated APIs to handle product listings, user authentication, and cart functionalities. The second project was a blog application, where I created an interactive platform for users to create, edit, and manage blog posts. This involved integrating APIs to manage user accounts, enable dynamic content rendering, and support user engagement through comments and feedback features.",
  },
  // {
  //   title: "Junior Web Developer",
  //   company: "Bright Future Technologies",
  //   duration: "August 2014 - January 2016",
  //   description:
  //     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  // },
];

export const EDUCATION = [
  {
    degree: "Diploma in Computer engineering",
    institution: "GPTC",
    duration: "September 2019 - June 2022",
    description:
      "Gained foundational knowledge in computer systems, software development, and networking, with practical experience in programming, troubleshooting, and project implementation.",
  },
  // {
  //   degree: "Bachelor of Science in Information Technology",
  //   institution: "University of California, Berkeley",
  //   duration: "September 2008 - June 2012",
  //   description:
  //     "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/MELBINn",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/melbin-sunny/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
