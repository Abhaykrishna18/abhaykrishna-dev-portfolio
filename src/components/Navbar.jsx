import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-obsidian/80 backdrop-blur-lg border-b border-neonRed/30 shadow-[0_4px_30px_rgba(255,51,75,0.1)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#hero" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-neonRed transition-colors">
              Abhay <span className="bg-gradient-to-r from-neonRed to-ruby text-transparent bg-clip-text">Krishna P</span>
            </span>
            <div className="w-2 h-2 rounded-full bg-neonRed animate-pulse shadow-[0_0_8px_#FF334B]" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white hover:glow-text transition-all duration-300 text-sm font-medium">
                {link}
              </a>
            ))}
            <a 
              href="/Abhay_Krishna_P_Resume.pdf" 
              download="Abhay_Krishna_P_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-crimson to-ruby text-white font-medium hover:shadow-[0_0_15px_rgba(255,51,75,0.6)] transition-all duration-300 border border-neonRed/50 flex items-center gap-2"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-lg border-b border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">
                {link}
              </a>
            ))}
            <a 
              href="/Abhay_Krishna_P_Resume.pdf" 
              download="Abhay_Krishna_P_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-crimson to-ruby text-white font-medium border border-neonRed/50 text-sm mt-3"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
