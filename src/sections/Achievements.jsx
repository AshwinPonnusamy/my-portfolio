import { motion } from "framer-motion";

const Achievements = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "1.5+",
    },
    {
      label: "Completed Projects",
      value: "2+",
    },
    {
      label: "Happy Clients",
      value: "0",
    },
    {
      label: "Awards Won",
      value: "1",
    },
  ];

  return (
    <section className="py-20 bg-paper relative overflow-hidden border-b-2 border-ink bg-grain">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 md:p-8 flex flex-col justify-between h-36 md:h-44 border-2 border-ink bg-paper-dark/30 hover:bg-paper-dark shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 relative group overflow-visible"
            >
              {/* Retro punched ticket holes */}
              <div className="absolute top-1/2 -left-2.5 w-5 h-5 rounded-full bg-paper border-r-2 border-ink z-10 -translate-y-1/2 group-hover:bg-paper transition-colors duration-300"></div>
              <div className="absolute top-1/2 -right-2.5 w-5 h-5 rounded-full bg-paper border-l-2 border-ink z-10 -translate-y-1/2 group-hover:bg-paper transition-colors duration-300"></div>

              {/* Dotted border separation on hover */}
              <div className="absolute top-0 bottom-0 left-5 border-l border-dashed border-ink/20 group-hover:border-ink/40 transition-colors duration-300 pointer-events-none"></div>

              <div className="pl-6 flex flex-col justify-between h-full">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-deep">
                  TICKET NO. 0{index + 1}
                </span>
                
                <div>
                  <span className="text-4xl md:text-5xl font-bold font-display text-ink tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted/90 block mt-1">
                    {"// "}{stat.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
