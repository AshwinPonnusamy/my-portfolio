import { motion } from "framer-motion";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "f9d16005-9dca-4574-a5fb-3d2f41409cd6");

    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("Something went wrong. Try again!");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error(err || "Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-paper relative bg-grain border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-accent-deep mb-3 block">
            05 / CONTACT
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-display uppercase tracking-tight text-ink">
            Get In Touch<span className="text-accent-deep">.</span>
          </h2>
          <div className="h-[3px] bg-ink mt-6 w-full"></div>
          <div className="h-px bg-ink mt-1 w-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Info (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-ink leading-relaxed italic mb-4">
                Let's construct <br />
                something <span className="text-accent-deep">meaningful</span> together.
              </h3>
              <p className="text-ink-muted text-base font-serif leading-relaxed">
                Have an inquiry or want to discuss a collaborative project? Feel
                free to reach out.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t-2 border-ink border-dashed">
              <div className="border-b border-ink/10 pb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-green block mb-1">
                  [01] EMAIL
                </span>
                <a
                  href="mailto:ashwinas8902@gmail.com"
                  className="text-base font-mono font-bold text-ink hover:text-accent-deep transition-colors"
                >
                  ashwinas8902@gmail.com
                </a>
              </div>

              <div className="border-b border-ink/10 pb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-green block mb-1">
                  [02] PHONE
                </span>
                <a
                  href="tel:+916382760258"
                  className="text-base font-mono font-bold text-ink hover:text-accent-deep transition-colors"
                >
                  +91 63827 60258
                </a>
              </div>

              <div className="border-b border-ink/10 pb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-green block mb-1">
                  [03] LOCATION
                </span>
                <a
                  className="text-base font-mono font-bold text-ink hover:text-accent-deep transition-colors"
                  href="https://maps.google.com/?q=Coimbatore, Tamilnadu, India"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coimbatore, TN, India
                </a>
              </div>
            </div>

            <div className="pt-6 flex gap-6 items-center border-t-2 border-ink border-dashed">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-ink-muted">
                DISPATCH CHANNELS —
              </span>
              <a
                href="https://github.com/AshwinPonnusamy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold uppercase tracking-widest text-ink hover:text-accent-deep transition-colors border-b border-ink"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/ashwin-p-2a09b4220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold uppercase tracking-widest text-ink hover:text-accent-deep transition-colors border-b border-ink"
              >
                Linkedin
              </a>
            </div>
          </motion.div>

          {/* Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-paper-dark p-6 md:p-10 border-2 border-ink shadow-retro relative overflow-hidden"
          >
            {/* Telegram Postmark Watermark */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-dashed border-accent-deep/30 flex flex-col items-center justify-center text-[7px] font-mono text-accent-deep/40 uppercase tracking-tighter rotate-12 pointer-events-none select-none">
              <span>POSTAL DEPT</span>
              <span className="font-bold my-0.5 border-y border-accent-deep/20 py-0.5">TELEGRAM</span>
            </div>

            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-ink/40 font-bold border-b border-ink/10 pb-2">
              [ MESSAGE FORM: IA-804 ]
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="sender-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-ink mb-1">
                    SENDER NAME:
                  </label>
                  <input
                    id="sender-name"
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b-2 border-ink/30 focus:border-accent-deep py-2 text-sm font-mono text-ink placeholder-ink/30 focus:outline-none transition-all rounded-none"
                    placeholder="ENTER FULL NAME"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="sender-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-ink mb-1">
                    SENDER EMAIL:
                  </label>
                  <input
                    id="sender-email"
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b-2 border-ink/30 focus:border-accent-deep py-2 text-sm font-mono text-ink placeholder-ink/30 focus:outline-none transition-all rounded-none"
                    placeholder="ENTER EMAIL ADDRESS"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="msg-subject" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-ink mb-1">
                  SUBJECT LINE:
                </label>
                <input
                  id="msg-subject"
                  name="subject"
                  type="text"
                  className="w-full bg-transparent border-b-2 border-ink/30 focus:border-accent-deep py-2 text-sm font-mono text-ink placeholder-ink/30 focus:outline-none transition-all rounded-none"
                  placeholder="ENTER SUBJECT"
                  required
                />
              </div>

              <div>
                <label htmlFor="msg-body" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-ink mb-1">
                  TELEGRAM MESSAGE BODY:
                </label>
                <textarea
                  id="msg-body"
                  name="message"
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-ink/30 focus:border-accent-deep py-2 text-sm font-mono text-ink placeholder-ink/30 focus:outline-none transition-all resize-none rounded-none"
                  placeholder="TYPE MESSAGE HERE..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-ink text-paper py-4 uppercase tracking-[0.2em] text-[11px] font-mono font-bold border-2 border-ink shadow-retro hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                DISPATCH TELEGRAM
                <Send size={12} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
