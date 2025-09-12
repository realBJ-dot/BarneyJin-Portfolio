'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, User, Code, Mail, X, Github, Linkedin, GraduationCap, Briefcase } from 'lucide-react'

interface SidebarProps {
    className?: string
    currentSection?: string
    onSectionChange?: (section: string) => void
}

export default function Sidebar({ className = '', currentSection = 'all', onSectionChange }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false)

    const navigationItems = [
        { icon: User, label: 'About', section: 'about' },
        { icon: Briefcase, label: 'Jobs', section: 'jobs' },
        { icon: GraduationCap, label: 'Education', section: 'education' },
        { icon: Code, label: 'Projects', section: 'projects' },
    ]

    const socialItems = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/realBJ-dot' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/peiyuan3' },
    ]

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 left-6 z-50 md:hidden bg-black/20 backdrop-blur-sm rounded-lg p-3 text-white"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{
                    x: isOpen || typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : -100,
                    opacity: isOpen || typeof window !== 'undefined' && window.innerWidth >= 768 ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className={`fixed left-0 top-0 h-full w-20 bg-black/10 backdrop-blur-sm border-r border-white/10 z-40 flex flex-col items-center py-8 ${className}`}
            >
                {/* Logo */}
                <div className="mb-12">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-white"></div>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col space-y-6">
                    {navigationItems.map((item, index) => (
                        <motion.button
                            key={item.label}
                            onClick={() => onSectionChange?.(item.section)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`group relative p-3 rounded-lg transition-colors duration-200 ${currentSection === item.section
                                ? 'bg-green-600/30 text-white'
                                : 'hover:bg-white/10 text-white/70'
                                }`}
                            title={item.label}
                        >
                            <item.icon
                                size={24}
                                className={`transition-colors duration-200 ${currentSection === item.section
                                    ? 'text-white'
                                    : 'text-white/70 group-hover:text-white'
                                    }`}
                            />

                            {/* Tooltip */}
                            <div className="absolute left-full ml-4 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                {item.label}
                            </div>
                        </motion.button>
                    ))}
                </nav>

                {/* Social Links */}
                <div className="mt-auto pt-8">
                    <div className="flex flex-col space-y-4">
                        {socialItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.6 }}
                                className="group relative p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                title={item.label}
                            >
                                <item.icon
                                    size={20}
                                    className="text-white/50 group-hover:text-white transition-colors duration-200"
                                />

                                {/* Tooltip */}
                                <div className="absolute left-full ml-4 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                    {item.label}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
