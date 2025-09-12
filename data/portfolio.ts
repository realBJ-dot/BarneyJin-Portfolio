import { PortfolioItem } from '@/types/portfolio';

// About/Personal section
export const aboutItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'BARNEY JIN',
    subtitle: 'Full-Stack Software Engineer',
    description: 'Passionate software engineer with expertise in modern web technologies, mobile development, and enterprise solutions. Currently pursuing MS Computer Science at University of Illinois. Proven track record at John Deere and co-founder experience at EngineeringPeople. Specialized in React, NextJS, Python, Java, and cloud technologies including AWS, Firebase, and Terraform.',
    category: 'Software Engineering',
    stats: [
      { label: 'Experience', value: '3+ Years' },
      { label: 'Languages', value: '10+' },
      { label: 'Projects', value: '15+' }
    ],
    image: './images/Man-in-Lecture.JPEG',
    technologies: ['JavaScript', 'Python', 'React', 'NextJS', 'Java', 'TypeScript', 'AWS', 'Firebase'],
    link: 'mailto:peiyuan3@illinois.edu',
    github: 'https://github.com/realBJ-dot'
  }
];

// Jobs/Professional Experience section
export const jobItems: PortfolioItem[] = [
  {
    id: '2',
    title: 'GO BIRDIE GO',
    subtitle: 'Advanced Golf Analytics Platform',
    description: 'Co-founded and developed the ultimate golf putting app at Advanced Cad Cam Service (EngineeringPeople). Built robust UI components using Dart\'s material library with customized backend API endpoints using Firebase & Cloud Firestore for seamless user data management. Designed and integrated Firebase Cloud Functions to maintain subscription database integrity.',
    category: 'Full-Stack Development',
    stats: [
      { label: 'Role', value: 'Co-Founder' },
      { label: 'Tech Stack', value: 'Dart + Firebase' },
      { label: 'Duration', value: 'Sep 2024 - Present' }
    ],
    image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Dart', 'Firebase', 'Cloud Firestore', 'Material UI', 'Cloud Functions'],
    link: 'https://www.gobirdiego.com/',
    github: '#'
  },
  {
    id: '3',
    title: 'JOHN DEERE APPLICATIONS',
    subtitle: 'Enterprise Software Solutions',
    description: 'Senior developer and architect for critical Tractor Applications at John Deere. Designed infrastructure using Terraform on AWS, built CI/CD pipelines with Jenkins, and hosted NextJS applications. Implemented HR API endpoints with OAuth 2.0 authentication and developed full-stack security access control applications with advanced state management.',
    category: 'Enterprise Development',
    stats: [
      { label: 'Impact', value: '$30K+ Saved' },
      { label: 'Performance', value: '174.9 hours' },
      { label: 'Duration', value: 'July 2023 - Jan 2024' }
    ],
    image: 'https://images.unsplash.com/photo-1581091870621-dde7866c29d5?q=80&w=1200&auto=format&fit=crop',
    technologies: ['NextJS', 'Terraform', 'AWS', 'Jenkins', 'OAuth 2.0', 'TanStack Query', 'Prisma'],
    link: 'https://deere.com'
  },
];

