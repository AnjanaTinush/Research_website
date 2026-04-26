import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-darkBackgroundVery text-textPrimary dark:text-white pt-20 pb-10 px-6 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="text-3xl font-extrabold mb-6 flex items-center">
            <span>Dnami</span>
            <span className="text-primary">X</span>
          </div>
          <p className="text-textSecondary dark:text-gray-400 text-sm leading-relaxed mb-6">
            Pioneering research in coral reef restoration and marine biodiversity. Join us in protecting our blue planet.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            {['Twitter', 'LinkedIn', 'Github'].map((social) => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xs">
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Research</h4>
          <ul className="space-y-4 text-sm text-textSecondary dark:text-gray-400">
            <li><a href="#methodology" className="hover:text-primary transition-colors">Methodology</a></li>
            <li><a href="#objectives" className="hover:text-primary transition-colors">Objectives</a></li>
            <li><a href="#survey" className="hover:text-primary transition-colors">Literature Survey</a></li>
            <li><a href="#milestones" className="hover:text-primary transition-colors">Milestones</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm text-textSecondary dark:text-gray-400">
            <li><a href="/publications" className="hover:text-primary transition-colors">Publications</a></li>
            <li><a href="/data" className="hover:text-primary transition-colors">Open Data</a></li>
            <li><a href="/tools" className="hover:text-primary transition-colors">Technologies</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Stay Updated</h4>
          <p className="text-sm text-textSecondary dark:text-gray-400 mb-4">Subscribe to our newsletter for latest updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-gray-100 dark:bg-white/5 border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary outline-none"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-r-lg text-sm font-bold hover:opacity-90 transition-opacity">
              Join
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-textSecondary/60 font-bold uppercase tracking-widest gap-4">
        <span>Copyright © {new Date().getFullYear()} DnamiX • All Rights Reserved</span>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
