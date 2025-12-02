import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const stats = [
        { label: "Years Experience", value: "1.5+" },
        { label: "Completed Projects", value: "2+" },
        { label: "Happy Clients", value: "0" },
        { label: "Awards Won", value: "1" },
    ];

    return (
        <section className="py-12 bg-primary border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
