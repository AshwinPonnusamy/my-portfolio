import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import ashwinImg from "../assets/ashwin.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20 px-6 border-b-2 border-ink bg-grain"
    >
      {/* Subtle Retro Page Flourish in the background */}
      <div className="absolute top-24 left-6 hidden xl:block font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted/30 select-none [writing-mode:vertical-lr]">
        portfolio index / v.1.0.5
      </div>
      <div className="absolute bottom-12 right-6 hidden xl:block font-mono text-[9px] uppercase tracking-[0.3em] text-ink-muted/30 select-none [writing-mode:vertical-lr] rotate-180">
        creative frontend engineer
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
        {/* Left Side: Typography & Description (Column Span 8) */}
        <div className="lg:col-span-8 flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-deep border border-dashed border-accent-deep/40 px-3 py-1 bg-accent-deep/3 inline-block mb-8 select-none">
              [ status: open to work ]
            </span>
            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-bold font-display leading-[0.88] tracking-tight uppercase text-ink select-none mb-8">
              Building <br />
              <span className="italic font-normal text-accent-green tracking-normal font-serif lowercase my-1 inline-block">
                — digital
              </span>{" "}
              <br />
              Experiences
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-ink-muted text-base sm:text-lg max-w-lg leading-relaxed font-serif italic mb-10"
          >
            Creative developer specializing in crafting immersive web
            applications with tactile vintage styling, modern responsiveness, and meticulous attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#work"
              className="border-2 border-ink bg-ink text-paper px-8 py-3.5 uppercase tracking-widest text-[11px] font-mono font-bold shadow-retro-green hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              View Selected Work
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="/Ashwin_Resume.pdf"
              download="Ashwin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-ink text-ink bg-transparent px-8 py-3.5 uppercase tracking-widest text-[11px] font-mono font-bold shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Download Resume
              <Download
                size={12}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Portrait framed print (Column Span 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 w-full lg:sticky lg:top-32"
        >
          <div className="bg-paper-dark p-6 border-2 border-ink shadow-retro max-w-sm mx-auto relative group">
            {/* Vintage Stamped Badge Overlay */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-ink bg-accent-gold flex flex-col items-center justify-center text-[8px] font-mono font-bold text-ink uppercase tracking-tighter rotate-12 shadow-sm z-20 group-hover:rotate-6 transition-transform duration-500 select-none">
              <span className="text-[7px]">APPROVED</span>
              <span className="text-[10px] leading-none my-0.5 border-y border-ink/40 py-0.5 px-1">EST.2023</span>
              <span className="text-[6px]">TN IND</span>
            </div>

            {/* Framed Print look */}
            <div className="aspect-3/4 w-full overflow-hidden bg-paper border border-ink/30 relative">
              <img
                src={ashwinImg}
                alt="Ashwin Ponnusamy"
                className="w-full h-full object-cover sepia-[0.35] contrast-[1.08] brightness-[0.97] group-hover:sepia-[0.1] group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
            </div>

            {/* Museum Catalogue Label */}
            <div className="mt-4 flex justify-between text-[10px] uppercase tracking-wider text-ink font-mono font-bold">
              <span>Plate 01 — Ashwin P.</span>
              <span className="text-accent-deep">[Developer]</span>
            </div>

            <div className="mt-6 border-t-2 border-ink border-dashed pt-4 flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-[0.15em] text-ink-muted font-mono font-bold">
                VOL. 26 / COIMBATORE
              </span>
              <div className="flex gap-1.5">
                <span className="font-mono text-[9px] border border-ink/30 px-1.5 py-0.5 text-ink/75 bg-paper shadow-[1px_1px_0px_0px_rgba(44,39,36,1)] select-none">
                  React
                </span>
                <span className="font-mono text-[9px] border border-ink/30 px-1.5 py-0.5 text-ink/75 bg-paper shadow-[1px_1px_0px_0px_rgba(44,39,36,1)] select-none">
                  TS
                </span>
                <span className="font-mono text-[9px] border border-ink/30 px-1.5 py-0.5 text-ink/75 bg-paper shadow-[1px_1px_0px_0px_rgba(44,39,36,1)] select-none">
                  CSS
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
