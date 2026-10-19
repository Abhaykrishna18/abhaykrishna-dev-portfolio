import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full glass-panel rounded-none border-x-0 border-b-0 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-neonRed transition-colors">
                Abhay <span className="bg-gradient-to-r from-neonRed to-ruby text-transparent bg-clip-text">Krishna P</span>
              </span>
              <div className="w-2 h-2 rounded-full bg-neonRed animate-pulse shadow-[0_0_8px_#FF334B]" />
            </a>
            <p className="text-gray-400 text-sm text-center md:text-left">
              .NET Developer • Enterprise & ERP Solutions Specialist
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={link === 'Home' ? '#hero' : `#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-400 hover:text-white hover:glow-text transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/abhay-krishna-p-798285229" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
              className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://github.com/Abhaykrishna18" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.instagram.com/__.a_.b_h._a._y.__/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram"
              className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://wa.me/918281604177" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="WhatsApp"
              className="text-gray-400 hover:text-[#25D366] transition-colors duration-300"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Abhay Krishna P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
