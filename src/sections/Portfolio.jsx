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
      title: "Omni Store Online (Developing....)",
      category: "Web App",
      image: omniStoreImg,
      description: "A full-featured e-commerce platform with a premium shopping experience.",
      tags: ["React", "Tailwind CSS", "Netlify"],
      link: "https://omnistoreonline.netlify.app/",
      github: "https://github.com/AshwinPonnusamy/Omnistore_Online",
    },
    {
      id: 2,
      title: "Titan Muscle Club (Developing....)",
      category: "Web App",
      image: titanMuscleImg,
      description: "Elite fitness platform featuring training programs and world-class facility showcases.",
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "https://titanmuscleclub.netlify.app/",
      github: "https://github.com/AshwinPonnusamy/Titan-Muscle-Club",
    },
    {
      id: 3,
      title: "TN Vote Vision (Developing....)",
      category: "Web App",
      image: voteVisionImg,
      description: "Real-time election results dashboard with live data visualization and deep insights.",
      tags: ["React", "Data Visualization", "SEO"],
      link: "https://tnvotevision.netlify.app/",
      github: "https://github.com/AshwinPonnusamy/TN_vote_vision",
    }
  ];

  const categories = ["All", "Web App", "Mobile App", "Design"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="work" className="py-20 bg-secondary/30">
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
            A collection of projects that showcase my skills and passion for
            building digital products.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-accent text-white shadow-lg shadow-blue-500/25"
                    : "bg-primary border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                {/* Image Container */}
                <div className="h-64 w-full relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform"
                      title="Live Preview"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform"
                      title="View Code"
                    >
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
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary text-xs text-gray-300 rounded"
                      >
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

