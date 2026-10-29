export const siteConfig = {
  name: "Thomas Stapelfeld",
  title: "Senior Software Engineer",
  accentColor: "#1d4ed8",
  social: {
    email: "thomas.stapelfeld@etu.toulouse-inp.fr",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  // On sépare les contenus textuels par langue
  translations: {
    fr: {
      description: "Site portfolio de Thomas Stapelfeld",
      aboutMe: "Je suis étudiant en ingénierie et passionné par le développement logiciel.",
      skillsTitle: "Compétences",
      projectsTitle: "Projets",
      experienceTitle: "Expérience professionnelle",
      educationTitle: "Formation",
    },
    en: {
      description: "Portfolio website of Thomas Stapelfeld",
      aboutMe: "I am an engineering student passionate about software development.",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      experienceTitle: "Professional Experience",
      educationTitle: "Education",
    },
  },
  // Les compétences, projets, expériences et formations restent communs ou peuvent être traduits de la même manière
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    // ... autres expériences
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    // ... autre formation
  ],
};
