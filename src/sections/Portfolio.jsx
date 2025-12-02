import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "Web App",
            image: "bg-blue-500", // Placeholder color
            description: "A full-featured online store with payment integration.",
            tags: ["React", "Node.js", "Stripe"]
        },
        {
            id: 2,
            title: "Finance Dashboard",
            category: "Design",
            image: "bg-purple-500",
            description: "Modern UI for tracking investments and expenses.",
            tags: ["Figma", "UI/UX"]
        },
        {
            id: 3,
            title: "Social Media App",
            category: "Mobile App",
            image: "bg-pink-500",
            description: "Connect with friends and share moments instantly.",
            tags: ["React Native", "Firebase"]
        },
        {
            id: 4,
            title: "AI Content Generator",
            category: "Web App",
            image: "bg-indigo-500",
            description: "Generate blog posts and social media captions with AI.",
            tags: ["OpenAI API", "Next.js"]
        },
        {
            id: 5,
            title: "Travel Booking Site",
            category: "Web App",
            image: "bg-teal-500",
            description: "Book flights and hotels with ease.",
            tags: ["Vue.js", "Laravel"]
        },
        {
            id: 6,
            title: "Fitness Tracker",
            category: "Mobile App",
            image: "bg-orange-500",
            description: "Track your workouts and monitor progress.",
            tags: ["Flutter", "Dart"]
        }
    ];

    const categories = ["All", "Web App", "Mobile App", "Design"];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="portfolio" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Selected <span className="text-gradient-accent">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        A collection of projects that showcase my skills and passion for building digital products.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-accent text-white shadow-lg shadow-blue-500/25'
                                        : 'bg-primary border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative rounded-2xl overflow-hidden bg-primary border border-white/10"
                            >
                                {/* Image Placeholder */}
                                <div className={`h-64 w-full ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <a href="#" className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href="#" className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <span className="text-accent text-xs font-bold tracking-wider uppercase mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-secondary text-xs text-gray-300 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
