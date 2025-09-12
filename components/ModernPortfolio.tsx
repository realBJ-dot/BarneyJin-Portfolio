'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Globe, ChevronRight, ExternalLink, Folder, Linkedin, Book, Search, User, GraduationCap, Microscope, Code, Brain } from 'lucide-react'

const projectsData = {
    "apps": [
        {
            id: 1,
            title: "SmarNote",
            description: "AI-powered iOS note-taking app with speech recognition and intelligent organization",
            image: "/api/placeholder/300/200",
            technologies: ["Swift", "iOS", "AI Integration", "Speech Recognition"],
            liveUrl: "#",
            githubUrl: "https://github.com/realBJ-dot/SmarNote"
        },
        {
            id: 2,
            title: "Go Birdie Go",
            description: "Advanced Golf Analytics Platform with Firebase backend and real-time data sync",
            image: "/api/placeholder/300/200",
            technologies: ["Dart", "Firebase", "Cloud Firestore", "Material UI"],
            liveUrl: "https://www.gobirdiego.com/",
            githubUrl: "#"
        },

    ],
    "projects": [
        {
            id: 5,
            title: "Goodreads Lookup Tool",
            description: "Data visualization platform with book analytics and REST API",
            image: "/api/placeholder/300/200",
            technologies: ["Python", "PyMongo", "JavaScript", "REST API", "Data Scraping"],
            liveUrl: "#",
            githubUrl: "https://github.com/realBJ-dot/Goodread_lookup_tool"
        },
        {
            id: 6,
            title: "GitHub User-Info Finder",
            description: "React Native mobile app with GraphQL integration for GitHub analytics",
            image: "/api/placeholder/300/200",
            technologies: ["React Native", "GraphQL", "JavaScript", "GitHub API"],
            liveUrl: "#",
            githubUrl: "https://github.com/realBJ-dot/Github_Userinfo_Finding"
        },
        {
            id: 7,
            title: "Portfolio Website",
            description: "Modern developer portfolio with code-themed design",
            image: "/api/placeholder/300/200",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            liveUrl: "#",
            githubUrl: "https://github.com/realBJ-dot/portfolio-website"
        },
    ],
    "school-stuff": [

        {
            id: 8,
            title: "University Projects",
            description: "CS125 & CS222 teaching assistant projects and coursework",
            image: "/api/placeholder/300/200",
            technologies: ["Java", "JavaScript", "Android Studio", "Educational Tools"],
            liveUrl: "#",
            githubUrl: "https://github.com/realBJ-dot"
        },
        {
            id: 9,
            title: "Research Projects",
            description: "Fault Tolerant Systems and Fuzz4ALL research at UIUC",
            image: "/api/placeholder/300/200",
            technologies: ["Large Language Models", "Autonomous Vehicles", "Universal Fuzzing"],
            liveUrl: "#",
            githubUrl: "https://github.com/realBJ-dot"
        }
    ]
}

const skills = {
    Languages: ['TypeScript', 'Python', 'Java', 'JavaScript', 'Dart'],
    Other: ['HTML', 'CSS', 'REST', 'GraphQL', 'OAuth 2.0'],
    Tools: ['VSCode', 'Git', 'Docker', 'AWS', 'Terraform', 'Jenkins'],
    Databases: ['PostgreSQL', 'MongoDB', 'Firebase', 'Cloud Firestore'],
    Frameworks: ['React', 'Next.js', 'Express', 'Spring Boot', 'Flutter']
}

const funFacts = [
    "I like coding more than sleeping",
    "I often debug with my rubber duck",
    "I like coffee and algorithms",
    "I was at John Deere and EngineeringPeople",
    "My favorite language is TypeScript",
    "I am currently at University of Illinois",
    "I have 3+ years of experience"
]

