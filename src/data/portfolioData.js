export const personalInfo = {
  name: "Bhavadharani S",
  title: "Computer Science Undergraduate | Full Stack & AI Enthusiast",
  bio: "Passionate Computer Science undergraduate dedicated to engineering modern full-stack web applications and intelligent AI solutions. Driven by curiosity and a commitment to writing clean, scalable, and impactful code.",
  email: "bhavadharini047@gmail.com",
  phone: "+91 8925433577",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/BHAVA-MS",
  linkedin: "https://www.linkedin.com/in/bhavadharini-s-2b0382324/",
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "3a34016d-9580-4eb6-bbb0-52d975ec703b",
  stats: [
    { label: "Current CGPA", value: "8.23", subtext: "B.E. Computer Science" },
    { label: "Batch", value: "2024 - 2028", subtext: "Dr. N.G.P. Tech" },
    { label: "Focus Areas", value: "Full-Stack & AI", subtext: "Web Development" },
    { label: "HSC Aggregate", value: "80%", subtext: "Class XII (2024)" }
  ]
};

export const education = [
  {
    id: "degree",
    degree: "B.E. in Computer Science and Engineering",
    institution: "Dr. N.G.P. Institute of Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "2024 – 2028",
    scoreLabel: "Current CGPA",
    score: "8.23",
    description: "Specializing in core computer science, software engineering principles, full-stack application development, and artificial intelligence integration.",
    highlights: ["Data Structures & Algorithms", "Full Stack Development", "Database Management Systems", "AI & Machine Learning Concepts"]
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    institution: "M.M.E.G. Matric Higher Secondary School",
    location: "Tamil Nadu",
    period: "Passout Year: 2024",
    scoreLabel: "Percentage",
    score: "80%",
    description: "Completed higher secondary education with strong analytical foundations in Mathematics, Physics, and Chemistry.",
    highlights: ["Mathematics & Science stream", "Consistent Academic Performance", "School Tech Club Member"]
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Advanced", icon: "Coffee" },
      { name: "Python", level: "Intermediate", icon: "FileCode" }
    ]
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" }
    ]
  },
  {
    title: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" }
    ]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB Atlas", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Environment",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "IntelliJ IDEA", level: "Advanced" },
      { name: "Postman", level: "Advanced" }
    ]
  }
];

export const projects = [
  {
    id: "ai-study-coach",
    title: "AI Personalized Study Coach",
    year: "2026",
    tagline: "AI-Powered Learning & Smart Recommendation Platform",
    shortDescription: "An intelligent web application that generates personalized study schedules, tailored learning paths, automated quiz assessments, and performance tracking using AI APIs.",
    longDescription: "The AI Personalized Study Coach addresses student burnout and inefficient study habits by leveraging generative AI to curate customized learning modules. It analyzes user pace, knowledge gaps, and target exam timelines to deliver step-by-step study plans with real-time feedback.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Python", "MySQL", "AI API"],
    category: "AI & Web Development",
    featured: true,
    highlights: [
      "Dynamic AI-driven study plan generation based on individual learning speed",
      "Automated quiz generation and interactive performance analytics",
      "Secure authentication and personalized progress dashboard",
      "MySQL database schema optimized for tracking learning milestones"
    ],
    links: {
      github: "https://github.com/BHAVA-MS",
      demo: "#"
    }
  },
  {
    id: "linkforge",
    title: "LinkForge – Smart URL Shortener & Analytics Platform",
    year: "2026",
    tagline: "MERN Stack URL Management with Advanced Real-Time Analytics",
    shortDescription: "Feature-rich URL shortening platform supporting custom aliases, instant QR code generation, click tracking analytics, and JWT-secured user dashboards.",
    longDescription: "LinkForge is built with the MERN stack to deliver high-performance URL redirection alongside granular engagement metrics. Users can generate branded custom short links, view real-time click counts and geographical insights, and download custom QR codes.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Vercel", "Render"],
    category: "Full Stack (MERN)",
    featured: true,
    highlights: [
      "Custom URL alias generation with fast collision-checked redirection",
      "Dynamic QR code generator for marketing and quick sharing",
      "Comprehensive analytics dashboard tracking clicks, devices, and timelines",
      "Secure JWT user authentication and production deployment via Vercel & Render"
    ],
    links: {
      github: "https://github.com/BHAVA-MS",
      demo: "#"
    }
  }
];

export const experiences = [
  {
    id: "skandhaguru-internship",
    role: "Web Development Intern",
    company: "Skandhaguru Enterprises LLP",
    location: "Coimbatore, Tamil Nadu",
    period: "2026 (15 Days Intensive)",
    type: "Internship",
    description: "Completed an immersive 15-day industry internship focused on corporate website design, end-to-end SDLC processes, and responsive web component development.",
    keyPoints: [
      "Actively participated in corporate client requirement gathering and UI/UX wireframing",
      "Engineered clean, responsive front-end components using modern HTML, CSS, and JavaScript",
      "Executed cross-browser compatibility testing and bug remediation prior to staging deployment",
      "Gained hands-on exposure to Software Development Life Cycle (SDLC) best practices and team workflows"
    ]
  }
];

export const achievements = [
  {
    id: "u-and-me-hackathon",
    title: "National Level \"U & Me Hackathon\"",
    event: "U & Me Hackathon @ CIT Coimbatore",
    institution: "Coimbatore Institute of Technology (CIT)",
    date: "August 23, 2025",
    type: "Hackathon",
    badgeText: "National Hackathon",
    badgeColor: "cyan",
    projectTitle: "Secure Data Management for NGOs",
    description: "Designed and prototyped a cybersecurity-focused data management solution for Non-Governmental Organizations to safeguard sensitive donor and beneficiary information."
  },
  {
    id: "isym-paper-presentation",
    title: "Paper Presentation: Personalized Study Coach",
    event: "National Level Technical Symposium I-SYM'26",
    institution: "Hindustan College of Engineering and Technology",
    date: "March 17, 2026",
    type: "Symposium",
    badgeText: "Paper Presentation",
    badgeColor: "indigo",
    projectTitle: "Personalized Study Coach Architecture",
    description: "Presented research and architectural design for an AI-driven personalized learning assistant at a national technical symposium, receiving commendation for application feasibility."
  },
  {
    id: "nptel-cloud-computing",
    title: "NPTEL Elite Silver Certification",
    event: "NPTEL Online Certification Exam",
    institution: "IIT / SWAYAM Platform",
    date: "2025/2026",
    type: "Certification",
    badgeText: "Elite Silver",
    badgeColor: "emerald",
    projectTitle: "Cloud Computing Mastery",
    description: "Earned the prestigious Elite Silver badge in Cloud Computing, demonstrating proficiency in cloud infrastructure, virtualization, resource scheduling, and distributed systems."
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
