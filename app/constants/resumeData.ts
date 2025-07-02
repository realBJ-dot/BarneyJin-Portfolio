interface ResumeInfo {
  basics: {
    name: string;
    nickname: string;
    title: string;
    location: string;
    email: string;
    profiles: {
      network: string;
      url: string;
    }[];
  };
  education: {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    courses: string[];
  }[];
  skills: {
    name: string;
    keywords: string[];
  }[];
  work: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }[];
}

export const resumeData: ResumeInfo = {
  basics: {
    name: "Peiyuan Jin",
    nickname: "Barney",
    title: "Software Engineer & Full-Stack Developer",
    location: "Champaign, Illinois",
    email: "realbdotjdot@gmail.com",
    profiles: [
      {
        network: "GitHub",
        url: "https://github.com/realBJ-dot"
      },
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/barneyjin"
      }
    ]
  },
  education: [
    {
      institution: "University of Illinois at Urbana-Champaign (UIUC)",
      area: "Computer Science",
      studyType: "Master",
      startDate: "Spring 2024",
      endDate: "Present",
      courses: [
        "Fault Tolerant System",
        "Computer System Organization",
        "Large Language Models"
      ]
    },
    {
      institution: "University of Illinois at Urbana-Champaign (UIUC)",
      area: "Mathematics and Computer Science",
      studyType: "Bachelor of Science",
      startDate: "Fall 2019",
      endDate: "Summer 2023",
      courses: [
        "Data Structure",
        "Data Analytics",
        "Algorithms",
        "Linear Algebra",
        "Database Design",
        "Computer System Organization"
      ]
    }
  ],
  skills: [
    {
      name: "Frontend Development",
      keywords: ["React", "TypeScript", "Next.js", "Flutter", "CSS", "HTML"]
    },
    {
      name: "Backend Development",
      keywords: ["Node.js", "Python", "Java", "Firebase", "RESTful API"]
    },
    {
      name: "Cloud & DevOps",
      keywords: ["AWS", "Firebase", "Docker", "Jenkins", "Terraform"]
    },
    {
      name: "Mobile Development",
      keywords: ["Flutter", "iOS Development", "Swift", "Android Studio"]
    }
  ],
  work: [
    {
      company: "EngineeringPeople",
      position: "Staff Software Engineer",
      startDate: "Summer 2024",
      endDate: "Present",
      highlights: [
        "Leading the development of Go Birdie Go, a revolutionary golf coaching app",
        "Architecting full-stack solutions using Flutter and Firebase",
        "Managing development lifecycle from design to deployment"
      ]
    },
    {
      company: "John Deere",
      position: "Software Development Engineer",
      startDate: "Summer 2022",
      endDate: "Spring 2024",
      highlights: [
        "Developed enterprise-level web applications for internal HR management",
        "Implemented data analytics solutions for improved business insights",
        "Led infrastructure modernization initiatives including containerization and CI/CD",
        "Optimized application hosting and deployment strategies"
      ]
    }
  ]
}; 