export default function ModernPortfolio() {
    const [activeSection, setActiveSection] = useState('home')

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'about-me', 'education', 'contacts']
            const scrollPosition = window.scrollY + 200

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const ProjectCard = ({ project }: { project: any }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 border border-gray-600 rounded p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 group cursor-pointer"
        >
            <div className="h-32 bg-gray-700 rounded mb-3 flex items-center justify-center group-hover:bg-gray-600 transition-colors overflow-hidden">
                {project.id === 1 && project.title === "SmarNote" ? (
                    <img
                        src="./images/SmarNote-Icon.png"
                        alt="SmarNote Icon"
                        className="w-16 h-16 object-contain"
                    />
                ) : project.id === 2 && project.title === "Go Birdie Go" ? (
                    <div className="w-16 h-16 bg-white rounded-lg p-1 flex items-center justify-center">
                        <img
                            src="./images/gobirdiegoIcon.png"
                            alt="Go Birdie Go Icon"
                            className="w-full h-full object-contain"
                            style={{
                                filter: 'contrast(1.1) brightness(0.95)',
                                clipPath: 'inset(8% 8% 8% 8%)'
                            }}
                        />
                    </div>
                ) : project.title === "Goodreads Lookup Tool" ? (
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center relative">
                        <Book className="w-8 h-8 text-white" />
                        <Search className="w-4 h-4 text-amber-200 absolute top-2 right-2" />
                    </div>
                ) : project.title === "GitHub User-Info Finder" ? (
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center relative border border-gray-600">
                        <Github className="w-6 h-6 text-white" />
                        <User className="w-4 h-4 text-gray-300 absolute bottom-2 right-2" />
                    </div>
                ) : project.title === "University Projects" ? (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center relative">
                        <GraduationCap className="w-8 h-8 text-white" />
                        <Code className="w-4 h-4 text-blue-200 absolute bottom-2 right-2" />
                    </div>
                ) : project.title === "Research Projects" ? (
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center relative">
                        <Microscope className="w-7 h-7 text-white" />
                        <Brain className="w-4 h-4 text-purple-200 absolute top-2 right-2" />
                    </div>
                ) : (
                    <Folder className="w-8 h-8 text-gray-400 group-hover:text-purple-400 transition-colors" />
                )}
            </div>
            <h3 className="text-white font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.map((tech: string) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300 group-hover:bg-purple-800/30 transition-colors">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex items-center justify-between">
                {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                        Live &lt;~&gt;
                    </a>
                ) : (
                    <span className="text-gray-500 text-sm">Live &lt;~&gt;</span>
                )}
                <div className="flex items-center space-x-2">
                    {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 hover:bg-gray-700 rounded transition-colors"
                        >
                            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 hover:bg-gray-700 rounded transition-colors"
                        >
                            <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )

    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 w-20 h-full bg-gray-800/95 backdrop-blur-sm border-r border-gray-700 flex flex-col items-center py-6 z-50">
                {/* Profile avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-8 border-2 border-gray-600">
                    <span className="text-sm font-bold text-white">BJ</span>
                </div>

                {/* Social links */}
                <div className="flex flex-col space-y-6">
                    <a href="https://github.com/realBJ-dot" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-700/50 hover:bg-gray-600 transition-all duration-300">
                        <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/barneyjin/" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-700/50 hover:bg-gray-600 transition-all duration-300">
                        <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                    <a href="mailto:peiyuan3@illinois.edu"
                        className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-700/50 hover:bg-gray-600 transition-all duration-300">
                        <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="grid grid-cols-3 gap-1.5">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-purple-400/60 rounded-full"></div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="ml-20">
                {/* Header */}
                <header className="bg-gray-800 border-b border-gray-700 px-6 py-3 sticky top-0 z-40">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="text-white font-bold">🌟 Barney</span>
                        </div>
                        <nav className="flex items-center space-x-6">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`text-sm hover:text-purple-400 transition-colors ${activeSection === 'home' ? 'text-purple-400' : 'text-gray-300'
                                    }`}
                            >
                                #home
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className={`text-sm hover:text-purple-400 transition-colors ${activeSection === 'projects' ? 'text-purple-400' : 'text-gray-300'
                                    }`}
                            >
                                #works
                            </button>
                            <button
                                onClick={() => scrollToSection('about-me')}
                                className={`text-sm hover:text-purple-400 transition-colors ${activeSection === 'about-me' ? 'text-purple-400' : 'text-gray-300'
                                    }`}
                            >
                                #about-me
                            </button>
                            <button
                                onClick={() => scrollToSection('education')}
                                className={`text-sm hover:text-purple-400 transition-colors ${activeSection === 'education' ? 'text-purple-400' : 'text-gray-300'
                                    }`}
                            >
                                #education
                            </button>
                            <button
                                onClick={() => scrollToSection('contacts')}
                                className={`text-sm hover:text-purple-400 transition-colors ${activeSection === 'contacts' ? 'text-purple-400' : 'text-gray-300'
                                    }`}
                            >
                                #contacts
                            </button>
                        </nav>
                    </div>
                </header>

                {/* Home Section */}
                <section id="home" className="min-h-screen flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl w-full"
                    >
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="mb-8">
                                <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">
                                    Barney is a <span className="text-purple-400">full-stack developer</span> and{' '}
                                    <span className="text-purple-400">more ...</span>
                                </h1>
                                <p className="text-gray-400 mb-8 text-lg">
                                    He will do nasty work (software problems only) for you, with creativity, and some passion.
                                </p>
                                <button
                                    onClick={() => scrollToSection('contacts')}
                                    className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 text-sm transition-colors"
                                >
                                    Contact me!!
                                </button>
                            </div>

                            <div className="relative flex justify-center lg:justify-end">
                                {/* Main profile image container */}
                                <div className="relative">
                                    <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] relative">
                                        <img
                                            src="./images/profile.png"
                                            alt="Profile"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                {/* Dots pattern top right */}
                                <div className="absolute top-0 right-0 lg:right-[-50px]">
                                    <div className="grid grid-cols-5 gap-2">
                                        {[...Array(25)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Purple geometric shapes */}
                                <div className="absolute top-1/2 right-[-80px] hidden lg:block">
                                    <div className="w-16 h-16 border-2 border-purple-400 rotate-45"></div>
                                    <div className="w-12 h-12 border-2 border-purple-400 mt-4 ml-8"></div>
                                </div>

                                {/* Bottom right decorative elements */}
                                <div className="absolute bottom-0 right-[-60px] hidden lg:block">
                                    <div className="w-20 h-20 border border-gray-600"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 relative">
                            <div className="bg-gray-800 border border-gray-600 p-8 rounded max-w-3xl relative">
                                {/* Quote box with proper layout like screenshot */}
                                <div className="flex items-start">
                                    <div className="text-6xl text-gray-600 font-mono leading-none mr-4">"</div>
                                    <div className="flex-1">
                                        <h2 className="text-xl text-white mb-4">
                                            To be a dreamer, or not to be... ✌️
                                        </h2>
                                    </div>
                                    <div className="text-6xl text-gray-600 font-mono leading-none ml-4 self-end">"</div>
                                </div>
                                <div className="text-right mt-4">
                                    <div className="border border-gray-600 inline-block px-3 py-1 rounded">
                                        <p className="text-gray-400 text-sm">- Barney</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="min-h-screen py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">/projects</h1>
                            <p className="text-gray-400 text-lg mb-16">List of my projects</p>

                            <div className="space-y-16">
                                {Object.entries(projectsData).map(([category, projects]) => (
                                    <div key={category} className="mb-12">
                                        <h2 className="text-2xl text-white mb-8">#{category}</h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {projects.map((project) => (
                                                <ProjectCard key={project.id} project={project} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about-me" className="min-h-screen py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">/about-me</h1>
                            <p className="text-gray-400 text-lg mb-16">Who am I?</p>

                            <div className="grid lg:grid-cols-2 gap-16 mb-16">
                                <div className="space-y-6 text-lg leading-relaxed">
                                    <p>Hello, I'm Barney!</p>
                                    <p>
                                        I'm a passionate full-stack software engineer based in
                                        Champaign, IL. I can develop enterprise applications from
                                        scratch and raise them into modern scalable solutions.
                                    </p>
                                    <p>
                                        Transforming complex requirements into robust code
                                        has been my passion for over 3 years. I have
                                        been helping companies like John Deere establish their
                                        digital presence. I always strive to learn about the
                                        newest technologies and frameworks.
                                    </p>
                                    <button className="mt-8 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 text-sm transition-colors">
                                        Read more -&gt;
                                    </button>
                                </div>

                                <div className="relative flex justify-center">
                                    <div className="w-80 h-96 bg-gray-800 border border-gray-600 rounded">
                                        <img
                                            src="./images/Man-in-Lecture.JPEG"
                                            alt="Profile"
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                    <div className="absolute -top-4 -right-4">
                                        <div className="grid grid-cols-4 gap-1">
                                            {[...Array(16)].map((_, i) => (
                                                <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-3xl lg:text-4xl text-white mb-12">#skills</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                                    {Object.entries(skills).map(([category, items]) => (
                                        <motion.div
                                            key={category}
                                            className="bg-gray-800 border border-gray-600 p-4 rounded"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <h3 className="text-white font-bold mb-3">{category}</h3>
                                            <div className="space-y-1 text-sm">
                                                {items.map((skill) => (
                                                    <div key={skill} className="text-gray-300">{skill}</div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-3xl lg:text-4xl text-white mb-12">#my-fun-facts</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {funFacts.map((fact, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-800 border border-gray-600 p-3 rounded text-sm"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            {fact}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="min-h-screen py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">/education</h1>
                            <p className="text-gray-400 text-lg mb-16">My academic journey</p>

                            <div className="space-y-12">
                                {/* Master's Degree */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-800 border border-gray-600 rounded-lg p-8 hover:border-purple-400 transition-colors group"
                                >
                                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                                        <div className="lg:col-span-2">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                                        Master of Computer Science
                                                    </h3>
                                                    <p className="text-purple-400 font-semibold mb-2">University of Illinois at Urbana-Champaign</p>
                                                    <p className="text-gray-400 text-sm">Jan 2024 - May 2025</p>
                                                </div>
                                                <div className="text-right">
                                                    <div className="bg-purple-600/20 px-3 py-1 rounded-full">
                                                        <span className="text-purple-400 font-bold">GPA: 3.8/4.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                Currently pursuing Master of Computer Science with focus on Generative AI for Software Engineering,
                                                Operating System Design, and Cloud Networking. Engaged in cutting-edge research projects including
                                                Fault Tolerant System Design for Autonomous Vehicles and Extended Empirical Study on Fuzz4ALL.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {['Fault Tolerant Systems', 'Computer System Organization', 'Large Language Models', 'Autonomous Vehicles', 'Universal Fuzzing'].map((topic) => (
                                                    <span key={topic} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 group-hover:bg-purple-800/30 transition-colors">
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2">
                                                <img
                                                    src="./images/Illinois_logo_fullcolor_rgb.png"
                                                    alt="University of Illinois Logo"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bachelor's Degree */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-gray-800 border border-gray-600 rounded-lg p-8 hover:border-purple-400 transition-colors group"
                                >
                                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                                        <div className="lg:col-span-2">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                                        Bachelor of Science in Mathematics & Computer Science
                                                    </h3>
                                                    <p className="text-purple-400 font-semibold mb-2">University of Illinois at Urbana-Champaign</p>
                                                    <p className="text-gray-400 text-sm">Aug 2019 - May 2023</p>
                                                </div>
                                                <div className="text-right">
                                                    <div className="bg-purple-600/20 px-3 py-1 rounded-full">
                                                        <span className="text-purple-400 font-bold">GPA: 3.6/4.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                Bachelor of Science in Mathematics and Computer Science with minor in Statistics.
                                                Served as Teaching Assistant for CS125 (Intro to CS) and CS222 (Software Programming Studio).
                                                Strong foundation in Data Structure, Data Analytics, Algorithms, Linear Algebra, Database Design,
                                                and Computer System Organization.
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {['Java', 'Python', 'JavaScript', 'Android Studio', 'RESTful API', 'Data Analytics', 'Linear Algebra'].map((skill) => (
                                                    <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 group-hover:bg-purple-800/30 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="bg-blue-600/20 p-3 rounded">
                                                <p className="text-blue-400 font-semibold text-sm">Teaching Assistant</p>
                                                <p className="text-gray-300 text-sm">CS125 (Intro to Computer Science) & CS222 (Software Programming Studio)</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2">
                                                <img
                                                    src="./images/Illinois_logo_fullcolor_rgb.png"
                                                    alt="University of Illinois Logo"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contacts Section */}
                <section id="contacts" className="min-h-screen py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">/contacts</h1>
                            <p className="text-gray-400 text-lg mb-16">Who am I?</p>

                            <div className="grid md:grid-cols-2 gap-16">
                                <div>
                                    <p className="text-lg mb-8 leading-relaxed">
                                        I'm always looking forward to connecting with new people! Don't hesitate to contact me!
                                    </p>

                                    <div className="bg-gray-800 border border-gray-600 p-6 rounded">
                                        <h3 className="text-white font-bold mb-4 text-lg">Message me here</h3>
                                        <div className="space-y-3 text-base">
                                            <div className="flex items-center space-x-2">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span>peiyuan3@illinois.edu</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Globe className="w-4 h-4 text-gray-400" />
                                                <span>@BarneyJin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-base text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-base text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-base text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        rows={5}
                                        className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-base text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none resize-none"
                                    ></textarea>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded text-base transition-colors">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-700 bg-gray-800/90 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            {/* Left side - Profile info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">BJ</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Barney Jin</h3>
                                        <p className="text-gray-400 text-sm">Full-stack Software Engineer</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                    <Mail className="w-4 h-4" />
                                    <span>peiyuan3@illinois.edu</span>
                                </div>
                                <p className="text-gray-500 text-sm">
                                    Crafting digital experiences with code and creativity
                                </p>
                            </div>

                            {/* Right side - Social links */}
                            <div className="flex flex-col items-start md:items-end space-y-4">
                                <div>
                                    <h4 className="text-white font-bold mb-3">Connect with me</h4>
                                    <div className="flex items-center space-x-4">
                                        <a href="https://github.com/realBJ-dot" target="_blank" rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                            <span className="text-sm">GitHub</span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/barneyjin/" target="_blank" rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                            <span className="text-sm">LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-gray-500 text-xs">
                                    © 2025 Barney Jin. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}