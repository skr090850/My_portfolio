
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project1,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  linux,
  vb,
  xml,
  kali,
  java,
  flutter,
  cpp,
  c,
  android,
  python,
} from '../assets'


// Import Tekisky separately
import cimage from "../assets/company/cimage.png";
import school from "../assets/company/school.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fronted Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Mobile Application",
    icon: backend,
  },
  {
    title: "Web Application",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "xml",
    icon: xml,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "vb",
    icon: vb,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "linux",
    icon: linux
  },
  {
    name: "kali",
    icon: kali,
  },
  
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "10th (68%)",
    company_name: "H.P.D. high school, Arrah, Bihar",
    icon: school,
    iconBg: "#383E56",
    date: "Apr 2016 - Mar 2017",
    points: [
      "Hindi",
      "English",
      "Mathematics",
      "Social Sciences",
      "Science",
    ],
  },
  {
    title: "12th (68.6%)",
    company_name: "Sanjay Gandhi College, Arrah, Bihar",
    icon: school,
    iconBg: "#383E56",
    date: "Apr 2017 - Mar 2019",
    points: [
      "Physics",
      "Chemistry",
      "Mathematics",
    ],
  },
  {
    title: "B.C.A. (8.43 CGPA)",
    company_name: "Cimage Professional College, Patna, Bihar",
    icon: cimage,
    iconBg: "#383E56",
    date: "Jun 2022 - Present",
    points: [
      "Proficient in C, C++, Java, Core Java, JavaScript, Python, HTML, CSS, SQL, and VB.NET. Experienced with web development, Java Swing, and tools like Microsoft Office, Git, and Visual Studio Code. Familiar with networking concepts and certifications like A+, N+, and CCNA. Comfortable working with Windows and Linux operating systems.",
      "Participated in Code Combat, a college-level coding competition, where I successfully cleared the first round and am advancing further.",
      "Actively involved in the Chess Society, where I also progressed beyond the initial round in inter-college competitions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Vehicle Verified",
    description:
      "Traffic police verify documents via QR code scans, while owners present their QR codes. It streamlines document management and verification for both vehicle owners and law enforcement",
    tags: [
      {
        name: "XML",
        color: "blue-text-gradient",
      },
      {
        name: "JAVA",
        color: "white-text-gradient",
      },
      {
        name: "SqLite",
        color: "pink-text-gradient",
      },
      
    ],
    image: project1,
    source_code_link: "https://github.com/skr090850/Vehicle_Verified_App",
  },
  // {
  //   name: "GearXpert",
  //   description:
  //     "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "emailJs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Gsap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gearXpert,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "GoGroove-Ecommerce",
  //   description:
  //     "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "express",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "node",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
