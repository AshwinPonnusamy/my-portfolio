import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Project Images
import omniStoreImg from "../assets/projects/omni-store.png";
import titanMuscleImg from "../assets/projects/titan-muscle.png";
import voteVisionImg from "../assets/projects/vote-vision.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Omni Store Online",
      category: "Web App",
      image: omniStoreImg,
      description:
        "A full-featured e-commerce platform with a premium shopping experience.",
      tags: ["React", "Tailwind CSS", "Netlify"],
      link: "https://omnistoreonline.netlify.app/",
      github: "https://github.com/AshwinPonnusamy/Omnistore_Online",
    },
    {
      id: 2,
      title: "Titan Muscle Club",
      category: "Web App",
      image: titanMuscleImg,
      description:
        "Elite fitness platform featuring training programs and world-class facility showcases.",
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "https://titanmuscleclub.netlify.app/",
      github: "https://github.com/AshwinPonnusamy/Titan-Muscle-Club",
    },
    {
      id: 3,
      title: "TN Vote Vision",
      category: "Web App",
      image: voteVisionImg,
      description:
        "Real-time election results dashboard with live data visualization and deep insights.",
      tags: ["React", "Data Visualization", "SEO"],
      link: "https://tnvotevision.netlify.app/",
      github: "https://github.com/AshwinPonnusamy/TN_vote_vision",
    },
  ];

  const categories = ["All", "Web App", "Mobile App", "Design"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Helper for card grid sizes
  const getLayoutClasses = () => {
    return "col-span-12 md:col-span-6 lg:col-span-4";
  };

  return (
    <section id="work" className="py-24 bg-paper border-b-2 border-ink relative bg-grain">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-accent-deep mb-3 block">
              04 / WORK
            </span>
            <h2 className="text-5xl md:text-6xl font-bold font-display uppercase tracking-tight text-ink">
              Selected Works<span className="text-accent-deep">.</span>
            </h2>
            <div className="h-[3px] bg-ink mt-6 w-56"></div>
            <div className="h-px bg-ink mt-1 w-56"></div>
          </motion.div>

          {/* Typography Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t-2 border-b-2 border-ink border-dashed py-4 w-full md:w-auto"
          >
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                <button
                  onClick={() => setFilter(cat)}
                  className={`text-xs font-mono font-bold uppercase tracking-widest transition-colors relative pb-1 ${
                    filter === cat
                      ? "text-accent-deep border-b-2 border-accent-deep font-black"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
                {idx < categories.length - 1 && (
                  <span className="text-ink/20 font-mono text-xs select-none">/</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className={`group ${getLayoutClasses()}`}
              >
                {/* Framed Print Card styled like vintage record sleeve / book cover */}
                <div className="bg-paper-dark p-6 border-2 border-ink shadow-retro flex flex-col h-full hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 relative overflow-hidden">
                  {/* Decorative HI-FI Sticker */}
                  <div className="absolute top-2 right-2 bg-accent-gold text-ink text-[7px] font-mono font-bold px-2 py-0.5 border border-ink rotate-6 shadow-sm z-20 select-none">
                    STEREO // HI-FI
                  </div>

                  {/* Spine card backing effect */}
                  <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-accent-deep border-r-2 border-ink"></div>

                  {/* Image Container with thick border */}
                  <div className="aspect-4/3 w-full overflow-hidden bg-paper border-2 border-ink relative ml-1 sm:ml-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover sepia-[0.25] contrast-[1.05] brightness-[0.98] group-hover:sepia-[0.05] group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                  </div>

                  {/* Caption & Metadata in small caps */}
                  <div className="mt-6 flex flex-col justify-between grow ml-1 sm:ml-2">
                    <div>
                      <div className="flex justify-between items-baseline mb-3 border-b border-ink/10 pb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-green">
                          [{project.category}]
                        </span>

                        <div className="flex gap-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink hover:text-accent-deep text-[10px] uppercase font-mono font-bold tracking-wider flex items-center gap-1 transition-colors border-b border-transparent hover:border-accent-deep"
                          >
                            Live
                            <ExternalLink size={9} />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink hover:text-accent-deep text-[10px] uppercase font-mono font-bold tracking-wider flex items-center gap-1 transition-colors border-b border-transparent hover:border-accent-deep"
                          >
                            Code
                            <Github size={9} />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold font-display text-ink uppercase tracking-tight mb-3">
                        {project.title}
                      </h3>

                      <p className="text-ink-muted text-sm font-serif leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-ink border-dashed mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] font-bold border border-ink/30 px-2.5 py-0.5 text-ink bg-paper shadow-[1px_1px_0px_0px_rgba(44,39,36,1)] select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
