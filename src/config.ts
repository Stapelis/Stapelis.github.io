export const siteConfig = {
  name: "Thomas Stapelfeld",
  title: "Engineering student at ENSEEIHT",
  accentColor: "#1d4ed8",
  social: {
    email: "thomas.stapelfeld@etu.toulouse-inp.fr"
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
  aboutMe: "A paragraph describing yourself, your background, interests, and what you're passionate about. This appears in the About section of your portfolio."
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
      company: "IRIT",
      title: "Internship in the ACADIE team",
      dateRange: "May 2026 - June 2026",
      bullets: [
        "A REMPLIR"",
      ],
    },
    // ... autres expériences
  ],
  education: [
{
      school: "ENSEEIHT",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2026 - Now"
    },
  {
      school: "Prépa T²",
      dateRange: "2024-2026"
    },
    {
      school: "Lycée Bellevue",
      degree: "French Baccalauréat",
      dateRange: "2021-2024"
    },
    // ... autre formation
  ],
};
