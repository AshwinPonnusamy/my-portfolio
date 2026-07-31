import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  Code,
  Rocket,
  Globe,
  Database,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually stunning interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description:
        "Building robust, scalable, and high-performance web applications using modern technologies.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile First",
      description:
        "Ensuring your website looks and functions perfectly on all devices, from desktops to smartphones.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Performance Optimization",
      description:
        "Speeding up your websites to ensure fast load times and better search engine rankings.",
    },
    {
      icon: <Globe size={32} />,
      title: "SEO Strategy",
      description:
        "Implementing best practices to improve visibility and drive organic traffic to your site.",
    },
    {
      icon: <Database size={32} />,
      title: "Backend Integration",
      description:
        "Connecting your frontend to powerful backend systems for dynamic data management.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-accent-green relative border-b-2 border-ink bg-grain">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-accent-gold mb-3 block">
            03 / SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-paper uppercase tracking-tight mb-4">
            My Specialty <span className="italic font-serif font-normal text-accent-gold lowercase">— services</span>
          </h2>
          <div className="h-[2px] bg-paper/20 max-w-xl mx-auto my-6"></div>
          <p className="text-paper/85 max-w-2xl mx-auto font-serif italic text-base sm:text-lg">
            I offer a wide range of services to help you build your digital
            presence and achieve your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border-2 border-ink bg-paper text-ink shadow-[5px_5px_0px_0px_rgba(220,168,66,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Apocathery stamp indicator */}
              <span className="absolute bottom-3 right-5 font-mono text-[9px] text-ink/20 font-bold tracking-widest pointer-events-none select-none">
                [SERVE-0{index + 1}]
              </span>

              <div className="w-14 h-14 bg-paper-dark border-2 border-ink flex items-center justify-center text-accent-deep mb-6 group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold font-display text-ink uppercase tracking-tight mb-3 group-hover:text-accent-deep transition-colors">
                {service.title}
              </h3>
              <p className="text-ink-muted text-sm font-serif leading-relaxed">
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