// Education section
export const educationItems: PortfolioItem[] = [
  {
    id: '7',
    title: 'MS COMPUTER SCIENCE',
    subtitle: 'University of Illinois at Urbana-Champaign',
    description: 'Currently pursuing Master of Computer Science with focus on Generative AI for Software Engineering, Operating System Design, and Cloud Networking. Engaged in cutting-edge research projects including Fault Tolerant System Design for Autonomous Vehicles and Extended Empirical Study on Fuzz4ALL (Universal Fuzzing with Large Language Models).',
    category: 'Graduate Education',
    stats: [
      { label: 'GPA', value: '3.8/4.0' },
      { label: 'Duration', value: 'Jan 2024 - May 2025' },
      { label: 'Research', value: '2 Projects' }
    ],
    image: './images/profile.png',
    technologies: ['Fault Tolerant Systems', 'Computer System Organization', 'Large Language Models', 'Autonomous Vehicles', 'Universal Fuzzing'],
    link: 'https://cs.illinois.edu',
    github: 'https://github.com/realBJ-dot'
  },
  {
    id: '8',
    title: 'BS MATHEMATICS & CS',
    subtitle: 'University of Illinois at Urbana-Champaign',
    description: 'Bachelor of Science in Mathematics and Computer Science with minor in Statistics. Served as Teaching Assistant for CS125 (Intro to CS) and CS222 (Software Programming Studio). Strong foundation in Data Structure, Data Analytics, Algorithms, Linear Algebra, Database Design, and Computer System Organization.',
    category: 'Undergraduate Education',
    stats: [
      { label: 'GPA', value: '3.6/4.0' },
      { label: 'Duration', value: 'Aug 2019 - May 2023' },
      { label: 'Teaching', value: 'CS125, CS222' }
    ],
    image: './images/Man-in-Lecture.JPEG',
    technologies: ['Java', 'Python', 'JavaScript', 'Android Studio', 'RESTful API', 'Data Analytics', 'Linear Algebra'],
    link: 'https://math.illinois.edu',
    github: 'https://github.com/realBJ-dot'
  }
];

// Projects section
export const projectItems: PortfolioItem[] = [
  {
    id: '4',
    title: 'PORNO! PORN BLOCKER',
    subtitle: 'Open-Source Content Filter',
    description: 'Created an innovative website tool using advanced porn-detection algorithms that can determine if a link contains adult content. Developed an Android app with Google Chrome extension integration, serving thousands of downloads across multiple platforms. Features real-time content analysis and user-friendly interface.',
    category: 'Open Source Project',
    stats: [
      { label: 'Downloads', value: '1000+' },
      { label: 'Platforms', value: 'Multiple' },
      { label: 'Duration', value: 'Apr 2021 - Present' }
    ],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Machine Learning', 'Android', 'Chrome Extension', 'Content Analysis', 'API Development'],
    link: 'https://github.com/realBJ-dot/porno-blocker',
    github: 'https://github.com/realBJ-dot'
  },
  {
    id: '5',
    title: 'GOODREADS LOOKUP TOOL',
    subtitle: 'Data Visualization Platform',
    description: 'Developed a comprehensive web application for book enthusiasts. Completed data scraping from goodreads.com and stored in PyMongo database. Implemented REST API endpoints for seamless data interaction using CRUD operations and designed responsive web interface using JavaScript for data visualization.',
    category: 'Web Development',
    stats: [
      { label: 'Data Points', value: '10K+ Books' },
      { label: 'API Type', value: 'REST' },
      { label: 'Duration', value: 'Oct 2021 - Nov 2021' }
    ],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Python', 'PyMongo', 'JavaScript', 'REST API', 'Data Scraping', 'CRUD'],
    link: 'https://github.com/realBJ-dot/goodreads-tool',
    github: 'https://github.com/realBJ-dot'
  },
  {
    id: '6',
    title: 'GITHUB USER-INFO FINDER',
    subtitle: 'Mobile Application',
    description: 'Designed and developed a React Native mobile application that scrapes user information from GitHub profiles. Features GraphQL API integration for efficient data fetching, with frontend built using React Native and JavaScript. Provides comprehensive user analytics and repository insights.',
    category: 'Mobile Development',
    stats: [
      { label: 'API Type', value: 'GraphQL' },
      { label: 'Platform', value: 'React Native' },
      { label: 'Duration', value: 'Oct 2021 - Dec 2021' }
    ],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React Native', 'GraphQL', 'JavaScript', 'GitHub API', 'Mobile UI'],
    link: 'https://github.com/realBJ-dot/github-finder',
    github: 'https://github.com/realBJ-dot'
  }
];

// All items combined (for backwards compatibility)
export const portfolioItems: PortfolioItem[] = [
  ...aboutItems,
  ...jobItems,
  ...projectItems,
  ...educationItems
];

