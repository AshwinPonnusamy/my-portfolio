import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
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
        toast.success("Message sent successfully! 🎉");
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
      <section id="contact" className="py-20 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient-accent">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 mb-8">
                Don't like forms? Send me an email. 👋
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent border border-white/5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>

                    <a
      href="mailto:ashwinas8902@gmail.com"
      className="text-white font-medium hover:text-accent transition"
    >
      ashwinas8902@gmail.com
    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent border border-white/5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:+916382760258"
                      className="text-white font-medium hover:text-accent transition"
                    >
                      +91 63827 60258
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent border border-white/5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <a
                      className="text-white font-medium hover:text-accent transition"
                      href="https://maps.google.com/?q=Coimbatore, Tamilnadu, India"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Coimbatore, Tamilnadu, India
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/AshwinPonnusamy"
                    target="_blank"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-black transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashwin-p-2a09b4220"
                    target="_blank"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/achu_ashwin_5/"
                    target="_blank"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary p-8 rounded-2xl border border-white/5"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
