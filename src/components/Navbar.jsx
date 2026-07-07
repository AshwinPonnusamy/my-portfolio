import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import profile from '../assets/ashwin.jpg'
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
        isScrolled ? "py-4 glass shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/#home"
          onClick={(e) => handleNavLinkClick(e, "/#home")}
          className="flex items-center text-2xl font-bold font-display text-white tracking-tighter"
        >
          <div className="md:hidden w-7 h-7 rounded-full mt-1">
            <img src={profile} alt="" className="object-cover w-6 h-6 rounded-full" />
          </div>
          <p>
            Ashwin<span className="text-accent">.</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavLinkClick(e, link.path)}
              className="group text-gray-200 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
              <span className="block mx-auto max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => handleNavLinkClick(e, "/#contact")}
            className="px-6 py-2 bg-accent hover:bg-blue-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10 p-6 flex flex-col space-y-4 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => {
                handleNavLinkClick(e, link.path);
                setIsOpen(false);
              }}
              className="group text-gray-300 hover:text-accent text-lg font-medium"
            >
              {link.name}
              <span className="block mx-auto max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-accent"></span>
            </Link>
          ))}
          <Link
            to="/#contact"
            className="px-6 py-3 bg-accent text-center text-white rounded-full font-medium shadow-lg"
            onClick={(e) => {
              handleNavLinkClick(e, "/#contact");
              setIsOpen(false);
            }}
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
