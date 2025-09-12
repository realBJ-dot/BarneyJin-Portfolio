'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Sidebar from './Sidebar'
import WildlifeCard from './WildlifeCard'
import { portfolioItems, aboutItems, jobItems, educationItems, projectItems } from '@/data/portfolio'

export default function WildlifePortfolio() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [currentSection, setCurrentSection] = useState('about')

    // Get items based on current section
    const getCurrentItems = () => {
        switch (currentSection) {
            case 'about': return aboutItems
            case 'jobs': return jobItems
            case 'education': return educationItems
            case 'projects': return projectItems
            case 'contact': return aboutItems // Show contact info from about
            default: return aboutItems
        }
    }

    const currentItems = getCurrentItems()
    const currentItem = currentItems[currentIndex]

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % currentItems.length)
    }

    const handlePrev = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length)
    }

    // Handle section change
    const handleSectionChange = (section: string) => {
        setCurrentSection(section)
        setCurrentIndex(0) // Reset to first item when changing sections
        setDirection(1)
    }

    // Auto-advance slides every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, 8000)

        return () => clearInterval(timer)
    }, [])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 relative overflow-hidden">
            {/* Background Video/Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074&auto=format&fit=crop')`
                    }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Sidebar */}
            <Sidebar
                currentSection={currentSection}
                onSectionChange={handleSectionChange}
            />

            {/* Main Content */}
            <div className="relative z-10 pl-0 md:pl-20 min-h-screen flex">
                {/* Hero Section */}
                <div className="flex-1 flex items-center justify-center p-6 md:p-12">
                    <div className="w-full max-w-7xl">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8 md:mb-16"
                        >
                            {/* Brand */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">BJ</span>
                                </div>
                                <span className="text-white text-lg font-light tracking-wider">Barney Jin</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-bold tracking-wider leading-tight">
                                <span className="block text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] mb-2">
                                    EXPLORE THE CODE
                                </span>
                                <span className="block">PORTFOLIO</span>
                            </h1>

                            {/* Section Title */}
                            <div className="mt-4 mb-2">
                                <span className="text-green-400 text-lg font-light tracking-wider uppercase">
                                    {currentSection === 'about' && 'About Me'}
                                    {currentSection === 'jobs' && 'Professional Experience'}
                                    {currentSection === 'education' && 'Education & Research'}
                                    {currentSection === 'projects' && 'Personal Projects'}
                                    {currentSection === 'contact' && 'Contact Information'}
                                </span>
                            </div>
                        </motion.div>

                        {/* Wildlife Cards Container */}
                        <div className="relative">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="w-full"
                                >
                                    <WildlifeCard item={currentItem} />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Controls */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
                                {/* Previous Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handlePrev}
                                    className="bg-green-600/20 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-green-600/30 transition-colors duration-200"
                                >
                                    <ChevronLeft size={24} />
                                </motion.button>

                                {/* Page Indicator */}
                                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
                                    <span className="text-white text-lg font-light">
                                        {String(currentIndex + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-white/50 text-sm">/</span>
                                    <span className="text-white/50 text-sm">
                                        {String(currentItems.length).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Next Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleNext}
                                    className="bg-green-600/20 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-green-600/30 transition-colors duration-200"
                                >
                                    <ChevronRight size={24} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                {currentItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                        }}
                        className={`w-2 h-8 rounded-full transition-colors duration-200 ${index === currentIndex
                            ? 'bg-white'
                            : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
