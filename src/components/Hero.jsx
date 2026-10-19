import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-neonRed font-mono font-medium tracking-wider">Hello World,</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            I'm <span className="bg-gradient-to-r from-neonRed to-ruby text-transparent bg-clip-text">Abhay Krishna P</span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-gray-300 font-medium">
            DotNet Developer | Enterprise & ERP Solutions Specialist
          </h3>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Dedicated .NET Developer with 2.5+ years of experience building scalable enterprise web applications, ERP solutions, and ZATCA-compliant e-invoicing systems.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 rounded-lg bg-crimson text-white font-medium hover:bg-neonRed hover:shadow-[0_0_20px_rgba(255,51,75,0.6)] transition-all duration-300">
              Explore Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg glass-panel hover:glass-panel-hover text-white font-medium transition-all duration-300">
              Get In Touch
            </a>
            <a 
              href="/Abhay_Krishna_P_Resume.pdf" 
              download="Abhay_Krishna_P_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3 rounded-lg border border-neonRed/50 bg-neonRed/10 hover:bg-neonRed text-white font-medium hover:shadow-[0_0_20px_rgba(255,51,75,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-full min-h-[400px] flex items-center justify-center"
        >
          {/* Abstract representation of skill cards floating */}
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute top-10 left-10 glass-panel p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-500 neon-border z-20">
              <span className="text-2xl font-bold text-white">.NET Core</span>
            </div>
            <div className="absolute top-1/3 right-4 glass-panel p-6 transform rotate-12 hover:rotate-0 transition-transform duration-500 border border-white/20 z-10">
              <span className="text-2xl font-bold text-gray-200">C#</span>
            </div>
            <div className="absolute bottom-20 left-1/4 glass-panel p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/20 z-30">
              <span className="text-2xl font-bold text-gray-200">SQL Server</span>
            </div>
            
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neonRed/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
