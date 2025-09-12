'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { PortfolioItem } from '@/types/portfolio'

interface WildlifeCardProps {
    item: PortfolioItem
}

export default function WildlifeCard({ item }: WildlifeCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [showFullDescription, setShowFullDescription] = useState(false)

    // Reset imageLoaded when item changes
    useEffect(() => {
        // For local images, we can assume they load quickly
        if (item.image.startsWith('/')) {
            setImageLoaded(true)
        } else {
            setImageLoaded(false)
        }
    }, [item.id, item.image])

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm"
            >
                {/* Placeholder while loading */}
                {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Main Image */}
                <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                        // Fallback to a placeholder image for external URLs
                        if (!item.image.startsWith('/')) {
                            const img = document.querySelector(`img[alt="${item.title}"]`) as HTMLImageElement
                            if (img) {
                                img.src = `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop&crop=center`
                            }
                        }
                        setImageLoaded(true)
                    }}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Scientific Name on Image */}
                <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-wider mb-2">
                        {item.title}
                    </h2>
                    <p className="text-white/90 text-lg">
                        {item.subtitle}
                    </p>
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center space-y-6"
            >
                {/* Category */}
                <div className="text-green-400 text-lg font-light tracking-wide">
                    {item.category}
                </div>

                {/* Contact Info */}
                <div className="text-white text-sm opacity-80">
                    {item.id === '1' && (
                        <div className="space-y-1">
                            <div>📧 realbdotjdot@gmail.com</div>
                            <div>📱 +1 (317) 316-7876</div>
                            <div>🎓 MS Computer Science - University of Illinois</div>
                        </div>
                    )}
                    {item.id !== '1' && `Technology Stack: ${item.category}`}
                </div>

                {/* Description */}
                <div className="text-white/90 text-base leading-relaxed">
                    <p>
                        {showFullDescription
                            ? item.description
                            : `${item.description.substring(0, 200)}${item.description.length > 200 ? '...' : ''}`
                        }
                    </p>

                    {item.description.length > 200 && (
                        <button
                            onClick={toggleDescription}
                            className="text-green-400 hover:text-green-300 transition-colors duration-200 mt-2 font-medium"
                        >
                            {showFullDescription ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-4">
                    {item.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-white text-2xl lg:text-3xl font-bold mb-1">
                                {stat.value}
                            </div>
                            <div className="text-white/60 text-sm uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                    {item.link && (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-lg px-6 py-3 text-white hover:bg-green-600/30 transition-colors duration-200"
                        >
                            <ExternalLink size={18} />
                            <span>{item.id === '1' ? 'Contact Me' : 'Live Demo'}</span>
                        </motion.a>
                    )}

                    {item.github && (
                        <motion.a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 text-white hover:bg-white/20 transition-colors duration-200"
                        >
                            <Github size={18} />
                            <span>github</span>
                        </motion.a>
                    )}
                </div>

                {/* Technologies/Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                    {item.technologies.map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
