import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../assets/ashwin.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    // { name: "Services", path: "/#services" },
    { name: "Work", path: "/#work" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavLinkClick = (e, path) => {
    if (path.startsWith("/#")) {
      const targetId = path.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, null, path);
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-paper/95 backdrop-blur-md border-b-2 border-ink shadow-sm"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/#home"
          onClick={(e) => handleNavLinkClick(e, "/#home")}
          className="flex items-center text-2xl font-bold font-display text-ink tracking-tight"
        >
          <div className="md:hidden w-7 h-7 rounded-full mt-1 mr-2 overflow-hidden border border-ink/20">
            <img
              src={profile}
              alt="Ashwin"
              className="object-cover w-full h-full sepia-[0.3] contrast-[1.05]"
            />
          </div>
          <p className="font-display">
            Ashwin<span className="text-accent-deep">.</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavLinkClick(e, link.path)}
              className="text-ink/80 hover:text-accent-deep transition-colors text-xs font-mono uppercase tracking-widest flex items-center"
            >
              <span className="text-[10px] text-accent-deep/70 mr-1.5 font-bold">
                [0{idx + 1}]
              </span>
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => handleNavLinkClick(e, "/#contact")}
            className="border-2 border-ink px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-ink bg-transparent hover:bg-ink hover:text-paper shadow-[3px_3px_0px_0px_rgba(44,39,36,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ink focus:outline-none p-2 border border-ink/20 hover:bg-paper-dark rounded-none transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-paper border-b-2 border-ink p-6 flex flex-col space-y-4 animate-fade-in shadow-retro bg-grain">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => {
                handleNavLinkClick(e, link.path);
                setIsOpen(false);
              }}
              className="text-ink hover:text-accent-deep text-sm font-mono uppercase tracking-widest py-2 border-b border-ink/5 flex items-center"
            >
              <span className="text-[11px] text-accent-deep/70 mr-2 font-bold">
                [0{idx + 1}]
              </span>
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="border-2 border-ink text-center text-ink py-2 text-sm font-mono font-bold uppercase tracking-widest bg-transparent hover:bg-ink hover:text-paper shadow-[3px_3px_0px_0px_rgba(44,39,36,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
            onClick={(e) => {
              handleNavLinkClick(e, "/#contact");
              setIsOpen(false);
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
