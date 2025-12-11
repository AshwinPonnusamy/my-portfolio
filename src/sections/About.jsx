import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Cpu } from 'lucide-react';

const About = () => {
    const skills = [
        "React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX Design", "Framer Motion"
    ];

    const experience = [
        {
            year: "2023 - Present",
            role: "Senior Frontend Developer",
            company: "TechCorp Inc.",
            description: "Leading the frontend team in building scalable web applications."
        },
        {
            year: "2021 - 2023",
            role: "UI/UX Designer & Dev",
            company: "Creative Studio",
            description: "Designed and developed award-winning websites for various clients."
        },
        {
            year: "2019 - 2021",
            role: "Junior Web Developer",
            company: "StartUp Hub",
            description: "Collaborated with cross-functional teams to deliver high-quality code."
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
