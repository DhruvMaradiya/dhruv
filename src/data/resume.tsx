import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dhruv Maradiya",
  initials: "DM",
  url: "https://github.com/DhruvMaradiya",
  location: "Windsor, ON 🇨🇦",
  locationLink: "https://www.google.com/maps/place/windsor",
  description:
    "Engineer eager to work in a technical background or IT industry. I love building impactful solutions and exploring new technologies.",
  summary:
    "I am currently pursuing my Master of Applied Computing at the University of Windsor, preparing for roles like Software Development Engineer (SDE), Devops Engineer and UI/UX Developer. With a strong foundation in web application development, Systems Programming, and API development, I am passionate about creating user-centric designs and solving real-world problems through technology.",
  avatarUrl: "/me.jpg",
  skills: {
    "C, C++, Java, Python, JavaScript, Bash, Dart": {
      name: "Programming Languages",
      icon: "🧪", // Icon for Front-End Development
      color: " #4682B4", // Color for this category
    },
    "SQL, MYSQL, MSSQL, MongoDB": {
      name: "Database Management",
      icon: "🗄️", // Icon for Back-End Development
      color: "#14202E", // Color for this category
    },

    "ReactJS, NodeJS, Express JS, FastAPI, Flutter, Bootstrap 5": {
      name: "Framework",
      icon: "🏗", // Icon for Containerization
      color: "#091235", // Color for this category
    },
    "Git, GitHub, VS code, Postman, Docker, JIRA, Figma,Selenium, Android Studio, Microsoft 365": {
      name: "Tools:",
      icon: "🛠️", // Icon for Programming Languages
      color: "#4682B4", // Color for this category
    },
    "Linux, UNIX, Windows, MacOS": {
      name: "Operating System",
      icon: "📱", // Icon for Programming Languages
      color: "#2B4257", // Color for this category
    },

  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "dhruvmvr@gmail.com",
    tel: "+15195625473",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DhruvMaradiya",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruv-maradiya-34b2ba190/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MaradiyaDh35914",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:dhruvmvr@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "JD Infotech",
      href: "https://jdinfotech.net/",
      badges: [],
      location: "Junagadh🦁, Gujarat, ",
      title: "Front End Web Developer intern",
      logoUrl: "/jd-infotech.jpg",
      start: "Jan 2023",
      end: "May 2023",
      description:
      
      "Developed dynamic, user-centric front-end interfaces using ReactJS and Bootstrap 5, ensuring accessibility and seamless user experiences. \n Implemented and maintained NodeJS backend solutions while optimizing MongoDB database management and API interactions to enhance operational efficiency.",
    }
  ],
  education: [

    {
      school: "University of Windsor",
      href: "https://uwindsor.ca",
      degree: "Masters of Applied Computing",
      logoUrl: "/uwindsor.svg",
      start: "2024",
      end: "Present",
    },
    {
      school: "Charusat University",
      href: "https://www.charusat.ac.in/",
      degree: "Bachelor of Engineering - BE, Computer Engineering",
      logoUrl: "/dep.png",
      start: "2019",
      end: "2023",
    }
  ],


  projects: [
    {
      title: "Smart Home Systems",
      href: "https://winnovate-systems.github.io/smart-home/index.html",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "Developed a Smart Home System that streamlined real-time device control and automation, enhancing user convenience and operational efficiency.",
      technologies: [
        "Wokwi",
        "C/C++",
        "Figma",
        "Dart",
        "Github",
        "Flutter",
        "Android Studio",
        "Web Development",
        "MqttX"
      ],
      links: [
        {
          type: "Website",
          href: "https://winnovate-systems.github.io/smart-home/index.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DhruvMaradiya/smart-home-systems",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/user-attachments/assets/0b2ffed0-310b-48ef-9312-df35d5697c75",
    },



    {
      title: "Travelogram",
      href: "https://github.com/DhruvMaradiya/Travelogram_",
      dates: "Feb 2021 - Apr 2021",
      active: true,
      description:
        "Travelogram is a static Flutter app built to explore Flutter's capabilities, showcasing a ranking system for trending travel locations inspired by Twitter's approach.",
      technologies: [
        "Dart",
        "Flutter",
        "Firebase",
        "Figma",
        "Android studio",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DhruvMaradiya/Travelogram_",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/24b3606b-9e9c-4b1e-adb4-e5d9588e0227",
    },


    {
      title: "TapAndGo E-commerce",
      href: "https://github.com/DhruvMaradiya/tapandgo-ecommerce-website/blob/main/README.md",
      dates: "Jan 2023 - Mar 2023",
      active: true,
      description:
        "Developed a full-stack e-commerce app for university merchandise using the MERN stack, featuring an admin panel and fully integrated Stripe payment system for seamless transactions.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Bootstrap",
        "Cloudinary",
        "Figma",
        "vs code",
        "Postman",
        "cloudinary",
        "Stripe"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DhruvMaradiya/tapandgo-ecommerce-website/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/316021dd-e091-4eb6-87f5-eb536581f569",
    },



    {
      title: "Lifeshield",
      href: "https://github.com/DhruvMaradiya/Chronic_disease_prediction",
      dates: "May 2024 - Aug 2024",
      active: true,
      description:
        "Developed a Chronic Diseases Prediction & Visualization tool, utilizing data-driven insights to forecast health outcomes and display trends through intuitive visualizations.",
      technologies: [
        "ReactJS",
        "Flask",
        "Bootstrap",
        "PowerBI",
        "Postman API",
        "CORS",
        "Python",
        "ML algorithms",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DhruvMaradiya/Chronic_disease_prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cdp.png",
      video:
        "",
    },



    {
      title: "Tweeks",
      href: "https://github.com/DhruvMaradiya/sentiment-emotion-tweeks",
      dates: "Aug 2021 - Oct 2021",
      active: true,
      description:
        "Created a sentiment analysis application that analyzes Twitter data based on usernames and hashtags, using NLP to classify sentiments and visualize public opinion trends with a user-friendly interface.",
      technologies: [
        "NLTK",
        "Html",
        "Css",
        "Js",
        "Python",
        "Flask",
        "Twitter API",
        ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DhruvMaradiya/sentiment-emotion-tweeks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"https://github.com/user-attachments/assets/b933900e-8d75-4e99-85e1-3fd4b1739449"
    },



    
    {
      title: "Weather-X",
      href: "https://github.com/DhruvMaradiya/weather-x-project",
      dates: "Jul 2021 - Sep 2021",
      active: true,
      description:
        "Developed WeatherX, a Chrome extension integrated with a weather website, offering real-time weather updates and an intuitive user experience for easy weather tracking.",
      technologies: [
        "Html",
        "css",
        "Js",
        "NodeJS",
        "Chrome Extension",
        "ExpressJS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DhruvMaradiya/weather-x-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/c979a2fb-cb47-42a4-8298-1fb8028a139a",
    },
  ],

} as const;
