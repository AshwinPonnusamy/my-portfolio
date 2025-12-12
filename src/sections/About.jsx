import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Cpu } from 'lucide-react';

const About = () => {
    const skills = [
        "React / Angular.js", "TypeScript", "Tailwind CSS", "Bootstrap", "UI/UX Design", "Framer Motion", "Figma", "Epub",     
    ];

    const experience = [
        {
            year: "2024 - Present",
            role: "Junior Front-end Developer",
            company: "Coherent pixels system.",
            description: "Developing responsive, high-performance web applications using React, JavaScript, HTML, CSS, and Tailwind. Building reusable components, improving performance, and enhancing user experience across devices."
        },
        {
            year: "2023 - 2024",
            role: "Epub developer",
            company: "Bluez Infomatic Solution",
            description: "Converted and formatted digital books for ePub, Mobi, and PDF platforms with proper layout, styling, images, and accessibility. Ensured compatibility across Kindle, Apple Books, Kobo, and other e-reading devices."
        },
        {
            year: "2022 - 2023",
            role: "Web Developer Intern",
            company: "Appin Technology Lab",
            description: "Completed a internship focused on designing and developing responsive web pages using HTML, CSS, Bootstrap, and JavaScript. Assisted in backend integration, debugging, and teamwork to deliver production-ready features."
          }
          
    ];

    return (
        <section id='about' className="py-20 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-gradient-accent">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Bio & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">
                            Crafting digital experiences with passion and precision.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            I am a passionate developer with a keen eye for design. I bridge the gap between engineering and aesthetics, ensuring that every project I work on not only functions perfectly but also looks stunning. My journey started with a curiosity for how things work on the web, and it has evolved into a career of building complex applications.
                        </p>

                        <div className="mb-8">
                            <h4 className="text-lg font-semibold mb-4 text-white">Tech Stack</h4>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-primary border border-white/10 rounded-full text-sm text-gray-300 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white">Experience</h3>
                        <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                            {experience.map((item, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-secondary"></span>
                                    <span className="text-accent text-sm font-bold tracking-wider mb-1 block">{item.year}</span>
                                    <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
                                    <p className="text-gray-500 text-sm mb-2">{item.company}</p>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
