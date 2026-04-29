import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LOGO_FOR_WHITE_THEME } from "../assets";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Methodology", href: "#methodology" },
    { name: "Milestones", href: "#milestones" },
    { name: "Resources", href: "#resources" },
    { name: "Technologies", href: "#technologies" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl md:px-12">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={LOGO_FOR_WHITE_THEME}
            alt="Logo"
            className="object-contain w-40 h-9"
          />
        </div>

        {/* Desktop Links */}
        <div className="items-center hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-black transition-all duration-300 hover:text-primary"
            >
              {link.name}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button className="text-textPrimary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
