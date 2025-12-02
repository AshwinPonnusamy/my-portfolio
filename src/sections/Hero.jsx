import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full glass text-accent text-sm font-medium tracking-wider uppercase mb-6 inline-block">
              Available for Freelance
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building <span className="text-gradient-accent">Digital</span>{" "}
              <br />
              Experiences
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            I'm a creative developer specializing in building immersive web
            applications with modern technologies and clean aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-accent hover:bg-blue-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-[90%] aspect-square max-w-[500px] mx-auto">
            {/* Abstract Shapes/Placeholder for Photo */}
            <div className="absolute inset-0 bg-linear-to-tr from-accent to-purple-500 rounded-4xl rotate-6 opacity-20 blur-lg"></div>
            <div className="absolute inset-0 bg-secondary rounded-4xl border border-white/10 overflow-hidden flex items-center justify-center group">
              {/* Placeholder Image or 3D Element */}
              <div className="relative w-full h-full bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-9xl font-bold text-white/5 select-none ">
                  <img
                    src="/src/assets/ashwin.jpg"
                    alt="profile-image"
                    className="object-cover opacity-70"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 p-4 glass rounded-2xl animate-bounce duration-3000">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <img
                      src="/src/assets/icons/reactIcon.svg"
                      alt="angular-image"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 p-4 glass rounded-2xl animate-bounce duration-4000">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <img
                      src="/src/assets/icons/angularIcon.svg"
                      alt="angular-image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
