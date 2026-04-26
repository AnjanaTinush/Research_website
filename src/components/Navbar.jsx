import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Resources', href: '#resources' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg  py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-3xl font-black flex items-center tracking-tighter">
          <span className="text-textPrimary">Dnami</span>
          <span className="text-primary">X</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors text-textSecondary hover:text-textPrimary"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button className="text-textPrimary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
