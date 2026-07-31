import { motion } from "framer-motion";

const About = () => {
  const skillsData = [
    {
      category: "Frontend Technologies",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      category: "State Management",
      items: ["Redux Toolkit", "TanStack Query"],
    },
    {
      category: "Web Technologies",
      items: [
        "REST API Integration",
        "Responsive Web Design",
        "Cross-Browser Compatibility",
        "Axios",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "jsPDF",
        "React PDF",
        "ApexCharts",
      ],
    },
  ];

  const experience = [
    {
      year: "2024 — Present",
      role: "Junior Front-end Developer",
      company: "Coherent Pixels Systems",
      description:
        "Developing responsive, high-performance web applications using React, JavaScript, HTML, CSS, and Tailwind. Building reusable components, improving performance, and enhancing user experience across devices.",
    },
    {
      year: "2023 — 2024",
      role: "Epub Developer",
      company: "Bluez Infomatic Solutions",
      description:
        "Converted and formatted digital books for ePub and PDF platforms with proper layout, styling, images, and accessibility. Ensured compatibility across Kindle, and other e-reading devices.",
    },
    {
      year: "2022 — 2023",
      role: "Web Developer Intern",
      company: "Appin Technology Lab",
      description:
        "Completed an internship focused on designing and developing responsive web pages using HTML, CSS, Bootstrap, and JavaScript. Assisted in backend integration, debugging, and teamwork to deliver production-ready features.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-paper border-b-2 border-ink relative bg-grain"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-accent-deep mb-3 block">
            02 / ABOUT ME
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-display leading-[0.9] tracking-tight uppercase text-ink">
            The Creative Force<span className="text-accent-deep">.</span>
          </h2>
          {/* Newspaper style double separator */}
          <div className="h-[3px] bg-ink mt-8 w-full"></div>
          <div className="h-px bg-ink mt-1 w-full"></div>
        </motion.div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          {/* Left Column: Bio & Core Competencies (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:pr-16"
          >
            <h3 className="text-2xl sm:text-3xl font-serif text-ink leading-relaxed italic mb-8">
              Crafting digital experiences with{" "}
              <span className="text-accent-deep">passion</span> and{" "}
              <span className="font-normal font-sans tracking-tight uppercase not-italic text-sm border border-ink/40 px-2 py-0.5 bg-paper-dark">
                precision
              </span>
              .
            </h3>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-serif mb-12">
              Frontend Developer with 2+ years of experience building
              responsive, high-performance web applications using React,
              JavaScript, HTML, and CSS. Skilled in API integration, state
              management (Redux Toolkit), and translating UI/UX designs into
              accessible, scalable interfaces. Proven track record collaborating
              with cross-functional teams to deliver enterprise-grade solutions
              on schedule.
            </p>

            {/* Core Competencies Catalog */}
            <div className="border-t-2 border-ink border-dashed pt-8">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-ink mb-6">
                {"// Technical Expertise"}
              </h4>
              <div className="space-y-4">
                {skillsData.map((group) => (
                  <div
                    key={group.category}
                    className="p-4 border-2 border-ink bg-paper-dark/40 shadow-[3px_3px_0px_0px_rgba(44,39,36,1)] relative overflow-hidden"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-deep block mb-2.5">
                      [{group.category}]
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[9px] font-bold border border-ink/30 px-2.5 py-0.5 text-ink bg-paper shadow-[1px_1px_0px_0px_rgba(44,39,36,1)] select-none"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Curriculum Vitae (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:border-l-2 lg:border-ink lg:pl-16 w-full"
          >
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-ink mb-8">
              {"// Curriculum Vitae"}
            </h4>
            <div className="space-y-8">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="bg-paper-dark/20 p-6 border-2 border-ink shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Binder hole effect at the left */}
                  <div className="absolute top-6 -left-3.5 w-6 h-6 rounded-full bg-paper border-2 border-ink z-10 hidden sm:block group-hover:bg-paper-dark transition-colors duration-300"></div>

                  <div className="sm:pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
                      <h5 className="text-lg font-bold font-display text-ink uppercase tracking-tight">
                        {item.role}
                      </h5>
                      <span className="font-mono text-[10px] font-bold text-accent-deep bg-accent-light px-2.5 py-0.5 border border-accent-deep/30 rounded-sm whitespace-nowrap w-fit">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-accent-green font-bold mb-4">
                      {item.company}
                    </p>
                    <p className="text-ink-muted text-sm font-serif leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
