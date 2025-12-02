import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            content: "Ashwin is an incredible developer. He transformed our vision into a reality with his technical expertise and eye for design. Highly recommended!"
        },
        {
            id: 2,
            name: "David Chen",
            role: "Product Manager, Innovate Inc.",
            content: "Working with Ashwin was a pleasure. He is proactive, communicative, and delivers high-quality code. Our new website has significantly improved our user engagement."
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Founder, Creative Agency",
            content: "I was blown away by the level of detail and creativity Ashwin put into our project. He truly cares about the end product and it shows."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Client <span className="text-gradient-accent">Testimonials</span>
                    </h2>
                </motion.div>

                <div className="relative h-[300px] flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full"
                        >
                            <div className="bg-secondary/30 border border-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm relative">
                                <Quote className="absolute top-6 left-6 text-accent/20 w-12 h-12" />
                                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 relative z-10">
                                    "{testimonials[currentIndex].content}"
                                </p>
                                <div>
                                    <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                                    <p className="text-accent text-sm">{testimonials[currentIndex].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-accent w-6' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
