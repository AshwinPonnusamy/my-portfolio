import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Code, Rocket, Globe, Database } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Layout size={32} />,
            title: "UI/UX Design",
            description: "Creating intuitive and visually stunning interfaces that provide exceptional user experiences."
        },
        {
            icon: <Code size={32} />,
            title: "Web Development",
            description: "Building robust, scalable, and high-performance web applications using modern technologies."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Mobile First",
            description: "Ensuring your website looks and functions perfectly on all devices, from desktops to smartphones."
        },
        {
            icon: <Rocket size={32} />,
            title: "Performance Optimization",
            description: "Speeding up your websites to ensure fast load times and better search engine rankings."
        },
        {
            icon: <Globe size={32} />,
            title: "SEO Strategy",
            description: "Implementing best practices to improve visibility and drive organic traffic to your site."
        },
        {
            icon: <Database size={32} />,
            title: "Backend Integration",
            description: "Connecting your frontend to powerful backend systems for dynamic data management."
        }
    ];

    return (
        <section className="py-20 bg-primary relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-gradient-accent">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I offer a wide range of services to help you build your digital presence and achieve your business goals.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-secondary/50 border border-white/5 hover:border-accent/50 hover:bg-secondary transition-all group hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform border border-white/5 shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
